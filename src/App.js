import "./App.css";
import oldMan from "../src/assets/growingUpMan.svg";
import oldWoman from "../src/assets/growingUpWoman.svg";
import mail from "../src/assets/mail.svg";
import man from "../src/assets/man.svg";
import woman from "../src/assets/woman.svg";
import phone from "../src/assets/phone.svg";
import padlock from "../src/assets/padlock.svg";
import map from "../src/assets/map.svg";
import useFetch from "./customHook/useFetch";

function App() {
  const { data } = useFetch("https://randomuser.me/api/");
  console.log(data);

  return (
    <div className="App">
      <div className="mainImg">
        <img src={data?.picture.large} alt="" />
      </div>
      <div className="description">
        <h2></h2>
        <h2></h2>
      </div>
      <div className="icons">
        <div>
          <img className="icon" id="1" src={man} alt="" />
        </div>
        <div>
          <img className="icon" id="3" src={mail} alt="" />
        </div>
        <div>
          <img className="icon" id="4" src={oldMan} alt="" />
        </div>
        <div>
          <img className="icon" id="6" src={map} alt="" />
        </div>
        <div>
          <img className="icon" id="7" src={phone} alt="" />
        </div>
        <div>
          <img className="icon" id="8" src={padlock} alt="" />
        </div>
      </div>
      <div className="buttons">
        <button>Random User</button>
        <button>Add User</button>
      </div>
    </div>
  );
}

export default App;
