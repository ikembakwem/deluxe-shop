import { useEffect, useState } from "react";
import MenuPages from "./MenuPage";
import HamburgerMenuIcon from "@components/icons/hamburger-menu.svg";
import ShoppingCart from "@components/icons/cart.svg";
import UserIcon from "@components/icons/user.svg";
import CloseIcon from "@components/icons/cancel.svg";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full bg-white">
        <div className="h-14 flex justify-between items-center px-4 relative border-b border-gray-200">
          <div className="font-bold text-2xl text-teal-900 md:basis-3/12">Deluxe shop</div>
          <div className="flex items-center justify-end gap-x-2 text-gray-800 basis-3/12">
            <div className="hidden md:flex items-center gap-x-4">
              <Link href="/login" className="inline-flex items-center gap-x-1">
                <UserIcon />
                <span>Sign In</span>
              </Link>
              <Link href="/cart" className="inline-flex items-center gap-x-1">
                <ShoppingCart />
                <span>Cart</span>
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <Link href="/cart" className="inline-flex items-center justify-center h-11 w-11">
                <UserIcon />
              </Link>
              <Link href="/cart" className="inline-flex items-center justify-center h-11 w-11">
                <ShoppingCart />
              </Link>
              <button
                onClick={() => setIsOpen((prev) => (prev = !prev))}
                className="inline-flex items-center justify-center h-11 w-11"
              >
                {!isOpen ? (
                  <HamburgerMenuIcon className="h-6 w-6" />
                ) : (
                  <CloseIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen ? <MenuPages /> : null}
      </header>
      <div className="h-14"></div>
    </>
  );
};
export default NavBar;
