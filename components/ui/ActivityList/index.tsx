import Image from "next/image";
import starSvg from "@/public/assets/star.svg";
import { useRouter } from "next/navigation";
import { Activity } from "@/types/types";
import c from "classnames";
import { useSubjectContext } from "@/providers/SubjectProvider";

function ActivityCard({ activity }: { activity: Activity }) {
  const member = activity.group
    ? activity.studentQnt === 2
      ? "Dupla"
      : "Em grupo"
    : "Individual";

  const { subjectId } = useSubjectContext();
  const router = useRouter();
  return (
    <button
      className={c(
        "flex flex-col items-center justify-center",
        "relative px-2 rounded-md",
        "min-w-40 min-h-40",
        {
          "bg-brand-50 text-brand-700": !activity.complete,
          "bg-brand-300 text-brand-700": activity.complete,
        }
      )}
      onClick={() =>
        router.push(`/aluno/disciplina/${subjectId}/atividade/${activity.id}`)
      }
    >
      {activity.complete && activity.experience && (
        <div className="absolute top-3 left-3">
          {/*TODO: icon check */}
          <span>{activity.experience} %</span>
        </div>
      )}
      <div className="flex flex-col items-center justify-center w-full">
        <p className="mb-1">{activity.type}</p>
        <p className="text-xs">{member}</p>
      </div>
      <div className="absolute w-full flex flex-row justify-center items-center gap-1 bottom-4">
        <p className="text-xl font-medium">{activity.value}</p>
        <Image src={starSvg} alt="Star" width={20} />
      </div>
    </button>
  );
}

export default function ActivityList({
  list,
  loading,
}: {
  list: Activity[];
  loading: boolean;
}) {
  return (
    <div>
      <div className="flex justify-start items-center w-full gap-2">
        {/* TODO: icon atividades */}
        <p className="mb-1 text-xs text-white">Atividades obrigatórias</p>
      </div>
      {loading && <>Loading...</>}
      {!loading && list.length >= 1 && (
        <div className="flex flex-row flex-wrap justify-between gap-3">
          {list.map((el) => (
            <ActivityCard activity={el} key={el.id} />
          ))}
        </div>
      )}
    </div>
  );
}
