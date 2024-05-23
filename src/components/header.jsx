import HeroLogo from "../assets/hero-image-wr.jpg";
import logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <header className="flex flex-row gap-1 items-center justify-center w-screen bg-[#1B1D1F] text-[#fff] text-base md:text-2xl font-bold relative h-52 md:h-fit">
      <img
        src={logo}
        alt="Logo"
        className="absolute inset-0 w-52 h-auto m-auto"
      />
      <img
        src={HeroLogo}
        alt="Hero image for the page, world"
        className="w-full h-full object-cover"
      />
    </header>
  );
};
export default Header;
