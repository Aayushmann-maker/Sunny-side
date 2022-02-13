import React from "react";
import "./Testimonial.css";
import TestimonialItem from "./TestimonialItem";

const DATA = [
  {
    id: "m01",
    img: "https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=383&q=80",
    para: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    job: "Marketing Director",
  },
  {
    id: "m02",
    img: "https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    para: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    job: "Chief Operating Officer",
  },
  {
    id: "m03",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    para: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F",
    job: "Business Owner",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial">
      <h3 className="testimonial__heading">Client testimonials</h3>
      <div className="testimonial-container">
        {DATA.map(data => (
          <TestimonialItem
            key={data.id}
            name={data.name}
            para={data.para}
            job={data.job}
            img={data.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
