function heronFormula(a, b, c) {
    let s = (a + b + c) / 2;
    if ((a < b + c) && (b < a + c) && (c < a + b)) {
        return Math.sqrt(s * (s - a) * (s - b) * (s - c)).toString();
    } else {
        return `This triangle is not valid`;
    }
}
document.getElementById('heronFormula').addEventListener('submit', function (event) {
    event.preventDefault();
    let a = parseFloat(document.getElementById("sideA").value);
    let b = parseFloat(document.getElementById("sideB").value);
    let c = parseFloat(document.getElementById("sideC").value);
    let result = heronFormula(a,b,c);
    document.getElementById('result').value = result;
})