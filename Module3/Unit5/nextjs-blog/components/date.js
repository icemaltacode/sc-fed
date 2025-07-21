import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  console.log(dateString);
  const date = parseISO(dateString);
  console.log(date);
  return <time dateTime={dateString}>{format(date, "do LLLL yyyy")}</time>;
}