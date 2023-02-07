import classNames from "classnames";
import { formatMoney } from "common/helpers/number.helper";
import { TablePagination } from "./components/table-pagination.component";
import { TableProperties } from "./table-properties.interface";
import { TABLE_DEFAULT_ROW_NUMBER } from "./table.constant";

export const Table = ({
  className,
  columns,
  data,
  isLoading,
  pagination,
}: TableProperties) => {
  const getDefaultRowNumber = (length: number) => {
    return Array.from({ length }, (v, k) => k + 1);
  };

  const renderPlaceholders = () =>
    getDefaultRowNumber(pagination?.perPage ?? TABLE_DEFAULT_ROW_NUMBER)?.map(
      (rowNumber) => (
        <tr
          key={`table-tr-placeholder-${rowNumber}`}
          className="border-b-2 last:border-b-0 border-gray-100"
        >
          {columns.map(({ name, className }, i) => (
            <td
              key={`table-td-placeholder-${name}-${i}`}
              className={classNames("p-2", className)}
            >
              <span className="block bg-gray-100 rounded-xl w-full h-medium"></span>
            </td>
          ))}
        </tr>
      )
    );

  return (
    <>
      <table
        className={classNames(
          "table-auto w-full rounded-xl overflow-hidden",
          className
        )}
      >
        <thead>
          <tr>
            {columns.map(({ title, className }) => (
              <th
                key={`table-th-${title}`}
                className={classNames(
                  "sticky top-0 z-10 p-2 text-left bg-gray-100 text-gray-600",
                  className
                )}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            renderPlaceholders()
          ) : data && data.length > 0 ? (
            data.map((item, i) => (
              <tr
                key={`table-tr-${item}-${i}`}
                className="border-b-2 last:border-b-0 border-gray-100"
              >
                {columns.map(({ type = "text", name, className, render }) => (
                  <td
                    key={`table-td-${name}`}
                    className={classNames("p-2", className)}
                  >
                    {render
                      ? render(item, i)
                      : type === "currency"
                      ? `$${formatMoney(item[name])}`
                      : item[name]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center p-10">
                Not Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {pagination && pagination.total > pagination.perPage && (
        <TablePagination {...pagination} />
      )}
    </>
  );
};
