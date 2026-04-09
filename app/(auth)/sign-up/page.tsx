"use client";

import Link from "next/link";
import { useActionState } from "react";

import FormInput from "@/shared/auth/FormInput";

import { GoogleSignInButton } from "@/components/auth/google-sign-in-button";
import { signUpWithEmail } from "./actions";

export default function SignUpPage() {
  const [state, formAction, isPending] = useActionState(signUpWithEmail, null);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-6 px-4 bg-zinc-50">
      <form
        action={formAction}
        className="flex w-full max-w-sm flex-col gap-4 rounded-xl border border-zinc-200 bg-white p-8 shadow-sm"
      >
        <h1 className="text-center text-xl font-semibold text-zinc-900">
          Create account
        </h1>
        <GoogleSignInButton requestSignUp label="Sign up with Google" />
        <div className="flex items-center gap-3 py-1">
          <div className="h-px flex-1 bg-zinc-200" />
          <span className="shrink-0 text-xs text-zinc-500">or use email</span>
          <div className="h-px flex-1 bg-zinc-200" />
        </div>

        <FormInput
          htmlFor="name"
          label="name"
          id="name"
          inputName="name"
          inputType="name"
          autoComplete="name"
          placeholder="Jane Doe"
        />
        <FormInput
          htmlFor="email"
          label="email"
          id="email"
          inputName="email"
          inputType="email"
          autoComplete="email"
          placeholder="you@example.com"
        />

        <FormInput
          htmlFor="password"
          label="password"
          id="password"
          inputName="password"
          inputType="password"
          autoComplete="new-password"
          placeholder="••••••••"
        />

        {state?.error ? (
          <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
            {state.error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-60"
        >
          {isPending ? "Creating account…" : "Create account"}
        </button>
      </form>
      <p className="text-center text-sm text-zinc-600">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="font-medium text-indigo-700 hover:text-indigo-600"
        >
          Sign in
        </Link>
      </p>
      <Link href="/" className="text-xs text-indigo-800 hover:text-indigo-700">
        Go back home
      </Link>
    </div>
  );
}
