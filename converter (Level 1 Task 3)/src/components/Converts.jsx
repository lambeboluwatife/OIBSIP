const Converts = ({ converts }) => {
  const temperatureType = (temperatureType) => {
    if (temperatureType === "celsius") {
      return "From Celsius to Fahrenheit";
    } else {
      return "From Fahrenheit to Celsius";
    }
  };
  return (
    <>
      {converts.map((convert) => (
        <div className="task">
          <h4>{temperatureType(convert.temperatureType)}</h4>
          <h5>
            From {convert.temperatureDegree}&deg; to{" "}
            {convert.converted.toFixed(2)}&deg;
          </h5>
        </div>
      ))}
    </>
  );
};

export default Converts;
