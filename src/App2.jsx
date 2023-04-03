import "./App.css";
import { useState, createContext, useContext } from "react";
import Counter from "./components/Counter";

function App() {
  const [valueApp, setValueApp] = useState(0);

  return (
    <div className="App">
      <Counter setValueApp={setValueApp} />
      {console.log(valueApp)}
    </div>
  );
}

export default App;
