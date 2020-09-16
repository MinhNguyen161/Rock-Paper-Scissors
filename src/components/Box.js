// import React from "react";

// export default function Box(props) {
//   return (
//     <div className="box-style">
//       <h3>{props.value}</h3>
//     </div>
//   );
// }

import React, { Component } from "react";

export default class Box extends Component {
  render() {
    let win;
    if (this.props.result === "Tie") {
      win = "tie";
    } else if (this.props.result === "You win ") {
      win = this.props.num === "Computer" ? "loser" : "winner";
    } else if (this.props.result === "You lose ") {
      win = this.props.num === "Computer" ? "winner" : "loser";
    }
    return (
      <div className={`box-style ${win}`}>
        <h1>{this.props.num}</h1>
        <img src={this.props.url} alt={this.props.title} />
        <h3>{this.props.value}</h3>
      </div>
    );
  }
}
