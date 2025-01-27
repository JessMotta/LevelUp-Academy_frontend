"use client";
import { SubjectReport } from "@/types/types";
import { useEffect, useState } from "react";
import SubjectCard from "../SubjectCard";
import { SUBJECTS_MOCK } from "@/__mocks__/subjects";

export function SubjectList() {
  const [subjects, setSubjects] = useState<SubjectReport[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    /**
     * Aqui deveria fazer uma chamada de consulta pra pegar esses dados do aluno
     */
    setLoading(true);
    setTimeout(() => {
      setSubjects(SUBJECTS_MOCK);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 px-4">
      {loading && <>Loading...</>}
      {!loading &&
        subjects.map((s) => <SubjectCard key={s.id} studentReport={s} />)}
    </div>
  );
}
