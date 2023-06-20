import AnchorLink from "react-anchor-link-smooth-scroll";
const SocialMediaIcons = ({ selectedPage, setSelectedPage }) => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>

      <AnchorLink
        className="hover:opacity-50 transition duration-500"
        onClick={() => setSelectedPage("contact")}
        href="#contact"
      >
        <img
          alt="instagram-link"
          src="../assets/icons8-gmail.png"
          className="w-[30px] h-[30px]"
        />
      </AnchorLink>
    </div>
  );
};

export default SocialMediaIcons;
