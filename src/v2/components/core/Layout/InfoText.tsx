import React, { useMemo, useState, useEffect } from "react";
import { observer } from "mobx-react";

import { useStore } from "../../../utils/useStore";
import { clipboard, ipcRenderer } from "electron";
import { get as getConfig, NodeInfo } from "../../../../config";
import { useTipSubscription } from "../../../generated/graphql";
import { styled } from "src/v2/stitches.config";
import toast from "react-hot-toast";

const awsSinkGuid: string | undefined = ipcRenderer.sendSync(
  "get-aws-sink-cloudwatch-guid"
);

const InfoTextStyled = styled("div", {
  position: "fixed",
  bottom: 50,
  left: 50,
  dragable: false,
});

function InfoText() {
  const account = useStore("account");
  const [node, setNode] = useState<string>("loading");

  const debugValue = useMemo(
    () =>
      [
        `APV: ${getConfig("AppProtocolVersion")}`,
        account.isLogin && `Account: ${account.selectedAddress}`,
        `Node: ${node}`,
        awsSinkGuid && `Client ID: ${awsSinkGuid}`,
      ]
        .filter(Boolean)
        .join("\n"),
    [account.isLogin, account.selectedAddress, node, awsSinkGuid]
  );

  const onClick = () => {
    clipboard.writeText(debugValue);
    toast("Copied diagnostic inforomation.", {
      position: "bottom-left",
      id: "diagnostics-copied",
    });
  };

  const { data: blockTip } = useTipSubscription();

  useEffect(
    () =>
      void (async () => {
        if (node !== "loading") return;
        const nodeInfo: NodeInfo = await ipcRenderer.invoke("get-node-info");
        setNode(nodeInfo.host);
      })(),
    [node]
  );

  return (
    <InfoTextStyled onClick={onClick}>
      node: {node}
      <br />
      tip: {blockTip?.tipChanged?.index || 0}
      <br />
      {`version: v${getConfig("AppProtocolVersion").split("/")[0]}`}
    </InfoTextStyled>
  );
}

export default observer(InfoText);
