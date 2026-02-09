import React from "react";
import { images } from "../data";

const About = () => {
  return (
    <section className="py-10 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 px-2">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative group order-1 md:order-1 max-w-md mx-auto md:max-w-none w-full">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
            <div className="relative">
              <img
                src={images.aboutImg}
                alt="About Me"
                className="w-full h-auto rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border-2 sm:border-4 border-gray-100 object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 order-2 md:order-2">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                I'm a Full Stack Developer and recent graduate from Red River
                College's Full Stack Web Development program. I get excited
                about solving problems through code—from building React
                frontends that users love to creating robust Node.js backends
                that keep everything running smoothly. I enjoy every part of
                bringing an application to life.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                I gained hands-on experience as a Full Stack Developer at
                Elecvent59, a startup where I worked on real-world projects and
                collaborated with a dynamic team. Currently, I'm expanding my
                skill set by diving deep into Java and exploring Data Structures
                and Algorithms to become a more versatile developer. I believe
                in writing code that's not just functional, but maintainable and
                elegant.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you'll find me gaming or dreaming about my
                future project—building an indie game. I've always been
                passionate about games, and game development is something I'd
                love to explore down the road. For now, I'm focused on growing
                as a software developer and I'm eager to work with teams that
                value quality, innovation, and continuous learning. You can
                follow me on{" "}
                <a
                  href="https://x.com/Varsani_Hemal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-purple-500 font-semibold transition-colors duration-200 underline decoration-2 underline-offset-2"
                >
                  Twitter
                </a>{" "}
                or check out my projects on{" "}
                <a
                  href="https://github.com/varsanihemal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-purple-500 font-semibold transition-colors duration-200 underline decoration-2 underline-offset-2"
                >
                  GitHub
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
