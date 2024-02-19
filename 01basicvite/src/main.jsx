import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    href: "www.google.com",
    target: "_blank",
  },
  children: "click me to visit google.com",
};

function MyApp() {
  return (
    <>
      <h1>CUSTOM REACT APP</h1>
    </>
  );
}

const AnotherElement = (
  <a href="www.google.com" target="_blank">
    Visit Google
  </a>
);

const areactElement = React.createElement(
  "a",
  { href: "www.google.com", target: "_blank" },
  "Visit Google"
);
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
