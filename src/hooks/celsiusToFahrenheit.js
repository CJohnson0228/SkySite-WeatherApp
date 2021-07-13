const celsiusToFahrenheit = (props) => {
  let tempF = (props * 1.8) + 32;
    tempF = tempF.toFixed(2);
    return (tempF)
}

export default celsiusToFahrenheit