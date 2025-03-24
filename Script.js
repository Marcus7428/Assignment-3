document.getElementById('heron').addEventListener('submit', function (event) {
    event.preventDefault();
    let a = parseFloat(document.getElementById("heronideA").value);
    let b = parseFloat(document.getElementById("heronSideB").value);
    let c = parseFloat(document.getElementById("heronSideC").value);
    let s = (a + b + c) / 2;
    if ((a < b + c) && (b < a + c) && (c < a + b)) {
        document.getElementById("heronResult").value = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toString();
    } else {
        document.getElementById("heronResult").value = "This triangle is not valid";
    }
})
document.getElementById('ambiguous').addEventListener('submit', function (event) {
    event.preventDefault();
    let a = parseFloat(document.getElementById("ambiguousSideA").value);
    let b = parseFloat(document.getElementById("ambiguousSideB").value);
    let aa = parseFloat(document.getElementById("ambiguousAngleA").value);
    let h = b * (Math.sin(aa * Math.PI / 180));
    h = parseFloat(h.toFixed(2));
    if (aa <= 90) {
        if (a < h) {
            document.getElementById("ambiguousResult").value = "No triangle";
        }
        else if (a == h) {
            document.getElementById("ambiguousResult").value = "Right triangle";
        }
        else if (a > b) {
            document.getElementById("ambiguousResult").value = "One Triangle";
        }
        else {
            document.getElementById("ambiguousResult").value = "Two triangles (ambiguous case)";
        }
    }
    else {
        if (a < b || a == b) {
            document.getElementById("ambiguousResult").value = "No triangle";
        }
        else if (a > b) {
            document.getElementById("ambiguousResult").value = "One triangle";
        }
    }
})
function newtonMethod(g) {
    return g - ((6 * Math.pow(g, 4) - 13 * Math.pow(g, 3) - 18 * Math.pow(g, 2) + 7 * g + 6) / (24 * Math.pow(g, 3) - 39 * Math.pow(g, 2) - 36 * g + 7));
}
document.getElementById('newton').addEventListener('submit', function (event) {
    event.preventDefault();
    let g = parseFloat(document.getElementById("guess").value);
    let result = newtonMethod(g);
    
    while (Math.abs(result - g) > 0.0001) {
        g = result;
        result = newtonMethod(g);
    }
    document.getElementById("newtonResult").value = result.toFixed(3);
})
document.getElementById('polynomial').addEventListener('submit', function (event) {
    event.preventDefault();
    let c = (document.getElementById("polynomialCoefficients").value);
    let e = (document.getElementById("polynomialExponents").value);
    let x = (document.getElementById("polynomialX").value);
    let polynomialFunction = "f(x) = ";
    let coefficientArray = c.split(" ");
    let exponentArray = e.split(" ");
    for (let i = 0; i < coefficientArray.length; i++) {
        let arrayIndex = coefficientArray[i];
        if (arrayIndex > 0) {
            if (i == 0) {
                polynomialFunction += arrayIndex + "x^" + exponentArray[i];
            }
            else {
                polynomialFunction += " + " + arrayIndex + "x^" + exponentArray[i];
            }
        }
        else if (arrayIndex < 0) {
            if (i == 0) {
                polynomialFunction += arrayIndex + "x^" + exponentArray[i];
            }
            else {
                polynomialFunction += " - " + Math.abs(arrayIndex) + "x^" + exponentArray[i];
            }
        }
        document.getElementById("polynomialFunction").value = polynomialFunction;
    }
    let polynomialResult = 0;
    for (let i = 0; i < coefficientArray.length; i++) {
        polynomialResult += coefficientArray[i] * Math.pow(x, exponentArray[i]);
    }
    document.getElementById("polynomialEvaluation").value = polynomialResult;
})