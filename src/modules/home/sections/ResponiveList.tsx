import React from "react";
import { SwiperSlide } from "swiper/react";

import { IBaseComponent } from "../../../utils";
import { Carousel, Card, ICard } from "../../../components";

interface IResponsiveList extends IBaseComponent {
  imgePosition: "left" | "right";
  title: string;
  list: ICard[];
  color?: "dark" | "normal";
  children: React.ReactNode;
}

const ResponsiveList: React.FC<IResponsiveList> = (props) => {
  const { imgePosition, title, list, color, children } = props;

  const leftPosition: boolean = imgePosition === "left";

  const getHilightColor = () => {
    let colorClass = {
      bg: "purple-bg",
    };

    if (color === "dark") {
      colorClass.bg = "dark-purple-bg";
    }

    return colorClass;
  };

  const renderHeaderNImg = () => {
    return (
      <React.Fragment>
        <div className="flex title-section md:items-end h-screen-50 md:h-full">
          <div className={`flex ${leftPosition ? "sm:flex-3" : "lg:flex-1"}`} />
          <h1
            className={`pl-4 sm:pl-0 grey-1-text flex ${
              leftPosition ? "sm:flex-4" : "md:pl-10 lg:pl-0 flex-3 lg:flex-6"
            }`}
          >
            {title}
          </h1>
        </div>

        {children}
      </React.Fragment>
    );
  };

  const renderBiggerMovileDivice = () => {
    return (
      <div className="hidden md:flex flex-col">
        {list.map((item: ICard, index: number) => (
          <div
            className={`${index === 1 ? "grey-bg" : ""} ${
              index === 2 ? getHilightColor().bg : ""
            } grow-${index + 1} flex py-14 ${imgePosition !== "left" ? "pl-10 lg:pl-0" : ""}`}
          >
            <div className={`flex ${leftPosition ? "sm:flex-3" : "lg:flex-1"}`} />
            <Card
              number={item.number}
              title={item.title}
              content={item.content}
              contrast={index === list.length - 1}
              className={leftPosition ? "sm:flex-3" : "flex-3"}
            />
            <div className={`flex ${leftPosition ? "flex-1" : "md:flex-3"}`} />
          </div>
        ))}
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <div className="md:hidden h-screen-50">
        <Carousel className="h-full">
          {list.map((item: ICard, index: number) => (
            <SwiperSlide
              className={`${index === 0 ? "bg-white" : ""} ${index === 1 ? "grey-bg" : ""} ${
                index === 2 ? "purple-bg" : ""
              } grow-${index + 1} py-10`}
            >
              <Card
                number={item.number}
                title={item.title}
                content={item.content}
                contrast={index === list.length - 1}
                className="h-full px-4"
              />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    );
  };

  return (
    <div className="flex flex-col relative">
      {renderHeaderNImg()}
      {renderBiggerMovileDivice()}
      {renderMobile()}
    </div>
  );
};

export default ResponsiveList;
