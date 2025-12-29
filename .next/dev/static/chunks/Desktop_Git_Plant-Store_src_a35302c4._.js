(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Git/Plant-Store/src/components/auth/BlockAuthPages.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlockAuthPages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/context/AuthContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function BlockAuthPages(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "bec041a1bf796629216e33acc909193999170af77cc1f74e23efbb7f6e3363b0") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bec041a1bf796629216e33acc909193999170af77cc1f74e23efbb7f6e3363b0";
    }
    const { children } = t0;
    const { user, loadingAuth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    let t2;
    if ($[1] !== loadingAuth || $[2] !== router || $[3] !== user) {
        t1 = ({
            "BlockAuthPages[useEffect()]": ()=>{
                if (!loadingAuth && user) {
                    router.replace("/");
                }
            }
        })["BlockAuthPages[useEffect()]"];
        t2 = [
            user,
            loadingAuth,
            router
        ];
        $[1] = loadingAuth;
        $[2] = router;
        $[3] = user;
        $[4] = t1;
        $[5] = t2;
    } else {
        t1 = $[4];
        t2 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    if (loadingAuth) {
        let t3;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center h-screen",
                children: "טוען..."
            }, void 0, false, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/components/auth/BlockAuthPages.js",
                lineNumber: 47,
                columnNumber: 12
            }, this);
            $[6] = t3;
        } else {
            t3 = $[6];
        }
        return t3;
    }
    if (user) {
        return null;
    }
    return children;
}
_s(BlockAuthPages, "KDPkH4FxMAqUt0SYajTxvvay3f4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = BlockAuthPages;
var _c;
__turbopack_context__.k.register(_c, "BlockAuthPages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Git/Plant-Store/src/app/(auth)/login/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$components$2f$auth$2f$BlockAuthPages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/components/auth/BlockAuthPages.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function LoginPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "e93a62f82a207c881cc514268c1f2880968524136db7321270bd281d3e10774c") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e93a62f82a207c881cc514268c1f2880968524136db7321270bd281d3e10774c";
    }
    const { login } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] !== email || $[2] !== login || $[3] !== password || $[4] !== router) {
        t0 = ({
            "LoginPage[handleSubmit]": async (e)=>{
                e.preventDefault();
                setError("");
                ;
                try {
                    await login(email, password);
                    router.push("/");
                } catch (t1) {
                    setError("\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05D0\u05D5 \u05E1\u05D9\u05E1\u05DE\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D9\u05DD");
                }
            }
        })["LoginPage[handleSubmit]"];
        $[1] = email;
        $[2] = login;
        $[3] = password;
        $[4] = router;
        $[5] = t0;
    } else {
        t0 = $[5];
    }
    const handleSubmit = t0;
    let t1;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-xl font-bold text-center",
            children: "התחברות"
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/app/(auth)/login/page.js",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== error) {
        t2 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-sm",
            children: error
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/app/(auth)/login/page.js",
            lineNumber: 57,
            columnNumber: 19
        }, this);
        $[7] = error;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm",
            children: "אימייל"
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/app/(auth)/login/page.js",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "LoginPage[<input>.onChange]": (e_0)=>setEmail(e_0.target.value)
        })["LoginPage[<input>.onChange]"];
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== email) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    className: "w-full border rounded px-3 py-2 text-black",
                    value: email,
                    onChange: t4,
                    placeholder: "you@example.com"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Git/Plant-Store/src/app/(auth)/login/page.js",
                    lineNumber: 81,
                    columnNumber: 41
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/app/(auth)/login/page.js",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[11] = email;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm",
            children: "סיסמה"
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/app/(auth)/login/page.js",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "LoginPage[<input>.onChange]": (e_1)=>setPassword(e_1.target.value)
        })["LoginPage[<input>.onChange]"];
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== password) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "password",
                    className: "w-full border rounded px-3 py-2 text-black",
                    value: password,
                    onChange: t7,
                    placeholder: "********"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Git/Plant-Store/src/app/(auth)/login/page.js",
                    lineNumber: 105,
                    columnNumber: 41
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/app/(auth)/login/page.js",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[15] = password;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t10;
    let t9;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/forgot-password",
                    className: "text-sm text-blue-500 hover:underline",
                    children: "שכחת סיסמה?"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Git/Plant-Store/src/app/(auth)/login/page.js",
                    lineNumber: 114,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/register",
                    className: "text-sm text-blue-500 hover:underline",
                    children: "הרשמה"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Git/Plant-Store/src/app/(auth)/login/page.js",
                    lineNumber: 114,
                    columnNumber: 153
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/app/(auth)/login/page.js",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "btn bg-[#5AB4CB] shadow-none border-0 hover:bg-[#4A9AB1] w-full",
            children: "התחבר"
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/app/(auth)/login/page.js",
            lineNumber: 115,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t9;
    } else {
        t10 = $[17];
        t9 = $[18];
    }
    let t11;
    if ($[19] !== handleSubmit || $[20] !== t2 || $[21] !== t5 || $[22] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$components$2f$auth$2f$BlockAuthPages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen flex items-center justify-center bg-white/40 text-(--leaf-new) bg-[url('/form.jpg')] bg-cover bg-center bg-fixed px-4 font-mono pt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "w-full max-w-md border rounded-lg p-6 space-y-4 bg-white/80 backdrop-blur-2xl mb-120",
                    children: [
                        t1,
                        t2,
                        t5,
                        t8,
                        t9,
                        t10
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Git/Plant-Store/src/app/(auth)/login/page.js",
                    lineNumber: 124,
                    columnNumber: 191
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/app/(auth)/login/page.js",
                lineNumber: 124,
                columnNumber: 27
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/app/(auth)/login/page.js",
            lineNumber: 124,
            columnNumber: 11
        }, this);
        $[19] = handleSubmit;
        $[20] = t2;
        $[21] = t5;
        $[22] = t8;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    return t11;
}
_s(LoginPage, "mAeTtHFSAHqTOAQnFl6naYF158k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Git_Plant-Store_src_a35302c4._.js.map