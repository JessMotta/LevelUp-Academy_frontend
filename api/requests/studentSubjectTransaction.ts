import { Transaction } from "@/types/types";
import useAPIRequest from "../api";
import { useState } from "react";
import { TRANSACTIONS_MOCK } from "@/__mocks__/transactions";

// NEXT STEPS: desenvolver a Entidade de Transaction para remover o mock
export default function useStudentSubjectTransaction(subjectId: string) {
  const req = useAPIRequest(
    "GET",
    `/student/classroom/${subjectId}/transactions`
  );

  // async function submit() {
  //   const res: SubjectReport[] = await req.submit();

  //   return res;
  // }

  const [loading, setLoading] = useState<boolean>(false);
  async function submitMock() {
    setLoading(true);
    await setTimeout(() => {
      setLoading(false);
    }, 1500);
    return TRANSACTIONS_MOCK as unknown as Transaction[];
  }

  return { ...req, loading, submit: submitMock };
}
