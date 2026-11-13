import { useState } from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const [value, setValue] = useState<string>("");

  const { data: post, error } = useFetch<{ id: number; title: string }>(
    `https://jsonplaceholder.typicode.com/posts/${value.length}`,
  );

  return (
    <div>
      <input value={value} onChange={(event) => setValue(event.target.value)} />

      <h2>{post?.title}</h2>

      <h1>eerror happened: {error}</h1>
    </div>
  );
}

export default App;
