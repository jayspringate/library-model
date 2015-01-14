function Government(city, minBudget, maxBudget) {
	this.city = city;
	this.minBudget = minBudget;
	this.maxBudget = maxBudget;
}

Government.prototype.paysout = function() {
	var budtotal = Math.floor(Math.random() * (1 + this.maxBudget - this.minBudget) + this.minBudget);
	console.log(budtotal);
}

function Population(city, minDonations, maxDonations) {
	this.city = city;
	this.minDonations = minDonations;
	this.maxDonations = maxDonations;
}

Population.prototype.donated = function () {
	var dontotal = Math.floor(Math.random() * (1 + this.maxDonations - this.minDonations) + this.minDonations);
	console.log(dontotal);
}

var seattleGovt = new Government("Seattle", 10, 100);
var seattlePatr = new Population("Seattle", 0, 50);


function Library(branch, balance) {
	this.branch = branch;
	this.balance = balance;
}

Library.prototype.calcBalance = function() {
	this.balance += seattleGovt.paysout() + seattlePatr.donated();
}

function TrackLibraries() {
	this.libraries = [];
}

TrackLibraries.prototype.addLibrary = function(branch, balance) {
	this.libraries.push(new Library(branch, balance));
}

TrackLibraries.prototype.printBottomLine = function () {
	for (entry in this.libraries) {
		this.libraries[entry].calcBalance();
		console.log(this.libraries[entry].branch + ": " + this.libraries[entry].balance);
	}
}


var seattleLibraries = new TrackLibraries();
seattleLibraries.addLibrary ("Central", 500000);
seattleLibraries.addLibrary ("Capitol Hill", 500000);
seattleLibraries.addLibrary ("Montlake", 500000);
seattleLibraries.addLibrary ("University", 500000);



seattleGovt.paysout();
seattlePatr.donated();

seattleLibraries.printBottomLine();



