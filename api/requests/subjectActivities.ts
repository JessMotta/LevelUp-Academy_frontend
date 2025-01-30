import { Activity } from "@/types/types";
import useAPIRequest from "../api";
import { useState } from "react";
import { ACTIVITIES_MOCK } from "@/__mocks__/activities";

// TODO: ACERTAR OS ENDPOINTS
export default function useSubjectActivities(subjectId: string) {
  const req = useAPIRequest(
    "GET",
    `/student/classroom/${subjectId}/activities`
  );

  // async function submit() {
  //   const res: SubjectReport[] = await req.submit();

  //   return res;
  // }

  // TODO: remover mock
  const [loading, setLoading] = useState<boolean>(false);
  async function submitMock() {
    setLoading(true);
    await setTimeout(() => {
      setLoading(false);
    }, 1500);
    return ACTIVITIES_MOCK as unknown as Activity[];
  }

  return { ...req, loading, submit: submitMock };
}
