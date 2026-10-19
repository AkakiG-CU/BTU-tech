import Card from "./components/Card";

function App() {
  const count = 0;

  const list = [
    { id: 1, withHeader: true, color: "blue" },
    { id: 2, withHeader: false, color: "green" },
    { id: 3, withHeader: true, color: "aqua" },
    { id: 4, withHeader: false, color: "yellow" },
    { id: 5, withHeader: false, color: "red" },
  ];

  return (
    <>
      <div className="App">
        {!!count && (
          <h1 className="title" style={{ color: "blue" }}>
            HELLO WORLD
          </h1>
        )}

        {count ? (
          <h1 className="title" style={{ color: "red" }}>
            HELLO WORLD
          </h1>
        ) : null}

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <p>asdas</p>

      {list.map((list_item) => (
        <Card
          key={list_item.id}
          titleColor={list_item.color}
          withTitle={list_item.withHeader}
        />
      ))}
    </>
  );
}

export default App;
