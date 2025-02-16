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

document.addEventListener("scroll", function () {
  var equipmentCharts = document.getElementById("equipment-table");
  var equipmentNav = document.getElementById("equipment-nav");

  var rect = equipmentCharts.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    console.log("I see it, I see it!");
    // Equipment charts are in view
    equipmentNav.style.display = "block";
  } else {
    // Equipment charts are not in view
    equipmentNav.style.display = "none";
  }
});

document.getElementById("add-branch-btn").addEventListener("click", function () {
  console.log("Hello");

  // Create input field
  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.name = "network-branch";
  newInput.placeholder = "Branch Name";

  // Create minus button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "−"; // Minus symbol
  removeBtn.style.marginLeft = "5px"; // Small space between input and button
  removeBtn.addEventListener("click", function () {
    newTd.remove(); // Remove the <td> when clicked
  });

  // Create new <td> and append input and button
  const newTd = document.createElement("td");
  newTd.appendChild(newInput);
  newTd.appendChild(removeBtn);

  // Append new <td> to <tr id="network-branches">
  document.getElementById("network-branches").appendChild(newTd);
});

function createSpellCharts() {}
