// Get the current date
var currentDate = new Date();

// Format the date in Dutch notation
var options = { year: 'numeric', month: 'long', day: 'numeric' };
var formattedDate = currentDate.toLocaleDateString('nl-NL', options); // Example: "dinsdag 15 maart 2024"

// Display the formatted date in the designated element
document.getElementById("currentDate").innerHTML = formattedDate;

function displayScreenSize() {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        document.getElementById('screenSize').innerHTML =  width + " * <br> &nbsp &nbsp  " + height + " px";
    };

    // Display screen size on page load
    window.onload = function() {
        displayScreenSize();
    };

    // Update screen size when window is resized
    window.onresize = function() {
        displayScreenSize();
    };

    //alternatief voor a href in de navbar bovenin
    function navigateTo(url) {
        window.location.href = url;
    };