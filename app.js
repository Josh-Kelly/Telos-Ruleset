import { armorData } from "./equipmentData.js";

window.onload = populateEquipmentData();

// Function to handle tab clicks
document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", function () {
    const tabName = this.getAttribute("data-tab");

    // Remove active class from all tabs and tab-content sections
    document.querySelectorAll(".tab-button").forEach((btn) => {
      btn.classList.remove("active");
    });
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.remove("active");
    });

    // Add active class to the clicked tab and the corresponding content
    this.classList.add("active");
    document.getElementById(tabName).classList.add("active");
  });
});

// Optionally, set the first tab as active on page load
document.querySelector(".tab-button").classList.add("active");
document.querySelector(".tab-content").classList.add("active");

function populateEquipmentData() {
  console.log("Hello!");
  console.log(armorData);
  // Get the equipment list div
  const equipmentListDiv = document.getElementById("equipment-list");

  // Iterate over each item in armorData
  for (const key in armorData) {
    console.log(key);
    if (armorData.hasOwnProperty(key)) {
      const item = armorData[key];

      // Create a <p> element for the item name
      const pElement = document.createElement("p");
      pElement.textContent = item.name; // Set the text to the name of the item

      // Append the <p> element to the equipment list div
      equipmentListDiv.appendChild(pElement);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Select all buttons with the class "accordion-button"
  const accordionButtons = document.querySelectorAll(".accordion-button");

  // Loop through each button and attach a click event listener
  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get the next sibling element, which is the corresponding content div
      const content = this.nextElementSibling;

      // Toggle the display property between "block" and "none"
      if (content.style.display === "block") {
        content.style.display = "none"; // Hide content if it's currently visible
      } else {
        content.style.display = "block"; // Show content if it's currently hidden
      }
    });
  });
});
