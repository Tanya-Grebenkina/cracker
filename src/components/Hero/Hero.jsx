import './Hero.scss';

export const Hero = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <div className="hero">
          <div className="hero__text-box">
            <p className="hero__description">
              Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation.
            </p>
          </div>

          <div className="hero__title">
            <h1 className="hero__heading-primary">
              mostly tastes with freshes
            </h1>
          </div>
        </div>

        <div className="hero__button">
          <a
            href="#"
            className="btn btn--taste-it">
            taste it
          </a>
        </div>
      </div>
    </section>
  );
};
