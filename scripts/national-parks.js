"use strict";
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

      loadStates();
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

  const parkDataTableBody = document.querySelector("#parkDataTableBody");

  function loadParkDataTable() {
    for (const nationalPark of nationalParksArray) {
      buildParkRow(nationalPark);
    }
  }
  function buildParkRow(nationalPark) {
    let row = parkDataTableBody.insertRow();

    let cell1 = row.insertCell();
    cell1.innerText = nationalPark.LocationName;

    let cell2 = row.insertCell();
    cell2.innerText = nationalPark.Address;

    let cell3 = row.insertCell();
    cell3.innerText = nationalPark.City;

    let cell4 = row.insertCell();
    cell4.innerText = nationalPark.State;

    let cell5 = row.insertCell();
    cell5.innerText = nationalPark.Zipcode;

    let cell6 = row.insertCell();
    cell6.innerText = nationalPark.Phone;

    let cell7 = row.insertCell();
    cell7.innerText = nationalPark.Visit;
  }
  loadParkDataTable()




  
  //functions

  //event handling

  //initial loading
  // loadStates();
};
