import {
  differenceInMilliseconds,
  getHours,
  getMinutes,
  getYear,
  setYear,
  startOfYear,
} from "./deps.ts";

function nextNewYear(date: Date): Date {
  return startOfYear(setYear(date, getYear(date) + 1));
}

export function milliSecondsFromNextNewYear(date: Date): number {
  return differenceInMilliseconds(nextNewYear(date), date);
}

export function isFirstHourOfDay(date: Date): boolean {
  return getHours(date) == 0 && getMinutes(date) <= 30;
}
