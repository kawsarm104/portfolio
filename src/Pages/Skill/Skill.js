import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiBootstrap, SiCss3, SiJavascript, SiMongodb } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Skill = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <article className="mt-5 mb-5">
      <Slider {...settings}>
        <aside className="icon-box shadow">
          <h4 className="text-center text-danger text-danger">
            <AiOutlineHtml5 />
          </h4>
          <h6 className="text-center text-danger">HTML</h6>
        </aside>
        <aside className="icon-box shadow">
          <h4 className="text-center text-danger">
            <SiCss3 />
          </h4>
          <h6 className="text-center text-danger">CSS</h6>
        </aside>
        <aside className="icon-box shadow">
          <h4 className="text-center text-danger">
            <SiJavascript />
          </h4>
          <h6 className="text-center text-danger">JavaScript</h6>
        </aside>

        <aside className="icon-box shadow">
          <h4 className="text-center text-danger">
            <FaReact />
          </h4>
          <h6 className="text-center text-danger">React</h6>
        </aside>
        <aside className="icon-box shadow">
          <h4 className="text-center text-danger">
            <SiBootstrap />
          </h4>
          <h6 className="text-center text-danger ">Bootstrap</h6>
        </aside>
        <aside className="icon-box shadow">
          <h4 className="text-center text-danger">
            <FaNodeJs />
          </h4>
          <h6 className="text-center text-danger ">Node Js</h6>
        </aside>
        <aside className="icon-box shadow">
          <h4 className="text-center text-danger">
            <SiMongodb />
          </h4>
          <h6 className="text-center text-danger ">Mongo DB</h6>
        </aside>
      </Slider>
    </article>
  );
};

export default Skill;
