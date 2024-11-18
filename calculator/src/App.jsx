import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("0");
  const [bgColor, setBgColor] = useState("#f9f9f9"); // Initial background color

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("0");
    } else if (buttonText === "=") {
      try {
        const result = eval(calVal);
        setCalVal(result.toString());
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      if (calVal === "0" && !isNaN(buttonText)) {
        setCalVal(buttonText);
      } else if (calVal !== "0") {
        setCalVal(calVal + buttonText);
      }
    }

    // Change background color when any button is clicked
    setBgColor(getRandomColor());
  };

  const getRandomColor = () => {
    const colors = ['#f9f9f9', '#e8f7e8', '#fce5cd', '#ffcccb', '#d0e2ff'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>Calculator</h1>
      <div className={styles.calculator} style={{ backgroundColor: bgColor }}>
        <Display displayValue={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}

export default App;
