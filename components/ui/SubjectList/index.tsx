"use client";
import SubjectCard from "../SubjectCard";
import { useSessionContext } from "@/providers/AuthProvider";

export function SubjectList() {
  const { classrooms } = useSessionContext();

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 px-4">
      {!classrooms ||
        (classrooms.length <= 0 && (
          <div>Não foi possível encontrar suas matérias no momento.</div>
        ))}
      {classrooms.length >= 1 &&
        classrooms.map((s) => (
          <SubjectCard key={s.id} subjectData={s} subjectId={s.id.toString()} />
        ))}
    </div>
  );
}
