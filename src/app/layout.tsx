import "./globals.css";
import Link from "next/link";
import { poppins } from "@/fonts";
import { twMerge } from "tailwind-merge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={twMerge(poppins.className, "px-8 py-4")}>
        <header className="flex justify-between items-center bg-gray-600 px-8 rounded-2xl">
          <Link href={"/"} className="text-[2rem]">
            Taskify
          </Link>
          <nav className="flex gap-4">
            <Link href={"/tasks"} className="nav-itens">
              your tasks
            </Link>
            <Link href={"/tasks/new"} className="nav-itens">
              New Task
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
