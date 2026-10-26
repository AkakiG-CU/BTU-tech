import { useState } from "react";
import Products from "./components/Products";
import Search from "./components/Search";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Search search={search} onChange={setSearch} />

      <Products search={search} />
    </div>
  );
}

export default App;
