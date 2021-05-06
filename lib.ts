import {
  differenceInMilliseconds,
  getHours,
  getMinutes,startOfDay,
  setDay,
  getDay,
} from "./deps.ts";

function nextNewDay(date: Date): Date {
  return startOfDay(setDay(date, getDay(date) + 1, {}));
}

export function milliSecondsFromNextNewDay(date: Date): number {
  return differenceInMilliseconds(nextNewDay(date), date);
}

export function isFirstHourOfDay(date: Date): boolean {
  return getHours(date) == 0 && getMinutes(date) <= 30;
}
