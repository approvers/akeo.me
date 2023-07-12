import {
  differenceInMilliseconds,
  getDay,
  getHours,
  getMinutes,
  setDay,
  startOfDay,
} from "date-fns";
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

function nextNewDay(date: Date): Date {
  return startOfDay(setDay(date, getDay(date) + 1, {}));
}

function milliSecondsFromNextNewDay(date: Date): number {
  return differenceInMilliseconds(nextNewDay(date), date);
}

export default () => {
  const millisecond = useSignal(milliSecondsFromNextNewDay(new Date()));

  useEffect(() => {
    const timer = setInterval(
      () => {
        millisecond.value = milliSecondsFromNextNewDay(new Date());
      },
      100,
    );
    return () => clearInterval(timer);
  }, []);

  const millis = millisecond.value % 1000;
  const seconds = millisecond.value / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;

  return (
    <main className="h-screen text-center text-5xl leading-normal flex flex-col items-center justify-center bg-neutral-900 text-slate-50">
      <p>
        <i>あけおめ</i> まであと
      </p>
      <p>
        {Math.floor(hours % 24)} 時間 {Math.floor(minutes % 60)} 分{" "}
        {Math.floor(seconds % 60)} 秒 {millis.toString().padStart(3, "0")}
      </p>
    </main>
  );
};
