import Link from "next/link";
import Image from "next/image";

export default function PlatformOverview() {
    return (
        <div className="flex flex-col gap-16 pb-12">
            {/* Hero Section */}
            <section className="text-center py-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-up">The VISIVA® Brand Design Platform</h1>
                <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
                    A next‑generation cinematic brand ecosystem that unifies identity, intelligence,
                    design systems, collaboration, and immersive storytelling — all delivered as a
                    Progressive Web App.
                </p>
            </section>

            {/* 1. Introduction & Brand Philosophy */}
            <section>
                <h2 className="text-2xl font-bold mb-6 border-b border-[var(--visiva-accent)] pb-2">1. Introduction & Brand Philosophy</h2>
                <p className="mb-8 text-gray-700 dark:text-gray-300">
                    VISIVA® is a comprehensive platform dedicated to the creation, management, and evolution
                    of distinctive brand identities. Enduring brands are built through clarity, meticulous craft,
                    and strategic intention.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "Clarity", desc: "Every decision is intentional and message‑driven." },
                        { title: "Craft", desc: "Precision across typography, composition, motion, and detail." },
                        { title: "Ambition", desc: "Built for brands that lead rather than blend in." }
                    ].map((item) => (
                        <div key={item.title} className="p-6 bg-white dark:bg-zinc-800 rounded-xl border border-[var(--visiva-gray)] shadow-sm">
                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                            <p className="text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 2. Platform Modules */}
            <section className="bg-gray-50 dark:bg-zinc-900 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 border-b border-[var(--visiva-accent)] pb-2">2. The VISIVA® Platform Modules</h2>
                <p className="mb-8 text-gray-700 dark:text-gray-300">
                    A connected set of modules that form a complete brand operating system — from identity
                    and design intelligence to immersive experiences and authenticity.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "Brand Intelligence Engine (BIE)", desc: "AI insights, consistency scores, predictive analytics.", href: "#" },
                        { title: "Brand DNA Generator", desc: "Define mission, archetype, personality, and tone.", href: "#" },
                        { title: "Brand Guardian AI", desc: "Real‑time compliance for logos, colour, and type.", href: "#" },
                        { title: "Brand Universe", desc: "Visual map of components and structure.", href: "#" },
                        { title: "AR / VR Experience", desc: "Augmented and virtual brand worlds.", href: "#" },
                        { title: "Brand Vault", desc: "Authenticity and asset verification.", href: "#" }
                    ].map((mod) => (
                        <Link href={mod.href} key={mod.title} className="p-6 bg-white dark:bg-zinc-800 rounded-xl border border-[var(--visiva-gray)] hover:border-[var(--visiva-accent)] transition-colors">
                            <h3 className="text-lg font-bold mb-2">{mod.title}</h3>
                            <p className="text-sm">{mod.desc}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* 3. Cinematic Brand Kits */}
            <section>
                <h2 className="text-2xl font-bold mb-6 border-b border-[var(--visiva-accent)] pb-2">3. Cinematic Brand Kits</h2>
                <p className="mb-8 text-gray-700 dark:text-gray-300">
                    Fully‑crafted identity systems for distinct industries and aesthetics — built to accelerate launch.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "Tech Startup Kit", desc: "R 9,500 — 50+ assets, 30 days of support." },
                        { title: "Luxury Brand Kit", desc: "R 15,200 — 75+ assets, 60 days of support." },
                        { title: "Creative Agency Kit", desc: "R 11,400 — 60+ assets, 45 days of support." }
                    ].map((kit) => (
                        <div key={kit.title} className="p-6 bg-white dark:bg-zinc-800 rounded-xl border border-[var(--visiva-gray)] shadow-sm">
                            <h3 className="text-lg font-bold mb-2">{kit.title}</h3>
                            <p className="text-sm">{kit.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Intelligent Tools & Experience */}
            <section className="bg-gray-50 dark:bg-zinc-900 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 border-b border-[var(--visiva-accent)] pb-2">4. Intelligent Tools & Experience</h2>
                <p className="mb-8 text-gray-700 dark:text-gray-300">
                    Cinematic interfaces + intelligent features that enable clarity, creativity, and consistency.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { title: "AI Logo Optimiser" },
                        { title: "Colour Generator" },
                        { title: "Smart Harmoniser" },
                        { title: "Brand Intelligence Engine" }
                    ].map((tool) => (
                        <div key={tool.title} className="p-4 bg-white dark:bg-zinc-800 rounded-xl border border-[var(--visiva-gray)] text-center">
                            <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-xs">
                                {/* Placeholder for tool image */}
                                [Image]
                            </div>
                            <h3 className="font-bold text-sm">{tool.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
