import React from "react";
import "./ShowCase.css";
import image1 from "../../images/desktop/image-transform.jpg";
import image2 from "../../images/desktop/image-stand-out.jpg";
import image3 from "../../images/desktop/image-graphic-design.jpg";
import image4 from "../../images/desktop/image-photography.jpg";

const ShowCase = () => {
  return (
    <section className="showcase">
      <div className="showcase-item-1">
        <h2>Transform your brand</h2>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <a className="btn--yellow" href="#">
          Learn more
        </a>
      </div>
      <div className="showcase-item-2">
        <img src={image1} alt="" />
      </div>
      <div className="showcase-item-3">
        <img src={image2} alt="" />
      </div>
      <div className="showcase-item-4">
        <h2>Transform your brand</h2>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <a className="btn--red" href="#">
          Learn more
        </a>
      </div>
      <div className="showcase-item-5">
        <img src={image3} alt="" />
        <div className="content">
          <h3>Graphic design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div className="showcase-item-6">
        <img src={image4} alt="" />
        <div className="content">
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
