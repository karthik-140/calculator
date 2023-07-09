import { useEffect, useRef, useState } from "react";

import "./Calculator.css";

const Calculator = () => {
  const [result, setResult] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const buttonHandler = (e) => {
    setResult(result + e.target.name);
  };

  const clearHandler = () => {
    setResult("");
  };

  const backspaceHandler = () => {
    let str = result.slice(0, -1);
    setResult(str);
  };

  const resultHandler = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
      //   console.log("error")
    }
  };

  return (
    <>
      <section className="calculator">
        <form>
          <input type="text" value={result} ref={inputRef} />
        </form>
        <div className="keyboard">
          <button onClick={clearHandler} id="clear" name="clear">
            Clear
          </button>
          <button onClick={backspaceHandler} id="backspace" name="Del">
            Del
          </button>
          <button onClick={buttonHandler} name="+">
            +
          </button>
          <button onClick={buttonHandler} name="7">
            7
          </button>
          <button onClick={buttonHandler} name="8">
            8
          </button>
          <button onClick={buttonHandler} name="9">
            9
          </button>
          <button onClick={buttonHandler} name="-">
            &ndash;
          </button>
          <button onClick={buttonHandler} name="4">
            4
          </button>
          <button onClick={buttonHandler} name="5">
            5
          </button>
          <button onClick={buttonHandler} name="6">
            6
          </button>
          <button onClick={buttonHandler} name="*">
            &times;
          </button>
          <button onClick={buttonHandler} name="1">
            1
          </button>
          <button onClick={buttonHandler} name="2">
            2
          </button>
          <button onClick={buttonHandler} name="3">
            3
          </button>
          <button onClick={buttonHandler} name="/">
            /
          </button>
          <button onClick={buttonHandler} name="0">
            0
          </button>
          <button onClick={buttonHandler} name=".">
            .
          </button>
          <button onClick={resultHandler} id="result" name="=">
            =
          </button>
        </div>
      </section>
    </>
  );
};

export default Calculator;
