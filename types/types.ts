// Autenticação
export type SessionStudent = {
  id: number;
  name: string;
  schollYear: string;
  patent: string;
  currentExperience: number;
  nextPatentExperience: number;
  subjects: APIClassroom[];
};

export type APIClassroom = {
  name: string;
  teacherName: string;
  id: number;
  activities: APIActivity[];
};

export type APIActivity = {
  completed: boolean;
  id: number;
  inGroup: false;
  name: string;
  prestigeValue: number;
  studentsPerGroup?: number;
};

export type UserSubject = {
  name: string;
  id: number;
};

// Lista de resumos das matérias do aluno
export interface SubjectResume {
  id: string;
  subject: string;
  teacher: string;
}

export interface SubjectFullData {
  id: string;
  subject: string;
  teacherName: string;
  prestige: {
    pointsAmount: number;
    ownedBenefits: OwnedBenefits[];
  };
  dayOfWeek: string;
  timeSpot: number;
  activities: Activity[];
}

// Compõe dados de uma disciplina x aluno
export type OwnedBenefits = {
  id: number;
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
  id: number;
  type: string;
  group: boolean;
  value: number;
  studentQnt: number;
  complete: boolean;
  experience?: number;
};

export type ActivityData = {
  subjectId: string;
  complete: boolean;
  value: number;
}

// próximos passos: remover o mock de transactions
export type TransactionMode = "add" | "sub";

export type Transaction = {
  id: number;
  titulo: string;
  descricao: string;
  amount: number;
  mode: TransactionMode;
};
