import { useEffect, useRef, useState } from "react";
import Products from "./components/Products";
import Search from "./components/Search";

function App() {
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log(2);
  }, []);

  return (
    <div>
      <Search search={search} onChange={setSearch} />

      <button
        onClick={() => setClicked(!clicked)}
        style={{
          backgroundColor: clicked ? "blue" : "red",
          margin: 20,
          padding: 30,
        }}
      >
        PRESS ME
      </button>
      <Products search={search} />
    </div>
  );
}

export default App;
