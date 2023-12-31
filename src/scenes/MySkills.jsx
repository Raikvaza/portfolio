import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:flex-row-reverse md:gap-16 mt-32">
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
            MY <span className="text-yellow">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Great community and a fast paced development of new technologies
            boosts motivation for learning and continuous self-improvement!
          </p>
        </motion.div>
        {/* IMAGE */}
        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="
                  z-10 
                  object-contain
                  h-[361px]
                  w-[705px]
                  "
                src="assets/skills.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-5 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Communication
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow opacity-80 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            As a junior web developer, I understand the importance of effective
            communication when working on projects with clients and team
            members. I am able to clearly articulate my ideas and listen
            actively to feedback in order to ensure that everyone is on the same
            page.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Enthusiasm
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            My passion for front end development drives me to stay up to date
            with the latest technologies and best practices. I approach each
            project with a positive attitude and a willingness to learn, which
            allows me to tackle challenges with creativity and enthusiasm.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Problem solving
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-purple absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            With a strong foundation in programming logic and a love for
            troubleshooting, I excel at finding solutions to complex problems. I
            enjoy breaking down problems into smaller, manageable pieces and
            using my analytical skills to come up with innovative solutions that
            meet the needs of the project.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
