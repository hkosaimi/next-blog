import Form from "@/components/form";
import { LogoutLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  /*  const postLoginUrl = "http://localhost:3000/create-posts";
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect(`/api/auth/login?post_login_redirect_url=${postLoginUrl}`);
  } */
  return (
    <div className="text-center pt-16">
      <h1 className="text-4xl  md:text-5xl font-bold mb-5">Create post</h1>
      <Form />
      <LogoutLink>Log out</LogoutLink>
    </div>
  );
}

export default page;
