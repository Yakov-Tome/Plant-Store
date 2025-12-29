(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Git/Plant-Store/src/hooks/useCategories.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCategories",
    ()=>useCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/firebase/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useCategories() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "0c151c4e51ef6c46c0373a324b56c01c45c9baf50cd8c4329fe43c379d4d2bcf") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0c151c4e51ef6c46c0373a324b56c01c45c9baf50cd8c4329fe43c379d4d2bcf";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "useCategories[useEffect()]": ()=>{
                const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "categories"), {
                    "useCategories[useEffect() > onSnapshot()]": (snapshot)=>{
                        const list = snapshot.docs.map(_useCategoriesUseEffectOnSnapshotSnapshotDocsMap);
                        setCategories(list);
                        setLoading(false);
                    }
                }["useCategories[useEffect() > onSnapshot()]"]);
                return ()=>unsub();
            }
        })["useCategories[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== categories || $[5] !== loading) {
        t3 = {
            categories,
            loading
        };
        $[4] = categories;
        $[5] = loading;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
}
_s(useCategories, "92Ge+qLRo4zIydHP5ZpnihdlY/0=");
function _useCategoriesUseEffectOnSnapshotSnapshotDocsMap(doc) {
    return {
        id: doc.id,
        ...doc.data()
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Git/Plant-Store/src/hooks/useAllSubcategories.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAllSubcategories",
    ()=>useAllSubcategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/firebase/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useAllSubcategories() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "869c5bf71b9d793c9572550a58a0a79d261d9735d81e1ba30f2a9a1dc49374aa") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "869c5bf71b9d793c9572550a58a0a79d261d9735d81e1ba30f2a9a1dc49374aa";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [subcategories, setSubcategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "useAllSubcategories[useEffect()]": ()=>{
                const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "subcategories"), {
                    "useAllSubcategories[useEffect() > onSnapshot()]": (snapshot)=>{
                        const list = snapshot.docs.map(_useAllSubcategoriesUseEffectOnSnapshotSnapshotDocsMap);
                        setSubcategories(list);
                    }
                }["useAllSubcategories[useEffect() > onSnapshot()]"]);
                return ()=>unsub();
            }
        })["useAllSubcategories[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== subcategories) {
        t3 = {
            subcategories
        };
        $[4] = subcategories;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
}
_s(useAllSubcategories, "XS+xnmqUCcuvxlnnEtTALNni1Yc=");
function _useAllSubcategoriesUseEffectOnSnapshotSnapshotDocsMap(doc) {
    return {
        id: doc.id,
        ...doc.data()
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Git/Plant-Store/src/hooks/useProducts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProducts",
    ()=>useProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/firebase/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useProducts() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "acef2e93c52ab99c3c2e596afa9f0b060ad618ce0b85e5fab623d8eb8bfa59ed") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "acef2e93c52ab99c3c2e596afa9f0b060ad618ce0b85e5fab623d8eb8bfa59ed";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "useProducts[useEffect()]": ()=>{
                const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "products"), {
                    "useProducts[useEffect() > onSnapshot()]": (snapshot)=>{
                        const list = snapshot.docs.map(_useProductsUseEffectOnSnapshotSnapshotDocsMap);
                        setProducts(list);
                    }
                }["useProducts[useEffect() > onSnapshot()]"]);
                return ()=>unsub();
            }
        })["useProducts[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== products) {
        t3 = {
            products
        };
        $[4] = products;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
}
_s(useProducts, "bci7mCOSnVrtL1Tiqkn9DuoL2iY=");
function _useProductsUseEffectOnSnapshotSnapshotDocsMap(doc) {
    return {
        id: doc.id,
        ...doc.data()
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Git/Plant-Store/src/hooks/useCatalogTree.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCatalogTree",
    ()=>useCatalogTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$hooks$2f$useCategories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/hooks/useCategories.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$hooks$2f$useAllSubcategories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/hooks/useAllSubcategories.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$hooks$2f$useProducts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/hooks/useProducts.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function useCatalogTree() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "eef810e17de31ac0794d3408b4d6add340cfecbad6c606a3ffc8ddf9346a1e69") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "eef810e17de31ac0794d3408b4d6add340cfecbad6c606a3ffc8ddf9346a1e69";
    }
    const { categories, loading: categoriesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$hooks$2f$useCategories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategories"])();
    const { subcategories } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$hooks$2f$useAllSubcategories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllSubcategories"])();
    const { products } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$hooks$2f$useProducts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"])();
    let t0;
    bb0: {
        if (!categories.length && !subcategories.length && !products.length) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = [];
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        let t1;
        if ($[2] !== categories || $[3] !== products || $[4] !== subcategories) {
            let t2;
            if ($[6] !== products || $[7] !== subcategories) {
                t2 = ({
                    "useCatalogTree[categories.map()]": (category)=>{
                        const categoryProducts = products.filter({
                            "useCatalogTree[categories.map() > products.filter()]": (product)=>product.categoryId === category.id && (!product.subcategoryId || product.subcategoryId === "")
                        }["useCatalogTree[categories.map() > products.filter()]"]);
                        const categorySubcategories = subcategories.filter({
                            "useCatalogTree[categories.map() > subcategories.filter()]": (sub)=>sub.categoryId === category.id
                        }["useCatalogTree[categories.map() > subcategories.filter()]"]);
                        const subcategoriesWithProducts = categorySubcategories.map({
                            "useCatalogTree[categories.map() > categorySubcategories.map()]": (sub_0)=>{
                                const subProducts = products.filter({
                                    "useCatalogTree[categories.map() > categorySubcategories.map() > products.filter()]": (product_0)=>product_0.subcategoryId === sub_0.id
                                }["useCatalogTree[categories.map() > categorySubcategories.map() > products.filter()]"]);
                                return {
                                    ...sub_0,
                                    products: subProducts
                                };
                            }
                        }["useCatalogTree[categories.map() > categorySubcategories.map()]"]);
                        return {
                            ...category,
                            products: categoryProducts,
                            subcategories: subcategoriesWithProducts
                        };
                    }
                })["useCatalogTree[categories.map()]"];
                $[6] = products;
                $[7] = subcategories;
                $[8] = t2;
            } else {
                t2 = $[8];
            }
            t1 = categories.map(t2);
            $[2] = categories;
            $[3] = products;
            $[4] = subcategories;
            $[5] = t1;
        } else {
            t1 = $[5];
        }
        t0 = t1;
    }
    const catalogTree = t0;
    const loading = categoriesLoading;
    let t1;
    if ($[9] !== catalogTree || $[10] !== categories || $[11] !== loading || $[12] !== products || $[13] !== subcategories) {
        t1 = {
            catalogTree,
            loading,
            categories,
            subcategories,
            products
        };
        $[9] = catalogTree;
        $[10] = categories;
        $[11] = loading;
        $[12] = products;
        $[13] = subcategories;
        $[14] = t1;
    } else {
        t1 = $[14];
    }
    return t1;
}
_s(useCatalogTree, "xmZV/QzVQ6aG7xQGH1uk/UR74kY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$hooks$2f$useCategories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategories"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$hooks$2f$useAllSubcategories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllSubcategories"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$hooks$2f$useProducts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Git/Plant-Store/src/app/admin/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CatalogTreePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$hooks$2f$useCatalogTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/hooks/useCatalogTree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function CatalogTreePage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "8ceb3c9abc2693d0f8ac9fc3a341b7fec7974e4a0caaea74eaa2cfa09186baea") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8ceb3c9abc2693d0f8ac9fc3a341b7fec7974e4a0caaea74eaa2cfa09186baea";
    }
    const { catalogTree, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$hooks$2f$useCatalogTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCatalogTree"])();
    if (loading) {
        let t0;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center h-64",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "loading loading-spinner text-accent"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                    lineNumber: 24,
                    columnNumber: 67
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                lineNumber: 24,
                columnNumber: 12
            }, this);
            $[1] = t0;
        } else {
            t0 = $[1];
        }
        return t0;
    }
    if (!catalogTree.length) {
        let t0;
        if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
            t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-6xl mx-auto mt-40 text-2xl text-{--leaf-new} font-bold",
                children: "אין קטגוריות במערכת."
            }, void 0, false, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                lineNumber: 34,
                columnNumber: 12
            }, this);
            $[2] = t0;
        } else {
            t0 = $[2];
        }
        return t0;
    }
    let t0;
    if ($[3] !== catalogTree) {
        t0 = catalogTree.map(_CatalogTreePageCatalogTreeMap);
        $[3] = catalogTree;
        $[4] = t0;
    } else {
        t0 = $[4];
    }
    let t1;
    if ($[5] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-10 text-right font-mono text-[#084D49] w-full max-w-6xl mx-auto",
            children: t0
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[5] = t0;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    return t1;
}
_s(CatalogTreePage, "2NOqyZwfw4ErQ+BQOcS7lwbfvc4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$hooks$2f$useCatalogTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCatalogTree"]
    ];
});
_c = CatalogTreePage;
function _CatalogTreePageCatalogTreeMap(category) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border rounded-xl p-4 bg-base-100 shadow-sm mt-8 w-3/4 mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFolder"], {
                        className: "text-warning"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                        lineNumber: 60,
                        columnNumber: 154
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-bold text-lg",
                        children: [
                            category.name,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500",
                                children: [
                                    "(",
                                    category.slug,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                lineNumber: 60,
                                columnNumber: 245
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                        lineNumber: 60,
                        columnNumber: 191
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                lineNumber: 60,
                columnNumber: 108
            }, this),
            category.products && category.products.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-6 mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiPottedPlantFill"], {
                                className: "text-success"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                lineNumber: 60,
                                columnNumber: 447
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-sm",
                                children: "מוצרים בקטגוריה"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                lineNumber: 60,
                                columnNumber: 493
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                        lineNumber: 60,
                        columnNumber: 401
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-disc list-inside text-sm space-y-1",
                        children: category.products.map(_CatalogTreePageCatalogTreeMapCategoryProductsMap)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                        lineNumber: 60,
                        columnNumber: 561
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                lineNumber: 60,
                columnNumber: 374
            }, this),
            category.subcategories && category.subcategories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-4 space-y-3",
                children: category.subcategories.map(_CatalogTreePageCatalogTreeMapCategorySubcategoriesMap)
            }, void 0, false, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                lineNumber: 60,
                columnNumber: 767
            }, this)
        ]
    }, category.id, true, {
        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
        lineNumber: 60,
        columnNumber: 10
    }, this);
}
function _CatalogTreePageCatalogTreeMapCategorySubcategoriesMap(sub) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-t pt-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFolderTree"], {
                        className: "text-info"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                        lineNumber: 63,
                        columnNumber: 100
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-sm",
                        children: [
                            sub.name,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500",
                                children: [
                                    "(",
                                    sub.slug,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                lineNumber: 63,
                                columnNumber: 191
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                        lineNumber: 63,
                        columnNumber: 138
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                lineNumber: 63,
                columnNumber: 54
            }, this),
            sub.products && sub.products.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "list-disc list-inside text-sm space-y-1 ml-4",
                children: sub.products.map(_CatalogTreePageCatalogTreeMapCategorySubcategoriesMapSubProductsMap)
            }, void 0, false, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                lineNumber: 63,
                columnNumber: 304
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-400 ml-4",
                children: "אין מוצרים בתת-קטגוריה זו."
            }, void 0, false, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                lineNumber: 63,
                columnNumber: 461
            }, this)
        ]
    }, sub.id, true, {
        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
        lineNumber: 63,
        columnNumber: 10
    }, this);
}
function _CatalogTreePageCatalogTreeMapCategorySubcategoriesMapSubProductsMap(product_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: [
            product_0.title,
            " ",
            product_0.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-500",
                children: [
                    "- ₪",
                    product_0.price
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                lineNumber: 66,
                columnNumber: 75
            }, this)
        ]
    }, product_0.id, true, {
        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
        lineNumber: 66,
        columnNumber: 10
    }, this);
}
function _CatalogTreePageCatalogTreeMapCategoryProductsMap(product) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: [
            product.title,
            " ",
            product.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-500",
                children: [
                    "- ₪",
                    product.price
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                lineNumber: 69,
                columnNumber: 69
            }, this)
        ]
    }, product.id, true, {
        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
        lineNumber: 69,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "CatalogTreePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Git_Plant-Store_src_56a7f5c1._.js.map