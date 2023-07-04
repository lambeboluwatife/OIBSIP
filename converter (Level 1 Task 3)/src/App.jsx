import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Converts from "./components/Converts";

const App = () => {
  const [degreeConverted, setDegreeConverted] = useState([]);

  const onConvert = (temperature) => {
    if (temperature.temperatureType === "celsius") {
      convertToFahrenheit(temperature);
    } else {
      convertToCelsius(temperature);
    }
  };

  const convertToFahrenheit = (degree) => {
    const converted = (parseInt(degree.temperatureDegree) * 9) / 5 + 32;

    const id = Math.floor(Math.random() * 10000) + 1;
    const newConverted = { id, converted, ...degree };

    setDegreeConverted([...degreeConverted, newConverted]);
  };

  const convertToCelsius = (degree) => {
    const converted = ((parseInt(degree.temperatureDegree) - 32) * 5) / 9;

    const id = Math.floor(Math.random() * 10000) + 1;
    const newConverted = { id, converted, ...degree };

    setDegreeConverted([...degreeConverted, newConverted]);
  };

  return (
    <div className="container">
      <Header />
      <UserInput onAdd={onConvert} />
      {degreeConverted.length > 0 ? (
        <Converts converts={degreeConverted} />
      ) : (
        "No conversion made"
      )}
    </div>
  );
};

export default App;
