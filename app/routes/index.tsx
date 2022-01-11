import { useEffect, useState } from "react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>What's up Remix?!?</h1>
      <ul>
        <li>The demo app was built in 316ms!</li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <Counter />
    </div>
  );
}

function Counter() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    let ticker = setInterval(() => void setCount(n => n + 1), 1000);
    return () => clearInterval(ticker);
  }, [])
  return (
    <p>Count: {count}s</p>
  );
}