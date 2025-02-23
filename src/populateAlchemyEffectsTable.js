// Function to populate the table
function populateAlchemyTable() {
  const tableBody = document.getElementById("alchemy-effects-table");

  // Populate the table with mixture data
  alchemicalMixtures.forEach((mixture) => {
    let row = document.createElement("tr");

    // Conditionally display advanced properties if they're not null
    const advancedDetails = `
      <div>${mixture.advanced1 || ""}</div>
      ${mixture.advanced2 ? `<div>${mixture.advanced2}</div>` : ""}
      ${mixture.advanced3 ? `<div>${mixture.advanced3}</div>` : ""}
      ${mixture.advanced4 ? `<div>${mixture.advanced4}</div>` : ""}
      ${mixture.advanced5 ? `<div>${mixture.advanced5}</div>` : ""}
      ${mixture.advanced6 ? `<div>${mixture.advanced6}</div>` : ""}
    `;

    const drawbackDetails = `
      ${mixture.drawback ? `${mixture.drawback}` : ""}
    `;

    row.innerHTML = `
      <td>${mixture.name}</td>
      <td>${mixture.method}</td>
      <td>${mixture.effect}</td>
      <td><span class="inline-children"><p class="bold">Advanced: </p>${advancedDetails}</span></td>
      <td>${drawbackDetails}</td>
    `;

    tableBody.appendChild(row);
  });
}

// Run the function after the page loads
document.addEventListener("DOMContentLoaded", populateAlchemyTable);

// Alchemical Mixtures Data
const alchemicalMixtures = [
  {
    name: "Stim",
    method: "Inject, Ingest, Inhale",
    effect: "+1d4 Stamina recovery.",
    advanced1: "+1 die size per Tier.",
    advanced2: null,
    advanced3: null,
    advanced4: null,
    advanced5: null,
    advanced6: null,
    drawback: null,
  },
  {
    name: "Healing",
    method: "Ingest, Apply",
    effect: "Heals 1 point of Health 8 hours after consuming up to ½ Health.",
    advanced1: "Tier 2, 4, and 6: The duration is halved.",
    advanced2: "Tier 3 and 5: Healing is increased by +1.",
    advanced3: "Tier 7: A single creature can benefit twice per week, but the doses must be taken at least 1 hour apart.",
    advanced4: null,
    advanced5: null,
    advanced6: null,
    drawback: "A single creature can only gain this benefit once per week.",
  },
  {
    name: "Vigor",
    method: "Ingest",
    effect:
      "Ignore the effects of 1 level of Exhaustion for 1 hour. Does not remove Exhaustion, and you die regardless if you reach Exhausted 6.",
    advanced1: "Tier 2, 4, and 6: Ignore the effects of +1 level of Exhaustion.",
    advanced2: "Tier 3 and 5: Increase duration by 30 minutes.",
    advanced3:
      "Tier 7: Ignore all effects of Exhausted except Death. If you reach Exhausted 6, you survive for 1 more minute and then die unless you receive powerful restorative magic within that time.",
    advanced4: null,
    advanced5: null,
    advanced6: null,
    drawback: null,
  },
  {
    name: "Glue",
    method: "Apply",
    effect:
      "Grant advantage to all attempts to treat a creature that is Bleeding Out for the next 1 minute. If used on medium or smaller items and allowed to set for 1 hour, the items are adhered together, requiring a DC 12 strength Test to separate them.",
    advanced1:
      "Tier 2, 4, and 6: At the time you use the glue, you may choose to reduce the time to set by 20 minutes (1 minute minimum).",
    advanced2:
      "At Tiers 3, 5, and 7: Increase the strength DC by +1 / increase a Bleeding Out creature’s Constitution Saving Throws by +1.",
    advanced3: null,
    advanced4: null,
    advanced5: null,
    advanced6: null,
    drawback: null,
  },
  {
    name: "Antidote",
    method: "Inject, Ingest",
    effect:
      "Halve the severity of a poison of equal Tier for 1 hour. To have any effect, Antidotes must be administered while a poison is still affecting the victim.",
    advanced1: "Tier 3: Completely eliminate the presence of poisons 2 or more Tiers lower.",
    advanced2: "Tier 5: Halt the progress of a poison of equal Tier.",
    advanced3: "Tier 7: Restore ½ (rounded down) of all damage done by a poison of lesser Tier.",
    advanced4: null,
    advanced5: null,
    advanced6: null,
    drawback: null,
  },
  {
    name: "Antitoxin",
    method: "Inject",
    effect:
      "Halve the severity of a toxin of equal Tier for 1 hour. To have any effect, Antitoxins must be administered while a toxin is still affecting the victim.",
    advanced1: "Tier 3: Completely eliminate the presence of toxins 2 or more Tiers lower.",
    advanced2: "Tier 5: Halt the progress of a toxin of equal Tier.",
    advanced3: "Tier 7: Restore ½ (rounded down) of all damage done by a toxin of lesser Tier.",
    advanced4: null,
    advanced5: null,
    advanced6: null,
    drawback: null,
  },
  {
    name: "Lucidity",
    method: "Inhale",
    effect:
      "Grant a Tier bonus to the next Willpower Saving Throw made in the next minute against a domination or confusion effect.",
    advanced1: "Tier 2: (Tier bonus increases).",
    advanced2: null,
    advanced3: null,
    advanced4: null,
    advanced5: null,
    advanced6: null,
    drawback: null,
  },
  {
    name: "Draught",
    method: "Ingest",
    effect: "Eliminate thirst and negative effects of dehydration for 1 hour.",
    advanced1: "Tier 2-3: +1 hour each.",
    advanced2: "Tier 4-5: +8 hours each.",
    advanced3: "Tier 6: 24 hours.",
    advanced4: "Tier 7: 72 hours.",
    advanced5: null,
    advanced6: null,
    drawback: null,
  },
  {
    name: "Sweetsip",
    method: "Ingest",
    effect: "Cause up to 1 pint of liquid to taste very sweet for 1 minute.",
    advanced1: "Tier 2-3: +1 pint or +20 minutes per Tier.",
    advanced2: "Tier 4: Duration is as long as the liquid is unspoiled.",
    advanced3: null,
    advanced4: null,
    advanced5: null,
    advanced6: null,
    drawback: null,
  },
  {
    name: "Spice",
    method: "Ingest",
    effect: "Cause up to 1 pint of liquid to taste very spicy for 1 minute.",
    advanced1: "Tier 2: +1 pint or +20 minutes (chosen at the time of brewing).",
    advanced2: "Tier 3: +1 pint or +20 minutes, DC 13 Constitution Save or Distracted for the duration.",
    advanced3: "Tier 4: Duration is as long as the liquid is unspoiled.",
    advanced4: "Tier 5-6: +1 to the DC, fail by 5+ causes Poisoned for the duration.",
    advanced5: "Tier 7: Causes 1 Health damage unless target is immune/resistant to fire and heat damage.",
    advanced6: null,
    drawback: null,
  },
  {
    name: "Coolsweat",
    method: "Ingest",
    effect: "Eliminates negative effects of non-damaging heat for 1 minute.",
    advanced1: "Tier 2-5: +1 minute each Tier.",
    advanced2: "Tier 6: 1 hour.",
    advanced3: "Tier 7: 8 hours.",
    advanced4: null,
    advanced5: null,
    advanced6: null,
    drawback: null,
  },
];
