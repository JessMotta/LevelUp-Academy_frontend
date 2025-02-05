import { Activity, OwnedBenefits, SubjectFullData } from "@/types/types";
import useAPIRequest from "../api";

export interface SubjectDataApiReturn {
  id: number;
  subject: string;
  teacher: string;
  prestige: {
    pointsAmount: number;
    ownedBenefits: OwnedBenefits[];
  };
  dayOfWeek: string;
  timeSpot: number;
  activities: Activity[];
}

export function useSubjectData(subjectId: string) {
  const req = useAPIRequest("GET", `/classroom/${subjectId.toString()}`);

  async function submit() {
    const res: SubjectDataApiReturn = await req.submit();


    if (!res) {
      return undefined;
    }

    return {
      ...res,
      id: subjectId,
    } as SubjectFullData;
  }

  return { ...req, submit };
}
