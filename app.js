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
