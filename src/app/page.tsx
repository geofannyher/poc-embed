"use client";

import Script from "next/script";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Script
        // src="http://localhost:3002/embed.js"
        // data-src="http://localhost:3002"
        // strategy="beforeInteractive"
        src="https://chatbotai-ebon.vercel.app/embed.js"
        data-src="https://chatbotai-ebon.vercel.app"
        strategy="lazyOnload"
      />
    </div>
  );
}
