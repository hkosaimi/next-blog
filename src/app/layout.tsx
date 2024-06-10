import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Posts",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { getPermission } = getKindeServerSession();
  const permission = await getPermission("create:post");
  const isPermited = permission?.isGranted;
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-100 text-zinc-900 flex flex-col min-h-screen`}>
        <Header isPermited={isPermited ?? false} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
