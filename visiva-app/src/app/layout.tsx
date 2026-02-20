import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "VISIVA Platform",
    description: "Modernized VISIVA Platform Architecture",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased min-h-screen flex flex-col font-sans`}>
                <Header />
                <main className="flex-grow w-full max-w-5xl mx-auto px-6 py-8">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
