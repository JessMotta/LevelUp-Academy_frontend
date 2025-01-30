// Autenticação
export type SessionStudent = {
  id: string;
  name: string;
  schollYear: string;
  patent: string;
  currentExperience: number;
  nextPatentExperience: number;
};

// Lista de resumos das matérias do aluno
export interface SubjectReport {
  id: string;
  subject: string;
  teacher: string;
  average: number;
  attendency: number;
}

// Compõe dados de uma disciplina x aluno
export type OwnedBenefits = {
  id: string;
  title: string;
  description: string;
  purchasedAt: string;
};

export type SubjectPrestigeData = {
  pointsAmount: number;
  ownedBenefits: OwnedBenefits[];
};

// Dados do da disciplina x aluno
export type SubjectData = {
  subject: string;
  teacher: string;
  prestige: SubjectPrestigeData;
};

// Atividade (aluno x atividade)
export type Activity = {
  id: string;
  type: string;
  group: boolean;
  value: number;
  studentQnt: number;
  complete: boolean;
  experience?: number;
};

// próximos passos: remover o mock de transactions
export type TransactionMode = "add" | "sub";

export type Transaction = {
  id: string;
  titulo: string;
  descricao: string;
  amount: number;
  mode: TransactionMode;
};
