import Link from "next/link";
import { Container } from "./Container";
import HamburgerIcon from "@components/icons/hamburger-menu.svg";
import CartIcon from "@components/icons/cart.svg";
import UserIcon from "@components/icons/user.svg";

export const Header = () => {
  return (
    <header>
      <nav className="bg-bsDark flex flex-wrap items-center justify-between relative py-3">
        <Container className="flex items-center justify-between">
          <Link
            href="/"
            aria-label="Logo and home link"
            className="font-bold leading-tight text-2xl text-white"
          >
            Deluxe Shop
          </Link>
          <button className="md:hidden h-11 w-11 flex items-center justify-center">
            <HamburgerIcon className="h-6 w-6 fill-white/60" />
          </button>
          <div className="hidden md:flex basis-auto grow items-center">
            <div className="ml-auto flex flex-row md:flex-row md:gap-x-3">
              <Link
                href="/cart"
                className="p-2 flex items-center gap-x-1 text-white/60 hover:text-white"
              >
                <CartIcon className="h-4 w-4" />
                <span>Cart</span>
              </Link>
              <Link
                href="/login"
                className="p-2 flex items-center gap-x-1 text-white/60 hover:text-white"
              >
                <UserIcon className="h-4 w-4" />
                <span>Sign In</span>
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};
