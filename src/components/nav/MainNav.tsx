import Link from "next/link";
import { useScroll } from "hooks";
import { useState, useEffect } from "react";
import MobileNavOverlay from "./MobileNavOverlay";
import BurgerMenu from "./BurgerMenu";
import Home from "@mui/icons-material/Home";

type mainNavProps = {
  lightMode: boolean;
  overrideColorChange?: boolean;
};

export default function MainNav({ ...props }: mainNavProps) {
  const atTop = useScroll();
  const [light, setLight] = useState<boolean>(props.lightMode);
  const [overlayActive, setOverlayActive] = useState<boolean>(false);

  useEffect(() => {
    if (!props.overrideColorChange) {
      setLight(atTop);
    }
  }, [atTop, props.overrideColorChange]);

  return (
    <>
      <nav
        className={`hidden sm:fixed top-0 right-0 left-0 h-100 sm:flex justify-between items-center transition duration-500 py-8 px-4 sm:px-16 md:px-32 xl:px-64 z-[100] ${
          atTop ? "translate-y-0" : "pb-4 -translate-y-4 bg-white shadow"
        }`}
      >
        <ul
          className={`flex w-4/5 justify-between items-center ${
            light ? "text-white" : "text-primaryDark"
          }`}
        >
          <li
            className={`cursor-pointer transition duration-250 ${
              light
                ? "text-white hover:text-primaryDark"
                : "text-primaryDark hover:text-secondaryDark"
            } `}
          >
            <Link href="/">
              <Home />
            </Link>
          </li>
          <li className="group">
            <Link href="/info">Wedding day info</Link>
            <div
              className={`scale-x-0 w-full h-px transition duration-250 group-hover:scale-x-100 ${
                light ? "bg-white" : "bg-primaryDark"
              }`}
            />
          </li>
          <li className="group">
            <Link href="/clothes">What to wear</Link>
            <div
              className={`scale-x-0 w-full h-px transition duration-250 group-hover:scale-x-100 ${
                light ? "bg-white" : "bg-primaryDark"
              }`}
            />
          </li>
          <li className="group">
            <Link href="/menu">Menu</Link>
            <div
              className={`scale-x-0 w-full h-px transition duration-250 group-hover:scale-x-100 ${
                light ? "bg-white" : "bg-primaryDark"
              }`}
            />
          </li>
          <li className="group">
            <Link href="/porto">Porto advice</Link>
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
              : "bg-primaryDark hover:border-primaryDark hover:bg-transparent hover:text-primaryDark text-white"
          }`}
        >
          <Link href="https://docs.google.com/forms/d/1va4_xFzAs3KZSd6rfrbDWwTs5vZdqvVHwp0bBJFE2I0/edit#responses">
            RSVP
          </Link>
        </div>
      </nav>
      <nav
        className={`fixed w-1/2 flex justify-between items-center top-0 left-0 right-0 px-4 py-8 transition duration-500 z-[100] sm:hidden ${
          light ? "translate-y-0" : "pb-4 -translate-y-4 bg-white"
        }`}
      >
        <BurgerMenu
          atTop={light}
          overlayActive={overlayActive}
          setOverlayActive={setOverlayActive}
        />
      </nav>
      <MobileNavOverlay overlayActive={overlayActive} />
    </>
  );
}
