import axios from "axios";

const USER_AGENT: string =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";

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
