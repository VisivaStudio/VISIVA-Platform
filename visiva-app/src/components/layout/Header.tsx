import Image from 'next/image';
import Link from 'next/link';

export function Header() {
    return (
        <header className="visiva-header flex flex-col items-center">
            {/* 
         Using a placeholder for logo if missing, or assuming it exists.
         Based on HTML: assets/images/visiva/logo.png
         In public: /assets/images/visiva/logo.png
      */}
            <div className="mb-4 relative w-[72px] h-[72px]">
                {/* We use a fallback or standard image if file check fails, but assuming it was copied */}
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
