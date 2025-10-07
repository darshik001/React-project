import { useState } from "react";
import "./Calculetor.css";

const Calculetor = () => {
  const [input, setInput] = useState("");

  const handalclick = (value) => {
    setInput(() => input + value);
  };

  const handalSighn = (value) => {
    setInput(() => input + value);
  };

  const handalAllclear = () => {
    setInput("");
  };

  const handalClear = () => {
    setInput(input.slice(0, -1));
  };

  const handalCalculation = () => {
     if (input === "") {
    alert("Enter Value");
    return;
  }

  try {
   let checkInput = input.replace(/\b0+(\d)/g, "$1").split("%").join("/100");

    let result = eval(checkInput);
     result = result.toFixed(2)

    if (!isFinite(result)) {
      alert("Invalid Calculation");
      setInput("");
    } else {
      setInput(String(result));
    }
  } catch (error) {
    alert("Invalid Input");
    setInput("");
  }
  };

  return (
    <>
      <div className="calculetor">
        <div className="calculator-item">
          <div className="brand">Citizen</div>
          <div className="display" id="display">
            <input
              type="text"
              value={input}
              name="input"
              placeholder="0"
              
              readOnly
            />
          </div>
          <div className="buttons">
            <button className="btn-gray" onClick={handalAllclear}>
              AC
            </button>
            <button className="btn-gray" onClick={handalClear}>
              &larr;
            </button>
            <button className="btn-gray" onClick={() => handalSighn("%")}>
              %
            </button>
            <button className="btn-operator " onClick={() => handalSighn("/")}>
              ÷
            </button>

            <button onClick={() => handalclick("7")}>7</button>
            <button onClick={() => handalclick("8")}>8</button>
            <button onClick={() => handalclick("9")}>9</button>
            <button className="btn-operator " onClick={() => handalSighn("*")}>
              x
            </button>

            <button onClick={() => handalclick("4")}>4</button>
            <button onClick={() => handalclick("5")}>5</button>
            <button onClick={() => handalclick("6")}>6</button>
            <button className="btn-operator " onClick={() => handalSighn("-")}>
              -
            </button>

            <button onClick={() => handalclick("1")}>1</button>
            <button onClick={() => handalclick("2")}>2</button>
            <button onClick={() => handalclick("3")}>3</button>
            <button className="btn-operator" onClick={() => handalSighn("+")}>
              +
            </button>

            <button className="span-two" onClick={() => handalclick("0")}>
              0
            </button>
            <button onClick={() => handalclick(".")}>.</button>
            <button className="btn-operator " onClick={handalCalculation}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculetor;
