import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";


const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-ibm-flex-serif'
})

export const metadata: Metadata = {
    title: "BetYou",
    description: "BetYou is a peer to peer betting service for everyone.",
    icons: {
        icon: '/icons/logo.svg'
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            {children}
        </main>
    );
}
