import { Navbar } from "@/components/ui/Navbar";
import { ReactNode } from "react";

interface StudentLayoutProps {
  children: ReactNode;
}

export default function StudentLayout({ children }: StudentLayoutProps) {
  return (
    <div className="w-full h-full overflow-y-scroll bg-brand-1000">
      <Navbar menuItems={[{ label: "Minhas disciplinas", path: "/" }]} />
      <div className="mt-4">{children}</div>
    </div>
  );
}
