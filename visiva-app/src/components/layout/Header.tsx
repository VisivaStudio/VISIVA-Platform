import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';

export function Header() {
    return (
        <header className="visiva-header flex flex-col items-center relative">
            <div className="absolute top-4 right-6">
                <SignedOut>
                    <SignInButton mode="modal">
                        <button className="cta-button text-sm px-4 py-2">Sign In</button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>

            <div className="mb-4 relative w-[72px] h-[72px]">
                <Image
                    src="/assets/img/logo.png"
                    alt="VISIVA Logo"
                    width={72}
                    height={72}
                    className="logo object-contain"
                    priority
                />
            </div>
            <h1 className="text-2xl font-bold mb-2">VISIVA® Platform</h1>
            <p className="text-gray-600 dark:text-gray-300">Unified access to governance, knowledge, and brand systems.</p>
        </header>
    );
}
