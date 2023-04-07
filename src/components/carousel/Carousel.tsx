import React from "react";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { IBaseComponent } from "../../utils";

import "swiper/css";

interface ICarousel extends IBaseComponent {
  children: string | JSX.Element | JSX.Element[];
}

const Carousel: React.FC<ICarousel> = (props) => {
  const { children, className } = props;
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{
        clickable: true,
        type: "bullets",
      }}
      className={className}
    >
      {children}
    </Swiper>
  );
};

export default Carousel;
