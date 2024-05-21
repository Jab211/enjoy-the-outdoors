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
  "Parkway",
];
const locationButton = document.querySelector("#locationButton");
const parkTypeButton = document.querySelector("#parkTypeButton");

const locationContainer = document.querySelector("#locationContainer");
const parkTypeContainer = document.querySelector("#parkTypeContainer");

const locationSelect = document.querySelector("#locationSelect");
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
};

function searchTypeChanged() {
    if (locationButton.checked) {
      locationContainer.style.display = "block";
    } else {
      locationContainer.style.display = "none";
    }
    if (parkTypeButton.checked) {
      parkTypeContainer.style.display = "block";
    } else {
      parkTypeContainer.style.display = "none";
    }
  }
  locationButton.addEventListener("change", searchTypeChanged);
  parkTypeButton.addEventListener("change", searchTypeChanged);
//   locationButton.onchange = searchTypeChanged;
//   parkTypeButton.onchange = searchTypeChanged;
  searchTypeChanged();