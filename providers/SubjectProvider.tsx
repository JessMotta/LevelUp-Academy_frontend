"use client";
import { SUBJECT_DATA_MOCK } from "@/__mocks__/subjectMainData";
import { TRANSACTIONS_MOCK } from "@/__mocks__/transactions";
import { OwnedBenefits, Transaction } from "@/types/types";
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

  useEffect(() => {
    /**
     * REQUEST
     * Fazer uma request aqui para pegar as informações de prestigio e beneficios do aluno
     */
    requestBenefitsData();
    requestTransactions();

    console.log("SubjectProvider", subjectId);
  }, [subjectId]);

  useEffect(() => {
    console.log("subject", currentSubject);
    console.log("teacher", teacher);
    console.log("pointsAmount", pointsAmount);
    console.log("ownedBenefits", ownedBenefits);
  }, [transactionHistory]);

  function requestBenefitsData() {
    console.log("mock request");
    setLoading(true);
    setTimeout(() => {
      const data = SUBJECT_DATA_MOCK;
      setCurrentSubject(data.subject);
      setTeacher(data.teacher);
      setPointsAmount(data.prestige.pointsAmount);
      setOwnedBenefits(data.prestige.ownedBenefits);
      setLoading(false);
    }, 1500);
  }

  function requestTransactions() {
    setLoadingTransactions(true);
    setTimeout(() => {
      setLoadingTransactions(false);
      setTransactionHistory(TRANSACTIONS_MOCK);
    }, 2300);
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
  };

  return (
    <SubjectContext.Provider value={value}>{children}</SubjectContext.Provider>
  );
};
