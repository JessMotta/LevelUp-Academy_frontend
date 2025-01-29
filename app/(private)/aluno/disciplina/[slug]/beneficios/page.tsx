"use client";

import SubjectPrestigeTemplate from "@/components/page-templates/student/prestige";
import { useRouter } from "next/navigation";
import { Usable, use } from "react";

type Params = { slug: string };

export default function SubjectBenefitsPage({ params }: { params: Params }) {
  const paramsContent = use(
    params as unknown as Usable<unknown>
  ) as unknown as Params;

  const router = useRouter();

  if (!paramsContent.slug) {
    router.push("/aluno");
  }

  return <SubjectPrestigeTemplate id={paramsContent.slug} />;
}
