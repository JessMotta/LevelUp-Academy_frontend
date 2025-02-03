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
  classrooms: APIClassroom[];
};

type APIClassroom = {
  name: string;
  teacherName: string;
  id: number;
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

    if (!res) {
      throw new Error();
    }

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
        subjects: res.classrooms,
      } as SessionStudent,
    } as AuthResponse;
  } catch (error) {
    console.log("ERROR", "/users/login", error);
  }
}
