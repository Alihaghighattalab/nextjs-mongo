"use client";
import React, { FC, useState } from "react";
import { ChangeTodoComponent } from "./change-todo";
import clsx from "clsx";
import { EditTodoComponent } from "./edit-todo";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { DeleteTodoComponent } from "./delete-todo";

type TodoType = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type Props = {
  todo: TodoType;
};

export const TodoComponent: FC<Props> = ({ todo }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const handleEditMode = () =>
    !todo.isCompleted && setEditMode((prev: boolean) => !prev);

  return !editMode ? (
    <div
      className={clsx(
        "w-full flex flex-row justify-between items-center bg-white rounded-lg px-5 py-3",
        [
          {
            "line-through opacity-50": todo?.isCompleted,
          },
        ]
      )}
    >
      <span className="text-center font-bold uppercase text-orange-700">
        {todo?.title}
      </span>
      <div className="flex flex-row gap-x-1 items-center">
        <ChangeTodoComponent todo={todo} />
        <FaPencil
          onClick={handleEditMode}
          className="size-3 text-orange-700 cursor-pointer"
        />
        <DeleteTodoComponent todo={todo} />
      </div>
    </div>
  ) : (
    !todo.isCompleted && (
      <EditTodoComponent todo={todo} handleEditMode={handleEditMode} />
    )
  );
};
