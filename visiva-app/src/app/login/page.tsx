'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate network delay
        setTimeout(() => {
            setIsLoading(false);
            // For demo purposes, just redirect to platform
            router.push('/platform');
        }, 1000);
    };

    return (
        <div className="max-w-md mx-auto py-12">
            <section className="text-center mb-12">
                <h1 className="text-3xl font-bold mb-4">VISIVA® Portal Access</h1>
                <p className="text-gray-600 dark:text-gray-400">Secure entry point for authenticated VISIVA® operations.</p>
            </section>

            <section className="bg-white dark:bg-zinc-900 p-8 rounded-xl border border-[var(--visiva-gray)] shadow-sm">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="identityToken" className="font-medium">Identity Token</label>
                        <input
                            type="text"
                            id="identityToken"
                            name="identityToken"
                            required
                            className="p-3 rounded-[var(--radius)] border border-[var(--visiva-gray)] focus:border-[var(--visiva-accent)] outline-none bg-transparent"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="credentialKey" className="font-medium">Credential Key</label>
                        <input
                            type="password"
                            id="credentialKey"
                            name="credentialKey"
                            required
                            className="p-3 rounded-[var(--radius)] border border-[var(--visiva-gray)] focus:border-[var(--visiva-accent)] outline-none bg-transparent"
                        />
                    </div>

                    <button
                        type="submit"
                        className="cta-button w-full flex justify-center items-center"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Authenticating...' : 'Sign In'}
                    </button>
                </form>
            </section>

            <section className="mt-12 text-center text-sm text-gray-500">
                <h2 className="font-bold mb-2">Access Requirements</h2>
                <p>Only authorized contributors may enter VISIVA® operational spaces.</p>
            </section>
        </div>
    );
}
