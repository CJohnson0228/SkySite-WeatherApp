const timeConvert = (props) => {
  var date = new Date(props * 1000);
    var hour = date.getHours();
    var ampm = (hour >= 12) ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12;
    var minute = date.getMinutes();
    minute = minute <10 ? '0' + minute : minute;
    var Ftime = hour + ":" + minute + " " + ampm;
    return (Ftime);
}

export default timeConvert