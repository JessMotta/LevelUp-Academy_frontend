import { ReactNode } from "react";
import { useSubjectContext } from "@/providers/SubjectProvider";
import { useRouter } from "next/navigation";

import Image from "next/image";
import star from "@/public/assets/star.svg";

const Box = ({ children }: { children: ReactNode }) => {
  return (
    <div className="rounded-lg bg-brand-800 text-white py-2.5 px-3.5">
      {children}
    </div>
  );
};

export default function SubjectHeader() {
  const { loading, subject, subjectId, teacher, pointsAmount } =
    useSubjectContext();

  const router = useRouter();

  if (loading) {
    return (
      <Box>
        <p className="text-white">Loading...</p>
      </Box>
    );
  }

  if (!subject || !teacher) {
    return (
      <Box>
        <p className="text-white">Error...</p>
      </Box>
    );
  }

  return (
    <Box>
      <div className="flex flex-row justify-between items-center gap-2">
        <div>
          <p className="text-2xl text-bold mb-1.5">{subject}</p>
          <p>Prof. {teacher}</p>
        </div>
        <button
          className="relative rounded-full bg-brand-900 p-1 w-16 h-16 flex justify-center items-center"
          style={{ color: "var(--color-yellow)" }}
          onClick={() =>
            router.push(`/aluno/disciplina/${subjectId}/beneficios`)
          }
        >
        <Image
            src={star}
            alt="Star"
            width={30}
            className="absolute left-[-4px] top-[-4px] "
          />
          {pointsAmount}
        </button>
      </div>
    </Box>
  );
}
