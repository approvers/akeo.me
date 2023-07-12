import {
  differenceInMilliseconds,
  getHours,
  getMinutes,
  startOfDay,
  setDay,
  getDay,
} from "date-fns";
import HappyEffects from "../islands/happy-effects.tsx";
import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

function nextNewDay(date: Date): Date {
  return startOfDay(setDay(date, getDay(date) + 1, {}));
}

function milliSecondsFromNextNewDay(date: Date): number {
  return differenceInMilliseconds(nextNewDay(date), date);
}

function isFirstHourOfDay(date: Date): boolean {
  return getHours(date) == 0 && getMinutes(date) <= 30;
}

export default function Home() {
  const millisecond = useSignal(milliSecondsFromNextNewDay(new Date()));
  const isFirstHour = useSignal(false);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        millisecond.value = milliSecondsFromNextNewDay(new Date());
        isFirstHour.value = isFirstHourOfDay(new Date());
        console.log("hey");
      },
      100,
    );
    return () => clearTimeout(timer);
  }, []);

  const millis = millisecond.value % 1000;
  const seconds = millisecond.value / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;

  return <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>akeo.me - あけましておめでとう</title>
    </Head>
    <main className="h-screen text-center text-5xl leading-normal flex items-center justify-center bg-neutral-900 text-slate-50">
      あけおめ まであと:
      <br />
      {Math.floor(hours % 24)}{" "}時間{" "}
      {Math.floor(minutes % 60)}{" "}分{" "}
      {Math.floor(seconds % 60)}{" "}秒{" "}
      {millis.toString().padStart(3, "0")}
    </main>
    {isFirstHour.value && <HappyEffects />}
  </>;
}
