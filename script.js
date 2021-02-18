let txt = document.getElementById("txt");

let iq = Math.floor(Math.random() * 110);
let cash = Math.floor(Math.random() * 1000000);
let age = Math.floor(Math.random() * 120);
let jobAge = age - Math.floor(Math.random() * 20);

names = ["Julian", "Noah", "Alecsandro", "Ørjan", "Tormod", "Håkon", "Maja", "Oliver",
"Ingrid", "Saulius", "Amalie K", "Amalie I", "Ella Emilie", "Ida Emilie", "Julian Albert", "Jonatan", "Rafael", "Amanda", "Arnfinn", "Eivind", "Marina"];

jobs = ["brannmann", "politibetjent", "personlig trener", "programmerer/hackerman", "mcdonalds ansatt", "doktor", "kriminell supermester", "sykepleier", "president"];

let name = Math.floor(Math.random() * names.length);
let killer = Math.floor(Math.random() * names.length);

let job = Math.floor(Math.random() * jobs.length);

events = ["han/hun ble kjørt over av " + names[killer] + " og døde.", "han/hun ble skutt av " + names[killer] + " og døde.", "han/hun fikk diabetes av å spise for mange McDonalds burgere."];

let randomEvent = Math.floor(Math.random() * events.length);

txt.innerHTML = 'Jeg tenker...';
setTimeout(fact, Math.random() * 2000);

function fact () {
  txt.innerHTML = names[name] + " ble en " + jobs[job] + " når han/hun var " + jobAge + " år gammel. " + names[name] + " ble " + age + " år gammel før " + events[randomEvent] + " .";
}