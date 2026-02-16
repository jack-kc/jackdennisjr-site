import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jack Dennis, Jr.",
  description: "Notes, projects, and experiments in software, leadership, and building.",
};

const nav = [
  { href: "/", label: "Home" },
  { href: "/notes", label: "Notes" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-neutral-900">
        <header className="border-b">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
            <Link href="/" className="text-base font-semibold">
              Jack Dennis, Jr.
            </Link>

            <nav className="flex gap-4 text-sm text-neutral-700">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-neutral-900">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-3xl px-6 py-12">{children}</main>

        <footer className="border-t">
          <div className="mx-auto max-w-3xl px-6 py-8 text-sm text-neutral-500">
            Views are my own and do not represent my employer.
          </div>
        </footer>
      </body>
    </html>
  );
}
