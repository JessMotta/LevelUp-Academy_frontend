import React, { useEffect, useState } from "react";
import Image from "next/image";
import starSvg from "@/public/assets/star.svg";
import { SubjectReport } from "@/types/types";
import { useRouter } from "next/navigation";

interface DisciplinaCardProps {
  studentReport: SubjectReport;
}

type States = string | number;

type Notification = {
  message: string;
  state: States;
};

function SubjectCard({ studentReport }: DisciplinaCardProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const { id, subject, teacher, average, attendency } = studentReport;

  const router = useRouter();

  useEffect(() => {
    // fazer a chamada com o ID para pegar as notificações desse aluno para essa disciplina
    setNotifications([]);
  }, []);

  const statusConfig: { [key in States]: { color: string } } = {
    0: {
      color: "green",
    },
    1: {
      color: "var(--color-yellow)",
    },
    2: {
      color: "var(--color-red)",
    },
  };

  return (
    <div
      className="flex flex-col rounded-xl w-full md:w-3/4 md:w-2/6 p-3"
      style={{ background: "var(--color-green-11)" }}
    >
      <div className="flex flex-grow justify-between">
        <div>
          <h1 className="text-white font-bold text-3xl">{subject}</h1>
          <h2
            className="text-sm font-normal"
            style={{ color: "var(--color-green-3)" }}
          >
            Prof. {teacher}
          </h2>
          <div
            className="h-0.5 w-[150%] md:w-[190%]"
            style={{ background: "var(--color-green-7)" }}
          ></div>
          <h2
            className="text-sm font-normal mt-2"
            style={{ color: "var(--color-green-3)" }}
          >
            Média até agora: {average}
          </h2>
          <h2
            className="text-sm font-normal mb-2"
            style={{ color: "var(--color-green-3)" }}
          >
            Presença: {attendency}%
          </h2>
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
        {notifications.length >= 1 && (
          <div
            className="p-2 rounded-md flex items-center gap-2"
            style={{ background: "var(--color-green-8)" }}
          >
            {notifications.map((el) => (
              <>
                <div
                  className="h-1.5 w-1.5 rounded-full ml-4"
                  style={{ background: statusConfig[el.state].color }}
                ></div>
                <p className="text-sm font-normal text-gray-800">
                  {el.message}
                </p>
              </>
            ))}
          </div>
        )}
        <button
          onClick={() => router.push(`/aluno/disciplina/${id}`)}
          className="text-sm text-white underline text-end p-2"
        >
          Acessar sala virtual
        </button>
      </div>
    </div>
  );
}

export default SubjectCard;
