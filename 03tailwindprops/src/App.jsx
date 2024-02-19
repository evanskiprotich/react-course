import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    username: "EK",
    age: 25,
    address: {
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
    },
  };
  let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-2 rounded-md">
        Vite with Tailwind
      </h1>
      <Card username="Evans kiprotich" post="Software Engineer" />
      <Card username="Josh" post="Staff" />
      <Card username="Evans" myArr={myArr} />
    </>
  );
}

export default App;
