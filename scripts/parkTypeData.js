const parkTypesArray = [
    "National Park",
    "National Monument",
    "Recreation Area",
    "Scenic Trail",
    "Battlefield",
    "Historic",
    "Memorial",
    "Preserve",
    "Island",
    "River",
    "Seashore",
    "Trail",
    "Parkway"
]

window.onload = function () {
    // HTML element variables
    const typeSelect = document.getElementById("typeSelect");
    function loadParks() {
      for (const park of parkTypesArray) {
        const option = document.createElement("option");
        option.innerText = park;
        typeSelect.appendChild(option);
      }
    }
    loadParks();
}