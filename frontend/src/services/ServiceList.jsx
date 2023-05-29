 

 import React from "react";
 import ServiceCard from "./ServiceCard";
 import {Col} from "reactstrap";

 import weatherImg from '../assets/images/weather.png'
 import guideImg from '../assets/images/guide.png'
 import customizationImg from '../assets/images/customization.png'


 const servicesData =[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "LOREM ipsum dolor sit amet, constrction adispicing elite",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "LOREM ipsum dolor sit amet, constrction adispicing elite",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "LOREM ipsum dolor sit amet, constrction adispicing elite",
    },

 ]



 export default ServiceList;