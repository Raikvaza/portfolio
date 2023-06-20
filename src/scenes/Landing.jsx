import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import StackIcons from "../components/Stack";
import LineGradient from "../components/LineGradient";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const imageAnimation = {
    initial: {
      scale: 0,
      rotate: 0,
    },
    animate: {
      scale: 1,
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
  };
  return (
    <section
      id="home"
      className="
        md:flex 
        md:justify-between 
        md:items-center 
        md:h-full 
        gap-16 
        py-10
      "
    >
      {/* IMAGE SECTION */}
      <div
        className="
          md:order-2 
          flex 
          justify-center 
          basis-3/5 
          z-10 
          mt-16 
          md:mt-32
        "
      >
        {isAboveMediumScreens ? (
          <motion.div
            className="
              relative 
              z-0 
              ml-20 
              before:absolute
              before:w-full 
              before:max-w-[600px] 
              before:h-full
              before:content-avatar-border 
              before:scale-[115%] 
              before:z-[-1]
            "
            initial="initial"
            animate="animate"
            variants={imageAnimation}
          >
            <motion.img
              alt="profile"
              className="
                hover:filter 
                rounded-full 
                hover:saturate-150 
                z-10 
                w-full 
                max-w-[300px] 
                md:max-w-[500px]
                "
              src="../assets/profile-pic(3).png"
              initial="initial"
              animate="animate"
              variants={imageAnimation}
            />
          </motion.div>
        ) : (
          <motion.img
            alt="profile"
            className="
              hover:filter 
              rounded-full 
              hover:saturate-200 
              z-10 
              w-full 
              max-w-[400px] 
              md:max-w-[600px]
            "
            src="../assets/profile-pic(3).png"
            initial="initial"
            animate="animate"
            variants={imageAnimation}
          />
        )}
      </div>
      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // 50% of the div should be visible for the animation to run, and the animation will only run once
          transition={{ duration: 0.5 }} // How long the transition will take place
          variants={{
            hidden: { opacity: 0, x: -100 }, //-50 by def
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl font-playfair z-10 text-center md:text-start">
            Akhmetzhan {""}
            <span
              className="
                xs:relative 
              xs:text-deep-blue 
                xs:font-semibold 
                z-20
                xs:before:content-brushY 
                xs:before:scale-[115%] 
                before:absolute 
                before:-left-[8px]
                before:-top-[105px] 
                before:z-[-1]
              "
            >
              Seitkhan
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Exercitation esse sit enim adipisicing deserunt nostrud laborum
            Lorem ad eiusmod. Aliqua ipsum minim amet nisi consequat quis sunt
            officia. Laborum ullamco duis nostrud esse nisi do id. Dolor sunt
            anim veniam Lorem ut amet sunt exercitation exercitation duis in
            veniam voluptate. In aute excepteur est id. Velit nisi deserunt
            irure nulla id esse est nulla ullamco esse laboris.
          </p>
        </motion.div>
        {/* CALL TO ACTIONS */}
        <motion.div
          className="relative flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // 50% of the div should be visible for the animation to run, and the animation will only run once
          transition={{ delay: 0.2, duration: 0.5 }} // How long the transition will take place
          variants={{
            hidden: { opacity: 0, x: -100 }, //-50 by def
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* GROUP HOVER */}
          <div className="relative flex justify-center group w-[160px] h-[50px]">
            <div
              className="
              absolute 
              inset-0 
              w-full 
              h-full 
              bg-yellow 
              group-hover:blur-md 
              transition 
              duration-500"
            />
            <AnchorLink
              className="
                relative
                w-full h-full
                bg-gradient-rain-yellow
                text-center py-3 px-7
                text-deep-blue 
                rounded-sm 
                font-semibold
                hover:bg-blue 
                hover:text-white 
                transition duration-500"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              Contact Me
            </AnchorLink>
          </div>
          <AnchorLink
            className="
              w-[160px] h-[50px]
              text-center
              rounded-r-sm 
              bg-gradient-rainblue 
              py-0.5
              pr-0.5 
            "
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div
              className="
                bg-deep-blue 
                hover:text-yellow 
                transition 
                duration-500 
                w-full 
                h-full 
                flex 
                items-center 
                justify-center
                font-semibold 
                px-10
              "
            >
              Let's talk
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // 50% of the div should be visible for the animation to run, and the animation will only run once
          transition={{ delay: 0.5, duration: 0.5 }} // How long the transition will take place
          variants={{
            hidden: { opacity: 0, x: -100 }, //-50 by def
            visible: { opacity: 1, x: 0 },
          }}
          className="mt-10"
        >
          <LineGradient />
        </motion.div>
        {/* STACK HEADING */}
        {isAboveMediumScreens ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // 50% of the div should be visible for the animation to run, and the animation will only run once
            transition={{ delay: 0.6, duration: 0.5 }} // How long the transition will take place
            variants={{
              hidden: { opacity: 0, x: -100 }, //-50 by def
              visible: { opacity: 1, x: 0 },
            }}
            className="mb-28"
          >
            <div className="my-[60px] z-20">
              <p className="text-5xl font-playfair z-20 text-start md:text-center">
                <span
                  className="
                xs:relative 
                xs:text-deep-blue 
                xs:font-bold
                xs:before:content-brushY_2 
                xs:before:scale-[55%] 
                before:absolute
                before:-left-[150px]
                before:-top-[110px] 
                before:z-[-1]"
                >
                  Stack
                </span>
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-playfair font-semibold text-4xl mb-5">
              MY <span className="text-yellow">STACK</span>
            </p>
            <LineGradient width="w-1/3" />
            <p className="mt-10 mb-7">
              Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
              fames odio in at.
            </p>
          </motion.div>
        )}
        {/* STACK ICONS */}
        <StackIcons />
        {/* BOTTOM LINE GRADIENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // 50% of the div should be visible for the animation to run, and the animation will only run once
          transition={{ delay: 0.7, duration: 0.5 }} // How long the transition will take place
          variants={{
            hidden: { opacity: 0, x: -100 }, //-50 by def
            visible: { opacity: 1, x: 0 },
          }}
        >
          <LineGradient />
        </motion.div>
      </div>
    </section>
  );
};
export default Landing;
