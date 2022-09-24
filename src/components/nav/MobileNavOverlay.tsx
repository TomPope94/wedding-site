import Link from "next/link";
import Home from "@mui/icons-material/Home";

type mobileOverlayProps = {
  overlayActive: boolean;
};

export default function MobileNavOverlay({
  overlayActive,
  ...props
}: mobileOverlayProps) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-white z-50 transition duration-500 shadow flex flex-col justify-evenly py-16 items-center ${
          overlayActive ? "translate-x-0" : "-translate-x-[300vw]"
        }`}
      >
        <div className="absolute top-8 right-4 text-primaryDark hover:text-secondaryDark transition duration-250">
          <Link href="/">
            <Home style={{ height: 30, width: 30 }} />
          </Link>
        </div>
        <ul className="w-full flex flex-col items-center text-greyStandard">
          <li className="group flex flex-col items-center justify-center text-lg sm:text-2xl hover:text-secondaryDark transition duration-250">
            <Link href="/info">Wedding day info</Link>
            <div className="w-px h-4 bg-primaryLight my-8 rounded-full bg-opacity-50" />
          </li>
          <li className="group flex flex-col items-center justify-center text-lg sm:text-2xl hover:text-secondaryDark transition duration-250">
            <Link href="/clothes">What to wear</Link>
            <div className="w-px h-4 bg-primaryLight my-8 rounded-full bg-opacity-50" />
          </li>
          <li className="group flex flex-col items-center justify-center text-lg sm:text-2xl hover:text-secondaryDark transition duration-250">
            <Link href="/menu">Menu</Link>
            <div className="w-px h-4 bg-primaryLight my-8 rounded-full bg-opacity-50" />
          </li>
          <li className="group flex flex-col items-center justify-center text-lg sm:text-2xl hover:text-secondaryDark transition duration-250">
            <Link href="/porto">Porto advice</Link>
          </li>
        </ul>
        <div
          className={`absolute bottom-4 px-4 py-2 w-1/2 flex justify-center text-2xl items-center rounded transition duration-250 cursor-pointer text-white bg-primaryDark border-2 hover:bg-white hover:text-primaryDark hover:border-primaryDark`}
        >
          <Link href="https://docs.google.com/forms/d/1va4_xFzAs3KZSd6rfrbDWwTs5vZdqvVHwp0bBJFE2I0/edit#responses">
            RSVP
          </Link>
        </div>
      </div>
    </>
  );
}
