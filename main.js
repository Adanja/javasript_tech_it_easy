// VOORRAAD ARRAY MET TV'S
// Opdracht 1a: Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent.
// const TVstock = document.getElementById("inventory");



const inventory = [
  {
    //number: 0,
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// 1.a Een functie schrijven die berekent hoeveel examplaren we moeten verkopen

// iets doen met de arraylist: original stock, en sold.

let howManyStock = inventory.map ((TVstock) => {
  return TVstock.originalStock - TVstock.sold;
});

function availableForSale (array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

console.log(howManyStock);
console.log(availableForSale(howManyStock));

const availableTVs = document.getElementById("tekst");
availableTVs.textContent = (availableForSale(howManyStock));
// Opdracht 1b: Zorg ervoor dat dit aantal in het rood wordt weergegeven op de pagina - In styles.css

//Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.

let TVtypes = inventory.map((TVtype) => {
  return TVtype.brand + " " +TVtype.type + "(" + TVtype.name + ")";
});

console.log(TVtypes);

//Opdracht 2b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
const soldOutTVs = inventory.filter( (soldOut) => {
  return soldOut.originalStock - soldOut.sold === 0;
});

console.log("Opdracht 2b:");
console.log(soldOutTVs); // Object 0 en 1 zijn uitverkocht?


//Opdracht 2c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
const ambilightTVs = inventory.filter( (ambilight) => {
  return ambilight.options.ambiLight;
});

console.log("Opdracht 2c: ")
console.log(ambilightTVs);

//Opdracht 2d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
function pricesorted () {
  return inventory.sort((a, b) => {
    return a.price - b.price;
  });
}

console.log("Opdracht 2d: ");
console.log(pricesorted());

// 2d Deze werkt

// Opdracht 3a: Wat is onze doel-opbrengst? Bereken wat de totale opbrengst is, als we alle exemplaren van ieder type zouden verkopen.
// Wat wordt de prijs als van ieder type TV ALLES verkocht wordt?
let total = 0;
const targetSale = inventory.map( (sales) => {
  return sales.originalStock * sales.price;
});

// Functie maken die alles bij elkaar optelt
function calculateProfitTV (array) {
  let sumOfTargetedSale = 0;
  for (let i = 0; i < array.length; i++) {
    sumOfTargetedSale += array[i];
  }
  return sumOfTargetedSale;
}


console.log("Opdracht 3a: ");
// Hier moet een bedrag komen te staan
console.log(targetSale);
//Geef dit in het blauw weer op de pagina.
const targetprofit = document.getElementById("doelopbrengst"); // Als je hier .textContent achter zet zie je wel wat in de HTML geschreven is.
targetprofit.textContent = (calculateProfitTV(targetSale));

// Opdracht 3b: Hoeveel hebben we tot nu toe verdient? Bereken hoeveel we tot nu toe verdient hebben met het aantal verkochte tv's.
// Berekenen hoeveel er verdient is met de verkochte TV's
const howManySoldProfit = inventory.map ( (TVsold) => {
  return TVsold.sold * TVsold.price;
});

console.log("Opdracht 3b: ");
console.log(howManySoldProfit);
// Geef dit weer in het groen weer op de pagina
const totalprofitsofar = document.getElementById("currentProfit");
totalprofitsofar.textContent = (calculateProfitTV(howManySoldProfit));

// opdracht 4: Geef de type-namen van twee tv's weer op de pagina. Welke tv's dat precies zijn, maakt niet zoveel uit.
// Voor nu betekent dit dat je het appenden van de nodes twee keer moet uitschrijven, dat is niet erg!


function tvTypeNames(inventory, sum) {
  let array = [];
  for (let i = 0; i < sum; i++) {
    array.push(`${inventory[i].brand} - ${inventory[i].type} - ${inventory[i].name}`);
  }
  return array;
}

console.log("Opdracht 4: ");
console.log(tvTypeNames(inventory, 2));

let allTVtypes = document.getElementById("types_of_tv");
allTVtypes.textContent = tvTypeNames(inventory);

// Opdracht 5 Eén van de twee TV's van vorige opdracht weergeven in gegeven format

//5a. String genereren voor naam van TV. Maak functie die één TV object als parameter verwacht en de naam
// op volgende manier samenvoegt: [merk] [type] [naam]

console.log("Opdracht 5a: ")
console.log(tvTypeNames(inventory));

function formatSingleName (item) {
  return `${item.brand} - ${item.type} - ${item.name}`;
}
//5.b
function formatPrice (item) {
  return `€${item.price},-`;
}
//5.c
function tvScreenSizes (inventory) {
  let array = [];
  for (i = 0; i < inventory.availableSizes.length; i++) {
    array.push (`${inventory.availableSizes[i]} inches (${Math.round(inventory.availableSizes[i] * 2.54)} cm)`);
  }
  return array.join(" | ");
}

console.log("Opdracht 5.C: ");
console.log(tvScreenSizes(inventory[4]));

// Opdracht 5.D
let allInformation = document.getElementById("opdracht5");
let tv1 = document.createElement("li");
let tv2 = document.createElement("li");
let tv3 = document.createElement("li");

console.log("Opdracht 5.d: " + formatSingleName(inventory[0]));
console.log(formatPrice(inventory[0]), tvScreenSizes(inventory[0]));
allInformation.appendChild(tv1);
allInformation.appendChild(tv2);
allInformation.appendChild(tv3);
tv1.textContent = formatSingleName(inventory[0]);
tv2.textContent = formatPrice(inventory[0]);
tv3.textContent = tvScreenSizes(inventory[0]);

// Opdracht 5.E

function allShowcasedTVs (inventory) {
  let allInformation = document.getElementById("showall");
  for (let i = 0; i < inventory.length; i++) {
    let tvul = document.createElement("ul");
    allInformation.appendChild(tvul);
    let tvline1 = document.createElement("li");
    let tvline2 = document.createElement("li");
    let tvline3 = document.createElement("li");

    tvul.appendChild(tvline1);
    tvul.appendChild(tvline2);
    tvul.appendChild(tvline3);
    tvline1.textContent = formatSingleName(inventory[i]);
    tvline2.textContent = formatPrice(inventory[i]);
    tvline3.textContent = tvScreenSizes(inventory[i]);
  }
}

allShowcasedTVs(inventory);

// VOORBEELD ID aanmaken in javascript
// const container = document.getElementById("pageOne");
// const warningMessage = document.createElement('p');
// warningMessage.setAttribute('class', 'warning');
// warningMessage.textContent = availableForSale(remainingTv);
// container.appendChild(warningMessage);
