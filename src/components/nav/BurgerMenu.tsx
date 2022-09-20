type burgerMenuProps = {
  overlayActive: boolean;
  atTop: boolean;
  setOverlayActive: (newState: boolean) => void;
};

export default function BurgerMenu({
  overlayActive,
  atTop,
  setOverlayActive,
  ...props
}: burgerMenuProps) {
  return (
    <div
      className={`flex flex-col items-center cursor-pointer`}
      onClick={() => setOverlayActive(!overlayActive)}
    >
      <div
        className={`w-8 h-1 rounded-full my-1 transition duration-500 ${
          overlayActive
            ? "bg-primaryDark rotate-45 translate-y-3"
            : !atTop
            ? "bg-primaryDark "
            : "bg-white"
        }`}
      />
      <div
        className={`w-8 h-1 rounded-full my-1 transition duration-250 ${
          overlayActive ? "opacity-0" : !atTop ? "bg-primaryDark" : "bg-white"
        }`}
      />
      <div
        className={`w-8 h-1 rounded-full my-1 transition duration-500 ${
          overlayActive
            ? "bg-primaryDark -rotate-45 -translate-y-3"
            : !atTop
            ? "bg-primaryDark "
            : "bg-white"
        }`}
      />
    </div>
  );
}
