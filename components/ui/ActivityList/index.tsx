import Image from "next/image";
import starSvg from "@/public/assets/star.svg";
import { useRouter } from "next/navigation";
import c from "classnames";
import { useSubjectContext } from "@/providers/SubjectProvider";
import { APIActivity } from "@/types/types";
import { FaCheckCircle } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { LuAtom } from "react-icons/lu";

function ActivityCard({ activity }: { activity: APIActivity }) {
  const member = activity.inGroup
    ? activity.studentsPerGroup === 2
      ? "Dupla"
      : "Em grupo"
    : "Individual";

  const { subjectId } = useSubjectContext();
  const router = useRouter();

  const completion = activity.completed && (
    <div className="absolute top-3 left-3 flex flex row items-center font-semibold text-primary"><FaCheckCircle className="mr-2" />{activity.prestigeValue} <LuAtom /></div>
  );

  return (
    <button
      className={c(
        "flex flex-col items-center justify-center",
        "relative px-2 rounded-md",
        "min-w-40 min-h-40",
        {
          "bg-brand-50 text-dark": !activity.completed,
          "bg-brand-300 text-dark": activity.completed,
        }
      )}
      onClick={() =>
        router.push(`/aluno/disciplina/${subjectId}/atividade/${activity.id}`)
      }
    >
      {completion}
      <div className="flex flex-col items-center justify-center w-full">
        <p className="mb-1 font-medium">{activity.name}</p>
        <p className="text-xs">{member}</p>
      </div>
      <div className="absolute w-full flex flex-row justify-center items-center gap-1 bottom-4">
        <p className="text-xl font-medium">{activity.prestigeValue}</p>
        <Image src={starSvg} alt="Star" width={20} className="dark-svg" />
      </div>
    </button>
  );
}

export default function ActivityList({
  list,
  loading,
}: {
  list: APIActivity[];
  loading: boolean;
}) {
  return (
    <div>
      <div className="flex justify-start items-start w-full gap-2">
      <FaHouse className="fill-white"/>
        <p className="mb-2 text-xs text-white font-bold">Atividades obrigatórias</p>
      </div>
      {loading && <>Loading...</>}
      {!loading && list.length >= 1 && (
        <div className="flex flex-row flex-wrap md:justify-between gap-3 justify-center">
          {list.map((el) => (
            <ActivityCard activity={el} key={el.name} />
          ))}
        </div>
      )}
    </div>
  );
}
