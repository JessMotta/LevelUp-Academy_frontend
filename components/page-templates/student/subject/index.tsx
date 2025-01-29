"use client";

interface StudentSubjectTemplateProps {
  id: string;
}

export default function StudentSubjectTemplate({
  id,
}: StudentSubjectTemplateProps) {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="bg-brand-300 p-2 rounded-lg">ATIVIDADES</div>
    </div>
  );
}
