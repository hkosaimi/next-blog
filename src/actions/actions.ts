//create server action
"use server";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  //auth check
  /*  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated)) {
    redirect("/api/auth/login");
  } */
  //validation check (eg. zod)
  /* TODO */

  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  await prisma.post.create({
    data: {
      title,
      body,
    },
  });

  //revalidate
  revalidatePath("/posts");
}
