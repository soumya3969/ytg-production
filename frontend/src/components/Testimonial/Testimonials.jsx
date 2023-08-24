import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
const Testimonials = () => {
    return <Slider>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum hic magni? Sapiente, voluptatum obcaecati consectetur delectus dolorum hic est voluptatibus maxime placeat repellat odit commodi quasi tenetur quae distinctio.</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className='w-25 h-25 rounded-2' alt="customer_image" />
                {/* <div>
                    <h6 className='mb-0 mt-3'>Mr. Desai</h6>
                    <p> Customer </p>
                </div> */}
            </div>
        </div>
    </Slider>

};

export default Testimonials