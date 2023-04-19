import React from "react";
import { SwiperSlide } from "swiper/react";

import { IBaseComponent } from "../../utils";
import { Carousel, Card, ICard } from "../../components";

interface IResponsiveList extends IBaseComponent {
  imgePosition: "left" | "right";
  imagesClass?: string;
  title: string;
  list: ICard[];
  color?: "dark" | "normal";
}

const ResponsiveList: React.FC<IResponsiveList> = (props) => {
  const { imgePosition, imagesClass, title, list, color } = props;

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

  const renderBiggerMovileDivice = () => {
    return (
      <div className="hidden md:flex flex-col">
        {list.map((item: ICard, index: number) => (
          <div
            className={`${index === 1 ? "grey-bg" : ""} ${
              index === 2 ? getHilightColor().bg : ""
            } grow-${index + 1} flex sm:py-8 lg:py-12 ${
              imgePosition !== "left" ? "pl-10 lg:pl-0" : ""
            }`}
          >
            <div className={`flex ${leftPosition ? "flex-1 lg:flex-3" : "lg:flex-1"}`} />
            <Card
              number={item.number}
              title={item.title}
              content={item.content}
              contrast={index === list.length - 1}
              className={leftPosition ? "flex-2" : "flex-3"}
            />
            <div className={`flex ${leftPosition ? "lg:flex-1" : "md:flex-3"}`} />
          </div>
        ))}
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <div className="md:hidden h-screen-width">
        <Carousel className="h-full">
          {list.map((item: ICard, index: number) => (
            <SwiperSlide
              className={`${index === 0 ? "bg-white" : ""} ${index === 1 ? "grey-bg" : ""} ${
                index === 2 ? "purple-bg" : ""
              } grow-${index + 1}`}
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
      <div className="flex md:items-end h-screen-width md:h-full">
        <div className={`flex ${leftPosition ? "md:flex-1 lg:flex-3" : "lg:flex-1"}`} />
        <h1
          className={`pt-10 pl-4 md:pl-0 grey-1-text flex ${
            leftPosition ? "md:flex-2 lg:flex-3" : "md:pl-10 lg:pl-0 flex-3 lg:flex-6"
          }`}
        >
          {title}
        </h1>
      </div>

      <div className={imagesClass} />

      {renderBiggerMovileDivice()}
      {renderMobile()}
    </div>
  );
};

export default ResponsiveList;
