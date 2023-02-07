import { axiosClient } from "common/utils/axios-client";

export const getCurrencies = async () => {
  const { data } = await axiosClient.get<string[]>(
    "/simple/supported_vs_currencies"
  );
  return data;
};
