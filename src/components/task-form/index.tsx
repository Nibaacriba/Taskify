"use client";

import { useTasks } from "@/contexts/use-tasks";

export default function TaskForm() {
  const { tasks } = useTasks();

  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <p>{task.title}</p>
            <p>{task.description}</p>
          </div>
        );
      })}
    </form>
  );
}
