"use client";
import useStudentSubjectTransaction from "@/api/requests/studentSubjectTransaction";
import { APIActivity, useSubjectData } from "@/api/requests/subjectData";
import { SubjectFullData, Transaction } from "@/types/types";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface SubjectContext {
  subjectId: string | undefined;
  subjectData: SubjectFullData | undefined;
  loading: boolean;
  transactions: {
    history: Transaction[];
    loading: boolean;
  };
  activities: APIActivity[];
}

const DEFAULT_VALUES: SubjectContext = {
  subjectId: undefined,
  loading: false,
  subjectData: undefined,
  transactions: {
    history: [],
    loading: false,
  },
  activities: [],
};

const SubjectContext = createContext<SubjectContext>(DEFAULT_VALUES);

export const useSubjectContext = () => {
  const context = useContext(SubjectContext);

  if (context === undefined) {
    throw new Error("Missing SubjectContext on React three");
  }

  return context;
};

export const SubjectProvider = ({
  children,
  subjectId,
}: {
  children: React.ReactNode;
  subjectId: string;
}) => {
  const [subjectData, setSubjectData] = useState<SubjectFullData | undefined>(
    undefined
  );
  const [transactionHistory, setTransactionHistory] = useState<Transaction[]>(
    DEFAULT_VALUES.transactions.history
  );
  const [activities, setActivities] = useState<APIActivity[]>(
    DEFAULT_VALUES.activities
  );

  useEffect(() => {
    // dados da disciplina
    requestSubjectData();

    // MOCKED: dados das transações (próximos passos)
    requestTransactions();
  }, [subjectId]);

  const router = useRouter();

  const currSubjectRequest = useSubjectData(subjectId);
  async function requestSubjectData() {
    const data = await currSubjectRequest.submit();
    console.log(data);
    if (data) {
      setSubjectData(data);
      setActivities(data.activities);
    } else {
      alert("Não foi possível buscar informações desta disciplina");
      router.push("/aluno");
    }
  }

  // NEXT STEPS: desenvolver a Entidade de Transaction para remover o mock
  const currSubjectTransactionsRequest =
    useStudentSubjectTransaction(subjectId);
  async function requestTransactions() {
    const data = await currSubjectTransactionsRequest.submit();
    setTransactionHistory(data);
  }

  const value = {
    subjectId,
    loading: currSubjectRequest.loading,
    subjectData,
    transactions: {
      history: transactionHistory,
      loading: currSubjectTransactionsRequest.loading,
    },
    activities,
  };

  return (
    <SubjectContext.Provider value={value}>{children}</SubjectContext.Provider>
  );
};
