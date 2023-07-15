import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello! My name is Sakshat Kumar, and I am a Third-year student pursuing a Bachelor's degree in Computer Science with a specialization in Blockchain Technology. I have always been fascinated by the endless possibilities that technology offers, and my passion for innovation has led me on an exciting journey in the world of programming.In addition to blockchain, I have also developed a strong skill set in front-end development. My proficiency in HTML, CSS, JavaScript, React, and Tailwind empowers me         to craft visually appealing and intuitive user interfaces. 
        </p>
        <br />

        <p className="text-xl">
        Collaboration and teamwork are key aspects of my approach to learning. I enjoy engaging with like-minded individuals, brainstorming ideas, and working together to bring innovative projects to life. By combining our skills and perspectives, we can create solutions that have a real impact on the world around us.I am actively seeking thrilling projects that provide me with the opportunity to push my boundaries and think outside the box. If you have an exciting endeavor in mind and are looking for a collaborative partner, I would be thrilled to connect with you and bring our shared vision to life. Let's join forces and embark on a journey of creativity and innovation together!
        </p>
      </div>
    </div>
  );
};

export default About;
