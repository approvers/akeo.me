import {
  differenceInMilliseconds,
  getMonth,
  getYear,
  isFirstDayOfMonth,
  setYear,
  startOfYear,
} from "./deps.ts";

function nextNewYear(date: Date): Date {
  return startOfYear(setYear(date, getYear(date) + 1));
}

export function milliSecondsFromNextNewYear(date: Date): number {
  return differenceInMilliseconds(nextNewYear(date), date);
}

export function isFirstDayOfYear(date: Date): boolean {
  return isFirstDayOfMonth(date) && getMonth(date) === 1;
}
