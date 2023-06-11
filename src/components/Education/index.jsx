import {
  title,
  container,
  card,
  photo,
  cardTitleContainer,
  cardTitle,
  cardSubtitle,
  date,
  description,
  descriptionMobile,
  buttonContainer,
} from "./index.module.css";

const Education = () => {
  return (
    <div className={container}>
      <p className={title}>
        <span className="gradient underline">Education</span>
      </p>
      <div className={card}>
        <img src="/images/logo_itb_512.png" className={photo} />
        <div className={cardTitleContainer}>
          <p className={cardTitle}>
            <span className="gradient">Institut Teknologi Bandung</span>
          </p>
          <p className={cardSubtitle}>
            Bachelor of Science - BS, Computer Science
          </p>
          <p className={date}>Aug 2017 - Oct 2022</p>
        </div>
        <div className={description}>
          Computer science at ITB is a robust and innovative program in which
          faculty and students work collaboratively. We first learn basic
          computational skills through practical computer programming problems
          and then how to apply those skills to solve nearly any imaginable
          problem. You will have ample opportunities to put these skills into
          practice through hands-on experiences that will give you an advantage
          in graduate school or in the job market.
        </div>
        <div className={descriptionMobile}>
          Computer science at ITB is a robust and innovative program in which
          faculty and students work collaboratively. We first learn basic
          computational skills through practical computer programming problems
          and then how to apply those skills to solve nearly any imaginable
          problem.
        </div>
        <div className={buttonContainer}>
          <a
            className="btn"
            href="https://stei.itb.ac.id/program-sarjana/sarjana-informatika/"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
