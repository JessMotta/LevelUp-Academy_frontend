import { AuthResponse } from "@/types/auth";
import { API_DOMAIN } from "@/config/constants/domain";
import { addDays } from "date-fns";
import { SessionStudent } from "@/types/types";

type APIResponse = {
  id: number;
  name: string;
  email: string;
  grade: string;
  currentPatent: string;
  experiencePoints: number;
  nextPatentExperience: number;
  classrooms: [];
};

export default async function authenticateUser(
  username: string,
  password: string
) {
  const requestParams = {
    method: "GET",
    // body: JSON.stringify({
    //   username: username.toLowerCase(),
    //   password: password.toLowerCase(),
    // }),
  };

  try {
    const res: APIResponse = await fetch(
      `${API_DOMAIN}/student/1`,
      requestParams
    ).then((res) => res.json());

    console.log(res);

    if (!res) {
      throw new Error();
    }

    console.log(res);

    return {
      token: "mockToken",
      expireAt: addDays(new Date(), 2).toISOString(),
      user: {
        id: res.id,
        currentExperience: res.experiencePoints,
        name: res.name,
        patent: res.currentPatent,
        nextPatentExperience: res.nextPatentExperience,
        schollYear: res.grade,
      } as SessionStudent,
    } as AuthResponse;
  } catch (error) {
    console.log("ERROR", "/users/login", error);
  }
}
