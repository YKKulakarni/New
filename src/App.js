import logo from "./logo.svg";
import "./App.css";
import CompC from "./component/CompC";
import React from "react";

export const UserContext = React.createContext();
export const cityContext = React.createContext();

function App() {
  return (
    <>
      Hello
      <UserContext.Provider value={"yalaguresh"}>
        <cityContext.Provider value={'Dharwad'}>
        <CompC />
        </cityContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
