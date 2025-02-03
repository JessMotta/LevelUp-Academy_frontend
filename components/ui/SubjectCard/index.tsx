import React from "react";
import Image from "next/image";
import starSvg from "@/public/assets/star.svg";
import { useRouter } from "next/navigation";
import { APIClassroom } from "@/types/types";

interface DisciplinaCardProps {
  subjectId: string;
  subjectData: APIClassroom;
}

function SubjectCard({ subjectId, subjectData }: DisciplinaCardProps) {
  const router = useRouter();

  return (
    <div
      className="flex flex-col rounded-xl w-full md:w-3/4 p-3"
      style={{ background: "var(--color-green-11)" }}
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">
          <div className="flex flex-grow justify-between">
            <div>
              <h1 className="text-white font-bold text-3xl">
                {subjectData.name}
              </h1>
              <h2
                className="text-sm font-normal"
                style={{ color: "var(--color-green-3)" }}
              >
                Prof. {subjectData.teacherName}
              </h2>
              <div
                className="h-0.5 w-[150%] md:w-[190%]"
                style={{ background: "var(--color-green-7)" }}
              ></div>
            </div>
            <div
              className="flex rounded-full w-[80px] h-[80px] items-center justify-center mr-4 relative"
              style={{ background: "var(--color-green-1)" }}
            >
              <Image
                src={starSvg}
                alt="Star"
                width={40}
                className="absolute left-[-4px] top-[-4px]"
              />
              <p
                className="absolute font-normal text-3xl bottom-[15px]"
                style={{ color: "var(--color-yellow)" }}
              >
                98
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <button
              onClick={() => router.push(`/aluno/disciplina/${subjectId}`)}
              className="text-sm text-white underline text-end p-2"
            >
              Acessar sala virtual
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubjectCard;
