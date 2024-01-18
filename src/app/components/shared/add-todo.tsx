import React, { FC } from "react";
import { FormComponent } from "../ui/form";
import { InputComponent } from "../ui/input";
import { ButtonComponent } from "../ui/button";
import { create } from "@/app/actions/todo-actions";

type Props = {};

export const AddTodoComponent: FC<Props> = ({}) => {
  return (
    <FormComponent className="w-full max-w-[600px]" action={create}>
      <div className="flex flex-row gap-x-2">
        <InputComponent name="input" placeholder="Add Todo ..." />
        <ButtonComponent type="submit" text="Add" />
      </div>
    </FormComponent>
  );
};
