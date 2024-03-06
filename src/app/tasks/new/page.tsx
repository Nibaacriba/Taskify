import TaskForm from "@/components/task-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taskify | New task",
  description: "Taskify is your own Task manager",
  openGraph: {
    title: "Taskify",
    description: "Taskify is your own Task manager",
  },
};

export default function NewTask() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-evenly">
      <TaskForm />
    </main>
  );
}
