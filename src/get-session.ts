import axios from "axios";
import { USER_AGENT } from "./constants";
import { getCookie } from "./get-cookie";

export const getSession = async (requestCookie: string) => {
  const cookie = getCookie(requestCookie);

  const res = (await axios.get("https://chat.openai.com/api/auth/session", {
    headers: {
      cookie: cookie,
      "user-agent": USER_AGENT,
    },
  })) as any;

  if (res.status !== 200) {
    throw new Error("Unable to get session");
  }

  const accessToken = res?.data.accessToken;
  if (!accessToken) {
    throw new Error("Unable to get access token");
  }

  return accessToken;
};
