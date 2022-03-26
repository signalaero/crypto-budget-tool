
// NPC Color Options
let colorOptions = [
   "AliceBlue",
   "AntiqueWhite",
   "Aqua",
   "Aquamarine",
   "Azure",
   "Beige",
   "Bisque",
   "Black",
   "BlanchedAlmond",
   "Blue",
   "BlueViolet",
   "Brown",
   "BurlyWood",
   "CadetBlue",
   "Chartreuse",
   "Chocolate",
   "Coral",
   "CornflowerBlue",
   "Cornsilk",
   "Crimson",
   "Cyan",
   "DarkBlue",
   "DarkCyan",
   "DarkGoldenRod",
   "DarkGray",
   "DarkGrey",
   "DarkGreen",
   "DarkKhaki",
   "DarkMagenta",
   "DarkOliveGreen",
   "DarkOrange",
   "DarkOrchid",
   "DarkRed",
   "DarkSalmon",
   "DarkSeaGreen",
   "DarkSlateBlue",
   "DarkSlateGray",
   "DarkSlateGrey",
   "DarkTurquoise",
   "DarkViolet",
   "DeepPink",
   "DeepSkyBlue",
   "DimGray",
   "DimGrey",
   "DodgerBlue",
   "FireBrick",
   "FloralWhite",
   "ForestGreen",
   "Fuchsia",
   "Gainsboro",
   "GhostWhite",
   "Gold",
   "GoldenRod",
   "Gray",
   "Grey",
   "Green",
   "GreenYellow",
   "HoneyDew",
   "HotPink",
   "IndianRed",
   "Indigo",
   "Ivory",
   "Khaki",
   "Lavender",
   "LavenderBlush",
   "LawnGreen",
   "LemonChiffon",
   "LightBlue",
   "LightCoral",
   "LightCyan",
   "LightGoldenRodYellow",
   "LightGray",
   "LightGrey",
   "LightGreen",
   "LightPink",
   "LightSalmon",
   "LightSeaGreen",
   "LightSkyBlue",
   "LightSlateGray",
   "LightSlateGrey",
   "LightSteelBlue",
   "LightYellow",
   "Lime",
   "LimeGreen",
   "Linen",
   "Magenta",
   "Maroon",
   "MediumAquaMarine",
   "MediumBlue",
   "MediumOrchid",
   "MediumPurple",
   "MediumSeaGreen",
   "MediumSlateBlue",
   "MediumSpringGreen",
   "MediumTurquoise",
   "MediumVioletRed",
   "MidnightBlue",
   "MintCream",
   "MistyRose",
   "Moccasin",
   "NavajoWhite",
   "Navy",
   "OldLace",
   "Olive",
   "OliveDrab",
   "Orange",
   "OrangeRed",
   "Orchid",
   "PaleGoldenRod",
   "PaleGreen",
   "PaleTurquoise",
   "PaleVioletRed",
   "PapayaWhip",
   "PeachPuff",
   "Peru",
   "Pink",
   "Plum",
   "PowderBlue",
   "Purple",
   "RebeccaPurple",
   "Red",
   "RosyBrown",
   "RoyalBlue",
   "SaddleBrown",
   "Salmon",
   "SandyBrown",
   "SeaGreen",
   "SeaShell",
   "Sienna",
   "Silver",
   "SkyBlue",
   "SlateBlue",
   "SlateGray",
   "SlateGrey",
   "Snow",
   "SpringGreen",
   "SteelBlue",
   "Tan",
   "Teal",
   "Thistle",
   "Tomato",
   "Turquoise",
   "Violet",
   "Wheat",
   "White",
   "WhiteSmoke",
   "Yellow",
   "YellowGreen",
 ];

 function changeHairColor(el) {
   document.getElementById("hairColorVisual").style.backgroundColor = el.value;
 }

 function changeEyeColor(el) {
   document.getElementById("eyeColorVisual").style.backgroundColor = el.value;
 }

 function selectComplexion(el) {
   document.getElementById("complexionVisual").style.backgroundColor = el.value;
 }

 function changeFavColorOne(el) {
   document.getElementById("favColorOneVisual").style.backgroundColor = el.value;
 }
 function changeFavColorTwo(el) {
   document.getElementById("favColorTwoVisual").style.backgroundColor = el.value;
 }
// Hair Style
   
const hairStyle = document.getElementById("hairStyle");
let hairStyleOptions = ["Short", "Medium", "Long"];

