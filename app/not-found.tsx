import Link from "next/link";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h2 className="text-4xl text-bsGray font-bold mt-8">Page not found</h2>
      <p className="text-2xl font-medium mt-4">The page you tried to access does not exist!</p>
      <p>
        Return{" "}
        <Link href="/" className="text-blue-800 underline">
          Home
        </Link>
      </p>
    </div>
  );
}
export default NotFound;
