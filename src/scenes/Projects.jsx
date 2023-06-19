import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import "./temp.css";

// ANIMATIONS for children elements will happen one by one
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const overlayStyles = `
  absolute 
  h-full 
  w-full 
  opacity-0 
  hover:opacity-60
  transition 
  duration-500
  bg-grey 
  z-30 
  flex 
  flex-col 
  justify-center 
  items-center 
  rounded-[1rem] 
  text-center 
  text-deep-blue`;

const Project = ({ title }) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Here is a list of my pet-projects that helped me boost my knowledge
          and expertise within specific areas of web-development. Apart from
          theoretical knowledge, I also learned the intricacies of working
          within a team.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="flex h-[30rem] w-[80%] gap-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* FIRST */}
          <div
            className="project
              flex justify-center text-center items-center 
              max-w-[920px] max-h-[460px] text-2xl font-playfair 
              font-semibold hover:flex-[10] hover:opacity-80"
            style={{
              backgroundImage: "url('../assets/project-1.jpeg')",
            }}
          >
            <div className="relative h-full w-full">
              <div className={`${overlayStyles}`}>
                <p className="mt-7">
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Nulla porttitor accumsan tincidunt.
                </p>
              </div>
            </div>
          </div>
          {/* SECOND */}
          <div
            className="project
              flex justify-center text-center items-center 
              max-w-[920px] max-h-[460px] text-2xl font-playfair 
              font-semibold hover:flex-[10] hover:opacity-50"
            style={{
              backgroundImage: "url('../assets/project-2.jpeg')",
            }}
          >
            <div className="relative h-full w-full">
              <div className={`${overlayStyles} `}>
                <p className="mt-7">
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Nulla porttitor accumsan tincidunt.
                </p>
              </div>
            </div>
          </div>
          {/* THIRD */}
          <div
            className="project
              flex justify-center text-center items-center 
              max-w-[920px] max-h-[460px] text-2xl font-playfair 
              font-semibold hover:flex-[10] hover:opacity-50"
            style={{
              backgroundImage: "url('../assets/project-3.jpeg')",
            }}
          >
            <div className="relative h-full w-full">
              <div className={`${overlayStyles}`}>
                <p className="mt-7">
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Nulla porttitor accumsan tincidunt.
                </p>
              </div>
            </div>
          </div>

          {/* FOURTH */}
          <div
            className="project
              flex justify-center text-center items-center 
              max-w-[920px] max-h-[460px] text-2xl font-playfair 
              font-semibold hover:flex-[10] hover:opacity-80"
            style={{
              backgroundImage: "url('../assets/amir.png')",
            }}
          >
            <div className="relative h-full w-full">
              <div className={`${overlayStyles}`}>
                <p className="mt-7">
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Nulla porttitor accumsan tincidunt.
                </p>
              </div>
            </div>
          </div>

          {/* ROW 3 */}
          {/* <Project title="Project 6" />
          <Project title="Project 7" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
