import "./App.css";
import { MOCK_DATA_ATHLETS, MOCK_DATA_PLAYERS } from "./utils";
import { ResponiveList } from "./modules/home";

function App() {
  return (
    <div className="flex flex-col overflow-x-hidden overflow-y-auto">
      <ResponiveList
        imgePosition={"left"}
        title={"ATHLETS"}
        list={MOCK_DATA_ATHLETS}
        color={"normal"}
      >
        <img
          src={"/images/footballer 1.png"}
          alt={"football-player"}
          className={
            "z-10 absolute bg-cover w-3/5 min-[380px]:w-2/3 md:w-4/6 lg:w-2/6 2xl:w-1/4 pt-10 md:pt-10 left-20 sm:-left-36 lg:left-20"
          }
        />
      </ResponiveList>

      <ResponiveList
        imgePosition={"right"}
        title={"PLAYERS"}
        list={MOCK_DATA_PLAYERS}
        color={"dark"}
      >
        <img
          src={"/images/player.png"}
          alt={"basketball-player"}
          className={
            "z-10 absolute bg-cover w-5/6 lg:w-3/6 2xl:w-1/3 pt-16 md:pt-0 right-10 sm:-right-36 lg:right-20"
          }
        />
      </ResponiveList>
    </div>
  );
}

export default App;
