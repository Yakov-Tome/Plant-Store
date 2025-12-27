"use client";

import Header from "@/components/Header";
import ContactMap from "@/components/ui/Map";
import React, { useState } from "react";
import Link from "next/link";
import { Details } from "@/data/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setSent(false);
    setError("");
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data?.error || "שליחה נכשלה. נסה שוב.");
        return;
      }

      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setError("שגיאת רשת. נסה שוב.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[url('/minimal-abstract-background-with-shadow-tropical-palm-leaves-green-background.jpg')] bg-fixed bg-cover bg-left bg-white/50 backdrop-blur-sm text-(--leaf-new) font-sans">
      <div className="">
        <Header title="צור קשר" text="נשמח לשמוע ממך!" />

        <div className="mt-10 grid grid-cols-1 gap-10 items-stretch max-w-6xl mx-auto">
          <div className="order-1 lg:order-2 lg:max-w-[98%] mx-auto px-4 w-full rounded-3xl mb-20">
            <div className="bg-white/70 backdrop-blur-3xl border border-emerald-50 rounded-3xl shadow-[0_18px_60px_rgba(15,23,42,0.16)] w-full mx-auto">
              {/* פרטי התקשרות */}
              <div className="p-8 pb-6">
                <h2 className="text-2xl font-bold text-right mb-4">
                  פרטי התקשרות
                </h2>

                <div className="mb-6 h-64 lg:h-96 rounded-t-xl overflow-hidden border-b-2 border-emerald-200">
                  <ContactMap />
                </div>

                <p className="text-sm text-slate-500 text-right mb-6">
                  אפשר לכתוב, להתקשר, או לקפוץ להגיד שלום – מה שנוח לך.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Details.map((detail) => (
                    <Link
                      key={detail.id}
                      href={detail.href}
                      target={detail.blank ? "_blank" : "_self"}
                      className="block"
                    >
                      <div className="flex items-center justify-between gap-3 rounded-full border border-slate-100 bg-slate-50/70 px-4 py-3 text-sm hover:border-emerald-300 hover:bg-white transition hover:scale-105 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <span className="flex min-h-10 min-w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                            {detail.icon}
                          </span>

                          <span className="text-right">{detail.text}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-8">
                <div className="border-t border-slate-100 my-4" />
              </div>

              {/* טופס */}
              <div className="px-8 pb-8 pt-2">
                <h2 className="text-2xl font-bold text-right mb-4">צור קשר</h2>

                <p className="text-sm text-slate-500 text-right mb-6">
                  השאר פרטים ונחזור אליך בהקדם עם תשובות, רעיונות וצמחים
                  מתאימים.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col space-y-4"
                >
                  <div className="flex flex-col gap-1">
                    <label className="text-right text-sm font-medium text-(--leaf-new) ">
                      שם מלא
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="איך לפנות אליך?"
                      className="block w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-right placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-right text-sm font-medium text-(--leaf-new)">
                      אימייל
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@mail.com"
                      className="block w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-right placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-right text-sm font-medium text-(--leaf-new)">
                      הודעה
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="ספר לנו קצת מה אתה מחפש – צמח למרפסת, לפינת עבודה, או מתנה מיוחדת..."
                      className="block w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-right placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition min-h-32"
                      required
                    />
                  </div>

                  {sent && (
                    <p className="text-emerald-600 text-right">
                      ההודעה נשלחה בהצלחה 🌿
                    </p>
                  )}

                  {error && <p className="text-red-600 text-right">{error}</p>}

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-accent text-lg text-white px-8 py-3 rounded-2xl border-0 disabled:opacity-60"
                    >
                      {loading ? "שולח..." : "שלח הודעה"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
