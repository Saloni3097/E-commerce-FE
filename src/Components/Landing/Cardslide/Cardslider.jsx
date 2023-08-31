import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import gadgetSale from "../../../Assets/Banners/gadget-sale.jpg";
import kitchenSale from "../../../Assets/Banners/kitchen-sale.jpg";
import poco from "../../../Assets/Banners/poco-m4-pro.webp";
import realme from "../../../Assets/Banners/realme-9-pro.webp";
import fashionSale from "../../../Assets/Banners/fashionsale.jpg";
import oppo from "../../../Assets/Banners/oppo-reno7.webp";
import "./style.scss";

// export function SampleNextArrow(props) {
//   const { className, onClick } = props;
//   return <div className={className} onClick={onClick} />;
// }

// export function SamplePrevArrow(props) {
//   const { className, onClick } = props;
//   return <div className={className} onClick={onClick} />;
// }

const Cardslider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
  };

  const banners = [gadgetSale, kitchenSale, poco, fashionSale, realme, oppo];
  return (
    <>
      <section className="h-44 sm:h-72 w-full rounded-sm shadow relative overflow-hidden">
        <Slider {...settings}>
          {banners.map((el, i) => (
            <img
              draggable="false"
              className="h-44 sm:h-72 w-full object-cover"
              src={el}
              alt="banner"
              key={i}
            />
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Cardslider;
