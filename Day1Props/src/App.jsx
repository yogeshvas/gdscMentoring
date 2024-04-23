import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Users from "./componets/Users";
import Student from "./componets/Student";
import { set } from "mongoose";

function App() {
  const data = ["Kartavya", "Shivam", "sahil", "Urvashi"];
  // const [name, setName] = useState("");
  // const [age, setAge] = useState();
  return (
    <>
      {/* {name}
      {age}
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> */}
      <Users data={data} />
      {/* <Student data={data} /> */}
    </>
  );
}

export default App;
