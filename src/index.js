import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";

import data from "./data";

ReactDOM.render(
  <>
    <h1 style={{ textAlign: "center" }}>Contacts</h1>

    <App
      name={data[0].name}
      img={data[0].img}
      phone={data[0].phone}
      email={data[0].email}
    />
    <App
      name={data[1].name}
      img={data[1].img}
      phone={data[1].phone}
      email={data[1].email}
    />
    <App
      name={data[2].name}
      img={data[2].img}
      phone={data[2].phone}
      email={data[2].email}
    />
  </>,
  document.getElementById("root")
);
