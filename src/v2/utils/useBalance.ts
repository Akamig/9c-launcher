import { useMemo } from "react";
import {
  useGetNcgBalanceQuery,
  useBalanceByAgentSubscription,
} from "../generated/graphql";
import { useStore } from "./useStore";

export function useBalance() {
  const account = useStore("account");
  const { data: ncgBalanceQuery } = useGetNcgBalanceQuery({
    variables: {
      address: account.selectedAddress,
    },
    skip: !account.isLogin,
  });
  const { data: balance } = useBalanceByAgentSubscription({
    variables: {
      address: account.selectedAddress,
    },
    skip: !account.isLogin,
  });

  return useMemo(
    () => Number(balance?.balanceByAgent ?? ncgBalanceQuery?.goldBalance) ?? 0,
    [balance, ncgBalanceQuery]
  );
}
