import React from "react";

export default function Buttons(props) {
  return (
    <div>
      <button onClick={() => props.selectItem("rock")}>Rock</button>
      <button onClick={() => props.selectItem("paper")}>Paper</button>
      {/* Hoac la su dung */}
      {/* <button onClick={selectItem}>Scissors</button> */}
      <button onClick={() => props.selectItem("scissors")}>Scissors</button>
    </div>
  );
}
