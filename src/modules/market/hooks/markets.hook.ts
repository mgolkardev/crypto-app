import { useQuery } from "@tanstack/react-query";
import { getMarkets } from "../apis/markets.api";

export const useMarkets = (page: number, ids?: string[]) => {
  return useQuery(["markets", page, ids], () => getMarkets(page, ids));
};
