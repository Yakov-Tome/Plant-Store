import { Rubik, Heebo } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import TopAd from "@/components/ui/TopAd";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Providers from "./providers";
import DockBar from "@/components/ui/ClientDockBar";
import ClientSidebar from "@/components/ui/ClientSidebar";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Rubik({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Heebo({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "משתלת נווה צדק | צמחים אורבניים לתל אביב",
  description:
    "משתלת נווה צדק בתל אביב – צמחי בית, מרפסת וגינה קטנה, התאמה לאורח חיים אורבני, איכות ועיצוב בלב העיר.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f7f5f1]`}
      >
        <Providers>
          <TopAd />

          <div className="sticky top-0 z-50 flex justify-center pt-4 pb-2 backdrop-blur-none max-w-[1350px] mx-auto">
            <div className="w-full max-w-5xl px-4">
              <Navbar />
            </div>
          </div>

          <main className="min-h-screen w-full">
            <ClientSidebar />
            <DockBar />

            {children}
          </main>
          <ScrollToTop />
          <Footer />
        </Providers>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </html>
  );
}
