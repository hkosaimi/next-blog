"use client";
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
  {
    href: "/create-posts",
    label: "Create Post",
  },
];
function Header() {
  const pathname = usePathname();
  console.log(pathname);
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
        <ul className="flex gap-x-5 font-bold text-[20px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={` ${pathname === link.href ? "text-black" : "text-zinc-400"}`}
                href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
