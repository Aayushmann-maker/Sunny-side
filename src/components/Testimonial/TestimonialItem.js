import React from "react";
import "./TestimonialItem.css";

const TestimonialItem = ({ name, para, job, img }) => {
  return (
    <div className="testimonial-item">
      <div className="testimonial-img">
        <img src={img} alt="" className="testimonial-item__image" />
      </div>
      <p className="testimonial-item__para">{para}</p>
      <div className="testimonial-item__desc">
        <h4 className="testimonial-item__name">{name}</h4>
        <p className="testimonial-item__job">{job}</p>
      </div>
    </div>
  );
};

export default TestimonialItem;
