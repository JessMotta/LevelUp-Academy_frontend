"use client";
import { STUDENT_PRESTIGE_MOCK } from "@/__mocks__/subjectMainData";
import BenefitCard from "@/components/ui/BenefitCard";

export default function OwnedBenefitsTemplate() {
  //const {subjectData} = useSubjectContext();
  const benefit = STUDENT_PRESTIGE_MOCK;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 px-4">
    {!benefit.ownedBenefits ||
      (benefit.ownedBenefits.length <= 0 && (
        <div>Não foi possível encontrar suas matérias no momento.</div>
      ))}
    {benefit.ownedBenefits.length >= 1 && (
       <div className="flex flex-row flex-wrap justify-between gap-3">
       {benefit.ownedBenefits.map((s) => (
        <BenefitCard key={s.id} benefitData={s} benefitId={s.id.toString()} />
       ))}
     </div>
    )}
  </div>
  ) 
}
