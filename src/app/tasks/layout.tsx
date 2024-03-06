import TasksContextProvider from "@/contexts/use-tasks";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <TasksContextProvider>{children}</TasksContextProvider>;
}
