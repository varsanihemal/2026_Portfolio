import React from "react";
import { socialIcons } from "../data";

const Contact = () => {
  return (
    <section className="mt-16 md:mt-28 pl-[25px] pr-[25px] md:pl-35">
      <div>
        <h1 className="text-[32px] md:text-5xl lg:text-6xl font-bold text-black mb-3 md:mb-4">
          Let's talk for
        </h1>
        <h1 className="text-[32px] md:text-5xl lg:text-6xl font-bold text-black mb-3 md:mb-4 leading-[40px] md:leading-[50px]">
          Something special
        </h1>
        <p className="max-w-2xl mt-4 md:mt-8 text-sm md:text-base">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>

        <h4 className="mt-3 md:mt-4 text-sm md:text-base">
          <span className="text-[16px] md:text-[19px] font-bold">Email:</span>{" "}
          hemalvarsani123@gmail.com
        </h4>
        <h4 className="mt-2 leading-[20px] text-sm md:text-base">
          <span className="text-[16px] md:text-[19px] font-bold">Phone:</span>{" "}
          +91 (431) 668-0244
        </h4>
      </div>
      <div className="flex flex-col md:flex-row gap-3 md:gap-3 items-start md:items-center mt-6 md:mt-8 mb-16 md:mb-20">
        <div>
          <h2 className="rounded-md text-[16px] md:text-[18px] font-bold text-white w-[173px] md:w-[173px] h-[56px] bg-black text-center flex items-center justify-center">
            Get in Touch
          </h2>
        </div>
        <ul className="flex gap-3 pl-0 md:pl-[32px]">
          <li className="list-none">
            <a
              href="https://github.com/varsanihemal"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 w-[53px] h-[52px] flex justify-center items-center rounded-lg cursor-pointer"
            >
              <img src={socialIcons.icon1} alt="GitHub" />
            </a>
          </li>
          <li className="list-none">
            <a
              href="https://www.reddit.com/user/varsanihemal/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 w-[53px] h-[52px] flex justify-center items-center rounded-lg cursor-pointer"
            >
              <img src={socialIcons.icon2} alt="Reddit" />
            </a>
          </li>
          <li className="list-none">
            <a
              href="https://discord.com/channels/@me"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 w-[53px] h-[52px] flex justify-center items-center rounded-lg cursor-pointer"
            >
              <img src={socialIcons.icon3} alt="Discord" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
