"use client";

import StudentSubjectTemplate from "@/components/page-templates/student/subject";
import { useRouter } from "next/navigation";
import { Usable, use } from "react";

type Params = { slug: string };

export default function StudentSubjectPage({ params }: { params: Params }) {
  const paramsContent = use(
    params as unknown as Usable<unknown>
  ) as unknown as Params;

  const router = useRouter();

  if (!paramsContent.slug) {
    router.push("/aluno");
  }

  return <StudentSubjectTemplate id={paramsContent.slug} />;
}
