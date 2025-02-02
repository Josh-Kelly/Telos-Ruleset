const armorData = {
  /* -----------------------------------------------------------------------SIMPLE RANGED ------------------------------------------------------*/
  club: {
    name: "Club",
    relAttribute: "Strength",
    weaponClass: "Simple",
    rangeType: "Melee",
    damage: 4,
    reach: "5 ft.",
    properties: ["light"],
  },
  dagger: {
    name: "Dagger",
    relAttribute: "Dexterity",
    weaponClass: "Simple",
    rangeType: "Melee",
    damage: 4,
    reach: "5 ft.",
    properties: ["finesse", "light", { thrown: "20/60" }],
  },
  /* -----------------------------------------------------------------------SIMPLE RANGED ------------------------------------------------------*/

  shortbow: {
    name: "Shortbow",
    relAttribute: "Dexterity",
    weaponClass: "Simple",
    rangeType: "Ranged",
    damage: 6,
    range: "(30/120)",
    properties: ["ammunition", "twohanded"],
  },
  /* -----------------------------------------------------------------------MARTIAL RANGED ------------------------------------------------------*/
  battleaxe: {
    name: "Battleaxe",
    relAttribute: "Strength",
    weaponClass: "Martial",
    rangeType: "Melee",
    damage: 8,
    reach: "5 ft.",
    properties: ["versatile (1d10)"],
  },
  /* -----------------------------------------------------------------------MARTIAL RANGED ------------------------------------------------------*/
  longbow: {
    name: "Longbow",
    relAttribute: "Dexterity",
    weaponClass: "Martial",
    rangeType: "Ranged",
    damage: 8,
    range: "150/600",
    properties: ["ammunition", "heavy", "twohanded"],
  },
};
