function Search({
  search,
  onChange,
}: {
  search: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      style={{ padding: 10, width: 200 }}
      value={search}
      onChange={(event) => {
        console.log(event.target.value);
        onChange(event.target.value);
      }}
    />
  );
}

export default Search;
