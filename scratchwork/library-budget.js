function Government(govMinChange, govMaxChange) {
	this.govMinChange = govMinChange;
	this.govMaxChange = govMaxChange;
	this.getbudgetAmount = function() { 
		return Math.round((Math.floor(Math.random() * (this.govMaxChange - this.govMinChange + 1)) + parseInt(this.govMinChange)));
		}	
	}

function PrivateSector(priMinChange, priMaxChange) {
	this.priMinChange = priMinChange;
	this.priMaxChange = priMaxChange;
	this.getDonateAmount = function () {
		return Math.round((Math.floor(Math.random() * (this.priMaxChange - this.priMinChange + 1)) + parseInt(this.priMinChange)));
	}
}

function Library(branch, balance) {
	this.branch = branch;
	this.balance = balance;
}

var government = new Government(document.getElementById("govMinChange").value, 
															   document.getElementById("govMaxChange").value);

var privateSector = new PrivateSector(document.getElementById("priMinChange").value,
	                                 document.getElementById("priMaxChange").value);

var library = new Library(document.getElementById("branch").value,
												  document.getElementById("balance").value)

function printOutput() {
	for (var years = 0; years < document.getElementById("years").value; years++) {
		document.getElementsByClassName("budgetOutput")[years].innerHTML = government.getbudgetAmount();
		document.getElementsByClassName("donateOutput")[years].innerHTML = privateSector.getDonateAmount();
		library.balance = parseInt(library.balance) + parseInt(document.getElementsByClassName("budgetOutput")[years].innerHTML) + parseInt(document.getElementsByClassName("donateOutput")[years].innerHTML);
		document.getElementsByClassName("balanceOutput")[years].innerHTML = library.balance;
	}
	library.balance = document.getElementById("balance").value;
}

var submit = document.getElementById("submit");
submit.addEventListener("click", printOutput, false);

