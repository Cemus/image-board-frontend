import { format, parseISO } from "date-fns";

export default function dateFormat(date: string): string {
  const dateISO = parseISO(date);

  const dateMDY = format(dateISO, "MM/dd/yy");
  const dateDay = format(dateISO, "E");
  const dateHour = format(dateISO, "kk:mm");

  const dateResult = `${dateMDY} (${dateDay}) ${dateHour}`;
  return dateResult;
}
