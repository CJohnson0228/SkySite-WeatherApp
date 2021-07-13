const millibarsToInHg = (props) => {
  let inchesHg = (props / 33.864);
  inchesHg = inchesHg.toFixed(2);
  return (inchesHg)
}

export default millibarsToInHg