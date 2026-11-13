import useFetch from "./hooks/useFetch";

function App() {
  const { data } = useFetch<{ id: number; name: string }[]>(
    "https://jsonplaceholder.typicode.com/users",
  );

  const { data: posts } = useFetch<{ id: number; title: string }[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );

  console.log(posts);

  return (
    <div>
      {data.length ? (
        data.map((user) => <h3 key={user.id}>{user.name}</h3>)
      ) : (
        <h1>not loaded yet</h1>
      )}

      {posts[0]?.title}
    </div>
  );
}

export default App;
