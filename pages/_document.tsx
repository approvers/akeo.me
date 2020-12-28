import { h } from "../deps.ts";
import type { DocumentProps } from "../deps.ts";

function Document(props: DocumentProps) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        style={{
          backgroundColor: "#1a1d1a",
          color: "#ccc",
        }}
      >
        {props.children}
      </body>
    </html>
  );
}

export default Document;
