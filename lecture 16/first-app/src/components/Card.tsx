import type { ReactNode } from "react";

function Card({
  titleColor,
  withTitle,
  children,
}: {
  titleColor?: string;
  withTitle?: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      style={{
        padding: 16,
        borderRadius: 12,
        borderColor: "blue",
        borderWidth: 1,
        border: "solid",
      }}
    >
      {withTitle ? (
        <h1 style={{ color: titleColor ? titleColor : "aqua" }}>Title</h1>
      ) : null}

      <p>DESCRIPTION</p>

      {children}
    </div>
  );
}

export default Card;
