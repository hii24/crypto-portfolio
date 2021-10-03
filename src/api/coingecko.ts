import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface PriceResponse {
  [coinId: string]: {
    usd: number;
    usd_24h_change: number;
  };
}

interface HistoryPoint {
  timestamp: number;
  price: number;
}

export const coingeckoApi = createApi({
  reducerPath: "coingecko",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3" }),
  endpoints: (builder) => ({
    getPrices: builder.query<PriceResponse, string[]>({
      query: (ids) =>
        `/simple/price?ids=${ids.join(",")}&vs_currencies=usd&include_24hr_change=true`,
      keepUnusedDataFor: 60,
    }),
    getHistory: builder.query<HistoryPoint[], { id: string; days: number }>({
      query: ({ id, days }) => `/coins/${id}/market_chart?vs_currency=usd&days=${days}`,
      transformResponse: (raw: { prices: Array<[number, number]> }) =>
        raw.prices.map(([timestamp, price]) => ({ timestamp, price })),
    }),
  }),
});

export const { useGetPricesQuery, useGetHistoryQuery } = coingeckoApi;
