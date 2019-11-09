
var genres = ['history','science','fantasy','atom','solar','apocalyptic','scarcity','dystopia','utopia','steam','diesel','horror','military'];
var prefixes = ['pre-','alt-','high ','anti-','post-','cyber-','urban '];
var affixes = ['punk','fiction',' thriller'];

var used = [];

function randomizer() {
	used = [];
	var str = "";
	for (var i = 0; i < (rN(4) + 1); i++) {
		str += randGenre() + " ";
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
	if(rN(3) == 1){ //postchance
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

function rN(c) {
	return Math.floor(Math.random() * (c + 1));
}

$(document).ready(function() {
	randomizer();
});