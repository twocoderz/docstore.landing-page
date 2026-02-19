import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DocStore - Bibliothèque numérique universitaire",
  description: "Accédez à des milliers de documents, livres et cours en un clic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body
        className="min-h-screen font-sans bg-background text-foreground antialiased"
      >
      <SmoothScroll>
        {children}
      </SmoothScroll>
      </body>
    </html>
  );
}
