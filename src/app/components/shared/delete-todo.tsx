import React, { FC } from "react";
import { FormComponent } from "../ui/form";
import { InputComponent } from "../ui/input";
import { deleteTodo } from "@/app/actions/todo-actions";
import { ButtonComponent } from "../ui/button";
import { FaTrash } from "react-icons/fa6";

type TodoType = {
  id: string;
  title: string;
  isCompleted: boolean;
};
type Props = { todo: TodoType };

export const DeleteTodoComponent: FC<Props> = ({ todo }) => {
  return (
    !todo.isCompleted && <FormComponent action={deleteTodo}>
      <InputComponent type="hidden" name="inputId" value={todo?.id} />
      <ButtonComponent
        type="submit"
        actionButton
        text={<FaTrash className="size-3 text-orange-700 cursor-pointer" />}
      />
    </FormComponent>
  );
};
