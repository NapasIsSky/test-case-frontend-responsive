import "./App.css";
import { MOCK_DATA_ATHLETS, MOCK_DATA_PLAYERS } from "./utils";
import { ResponiveList } from "./modules/sections";

function App() {
  return (
    <div className="flex flex-col overflow-x-hidden overflow-y-auto">
      <ResponiveList
        imgePosition={"left"}
        imagesClass={"football-img"}
        title={"ATHLETS"}
        list={MOCK_DATA_ATHLETS}
        color={"normal"}
      />

      <ResponiveList
        imgePosition={"right"}
        imagesClass={"basketball-img"}
        title={"PLAYERS"}
        list={MOCK_DATA_PLAYERS}
        color={"dark"}
      />
    </div>
  );
}

export default App;
