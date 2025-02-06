import React from "react";
import { OwnedBenefits } from "@/types/types";


interface BenefitCardOwnedProps {
  benefitId: string;
  benefitData: OwnedBenefits;
}

export default function BenefitCardOwned({ benefitId, benefitData }: BenefitCardOwnedProps) {
    return (
      <div id={benefitId}
        className={(
          "flex flex-col items-center justify-between px-2 rounded-md w-40 h-40 bg-green-11 text-white text-center"   
        )}>
        <div className="flex flex-col items-center justify-center">
          <p className="my-3 font-semibold text-base">{benefitData.title}</p>
          <p className="text-[10px] text-wrap">{benefitData.description}</p>
        </div>
        <button className="mb-4 py-1 px-5 border-white border rounded-2xl text-xs" onClick={()=> console.log("Usou o benefício")}>Usar</button>
      </div>
    );
  }


