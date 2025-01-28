"use client";

import StudentSubjectTemplate from "@/components/page-templates/student/subject";
import { useRouter } from "next/navigation";

export default function StudentSubjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const router = useRouter();

  if (!slug) {
    router.push("/aluno");
  }

  return <StudentSubjectTemplate id={slug} />;
}
