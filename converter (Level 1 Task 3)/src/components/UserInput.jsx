import { useState } from "react";

const UserInput = ({ onAdd }) => {
  const [temperatureDegree, setTemperatureDegree] = useState("");
  const [temperatureType, setTemperatureType] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!temperatureDegree) {
      alert("Please enter degree");
      return;
    }

    if (!temperatureType || temperatureType === "Select") {
      alert("Please enter temperature type");
      return;
    }

    onAdd({ temperatureDegree, temperatureType });

    setTemperatureDegree("");
    setTemperatureType("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Temperature Degree</label>
        <input
          type="number"
          placeholder="Temperature Degree"
          required
          value={temperatureDegree}
          onChange={(e) => setTemperatureDegree(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Temperature Type</label>
        <select
          required
          value={temperatureType}
          onChange={(e) => setTemperatureType(e.target.value)}
        >
          <option selected value="Select">
            Select Temperature Type
          </option>
          <option value="celsius">Celsius (&deg;C)</option>
          <option value="fahrenheit">Fahrenheit (&deg;F)</option>
        </select>
      </div>

      <input type="submit" value="Convert" className="btn btn-block" />
    </form>
  );
};

export default UserInput;
