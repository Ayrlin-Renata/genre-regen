
var genres = ['history','science','fantasy','atom','solar','apocalypse','scarcity','dystopia','utopia','steam','diesel','horror','space','military','retro','romance','sword','goth','dungeon','zombie','western','sitcom','modern','far-future','future'];
var prefixes = ['pre-','alt-','high ','anti-','post-','cyber-','urban ','prehistoric ','low ','soft-','hard-','raygun-','bio-','hero-','villain-','comedic '];
var affixes = ['punk','-fiction',' thriller','-opera'];
var feels = ['noblebright ','bright ','grimbright ','noble ','grim ','nobledark ','dark ','grimdark '];
var types = [' anthrology',' trilogy',' series',' comic',' movie',' book',' visual novel',' documentary',' webcomic','webnovel','manga','anime'];

var used = [];

function randomizer() {
	used = [];
	var str = "";
	for (var i = (rN(3) + 2); i > 0; i--) {
		str += randGenre() + ((i != 1)? " " : "");
	}
	if(rN(2) == 1) {
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

function randType(){
	return types[Math.floor(Math.random()*types.length)];
}

function rN(c) {
	return Math.floor(Math.random() * (c + 1));
}

$(document).ready(function() {
	randomizer();
});