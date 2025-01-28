import { ReactNode } from "react";

interface StudentLayoutProps {
  children: ReactNode;
}

export default function SubjectLayout({ children }: StudentLayoutProps) {
  return (
    <div className="w-full h-full px-4 flex flex-col gap-3 pt-3 pb-5">
      <div className="bg-brand-300 rounded-lg p-2">Header da disciplina</div>
      {children}
    </div>
  );
}
