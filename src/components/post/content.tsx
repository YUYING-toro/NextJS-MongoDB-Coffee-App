"use client";

import Post from "@/components/post/post";
import { useRouter } from "next/navigation";
import useQueryPost from "@/hooks/use-query-post";
import { useParams } from "next/navigation";
import Button from "@/components/common/Button";

const Content = () => {
  const router = useRouter();
  const { data, isLoading, error } = useQueryPost();
  const { posts = [], totalPages } = data || {};
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Button onClick={() => router.back()}>{"← Back"}</Button>
      <Post post={data} />
    </div>
  );
};

export default Content;
