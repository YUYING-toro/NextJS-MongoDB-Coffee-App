import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getPost } from "@/services/post";

const useQueryPost = () => {
  //<Link key={post.id} href={`/post/${post.id}`}>
  //await fetch(`/api/post/detail?id=${id}`);
const params = useParams();
  const id =
    typeof params?.id === "string"
      ? params.id
      : undefined;

  return useQuery({
    queryKey: ["post", id],
    enabled: !!id,
    queryFn: () => getPost(id!),
  });
};

export default useQueryPost;
