"use client";
import { ACTIVITIES_MOCK } from "@/__mocks__/activities";
import { SUBJECT_DATA_MOCK } from "@/__mocks__/subjectMainData";
import { TRANSACTIONS_MOCK } from "@/__mocks__/transactions";
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
  const [loading, setLoading] = useState<boolean>(DEFAULT_VALUES.loading);
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
  const [loadingTransactions, setLoadingTransactions] = useState<boolean>(
    DEFAULT_VALUES.transactions.loading
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

  function requestSubjectData() {
    setLoading(true);
    setTimeout(() => {
      const data = SUBJECT_DATA_MOCK;
      setCurrentSubject(data.subject);
      setTeacher(data.teacher);
      setPointsAmount(data.prestige.pointsAmount);
      setOwnedBenefits(data.prestige.ownedBenefits); // vai sair
      setLoading(false);
    }, 1500);
  }

  // vai morrer
  function requestTransactions() {
    setLoadingTransactions(true);
    setTimeout(() => {
      setLoadingTransactions(false);
      setTransactionHistory(TRANSACTIONS_MOCK);
    }, 2300);
  }

  function requestActivities() {
    setLoadingActivities(true);
    setTimeout(() => {
      setLoadingActivities(false);
      setActivities(ACTIVITIES_MOCK);
    }, 1500);
  }

  const value = {
    subjectId,
    subject: currentSubject,
    teacher,
    pointsAmount,
    ownedBenefits,
    loading,
    transactions: {
      history: transactionHistory,
      loading: loadingTransactions,
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
