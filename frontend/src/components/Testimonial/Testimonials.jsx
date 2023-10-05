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

    const settings ={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings: {
                    slidesToShow:2,
                    slideToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                settings: {
                  slidesToShow:1,
                  slideToScroll:1,
                }
            }
        ]
    }
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum
          hic magni? Sapiente, voluptatum obcaecati consectetur delectus dolorum
          hic est voluptatibus maxime placeat repellat odit commodi quasi
          tenetur quae distinctio.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src={c3}
            className="w-25 h-25 rounded-2"
            alt="customer_image"
          />
          <div>
            <h6 className="mb-0 mt-3">Mr. Sameer</h6>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum
          hic magni? Sapiente, voluptatum obcaecati consectetur delectus dolorum
          hic est voluptatibus maxime placeat repellat odit commodi quasi
          tenetur quae distinctio.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum
          hic magni? Sapiente, voluptatum obcaecati consectetur delectus dolorum
          hic est voluptatibus maxime placeat repellat odit commodi quasi
          tenetur quae distinctio.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src={c1}
            className="w-25 h-25 rounded-2"
            alt="customer_image"
          />
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
          <img
            src={c2}
            className="w-25 h-25 rounded-2"
            alt="customer_image"
          />
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
          <img
            src={c4}
            className="w-25 h-25 rounded-2"
            alt="customer_image"
          />
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
