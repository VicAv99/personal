import { PropsWithChildren } from "react";
import "./globals.css";
import { Nunito } from "next/font/google";
import { cn } from "~/lib/cn";
import { Toolbar } from "~/components/toolbar";
import { Footer } from "~/components/footer";
import { Metadata } from "next";

const inter = Nunito({ subsets: ["latin"] });

type RootLayoutProps = PropsWithChildren<unknown>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "container max-w-[65ch] p-7 bg-slate-50 md:p-0"
        )}
      >
        <Toolbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://victor-avila.com"),
  title: {
    template: "%s | Victor Avila",
    default: "Victor Avila",
  },
  description: "Software Engineer. Blog, projects, and more.",
  keywords:
    "victor avila, software engineer, full-stack, angular, next.js, supabase",
  openGraph: {
    title: "Victor Avila",
    description:
      "Building awesome and meaningful technology people care about.",
    url: "https://victor-avila.com",
    siteName: "Victor Avila's Website",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    title: "Victor Avila",
    card: "summary_large_image",
    creator: "@victoravila__",
  },
  icons: {
    shortcut: "https://victor-avila.com/favicons/favicon.ico",
  },
  alternates: {
    types: {
      "application/rss+xml": "https://victor-avila.com/feed.xml",
    },
  },
};
