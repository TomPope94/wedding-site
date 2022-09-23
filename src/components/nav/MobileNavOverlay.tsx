import Link from "next/link";

type mobileOverlayProps = {
  overlayActive: boolean;
};

export default function MobileNavOverlay({
  overlayActive,
  ...props
}: mobileOverlayProps) {
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 bg-white z-50 transition duration-500 shadow flex flex-col justify-evenly py-16 items-center ${
        overlayActive ? "translate-x-0" : "-translate-x-[300vw]"
      }`}
    >
      <ul className="w-full h-4/5 flex flex-col justify-center items-center text-greyStandard">
        <li className="group flex flex-col items-center justify-center text-2xl hover:text-secondaryDark transition duration-250">
          <Link href="/info">Wedding day info</Link>
          <div className="w-px h-8 bg-primaryLight my-12 rounded-full" />
        </li>
        <li className="group flex flex-col items-center justify-center text-2xl hover:text-secondaryDark transition duration-250">
          <Link href="/clothes">What to wear</Link>
          <div className="w-px h-8 bg-primaryLight my-12 rounded-full" />
        </li>
        <li className="group flex flex-col items-center justify-center text-2xl hover:text-secondaryDark transition duration-250">
          <Link href="/menu">Menu</Link>
          <div className="w-px h-8 bg-primaryLight my-12 rounded-full" />
        </li>
        <li className="group flex flex-col items-center justify-center text-2xl hover:text-secondaryDark transition duration-250">
          <Link href="/porto">Porto advice</Link>
        </li>
      </ul>
      <div
        className={`px-4 py-2 w-1/2 flex justify-center text-2xl items-center rounded transition duration-250 cursor-pointer text-white bg-primaryDark border-2 hover:bg-white hover:text-primaryDark hover:border-primaryDark`}
      >
        <Link href="https://docs.google.com/forms/d/1va4_xFzAs3KZSd6rfrbDWwTs5vZdqvVHwp0bBJFE2I0/edit#responses">
          RSVP
        </Link>
      </div>
    </div>
  );
}
