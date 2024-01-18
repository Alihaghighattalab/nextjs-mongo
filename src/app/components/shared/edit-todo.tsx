import React, { FC, useEffect } from "react";
import { edit } from "@/app/actions/todo-actions";
import { FormComponent } from "../ui/form";
import { InputComponent } from "../ui/input";
import { ButtonComponent } from "../ui/button";
import { AiOutlineCheckCircle } from "react-icons/ai";

type TodoType = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type Props = {
  todo: TodoType;
  handleEditMode: () => void;
};

export const EditTodoComponent: FC<Props> = ({ todo, handleEditMode }) => {
  useEffect(() => {
    handleEditMode();
  }, [handleEditMode, todo.title]);
  return (
    <FormComponent
      className="w-full flex flex-row justify-between items-center bg-white rounded-lg px-5 py-3 gap-x-2"
      action={edit}
    >
      <InputComponent type="hidden" name="inputId" value={todo?.id} />
      <InputComponent type="text" name="newTitle" placeholder={todo?.title} />
      <ButtonComponent type="submit" text="Save" />
    </FormComponent>
  );
};
