import { axiosClient } from "common/utils/axios-client";
import { MARKET_PER_PAGE } from "./constants/markets.constant";
import { CurrencyDto } from "./dtos/currency.dto";

export const getMarkets = async (page: number, ids?: string[]) => {
  const { data } = await axiosClient.get<CurrencyDto[]>(`/coins/markets`, {
    params: {
      vs_currency: "usd",
      price_change_percentage: "24h",
      per_page: MARKET_PER_PAGE,
      page,
      ids: ids?.join(","),
    },
  });
  return data;
};
