"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import BlockAuthPages from "@/components/auth/BlockAuthPages";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      router.push("/"); // After login
    } catch (err) {
      setError("אימייל או סיסמה שגויים");
    }
  };

  return (
    <BlockAuthPages>
      <main className="min-h-screen flex items-center justify-center bg-white/40 text-(--leaf-new) bg-[url('/form.jpg')] bg-cover bg-center bg-fixed px-4 font-mono pt-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md border rounded-lg p-6 space-y-4 bg-white/80 backdrop-blur-2xl mb-120"
        >
          <h1 className="text-xl font-bold text-center">התחברות</h1>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="space-y-1">
            <label className="block text-sm">אימייל</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2 text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm">סיסמה</label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2 text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
          </div>
          <div className="flex justify-between items-center">
            <a
              href="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              שכחת סיסמה?
            </a>
            <Link
              href="/register"
              className="text-sm text-blue-500 hover:underline"
            >
              הרשמה
            </Link>
          </div>
          <button
            type="submit"
            className="btn bg-[#5AB4CB] shadow-none border-0 hover:bg-[#4A9AB1] w-full"
          >
            התחבר
          </button>
        </form>
      </main>
    </BlockAuthPages>
  );
}
