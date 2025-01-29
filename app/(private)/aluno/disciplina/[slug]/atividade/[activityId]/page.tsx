"use client";

import SubjectActivityTemplate from "@/components/page-templates/student/activity";
import { useRouter } from "next/navigation";
import { Usable, use } from "react";

type Params = { slug: string; activityId: string };

export default function ActivityPage({ params }: { params: Params }) {
  const paramsContent = use(
    params as unknown as Usable<unknown>
  ) as unknown as Params;

  const router = useRouter();

  if (!paramsContent.slug || !paramsContent.activityId) {
    router.push("/aluno");
  }

  return <SubjectActivityTemplate activityId={paramsContent.activityId} />;
}
