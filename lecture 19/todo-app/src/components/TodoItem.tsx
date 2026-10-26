export const TodoItem = ({
  title,
  active,
  onFinish,
}: {
  title: string;
  active: boolean;
  onFinish: (title: string) => void;
}) => {
  const onItemPress = () => {
    onFinish(title);
  };

  return (
    <div>
      <h3 style={{ color: active ? "red" : "blue" }}>{title}</h3>

      {active ? <button onClick={onItemPress}>FINISH</button> : null}
    </div>
  );
};
