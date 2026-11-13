import { useEffect, useState } from "react";
import { TodoItem } from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState<{ title: string; active: boolean }[]>([]);
  const [value, setValue] = useState<string>("");

  const [progress, setProgress] = useState<number>(0);

  const onPress = () => {
    if (!value) return;

    setTodos([...todos, { title: value, active: true }]);

    setValue("");
  };

  const finishTodo = (title: string) => {
    const otherTodos = todos.filter((todo) => todo.title !== title);

    const updateTodo = todos.find((todo) => todo.title == title);

    if (!updateTodo) return;

    updateTodo.active = false;

    setTodos([...otherTodos, updateTodo]);
  };

  useEffect(() => {
    if (!todos.length) {
      setProgress(0);

      return;
    }

    const completedTodos = todos.filter((todo) => !todo.active);

    const progressValue = completedTodos.length / todos.length;

    setProgress(progressValue);
  }, [todos]);

  return (
    <div>
      <div style={{ display: "flex", gap: 16 }}>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />

        <button
          onClick={onPress}
          style={{
            width: 50,
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            background: "aqua",
            borderColor: "red",
          }}
        >
          Add
        </button>

        <h1>{progress * 100}%</h1>
      </div>

      <div>
        {todos.map((todo) => {
          return (
            <TodoItem
              title={todo.title}
              active={todo.active}
              onFinish={finishTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
