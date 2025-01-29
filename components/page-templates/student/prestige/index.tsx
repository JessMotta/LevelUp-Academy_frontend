"use client";

import { PrestigePointsHistory } from "@/components/ui/PrestigePointsHistory";

interface StudentSubjectTemplateProps {
  id: string;
}

export default function SubjectPrestigeTemplate({}: StudentSubjectTemplateProps) {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="bg-brand-300 p-2 rounded-lg">Loja de Benefícios</div>
      <div className="bg-brand-300 p-2 rounded-lg">Benefícios Disponíveis</div>
      <PrestigePointsHistory />
    </div>
  );
}
