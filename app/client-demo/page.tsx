"use client";

import { useState, useEffect } from "react";

export default function ClientDemo() {
  const [count, setCount] = useState(0);
   
  useEffect(() => {
    console.log("Running on CLIENT");
  }, [count]);

  return (
    <div>
      <h1>Client Component</h1>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}