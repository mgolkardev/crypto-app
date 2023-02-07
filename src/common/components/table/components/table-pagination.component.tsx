import classNames from "classnames";
import { useState } from "react";
import { TablePaginationProperties } from "./table-pagination-properties.interface";
import { TABLE_MAXIMUM_SHOW_PAGE } from "./table-pagination.constant";

export const TablePagination = ({
  total,
  page,
  perPage,
  onChange,
}: TablePaginationProperties) => {
  const [selectedPageNumber, setSelectedPageNumber] = useState(page);

  const totalPageItems = Math.ceil(total / perPage);
  const halfShowPage = TABLE_MAXIMUM_SHOW_PAGE / 2;

  const generatePages = (length: number, hasMore: boolean) => {
    if (hasMore) {
      return Array.from(
        { length: TABLE_MAXIMUM_SHOW_PAGE },
        (v, k) =>
          k +
          (selectedPageNumber > halfShowPage
            ? selectedPageNumber > totalPageItems - halfShowPage
              ? totalPageItems - (TABLE_MAXIMUM_SHOW_PAGE - 1)
              : selectedPageNumber - halfShowPage
            : 1)
      );
    }

    return Array.from({ length }, (v, k) => k + 1);
  };

  const onPageClick = (selected: number) => {
    setSelectedPageNumber(selected);

    if (onChange) {
      onChange(selected);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center items-center sm:justify-end">
      {generatePages(
        totalPageItems,
        totalPageItems > TABLE_MAXIMUM_SHOW_PAGE
      ).map((pageNumber) => (
        <i
          key={`page-${pageNumber}`}
          className={classNames(
            "text-gray-600 p-2 not-italic font-mono cursor-pointer",
            {
              "font-bold text-lg text-gray-800":
                pageNumber === selectedPageNumber,
            }
          )}
          onClick={() => onPageClick(pageNumber)}
        >
          {pageNumber}
        </i>
      ))}
    </div>
  );
};
