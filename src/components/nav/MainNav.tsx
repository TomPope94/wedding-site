import Link from "next/link";
import { useScroll } from "hooks";
import { useState, useEffect } from "react";
import MobileNavOverlay from "./MobileNavOverlay";
import BurgerMenu from "./BurgerMenu";

type mainNavProps = {
  lightMode: boolean;
};

export default function MainNav({ ...props }: mainNavProps) {
  const atTop = useScroll();
  const [light, setLight] = useState<boolean>(props.lightMode);
  const [overlayActive, setOverlayActive] = useState<boolean>(false);

  useEffect(() => {
    setLight(atTop);
  }, [atTop]);

  return (
    <>
      <nav
        className={`hidden sm:fixed top-0 right-0 left-0 h-100 sm:flex justify-between items-center transition duration-500 py-8 px-8 z-[100] ${
          atTop ? "translate-y-0" : "pb-4 -translate-y-4 bg-white shadow"
        }`}
      >
        <ul
          className={`flex w-1/2 justify-between items-center ${
            light ? "text-white" : "text-primaryDark"
          }`}
        >
          <li className="group">
            <Link href="/products">Wedding day info</Link>
            <div
              className={`scale-x-0 w-full h-px transition duration-250 group-hover:scale-x-100 ${
                light ? "bg-white" : "bg-primaryDark"
              }`}
            />
          </li>
          <li className="group">
            <Link href="/blog">Colour schemes</Link>
            <div
              className={`scale-x-0 w-full h-px transition duration-250 group-hover:scale-x-100 ${
                light ? "bg-white" : "bg-primaryDark"
              }`}
            />
          </li>
          <li className="group">
            <Link href="/blog">Dietary requirements</Link>
            <div
              className={`scale-x-0 w-full h-px transition duration-250 group-hover:scale-x-100 ${
                light ? "bg-white" : "bg-primaryDark"
              }`}
            />
          </li>
          <li className="group">
            <Link href="/about">Porto advice</Link>
            <div
              className={`scale-x-0 w-full h-px transition duration-250 group-hover:scale-x-100 ${
                light ? "bg-white" : "bg-primaryDark"
              }`}
            />
          </li>
        </ul>
        <div
          className={`px-6 py-2 rounded transition duration-250 cursor-pointer border-2 border-transparent ${
            light
              ? "bg-white hover:border-white hover:bg-transparent hover:text-white"
              : "bg-primaryDark hover:border-primaryDark hover:bg-transparent hover:text-primaryDark"
          }`}
        >
          <Link href="">RSVP</Link>
        </div>
      </nav>
      <nav
        className={`fixed w-full flex justify-between items-center top-0 left-0 right-0 px-8 py-8 transition duration-500 z-[100] sm:hidden ${
          atTop ? "translate-y-0" : "pb-4 -translate-y-4 bg-white"
        }`}
      >
        <BurgerMenu
          atTop={atTop}
          overlayActive={overlayActive}
          setOverlayActive={setOverlayActive}
        />
      </nav>
      <MobileNavOverlay overlayActive={overlayActive} />
    </>
  );
}
