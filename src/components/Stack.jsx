import { motion, useViewportScroll, useTransform } from "framer-motion";

const StackIcons = () => {
  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  const iconDelays = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]; // Delays for each icon

  return (
    <div className="flex justify-center md:justify-start my-10 xs:gap-5 md:gap-10">
      {/* HTML */}
      <motion.div
        className=" hover:opacity-50 transition duration-500"
        initial="hidden"
        animate="visible"
        variants={iconVariants}
        transition={{ delay: iconDelays[0], duration: 0.3 }}
      >
        <motion.img
          alt="linkedin-link"
          src="../assets/icons8-html.svg"
          className=" hover:cursor-pointer w-[50px] h-[50px] md:scale-[100%]"
          whileHover={{ scale: 1.2 }} // Increase size on hover
          whileTap={{ scale: 0.9 }} // Decrease size on tap
          transition={{ type: "spring", stiffness: 400, damping: 17 }} // Add spring animation
        />
      </motion.div>
      {/* CSS */}
      <motion.div
        className=" hover:opacity-50 transition duration-500"
        initial="hidden"
        animate="visible"
        variants={iconVariants}
        transition={{ delay: iconDelays[1], duration: 0.3 }}
      >
        <motion.img
          alt="twitter-link"
          src="../assets/icons8-css.svg"
          className=" hover:cursor-pointer w-[50px] h-[50px] md:scale-[100%]"
          whileHover={{ scale: 1.2 }} // Increase size on hover
          whileTap={{ scale: 0.9 }} // Decrease size on tap
          transition={{ type: "spring", stiffness: 400, damping: 17 }} // Add spring animation
        />
      </motion.div>
      {/* JS */}
      <motion.div
        className=" hover:opacity-50 transition duration-500"
        initial="hidden"
        animate="visible"
        variants={iconVariants}
        transition={{ delay: iconDelays[2], duration: 0.3 }}
      >
        <motion.img
          alt="facebook-link"
          src="../assets/cdnlogo.com_javascript.svg"
          className=" hover:cursor-pointer w-[50px] h-[50px] opacity-95"
          whileHover={{ scale: 1.2 }} // Increase size on hover
          whileTap={{ scale: 0.9 }} // Decrease size on tap
          transition={{ type: "spring", stiffness: 400, damping: 17 }} // Add spring animation
        />
      </motion.div>
      {/* REACT */}
      <motion.div
        className=" hover:opacity-50 transition duration-500"
        initial="hidden"
        animate="visible"
        variants={iconVariants}
        transition={{ delay: iconDelays[3], duration: 0.3 }}
      >
        <motion.img
          alt="instagram-link"
          src="../assets/React-icon.svg.png"
          className=" hover:cursor-pointer w-[50px] h-[50px]"
          whileHover={{ scale: 1.2 }} // Increase size on hover
          whileTap={{ scale: 0.9 }} // Decrease size on tap
          transition={{ type: "spring", stiffness: 400, damping: 17 }} // Add spring animation
        />
      </motion.div>
      {/* TAILWIND */}
      <motion.div
        className=" hover:opacity-50 transition duration-500"
        initial="hidden"
        animate="visible"
        variants={iconVariants}
        transition={{ delay: iconDelays[4], duration: 0.3 }}
      >
        <motion.img
          alt="instagram-link"
          src="../assets/tailwind.png"
          className=" hover:cursor-pointer w-[50px] h-[50px] scale-[100%]"
          whileHover={{ scale: 1.2 }} // Increase size on hover
          whileTap={{ scale: 0.9 }} // Decrease size on tap
          transition={{ type: "spring", stiffness: 400, damping: 17 }} // Add spring animation
        />
      </motion.div>
      {/* GITHUB */}
      <motion.div
        className=" hover:opacity-50 transition duration-500"
        initial="hidden"
        animate="visible"
        variants={iconVariants}
        transition={{ delay: iconDelays[5], duration: 0.3 }}
      >
        <motion.img
          alt="instagram-link"
          src="../assets/icons8-github.svg"
          className=" hover:cursor-pointer scale-[100%] -ml-[10px]"
          whileHover={{ scale: 1.2 }} // Increase size on hover
          whileTap={{ scale: 0.9 }} // Decrease size on tap
          transition={{ type: "spring", stiffness: 400, damping: 17 }} // Add spring animation
        />
      </motion.div>
      {/* GOLANG */}
      <motion.div
        className=" hover:opacity-50 transition duration-500"
        initial="hidden"
        animate="visible"
        variants={iconVariants}
        transition={{ delay: iconDelays[6], duration: 0.3 }}
      >
        <motion.img
          alt="instagram-link"
          src="../assets/go.png"
          className=" hover:cursor-pointer scale-[110%] -ml-[10px] h-[100%] w-[100%]"
          whileHover={{ scale: 1.2 }} // Increase size on hover
          whileTap={{ scale: 0.9 }} // Decrease size on tap
          transition={{ type: "spring", stiffness: 400, damping: 17 }} // Add spring animation
        />
      </motion.div>
    </div>
  );
};

export default StackIcons;
