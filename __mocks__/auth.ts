import { AuthResponse } from "@/types/auth";
import { addDays } from "date-fns";

export const MOCK_AUTH: AuthResponse = {
  token: "12345",
  expireAt: addDays(new Date(), 3).toISOString(),
  user: {
    id: 1,
    name: "José Pedro",
    schollYear: "6o ano",
    patent: "Iniciante",
    currentExperience: 200,
    nextPatentExperience: 350,
  },
};
