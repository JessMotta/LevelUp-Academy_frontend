import { Navbar } from "@/components/ui/Navbar";
import { ReactNode } from "react";

interface StudentLayoutProps {
  children: ReactNode;
}

const studentMenuOptions = [{ label: "Minhas disciplinas", path: "/" }];

export default function StudentLayout({ children }: StudentLayoutProps) {
  return (
    <div className="w-full h-full mx-auto bg-dark">
      <Navbar menuItems={studentMenuOptions} />
      <div>{children}</div>
    </div>
  );
}
