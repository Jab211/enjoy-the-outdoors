"use strict";

window.onload = function () {
  const mountainSelect = document.querySelector("#mountainSelect");


  function loadMountain() {
    for (const mountain of mountainsArray) {
      const option = document.createElement("option");
      option.value = mountain.name;
      option.innerText = mountain.name;
      mountainSelect.appendChild(option);
    }
  }

  function buildParkRow(mountain) {
    if (mountain.name === mountainSelect.value) {
      let row = mountainDataBody.insertRow();

      let cell1 = row.insertCell();
      cell1.innerText = mountain.name;

      let cell2 = row.insertCell();
      cell2.innerText = mountain.elevation;

      let cell3 = row.insertCell();
      cell3.innerText = mountain.effort;

      let cell4 = row.insertCell();
      cell4.innerText = mountain.desc;

      let cell5 = row.insertCell();
      cell5.innerText = mountain.coords;
    }
  }
  loadMountain();
  mountainSelect.addEventListener("change", function () {
    // Clear existing rows in the table
    mountainDataBody.innerHTML = "";
    // Find and display the selected mountain
    const selectedMountain = mountainsArray.find(
      (mountain) => mountain.name === mountainSelect.value
    );
    if (selectedMountain) {
      buildParkRow(selectedMountain);
    }
  });
};
