import { createNeonAuth } from "@neondatabase/auth/next/server";

const baseUrl = process.env.NEON_AUTH_BASE_URL;
const cookieSecret = process.env.NEON_AUTH_COOKIE_SECRET;

if (!baseUrl) {
  throw new Error(
    "Missing NEON_AUTH_BASE_URL. Copy your Auth URL from Neon Console (Project → Branch → Auth → Configuration)."
  );
}
if (!cookieSecret || cookieSecret.length < 32) {
  throw new Error(
    "Missing or invalid NEON_AUTH_COOKIE_SECRET. Use at least 32 characters (e.g. openssl rand -base64 32)."
  );
}

export const auth = createNeonAuth({
  baseUrl,
  cookies: {
    secret: cookieSecret,
  },
});
