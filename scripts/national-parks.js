"use strict";

// HTML element variables
const locationButton = document.querySelector("#locationButton");
const parkTypeButton = document.querySelector("#parkTypeButton");

const locationContainer = document.querySelector("#locationContainer");
const parkTypeContainer = document.querySelector("#parkTypeContainer");

const locationSelect = document.querySelector("#locationSelect");
const typeSelect = document.querySelector("#typeSelect");
const parkDataTableBody = document.querySelector("#parkDataTableBody");

function searchTypeChanged() {
  parkDataTableBody.innerHTML = ""; // Clear previous results
  if (locationButton.checked) {
    locationContainer.style.display = "block";
    parkTypeContainer.style.display = "none";
    loadStates();
  } else if (parkTypeButton.checked) {
    locationContainer.style.display = "none";
    parkTypeContainer.style.display = "block";
    loadParks();
  } else {
    locationContainer.style.display = "none";
    parkTypeContainer.style.display = "none";
  }
}

function loadStates() {
  locationSelect.innerHTML = '<option value="">Select...</option>';
  for (const location of locationsArray) {
    const option = document.createElement("option");
    option.innerText = location;
    option.value = location;
    locationSelect.appendChild(option);
  }
}

function loadParks() {
  typeSelect.innerHTML = '<option value="">Select...</option>'; // Clear existing options

  const selectedType = typeSelect.value.toLowerCase(); // Get the selected park type

  for (const park of parkTypesArray) {
    // Check if the park type contains the selected park type
    if (park.toLowerCase().includes(selectedType)) {
      const option = new Option(park, park);
      typeSelect.appendChild(option);
    }
  }
}

function locationSelectionChanged() {
  const selectedLocation = locationSelect.value;
  const filteredParks = nationalParksArray.filter(
    (park) => park.State === selectedLocation
  );
  loadParkDataTable(filteredParks);
}

function typeSelectionChanged() {
  const selectedType = typeSelect.value.toLowerCase(); // Get the selected park type

  // Filter nationalParksArray based on the selected park type
  const filteredParks = nationalParksArray.filter((park) =>
    park.LocationName.toLowerCase().includes(selectedType)
  );

  loadParkDataTable(filteredParks); // Load the filtered parks into the table
}

function loadParkDataTable(parks) {
  parkDataTableBody.innerHTML = ""; // Clear previous results
  for (const nationalPark of parks) {
    buildParkRow(nationalPark);
  }
}

function buildParkRow(nationalPark) {
  const row = parkDataTableBody.insertRow();

  const cell1 = row.insertCell();
  cell1.innerText = nationalPark.LocationName;

  const cell2 = row.insertCell();
  if (nationalPark.Address) {
    cell2.innerText = nationalPark.Address;
  } else {
    cell2.innerText = "N/A"
  }
 

  const cell3 = row.insertCell();
  cell3.innerText = nationalPark.City;

  const cell4 = row.insertCell();
  cell4.innerText = nationalPark.State;

  const cell5 = row.insertCell();
  if (nationalPark.ZipCode) {
      if (nationalPark.ZipCode >= 0) {
          cell5.innerText = nationalPark.ZipCode;
      } else {
          cell5.innerText = "N/A";
      }
    }
  const cell6 = row.insertCell();

  if (nationalPark.Phone) {
    cell6.innerText = nationalPark.Phone;
  } else {
    cell6.innerText = "N/A";
  }

  const cell7 = row.insertCell();

  if (nationalPark.Visit) {
    // Check if Visit data is defined
    cell7.innerHTML = `<a href="${nationalPark.Visit}">${nationalPark.Visit}</a>`;
  } else {
    cell7.innerText = "N/A"; // If Visit data is undefined, display "N/A"
  }
}
// Initialize the visibility of containers
searchTypeChanged();
