import { OwnedBenefits, SubjectData, SubjectPrestigeData } from "@/types/types";
import { subDays } from "date-fns";

const OWNED_BENEFITS_MOCK_1: OwnedBenefits = {
  id: 1,
  title: "Apagar uma falta",
  description: "Faltou algum dia de aula? Anule essa falta",
  purchasedAt: subDays(new Date(), 15).toISOString(),
};
const OWNED_BENEFITS_MOCK_2: OwnedBenefits = {
  id: 2,
  title: "0,3 pts na prova",
  description: "Garanta 0,2 pts na prova do bimestre",
  purchasedAt: subDays(new Date(), 3).toISOString(),
};

export const STUDENT_PRESTIGE_MOCK: SubjectPrestigeData = {
  pointsAmount: 130,
  ownedBenefits: [OWNED_BENEFITS_MOCK_1, OWNED_BENEFITS_MOCK_2],
};

export const SUBJECT_DATA_MOCK: SubjectData = {
  subject: "Biologia",
  teacher: "Marcelino Coala",
  prestige: STUDENT_PRESTIGE_MOCK,
};
