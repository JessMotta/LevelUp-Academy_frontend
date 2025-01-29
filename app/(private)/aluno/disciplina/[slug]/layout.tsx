"use client";

import { ReactNode, Usable, use } from "react";
import SubjectHeader from "@/components/ui/SubjectHeader";
import { SubjectProvider } from "@/providers/SubjectProvider";

type Params = { slug: string };

interface StudentLayoutProps {
  children: ReactNode;
  params: Params;
}

export default function SubjectLayout({
  children,
  params,
}: StudentLayoutProps) {
  const paramsContent = use(
    params as unknown as Usable<unknown>
  ) as unknown as Params;

  return (
    <SubjectProvider subjectId={paramsContent.slug}>
      <div className="w-full h-full px-4 flex flex-col gap-5 pt-4 pb-5">
        <SubjectHeader />
        {children}
      </div>
    </SubjectProvider>
  );
}
