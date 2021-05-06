import { Fragment, h, useEffect, useState } from "../deps.ts";
import { HappyEffects } from "../components/effects.tsx";
import { isFirstHourOfDay, milliSecondsFromNextNewDay } from "../lib.ts";

function TimerDisplay({ milliseconds }: { milliseconds: number }) {
  const millis = milliseconds % 1000;
  const seconds = milliseconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  return <h1
    style={{
      height: "90vh",
      display: "flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    あけおめ まであと:
    <br />
    {Math.floor(hours % 24)}時間{" "}
    {Math.floor(minutes % 60)}分{" "}
    {Math.floor(seconds % 60)}秒{" "}
    {millis.toString().padStart(3, "0")}
  </h1>;
}

function IndexPage() {
  const [millis, setMillis] = useState(milliSecondsFromNextNewDay(new Date()));
  useEffect(() => {
    const timer = setTimeout(
      () => setMillis(milliSecondsFromNextNewDay(new Date())),
      100,
    );
    return () => clearTimeout(timer);
  }, [millis]);
  return <>
    <TimerDisplay milliseconds={millis} />
    {isFirstHourOfDay(new Date()) && <HappyEffects />}
  </>;
}

export default IndexPage;
