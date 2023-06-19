const StackIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-10">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/icons8-html.svg" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/icons8-css.svg" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="facebook-link"
          src="../assets/cdnlogo.com_javascript.svg"
          className="h-[50px] opacity-95"
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="instagram-link"
          src="../assets/React-icon.svg.png"
          className="h-[50px]"
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="instagram-link"
          src="../assets/tailwind.png"
          className="scale-[100%]"
        />
      </a>
    </div>
  );
};

export default StackIcons;
