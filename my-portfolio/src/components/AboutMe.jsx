import React from "react";
import graduationPhoto from "../assets/GraduationPhotooo.png";

const AboutMe = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 px-6 py-16 bg-[#0d0d1f] text-white">
      <div className="md:w-1/2 ml-[100px] space-y-6 md:space-y-8">
        <h2 className="text-3xl font-semibold">
          A few words about <span className="text-red-500">ME</span>
        </h2>
        <p className="text-lg leading-relaxed">
          I’m passionate about transforming ideas into impactful products, having
          2 years of experience in the field. I am very enthusiastic about
          backend technologies.
        </p>
        <p className="text-lg leading-relaxed">
          I’ve completed an in-depth bootcamp that helped me develop strong
          communication skills, especially in giving and receiving feedback. I actively
          engage in discussions about new technologies and best practices with my
          colleagues, always promoting continuous learning and improvement.
        </p>
        <p className="text-lg leading-relaxed">
          I enjoy taking on coding challenges to keep my skills sharp and stay up to
          date with the latest tech trends. I’m experienced in agile environments
          and love working with teams to bring ideas to life. When I’m not coding,
          you can find me watching movies, or spending time with my family.
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src={graduationPhoto}
          alt="Graduation photo"
          className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutMe;
