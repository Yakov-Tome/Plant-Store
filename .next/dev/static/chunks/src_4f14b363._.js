(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useCategories.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCategories",
    ()=>useCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useCategories() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
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
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "useCategories[useEffect()]": ()=>{
                const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "categories"), {
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
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
"[project]/src/hooks/useAllSubcategories.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAllSubcategories",
    ()=>useAllSubcategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useAllSubcategories() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
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
    const [subcategories, setSubcategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "useAllSubcategories[useEffect()]": ()=>{
                const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "subcategories"), {
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
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
"[project]/src/hooks/useProducts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProducts",
    ()=>useProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useProducts() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
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
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "useProducts[useEffect()]": ()=>{
                const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "products"), {
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
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
"[project]/src/hooks/useCatalogTree.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCatalogTree",
    ()=>useCatalogTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCategories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCategories.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAllSubcategories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAllSubcategories.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProducts.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function useCatalogTree() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "eef810e17de31ac0794d3408b4d6add340cfecbad6c606a3ffc8ddf9346a1e69") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "eef810e17de31ac0794d3408b4d6add340cfecbad6c606a3ffc8ddf9346a1e69";
    }
    const { categories, loading: categoriesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCategories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategories"])();
    const { subcategories } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAllSubcategories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllSubcategories"])();
    const { products } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"])();
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
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCategories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategories"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAllSubcategories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllSubcategories"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/CatalogSidebar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CatalogSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCatalogTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCatalogTree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CatalogSidebar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(49);
    if ($[0] !== "48ea3343a5b814a6d394963be98f336e5b5f07ab573cb373f1d62d543a49d922") {
        for(let $i = 0; $i < 49; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "48ea3343a5b814a6d394963be98f336e5b5f07ab573cb373f1d62d543a49d922";
    }
    const { categories, subcategories, products, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCatalogTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCatalogTree"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    let t0;
    if ($[1] !== searchParams) {
        t0 = searchParams.get("categoryId");
        $[1] = searchParams;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const activeCategoryId = t0;
    let t1;
    if ($[3] !== searchParams) {
        t1 = searchParams.get("subcategoryId");
        $[3] = searchParams;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const activeSubcategoryId = t1;
    let t2;
    if ($[5] !== router) {
        t2 = ({
            "CatalogSidebar[handleCategoryClick]": (categoryId)=>{
                router.push(`/catalog?categoryId=${categoryId}`);
            }
        })["CatalogSidebar[handleCategoryClick]"];
        $[5] = router;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const handleCategoryClick = t2;
    let t3;
    if ($[7] !== router) {
        t3 = ({
            "CatalogSidebar[handleSubcategoryClick]": (categoryId_0, subcategoryId)=>{
                router.push(`/catalog?categoryId=${categoryId_0}&subcategoryId=${subcategoryId}`);
            }
        })["CatalogSidebar[handleSubcategoryClick]"];
        $[7] = router;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const handleSubcategoryClick = t3;
    if (loading) {
        let t4;
        if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "w-full max-w-xs border-r bg-base-100 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "טוען קטגוריות..."
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/CatalogSidebar.js",
                    lineNumber: 72,
                    columnNumber: 72
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CatalogSidebar.js",
                lineNumber: 72,
                columnNumber: 12
            }, this);
            $[9] = t4;
        } else {
            t4 = $[9];
        }
        return t4;
    }
    if (error) {
        let t4;
        if ($[10] !== error) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "w-full max-w-xs border-r bg-base-100 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-red-500",
                    children: [
                        "שגיאה: ",
                        error
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/CatalogSidebar.js",
                    lineNumber: 82,
                    columnNumber: 72
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CatalogSidebar.js",
                lineNumber: 82,
                columnNumber: 12
            }, this);
            $[10] = error;
            $[11] = t4;
        } else {
            t4 = $[11];
        }
        return t4;
    }
    let t4;
    if ($[12] !== products) {
        t4 = Array.isArray(products) ? products : [];
        $[12] = products;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    const safeProducts = t4;
    let t5;
    if ($[14] !== subcategories) {
        t5 = Array.isArray(subcategories) ? subcategories : [];
        $[14] = subcategories;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    const safeSubs = t5;
    let t6;
    if ($[16] !== categories) {
        t6 = Array.isArray(categories) ? categories : [];
        $[16] = categories;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    const safeCats = t6;
    let t7;
    if ($[18] !== safeSubs) {
        t7 = ({
            "CatalogSidebar[getSubcategoriesForCategory]": (categoryId_1)=>safeSubs.filter({
                    "CatalogSidebar[getSubcategoriesForCategory > safeSubs.filter()]": (sub)=>sub.categoryId === categoryId_1
                }["CatalogSidebar[getSubcategoriesForCategory > safeSubs.filter()]"])
        })["CatalogSidebar[getSubcategoriesForCategory]"];
        $[18] = safeSubs;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    const getSubcategoriesForCategory = t7;
    let t8;
    if ($[20] !== safeProducts) {
        t8 = ({
            "CatalogSidebar[getProductsForCategory]": (categoryId_2)=>safeProducts.filter({
                    "CatalogSidebar[getProductsForCategory > safeProducts.filter()]": (prod)=>{
                        const catIds = Array.isArray(prod.categoryIds) ? prod.categoryIds : prod.categoryId ? [
                            prod.categoryId
                        ] : [];
                        return catIds.includes(categoryId_2);
                    }
                }["CatalogSidebar[getProductsForCategory > safeProducts.filter()]"])
        })["CatalogSidebar[getProductsForCategory]"];
        $[20] = safeProducts;
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    const getProductsForCategory = t8;
    let t9;
    if ($[22] !== safeProducts) {
        t9 = ({
            "CatalogSidebar[getProductsForSubcategory]": (subcategoryId_0)=>safeProducts.filter({
                    "CatalogSidebar[getProductsForSubcategory > safeProducts.filter()]": (prod_0)=>{
                        const subIds = Array.isArray(prod_0.subcategoryIds) ? prod_0.subcategoryIds : prod_0.subcategoryId ? [
                            prod_0.subcategoryId
                        ] : [];
                        return subIds.includes(subcategoryId_0);
                    }
                }["CatalogSidebar[getProductsForSubcategory > safeProducts.filter()]"])
        })["CatalogSidebar[getProductsForSubcategory]"];
        $[22] = safeProducts;
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    const getProductsForSubcategory = t9;
    let t10;
    if ($[24] !== getSubcategoriesForCategory || $[25] !== safeProducts) {
        t10 = ({
            "CatalogSidebar[getProductsForCategoryNoSub]": (categoryId_3)=>{
                const subsForCat = getSubcategoriesForCategory(categoryId_3);
                const subIdsForCat = new Set(subsForCat.map(_CatalogSidebarGetProductsForCategoryNoSubSubsForCatMap));
                return safeProducts.filter({
                    "CatalogSidebar[getProductsForCategoryNoSub > safeProducts.filter()]": (prod_1)=>{
                        const catIds_0 = Array.isArray(prod_1.categoryIds) ? prod_1.categoryIds : prod_1.categoryId ? [
                            prod_1.categoryId
                        ] : [];
                        if (!catIds_0.includes(categoryId_3)) {
                            return false;
                        }
                        const prodSubIds = Array.isArray(prod_1.subcategoryIds) ? prod_1.subcategoryIds : prod_1.subcategoryId ? [
                            prod_1.subcategoryId
                        ] : [];
                        const hasSubInThisCategory = prodSubIds.some({
                            "CatalogSidebar[getProductsForCategoryNoSub > safeProducts.filter() > prodSubIds.some()]": (sid)=>subIdsForCat.has(sid)
                        }["CatalogSidebar[getProductsForCategoryNoSub > safeProducts.filter() > prodSubIds.some()]"]);
                        return !hasSubInThisCategory;
                    }
                }["CatalogSidebar[getProductsForCategoryNoSub > safeProducts.filter()]"]);
            }
        })["CatalogSidebar[getProductsForCategoryNoSub]"];
        $[24] = getSubcategoriesForCategory;
        $[25] = safeProducts;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    const getProductsForCategoryNoSub = t10;
    let t11;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/catalog",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "flex items-center gap-2 text-xl bg-[#E3B94C] text-[#5BB7DB]-content p-2 font-bold mb-4 rounded-sm cursor-pointer hover:bg-[#E3B94C]/80",
                children: "קטלוג מוצרים"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CatalogSidebar.js",
                lineNumber: 192,
                columnNumber: 33
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/CatalogSidebar.js",
            lineNumber: 192,
            columnNumber: 11
        }, this);
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== activeCategoryId || $[29] !== activeSubcategoryId || $[30] !== getProductsForCategory || $[31] !== getProductsForCategoryNoSub || $[32] !== getProductsForSubcategory || $[33] !== getSubcategoriesForCategory || $[34] !== handleCategoryClick || $[35] !== handleSubcategoryClick || $[36] !== safeCats) {
        let t13;
        if ($[38] !== activeCategoryId || $[39] !== activeSubcategoryId || $[40] !== getProductsForCategory || $[41] !== getProductsForCategoryNoSub || $[42] !== getProductsForSubcategory || $[43] !== getSubcategoriesForCategory || $[44] !== handleCategoryClick || $[45] !== handleSubcategoryClick) {
            t13 = ({
                "CatalogSidebar[safeCats.map()]": (cat)=>{
                    const catSubs = getSubcategoriesForCategory(cat.id);
                    const catProducts = getProductsForCategory(cat.id);
                    getProductsForCategoryNoSub(cat.id);
                    const isCategoryActive = activeCategoryId === cat.id || catSubs.some({
                        "CatalogSidebar[safeCats.map() > catSubs.some()]": (s_0)=>s_0.id === activeSubcategoryId
                    }["CatalogSidebar[safeCats.map() > catSubs.some()]"]);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "CatalogSidebar[safeCats.map() > <button>.onClick]": ()=>handleCategoryClick(cat.id)
                                }["CatalogSidebar[safeCats.map() > <button>.onClick]"],
                                className: `w-full flex items-center justify-between gap-2 font-semibold text-right px-2 py-1 rounded-md cursor-pointer transition
                  ${isCategoryActive ? "bg-[#5BB7DB] text-[#5BB7DB]-content" : "hover:bg-[#5BB7DB]/30"}
                `,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: cat.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/CatalogSidebar.js",
                                            lineNumber: 213,
                                            columnNumber: 61
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/CatalogSidebar.js",
                                        lineNumber: 213,
                                        columnNumber: 20
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "badge badge-sm badge-neutral bg-(--leaf-new)",
                                        children: catProducts.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/CatalogSidebar.js",
                                        lineNumber: 213,
                                        columnNumber: 90
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/CatalogSidebar.js",
                                lineNumber: 209,
                                columnNumber: 35
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 space-y-1 text-sm",
                                children: catSubs.map({
                                    "CatalogSidebar[safeCats.map() > catSubs.map()]": (sub_0)=>{
                                        const subProducts = getProductsForSubcategory(sub_0.id);
                                        const isSubActive = activeSubcategoryId === sub_0.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: {
                                                "CatalogSidebar[safeCats.map() > catSubs.map() > <button>.onClick]": ()=>handleSubcategoryClick(cat.id, sub_0.id)
                                            }["CatalogSidebar[safeCats.map() > catSubs.map() > <button>.onClick]"],
                                            className: `w-full flex items-center justify-between gap-2 text-[13px] px-2 py-1 rounded-md text-right transition cursor-pointer
                        ${isSubActive ? "bg-[#99CE75] text-[#99CE75]-content" : "hover:bg-[#99CE75]/30"}
                      `,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: sub_0.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/CatalogSidebar.js",
                                                    lineNumber: 221,
                                                    columnNumber: 26
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "badge badge-sm badge-ghost bg-(--leaf-new) text-white",
                                                    children: subProducts.length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/CatalogSidebar.js",
                                                    lineNumber: 221,
                                                    columnNumber: 51
                                                }, this)
                                            ]
                                        }, sub_0.id, true, {
                                            fileName: "[project]/src/components/ui/CatalogSidebar.js",
                                            lineNumber: 217,
                                            columnNumber: 26
                                        }, this);
                                    }
                                }["CatalogSidebar[safeCats.map() > catSubs.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/CatalogSidebar.js",
                                lineNumber: 213,
                                columnNumber: 189
                            }, this)
                        ]
                    }, cat.id, true, {
                        fileName: "[project]/src/components/ui/CatalogSidebar.js",
                        lineNumber: 209,
                        columnNumber: 18
                    }, this);
                }
            })["CatalogSidebar[safeCats.map()]"];
            $[38] = activeCategoryId;
            $[39] = activeSubcategoryId;
            $[40] = getProductsForCategory;
            $[41] = getProductsForCategoryNoSub;
            $[42] = getProductsForSubcategory;
            $[43] = getSubcategoriesForCategory;
            $[44] = handleCategoryClick;
            $[45] = handleSubcategoryClick;
            $[46] = t13;
        } else {
            t13 = $[46];
        }
        t12 = safeCats.map(t13);
        $[28] = activeCategoryId;
        $[29] = activeSubcategoryId;
        $[30] = getProductsForCategory;
        $[31] = getProductsForCategoryNoSub;
        $[32] = getProductsForSubcategory;
        $[33] = getSubcategoriesForCategory;
        $[34] = handleCategoryClick;
        $[35] = handleSubcategoryClick;
        $[36] = safeCats;
        $[37] = t12;
    } else {
        t12 = $[37];
    }
    let t13;
    if ($[47] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "sticky top-0 w-[250px] max-w-xs border-r bg-base-100 p-4 h-screen overflow-y-auto text-(--leaf-new)",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3",
                    children: t12
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/CatalogSidebar.js",
                    lineNumber: 254,
                    columnNumber: 135
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/CatalogSidebar.js",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[47] = t12;
        $[48] = t13;
    } else {
        t13 = $[48];
    }
    return t13;
}
_s(CatalogSidebar, "mZ7uMi/xb1RpzFKnFoVjUemi0/Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCatalogTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCatalogTree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = CatalogSidebar;
function _CatalogSidebarGetProductsForCategoryNoSubSubsForCatMap(s) {
    return s.id;
}
var _c;
__turbopack_context__.k.register(_c, "CatalogSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const Header = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "c46f53968e0ee4967ca69165e6b45c48505fd4a9b0cb4e672ec8a5322fcde873") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c46f53968e0ee4967ca69165e6b45c48505fd4a9b0cb4e672ec8a5322fcde873";
    }
    const { title, text } = t0;
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "font-heading tracking-tight text-4xl sm:text-5xl lg:text-6xl font-bold mb-4",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 17,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== text) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg max-w-xl mx-auto text-(--leaf-new) opacity-90",
            children: text
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 25,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = text;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative bg-[url('/bg/2.png')] bg-bottom bg-no-repeat bg-cover bg-white/30 backdrop-blur-lg text-(--leaf-new) font-mono",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative pt-14 pb-10 sm:pt-10 sm:pb-12 lg:pt-22 lg:pb-14",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-2xl mx-auto",
                        children: [
                            t1,
                            t2
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.js",
                        lineNumber: 33,
                        columnNumber: 265
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.js",
                    lineNumber: 33,
                    columnNumber: 225
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Header.js",
                lineNumber: 33,
                columnNumber: 151
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 33,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
};
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/CatalogFiltersBar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CatalogFiltersBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function CatalogFiltersBar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(66);
    if ($[0] !== "3e6f83edbfb2b5cfc587a58f84f8bce220987064786e5d24ea7c8f805256767e") {
        for(let $i = 0; $i < 66; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e6f83edbfb2b5cfc587a58f84f8bce220987064786e5d24ea7c8f805256767e";
    }
    const { categories: t1, subcategories: t2, onCloseFilters } = t0;
    let t3;
    if ($[1] !== t1) {
        t3 = t1 === undefined ? [] : t1;
        $[1] = t1;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const categories = t3;
    let t4;
    if ($[3] !== t2) {
        t4 = t2 === undefined ? [] : t2;
        $[3] = t2;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const subcategories = t4;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t5;
    if ($[5] !== searchParams) {
        t5 = searchParams.get("categoryId") || "";
        $[5] = searchParams;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const currentCategoryId = t5;
    let t6;
    if ($[7] !== searchParams) {
        t6 = searchParams.get("subcategoryId") || "";
        $[7] = searchParams;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const currentSubcategoryId = t6;
    let t7;
    if ($[9] !== searchParams) {
        t7 = searchParams.get("q") || "";
        $[9] = searchParams;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    const currentSearch = t7;
    let t8;
    if ($[11] !== currentCategoryId || $[12] !== subcategories) {
        t8 = currentCategoryId ? subcategories.filter({
            "CatalogFiltersBar[subcategories.filter()]": (sub)=>sub.categoryId === currentCategoryId
        }["CatalogFiltersBar[subcategories.filter()]"]) : subcategories;
        $[11] = currentCategoryId;
        $[12] = subcategories;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    const filteredSubcategories = t8;
    let t9;
    if ($[14] !== pathname || $[15] !== router) {
        t9 = ({
            "CatalogFiltersBar[pushWithParams]": (params)=>{
                const qs = params.toString();
                if (!qs) {
                    router.push(pathname, {
                        scroll: false
                    });
                } else {
                    router.push(`${pathname}?${qs}`, {
                        scroll: false
                    });
                }
            }
        })["CatalogFiltersBar[pushWithParams]"];
        $[14] = pathname;
        $[15] = router;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    const pushWithParams = t9;
    let t10;
    if ($[17] !== pushWithParams || $[18] !== searchParams) {
        t10 = ({
            "CatalogFiltersBar[handleCategoryChange]": (e)=>{
                const value = e.target.value;
                const params_0 = new URLSearchParams(searchParams.toString());
                if (value) {
                    params_0.set("categoryId", value);
                    params_0.delete("subcategoryId");
                    pushWithParams(params_0);
                } else {
                    params_0.delete("categoryId");
                    params_0.delete("subcategoryId");
                    pushWithParams(params_0);
                }
            }
        })["CatalogFiltersBar[handleCategoryChange]"];
        $[17] = pushWithParams;
        $[18] = searchParams;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    const handleCategoryChange = t10;
    let t11;
    if ($[20] !== pushWithParams || $[21] !== searchParams) {
        t11 = ({
            "CatalogFiltersBar[handleSubcategoryChange]": (e_0)=>{
                const value_0 = e_0.target.value;
                const params_1 = new URLSearchParams(searchParams.toString());
                if (value_0) {
                    params_1.set("subcategoryId", value_0);
                    pushWithParams(params_1);
                } else {
                    params_1.delete("subcategoryId");
                    pushWithParams(params_1);
                }
            }
        })["CatalogFiltersBar[handleSubcategoryChange]"];
        $[20] = pushWithParams;
        $[21] = searchParams;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    const handleSubcategoryChange = t11;
    let t12;
    if ($[23] !== pushWithParams || $[24] !== searchParams) {
        t12 = ({
            "CatalogFiltersBar[handleSearchChange]": (e_1)=>{
                const value_1 = e_1.target.value;
                const params_2 = new URLSearchParams(searchParams.toString());
                if (value_1.trim()) {
                    params_2.set("q", value_1);
                } else {
                    params_2.delete("q");
                }
                pushWithParams(params_2);
            }
        })["CatalogFiltersBar[handleSearchChange]"];
        $[23] = pushWithParams;
        $[24] = searchParams;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    const handleSearchChange = t12;
    let t13;
    if ($[26] !== pathname || $[27] !== router) {
        t13 = ({
            "CatalogFiltersBar[handleClear]": ()=>{
                router.push(pathname, {
                    scroll: false
                });
            }
        })["CatalogFiltersBar[handleClear]"];
        $[26] = pathname;
        $[27] = router;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    const handleClear = t13;
    let t14;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdOutlineFilterList"], {
            size: 32,
            className: "text-(--leaf-new)/70"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/CatalogFiltersBar.js",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "כל הקטגוריות"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/CatalogFiltersBar.js",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== categories) {
        t16 = categories.map(_CatalogFiltersBarCategoriesMap);
        $[31] = categories;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] !== currentCategoryId || $[34] !== handleCategoryChange || $[35] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "select select-bordered select-sm w-1/2 bg-white text-(--leaf-new) border-(--leaf-new)/30 focus:border-(--leaf-new)/70 focus:ring-(--leaf-new)/50",
            value: currentCategoryId,
            onChange: handleCategoryChange,
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/CatalogFiltersBar.js",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[33] = currentCategoryId;
        $[34] = handleCategoryChange;
        $[35] = t16;
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    const t18 = !currentCategoryId || filteredSubcategories.length === 0;
    const t19 = currentCategoryId ? "\u05DB\u05DC \u05EA\u05EA\u05D9-\u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA" : "\u05D1\u05D7\u05E8 \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05E7\u05D5\u05D3\u05DD";
    let t20;
    if ($[37] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/components/ui/CatalogFiltersBar.js",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[37] = t19;
        $[38] = t20;
    } else {
        t20 = $[38];
    }
    let t21;
    if ($[39] !== filteredSubcategories) {
        t21 = filteredSubcategories.map(_CatalogFiltersBarFilteredSubcategoriesMap);
        $[39] = filteredSubcategories;
        $[40] = t21;
    } else {
        t21 = $[40];
    }
    let t22;
    if ($[41] !== currentSubcategoryId || $[42] !== handleSubcategoryChange || $[43] !== t18 || $[44] !== t20 || $[45] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "select select-bordered select-sm w-1/2 bg-white text-(--leaf-new) border-(--leaf-new)/30 focus:border-(--leaf-new)/70 focus:ring-(--leaf-new)/50",
            value: currentSubcategoryId,
            onChange: handleSubcategoryChange,
            disabled: t18,
            children: [
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/CatalogFiltersBar.js",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[41] = currentSubcategoryId;
        $[42] = handleSubcategoryChange;
        $[43] = t18;
        $[44] = t20;
        $[45] = t21;
        $[46] = t22;
    } else {
        t22 = $[46];
    }
    let t23;
    if ($[47] !== t17 || $[48] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 gap-2 w-[60%]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex gap-2",
                children: [
                    t14,
                    t17,
                    t22
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/CatalogFiltersBar.js",
                lineNumber: 252,
                columnNumber: 59
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/CatalogFiltersBar.js",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[47] = t17;
        $[48] = t22;
        $[49] = t23;
    } else {
        t23 = $[49];
    }
    let t24;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiSearch"], {
            color: "brown"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/CatalogFiltersBar.js",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[50] = t24;
    } else {
        t24 = $[50];
    }
    let t25;
    if ($[51] !== currentSearch || $[52] !== handleSearchChange) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "input input-sm w-full flex items-center gap-2 bg-white text-(--leaf-new)/70 placeholder:(--leaf-new)/50 border-(--leaf-new)/30 focus:border-(--leaf-new)/70 focus:ring-(--leaf-new)/50",
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    className: "w-full",
                    placeholder: "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D9\u05D3\u05E0\u05D9 \u05D1\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD...",
                    value: currentSearch,
                    onChange: handleSearchChange
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/CatalogFiltersBar.js",
                    lineNumber: 268,
                    columnNumber: 218
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/CatalogFiltersBar.js",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[51] = currentSearch;
        $[52] = handleSearchChange;
        $[53] = t25;
    } else {
        t25 = $[53];
    }
    let t26;
    if ($[54] !== handleClear) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handleClear,
            className: "btn btn-ghost btn-sm whitespace-nowrap text-(--leaf-new)/70 hover:bg-black/0 shadow-none border-none hover:text-rose-800 text-sm",
            children: "ניקוי"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/CatalogFiltersBar.js",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[54] = handleClear;
        $[55] = t26;
    } else {
        t26 = $[55];
    }
    let t27;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuMinimize"], {
            className: "text-(--leaf-new)/70 hover:text-(--leaf-light) cursor-pointer hover:scale-125"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/CatalogFiltersBar.js",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[56] = t27;
    } else {
        t27 = $[56];
    }
    let t28;
    if ($[57] !== onCloseFilters) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            "data-tip": "\u05D4\u05E1\u05EA\u05D3\u05E8 \u05DE\u05E1\u05E0\u05E0\u05D9\u05DD",
            "data-ti-position": "bottom",
            className: "tooltip tooltip-error",
            type: "button",
            onClick: onCloseFilters,
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/components/ui/CatalogFiltersBar.js",
            lineNumber: 292,
            columnNumber: 11
        }, this);
        $[57] = onCloseFilters;
        $[58] = t28;
    } else {
        t28 = $[58];
    }
    let t29;
    if ($[59] !== t25 || $[60] !== t26 || $[61] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [
                t25,
                t26,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/CatalogFiltersBar.js",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[59] = t25;
        $[60] = t26;
        $[61] = t28;
        $[62] = t29;
    } else {
        t29 = $[62];
    }
    let t30;
    if ($[63] !== t23 || $[64] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/80 backdrop-blur-md border-gray-200 px-4 py-3 rounded-2xl border shadow-xs mb-6 max-w-7xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-flex w-full justify-between gap-4",
                children: [
                    t23,
                    t29
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/CatalogFiltersBar.js",
                lineNumber: 310,
                columnNumber: 135
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/CatalogFiltersBar.js",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[63] = t23;
        $[64] = t29;
        $[65] = t30;
    } else {
        t30 = $[65];
    }
    return t30;
}
_s(CatalogFiltersBar, "SCJwrT/AMgJN5Vf80D9pmmwKFyQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = CatalogFiltersBar;
function _CatalogFiltersBarFilteredSubcategoriesMap(sub_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: sub_0.id,
        children: sub_0.name
    }, sub_0.id, false, {
        fileName: "[project]/src/components/ui/CatalogFiltersBar.js",
        lineNumber: 320,
        columnNumber: 10
    }, this);
}
function _CatalogFiltersBarCategoriesMap(cat) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: cat.id,
        children: cat.name
    }, cat.id, false, {
        fileName: "[project]/src/components/ui/CatalogFiltersBar.js",
        lineNumber: 323,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "CatalogFiltersBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/catalog/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CatalogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCatalogTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCatalogTree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CatalogSidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/CatalogSidebar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CatalogFiltersBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/CatalogFiltersBar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
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
;
function CatalogPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(60);
    if ($[0] !== "4af1dcc0f76c22a952ec03ea8c4101de00f4cadf33546fb518945e8168fe3c10") {
        for(let $i = 0; $i < 60; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4af1dcc0f76c22a952ec03ea8c4101de00f4cadf33546fb518945e8168fe3c10";
    }
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    let t0;
    if ($[1] !== searchParams) {
        t0 = searchParams.get("categoryId");
        $[1] = searchParams;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const categoryId = t0;
    let t1;
    if ($[3] !== searchParams) {
        t1 = searchParams.get("subcategoryId");
        $[3] = searchParams;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const subcategoryId = t1;
    let t2;
    if ($[5] !== searchParams) {
        t2 = (searchParams.get("q") || "").toLowerCase().trim();
        $[5] = searchParams;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const searchQuery = t2;
    const { cart, addToCart, decreaseQuantity, setItemQuantity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { categories, subcategories, products, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCatalogTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCatalogTree"])();
    let t3;
    bb0: {
        if (!products) {
            let t4;
            if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
                t4 = [];
                $[7] = t4;
            } else {
                t4 = $[7];
            }
            t3 = t4;
            break bb0;
        }
        let list;
        if ($[8] !== categoryId || $[9] !== products || $[10] !== searchQuery || $[11] !== subcategoryId) {
            list = [
                ...products
            ];
            if (subcategoryId) {
                list = list.filter({
                    "CatalogPage[list.filter()]": (prod)=>{
                        const subIds = Array.isArray(prod.subcategoryIds) ? prod.subcategoryIds : prod.subcategoryId ? [
                            prod.subcategoryId
                        ] : [];
                        return subIds.includes(subcategoryId);
                    }
                }["CatalogPage[list.filter()]"]);
            } else {
                if (categoryId) {
                    list = list.filter({
                        "CatalogPage[list.filter()]": (prod_0)=>{
                            const catIds = Array.isArray(prod_0.categoryIds) ? prod_0.categoryIds : prod_0.categoryId ? [
                                prod_0.categoryId
                            ] : [];
                            return catIds.includes(categoryId);
                        }
                    }["CatalogPage[list.filter()]"]);
                }
            }
            if (searchQuery) {
                list = list.filter({
                    "CatalogPage[list.filter()]": (prod_1)=>{
                        const title = (prod_1.title || prod_1.name || "").toLowerCase();
                        const desc = (prod_1.description || "").toLowerCase();
                        return title.includes(searchQuery) || desc.includes(searchQuery);
                    }
                }["CatalogPage[list.filter()]"]);
            }
            $[8] = categoryId;
            $[9] = products;
            $[10] = searchQuery;
            $[11] = subcategoryId;
            $[12] = list;
        } else {
            list = $[12];
        }
        t3 = list;
    }
    const filteredProducts = t3;
    let t4;
    if ($[13] !== categories || $[14] !== categoryId) {
        t4 = ({
            "CatalogPage[getCategoryName]": ()=>{
                if (!categoryId) {
                    return "\u05DB\u05DC \u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD";
                }
                const cat = (categories || []).find({
                    "CatalogPage[getCategoryName > (anonymous)()]": (c)=>c.id === categoryId
                }["CatalogPage[getCategoryName > (anonymous)()]"]);
                return cat ? cat.name : "\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4";
            }
        })["CatalogPage[getCategoryName]"];
        $[13] = categories;
        $[14] = categoryId;
        $[15] = t4;
    } else {
        t4 = $[15];
    }
    const getCategoryName = t4;
    let t5;
    if ($[16] !== subcategories || $[17] !== subcategoryId) {
        t5 = ({
            "CatalogPage[getSubcategoryName]": ()=>{
                if (!subcategoryId) {
                    return null;
                }
                const sub = (subcategories || []).find({
                    "CatalogPage[getSubcategoryName > (anonymous)()]": (s)=>s.id === subcategoryId
                }["CatalogPage[getSubcategoryName > (anonymous)()]"]);
                return sub ? sub.name : null;
            }
        })["CatalogPage[getSubcategoryName]"];
        $[16] = subcategories;
        $[17] = subcategoryId;
        $[18] = t5;
    } else {
        t5 = $[18];
    }
    const getSubcategoryName = t5;
    let t6;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: "\u05E7\u05D8\u05DC\u05D5\u05D2 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD",
            text: "\u05E2\u05D9\u05D9\u05DF \u05D1\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05DC\u05E4\u05D9 \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA \u05D5\u05EA\u05EA-\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA"
        }, void 0, false, {
            fileName: "[project]/src/app/catalog/page.js",
            lineNumber: 159,
            columnNumber: 10
        }, this);
        $[19] = t6;
    } else {
        t6 = $[19];
    }
    let t7;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:block",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CatalogSidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/catalog/page.js",
                lineNumber: 166,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/catalog/page.js",
            lineNumber: 166,
            columnNumber: 10
        }, this);
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    let t8;
    if ($[21] !== categories || $[22] !== showFilters || $[23] !== subcategories) {
        t8 = showFilters ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `lg:${showFilters ? "block" : "hidden"}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CatalogFiltersBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onCloseFilters: {
                    "CatalogPage[<CatalogFiltersBar>.onCloseFilters]": ()=>setShowFilters(false)
                }["CatalogPage[<CatalogFiltersBar>.onCloseFilters]"],
                categories: categories,
                subcategories: subcategories
            }, void 0, false, {
                fileName: "[project]/src/app/catalog/page.js",
                lineNumber: 173,
                columnNumber: 82
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/catalog/page.js",
            lineNumber: 173,
            columnNumber: 24
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "btn btn-outline btn-neutral border-(--leaf-new) bg-white/30 backdrop-blur-2xl hover:bg-(--leaf-new)/80 hover:text-white mb-4 flex items-center gap-2 float-left",
            onClick: {
                "CatalogPage[<button>.onClick]": ()=>setShowFilters(true)
            }["CatalogPage[<button>.onClick]"],
            children: [
                "הצג מסננים",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSearch"], {}, void 0, false, {
                    fileName: "[project]/src/app/catalog/page.js",
                    lineNumber: 177,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/catalog/page.js",
            lineNumber: 175,
            columnNumber: 126
        }, this);
        $[21] = categories;
        $[22] = showFilters;
        $[23] = subcategories;
        $[24] = t8;
    } else {
        t8 = $[24];
    }
    let t9;
    if ($[25] !== getCategoryName) {
        t9 = getCategoryName();
        $[25] = getCategoryName;
        $[26] = t9;
    } else {
        t9 = $[26];
    }
    let t10;
    if ($[27] !== getSubcategoryName) {
        t10 = getSubcategoryName() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-base font-normal text-gray-500 mr-2",
            children: [
                "/ ",
                getSubcategoryName()
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/catalog/page.js",
            lineNumber: 195,
            columnNumber: 35
        }, this);
        $[27] = getSubcategoryName;
        $[28] = t10;
    } else {
        t10 = $[28];
    }
    let t11;
    if ($[29] !== t10 || $[30] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold text-[#4F3F31]",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/catalog/page.js",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[29] = t10;
        $[30] = t9;
        $[31] = t11;
    } else {
        t11 = $[31];
    }
    let t12;
    if ($[32] !== filteredProducts.length) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500 mt-1",
            children: [
                "נמצא ",
                filteredProducts.length,
                " מוצרים"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/catalog/page.js",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[32] = filteredProducts.length;
        $[33] = t12;
    } else {
        t12 = $[33];
    }
    let t13;
    if ($[34] !== t11 || $[35] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 mt-3",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/catalog/page.js",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[34] = t11;
        $[35] = t12;
        $[36] = t13;
    } else {
        t13 = $[36];
    }
    let t14;
    if ($[37] !== loading) {
        t14 = loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "טוען מוצרים..."
        }, void 0, false, {
            fileName: "[project]/src/app/catalog/page.js",
            lineNumber: 229,
            columnNumber: 22
        }, this);
        $[37] = loading;
        $[38] = t14;
    } else {
        t14 = $[38];
    }
    let t15;
    if ($[39] !== error) {
        t15 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-red-500",
            children: [
                "שגיאה: ",
                error
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/catalog/page.js",
            lineNumber: 237,
            columnNumber: 20
        }, this);
        $[39] = error;
        $[40] = t15;
    } else {
        t15 = $[40];
    }
    let t16;
    if ($[41] !== error || $[42] !== filteredProducts.length || $[43] !== loading) {
        t16 = !loading && !error && filteredProducts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-gray-500 mt-4",
            children: "לא נמצאו מוצרים להצגה."
        }, void 0, false, {
            fileName: "[project]/src/app/catalog/page.js",
            lineNumber: 245,
            columnNumber: 66
        }, this);
        $[41] = error;
        $[42] = filteredProducts.length;
        $[43] = loading;
        $[44] = t16;
    } else {
        t16 = $[44];
    }
    let t17;
    if ($[45] !== addToCart || $[46] !== cart || $[47] !== decreaseQuantity || $[48] !== error || $[49] !== filteredProducts || $[50] !== loading || $[51] !== setItemQuantity) {
        t17 = !loading && !error && filteredProducts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 lg:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl mx-auto",
            children: filteredProducts.map({
                "CatalogPage[filteredProducts.map()]": (prod_2)=>{
                    const productSlug = prod_2.slug || prod_2.id;
                    const cartItem = cart.find({
                        "CatalogPage[filteredProducts.map() > cart.find()]": (item)=>item.id === prod_2.id
                    }["CatalogPage[filteredProducts.map() > cart.find()]"]);
                    const quantity = cartItem?.quantity || 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/catalog/${productSlug}`,
                        className: "block h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "card shadow-sm border h-full hover:shadow-md transition group cursor-pointer flex flex-col bg-white overflow-hidden rounded-lg",
                            children: [
                                prod_2.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                    className: "relative aspect-4/3 overflow-hidden rounded-t-md group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: prod_2.imageUrl,
                                            alt: prod_2.title || prod_2.name || "\u05DE\u05D5\u05E6\u05E8 \u05DE\u05D4\u05DE\u05E9\u05EA\u05DC\u05D4",
                                            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/catalog/page.js",
                                            lineNumber: 262,
                                            columnNumber: 341
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "\n                              pointer-events-none\n                              absolute inset-0\n                              bg-white/0\n                              group-hover:bg-white/20\n                              transition-colors duration-500 ease-in-out\n                            "
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/catalog/page.js",
                                            lineNumber: 262,
                                            columnNumber: 572
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/catalog/page.js",
                                    lineNumber: 262,
                                    columnNumber: 266
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-body text-[#4F3F31] p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "card-title text-lg",
                                            children: prod_2.title || prod_2.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/catalog/page.js",
                                            lineNumber: 262,
                                            columnNumber: 951
                                        }, this),
                                        prod_2.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-[#4F3F31] line-clamp-3",
                                            children: prod_2.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/catalog/page.js",
                                            lineNumber: 262,
                                            columnNumber: 1043
                                        }, this),
                                        prod_2.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-xl badge badge-soft max-h-10 badge-warning border border-(--leaf-new)/20 text-(--leaf-new) min-h-10 flex items-center gap-1 px-4 py-2 rounded-full w-fit",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: prod_2.price
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/catalog/page.js",
                                                    lineNumber: 262,
                                                    columnNumber: 1314
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: "₪"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/catalog/page.js",
                                                    lineNumber: 262,
                                                    columnNumber: 1341
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/catalog/page.js",
                                            lineNumber: 262,
                                            columnNumber: 1136
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/catalog/page.js",
                                    lineNumber: 262,
                                    columnNumber: 905
                                }, this),
                                quantity === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: {
                                        "CatalogPage[filteredProducts.map() > <button>.onClick]": (e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            addToCart(prod_2);
                                        }
                                    }["CatalogPage[filteredProducts.map() > <button>.onClick]"],
                                    className: "w-full bg-[#CCD2B6] text-(--leaf-new) py-2 rounded-b-md hover:bg-[#D3D9C3] transition cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCartShopping"], {
                                            size: 20,
                                            className: "inline-block ml-2 "
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/catalog/page.js",
                                            lineNumber: 268,
                                            columnNumber: 189
                                        }, this),
                                        "הוסף לעגלה"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/catalog/page.js",
                                    lineNumber: 262,
                                    columnNumber: 1404
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full rounded-b-md border-t bg-[#D0D6B8]/70 backdrop-blur-xl px-3 py-2 flex items-center justify-between text-(--leaf-new)",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: {
                                                "CatalogPage[filteredProducts.map() > <button>.onClick]": (e_0)=>{
                                                    e_0.preventDefault();
                                                    e_0.stopPropagation();
                                                    decreaseQuantity(prod_2.id);
                                                }
                                            }["CatalogPage[filteredProducts.map() > <button>.onClick]"],
                                            className: "btn btn-sm bg-(--leaf-new)/10 hover:scale-110 transition-transform duration-300 w-8 h-8 flex items-center justify-center rounded-full border border-(--leaf-new) text-(--leaf-new) text-lg",
                                            children: "−"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/catalog/page.js",
                                            lineNumber: 268,
                                            columnNumber: 411
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: 0,
                                            value: quantity,
                                            onClick: _CatalogPageFilteredProductsMapInputOnClick,
                                            onChange: {
                                                "CatalogPage[filteredProducts.map() > <input>.onChange]": (e_2)=>{
                                                    e_2.preventDefault();
                                                    e_2.stopPropagation();
                                                    const value = Number(e_2.target.value);
                                                    setItemQuantity(prod_2, value);
                                                }
                                            }["CatalogPage[filteredProducts.map() > <input>.onChange]"],
                                            className: "w-14 text-center border border-(--leaf-new) rounded-md text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/catalog/page.js",
                                            lineNumber: 274,
                                            columnNumber: 287
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: {
                                                "CatalogPage[filteredProducts.map() > <button>.onClick]": (e_3)=>{
                                                    e_3.preventDefault();
                                                    e_3.stopPropagation();
                                                    addToCart(prod_2);
                                                }
                                            }["CatalogPage[filteredProducts.map() > <button>.onClick]"],
                                            className: "btn btn-sm bg-(--leaf-new)/10 hover:scale-110 transition-transform duration-300 w-8 h-8 flex items-center justify-center rounded-full border border-(--leaf-new) text-lg text-(--leaf-new)",
                                            children: "+"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/catalog/page.js",
                                            lineNumber: 281,
                                            columnNumber: 155
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/catalog/page.js",
                                    lineNumber: 268,
                                    columnNumber: 270
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/catalog/page.js",
                            lineNumber: 262,
                            columnNumber: 98
                        }, this)
                    }, prod_2.id, false, {
                        fileName: "[project]/src/app/catalog/page.js",
                        lineNumber: 262,
                        columnNumber: 18
                    }, this);
                }
            }["CatalogPage[filteredProducts.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/catalog/page.js",
            lineNumber: 255,
            columnNumber: 64
        }, this);
        $[45] = addToCart;
        $[46] = cart;
        $[47] = decreaseQuantity;
        $[48] = error;
        $[49] = filteredProducts;
        $[50] = loading;
        $[51] = setItemQuantity;
        $[52] = t17;
    } else {
        t17 = $[52];
    }
    let t18;
    if ($[53] !== t13 || $[54] !== t14 || $[55] !== t15 || $[56] !== t16 || $[57] !== t17 || $[58] !== t8) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[url('/beautiful-flowers-white-background.jpg')] bg-cover bg-left bg-no-repeat bg-fixed relative min-h-screen",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex font-sans min-h-screen bg-white/50 backdrop-blur-[2px] pb-10",
                    children: [
                        t7,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "flex-1 p-4",
                            children: [
                                t8,
                                t13,
                                t14,
                                t15,
                                t16,
                                t17
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/catalog/page.js",
                            lineNumber: 303,
                            columnNumber: 232
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/catalog/page.js",
                    lineNumber: 303,
                    columnNumber: 145
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/catalog/page.js",
            lineNumber: 303,
            columnNumber: 11
        }, this);
        $[53] = t13;
        $[54] = t14;
        $[55] = t15;
        $[56] = t16;
        $[57] = t17;
        $[58] = t8;
        $[59] = t18;
    } else {
        t18 = $[59];
    }
    return t18;
}
_s(CatalogPage, "Ov4LfPopugLWGJRFflH9LybqYJM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCatalogTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCatalogTree"]
    ];
});
_c = CatalogPage;
function _CatalogPageFilteredProductsMapInputOnClick(e_1) {
    e_1.preventDefault();
    e_1.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "CatalogPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_4f14b363._.js.map