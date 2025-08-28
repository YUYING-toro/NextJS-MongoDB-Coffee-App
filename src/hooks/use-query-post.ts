import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getPost } from "@/services/post";

const useQueryPost = () => {
  //<Link key={post.id} href={`/post/${post.id}`}>
  //await fetch(`/api/post/detail?id=${id}`);
  const { id } = useParams();

  return useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id as string),
  });
};

export default useQueryPost;