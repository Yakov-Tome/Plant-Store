module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/contact/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
async function POST(req) {
    try {
        const { name, email, message } = await req.json();
        if (!name || !email || !message) {
            return Response.json({
                error: "Missing fields"
            }, {
                status: 400
            });
        }
        const apiKey = process.env.MAILJET_API_KEY;
        const secretKey = process.env.MAILJET_SECRET_KEY;
        const toEmail = process.env.CONTACT_RECEIVER_EMAIL;
        // ✅ MUST be a verified sender in Mailjet
        const fromEmail = process.env.MAILJET_FROM_EMAIL || toEmail;
        if (!apiKey || !secretKey || !toEmail || !fromEmail) {
            return Response.json({
                error: "Missing server env vars"
            }, {
                status: 500
            });
        }
        const auth = Buffer.from(`${apiKey}:${secretKey}`).toString("base64");
        const mailjetRes = await fetch("https://api.mailjet.com/v3.1/send", {
            method: "POST",
            headers: {
                Authorization: `Basic ${auth}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Messages: [
                    {
                        From: {
                            Email: fromEmail,
                            Name: "טופס יצירת קשר"
                        },
                        To: [
                            {
                                Email: toEmail,
                                Name: "בעל העסק"
                            }
                        ],
                        ReplyTo: {
                            Email: email,
                            Name: name
                        },
                        Subject: "📩 פנייה חדשה מהאתר",
                        TextPart: `שם: ${name}\nאימייל: ${email}\n\nהודעה:\n${message}`
                    }
                ]
            })
        });
        const mj = await mailjetRes.json().catch(()=>null);
        // Mailjet can return 200 but still have errors in the body
        const status = mj?.Messages?.[0]?.Status;
        const errorInfo = mj?.Messages?.[0]?.Errors?.[0]?.ErrorMessage || mj?.Messages?.[0]?.Errors?.[0]?.ErrorRelatedTo;
        if (!mailjetRes.ok || status !== "success") {
            console.error("Mailjet error:", mailjetRes.status, mj);
            return Response.json({
                error: errorInfo || "Mailjet request failed",
                raw: mj
            }, {
                status: 500
            });
        }
        return Response.json({
            success: true
        });
    } catch (err) {
        console.error(err);
        return Response.json({
            error: "Server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d83b5d39._.js.map