import PostsContent from "@/components/posts-content";
import React, { Suspense } from "react";

async function page({ params }: { params: { id: string } }) {
  /*  const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const data = await res.json(); */
  return (
    <Suspense fallback="Loading...">
      {/*    <div className="px-7 pt-24 text-center ">
        <h1 className="text-5xl font-semibold">{data.title}</h1>
        <p className="mx-auto max-w-[700px]">{data.body}</p>
      </div> */}
      <PostsContent paramss={params} />
    </Suspense>
  );
}

export default page;
