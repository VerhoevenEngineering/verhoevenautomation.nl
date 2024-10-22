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
}

// Update screen size when window is resized
window.onresize = function() {
    displayScreenSize();
}

// Alternatief voor a href in de navbar bovenin
function navigateTo(url) {
    window.location.href = url;
}

// Combineer beide functies in één `window.onload`
window.onload = function() {
    // Toon de schermgrootte bij het laden van de pagina
    displayScreenSize();

    // Selecteer de afbeelding en de elementen waar de afmetingen worden getoond
    const img = document.getElementById('image');
    const horizontaleAfmeting = document.querySelector('.horizontale-waarde');
    const verticaleAfmeting = document.querySelector('.verticale-waarde');

    // Controleer of de afbeelding bestaat om fouten te voorkomen
    if (img) {
        // Haal de werkelijke breedte en hoogte van de afbeelding op
        const breedte = img.naturalWidth;
        const hoogte = img.naturalHeight;

        // Stel de afmetingsteksten in
        horizontaleAfmeting.innerText = `${breedte} px`;
        verticaleAfmeting.innerText = `${hoogte} px`;
    }
}
