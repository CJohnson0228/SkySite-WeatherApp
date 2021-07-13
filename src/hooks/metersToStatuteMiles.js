const metersToStatuteMiles = (props) => {
  let miles = (props * 0.00062);
  miles = miles.toFixed(2);
  return (miles);
}

export default metersToStatuteMiles