"use client";
import React, { FC, useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | boolean>;
  className?: string;
  onSubmit?: () => void;
};

export const FormComponent: FC<Props> = ({
  children,
  action,
  className,
  onSubmit,
}) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      className={className}
      ref={ref}
      action={async (formData: FormData) => {
        await action(formData);
        ref.current?.reset();
      }}
    >
      {children}
    </form>
  );
};
