import { Chips } from "common/components";
import { useState } from "react";
import { useCurrencies } from "../../hooks/currencies.hook";
import { FilterProperties } from "./market-filter-properties.interface";
import { FILTER_DEFAULT_ITEMS } from "./market-filter.constant";

export const Filter = ({ onChange }: FilterProperties) => {
  const [selected, setSelected] = useState<string[]>([]);

  const { data, isLoading } = useCurrencies();

  const onClick = (caption: string) => {
    caption = caption.toUpperCase();

    let newSelectedValue = [...selected];

    if (selected.includes(caption)) {
      newSelectedValue.splice(
        selected.findIndex((s) => s === caption),
        1
      );
    } else {
      newSelectedValue = [...selected, caption];
    }

    setSelected(newSelectedValue);

    if (onChange) onChange(newSelectedValue);
  };

  const getDefaultItems = (length: number) => {
    return Array.from({ length }, (v, k) => k + 1);
  };

  const renderPlaceholders = () =>
    getDefaultItems(FILTER_DEFAULT_ITEMS).map((item) => (
      <Chips
        key={`filter-item-${item}`}
        className="bg-gray-100 cursor-default min-w-medium h-medium"
        caption=""
      />
    ));

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {isLoading
        ? renderPlaceholders()
        : data?.map((symbol) => (
            <Chips
              key={`filter-${symbol}`}
              caption={symbol.toUpperCase()}
              onClick={onClick}
              isActive={selected.includes(symbol.toUpperCase())}
            />
          ))}
    </div>
  );
};
