"use strict"
// function loadParks() {
//   for (const park of nationalParksArray) {
//   }
// }

window.onload = function () {
  // HTML element variables
  const locationButton = document.querySelector("#locationButton");
  const parkTypeButton = document.querySelector("#parkTypeButton");

  const locationContainer = document.querySelector("#locationContainer");
  const parkTypeContainer = document.querySelector("#parkTypeContainer");

  const locationSelect = document.querySelector("#locationSelect");

  function searchTypeChanged() {
    if (locationButton.checked) {
      locationContainer.style.display = "block";
      loadStates()
    } else {
      locationContainer.style.display = "none";
    }
    if (parkTypeButton.checked) {
      parkTypeContainer.style.display = "block";
      loadParks();
    } else {
      parkTypeContainer.style.display = "none";
    }
  }

  function loadStates() {
    for (const location of locationsArray) {
      const option = document.createElement("option");
      option.innerText = location;
      locationSelect.appendChild(option);
    }
  }
  function loadParks() {
        for (const park of parkTypesArray) {
          const option = document.createElement("option");
          option.innerText = park;
          typeSelect.appendChild(option);
        }
      }
  locationButton.addEventListener("change", searchTypeChanged);
  parkTypeButton.addEventListener("change", searchTypeChanged);
//   locationButton.onchange = searchTypeChanged;
//   parkTypeButton.onchange = searchTypeChanged;
  searchTypeChanged();
  

  //functions

  //event handling

  //initial loading
  // loadStates();
};
