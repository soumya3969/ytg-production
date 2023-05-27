import React from "react";
import '../styles/home.css';
import { Container, Row,Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png'
import Subtitle from "../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
const Home =()=>{
    return <>
    
    {/* hero section start */}
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="hero__content">
                        <div className="hero__subtitle d-flex align-items-center">
                            <Subtitle subtitle={'Know Before You Go'}/>
                            <img src={worldImg} alt="" />
                        </div>
                        <h1>Travelling opens the door to creating <span className="highlight"> memories</span> </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores id similique obcaecati pariatur quas asperiores quibusdam voluptatum corporis dicta. Fugit sequi quis enim! Tempore accusamus reprehenderit corporis odit. Beatae, libero.</p>
                    </div>
                </Col>


                <Col lg='2'>
                    <div className="hero__img-box">
                        <img src={heroImg} alt="" />
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img-box mt-4">
                        <video src={heroVideo} alt="" controls />
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img-box mt-5">
                        <img src={heroImg02} alt="" />
                    </div>
                </Col>

                <SearchBar/>
            </Row>
        </Container>
    </section>
    {/* hero section end */}

    </>;
};
export default Home;