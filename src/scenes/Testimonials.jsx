import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const Testimonials = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const imageSize = isAboveMediumScreens ? "before:scale-[80%]": "before:scale-[50%]";
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          EXPERIENCE
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
        Throughout my journey towards becoming a web developer, I have been fortunate to receive guidance and mentorship from experts within the field. 
        Their support has not only increased my motivation and self-confidence but also enhanced my skills in areas such as coding, project management, and problem-solving.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className={`mx-auto relative bg-blue max-w-[400px] h-[380px] flex flex-col justify-end p-6 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] ${imageSize} before:left-1/2 before:content-alem`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          {/* <p className="font-playfair text-6xl">“</p> */}
          <p className="text-center text-md sm:text-lg">
            During my time at Alem School, I immersed myself in an environment of dedicated and aspiring programmers.
            Thanks to Alem's emphasis on mutual learning and collaborative projects, I have developed a strong ability to work effectively in teams and approach problems from multiple perspectives.
          </p>
        </motion.div>

        <motion.div
          className={`mx-auto relative bg-red max-w-[400px] h-[380px] flex flex-col justify-end p-6 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] ${imageSize} before:left-1/2 before:content-turing`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center text-md sm:text-lg">
          A mentorship program led by alumni students of Alem School.
          Through weekly meetings and video calls with seniors from top tech companies such as Google, LinkedIn, Indriver, etc., 
          I gained insights into the intricacies of corporate jobs in the industry and was able to expand my knowledge and programming skills.
          </p>
        </motion.div>

        <motion.div
          className={`mx-auto relative bg-dark-yellow max-w-[400px] h-[380px] flex flex-col justify-end p-6 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] ${imageSize} before:left-1/2 before:content-NU`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center text-md sm:text-lg">
          Although my major at Nazarbayev University was not directly related to programming, 
          my academic experience instilled in me the importance of acquiring knowledge, 
          while also emphasizing the value of professionalism and soft skills such as effective communication and collaboration.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;