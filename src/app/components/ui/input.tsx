import React, { FC } from "react";

type Props = {
  name: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
};

export const InputComponent: FC<Props> = ({
  name,
  type = "text",
  placeholder = "Type here...",
  value,
}) => {
  return (
    <input
      className="w-full rounded-md p-2 border border-gray-400"
      placeholder={placeholder}
      name={name}
      value={value}
      type={type}
    />
  );
};
