import { useState } from "react";

const Counter = ({ setValueApp }) => {
  const [value, setValue] = useState(0);
  //   const onHandleClick = (e) => console.log(e);
  //   const onHandleClick = (e) => console.log(e.target.className);

  //   const onHandleClick = (e) =>
  //     e.target.className === "increment"
  //       ? SetValue((prev) => prev + 1)
  //       : SetValue((prev) => prev - 1);

  const onHandleClick = (e) => {
    switch (e.target.className) {
      case "increment":
        setValue((prev) => prev + 1);
        return setValueApp(value);
      case "decrement":
        return setValue((prev) => prev - 1);
      case "reset":
        return setValue(0);
      default:
        return setValue(0);
    }
  };

  return (
    <div className="Counter">
      <button className="increment" onClick={onHandleClick}>
        increment
      </button>
      <h1>{value}</h1>
      <button className="decrement" onClick={onHandleClick}>
        decrement
      </button>
      <button className="reset" onClick={onHandleClick}>
        reset
      </button>
      {/* per evitare l'asincronicità che si è venuta a creare a causa del setValueApp e del console.log, che vanno a sovrapporsi, con il console.log che stampa il valore ancora con il vecchio stato
creo un nuovo bottone che incorpora lo stato da passare ad app.jsx così che non ci siano piu problemi di sincronicità */}
      <button onClick={() => setValueApp(value)}>
        no asincronicità (send to parent App)
      </button>
    </div>
  );
};

export default Counter;
