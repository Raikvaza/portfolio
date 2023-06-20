import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "../components/SocialMediaIcons";
const Link = ({ page, selectedPage, setSelectedPage, isTopOfPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? "text-yellow border-b-2 border-yellow"
          : ""
      }
                transition duration-300 text-base py-2
                `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page.toUpperCase()}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-[rgba(67,103,134,0.6)]";
  const buttonBackground = isTopOfPage ? "text-yellow" : "text-red";
  const logoBackground = isTopOfPage
    ? "../assets/logo.png"
    : "../assets/logo-white.png";
  return (
    // CONTAINER
    <div
      className={`${navbarBackground} z-40 w-full fixed top-0 py-3 backdrop-blur-lg`}
    >
      <div
        className="
                    flex 
                    items-center 
                    justify-between 
                    mx-auto 
                    w-5/6"
      >
        {/* LOGO */}

        <AnchorLink
          className="
                        relative 
                        max-w-[60px] 
                        max-h-[60px]
                        hover:cursor-pointer    
                    "
          href="#home"
          onClick={() => setSelectedPage("home")}
        >
          <div
            className={`
                            absolute 
                            inset-0 
                            rounded-full 
                            ${isTopOfPage ? "blur-xl bg-yellow " : ""}`}
          />
          <img
            alt="logo"
            src={logoBackground}
            className="
                            relative 
                            inset-0 
                            max-w-[60px] 
                            filter 
                            hover:saturate-200 
                            z-10"
          />
        </AnchorLink>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <>
            <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isTopOfPage={isTopOfPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isTopOfPage={isTopOfPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isTopOfPage={isTopOfPage}
              />
              <Link
                page="Experience"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isTopOfPage={isTopOfPage}
              />
            </div>
            <div className="flex justify-center items-center gap-10">
              <SocialMediaIcons />
              <div className="relative flex justify-center group w-[160px] h-[50px]">
                <div
                  className="
                            absolute
                            inset-0
                            w-full
                            h-full
                            bg-yellow
                            rounded-lg
                            group-hover:blur-md 
                            transition duration-500"
                />
                <AnchorLink
                  className="
                                    relative
                                    w-full h-full
                                    bg-gradient-rain-yellow
                                    border-[1px]
                                    border-white
                                    text-center py-3 px-5 whitespace-nowrap
                                    text-deep-blue 
                                    rounded-lg 
                                    font-semibold
                                    hover:text-white 
                                    transition duration-500"
                  onClick={() => setSelectedPage("contact")}
                  href="#contact"
                >
                  Contact Me
                </AnchorLink>
              </div>
            </div>

            {/* 
                            <AnchorLink
                                className={`bg-yellow p-3 rounded-md ${isTopOfPage && (selectedPage === "contact") ? "text-yellow" : ""}
                                    ${!isTopOfPage && (selectedPage === "contact") ? "text-red" : ""}
                                    ${isTopOfPage ? "hover:text-yellow" : "hover:text-red"} 
                                    transition duration-500 text-base
                                    `
                                }
                                href={`#contact`}
                                onClick={() => setSelectedPage("Contact")}
                            >
                                CONTACT ME
                            </AnchorLink> */}
          </>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}
        {/* MOBILE MENU */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* Close ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>
            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
