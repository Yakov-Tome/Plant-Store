"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { ISRAEL_CITIES } from "@/data/data";
import BlockAuthPages from "@/components/auth/BlockAuthPages";

export default function RegisterPage() {
  const { signup, loading } = useAuth();
  const router = useRouter();

  const [formdata, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    city: ISRAEL_CITIES[0] || "",
    address: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signup(formdata);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const { firstName, lastName, email, password, phone, city, address } =
    formdata;

  return (
    <BlockAuthPages>
      <main className="min-h-screen flex items-center justify-center bg-white/40 text-(--leaf-new) bg-[url('/form.jpg')] bg-cover bg-center px-4 font-mono pt-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md border rounded-lg p-6 space-y-4 bg-white/80 backdrop-blur-2xl mb-120"
        >
          <h1 className="text-xl font-bold text-center">הרשמה</h1>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-sm">שם פרטי</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-black"
                value={firstName}
                onChange={(e) =>
                  setFormdata({ ...formdata, firstName: e.target.value })
                }
                placeholder="שם פרטי"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm">שם משפחה</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-black"
                value={lastName}
                onChange={(e) =>
                  setFormdata({ ...formdata, lastName: e.target.value })
                }
                placeholder="שם משפחה"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-sm">אימייל</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2 text-black"
              value={email}
              onChange={(e) =>
                setFormdata({ ...formdata, email: e.target.value })
              }
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm">סיסמה</label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2 text-black"
              value={password}
              onChange={(e) =>
                setFormdata({ ...formdata, password: e.target.value })
              }
              placeholder="********"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm">טלפון</label>
            <input
              type="tel"
              className="w-full border rounded px-3 py-2 text-black"
              value={phone}
              onChange={(e) =>
                setFormdata({ ...formdata, phone: e.target.value })
              }
              placeholder="0501234567"
              pattern="[0-9]{3}[0-9]{7}"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-sm">עיר</label>
              <select
                className="w-full border rounded px-3 py-2 text-black"
                value={city}
                onChange={(e) =>
                  setFormdata({ ...formdata, city: e.target.value })
                }
                required
              >
                {ISRAEL_CITIES.map((cityName) => (
                  <option key={cityName} value={cityName}>
                    {cityName}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <label className="block text-sm">כתובת</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-black"
                value={address}
                onChange={(e) =>
                  setFormdata({ ...formdata, address: e.target.value })
                }
                placeholder="רחוב, מספר בית, דירה"
                required
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <a href="/login" className="text-sm text-blue-500 hover:underline">
              התחברות
            </a>
          </div>

          <button
            type="submit"
            className={`w-full bg-[#54A679] text-white py-2 px-4 rounded hover:bg-[#4A8A6B] transition-colors cursor-pointer ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "טוען..." : "הרשמה"}
          </button>
        </form>
      </main>
    </BlockAuthPages>
  );
}
