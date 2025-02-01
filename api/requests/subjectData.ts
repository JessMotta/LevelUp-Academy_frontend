import { SubjectData } from "@/types/types";
import useAPIRequest from "../api";
import { SUBJECT_DATA_MOCK } from "@/__mocks__/subjectMainData";
import { useState } from "react";

// TODO: ACERTAR OS ENDPOINTS
export default function useSubjectData(subjectId: string) {
  const req = useAPIRequest("GET", `/student/classroom/${subjectId}`);

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
    return SUBJECT_DATA_MOCK as unknown as SubjectData;
  }

  return { ...req, loading, submit: submitMock };
}
