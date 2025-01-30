import { AuthResponse } from "@/types/auth";
import { MOCK_AUTH } from "@/__mocks__/auth";
// import { API_DOMAIN } from "@/config/constants/domain";

// TODO: ACERTAR OS ENDPOINTS
export default function authenticateUser(username: string, password: string) {
  const requestParams = {
    method: "POST",
    body: JSON.stringify({
      username: username.toLowerCase(),
      password: password.toLowerCase(),
    }),
  };

  try {
    // const res = fetch(`${API_DOMAIN}/users/login`, requestParams).then(
    //   (res) => res.json()
    // );

    // return res;

    // TODO: remover mock
    return MOCK_AUTH as AuthResponse;
  } catch (error) {
    console.log("ERROR", "/users/login", error);
  }
}
