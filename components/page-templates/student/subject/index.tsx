"use client";

import ActivityList from "@/components/ui/ActivityList";
import { useSubjectContext } from "@/providers/SubjectProvider";

interface StudentSubjectTemplateProps {
  id: string;
}

export default function StudentSubjectTemplate({}: StudentSubjectTemplateProps) {
  const { activities } = useSubjectContext();
  return (
    <div className="w-full flex flex-col gap-4">
      <ActivityList list={activities.list} loading={activities.loading} />
    </div>
  );
}
