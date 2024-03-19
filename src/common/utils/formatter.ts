import dayjs from "dayjs";

// Date formatter
export const formatter = (date: string, format: string) => {
  return dayjs(date).format(format);
};
