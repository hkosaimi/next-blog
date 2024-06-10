"use client";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
];
function Header({ isPermited }: { isPermited: boolean }) {
  const pathname = usePathname();
  const links = [...navLinks];

  if (isPermited) {
    links.push({ href: "/create-posts", label: "Create post" });
  } else {
    links.push({ href: "/api/auth/login", label: "Sign in" });
  }

  return (
    <div className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png"
          alt="logo"
          className="w-[35px] h-[35px]"
          width="35"
          height="35"
        />
      </Link>
      <nav className="">
        <ul className="flex gap-x-5 font-bold text-[16px] lg:text-[20px]">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className={` ${pathname === link.href ? "text-black" : "text-zinc-400"}`}
                href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
          {/*   {isPermited && <User color="#000" />} */}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
