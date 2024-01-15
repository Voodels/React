import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./Components/ButtonContainer";
import Display from "./Components/Display";

const App = () => {
  const [val, setVal] = useState("");

  const buttonClicked = (e) => {
    let buttonValue = e.target.innerText;

    if (buttonValue === "C") {
      setVal("");
    } else if (buttonValue === "=") {
      try {
        const newValue = eval(val);
        setVal(newValue.toString());
      } catch (error) {
        setVal("Error");
      }
    } else {
      //old value concatination using + operator with new value
      const newVal = val + buttonValue;
      setVal(newVal);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <Display val={val}></Display>
        <ButtonContainer onButtonClick={buttonClicked}></ButtonContainer>
      </div>
    </>
  );
};

export default App;
