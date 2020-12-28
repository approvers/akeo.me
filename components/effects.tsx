import { h, useEffect, useState } from "../deps.ts";

const FALL_SPEED = 0.4;
const FLIP_SPEED = 0.2;

function FallingPiece(
  { x, delay }: { x: number; delay: number },
) {
  const [y, setY] = useState(-150 - delay);
  const [color, _setColor] = useState(() =>
    ["white", "#ff80ce", "#5dc300", "#ff9021", "#85abff", "#00bed3"].sort(() =>
      Math.random() - 0.5
    )[0]
  );
  const [dir, _setDir] = useState(() => Math.sign(Math.random() - 0.5));
  useEffect(
    () => {
      let anime = requestAnimationFrame(fall);
      function fall() {
        setY((y: number) => 100 < y ? -150 : y + FALL_SPEED);
        anime = requestAnimationFrame(fall);
      }
      return () => cancelAnimationFrame(anime);
    },
    [],
  );
  return <rect
    id="test"
    fill={color}
    x={0.4 * Math.sin(y * FLIP_SPEED) + x}
    y={y}
    width={5}
    height={5}
    transform={`skewX(${dir * y / 4})`}
  />;
}

export function HappyEffects() {
  return <svg
    width="100%"
    height="100%"
    viewBox="-100 -100 200 200"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "fixed",
      top: "0",
      left: "0",
    }}
  >
    {[...new Array(250)].map(() => Math.random() * 400).map((rand, x) =>
      <FallingPiece
        x={(x * 2) - 200}
        delay={rand}
      />
    )}
  </svg>;
}
