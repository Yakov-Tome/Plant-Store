(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Git/Plant-Store/src/firebase/config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyBtXPFUmiYaJDt4TW98pOmhL2zwDH9xlFU"),
    authDomain: ("TURBOPACK compile-time value", "mashtela-b1483.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "mashtela-b1483"),
    storageBucket: ("TURBOPACK compile-time value", "mashtela-b1483.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "1020016959084"),
    appId: ("TURBOPACK compile-time value", "1:1020016959084:web:844c2699e437bd02818249"),
    measurementId: ("TURBOPACK compile-time value", "G-C35Z6RX2SH")
};
function createFirebaseApp() {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApp"])();
}
const app = createFirebaseApp();
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Git/Plant-Store/src/context/AuthContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/firebase/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAdmin, setIsAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [loadingAuth, setLoadingAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            let isMounted = true;
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "AuthProvider.useEffect.unsubscribe": async (firebaseUser)=>{
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
                        const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "users", firebaseUser.uid);
                        const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(userRef);
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
                    } finally{
                        if (isMounted) {
                            setLoadingAuth(false);
                        }
                    }
                }
            }["AuthProvider.useEffect.unsubscribe"]);
            return ({
                "AuthProvider.useEffect": ()=>{
                    isMounted = false;
                    unsubscribe();
                }
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], []);
    const signup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[signup]": async (formdata)=>{
            const { email, password, phone, city, address, firstName, lastName } = formdata;
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUserWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], email, password);
            const uid = result.user.uid;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "users", uid), {
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
                createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                lastLogin: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
            });
            return result;
        }
    }["AuthProvider.useCallback[signup]"], []);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[login]": async (email_0, password_0)=>{
            const result_0 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], email_0, password_0);
            const userId = result_0.user.uid;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "users", userId), {
                online: true,
                lastLogin: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
            }, {
                merge: true
            });
            return result_0;
        }
    }["AuthProvider.useCallback[login]"], []);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[logout]": async ()=>{
            try {
                if (user?.uid) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "users", user.uid), {
                        online: false,
                        lastLogin: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                    }, {
                        merge: true
                    });
                }
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
            } catch (error_0) {
                console.error("Error during logout:", error_0);
            }
        }
    }["AuthProvider.useCallback[logout]"], [
        user?.uid
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AuthProvider.useMemo[value]": ()=>({
                user,
                userData,
                isAdmin,
                loadingAuth,
                loading: loadingAuth,
                signup,
                login,
                logout
            })
    }["AuthProvider.useMemo[value]"], [
        user,
        userData,
        isAdmin,
        loadingAuth,
        signup,
        login,
        logout
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/Git/Plant-Store/src/context/AuthContext.js",
        lineNumber: 122,
        columnNumber: 10
    }, this);
}
_s(AuthProvider, "gAMJqsr9Zj7D56EM+NXe95ORyuU=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "3ec92ddc7b17c36124b75b6fea3339689f25b37e2eea34bccffb18be8edf4767") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3ec92ddc7b17c36124b75b6fea3339689f25b37e2eea34bccffb18be8edf4767";
    }
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!ctx) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return ctx;
}
_s1(useAuth, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/react-icons/ri/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/context/AuthContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "98177382c15c2a709a16efdb64511142139e48335d1abe57c94cf50c46d0266d") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "98177382c15c2a709a16efdb64511142139e48335d1abe57c94cf50c46d0266d";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { loadingAuth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { userData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const isAdmin = userData?.isAdmin;
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                id: "1",
                href: "/",
                name: "\u05D1\u05D9\u05EA"
            },
            {
                id: "2",
                href: "/catalog",
                name: "\u05E7\u05D8\u05DC\u05D5\u05D2 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD"
            },
            {
                id: "3",
                href: "/faq",
                name: "\u05E9\u05D0\u05DC\u05D5\u05EA \u05E0\u05E4\u05D5\u05E6\u05D5\u05EA"
            },
            {
                id: "4",
                href: "/contact",
                name: "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const RouteAll = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = RouteAll.slice(0, 2);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const RouteA = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = RouteAll.slice(2);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const RouteB = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            tabIndex: 0,
            className: "btn btn-ghost active:bg-(--leaf-new) lg:hidden hover:bg-(--leaf-new) rounded-full hover:text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiMenu3Fill"], {
                size: 22
            }, void 0, false, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
                lineNumber: 68,
                columnNumber: 142
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== isAdmin || $[6] !== loadingAuth || $[7] !== pathname) {
        t4 = isAdmin && !loadingAuth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: `rounded-2xl ${pathname === "/admin" ? "bg-[#95D06F]/20 text-[#95D06F]-content font-bold" : "hover:bg-[#95D06F] hover:text-black"}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "text-sm",
                href: "/admin",
                children: "ניהול"
            }, void 0, false, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
                lineNumber: 75,
                columnNumber: 197
            }, this)
        }, "admin", false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
            lineNumber: 75,
            columnNumber: 37
        }, this);
        $[5] = isAdmin;
        $[6] = loadingAuth;
        $[7] = pathname;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== pathname) {
        t5 = RouteAll.map({
            "Navbar[RouteAll.map()]": (r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: `rounded-2xl ${pathname === r.href ? "bg-[#95D06F]/20 text-[#95D06F]-content font-bold" : "hover:bg-[#95D06F] hover:text-black"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "text-sm",
                        href: r.href,
                        children: r.name
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
                        lineNumber: 86,
                        columnNumber: 195
                    }, this)
                }, r.id, false, {
                    fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
                    lineNumber: 86,
                    columnNumber: 38
                }, this)
        }["Navbar[RouteAll.map()]"]);
        $[9] = pathname;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t4 || $[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "dropdown",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    tabIndex: -1,
                    className: "menu menu-sm dropdown-content rounded-box mt-3 w-52 p-2 shadow bg-white/95",
                    children: [
                        t4,
                        t5
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
                    lineNumber: 95,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[11] = t4;
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:hidden flex items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-xl sm:text-2xl",
                children: "המשתלה בנווה צדק"
            }, void 0, false, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
                lineNumber: 104,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/logoA.png",
                    width: 120,
                    height: 120,
                    alt: "logo",
                    className: "object-contain"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
                    lineNumber: 111,
                    columnNumber: 30
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
                lineNumber: 111,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t6) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "navbar-start flex justify-between w-full",
            children: [
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[16] = t6;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== pathname) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "menu menu-horizontal px-1 w-full justify-center gap-6",
            children: RouteA.map({
                "Navbar[RouteA.map()]": (r_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: r_0.href,
                            className: `text-xl transition-all active:bg-(--leaf-new)/0 ${pathname === r_0.href ? "text-[#95D06F]-content font-bold border-b-2 border-[#95D06F] hover:bg-white/0" : "hover:text-[#95D06F] hover:bg-white/0"}`,
                            children: r_0.name
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
                            lineNumber: 127,
                            columnNumber: 57
                        }, this)
                    }, r_0.id, false, {
                        fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
                        lineNumber: 127,
                        columnNumber: 40
                    }, this)
            }["Navbar[RouteA.map()]"])
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[18] = pathname;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/logoA.png",
                    width: 120,
                    height: 120,
                    alt: "logo",
                    className: "object-contain"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
                    lineNumber: 136,
                    columnNumber: 63
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
                lineNumber: 136,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== pathname) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "menu menu-horizontal px-1 w-full justify-center gap-6 relative",
            children: RouteB.map({
                "Navbar[RouteB.map()]": (r_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: r_1.href,
                            className: `text-xl transition-all active:bg-(--leaf-new)/0 ${pathname === r_1.href ? "text-[#95D06F]-content font-bold border-b-2 border-[#95D06F]" : "hover:text-[#95D06F] hover:bg-white/0"}`,
                            children: r_1.name
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
                            lineNumber: 144,
                            columnNumber: 57
                        }, this)
                    }, r_1.id, false, {
                        fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
                        lineNumber: 144,
                        columnNumber: 40
                    }, this)
            }["Navbar[RouteB.map()]"])
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[21] = pathname;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== t10 || $[24] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "navbar-center hidden lg:grid lg:min-w-full lg:grid-cols-[1fr_auto_1fr] items-center",
            children: [
                t10,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t12;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== t13 || $[27] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "navbar bg-white/80 backdrop-blur-2xl shadow-md text-[#4F3F31] rounded-full h-16 px-3 sm:px-6 pointer-events-auto font-mono",
            children: [
                t9,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/layout/Navbar.js",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[26] = t13;
        $[27] = t9;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    return t14;
}
_s(Navbar, "AwQS2sg9oxY8A07oT3wWR9IF9Uo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Git/Plant-Store/src/components/ScrollToTop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ScrollToTop() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "99dee6539643b74d56b8acb4858611daa8c1a57337bba08d7fb127961955b779") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "99dee6539643b74d56b8acb4858611daa8c1a57337bba08d7fb127961955b779";
    }
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ScrollToTop[useEffect()]": ()=>{
                const handleScroll = {
                    "ScrollToTop[useEffect() > handleScroll]": ()=>{
                        if (window.scrollY > 100) {
                            setShow(true);
                        } else {
                            setShow(false);
                        }
                    }
                }["ScrollToTop[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll);
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["ScrollToTop[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const scrollUp = _ScrollToTopScrollUp;
    if (!show) {
        return null;
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: scrollUp,
            "aria-label": "\u05D7\u05D6\u05E8\u05D4 \u05DC\u05E8\u05D0\u05E9 \u05D4\u05E2\u05DE\u05D5\u05D3",
            className: "\n        fixed z-50\n        right-4 bottom-24 md:right-6 md:bottom-24\n        lg:bottom-6 lg:right-6\n        bg-white/70 text-(--leaf-new) p-3 rounded-full shadow-xl\n        hover:bg-white/90 transition\n        focus:outline-none focus:ring-1 focus:ring-(--leaf-new)/70 focus:ring-offset-1\n        cursor-pointer\n      ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaArrowUp"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/components/ScrollToTop.js",
                lineNumber: 47,
                columnNumber: 475
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ScrollToTop.js",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_s(ScrollToTop, "bXBd/WbmO9A8Q7bxaOKZvuJyGc0=");
_c = ScrollToTop;
function _ScrollToTopScrollUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
var _c;
__turbopack_context__.k.register(_c, "ScrollToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Git/Plant-Store/src/context/CartContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
function CartProvider({ children }) {
    _s();
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingCart, setLoadingCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            try {
                if ("TURBOPACK compile-time truthy", 1) {
                    const storedCart = localStorage.getItem("cart");
                    if (storedCart) {
                        setCart(JSON.parse(storedCart));
                    }
                }
            } catch (err) {
                console.error("Failed to load cart from localStorage:", err);
            } finally{
                setLoadingCart(false);
            }
        }
    }["CartProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    localStorage.setItem("cart", JSON.stringify(cart));
                } catch (err_0) {
                    console.error("Failed to save cart to localStorage:", err_0);
                }
            }
        }
    }["CartProvider.useEffect"], [
        cart
    ]);
    const addToCart = (product)=>{
        setCart((prev)=>{
            const existing = prev.find((item)=>item.id === product.id);
            if (existing) {
                return prev.map((item_0)=>item_0.id === product.id ? {
                        ...item_0,
                        quantity: item_0.quantity + 1
                    } : item_0);
            }
            return [
                ...prev,
                {
                    ...product,
                    quantity: 1
                }
            ];
        });
    };
    const removeFromCart = (id)=>{
        setCart((prev_0)=>prev_0.filter((item_1)=>item_1.id !== id));
    };
    const clearCart = ()=>{
        setCart([]);
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.removeItem("cart");
        }
    };
    const increaseQuantity = (id_0)=>{
        setCart((prev_1)=>prev_1.map((item_2)=>item_2.id === id_0 ? {
                    ...item_2,
                    quantity: item_2.quantity + 1
                } : item_2));
    };
    const decreaseQuantity = (id_1)=>{
        setCart((prev_2)=>prev_2.map((item_3)=>item_3.id === id_1 ? {
                    ...item_3,
                    quantity: Math.max(0, item_3.quantity - 1)
                } : item_3).filter((item_4)=>item_4.quantity > 0));
    };
    const value = {
        cart,
        loadingCart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/Git/Plant-Store/src/context/CartContext.js",
        lineNumber: 79,
        columnNumber: 10
    }, this);
}
_s(CartProvider, "Qc3UYD3s7flPg3OKDtWBQnKlNGw=");
_c = CartProvider;
function useCart() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "242f7f6d3b2b3ad5222bf1ebed480523167d4c6a5170d68bd59dd5f6c662c2b9") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "242f7f6d3b2b3ad5222bf1ebed480523167d4c6a5170d68bd59dd5f6c662c2b9";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
}
_s1(useCart, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Git/Plant-Store/src/app/providers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/context/CartContext.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function Providers(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "7283698e017b029d2bc29c69cd63fde1a31cc913b1b4571f5084af9bad7a7bb3") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7283698e017b029d2bc29c69cd63fde1a31cc913b1b4571f5084af9bad7a7bb3";
    }
    const { children } = t0;
    let t1;
    if ($[1] !== children) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartProvider"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/app/providers.js",
                lineNumber: 19,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/app/providers.js",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Git/Plant-Store/src/components/ui/ClientDockBar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/react-icons/ai/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/context/CartContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// src/components/ui/DockBar.jsx
