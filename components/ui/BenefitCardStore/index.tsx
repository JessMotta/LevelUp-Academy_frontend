"use client";

import { Benefit } from "@/types/types";

interface BenefitCardStoreProps {
    benefitId: string;
    benefitData: Benefit;
}

export default function BenefitCardStore({benefitId, benefitData}: BenefitCardStoreProps){

    return(
        <div id={benefitId}
        className={(
          "flex flex-col items-center justify-between px-2 rounded-md w-40 h-40 bg-green-11 text-white text-center"   
        )}>
        <div className="flex flex-col items-center justify-center">
          <p className="my-3 font-semibold text-base">{benefitData.title}</p>
          <p className="text-[10px] text-wrap">{benefitData.description}</p>
        </div>
        <button className="mb-4 py-1 px-5 border-white border rounded-2xl text-xs" onClick={()=> console.log("Usou o benefício")}>Adquirir</button>
      </div>
    )
}