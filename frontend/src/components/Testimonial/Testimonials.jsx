import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import c1 from "../../assets/images/c1-mana.jpeg";
import c2 from "../../assets/images/c2-sand.jpeg";
import c3 from "../../assets/images/c3-sam.jpeg";
import c4 from "../../assets/images/c4-padi.jpeg";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slideToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          <strong>Well planned day...</strong> <br />
          Day was well planned. Guide and driver was very professional.Raj show
          us many hidden places of Palampur.. Highly recommend
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={c3} className="w-25 h-25 rounded-2" alt="customer_image" />
          <div>
            <h6 className="mb-0 mt-3">Mr. Sameer</h6>
            <p> Customer </p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          <strong>
            My experience was very good….everything went planned….there was no
            delay
          </strong>
          <br />
          The hike was amazing….it had amazing views Guide (onkar)was very
          patient and very informative also…he told lot of stories about places
          and locals
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src={ava02}
            className="w-25 h-25 rounded-2"
            alt="customer_image"
          />
          <div>
            <h6 className="mb-0 mt-3">Lisa Franklin</h6>
            <p> Customer </p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          <strong>Day tour</strong> <br />
          It was good, had a great time exploring places. Special thanks to
          guide for his insights and to the driver for the safe trip :) It did
          run a little longer than expected but they were accommodating.
          Definitely recommend if you have less time to explore, the itinerary
          was well structured.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src={ava03}
            className="w-25 h-25 rounded-2"
            alt="customer_image"
          />
          <div>
            <h6 className="mb-0 mt-3">Tom Disouza</h6>
            <p> Customer </p>
          </div>
        </div>
      </div>
      {/* !====================card-gap========================== */}
      <div className="testimonial py-4 px-3">
        <p>
          <strong>
            A wonderful way to see and understand this special place
          </strong>
          <br />
          Had an amazing time with Mr Ashok! I learned so much and was,
          therefore, able to appreciate place and the community here much more
          deeply. Of course, you could visit all of these sites on your own, I
          highly recommend this tour!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={c1} className="w-25 h-25 rounded-2" alt="customer_image" />
          <div>
            <h6 className="mb-0 mt-3">Mr. Ojha</h6>
            <p> Customer </p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum
          hic magni? Sapiente, voluptatum obcaecati consectetur delectus dolorum
          hic est voluptatibus maxime placeat repellat odit commodi quasi
          tenetur quae distinctio.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={c2} className="w-25 h-25 rounded-2" alt="customer_image" />
          <div>
            <h6 className="mb-0 mt-3">Ms. Sandhya</h6>
            <p> Customer </p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum
          hic magni? Sapiente, voluptatum obcaecati consectetur delectus dolorum
          hic est voluptatibus maxime placeat repellat odit commodi quasi
          tenetur quae distinctio.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src={ava01}
            className="w-25 h-25 rounded-2"
            alt="customer_image"
          />
          <div>
            <h6 className="mb-0 mt-3">Mr. John</h6>
            <p> Customer </p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum
          hic magni? Sapiente, voluptatum obcaecati consectetur delectus dolorum
          hic est voluptatibus maxime placeat repellat odit commodi quasi
          tenetur quae distinctio.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={c4} className="w-25 h-25 rounded-2" alt="customer_image" />
          <div>
            <h6 className="mb-0 mt-3">Mr. Pradipta</h6>
            <p> Customer </p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