"use client";
;
;
;
;
;
;
;
;
;
function DockBar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "e7c7869aac8eb9ebe8e084c78ba387f9ab9316f7b32593580d3e5873569b1aca") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e7c7869aac8eb9ebe8e084c78ba387f9ab9316f7b32593580d3e5873569b1aca";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { logout, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { cart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const cartCount = cart.reduce(_DockBarCartReduce, 0);
    let t0;
    if ($[1] !== pathname) {
        t0 = ({
            "DockBar[isActive]": (path)=>pathname === path
        })["DockBar[isActive]"];
        $[1] = pathname;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const isActive = t0;
    const t1 = `${"transition-transform duration-300 lg:hover:scale-110"} ${isActive("/") ? "dock-active" : ""} bg-white rounded-full h-10 w-2 flex flex-col justify-center items-center`;
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoHomeOutline"], {
            size: 24,
            className: "shrink-0 scale-100 transform-none"
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientDockBar.js",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "dock-label text-sm",
            children: "ראשי"
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientDockBar.js",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t1) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: t1,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientDockBar.js",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const t5 = `${"transition-transform duration-300 lg:hover:scale-110"} ${isActive("/cart") ? "dock-active" : ""}`;
    let t6;
    if ($[7] !== cartCount || $[8] !== user) {
        t6 = cartCount > 0 && user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "indicator-item badge badge-sm badge-error text-white",
            children: cartCount
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientDockBar.js",
            lineNumber: 64,
            columnNumber: 35
        }, this);
        $[7] = cartCount;
        $[8] = user;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsCart3"], {
            size: 24,
            className: "shrink-0 scale-100 transform-none"
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientDockBar.js",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "indicator",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientDockBar.js",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[11] = t6;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "dock-label text-sm",
            children: "עגלה"
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientDockBar.js",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t5 || $[15] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/cart",
            className: t5,
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientDockBar.js",
            lineNumber: 95,
            columnNumber: 11
        }, this);
        $[14] = t5;
        $[15] = t8;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== isActive || $[18] !== logout || $[19] !== user) {
        t11 = user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/settings",
                    className: `${"transition-transform duration-300 lg:hover:scale-110"} ${isActive("/settings") ? "dock-active" : ""}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoSettingsOutline"], {
                            size: 24,
                            className: "shrink-0 scale-100 transform-none"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientDockBar.js",
                            lineNumber: 104,
                            columnNumber: 162
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "dock-label text-sm",
                            children: "הגדרות"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientDockBar.js",
                            lineNumber: 104,
                            columnNumber: 239
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientDockBar.js",
                    lineNumber: 104,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: logout,
                    className: "transition-transform duration-300 lg:hover:scale-110",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiOutlineLogout"], {
                            size: 24,
                            className: "shrink-0 scale-100 transform-none"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientDockBar.js",
                            lineNumber: 104,
                            columnNumber: 386
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "dock-label text-sm",
                            children: "התנתק"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientDockBar.js",
                            lineNumber: 104,
                            columnNumber: 461
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientDockBar.js",
                    lineNumber: 104,
                    columnNumber: 296
                }, this)
            ]
        }, void 0, true);
        $[17] = isActive;
        $[18] = logout;
        $[19] = user;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t10 || $[22] !== t11 || $[23] !== t4) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "\n        dock\n        bg-[#F6F7F3]/80\n        backdrop-blur-2xl\n        lg:hidden\n        shadow-lg\n        border border-gray-300\n        rounded-lg\n        h-16\n        px-6\n        flex\n        justify-between\n        items-center\n        text-(--leaf-new)\n        will-change-transform\n        transform-gpu\n        scale-100\n      ",
            children: [
                t4,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientDockBar.js",
            lineNumber: 114,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t11;
        $[23] = t4;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    return t12;
}
_s(DockBar, "urZRtp160i3SMfYirqiF8zfoK3M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = DockBar;
function _DockBarCartReduce(sum, item) {
    return sum + (item.quantity || 0);
}
const __TURBOPACK__default__export__ = DockBar;
var _c;
__turbopack_context__.k.register(_c, "DockBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/react-icons/ai/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/context/CartContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function ClientSidebar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "630d268fb638444963d40800ecd31315cff6b089d089837ee74d4f7d7759c5ca") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "630d268fb638444963d40800ecd31315cff6b089d089837ee74d4f7d7759c5ca";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { logout, isAdmin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { cart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [adminOpen, setAdminOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] !== pathname) {
        t0 = ({
            "ClientSidebar[isActiveExact]": (path)=>pathname === path
        })["ClientSidebar[isActiveExact]"];
        $[1] = pathname;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const isActiveExact = t0;
    let t1;
    if ($[3] !== pathname) {
        const isAdminActive = {
            "ClientSidebar[isAdminActive]": (href)=>{
                if (href === "/admin") {
                    return pathname === "/admin";
                }
                return pathname.startsWith(href);
            }
        }["ClientSidebar[isAdminActive]"];
        t1 = ({
            "ClientSidebar[adminLinkClass]": (href_0)=>`rounded-md px-2 py-1 transition ${isAdminActive(href_0) ? "bg-[#95D06F]/20 font-bold text-(--leaf-new)" : "hover:bg-[#95D06F]"}`
        })["ClientSidebar[adminLinkClass]"];
        $[3] = pathname;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const adminLinkClass = t1;
    let t2;
    let t3;
    if ($[5] !== adminOpen || $[6] !== isAdmin) {
        t2 = ({
            "ClientSidebar[useEffect()]": ()=>{
                if (!isAdmin || !adminOpen) {
                    return;
                }
                const handleClickOutside = {
                    "ClientSidebar[useEffect() > handleClickOutside]": (e)=>{
                        if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                            setAdminOpen(false);
                        }
                    }
                }["ClientSidebar[useEffect() > handleClickOutside]"];
                document.addEventListener("mousedown", handleClickOutside);
                return ()=>document.removeEventListener("mousedown", handleClickOutside);
            }
        })["ClientSidebar[useEffect()]"];
        t3 = [
            adminOpen,
            isAdmin
        ];
        $[5] = adminOpen;
        $[6] = isAdmin;
        $[7] = t2;
        $[8] = t3;
    } else {
        t2 = $[7];
        t3 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "ClientSidebar[useEffect()]": ()=>{
                setAdminOpen(false);
            }
        })["ClientSidebar[useEffect()]"];
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== pathname) {
        t5 = [
            pathname
        ];
        $[10] = pathname;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    const t6 = `tooltip tooltip-right tooltip-success transition-all duration-300 ${isActiveExact("/") ? "bg-base-300 scale-110" : "hover:scale-110"}`;
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoHomeOutline"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: t6,
                "data-tip": "\u05D1\u05D9\u05EA",
                children: t7
            }, void 0, false, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                lineNumber: 123,
                columnNumber: 14
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
            lineNumber: 123,
            columnNumber: 10
        }, this);
        $[13] = t6;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    const t9 = `tooltip tooltip-right tooltip-success relative transition-all duration-300 ${isActiveExact("/cart") ? "bg-base-300 scale-110" : "hover:scale-110"}`;
    let t10;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsCart3"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== cart.length) {
        t11 = cart.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "badge badge-sm badge-error absolute -top-1 -right-1",
            children: cart.length
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
            lineNumber: 139,
            columnNumber: 30
        }, this);
        $[16] = cart.length;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== t11 || $[19] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/cart",
                className: t9,
                "data-tip": "\u05E2\u05D2\u05DC\u05D4",
                children: [
                    t10,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                lineNumber: 147,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[18] = t11;
        $[19] = t9;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== isActiveExact || $[22] !== user) {
        t13 = user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/settings",
                className: `tooltip tooltip-right tooltip-success transition-all duration-300 ${isActiveExact("/settings") ? "bg-base-300 scale-110" : "hover:scale-110"}`,
                "data-tip": "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoSettingsOutline"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                    lineNumber: 156,
                    columnNumber: 252
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                lineNumber: 156,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
            lineNumber: 156,
            columnNumber: 19
        }, this);
        $[21] = isActiveExact;
        $[22] = user;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== adminLinkClass || $[25] !== adminOpen || $[26] !== isAdmin) {
        t14 = isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "ClientSidebar[<button>.onClick]": ()=>setAdminOpen(_ClientSidebarButtonOnClickSetAdminOpen)
                    }["ClientSidebar[<button>.onClick]"],
                    className: "tooltip tooltip-right tooltip-success hover:scale-110 transition-transform duration-300 flex items-center justify-center",
                    "data-tip": "\u05E0\u05D9\u05D4\u05D5\u05DC \u05D7\u05E0\u05D5\u05EA",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStore"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                        lineNumber: 167,
                        columnNumber: 247
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                    lineNumber: 165,
                    columnNumber: 26
                }, this),
                adminOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "menu bg-white rounded-box border border-gray-200 shadow-inner text-sm min-w-40 mt-2 ml-2 text-black mx-auto p-2 flex flex-col gap-1 justify-center items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin",
                                className: adminLinkClass("/admin"),
                                children: "לוח ניהול"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                                lineNumber: 167,
                                columnNumber: 471
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                            lineNumber: 167,
                            columnNumber: 467
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin/categories",
                                className: adminLinkClass("/admin/categories"),
                                children: "קטגוריות"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                                lineNumber: 167,
                                columnNumber: 553
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                            lineNumber: 167,
                            columnNumber: 549
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin/products",
                                className: adminLinkClass("/admin/products"),
                                children: "מוצרים"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                                lineNumber: 167,
                                columnNumber: 656
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                            lineNumber: 167,
                            columnNumber: 652
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin/edit",
                                className: adminLinkClass("/admin/edit"),
                                children: "עריכה"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                                lineNumber: 167,
                                columnNumber: 753
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                            lineNumber: 167,
                            columnNumber: 749
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin/delete",
                                className: adminLinkClass("/admin/delete"),
                                children: "מחיקה"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                                lineNumber: 167,
                                columnNumber: 841
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                            lineNumber: 167,
                            columnNumber: 837
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin/orders",
                                className: adminLinkClass("/admin/orders"),
                                children: "הזמנות"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                                lineNumber: 167,
                                columnNumber: 933
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                            lineNumber: 167,
                            columnNumber: 929
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin/faqs",
                                className: adminLinkClass("/admin/faqs"),
                                children: "שאלות ותשובות"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                                lineNumber: 167,
                                columnNumber: 1026
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                            lineNumber: 167,
                            columnNumber: 1022
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                    lineNumber: 167,
                    columnNumber: 291
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
            lineNumber: 165,
            columnNumber: 22
        }, this);
        $[24] = adminLinkClass;
        $[25] = adminOpen;
        $[26] = isAdmin;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== logout || $[29] !== user) {
        t15 = user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: logout,
                className: "tooltip tooltip-right tooltip-success hover:scale-110",
                "data-tip": "\u05D9\u05E6\u05D9\u05D0\u05D4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiOutlineLogout"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                    lineNumber: 177,
                    columnNumber: 158
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                lineNumber: 177,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
            lineNumber: 177,
            columnNumber: 19
        }, this);
        $[28] = logout;
        $[29] = user;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== t12 || $[32] !== t13 || $[33] !== t14 || $[34] !== t15 || $[35] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: wrapperRef,
            className: "fixed -left-2 top-1/2 -translate-y-1/2 hidden lg:block z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "menu bg-[#F6F7F3]/80 backdrop-blur-2xl shadow-lg border border-gray-300 rounded-box text-(--leaf-new) gap-1 flex items-center justify-center flex-col p-2",
                children: [
                    t8,
                    t12,
                    t13,
                    t14,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
                lineNumber: 186,
                columnNumber: 105
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/components/ui/ClientSidebar.js",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[31] = t12;
        $[32] = t13;
        $[33] = t14;
        $[34] = t15;
        $[35] = t8;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    return t16;
}
_s(ClientSidebar, "0A1FbxyebVIOqk8GZX/hxWvjBtE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = ClientSidebar;
function _ClientSidebarButtonOnClickSetAdminOpen(prev) {
    return !prev;
}
const __TURBOPACK__default__export__ = ClientSidebar;
var _c;
__turbopack_context__.k.register(_c, "ClientSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Git_Plant-Store_src_1e05ddc6._.js.map