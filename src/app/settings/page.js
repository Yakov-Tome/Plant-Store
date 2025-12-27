"use client";

import React, { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import { useAuth } from "@/context/AuthContext";
import { ISRAEL_CITIES } from "@/data/data";
import { useUpdateUserProfile } from "@/hooks/useUpdateUserProfile";
import { FaUserCircle } from "react-icons/fa";

export default function Setting() {
  const { user, userData, loadingAuth } = useAuth(); // assumes you have user + loadingAuth
  const { updateUserProfile, loading } = useUpdateUserProfile();

  const userId = user?.uid;

  const initialForm = useMemo(
    () => ({
      firstName: "",
      lastName: "",
      phone: "",
      city: ISRAEL_CITIES?.[0] || "",
      address: "",
    }),
    []
  );

  const [formdata, setFormdata] = useState(initialForm);
  const [savedMsg, setSavedMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Fill form when userData arrives/changes
  useEffect(() => {
    if (!userData) return;

    setFormdata({
      firstName: userData.firstName || "",
      lastName: userData.lastName || "",
      phone: userData.phone || "",
      city: userData.city || ISRAEL_CITIES?.[0] || "",
      address: userData.address || "",
    });
  }, [userData]);

  const onChange = (key) => (e) => {
    setSavedMsg("");
    setErrorMsg("");
    setFormdata((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSavedMsg("");
    setErrorMsg("");

    if (!userId) {
      setErrorMsg("אין משתמש מחובר.");
      return;
    }

    const requiredFields = [
      "firstName",
      "lastName",
      "phone",
      "city",
      "address",
    ];

    const hasEmpty = requiredFields.some(
      (key) => !formdata[key] || !formdata[key].trim()
    );

    if (hasEmpty) {
      setErrorMsg("חובה למלא את כל השדות.");
      return;
    }

    const payload = {
      firstName: formdata.firstName.trim(),
      lastName: formdata.lastName.trim(),
      phone: formdata.phone.trim(),
      city: formdata.city,
      address: formdata.address.trim(),
      name: `${formdata.firstName.trim()} ${formdata.lastName.trim()}`,
    };

    try {
      await updateUserProfile(userId, payload);
      setSavedMsg("הפרטים נשמרו בהצלחה ✅");
    } catch (err) {
      setErrorMsg("שגיאה בשמירה");
    }
  };

  const isReady = !loadingAuth && !!userId;

  const isFormValid =
    formdata.firstName.trim() &&
    formdata.lastName.trim() &&
    formdata.phone.trim() &&
    formdata.city.trim() &&
    formdata.address.trim();

  return (
    <div className="bg-[url('/wall.jpg')] bg-fixed bg-cover bg-center min-h-screen">
      <Header title="הגדרות" text="כאן תוכל לשנות את ההגדרות שלך." />

      <div className="max-w-[820px] mx-auto px-4 pb-12 pt-20">
        <div className="bg-white/80 backdrop-blur-xl border border-(--leaf-new) rounded-xl p-6 text-black font-mono mt-6">
          {!isReady ? (
            <p className="text-(--leaf-new)">טוען משתמש...</p>
          ) : (
            <>
              <h2 className="text-xl font-bold text-(--leaf-new) mb-4">
                <FaUserCircle className="inline-block mb-1" size={32} /> פרטי
                משתמש
              </h2>

              <div className="mb-4">
                <p className="text-sm opacity-80">
                  אימייל (לא ניתן לשינוי כאן)
                </p>
                <div
                  className="border border-black/30 w-full rounded px-3 py-2 bg-gray-100 input"
                  disabled
                >
                  {userData?.email || user?.email || "-"}
                </div>
              </div>

              {errorMsg && (
                <div className="mb-4 p-3 rounded border border-red-300 bg-red-50 text-red-700">
                  {errorMsg}
                </div>
              )}
              {savedMsg && (
                <div className="mb-4 p-3 rounded border border-green-300 bg-green-50 text-green-700">
                  {savedMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-sm">שם פרטי</label>
                    <input
                      type="text"
                      className="w-full border rounded px-3 py-2 input"
                      value={formdata.firstName}
                      onChange={onChange("firstName")}
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm">שם משפחה</label>
                    <input
                      type="text"
                      className="w-full border rounded px-3 py-2 input"
                      value={formdata.lastName}
                      onChange={onChange("lastName")}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-sm">טלפון</label>
                  <input
                    type="tel"
                    className="w-full border rounded px-3 py-2 input"
                    value={formdata.phone}
                    onChange={onChange("phone")}
                    placeholder="0501234567"
                    pattern="[0-9]{3}[0-9]{7}"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm">עיר</label>
                  <select
                    className="w-full border rounded px-3 py-2 select"
                    value={formdata.city}
                    onChange={onChange("city")}
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
                    className="w-full border rounded px-3 py-2 input"
                    value={formdata.address}
                    onChange={onChange("address")}
                    placeholder="רחוב, מספר בית, דירה"
                    required
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={!isFormValid || loading}
                    className={`py-2 px-4 rounded text-white transition-colors ${
                      isFormValid
                        ? "bg-[#54A679] hover:bg-[#4A8A6B]"
                        : "bg-gray-400 cursor-not-allowed"
                    } ${loading ? "opacity-60" : ""}`}
                  >
                    {loading ? "שומר..." : "שמירה"}
                  </button>

                  <button
                    type="button"
                    className="border rounded py-2 px-4 hover:bg-black/5"
                    onClick={() => {
                      setSavedMsg("");
                      setErrorMsg("");
                      setFormdata({
                        firstName: userData?.firstName || "",
                        lastName: userData?.lastName || "",
                        phone: userData?.phone || "",
                        city: userData?.city || ISRAEL_CITIES?.[0] || "",
                        address: userData?.address || "",
                      });
                    }}
                  >
                    ביטול
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
