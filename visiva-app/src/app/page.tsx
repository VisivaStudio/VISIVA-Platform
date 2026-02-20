import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col gap-12">
            <section className="intro text-center">
                <h2 className="text-3xl font-bold mb-4">Welcome to the VISIVA® System</h2>
                <p className="text-lg max-w-3xl mx-auto">
                    The platform provides structured access to the Academy, Marketplace, and authenticated Portal, ensuring alignment across all VISIVA® environments.
                </p>
            </section>

            <section className="navigation-grid grid-layout">
                <Link href="/platform/academy" className="nav-card group">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--visiva-accent)] transition-colors">VISIVA® Academy</h3>
                    <p>Learn, certify, and deepen your understanding of VISIVA® principles and design governance.</p>
                </Link>

                <Link href="/platform/marketplace" className="nav-card group">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--visiva-accent)] transition-colors">VISIVA® Marketplace</h3>
                    <p>Explore approved assets, digital resources, and structured brand materials.</p>
                </Link>

                {/* 
            Original link was to portal/login.html. 
            In Next.js, we target /login 
        */}
                <Link href="/login" className="nav-card group">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--visiva-accent)] transition-colors">VISIVA® Portal</h3>
                    <p>Enter the authenticated environment to manage tools, data, and operational systems.</p>
                </Link>
            </section>

            <section className="system-status p-6 bg-gray-50 dark:bg-zinc-900 rounded-xl border border-[var(--visiva-gray)]">
                <h2 className="text-xl font-bold mb-2">System Status</h2>
                <p className="text-green-600 dark:text-green-400 font-medium">Core modules active. Governance signals operational. XR access available on supported devices.</p>
            </section>
        </div>
    );
}
