import "./Hero.css";
import heroImage from "../assets/images/image-web-3-mobile.jpg";
import heroImageDesktop from "../assets/images/image-web-3-desktop.jpg";

const Hero = () => {
  return (
    <article className="hero">
      <picture>
        <source media="(min-width: 768px)" srcSet={heroImageDesktop} />
        <img src={heroImage} alt="colorful blocks" />
      </picture>

      <div className="hero__content">
        <h1>The Bright Future of Web 3.0?</h1>
        <div className="hero__description">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </article>
  );
};

export default Hero;
