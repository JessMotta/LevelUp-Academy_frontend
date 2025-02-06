"use client";
import { STUDENT_PRESTIGE_MOCK } from "@/__mocks__/subjectMainData";
import { useSubjectContext } from "@/providers/SubjectProvider"

export default function OwnedBenefitsTemplate() {
  //const {subjectData} = useSubjectContext();
  const prestige = STUDENT_PRESTIGE_MOCK;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 px-4">
    {!prestige.ownedBenefits ||
      (prestige.ownedBenefits.length <= 0 && (
        <div>Não foi possível encontrar suas matérias no momento.</div>
      ))}
    {prestige.ownedBenefits.length >= 1 &&
      prestige.ownedBenefits.map((s) => (
         <div key={s.id}>{s.title}</div>
        // <SubjectCard key={s.id} subjectData={s} subjectId={s.id.toString()} />
      ))}
  </div>
  ) 
}
