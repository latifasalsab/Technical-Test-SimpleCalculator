
while (true) {
  var number, group;
  number = prompt("enter numbers to calculate ").replace(
    /[^0-9%^*\/()\-+.]/g,
    ""
  );

  group = number.split(" ");
  if ((Number.parseInt(group[0]) | Number.parseInt(group[2])) > 1000000) {
    alert("Maximum number input is 1 million");
  } else {
    alert(eval(number));
  }
}
