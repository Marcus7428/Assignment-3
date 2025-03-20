document.getElementById('heron').addEventListener('submit', function (event) {
    event.preventDefault();
    let a = parseFloat(document.getElementById("sideA").value);
    let b = parseFloat(document.getElementById("sideB").value);
    let c = parseFloat(document.getElementById("sideC").value);
    let s = (a + b + c) / 2;
    if ((a < b + c) && (b < a + c) && (c < a + b)) {
        document.getElementById("result").value = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toString();
    } else {
        document.getElementById("result").value = "This triangle is not valid";
    }

})