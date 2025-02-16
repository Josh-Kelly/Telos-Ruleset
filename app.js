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

// Array of warrior talents
const warriorTalents = [
  {
    name: "Accurate Strike",
    prerequisite: null,
    gritCost: 2,
    description: "Gain an Advantage on an attack. You must declare this Talent before rolling your Attack Roll.",
    descriptionRow2: null,
    descriptionRow3: null,
    descriptionRow4: null,
  },
  {
    name: "Armored Resilience",
    prerequisite: null,
    gritCost: null,
    description:
      "Choose an armor type (Unarmored, Light, Medium, Heavy). While wearing armor of this type, your effective DR is equal to the armor’s DR + the number of times you have taken this Talent (max of 2).",
    descriptionRow2: "You must acquire this Talent for each type of armor individually.",
    descriptionRow3: null,
    descriptionRow4: null,
  },
  {
    name: "Cleave",
    prerequisite: null,
    gritCost: 2,
    description:
      "Before you make a melee Attack Roll, declare Cleave and spend 2 Grit. On a hit, deal half the damage of the attack to a second target adjacent to you if the attack roll also meets or beats the second target’s Melee Defense.",
    descriptionRow2: "If your main attack kills the target, the Grit cost of Cleave is refunded.",
    descriptionRow3: "Rank 2: deal +1 damage to the secondary target.",
    descriptionRow4: "Rank 3: deal +2 damage to the secondary target.",
  },
  {
    name: "Command",
    prerequisite: null,
    gritCost: 1,
    description:
      "As a FREE ACTION, give an ally a d8 Help Die on a Melee Attack Roll or Test related to movement, climbing, or other physical exertion.",
    descriptionRow2: null,
    descriptionRow3: null,
    descriptionRow4: null,
  },
  {
    name: "Danger Sense",
    prerequisite: null,
    gritCost: "[variable]",
    description:
      "When subject to a Reflex Saving Throw from a trap or spell that you can see, gain a bonus equal to twice the Grit you expend. You must declare and expend the Grit before rolling the Saving Throw.",
    descriptionRow2: null,
    descriptionRow3: null,
    descriptionRow4: null,
  },
  {
    name: "Dodge",
    prerequisite: "Small, Elf, or dexterity-related Trait",
    gritCost: "[variable]",
    description:
      "When a weapon attack hits you and you are not surprised, reduce the damage you take after damage reduction by the amount of Grit you spend.",
    descriptionRow2: "You can only spend Grit on this Talent equal to or less than your Dodge Rank.",
    descriptionRow3: null,
    descriptionRow4: null,
  },
  {
    name: "Evasive",
    prerequisite: "Musketeer specialization, Small, or dexterity-related Trait",
    gritCost: null,
    description: "When you are hit with a Brutal hit, take damage as if it were a Heavy hit instead.",
    descriptionRow2: null,
    descriptionRow3: null,
    descriptionRow4: null,
  },
  {
    name: "Favored Enemy",
    prerequisite: null,
    gritCost: "[variable]",
    description:
      "Choose a favored enemy (i.e. dragons, trolls, etc.) when you gain this Talent. You gain this Talent individually for each enemy type.",
    descriptionRow2:
      "Before you make an Attack Roll against your Favored Enemy, declare an amount of Grit up to your Talent Rank to expend. If the attack hits, it deals additional damage equal to twice the Grit you expended. If the attack misses, the Grit is still lost.",
    descriptionRow3: null,
    descriptionRow4: null,
  },
  {
    name: "First Aid",
    prerequisite: null,
    gritCost: null,
    description:
      "As an ACTION, while you remain alongside a Bleeding Out creature, its Constitution Saving Throws against Bleeding Out are increased by 4 + the number of times you take this Talent.",
    descriptionRow2: null,
    descriptionRow3: null,
    descriptionRow4: null,
  },
  {
    name: "Fortify Armor",
    prerequisite: null,
    gritCost: null,
    description:
      "Choose an armor type (Unarmored, Light, Medium, Heavy). While wearing armor of this type, your effective AC is equal to the armor’s AC + the number of times you have taken this Talent (max of 2).",
    descriptionRow2: "You must acquire this Talent for each type of armor individually.",
    descriptionRow3: null,
    descriptionRow4: null,
  },
  {
    name: "Intimidate",
    prerequisite: null,
    gritCost: "[variable]",
    description: "Concentrate your presence into an aura, menacing shout, or other display of malevolent intent.",
    descriptionRow2:
      "Declare an amount of Grit to expend and then choose a number of enemies equal to your Intimidate Rank x the Grit expended.",
    descriptionRow3:
      "The chosen enemies have a -2 to their Attack Rolls and Defense scores. If they are one or more sizes smaller than you, each chosen creature must succeed on a Willpower save (DC 8 + your Warrior Level) or Break.",
    descriptionRow4: null,
  },
  {
    name: "Grittier",
    prerequisite: null,
    gritCost: null,
    description: "Gain an additional source of Grit generation from the list below.",
    descriptionRow2: null,
    descriptionRow3: null,
    descriptionRow4: null,
  },
  {
    name: "Improved Grit",
    prerequisite: null,
    gritCost: null,
    description: "Your maximum Grit permanently increases by 1.",
    descriptionRow2: null,
    descriptionRow3: null,
    descriptionRow4: null,
  },
  {
    name: "Power Strike",
    prerequisite: null,
    gritCost: "[3-5]",
    description: "You must declare this Talent and the amount of Grit you expend before rolling your Attack Roll.",
    descriptionRow2:
      "Spend 3 Grit. If your Attack is a normal hit, it becomes a Heavy hit. If the Attack is a Heavy hit, it becomes a Brutal Hit.",
    descriptionRow3:
      "Spend 5 Grit. If your attack is a normal hit, it becomes a Brutal Hit. If the Attack is a Brutal Hit, it becomes a Critical Hit.",
    descriptionRow4: null,
  },
  {
    name: "Rally",
    prerequisite: null,
    gritCost: 2,
    description:
      "Choose a number of creatures within 30 ft. / Zone. Each creature regains 5 Stamina. Each Rank after Rank 1 increases the amount by +1.",
    descriptionRow2: null,
    descriptionRow3: null,
    descriptionRow4: null,
  },
  {
    name: "Ranger",
    prerequisite: "Rank 3 in at least 3 Survival terrain types",
    gritCost: null,
    description: "Your Survival bonus for any terrain type is always the middle Rank of your existing Survival Ranks.",
    descriptionRow2:
      "For instance, a character with Survival 3 (mountain), Survival 2 (tundra), and Survival 4 (plains) would always add at least 3 to a Survival test, even if they have no Rank in the terrain type.",
    descriptionRow3: null,
    descriptionRow4: null,
  },
  {
    name: "Rapid Strike",
    prerequisite: null,
    gritCost: 2,
    description:
      "Attack an additional time as part of the same ACTION. You must declare this Talent before rolling your Attack Roll and both attacks must be made at once.",
    descriptionRow2: "You cannot attack, move, and then attack again.",
    descriptionRow3: null,
    descriptionRow4: null,
  },
  {
    name: "Riposte",
    prerequisite: null,
    gritCost: "[variable]",
    description:
      "When an enemy within your reach up to one size larger than you misses you with a melee attack, make an Attack Roll against them, with a bonus to damage equal to the Grit you spend.",
    descriptionRow2: "You can only spend Grit on this Talent equal to or less than your Riposte Rank.",
    descriptionRow3: null,
    descriptionRow4: null,
  },
  {
    name: "Taunt",
    prerequisite: null,
    gritCost: "[variable]",
    description:
      "Choose an intelligent creature that can see and hear you and cause it to be distracted. The damage of its next attack, unless it is against you, is reduced by the amount of Grit you spend.",
    descriptionRow2: "You can only spend Grit on this Talent equal to or less than your Riposte Rank.",
    descriptionRow3: null,
    descriptionRow4: null,
  },
  {
    name: "Signature Weapon",
    prerequisite: null,
    gritCost: null,
    description:
      "After training with a specific weapon – not “axes” but specifically this axe – for two Downtimes, gain +2 to attack rolls and damage when attacking with it.",
    descriptionRow2:
      "You must have killed at least one threatening creature with the weapon in mortal combat, largely unaided, before gaining this benefit.",
    descriptionRow3:
      "You can only have one Signature Weapon at a time and must repeat the training and meet all requirements to adopt a new one.",
    descriptionRow4: null,
  },
  {
    name: "Stances",
    prerequisite: null,
    gritCost: "[variable]",
    description: "You enter a Stance using your MOVEMENT. While in that Stance, you gain the benefits and costs of that Stance.",
    descriptionRow2: "The Grit Cost of all Affected Talents is reduced by -1 (to a minimum of 1).",
    descriptionRow3: null,
    descriptionRow4: null,
  },
  {
    name: "Weapon Mastery",
    prerequisite: null,
    gritCost: "[variable]",
    description: "While wielding this weapon, gain additional bonus to hit equal to the Grit you expend.",
    descriptionRow2: "You must declare this Talent and the amount of Grit before rolling your Attack Roll.",
    descriptionRow3: null,
    descriptionRow4: null,
  },
  {
    name: "Weapon Specialty",
    prerequisite: null,
    gritCost: null,
    description: "Choose a weapon from a Weapon Type category, such as '2-Handed Swords' from the Sword Weapon Type.",
    descriptionRow2:
      "You gain +1 damage to attacks with this weapon. Each time you gain this Talent, you gain an additional +1 bonus to assign and you can redistribute an already existing bonus to a different weapon.",
    descriptionRow3: "You can have a maximum of +3 total bonus across all Specialized weapons.",
    descriptionRow4: null,
  },
  {
    name: "Whirlwind Strike",
    prerequisite: null,
    gritCost: 1,
    description:
      "Strike a number of creatures within reach equal to 1 + your Warrior Rank, making a separate attack with disadvantage against each.",
    descriptionRow2: "Whirlwind Strike cannot inflict Heavy, Brutal, or Critical Hits.",
    descriptionRow3: null,
    descriptionRow4: null,
  },
];

