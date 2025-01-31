import { SubjectReport } from "@/types/types";
import useAPIRequest from "../api";
import { SUBJECTS_MOCK } from "@/__mocks__/subjects";
import { useState } from "react";
import { useSessionContext } from "@/providers/AuthProvider";

// TODO: ACERTAR OS ENDPOINTS
export default function useStudentSubjects() {
  const { user } = useSessionContext();
  const req = useAPIRequest(
    "GET",
    `/student/classrooms/${user?.id.toString() ?? ""}`
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
    return SUBJECTS_MOCK as unknown as SubjectReport[];
  }

  return { ...req, loading, submit: submitMock };
}
