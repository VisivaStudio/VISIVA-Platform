'use client';

import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center py-12 min-h-[60vh]">
            <section className="text-center mb-12">
                <h1 className="text-3xl font-bold mb-4">VISIVA® Portal Access</h1>
                <p className="text-gray-600 dark:text-gray-400">Secure entry point for authenticated VISIVA® operations.</p>
            </section>

            <SignIn appearance={{
                elements: {
                    formButtonPrimary: 'cta-button',
                    card: 'bg-white dark:bg-zinc-900 border border-[var(--visiva-gray)] shadow-none',
                }
            }} />

            <section className="mt-12 text-center text-sm text-gray-500 max-w-sm">
                <h2 className="font-bold mb-2">Access Requirements</h2>
                <p>Only authorized contributors may enter VISIVA® operational spaces. Ensure your identity token is valid prior to access.</p>
            </section>
        </div>
    );
}
