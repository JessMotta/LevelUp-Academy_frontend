import CardUser from "@/components/ui/CardUser";
import Header from "@/components/ui/Header";
//import { Navbar } from "@/components/ui/Navbar";
import { ReactNode } from "react";

interface StudentLayoutProps {
  children: ReactNode;
}

export default function StudentLayout({ children }: StudentLayoutProps) {
  return (
    // <div className="w-full h-full overflow-y-scroll bg-brand-1000">
    //   <Navbar menuItems={[{ label: "Minhas disciplinas", path: "/" }]} />
    //   <div className="mt-4">{children}</div>
    // </div>
    <div className="md:w-[480px] mx-auto bg-dark">
      <Header/>
      <CardUser/>
    </div>
  );
}
