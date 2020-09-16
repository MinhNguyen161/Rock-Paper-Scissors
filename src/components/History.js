import React from "react";

export default function History(props) {
  return (
    <div>
      <h3> History : </h3>
      <div>{props.list.map((item) => item)}</div>
    </div>
  );
}
