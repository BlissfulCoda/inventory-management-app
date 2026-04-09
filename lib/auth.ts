import { createAuthClient } from "@neondatabase/neon-js/auth";

const url = process.env.NEXT_PUBLIC_NEON_AUTH_URL;
if (typeof url !== "string" || !url) {
  throw new Error(
    "Missing NEXT_PUBLIC_NEON_AUTH_URL. Set it in .env (your Neon Auth URL)."
  );
}

export const authClient = createAuthClient(url);
