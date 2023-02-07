import { useQuery } from "@tanstack/react-query";
import { getCurrencies } from "../apis/currencies.api";

export const useCurrencies = () => {
  return useQuery(["currencies"], () => getCurrencies());
};
