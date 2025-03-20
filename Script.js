function heronFormula(a, b, c) {
    let s = (a + b + c) / 2;
    if ((a < b + c) && (b < a + c) && (c < a + b)) {
        let result = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    } else {
        return `This triangle is not valid`;
    }
}
document.getElementById('heronFormula').addEventListener('submit', function (event) {
    event.preventDefault();
    let a = document.getElementById("sideA").value;
    let b = document.getElementById("sideB").value;
    let c = document.getElementById("sideC").value;
    let result = heronFormula(a,b,c);
    document.getElementById('result').value = result;
})