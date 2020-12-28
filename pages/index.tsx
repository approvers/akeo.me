import { Fragment, h, useEffect, useState } from "../deps.ts";
import { HappyEffects } from "../components/effects.tsx";
import { isFirstDayOfYear, milliSecondsFromNextNewYear } from "../lib.ts";

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
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    新年まであと:{" "}
    <br />
    {Math.round(days % 366)}日{" "}
    {Math.round(hours % 24)}時間{" "}
    {Math.round(minutes % 60)}分{" "}
    {Math.round(seconds % 60)}秒{" "}
    {millis.toString().padStart(3, "0")}
  </h1>;
}

function IndexPage() {
  const [millis, setMillis] = useState(milliSecondsFromNextNewYear(new Date()));
  useEffect(() => {
    const timer = setTimeout(
      () => setMillis(milliSecondsFromNextNewYear(new Date())),
      10,
    );
    return () => clearTimeout(timer);
  }, [millis]);
  return <>
    <TimerDisplay milliseconds={millis} />
    {isFirstDayOfYear(new Date()) && <HappyEffects />}
  </>;
}

export default IndexPage;
