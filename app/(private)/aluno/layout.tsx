import { Navbar } from "@/components/ui/Navbar";
import { ReactNode } from "react";

interface StudentLayoutProps {
  children: ReactNode;
}


export default function StudentLayout({ children }: StudentLayoutProps) {
  return (
    <div className="w-full h-full mx-auto bg-brand-1000">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
