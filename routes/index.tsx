import HappyEffects from "../islands/happy-effects.tsx";
import { Head } from "$fresh/runtime.ts";
import TimeDisplay from "../islands/time-display.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>akeo.me - あけましておめでとう</title>
      </Head>
      <TimeDisplay />
      {<HappyEffects />}
    </>
  );
}
