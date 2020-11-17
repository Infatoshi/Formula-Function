//document.addEventListener('click', runCode);

//function runCode() {
  //  document.getElementById('output').innerHTML = randomInt(5, 9);
//}

document.addEventListener('click', convert);
document.getElementById("inputbutton").addEventListener('click', calculateVolume);


function convert() {
    let fahrenheitInput = document.getElementById("fahrenheit").value;
let celsiusOutput = document.getElementById("celsius");
    celsiusOutput = (fahrenheitInput - 32) * (5/9);
    document.getElementById("celsius").innerHTML = celsiusOutput;
}


// used to find volume of a cube given one of the sides
function calculateVolume() {
    let VolInput = document.getElementById("inputvolume").value;
        VolOutput = VolInput ** 3;
        document.getElementById("CubeVolume").innerHTML = VolOutput;

}
