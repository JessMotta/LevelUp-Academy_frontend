export interface SubjectReport {
  id: string;
  subject: string;
  teacher: string;
  average: number;
  attendency: number;
}

export type SessionStudent = {
  name: string;
  schollYear: string;
  patent: string;
  currentExperience: number;
  nextPatentExperience: number;
};

export type OwnedBenefits = {
  id: string;
  title: string;
  description: string;
  purchasedAt: string;
};

export type TransactionMode = "add" | "sub";

export type Transaction = {
  id: string;
  titulo: string;
  descricao: string;
  amount: number;
  mode: TransactionMode;
};

export type Activity = {
  id: string;
  type: string;
  group: boolean;
  value: number;
  studentQnt: number;
  complete: boolean;
  experience?: number;
};
