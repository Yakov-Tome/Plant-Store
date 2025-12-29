module.exports = [
"[project]/Desktop/Git/Plant-Store/src/hooks/useCategories.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCategories",
    ()=>useCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/firebase/config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
function useCategories() {
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], "categories"), (snapshot)=>{
            const list = snapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
            setCategories(list);
            setLoading(false);
        });
        return ()=>unsub();
    }, []);
    return {
        categories,
        loading
    };
}
}),
"[project]/Desktop/Git/Plant-Store/src/hooks/useAllSubcategories.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAllSubcategories",
    ()=>useAllSubcategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/firebase/config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
function useAllSubcategories() {
    const [subcategories, setSubcategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], "subcategories"), (snapshot)=>{
            const list = snapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
            setSubcategories(list);
        });
        return ()=>unsub();
    }, []);
    return {
        subcategories
    };
}
}),
"[project]/Desktop/Git/Plant-Store/src/hooks/useProducts.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProducts",
    ()=>useProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/firebase/config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
function useProducts() {
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], "products"), (snapshot)=>{
            const list = snapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
            setProducts(list);
        });
        return ()=>unsub();
    }, []);
    return {
        products
    };
}
}),
"[project]/Desktop/Git/Plant-Store/src/hooks/useCatalogTree.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCatalogTree",
    ()=>useCatalogTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$hooks$2f$useCategories$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/hooks/useCategories.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$hooks$2f$useAllSubcategories$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/hooks/useAllSubcategories.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$hooks$2f$useProducts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/hooks/useProducts.js [app-ssr] (ecmascript)");
;
;
;
;
function useCatalogTree() {
    const { categories, loading: categoriesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$hooks$2f$useCategories$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCategories"])();
    const { subcategories } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$hooks$2f$useAllSubcategories$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAllSubcategories"])();
    const { products } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$hooks$2f$useProducts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProducts"])();
    const catalogTree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!categories.length && !subcategories.length && !products.length) {
            return [];
        }
        return categories.map((category)=>{
            const categoryProducts = products.filter((product)=>product.categoryId === category.id && (!product.subcategoryId || product.subcategoryId === ""));
            const categorySubcategories = subcategories.filter((sub)=>sub.categoryId === category.id);
            const subcategoriesWithProducts = categorySubcategories.map((sub)=>{
                const subProducts = products.filter((product)=>product.subcategoryId === sub.id);
                return {
                    ...sub,
                    products: subProducts
                };
            });
            return {
                ...category,
                products: categoryProducts,
                subcategories: subcategoriesWithProducts
            };
        });
    }, [
        categories,
        subcategories,
        products
    ]);
    const loading = categoriesLoading;
    return {
        catalogTree,
        loading,
        categories,
        subcategories,
        products
    };
}
}),
"[project]/Desktop/Git/Plant-Store/src/app/admin/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CatalogTreePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$hooks$2f$useCatalogTree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/src/hooks/useCatalogTree.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Git/Plant-Store/node_modules/react-icons/pi/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function CatalogTreePage() {
    const { catalogTree, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$src$2f$hooks$2f$useCatalogTree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCatalogTree"])();
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "loading loading-spinner text-accent"
            }, void 0, false, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
            lineNumber: 14,
            columnNumber: 7
        }, this);
    }
    if (!catalogTree.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "max-w-6xl mx-auto mt-40 text-2xl text-{--leaf-new} font-bold",
            children: "אין קטגוריות במערכת."
        }, void 0, false, {
            fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
            lineNumber: 22,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-10 text-right font-mono text-[#084D49] w-full max-w-6xl mx-auto",
        children: catalogTree.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-xl p-4 bg-base-100 shadow-sm mt-8 w-3/4 mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaFolder"], {
                                className: "text-warning"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-bold text-lg",
                                children: [
                                    category.name,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: [
                                            "(",
                                            category.slug,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    category.products && category.products.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-6 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiPottedPlantFill"], {
                                        className: "text-success"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-sm",
                                        children: "מוצרים בקטגוריה"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc list-inside text-sm space-y-1",
                                children: category.products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            product.title,
                                            " ",
                                            product.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-500",
                                                children: [
                                                    "- ₪",
                                                    product.price
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                                lineNumber: 56,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, product.id, true, {
                                        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                        lineNumber: 53,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this),
                    category.subcategories && category.subcategories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-4 space-y-3",
                        children: category.subcategories.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaFolderTree"], {
                                                className: "text-info"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                                lineNumber: 70,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-sm",
                                                children: [
                                                    sub.name,
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-500",
                                                        children: [
                                                            "(",
                                                            sub.slug,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                                        lineNumber: 73,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                                lineNumber: 71,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                        lineNumber: 69,
                                        columnNumber: 19
                                    }, this),
                                    sub.products && sub.products.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc list-inside text-sm space-y-1 ml-4",
                                        children: sub.products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    product.title,
                                                    " ",
                                                    product.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-500",
                                                        children: [
                                                            "- ₪",
                                                            product.price
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                                        lineNumber: 85,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, product.id, true, {
                                                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                                lineNumber: 82,
                                                columnNumber: 25
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                        lineNumber: 80,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Git$2f$Plant$2d$Store$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400 ml-4",
                                        children: "אין מוצרים בתת-קטגוריה זו."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                        lineNumber: 93,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, sub.id, true, {
                                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                                lineNumber: 68,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this)
                ]
            }, category.id, true, {
                fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
                lineNumber: 31,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/Git/Plant-Store/src/app/admin/page.js",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_Git_Plant-Store_src_64d46115._.js.map