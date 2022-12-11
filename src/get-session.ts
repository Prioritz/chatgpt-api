import axios from "axios";
import { USER_AGENT } from "./constants";

export const getSession = async () => {
  const res = (await axios.get("https://chat.openai.com/api/auth/session", {
    headers: {
      cookie: `__Secure-next-auth.session-token=${process.env.SESSION_TOKEN}`,
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
