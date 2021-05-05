function Timestamp() {
  //TIMESTAMP

  var today = new Date();
  today =
    parseInt(today.getMonth() + 1) +
    "" +
    today.getDate() +
    "" +
    today.getFullYear() +
    "" +
    today.getHours() +
    "" +
    today.getMinutes() +
    "" +
    today.getSeconds();
  //console.log(today);

  return today;
}

function getDate() {
  //TIMESTAMP

  var today = new Date();
  today =
    parseInt(today.getMonth() + 1) +
    "." +
    today.getDate() +
    "." +
    today.getFullYear();
  //console.log(today);

  return today;
}
