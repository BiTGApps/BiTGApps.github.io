var count = 9;
var counter = setInterval(timer, 1000);

function timer() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        document.getElementById("modal").disabled = false;
        document.getElementById("timed").disabled = false;
        document.getElementById("timed").innerHTML = "Okay, I'll Whitelist";
        return;
    }
    document.getElementById("modal").disabled = true;
    document.getElementById("timed").disabled = true;
    document.getElementById("timed").innerHTML = "Please wait " + count + " seconds...";
}