// Function to create and insert talent cards
function createTalentCards() {
  const container = document.getElementById("talent-cards-container");

  warriorTalents.forEach((talent) => {
    // Create the card container
    const card = document.createElement("div");
    card.classList.add("talent-card");

    // Create the heading div that contains the prerequisite and grit cost for single-spacing
    const headingDiv = document.createElement("div");
    headingDiv.classList.add("single-space-children");

    // Create the talent name
    const title = document.createElement("h3");
    title.textContent = talent.name;

    // Create the description
    const description = document.createElement("p");
    description.textContent = talent.description;

    // Create a span to keep gritCost and gritCostValue inline
    const gritCostSpan = document.createElement("span");
    gritCostSpan.classList.add("inline-children");

    // Create the Grit cost (or other relevant info like prerequisites)
    const gritCostHeader = document.createElement("h4");
    gritCostHeader.textContent = `Grit Cost: `;
    gritCostSpan.appendChild(gritCostHeader);

    // Create the Grit cost number
    const gritCostValue = document.createElement("p");
    gritCostValue.textContent = talent.gritCost !== null ? `${talent.gritCost}` : "N/A";
    gritCostSpan.appendChild(gritCostValue);

    // Create a span to keep prerequisite and prerequisite value inline
    const prerequisiteSpan = document.createElement("span");
    prerequisiteSpan.classList.add("inline-children");

    // Create the prerequisite value
    const prerequisiteHeader = document.createElement("h4");
    prerequisiteHeader.textContent = `Prerequisite: `;
    prerequisiteSpan.appendChild(prerequisiteHeader);

    // Create prerequisites
    const prerequisiteValue = document.createElement("p");
    prerequisiteValue.textContent = talent.gritCost !== null ? `${talent.prerequisite}` : "None";
    prerequisiteSpan.appendChild(prerequisiteValue);

    // Append elements to the headingDiv
    headingDiv.appendChild(prerequisiteSpan);
    headingDiv.appendChild(gritCostSpan);
    // Append elements to the card
    card.appendChild(title);
    card.appendChild(headingDiv);
    card.appendChild(description);

    // Handle ranks for Talents with multiple levels (e.g., Cleave, Dodge)
    if (talent.ranks) {
      const rankInfo = document.createElement("p");
      rankInfo.classList.add("rank-info");
      rankInfo.textContent = `Rank Progression: ${talent.ranks.join(", ")}`;
      card.appendChild(rankInfo);
    }

    // Handle Advanced Talent info (e.g., Cleave Advanced, Intimidate Advanced)
    if (talent.advanced) {
      const advancedInfo = document.createElement("p");
      advancedInfo.classList.add("advanced-info");
      advancedInfo.textContent = `Advanced: ${talent.advanced}`;
      card.appendChild(advancedInfo);
    }

    // Optional: Handle if there are specific conditions or variables (like Grit cost)
    if (talent.variableGritCost) {
      const variableGritCost = document.createElement("p");
      variableGritCost.classList.add("variable-grit-cost");
      variableGritCost.textContent = `Variable Grit Cost: ${talent.variableGritCost}`;
      card.appendChild(variableGritCost);
    }

    // Add the first description row if it exists
    if (talent.descriptionRow1 !== null) {
      const descriptionRow1 = document.createElement("p");
      descriptionRow1.textContent = talent.descriptionRow1;
      card.appendChild(descriptionRow1);
    }

    // Add the second description row if it exists
    if (talent.descriptionRow2 !== null) {
      const descriptionRow2 = document.createElement("p");
      descriptionRow2.textContent = talent.descriptionRow2;
      card.appendChild(descriptionRow2);
    }

    // Add the third description row if it exists
    if (talent.descriptionRow3 !== null) {
      const descriptionRow3 = document.createElement("p");
      descriptionRow3.textContent = talent.descriptionRow3;
      card.appendChild(descriptionRow3);
    }

    // Add the fourth description row if it exists
    if (talent.descriptionRow4 !== null) {
      const descriptionRow4 = document.createElement("p");
      descriptionRow4.textContent = talent.descriptionRow4;
      card.appendChild(descriptionRow4);
    }

    // Append the card to the container
    container.appendChild(card);
  });
}

// Call the function to generate the cards on page load
window.onload = createTalentCards;
