"use client";

import Post from "@/components/post/post";
import { useRouter } from "next/navigation";
import useQueryPost from "@/hooks/use-query-post";
import { useParams } from "next/navigation";

const Content = () => {
  const router = useRouter();
  const { data, isLoading, error } = useQueryPost();
  const { posts = [], totalPages } = data || {};
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <button
        onClick={() => router.back()}
        className="text-sm text-white font-bold"
      >
        {"← Back"}
      </button>
      <Post post={data} />
    </div>
  );
};

export default Content;
