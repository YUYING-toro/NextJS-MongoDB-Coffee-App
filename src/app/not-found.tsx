import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2 text-lg">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/" className="text-blue-500 underline mt-4">
        Back to Home
      </Link>
    </div>
  );
}
