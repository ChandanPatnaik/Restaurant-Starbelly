import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            A recipe has no soul. You as the cook must bring soul to the recipe.
          </p>
        </div>
        <p className="p__opensans">
          Cooking is all about people. Food is maybe the only universal thing
          that really has the power to bring everyone together. No matter what
          culture, everywhere around the world, people eat together.
        </p>
      </div>
      <div className="app__chef-sign">
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="chef sign" />
      </div>
    </div>
  </div>
);

export default Chef;
