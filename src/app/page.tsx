import { AddTodoComponent } from "./components/shared/add-todo";
import { prisma } from "../../utils/prisma";
import { TodoComponent } from "./components/shared/todo";

type TodoType = {
  id: string;
  title: string;
  isCompleted: boolean;
};

const getAllTodo = async () => {
  const data: TodoType[] = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
};

export default async function Home() {
  const allTodo: TodoType[] = await getAllTodo();
  return (
    <main className="flex h-screen w-full flex-col gap-y-5 items-center p-24">
      <h1 className="text-3xl font-extrabold uppercase">Todo App</h1>
      <AddTodoComponent />
      <div className="flex flex-col gap-y-4 max-h-[500px] overflow-y-auto w-full max-w-[600px]">
        {allTodo?.map((todo: TodoType, id) => (
          <div className="w-full" key={id}>
            <TodoComponent todo={todo} />
          </div>
        ))}
      </div>
    </main>
  );
}
