"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="m-5">
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link className={`p-2 m-4 ${isActive ? 'font-bold' : ''}`} href={link.href} key={link.name}>
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
