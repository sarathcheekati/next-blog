import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.image}>
          <Image
            src="/images/site/sarath.jpg"
            alt="An image showing sarath"
            height={300}
            width={300}
          />
        </div>
        <h1>Hi, I'm Sarath</h1>
        <p>
          I blog about modern Web-Development technologies especially popular
          <strong>
            <i> MERN </i>
          </strong>
          stack
        </p>
      </section>
    </>
  );
};

export default Hero;
