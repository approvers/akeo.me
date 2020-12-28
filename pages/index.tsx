import getYear from "https://deno.land/x/date_fns@v2.15.0/getYear/index.js";
import setYear from "https://deno.land/x/date_fns@v2.15.0/setYear/index.js";
import startOfYear from "https://deno.land/x/date_fns@v2.15.0/startOfYear/index.js";
import differenceInMilliseconds from "https://deno.land/x/date_fns@v2.15.0/differenceInMilliseconds/index.js";
import { h, useEffect, useState } from "../deps.ts";

function nextNewYear() {
  return startOfYear(setYear(new Date(), getYear(new Date()) + 1));
}

function milliSecondsFromNextNewYear() {
  return differenceInMilliseconds(nextNewYear(), new Date());
}

function TimerDisplay({ milliseconds }: { milliseconds: number }) {
  const millis = milliseconds % 1000;
  const seconds = milliseconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  return <h1
    style={{
      height: "90vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {Math.round(days % 366)}日{" "}
    {Math.round(hours % 24)}時間{" "}
    {Math.round(minutes % 60)}分{" "}
    {Math.round(seconds % 60)}秒{" "}
    {millis.toString().padStart(3, "0")}
  </h1>;
}

function IndexPage() {
  const [millis, setMillis] = useState(milliSecondsFromNextNewYear());
  useEffect(() => {
    const timer = setTimeout(() =>
      setMillis(milliSecondsFromNextNewYear(), 10)
    );
    return () => clearTimeout(timer);
  }, [millis]);
  return <TimerDisplay milliseconds={millis} />;
}

export default IndexPage;
