
var genres = ['history','science','fantasy','nuclear','solar','apocalypse','scarcity','dystopia','utopia','steam','diesel','horror','space','military','retro','romance','sword','goth','dungeon','zombie','western','sitcom','modern','far-future','future','medieval','drama','mystery','realism','fairy-tale','superhero','satire','parody','crime','naval','sports','highschool','magical','mecha','adventure','action','gun','martial-arts','musical','slasher','spy','eldritch'];
var prefixes = ['pre-','alt-','high ','anti-','post-','cyber-','urban ','prehistoric ','low ','soft-','hard-','raygun-','bio-','comedic ','techno-','non-','epic ','heroic ','speculative ','xeno-','disaster ','folk ','lovecraftian'];
var affixes = ['punk','-fiction',' thriller','-opera','-fact','-futurism','-myth','-fantasy','-girl',' flick'];
var feels = ['noblebright ','bright ','grimbright ','noble ','grim ','nobledark ','dark ','grimdark '];
var types = [' anthrology',' trilogy',' series',' comic',' movie',' book',' visual novel',' documentary',' webcomic',' webnovel',' manga',' anime',' audiobook',' novel'];

var used = [];

var min = 2;
var max = 3;

//called on randomize
function randomizer() {
	used = [];
	var str = "";
	if(rN(5) == 1) {
		str += randFeel();
	}
	for (var i = (rN(max-min) + min); i > 0; i--) {
		str += randGenre() + ((i != 1)? " " : "");
	}
	if(rN(3) == 1) {
		str += randType();
	}
	$('#out').val(str);
}

function randGenre() {
	var gen;
	do {
		gen = genres[Math.floor(Math.random()*genres.length)];
	} while(used.includes(gen));
	used.push(gen);
	if(rN(3) == 1){ //prechance
		gen = randPre() + gen;
	}
	if(rN(4) == 1){ //postchance
		gen = gen + randAf();
	}
	return gen;
}

function randPre() {
	return prefixes[Math.floor(Math.random()*prefixes.length)];
}

function randAf(){
	return affixes[Math.floor(Math.random()*affixes.length)];
}

function randFeel(){
	return feels[Math.floor(Math.random()*feels.length)];
}

function randType(){
	return types[Math.floor(Math.random()*types.length)];
}

function rN(c) {
	return Math.floor(Math.random() * (c + 1));
}

//called on copy
function copy() {
	var copyText = $('#out')[0];

	copyText.select(); 
	copyText.setSelectionRange(0, 99999); 

	document.execCommand("copy");
}

//called on min
function minCall() {
	var maxput = $('#max')[0];
	var minput = $('#min')[0];
	var theNewMin = Math.floor(Number.parseInt($(minput).val()).clamp(1,Number.parseInt($(maxput).val())));
	$(minput).val(theNewMin);
	min = theNewMin;
}

//called on max
function maxCall() {
	var maxput = $('#max')[0];
	var minput = $('#min')[0];
	var theNewMax = Math.floor(Number.parseInt($(maxput).val()).clamp(Number.parseInt($(minput).val()),16));
	$(maxput).val(theNewMax);
	max = theNewMax;
}

//ready
$(document).ready(function() {
	randomizer();
	fillTable();
});

//filltable
function fillTable() {
	var tab = $('#pooldata')[0];
	var tbody = $('#pooldata > tbody')[0];
	var longest = Math.max(prefixes.length,Math.max(genres.length,Math.max(affixes.length,Math.max(feels.length,types.length))));
	
	for(var i = 0; i < longest; i++) {
		var row = tbody.insertRow(-1);
		var cell = row.insertCell(0);
		if(i < feels.length) { //feels
			cell.innerText = feels[i];
		}
		cell = row.insertCell(1);
		if(i < prefixes.length) { //prefixes
			cell.innerHTML = prefixes[i]; // + "<button class=\"btn\" onclick=\"prefixes.splice(prefixes.indexOf(\'" + prefixes[i] + "\'))\">x</button>";
		}
		cell = row.insertCell(2);
		if(i < genres.length) { //genres
			cell.innerText = genres[i];
		}
		cell = row.insertCell(3);
		if(i < affixes.length) { //affixes
			cell.innerText = affixes[i];
		}
		cell = row.insertCell(4);
		if(i < types.length) { //types
			cell.innerText = types[i];
		}
	}
}

//util
/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * (x * 255).clamp(0, 255)
 *
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @type Number
 */
Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};