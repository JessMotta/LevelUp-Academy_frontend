"use client";

import { STUDENT_PRESTIGE_MOCK } from "@/__mocks__/subjectMainData";
import { useSubjectContext } from "@/providers/SubjectProvider";
import { useRouter } from "next/navigation";

export default function PurchasedBenefits() {
  const { subjectId } = useSubjectContext();
  const prestige = STUDENT_PRESTIGE_MOCK;

  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center rounded-lg bg-brand-600 text-white py-2 px-3 gap-2">
      <div className="flex flex-row justify-between items-center w-full">
        <p className="font-medium text-base">Beneficios Disponíveis</p>
        <p className="font-extrabold text-lg">{prestige.ownedBenefits.length}</p>
      </div>
      <p>
        Troque seus pontos de prestígio por benefícios e privilégios nesta
        disciplina
      </p>
      <button
        className="underline underline-offset-2 text-end self-end"
        onClick={() =>
          router.push(`/aluno/disciplina/${subjectId}/beneficios/disponivel`)
        }
      >
        Veja seus benefícios
      </button>
    </div>
  );
}
