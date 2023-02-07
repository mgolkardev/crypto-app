import classNames from "classnames";
import { ChipsProperties } from "./chips-properties.interface";

export const Chips = ({
  caption,
  isActive,
  className,
  onClick,
}: ChipsProperties) => {
  return (
    <span
      onClick={() => {
        if (onClick) {
          onClick(caption);
        }
      }}
      className={classNames(
        "pr-4 pl-4 pt-2 pb-2 border-2 border-gray-100 cursor-pointer rounded-full bg-white",
        {
          "!bg-blue-500 text-white": isActive,
        },
        className
      )}
    >
      {caption}
    </span>
  );
};
