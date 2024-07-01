/* This file is part of The BiTGApps Project */

var count = 9;
var counter = setInterval(timer, 1000);

function timer() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        document.getElementById("modal").disabled = false;
        document.getElementById("timed").disabled = false;
        document.getElementById("timed").innerHTML = "Okay, I'll Whitelist";
        setTimeout(function(){$('#staticAdsModal').modal('hide')},9000);
        return;
    }
    document.getElementById("modal").disabled = true;
    document.getElementById("timed").disabled = true;
    document.getElementById("timed").innerHTML = "Auto close in " + count + " seconds...";
}
