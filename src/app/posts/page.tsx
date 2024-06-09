import PostList from "@/components/posts-lists";
import Link from "next/link";
import { Suspense } from "react";

async function page() {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-4xl font-bold mb-5">All Posts</h1>
      <Suspense fallback="Loading...">
        <PostList />
      </Suspense>
    </main>
  );
}

export default page;
