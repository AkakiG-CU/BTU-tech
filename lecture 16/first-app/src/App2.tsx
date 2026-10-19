import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [users, setUsers] = useState([
    { id: 0, name: "John", age: 25, height: 190 },
    { id: 1, name: "John", age: 25, height: 190 },
    { id: 2, name: "Max", age: 25, height: 190 },
  ]);

  const [fullName, setFullName] = useState("Please Enter you name");

  const handleButtonPress = (x: number) => {
    console.log("here");
    console.log(count, "before");
    setCount(count + x);

    // setUsers([
    //   ...users,
    //   { id: users.length, name: "John", age: 25, height: 190 },
    // ]);

    // setUsers(users.filter((user) => user.id !== 2));

    setUsers(
      users.map((user) =>
        user.id === 2 ? { ...user, name: "MAXIMILIAN", height: 170 } : user,
      ),
    );

    console.log(count, "after");
  };

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => handleButtonPress(10)}>PRESS</button>
      <p></p>

      <input
        style={{ padding: 10, width: 200 }}
        value={fullName}
        onChange={(event) => {
          console.log(event.target.value);
          setFullName(event.target.value);
        }}
      />

      {users.map((user) => {
        return (
          <div key={user.id} style={{ background: "blue" }}>
            <h1>{user.name}</h1>
            <p>
              {user.age} {user.height}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
