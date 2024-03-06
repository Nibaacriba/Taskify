"use client";

import Task from "@/classes/task";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export type TasksType = Task[];

type TasksContextData = {
  tasks: TasksType;
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (taskId: string) => void;
};

const tasksContext = createContext<TasksContextData>({} as TasksContextData);

const task = new Task("tarefa", "descricao teste");

export default function TasksContextProvider(props: { children: ReactNode }) {
  const [tasks, setTasks] = useState<TasksType>([]);

  const addTask = (task: Task) => {
    setTasks((currentTasks) => {
      const updatedTasks = [task, ...currentTasks];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const updateTask = useCallback(
    (task: Task) => {
      const taskIndex = tasks.findIndex((t) => t.id === task.id);

      if (taskIndex != -1) {
        setTasks((currentTasks) => {
          const updatedTasks = [...currentTasks];
          updatedTasks[taskIndex] = task;

          return updatedTasks;
        });
      }
    },
    [tasks]
  );

  const deleteTask = (taskId: string) => {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id != taskId);
    });
  };

  const memorizedValue = useMemo(
    () => ({
      tasks,
      addTask,
      updateTask,
      deleteTask,
    }),
    [tasks, updateTask]
  );
  return (
    <tasksContext.Provider value={memorizedValue}>
      {props?.children}
    </tasksContext.Provider>
  );
}

export const useTasks = () => useContext(tasksContext);
