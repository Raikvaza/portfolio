import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-dark-blue pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <div className="flex justify-start items-start flex-col">
            <p className="font-playfair font-semibold text-2xl text-black">
              AKHMETZHAN SEITKHAN
            </p>
            <p className="font-playfair font-extrabold text-2xl text-black">
              Contacts: +7-(701)-787-29-14
            </p>
          </div>

          <p className="font-playfair text-xl text-black">
            ©2023 Raikaza. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
