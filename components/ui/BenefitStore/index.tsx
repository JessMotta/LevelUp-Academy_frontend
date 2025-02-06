"use client";

import { useSubjectContext } from "@/providers/SubjectProvider";
import { useRouter } from "next/navigation";
import { BiSolidStore } from "react-icons/bi";

export default function BenefitStore() {
  const router = useRouter();

  const { subjectId } = useSubjectContext();

  return (
    <div className="flex flex-col justify-center items-center rounded-lg bg-brand-600 text-white py-2 px-3 gap-2">
      <div className="flex flex-row gap-2 items-center w-full">
      <BiSolidStore className="text-xl"/>
        <h4 className="text-white font-semibold">Loja de Benefícios</h4>
      </div>
      <p>
        Troque seus pontos de prestígio por benefícios e privilégios nesta
        disciplina
      </p>
      <button
        className="underline underline-offset-2 text-end self-end"
        onClick={() =>
          router.push(`/aluno/disciplina/${subjectId}/beneficios/loja`)
        }
      >
        Veja os items em oferta
      </button>
    </div>
  );
}
