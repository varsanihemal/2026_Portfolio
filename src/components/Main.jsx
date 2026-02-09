import React from "react";
import { images, socialIcons } from "../data";

const Main = () => {
  return (
    <main className="flex flex-col-reverse md:flex-row">
      <div className="left pl-[25px] pr-[25px] md:pr-0">
        <div className="w-full md:w-[600px] h-auto md:h-[376px] pt-[40px] md:pt-[110px]">
          <h1 className="text-[28px] md:text-[36px]">
            Hello I'm{" "}
            <span className="font-extrabold text-[40px] md:text-5xl">
              Hemal Varsani.
            </span>
            <br />
            <span className="font-extrabold text-[40px] md:text-5xl leading-[50px] md:leading-[65px]">
              Full Stack Developer
            </span>
            <br />
            Based in <span className="text-extrabold">Winnipeg, Canada.</span>
          </h1>
          <p className="text-gray-500 mt-[20px] md:mt-[32px]">
            I'm a passionate Full Stack Developer specializing in React and Node.js, 
            with hands-on experience building real-world applications at a startup. 
            I love crafting seamless user experiences and writing clean, maintainable code. 
            Currently expanding my skill set with Java and DSA while dreaming of one day 
            building an indie game.
          </p>
        </div>
        <div>
          {/* "flex gap-3 mt-[40px] md:mt-[80px] mb-[40px] md:mb-0" */}
          <ul className="flex gap-3 mt-[40px] md:mt-[80px] mb-[40px] md:mb-0">
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
      </div>
      <div className="w-full md:w-auto">
        <img src={images.mainImg} alt="" className="w-full md:w-auto mt-10" />
      </div>
    </main>
  );
};

export default Main;
