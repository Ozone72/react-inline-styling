//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import classStyles from "../public/styles.css";
import React from "react";
import ReactDOM from "react-dom";

let message = "Good morning";
let style = {
  color: "red"
};

const currentDate = new Date();
const currentTime = currentDate.getHours();

if (currentTime > 12 && currentTime < 18) {
  message = "Good afternoon";
  style = { color: "green" };
} else {
  message = "Good evening";
  style = { color: "blue" };
}

ReactDOM.render(
  <div>
    <h1 className={classStyles} style={style}>
      {message}
    </h1>
  </div>,
  document.getElementById("root")
);
