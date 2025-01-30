"use client";
import { SubjectReport } from "@/types/types";
import { useEffect, useState } from "react";
import SubjectCard from "../SubjectCard";
import useStudentSubjects from "@/api/requests/studentSubjects";

export function SubjectList() {
  const [subjects, setSubjects] = useState<SubjectReport[]>([]);
  const reqSubjects = useStudentSubjects();

  useEffect(() => {
    fetchSubjects();
  }, []);

  async function fetchSubjects() {
    const data = await reqSubjects.submit();
    setSubjects(data);
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 px-4">
      {reqSubjects.loading && <>Loading...</>}
      {!reqSubjects.loading && subjects.length <= 0 && (
        <>Sem dados no momento</>
      )}
      {!reqSubjects.loading &&
        subjects.map((s) => <SubjectCard key={s.id} studentReport={s} />)}
    </div>
  );
}
