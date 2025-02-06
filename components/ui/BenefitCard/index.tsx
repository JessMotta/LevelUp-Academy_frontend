import React from "react";
import { OwnedBenefits } from "@/types/types";


interface BenefitCardProps {
  benefitId: string;
  benefitData: OwnedBenefits;
}

export default function BenefitCard({ benefitId, benefitData }: BenefitCardProps) {
  console.log('benefitId', benefitId)
    return (
      <div
        className={(
          "flex flex-col items-center justify-center px-2 rounded-md w-40 h-40 bg-green-11 text-white text-center"   
        )}>
        <div className="flex flex-col items-center justify-center w-full">
          <p className="mb-3 font-semibold text-base">{benefitData.title}</p>
          <p className="text-xs text-wrap">{benefitData.description}</p>
        </div>
        <button className="mt-6 py-1 px-5 border-white border rounded-2xl text-xs" onClick={()=> console.log("Usou o benefício")}>Usar</button>
      </div>
    );
  }


