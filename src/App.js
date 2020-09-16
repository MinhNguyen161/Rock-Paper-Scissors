import React, { useState } from "react";
import Box from "./components/Box";
import "./App.css";
import History from "./components/History";
import Buttons from "./components/Button";

const DEFAULT_IMG =
  "http://www.thewateringhole.co.uk/wp-content/uploads/2012/12/play.png";
const choices = {
  rock:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png",
};
let temp = [];

function App() {
  let [compItem, setCompItem] = useState("");
  let [url, setUrl] = useState("");
  let [compUrl, setCompUrl] = useState("");
  let [result, setResult] = useState("START GAME");
  let [history, setHistory] = useState([]);
  const selectItem = (i) => {
    let cpuChoice = getCPUChoice();
    let ans = compare(i, cpuChoice);
    temp.push(resCompare(ans));
    let tempp = [...temp];
    setHistory(tempp);
    setUrl(choices[i]);
    setCompItem(cpuChoice);
    setCompUrl(choices[cpuChoice]);
    setResult(ans);
  };

  const getCPUChoice = () => {
    let array = ["rock", "paper", "scissors"];
    var index = Math.floor(Math.random() * array.length);
    return array[index];
  };
  const resCompare = (ans) => {
    if (ans === "Tie") {
      return "DRAW ";
    } else if (ans === "You win ") {
      return "VICTORY ";
    } else if (ans === "You lose ") {
      return "LOSS ";
    }
  };
  const compare = (meChoice, cpuChoice) => {
    if (meChoice === cpuChoice) {
      return "Tie";
    }
    if (meChoice === "rock") {
      if (cpuChoice === "scissors") {
        return "You win ";
      } else if (cpuChoice === "paper") {
        return "You lose ";
      }
    } else if (meChoice === "paper") {
      if (cpuChoice === "scissors") {
        return "You lose ";
      } else if (cpuChoice === "rock") {
        return "You win ";
      }
    } else if (meChoice === "scissors") {
      if (cpuChoice === "rock") {
        return "You lose ";
      } else if (cpuChoice === "paper") {
        return "You win ";
      }
    }
  };
  return (
    <div className="App">
      <h1>Rock-Paper-Scissors </h1>
      <div className="box-containerr"></div>
      <Box
        num="You"
        url={url || DEFAULT_IMG}
        title="Ga"
        value={result}
        result={result}
      />
      <div>
        <Buttons selectItem={selectItem} />
        <History list={history} />
      </div>
      <Box
        num="Computer"
        url={compUrl || DEFAULT_IMG}
        value={compItem}
        title="Kem"
        result={result}
      />
    </div>
  );
}

export default App;
