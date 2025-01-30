"use client";
import useStudentSubjectTransaction from "@/api/requests/studentSubjectTransaction";
import useSubjectActivities from "@/api/requests/subjectActivities";
import useSubjectData from "@/api/requests/subjectData";
import { Activity, OwnedBenefits, Transaction } from "@/types/types";
import { createContext, useContext, useEffect, useState } from "react";

interface SubjectContext {
  subjectId: string | undefined;
  subject: string | undefined;
  teacher: string | undefined;
  pointsAmount: number;
  ownedBenefits: OwnedBenefits[];
  loading: boolean;
  transactions: {
    history: Transaction[];
    loading: boolean;
  };
  activities: {
    list: Activity[];
    loading: boolean;
  };
}

const DEFAULT_VALUES: SubjectContext = {
  subjectId: undefined,
  subject: undefined,
  teacher: undefined,
  pointsAmount: 0,
  ownedBenefits: [],
  loading: false,
  transactions: {
    history: [],
    loading: false,
  },
  activities: {
    list: [],
    loading: false,
  },
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
  const [currentSubject, setCurrentSubject] = useState<string | undefined>(
    DEFAULT_VALUES.subject
  );
  const [teacher, setTeacher] = useState<string | undefined>(
    DEFAULT_VALUES.teacher
  );
  const [pointsAmount, setPointsAmount] = useState<number>(
    DEFAULT_VALUES.pointsAmount
  );
  const [ownedBenefits, setOwnedBenefits] = useState<OwnedBenefits[]>(
    DEFAULT_VALUES.ownedBenefits
  );
  const [transactionHistory, setTransactionHistory] = useState<Transaction[]>(
    DEFAULT_VALUES.transactions.history
  );
  const [loadingActivities, setLoadingActivities] = useState<boolean>(
    DEFAULT_VALUES.activities.loading
  );
  const [activities, setActivities] = useState<Activity[]>(
    DEFAULT_VALUES.activities.list
  );

  useEffect(() => {
    /**
     * REQUEST
     * Fazer uma request aqui para pegar as informações de prestigio e beneficios do aluno
     */
    requestSubjectData();
    requestTransactions();
    requestActivities();
  }, [subjectId]);

  const currSubjectRequest = useSubjectData(subjectId);
  async function requestSubjectData() {
    const data = await currSubjectRequest.submit();
    setCurrentSubject(data.subject);
    setTeacher(data.teacher);
    setPointsAmount(data.prestige.pointsAmount);
    setOwnedBenefits(data.prestige.ownedBenefits);
  }

  // NEXT STEPS: desenvolver a Entidade de Transaction para remover o mock
  const currSubjectTransactionsRequest =
    useStudentSubjectTransaction(subjectId);
  async function requestTransactions() {
    const data = await currSubjectTransactionsRequest.submit();
    setTransactionHistory(data);
  }

  const currSubjectActivities = useSubjectActivities(subjectId);
  async function requestActivities() {
    const data = await currSubjectActivities.submit();
    setActivities(data);
  }

  const value = {
    subjectId,
    subject: currentSubject,
    teacher,
    pointsAmount,
    ownedBenefits,
    loading: currSubjectRequest.loading,
    transactions: {
      history: transactionHistory,
      loading: currSubjectTransactionsRequest.loading,
    },
    activities: {
      list: activities,
      loading: loadingActivities,
    },
  };

  return (
    <SubjectContext.Provider value={value}>{children}</SubjectContext.Provider>
  );
};
