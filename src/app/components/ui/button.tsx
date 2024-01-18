import clsx from "clsx";
import React, { FC, ReactNode } from "react";

type Props = {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
};

export const ButtonComponent: FC<Props> = ({
  type = "button",
  text,
  onClick,
  actionButton,
}) => {
  return (
    <button
      className={clsx("bg-orange-700 p-2 text-white rounded-md", [
        {
          "p-2 bg-transparent text-orange-600": actionButton,
        },
      ])}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
