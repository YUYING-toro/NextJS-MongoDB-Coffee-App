import CommentBtn from "@/components/home/comment-btn";
import Pagination from "@/components/home/pagination";
import Image from "next/image";
import PostList from "./post-list";
import Link from "next/link";

const Content = () => {
  return (
    <>
      <Image
        src="./images/banner-coffeeBean.png"
        className="w-full rounded-lg border border-white/10"
        width={1584}
        height={396}
        alt="bitcoin-banner"
      />
      {/* Nav bar include: Home, camera webpage, login */}
      <nav className="flex gap-6 mt-4 mb-6">
        <Link href="/" className="text-white hover:underline">
          Home
        </Link>
        <Link href="/camera" className="text-white hover:underline">
          404 Webpage
        </Link>
        <Link href="/login" className="text-white hover:underline">
          Login
        </Link>
      </nav>
      <h1 className="text-2xl font-bold mt-2">Hello Coffee</h1>
      <p className="text-sm text-white/50 mt-2">
        Our café is more than just a place to grab a coffee; it's a community
        hub built on passion and quality. From the moment you walk through our
        doors, you’ll be greeted by the rich aroma of freshly roasted beans and
        a warm, inviting atmosphere. We believe a great cup of coffee starts
        with great ingredients, which is why we meticulously source our beans
        from sustainable farms around the world. Every bean is carefully
        selected and roasted in-house to bring out its unique character and
        flavor profile.
      </p>
      <div className="w-full mt-8">
        <CommentBtn />
      </div>

      <PostList />
    </>
  );
};

export default Content;
