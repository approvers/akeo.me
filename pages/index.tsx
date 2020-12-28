import { h, useEffect, useState } from "../deps.ts";

function IndexPage() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setTimeout(() => setDate(new Date()), 10);
    return () => clearTimeout(timer);
  }, [date]);
  return (
    <h1
      style={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {date.toISOString()}
    </h1>
  );
}

export default IndexPage;
