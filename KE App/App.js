function getUnit() {
    var units = document.getElementById("units").value;
    var totalUnits = document.getElementById("total").value;

    if (units <= 100) {
        var newUnits = (units * 5.79)
        newUnits = Math.round(newUnits);
        document.getElementById("total").value = newUnits;
    }

    else if (units <= 200) {
        var remaiUnits = (units - 100);
        var hundredUnit = (100 * 5.79);
        var newUnits = (remaiUnits * 8.11) + hundredUnit;
        newUnits = Math.round(newUnits);
        totalUnits = newUnits;

    }

    else if (units <= 300) {
        var newUnits = (units * 10.20)
        newUnits = Math.round(newUnits);
        totalUnits = newUnits;
    }

    else if (units <= 700) {
        var newUnits = (units * 17.60)
        newUnits = Math.round(newUnits);
        totalUnits = newUnits;
    }

    else if (units >= 701) {
        var newUnits = (units * 17.60)
        newUnits = Math.round(newUnits);
        totalUnits = newUnits;
    }

}



