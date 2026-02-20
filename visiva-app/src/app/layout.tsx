import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: {
        template: "%s | VISIVA® System",
        default: "VISIVA® System | Advanced Design Governance",
    },
    description: "The official VISIVA® Platform for Academy, Marketplace, and Design Governance.",
    applicationName: "VISIVA® System",
    authors: [{ name: "VISIVA Team" }],
    generator: "Next.js",
    keywords: ["VISIVA", "Design Governance", "Academy", "Marketplace", "XR Design"],
    referrer: "origin-when-cross-origin",
    creator: "VISIVA",
    publisher: "VISIVA",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "VISIVA® System",
        description: "The official VISIVA® Platform for Academy, Marketplace, and Design Governance.",
        url: "https://visiva.io",
        siteName: "VISIVA® System",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "VISIVA® System",
        description: "The official VISIVA® Platform for Academy, Marketplace, and Design Governance.",
    },
    robots: {
        index: true,
        follow: true,
    },
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
