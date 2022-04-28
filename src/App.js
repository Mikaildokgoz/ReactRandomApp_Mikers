import "./App.css";
import oldMan from "../src/assets/growingUpMan.svg";

import mail from "../src/assets/mail.svg";
import man from "../src/assets/man.svg";

import phone from "../src/assets/phone.svg";
import padlock from "../src/assets/padlock.svg";
import map from "../src/assets/map.svg";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
 
  const [showTable, setShowTable] = useState(false);
  const [up, setUp] = useState("name");
  const [down, setDown] = useState();
  const [user, setUser] = useState([]);

  const getApi = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => {
        if (!res.ok) {
          setError("Something went wrong!!!");
          setData([]);
        } else {
          return res.json();
        }
      })
      .then((res) => {
        setData(res.results[0]);
        setError("");
      });
  };
  
 



  useEffect(() => {
    getApi();
    setDown(data.name.first);
  }, []);

  const handleRandom = () => {
    getApi();
    setDown(data.name.first);
    setUp("name");
  };

  const handleAdd = () => {
    setShowTable(true);
    const newUser = [
      ...user,[data?.name.first, data?.dob.age, data?.phone ]];
    setUser(newUser);
    console.log(user);
    console.log(newUser);
  };

  const handleOver = (e) => {
    if (e.target.id === "1" || e.target.id === "2") {
      setUp("name");
      setDown(data?.name.first);
    } else if (e.target.id === "3") {
      setUp("mail");
      setDown(data?.email);
    } else if (e.target.id === "4" || e.target.id === "5") {
      setUp("age");
      setDown(data?.dob.age);
    } else if (e.target.id === "6") {
      setUp("map");
      setDown(data?.location.street.name);
    } else if (e.target.id === "7") {
      setUp("phone");
      setDown(data?.phone);
    } else if (e.target.id === "8") {
      setUp("password");
      setDown(data?.login.password);
    }
  };

  return (
    <div className="App">
      <div className="mainImg">
        <img src={data?.picture.large} alt="" />
      </div>
      <div className="description">
        <h2>My {up} is</h2>
        <h2>{down}</h2>
      </div>
      <div className="icons">
        <div>
          <img
            className="icon"
            id="1"
            src={man}
            alt=""
            onMouseOver={handleOver}
          />
        </div>
        <div>
          <img
            className="icon"
            id="3"
            src={mail}
            alt=""
            onMouseOver={handleOver}
          />
        </div>
        <div>
          <img
            className="icon"
            id="4"
            src={oldMan}
            alt=""
            onMouseOver={handleOver}
          />
        </div>
        <div>
          <img
            className="icon"
            id="6"
            src={map}
            alt=""
            onMouseOver={handleOver}
          />
        </div>
        <div>
          <img
            className="icon"
            id="7"
            src={phone}
            alt=""
            onMouseOver={handleOver}
          />
        </div>
        <div>
          <img
            className="icon"
            id="8"
            src={padlock}
            alt=""
            onMouseOver={handleOver}
          />
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleRandom}>Random User</button>
        <button onClick={handleAdd}>Add User</button>
      </div>
      {showTable && (
        <div className="table">
          <table>
            <thead>
              <th>First Name</th>
              <th>Age</th>
              <th>Phone</th>
            </thead>
            {user.map((each) => {
              return (
                <tbody>
                  <td>{each[0]}</td>
                  <td>{each[1]}</td>
                  <td>{each[2]}</td>
                </tbody>
              );
            })}
           
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
