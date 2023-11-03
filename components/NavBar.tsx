import { useEffect, useState } from "react";
import MenuPages from "./MenuPage";
import HamburgerMenuIcon from "@components/icons/hamburger-menu.svg";
import CloseIcon from "@components/icons/cancel.svg";
import Link from "next/link";
import { Container } from "./Container";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
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
    <header>
      <Container className="h-14 flex justify-between items-center px-4 relative">
        <div className="font-bold text-2xl text-teal-900 md:basis-3/12">Deluxe shop</div>
        <nav className="hidden md:flex justify-center gap-x-4 basis-6/12">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
        <div className="flex items-center justify-end gap-x-2 text-gray-800 basis-3/12">
          <div className="hidden md:flex items-center gap-x-4">
            <button>Sign In</button>
            <button>Register</button>
          </div>
          <button onClick={() => setIsOpen((prev) => (prev = !prev))} className="md:hidden">
            {!isOpen ? (
              <HamburgerMenuIcon className="h-6 w-6" />
            ) : (
              <CloseIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>
      {isOpen ? (
        <Container>
          <MenuPages />
        </Container>
      ) : null}
    </header>
  );
};
export default NavBar;
