import React from "react";
import { SwiperSlide } from "swiper/react";

import "./App.css";
import { ICard } from "./components";
import Card from "./components/card/Card";
import { MOCK_DATA_ATHLETS, MOCK_DATA_PLAYERS } from "./utils";
import Carousel from "./components/carousel/Carousel";

function App() {
  return (
    <div className="flex flex-col overflow-x-hidden overflow-y-auto">
      <div className="flex flex-col relative">
        <div className="flex title-section md:items-end h-screen-50 md:h-full">
          <div className="flex md:flex-2 lg:flex-1 xl:flex-2" />
          <h1 className="pl-4 grey-1-text flex flex-col flex-1 sm:flex-2 md:flex-2 xl:flex-4 ">
            ATHLETS
          </h1>
          <div className="flex md:flex-1 lg:flex-1 xl:flex-1" />
        </div>

        <img
          src="/images/footballer 1.png"
          alt="football-player"
          className="w-3/5 min-[380px]:w-2/3 md:w-4/6 lg:w-2/6 2xl:w-1/4 bg-cover z-10 absolute pt-10 md:pt-10 left-20 md:-left-32 lg:-left-28 xl:left-20"
        />

        <div className="md:hidden h-screen-50">
          <Carousel className="h-full">
            {MOCK_DATA_ATHLETS.map((athlet: ICard, index: number) => (
              <SwiperSlide
                className={`${index === 0 ? "bg-white" : ""} ${index === 1 ? "grey-bg" : ""} ${
                  index === 2 ? "purple-bg" : ""
                } grow-${index + 1} py-10`}
              >
                <Card
                  number={athlet.number}
                  title={athlet.title}
                  content={athlet.content}
                  contrast={index === MOCK_DATA_ATHLETS.length - 1}
                  className="flex flex-col h-full px-4"
                />
              </SwiperSlide>
            ))}
          </Carousel>
        </div>

        <div className="hidden md:flex flex-col">
          {MOCK_DATA_ATHLETS.map((athlet: ICard, index: number) => (
            <div
              className={`${index === 1 ? "grey-bg" : ""} ${index === 2 ? "purple-bg" : ""} grow-${
                index + 1
              } flex py-14`}
            >
              <div className="flex md:flex-2 lg:flex-1 xl:flex-2" />
              <Card
                number={athlet.number}
                title={athlet.title}
                content={athlet.content}
                contrast={index === MOCK_DATA_ATHLETS.length - 1}
                className="flex flex-col flex-1 sm:flex-2 xl:flex-4"
              />
              <div className="flex md:flex-1 lg:flex-1 xl:flex-1" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col relative">
        <div className="flex title-section md:items-end h-screen-50 md:h-full">
          <div className="flex lg:flex-1 xl:flex-1" />
          <h1 className="pl-4 md:pl-10 grey-1-text flex flex-3 lg:flex-2 xl:flex-3">PLAYERS</h1>
          <div className="flex md:flex-2 lg:flex-1 xl:flex-3" />
        </div>

        <img
          src="/images/player.png"
          alt="basketball-player"
          className="w-5/6 lg:w-3/6 2xl:w-1/3 bg-cover z-10 absolute pt-16 md:pt-0 right-10 md:-right-36 lg:-right-28 xl:right-20"
        />

        <div className="md:hidden h-screen-50">
          <Carousel className="h-full">
            {MOCK_DATA_PLAYERS.map((palyer: ICard, index: number) => (
              <SwiperSlide
                className={`${index === 0 ? "bg-white" : ""} ${index === 1 ? "grey-bg" : ""} ${
                  index === 2 ? "dark-purple-bg" : ""
                } grow-${index + 1} py-10 flex h-full`}
              >
                <Card
                  number={palyer.number}
                  title={palyer.title}
                  content={palyer.content}
                  contrast={index === MOCK_DATA_PLAYERS.length - 1}
                  theme="dark"
                  className="flex flex-col h-full px-4"
                />
              </SwiperSlide>
            ))}
          </Carousel>
        </div>

        <div className="hidden md:flex flex-col">
          {MOCK_DATA_PLAYERS.map((palyer: ICard, index: number) => (
            <div
              className={`${index === 1 ? "grey-bg" : ""} ${
                index === 2 ? "dark-purple-bg" : ""
              } grow-${index + 1} flex py-14 pl-10`}
            >
              <div className="flex lg:flex-1 xl:flex-1" />
              <Card
                number={palyer.number}
                title={palyer.title}
                content={palyer.content}
                contrast={index === MOCK_DATA_PLAYERS.length - 1}
                theme="dark"
                className="flex flex-col flex-3 lg:flex-2 xl:flex-3 "
              />
              <div className="flex md:flex-2 lg:flex-1 xl:flex-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
