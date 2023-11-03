import Link from "next/link";

const MenuPage = () => {
  return (
    <div className="h-screen md:hidden">
      <div className="absolute top-14 z-50 w-full px-4">
        <nav>
          <div className="flex flex-col gap-4 py-4">
            <Link href="/categories">
              <span className="font-bold text-xl">Categories</span>
            </Link>
            <Link href="/deals">
              <span className="font-bold text-xl">Deals</span>
            </Link>
            <Link href="/sell">
              <span className="font-bold text-xl">Sell</span>
            </Link>
          </div>
          <div className="text-indigo-700">
            <button>Sign In</button> <span className="text-black">or</span>{" "}
            <button>Register</button>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default MenuPage;
