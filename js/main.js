
var genres = ['history','science','fantasy','atom','solar','apocalyptic','scarcity','dystopia','utopia','steam','diesel','horror','space','military','retro'];
var prefixes = ['pre-','alt-','high ','anti-','post-','cyber-','urban ','prehistoric ','low ','soft-','hard-'];
var affixes = ['punk','fiction',' thriller',' anthrology',' trilogy'];
var feels = ['noblebright','bright','grimbright','noble','grim','nobledark','dark','grimdark'];

var used = [];

function randomizer() {
	used = [];
	var str = "";
	for (var i = 0; i < (rN(3) + 2); i++) {
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
	if(rN(4) == 1){ //postchance
		gen = gen + randAf();
	}
	if(rN(5) == 1){ //feelchance
		gen = randFeel() + gen;
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

function rN(c) {
	return Math.floor(Math.random() * (c + 1));
}

$(document).ready(function() {
	randomizer();
});