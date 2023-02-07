import React, { useState } from "react";
import { useMarkets } from "./hooks/markets.hook";
import { Table } from "common/components";
import Image from "next/image";
import { CurrencyDto } from "./apis/dtos/currency.dto";
import { formatMoney, formatNumber } from "common/helpers/number.helper";
import classNames from "classnames";
import { Filter } from "./components/market-filter/market-filter.component";
import { TableColumn } from "common/components/table/table-properties.interface";
import {
  MARKET_PER_PAGE,
  MARKET_TOTAL,
} from "./apis/constants/markets.constant";

export const Market = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  const { data, isLoading } = useMarkets(page, selected);

  const columns: TableColumn[] = [
    {
      title: "#",
      name: "index",
      render: (record: CurrencyDto, index: number) =>
        formatNumber((page - 1) * MARKET_PER_PAGE + index + 1),
    },
    {
      title: "Name",
      name: "name",
      render: (record: CurrencyDto) => (
        <div className="flex items-center gap-4">
          <Image src={record.image} alt={record.name} width={40} height={40} />
          <span className="flex flex-col gap-2 md:flex-row md:items-center">
            <span className="font-bold">{record.symbol.toUpperCase()}</span>
            <span className="text-gray-400 text-xs">{record.name}</span>
          </span>
        </div>
      ),
    },
    {
      title: "Price",
      name: "current_price",
      type: "currency",
      className: "hidden sm:table-cell",
    },
    {
      title: "24h Changes",
      name: "price_change_percentage_24h",
      className: "hidden sm:table-cell",
      render: (record: CurrencyDto) => (
        <span
          className={classNames({
            "text-green-600": record.price_change_percentage_24h > 0,
            "text-red-600": record.price_change_percentage_24h < 0,
          })}
        >
          {record.price_change_percentage_24h > 0 ? "+" : ""}
          {formatMoney(record.price_change_percentage_24h)}%
        </span>
      ),
    },
    {
      title: (
        <span className="flex flex-col">
          <span>Price</span>
          <span>24h Changes</span>
        </span>
      ),
      name: "price_change_percentage_24h",
      className: "sm:hidden",
      render: (record: CurrencyDto) => (
        <span className="flex flex-col">
          <span>${formatMoney(record.current_price)}</span>
          <span
            className={classNames({
              "text-green-600": record.price_change_percentage_24h > 0,
              "text-red-600": record.price_change_percentage_24h < 0,
            })}
          >
            {record.price_change_percentage_24h > 0 ? "+" : ""}
            {formatMoney(record.price_change_percentage_24h)}%
          </span>
        </span>
      ),
    },
    {
      title: "Volume",
      name: "total_volume",
      type: "currency",
      className: "hidden sm:table-cell",
    },
    {
      title: "Maket Cap",
      name: "market_cap",
      type: "currency",
    },
  ];

  return (
    <div className={"max-w-5xl ml-auto mr-auto min-w-mobile"}>
      <h1 className="font-bold text-2xl mb-6">Markets</h1>

      <Filter
        onChange={(selected) => {
          console.log({ selected });
          setSelected(selected);
        }}
      />

      <Table
        className="ml-auto mr-auto bg-white mt-4 mb-4"
        columns={columns}
        data={data}
        isLoading={isLoading}
        pagination={{
          page,
          perPage: MARKET_PER_PAGE,
          total: MARKET_TOTAL,
          onChange: (page) => {
            setPage(page);
          },
        }}
      />
    </div>
  );
};
