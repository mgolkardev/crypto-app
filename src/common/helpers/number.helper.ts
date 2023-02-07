export const formatMoney = (
  value: number | string | undefined | null
): string => {
  if (value == null) {
    return "0";
  }

  if (typeof value !== "number") {
    value = parseFloat(value.toString());
  }

  let postfix = "";

  if (Math.abs(value) >= 1.0e6) {
    postfix = "M";
    value = value / 1.0e6;
  }

  return (
    value.toLocaleString(undefined, {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }) + postfix
  );
};

export const formatNumber = (
  value: number | string | undefined | null
): string => {
  if (value == null) {
    return "0";
  }

  if (typeof value !== "number") {
    value = parseFloat(value.toString());
  }

  return value.toLocaleString(undefined, {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });
};