for(let i = 0; i < hairStyleOptions.length; i++) {
let opt = hairStyleOptions[i];
const el = document.createElement("option");
el.textContent = opt;
el.value = opt;
hairStyle.appendChild(el);
}

// colorOptions

// Favorite Color One
   
    const favColorOne = document.getElementById("favColorOne");
    let favColorOneOptions = colorOptions;
 
    for(let i = 0; i < favColorOneOptions.length; i++) {
    let opt = favColorOneOptions[i];
    const el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    favColorOne.appendChild(el);
 }
 
 // Favorite Color Two
   
   const favColorTwo = document.getElementById("favColorTwo");
   let favColorTwoOptions = colorOptions;

   for(let i = 0; i < favColorTwoOptions.length; i++) {
   let opt = favColorTwoOptions[i];
   const el = document.createElement("option");
   el.textContent = opt;
   el.value = opt;
   favColorTwo.appendChild(el);
}
   
// Eye Color

const eyeColor = document.getElementById("eyeColor");
let eyeColorOptions = colorOptions;

for(let i = 0; i < eyeColorOptions.length; i++) {
let opt = eyeColorOptions[i];
const el = document.createElement("option");
el.textContent = opt;
el.value = opt;
eyeColor.appendChild(el);
}

// Hair Color

const hairColor = document.getElementById("hairColor");
let hairColorOptions = colorOptions;

for(let i = 0; i < hairColorOptions.length; i++) {
let opt = hairColorOptions[i];
const el = document.createElement("option");
el.textContent = opt;
el.value = opt;
hairColor.appendChild(el);
}

// NPC Height
   
const npcHeight = document.getElementById("npcHeight");
let npcHeightOptions = ["Short", "Medium Short", "Medium", "Medium Tall", "Tall"];

for(let i = 0; i < npcHeightOptions.length; i++) {
let opt = npcHeightOptions[i];
const el = document.createElement("option");
el.textContent = opt;
el.value = opt;
npcHeight.appendChild(el);
}

// NPC Weight
   
const npcWeight = document.getElementById("npcWeight");
let npcWeightOptions = ["Light", "Medium Light", "Medium", "Medium Heavy", "Heavy"];

for(let i = 0; i < npcWeightOptions.length; i++) {
let opt = npcWeightOptions[i];
const el = document.createElement("option");
el.textContent = opt;
el.value = opt;
npcWeight.appendChild(el);
}

// NPC Class

const npcClass = document.getElementById("npcClass");
let npcClassOptions = ["Fighter", "Assassin", "Mage", "Archer", "Beserker", "Healer", "Necromancer", "Bard", "Jack-of-all-Trades"];

for(let i = 0; i < npcClassOptions.length; i++) {
let opt = npcClassOptions[i];
const el = document.createElement("option");
el.textContent = opt;
el.value = opt;
npcClass.appendChild(el);
}

// Primary Attack

const primaryAttack = document.getElementById("primaryAttack");
let primaryAttackOptions = ["Prison Blitz", "Blossom Dance", "Sneaky Rain Chop", "Smooth Cricket Claw", "Dearest Mouse", "Directing Blast", "Oracle Shot", "Camouflage Release", "Vapor Cannon", "Demon Shock"];

for(let i = 0; i < primaryAttackOptions.length; i++) {
let opt = primaryAttackOptions[i];
const el = document.createElement("option");
el.textContent = opt;
el.value = opt;
primaryAttack.appendChild(el);
}

// Secondary Attack

const secondaryAttack = document.getElementById("secondaryAttack");
let secondaryAttackOptions = primaryAttackOptions;

for(let i = 0; i < secondaryAttackOptions.length; i++) {
let opt = secondaryAttackOptions[i];
const el = document.createElement("option");
el.textContent = opt;
el.value = opt;
secondaryAttack.appendChild(el);
}

// Special Ability

const specialAbility = document.getElementById("specialAbility");
let specialAbilityOptions = ["Invisibility", "Superhuman Strength", "Flying", "Shapeshifting", "Super Speed", "Super Senses", "Weasel", "Telepathy", "Telekinesis", "Teleportation", "Power Absorption", "Regenerative Power", "Object Manipulation", "Element Manipulation", "Animal Transformation", "X-Ray Vision", "Time Bending", "Wealth", "Divinity"];

for(let i = 0; i < specialAbilityOptions.length; i++) {
let opt = specialAbilityOptions[i];
const el = document.createElement("option");
el.textContent = opt;
el.value = opt;
specialAbility.appendChild(el);
}

