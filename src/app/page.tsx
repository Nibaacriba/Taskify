import { poppins700 } from "@/fonts";
import { Metadata } from "next";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Taskify | Get started!",
  description: "Taskify is your own Task manager",
  openGraph: {
    title: "Taskify",
    description: "Taskify is your own Task manager",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-8">
      <div className="flex flex-col items-center justify-start gap-8">
        <h1 className={twMerge(poppins700.className, "text-center")}>
          Welcome to Teskify!
        </h1>
        <h4 className={"text-center"}>
          Get organized and boost your productivity with Taskify, the simple and
          intuitive task management app.
        </h4>
      </div>

      <div className=" flex flex-col items-center gap-8">
        <h2 className={twMerge(poppins700.className, "text-center")}>
          Key Features:
        </h2>
        <ol className="custom-list">
          <li>Create and manage tasks effortlessly.</li>
          <li>Mark tasks as completed to track your progress.</li>
          <li>Filter tasks to focus on what matters most.</li>
          <li>No sign-up required - start organizing your tasks instantly!</li>
        </ol>
      </div>

      <div className="w-4/6 flex flex-col items-center justify-center gap-8">
        <h4 className="text-center">
          Ready to get started? Simply start adding your tasks and take control
          of your to-do list today!
        </h4>
        <Link
          href={"/tasks/new"}
          className={twMerge(
            "bg-gray-400 w-fit h-fit rounded-md p-4 text-[1.5rem] transition-all",
            "hover:scale-110"
          )}
        >
          Begin Now!
        </Link>
      </div>
    </main>
  );
}
