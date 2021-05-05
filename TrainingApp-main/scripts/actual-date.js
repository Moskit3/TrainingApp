function actualDate(id) {
  var today = new Date();
  days = [
    "Niedziela",
    "Poniedzialek",
    "Wtorek",
    "Sroda",
    "Czwartek",
    "Piatek",
    "Sobota",
  ];
  today =
    days[today.getDay()] +
    " " +
    today.getDate() +
    "." +
    parseInt(today.getMonth() + 1) +
    "." +
    today.getFullYear();

  id.innerHTML = today;
}
