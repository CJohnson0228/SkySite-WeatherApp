const windDirection = (props) => {
  if (props>337.5) return 'N';
  if (props>292.5) return 'NW';
  if (props>247.5) return 'W';
  if (props>202.5) return 'SW';
  if (props>157.5) return 'S';
  if (props>122.5) return 'SE';
  if (props>67.5) return 'E';
  if (props>22.5) return 'NE';
  return 'N';
}

export default windDirection