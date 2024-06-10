import React from "react";

import prisma from "@/lib/db";
import { notFound } from "next/navigation";

async function PostsContent({ paramss }: { paramss: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(paramss.id),
    },
  });

  if (!post) {
    notFound();
  }
  return (
    <div>
      <div className="px-7 pt-24 text-center ">
        <h1 className="text-5xl font-semibold">{post.title}</h1>
        <p className="mx-auto max-w-[700px]">{post.body}</p>
      </div>
    </div>
  );
}

export default PostsContent;
