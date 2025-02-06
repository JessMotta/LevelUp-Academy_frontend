import { Transaction } from "@/types/types";

export const TRANSACTIONS_MOCK: Transaction[] = [
  {
    id: 1,
    titulo: "Fórum",
    descricao: "Participou da discussão",
    amount: 20,
    mode: "add",
  },
  {
    id: 2,
    titulo: "Quiz",
    descricao: "Completou o desafio semanal",
    amount: 30,
    mode: "add",
  },
  {
    id: 3,
    titulo: "Compra de benefício",
    descricao: "Adquiriu beneficio de eliminação de questão",
    amount: 50,
    mode: "sub",
  },
];
