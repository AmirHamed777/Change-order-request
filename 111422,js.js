function update_inner()
{
    alert("howdy")
}
function countdownTimer() {
    var currTime = 10;

    setTimeout(function () {
    document.getElementById("countdownTimer").innerHTML = currTime;
    currTime = currTime - 1;
}, 1000);

setTimeout(function () {
    document.getElementById("countdownTimer").innerHTML = currTime;
    currTime = currTime - 1;
}, 2000);

setTimeout(function () {
    document.getElementById("countdownTimer").innerHTML = currTime;
    currTime = currTime - 1;
}, 3000);

setTimeout(function () {
    document.getElementById("countdownTimer").innerHTML = currTime;
    currTime = currTime - 1;
}, 4000);

setTimeout(function () {
    document.getElementById("countdownTimer").innerHTML = currTime;
    currTime = currTime - 1;
}, 5000);

setTimeout(function () {
    alert("There are 5 seconds remaining to blastoff!")
    document.getElementById("countdownTimer").innerHTML = currTime;
    currTime = currTime - 1;
}, 6000);

setTimeout(function () {
    document.getElementById("countdownTimer").innerHTML = currTime;
    currTime = currTime - 1;
}, 7000);

setTimeout(function () {
    document.getElementById("countdownTimer").innerHTML = currTime;
    currTime = currTime - 1;
}, 8000);

setTimeout(function () {
    document.getElementById("countdownTimer").innerHTML = currTime;
    currTime = currTime - 1;
}, 9000);

setTimeout(function () {
    document.getElementById("countdownTimer").innerHTML = currTime;
    currTime = currTime - 1;
}, 10000);


setTimeout(function () {
    document.getElementById("countdownTimer").innerHTML = currTime;
    currTime = currTime - 1;
    alert("BLASTOFF!");
}, 11000);

}