export const getCookie = (requestCookie: string) => {
  const values = requestCookie.split("; ");
  const cf_chl_2 = values[0].split("=")[1];
  const cf_clearance = values[1].split("=")[1];
  const csrfToken = values[2].split("=")[1];
  const callbackUrl = values[3].split("=")[1];
  const __cf_bm = values[4].split("=")[1];
  const session_token = values[5].split("=")[1];

  return `cf_chl_2=${cf_chl_2}; cf_clearance=${cf_clearance}; __Host-next-auth.csrf-token=${csrfToken}; __Secure-next-auth.callback-url=${callbackUrl}; __cf_bm=${__cf_bm}; __Secure-next-auth.session-token=${session_token};`;
};
