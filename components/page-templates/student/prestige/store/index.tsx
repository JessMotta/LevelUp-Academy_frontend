import { BENEFITS_MOCK } from "@/__mocks__/benefitsStore";
import BenefitCardStore from "@/components/ui/BenefitCardStore";

export default function PrestigeStoreTemplate() {
  const benefitData = BENEFITS_MOCK;

  return (
     <div className="w-full flex flex-col items-center justify-center gap-2 px-4 text-white">
        {!benefitData ||
          (benefitData.length <= 0 && (
            <div>Não foi possível encontrar suas matérias no momento.</div>
          ))}
        {benefitData.length >= 1 && (
          <div className="text-center">
          <div className="flex flex-row flex-wrap justify-between gap-3">
           {benefitData.map((s) => (
            <BenefitCardStore key={s.id} benefitData={s} benefitId={s.id.toString()} />
           ))}
           </div>
         </div>
        )}
      </div>
  );
}
