import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taskify | Tasks",
  description: "Taskify is your own Task manager",
  openGraph: {
    title: "Taskify",
    description: "Taskify is your own Task manager",
  },
};

export default function TasksList() {
  return (
    <main className="min-h-screen">
      <div>
        <p>lista de tarefas</p>
      </div>
    </main>
  );
}
