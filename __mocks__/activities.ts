import { Activity } from "@/types/types";

const ACTIVITY_1: Activity = {
  id: 1,
  type: "Questionário",
  group: false,
  studentQnt: 1,
  complete: false,
  value: 20,
};
const ACTIVITY_2: Activity = {
  id: 2,
  type: "Estudo dirigido",
  group: true,
  studentQnt: 2,
  complete: false,
  value: 30,
};
const ACTIVITY_3: Activity = {
  id: 3,
  type: "Apresentação",
  group: true,
  studentQnt: 4,
  complete: false,
  value: 40,
};
const ACTIVITY_4: Activity = {
  id: 4,
  type: "Quiz",
  group: false,
  studentQnt: 1,
  complete: true,
  experience: 7.7,
  value: 25,
};

export const ACTIVITIES_MOCK = [ACTIVITY_1, ACTIVITY_2, ACTIVITY_3, ACTIVITY_4];
