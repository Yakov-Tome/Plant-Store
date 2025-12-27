"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { auth, db } from "@/firebase/config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isAdmin, setIsAdmin] = useState(undefined);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!isMounted) return;

      setUser(firebaseUser);

      if (!firebaseUser) {
        setUserData(null);
        setIsAdmin(false);
        setLoadingAuth(false);
        console.log("No user logged in");
        return;
      }

      try {
        const userRef = doc(db, "users", firebaseUser.uid);
        const snap = await getDoc(userRef);

        if (!isMounted) return;

        if (snap.exists()) {
          const data = snap.data();
          setUserData(data);
          setIsAdmin(data?.isAdmin === true);
        } else {
          setUserData(null);
          setIsAdmin(false);
        }

        console.log("User loaded from Firestore:", firebaseUser.uid);
      } catch (error) {
        console.error("Error handling auth state:", error);
        if (isMounted) {
          setUserData(null);
          setIsAdmin(false);
        }
      } finally {
        if (isMounted) {
          setLoadingAuth(false);
        }
      }
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  const signup = useCallback(async (formdata) => {
    const { email, password, phone, city, address, firstName, lastName } =
      formdata;

    const result = await createUserWithEmailAndPassword(auth, email, password);
    const uid = result.user.uid;

    await setDoc(doc(db, "users", uid), {
      name: `${firstName} ${lastName}`,
      uid,
      email,
      phone: phone || null,
      city: city || null,
      address: address || null,
      firstName: firstName || null,
      lastName: lastName || null,
      online: true,
      isAdmin: false,
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp(),
    });

    return result;
  }, []);

  const login = useCallback(async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const userId = result.user.uid;

    await setDoc(
      doc(db, "users", userId),
      {
        online: true,
        lastLogin: serverTimestamp(),
      },
      { merge: true }
    );

    return result;
  }, []);

  const logout = useCallback(async () => {
    try {
      if (user?.uid) {
        await setDoc(
          doc(db, "users", user.uid),
          {
            online: false,
            lastLogin: serverTimestamp(),
          },
          { merge: true }
        );
      }
      await signOut(auth);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  }, [user?.uid]);

  const value = useMemo(
    () => ({
      user,
      userData,
      isAdmin,
      loadingAuth,
      loading: loadingAuth,
      signup,
      login,
      logout,
    }),
    [user, userData, isAdmin, loadingAuth, signup, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
