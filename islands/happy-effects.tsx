import { useState, useEffect } from 'preact/hooks';

const FALL_SPEED = 0.4;
const FLIP_SPEED = 0.2;
const COLORS = ["white", "#ff80ce", "#5dc300", "#ff9021", "#85abff", "#00bed3"];

class FallingPieceNode {
  x: number;
  y: number;
  color: string;
  dir: number;

  constructor(x: number, delay: number) {
    this.x = x;
    this.y = -150 - delay;
    this.color = COLORS.sort(() => Math.random() - 0.5)[0];
    this.dir = Math.sign(Math.random() - 0.5);
  }

  update() {
    this.y = 200 < this.y ? -200 : this.y + FALL_SPEED;
  }
}

interface FallingPieceProps {
  x: number;
  y: number;
  color: string;
  dir: number;
}

function FallingPiece(
  { x, y, color, dir }: FallingPieceProps,
) {
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

export default () => {
  const [nodes, setNodes] = useState(() =>
    [...new Array(250)].map(() => Math.random() * 400).map((rand, index) =>
      new FallingPieceNode((index * 2) - 200, rand)
    )
  );
  useEffect(() => {
    let timer = requestAnimationFrame(fall);
    function fall() {
      setNodes((nodes) =>
        nodes.map((node) => {
          node.update();
          return node;
        })
      );
      timer = requestAnimationFrame(fall);
    }
    return () => cancelAnimationFrame(timer);
  }, []);
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
    {nodes.map((node) => <FallingPiece {...node} />)}
  </svg>;
}
