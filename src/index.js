import React from "react";
import { render } from "react-dom";
import Hello from "./components/Hello";

const App = () => {
  return (
    <div>
      <Hello />
    </div>
  );
};
render(<App />, document.getElementById("app"));
