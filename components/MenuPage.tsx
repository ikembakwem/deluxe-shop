import Link from "next/link";

const MenuPage = () => {
  return (
    <div className="h-full w-full md:hidden">
      <div className="absolute top-14 w-full z-50 bg-blue-700">
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <div>
            <button>Sign In</button>
            <button>Register</button>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default MenuPage;
