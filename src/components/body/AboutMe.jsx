import Mohammadpng from "/mohammad.png"

const AboutMe = () => {
  return (
    <div>
      <section id="about" className="py-20 px-6  ">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 " id="about">
          <div className="flex-shrink-0 w-50 h-60 min-md:border-r-4 max-md:border-b-4 border-white mt-auto rounded-2xl">
            <img
              src={Mohammadpng}
              alt="Mohammad"
              className=" w-ful h-full rounded-2xl object-cover shadow-lg] "
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              🌒 About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Hi, I'm{" "}
              <strong className="text-[#FFD700] dark:text-blue-400">
                Mohammad Aslani
              </strong>
              , a <strong>Front-End Developer </strong>
              with hands-on experience in building responsive and user-friendly
              web applications using <strong>React.js</strong>,{" "}
              <strong>JavaScript</strong>, and modern UI frameworks such as{" "}
              <strong>Tailwind</strong> and <strong>Bootstrap</strong>
              . Skilled in developing clean and maintainable code, collaborating
              in agile teams, and continuously learning new technologies to
              deliver high-quality user experiences.
              <br />
              <br />
              I love learning new technologies and constantly improving my
              skills. Currently, I'm focused on building personal projects and
              ready work in Iran or international opportunities.
              <br />
              <br />
              Let's build something great together! 🚀
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
