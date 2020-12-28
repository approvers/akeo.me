import {
  differenceInMilliseconds,
  getMonth,
  getYear,
  isFirstDayOfMonth,
  setYear,
  startOfYear,
} from "./deps.ts";

function nextNewYear(): Date {
  return startOfYear(setYear(new Date(), getYear(new Date()) + 1));
}

export function milliSecondsFromNextNewYear(): number {
  return differenceInMilliseconds(nextNewYear(), new Date());
}

export function isFirstDayOfYear(date: Date): boolean {
  return isFirstDayOfMonth(date) && getMonth(date) === 1;
}
