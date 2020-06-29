function getUnit() {
  var units = document.getElementById("units").value;
  var newUnits;
  var remainUnits;
  var firstHundredUnit= 100 * 5.79;
  var secondHundredUnit = 100 * 8.11;
  var thirdHundredUnit = 100 *10.20;
  var fourthHundredUnit = 400 * 17.60;

  console.log("function call");
  if (!units) {
    return alert("Plz enter Unit First");
  }

  if (units <= 100) {
    newUnits = units * 5.79;
    newUnits = Math.round(newUnits);
    document.getElementById("total").value = newUnits;
    document.getElementById("oneHund").innerHTML = document.getElementById(
      "total"
    ).value;
    document.getElementById("oneHundUnit").innerHTML = units;
  } else if (units <= 200) {
    remainUnits = units - 100;
    newUnits = remainUnits * 8.11 + firstHundredUnit;
    newUnits = Math.round(newUnits);
    document.getElementById("total").value = newUnits;
    document.getElementById("oneHund").innerHTML = Math.round(firstHundredUnit);
    document.getElementById("twoHund").innerHTML = Math.round(
      remainUnits * 8.11
    );
    document.getElementById("oneHundUnit").innerHTML = 100;
    document.getElementById("twoHundUnit").innerHTML = remainUnits;
  } else if (units <= 300) {
    remainUnits = units - 200;
    newUnits = remainUnits * 10.2 + firstHundredUnit + secondHundredUnit;
    newUnits = Math.round(newUnits);
    document.getElementById("total").value = newUnits;
    document.getElementById("oneHund").innerHTML = Math.round(firstHundredUnit);
    document.getElementById("twoHund").innerHTML = Math.round(
      secondHundredUnit
    );
    document.getElementById("threeHund").innerHTML = Math.round(
      remainUnits * 10.2
    );
    document.getElementById("oneHundUnit").innerHTML = 100;
    document.getElementById("twoHundUnit").innerHTML = 100;
    document.getElementById("threeHundUnit").innerHTML = remainUnits;
  } else if (units <= 700) {
    remainUnits = units - 300;
    newUnits =
      remainUnits * 17.6 +
      firstHundredUnit +
      secondHundredUnit +
      thirdHundredUnit;
    newUnits = Math.round(newUnits);
    document.getElementById("total").value = newUnits;
    document.getElementById("oneHund").innerHTML = Math.round(firstHundredUnit);
    document.getElementById("twoHund").innerHTML = Math.round(
      secondHundredUnit
    );
    document.getElementById("threeHund").innerHTML = Math.round(
      thirdHundredUnit
    );
    document.getElementById("forthHund").innerHTML = Math.round(
      remainUnits * 17.6
    );
    document.getElementById("oneHundUnit").innerHTML = 100;
    document.getElementById("twoHundUnit").innerHTML = 100;
    document.getElementById("threeHundUnit").innerHTML = 100;
    document.getElementById("forthHundUnit").innerHTML = remainUnits;
  } else if (units >= 701) {
    remainUnits = units - 700;
    newUnits =
      remainUnits * 20.7 +
      firstHundredUnit +
      secondHundredUnit +
      thirdHundredUnit +
      fourthHundredUnit;
    newUnits = Math.round(newUnits);
    document.getElementById("total").value = newUnits;
    document.getElementById("oneHund").innerHTML = Math.round(firstHundredUnit);
    document.getElementById("twoHund").innerHTML = Math.round(
      secondHundredUnit
    );
    document.getElementById("threeHund").innerHTML = Math.round(
      thirdHundredUnit
    );
    document.getElementById("forthHund").innerHTML = Math.round(
      fourthHundredUnit
    );
    document.getElementById("fifthHund").innerHTML = Math.round(
      remainUnits * 20.7
    );
    document.getElementById("oneHundUnit").innerHTML = 100;
    document.getElementById("twoHundUnit").innerHTML = 100;
    document.getElementById("threeHundUnit").innerHTML = 100;
    document.getElementById("forthHundUnit").innerHTML = 400;
    document.getElementById("fifthHundUnit").innerHTML = remainUnits;
  }
  document.getElementById("totalamount").innerHTML = document.getElementById(
    "total"
  ).value;
}
