import { container, subtitle, title, description } from "./index.module.css";

const Hero = () => {
  return (
    <div className={container}>
      <h1 className={subtitle}>Hi, my name is</h1>
      <h1 className={`${title} gradient`}>
        Muhammad Fikri Hizbullah
        <br />I am a Software Engineer
      </h1>
      <p className={description}>
        <b>
          4+ years of making the job done in the{" "}
          <span className="gradient">Tech industry</span>!
        </b>
        <br />I am a product-oriented Software Engineer with a business mindset
        from bringing the latest tech to launching successful startups!
      </p>
    </div>
  );
};

export default Hero;
