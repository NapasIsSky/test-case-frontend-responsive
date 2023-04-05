import React from "react";

import "./App.css";
import { ICard } from "./components";
import Card from "./components/card/Card";
import { MOCK_DATA_ATHLETS, MOCK_DATA_PLAYERS } from "./utils";
import PlusIcon from "./components/icon/PlusIcon";

function App() {
  return (
    <div>
      <img
        src="/images/footballer 1.png"
        alt="football-player"
        className="bg-contain h-5/6 object-cover z-1 absolute pt-10"
      />
      <div className="flex flex-col h-screen-80">
        <div className="flex grow items-end">
          <div className="flex md:flex-1 xl:flex-2" />
          <h1 className="grey-1-text flex flex-col flex-1 sm:flex-2 xl:flex-4 ">ATHLETS</h1>
          <div className="flex md:flex-1 xl:flex-1" />
        </div>

        {MOCK_DATA_ATHLETS.map((athlet: ICard, index: number) => (
          <div
            className={`${index === 1 ? "grey-bg" : ""} ${index === 2 ? "purple-bg" : ""} grow-${
              index + 1
            } flex`}
          >
            <div className="flex md:flex-1 xl:flex-2" />
            <Card
              number={athlet.number}
              title={athlet.title}
              content={athlet.content}
              contrast={index === MOCK_DATA_ATHLETS.length - 1}
              className="flex flex-col flex-1 sm:flex-2 xl:flex-4 "
            />
            <div className="flex md:flex-1 xl:flex-1" />
          </div>
        ))}
      </div>

      <div>
        <PlusIcon />
        <img
          src="/images/player.png"
          alt="basketball-player"
          className="bg-contain absolute z-1 h-4/6 right-0 object-cover m-0"
        />
      </div>

      <div className="flex flex-col h-screen-80 grow">
        <div className="flex grow items-end">
          <div className="flex md:flex-1 xl:flex-1" />
          <h1 className="grey-1-text flex flex-col flex-1 sm:flex-2 xl:flex-3">PLAYERS</h1>
          <div className="flex md:flex-1 xl:flex-3" />
        </div>
        {MOCK_DATA_PLAYERS.map((palyer: ICard, index: number) => (
          <div
            className={`${index === 1 ? "grey-bg" : ""} ${
              index === 2 ? "dark-purple-bg" : ""
            } grow-${index + 1} flex`}
          >
            <div className="flex md:flex-1 xl:flex-1" />
            <Card
              number={palyer.number}
              title={palyer.title}
              content={palyer.content}
              contrast={index === MOCK_DATA_PLAYERS.length - 1}
              className="flex flex-col flex-1 sm:flex-2 xl:flex-3 "
            />
            <div className="flex md:flex-1 xl:flex-3" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
