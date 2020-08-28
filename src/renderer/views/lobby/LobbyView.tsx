import * as React from "react";
import {
  Button as ButtonOrigin,
  ButtonProps,
  Container,
  LinearProgress,
  TextField,
} from "@material-ui/core";
import mixpanel from "mixpanel-browser";
import { IStoreContainer } from "../../../interfaces/store";
import { inject, observer } from "mobx-react";
import {
  useActivateMutation,
  useActivationLazyQuery,
} from "../../../generated/graphql";
import lobbyViewStyle from "./LobbyView.style";

import { useLocale } from "../../i18n";

interface ILobbyViewProps extends IStoreContainer {
  onLaunch: () => void;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Button = (
  props: Omit<ButtonProps, "fullWidth" | "variant" | "color">
) => <ButtonOrigin fullWidth variant="contained" color="primary" {...props} />;

const LobbyView = observer((props: ILobbyViewProps) => {
  const classes = lobbyViewStyle();
  const { accountStore, gameStore, standaloneStore } = props;
  const [
    activation,
    { loading, error: statusError, data: status },
  ] = useActivationLazyQuery();
  const [
    activate,
    { data: isActivated, error: activatedError },
  ] = useActivateMutation();
  const [activationKey, setActivationKey] = React.useState("");
  const [polling, setPollingState] = React.useState(false);

  const locale = useLocale("lobby");

  const handleActivateSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    activate({
      variables: {
        encodedActivationKey: activationKey,
      },
    }).then(async (value) => {
      if (!value.data?.activationStatus?.activateAccount) return;
      setPollingState(true);
      while (true) {
        await sleep(1000);
        await activation();
        if (status?.activationStatus.activated) break;
      }
      setPollingState(false);
    });
  };

  const privateKeyChangeHandle = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setActivationKey(event.target.value);
    },
    [event]
  );

  const handleIsActivationSuccess = React.useCallback(() => {
    if (activatedError?.message !== undefined) {
      return true;
    }
    return false;
  }, [activatedError]);

  React.useEffect(() => {
    if (
      standaloneStore.IsPreloadEnded &&
      standaloneStore.IsSetPrivateKeyEnded
    ) {
      activation();
    }
  }, [standaloneStore.IsPreloadEnded, standaloneStore.IsSetPrivateKeyEnded]);

  let child: JSX.Element;

  if (loading || polling) {
    child = <p className={classes.verifing}>{locale("verifying")}</p>;
  } else if (!standaloneStore.IsPreloadEnded) {
    child = <PreloadWaitingButton />;
  } else if (status?.activationStatus.activated) {
    child = <GameStartButton {...props} />;
  } else {
    child = (
      <form onSubmit={handleActivateSubmit}>
        <TextField
          error={handleIsActivationSuccess()}
          label={locale("activationKey")}
          onChange={privateKeyChangeHandle}
          fullWidth
        />
        <ButtonOrigin
          color="primary"
          variant="contained"
          className={classes.activation}
          type="submit"
        >
          {locale("activation")}
        </ButtonOrigin>
      </form>
    );
  }
  return <Container>{child}</Container>;
});

const PreloadWaitingButton = () => {
  const locale = useLocale("lobby");
  return (
    <Button disabled={true} className={lobbyViewStyle().gameStartButton}>
      {locale("preloading")}
    </Button>
  );
};

const GameStartButton = observer((props: ILobbyViewProps) => {
  const { accountStore, gameStore, standaloneStore } = props;
  const classes = lobbyViewStyle();
  const handleStartGame = () => {
    mixpanel.track("Launcher/Unity Player Start");
    gameStore.startGame(accountStore.privateKey);
    props.onLaunch();
  };

  const locale = useLocale("lobby");

  React.useEffect(() => {
    if (standaloneStore.IsPreloadEnded) {
      handleStartGame();
    }
  }, [standaloneStore.IsPreloadEnded]);

  return (
    <Button
      disabled={gameStore.isGameStarted}
      onClick={handleStartGame}
      className={classes.gameStartButton}
      id="start-game"
    >
      {gameStore.isGameStarted
        ? `${locale("nowRunning")}`
        : `${locale("startGame")}`}
    </Button>
  );
});

export default inject(
  "accountStore",
  "gameStore",
  "standaloneStore"
)(LobbyView);
