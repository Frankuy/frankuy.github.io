import { container, title, description, photo } from "./index.module.css";

const AboutMe = () => {
  return (
    <div className={container}>
      <img src="/images/512x512.png" className={photo} />
      <div className="text-left">
        <p className={`${title}`}>
          <span className="gradient">About Me</span>
        </p>
        <p className={description}>
          Bringing modern technologies into the real world is my{" "}
          <span className="gradient">DNA</span>.
          <br />
          Worked on multiple startups and governmental projects to get the ideas
          into real-world mobile and web applications.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
