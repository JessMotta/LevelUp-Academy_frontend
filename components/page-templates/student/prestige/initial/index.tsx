"use client";

import BenefitStore from "@/components/ui/BenefitStore";
import PrestigePointsHistory from "@/components/ui/PrestigePointsHistory";
import PurchasedBenefits from "@/components/ui/PurchasedBenefits";

export default function SubjectPrestigeTemplate() {
  return (
    <div className="w-full flex flex-col gap-3">
      <BenefitStore />
      <PurchasedBenefits />
      <PrestigePointsHistory />
    </div>
  );
}
