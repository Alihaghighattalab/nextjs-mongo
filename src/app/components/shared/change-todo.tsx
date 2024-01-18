import React, { FC } from "react";
import { FormComponent } from "../ui/form";
import { ChangeStatus } from "@/app/actions/todo-actions";
import { InputComponent } from "../ui/input";
import { ButtonComponent } from "../ui/button";
import { GiReturnArrow } from "react-icons/gi";
import { FaCheck } from "react-icons/fa6";

type TodoType = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type Props = { todo: TodoType };

export const ChangeTodoComponent: FC<Props> = ({ todo }) => {
  return (
    <FormComponent action={ChangeStatus}>
      <InputComponent type="hidden" name="inputId" value={todo?.id} />
      <ButtonComponent
        actionButton
        type="submit"
        text={!todo.isCompleted ? <FaCheck /> : <GiReturnArrow />}
      />
    </FormComponent>
  );
};
