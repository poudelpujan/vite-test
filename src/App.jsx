import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import Menu from "./components/menu/Menu";
import ComingSoon from "./pages/comingSoon/ComingSoon";

function App() {
  return (
    <div className="App">
      <Menu />
      <ComingSoon />
    </div>
  );
}

export default App;
