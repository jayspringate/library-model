function Institution(minChange, maxChange) {
	this.MinChange = MinChange;
	this.MaxChange = MaxChange;
	this.getChange = function() { 
		return Math.round((Math.floor(Math.random() * (this.maxChange - this.minChange + 1)) + parseInt(this.minChange)));
		}	
	}

function Library(branch, balance) {
	this.branch = branch;
	this.balance = balance;
}

var government = new Institution (document.getElementById("govMinChange").value, 
															   document.getElementById("govMaxChange").value);

var privateSector = new Institution (document.getElementById("priMinChange").value,
	                                 document.getElementById("priMaxChange").value);

var library = new Library(document.getElementById("branch").value,
												  document.getElementById("balance").value)

function getElement (cell-id) {
	document.getElementsByClassName(cell-id)[years].innerHTML;
}

function printOutput() {
	for (var years = 0; years < document.getElementById("years").value; years++) {
		getElement("budgetOutput") = government.getChange();
		getElement("donateOutput") = privateSector.getChange();
		library.balance = parseInt(library.balance) + parseInt(getElement("budgetOutput")) + parseInt(getElement("donateOutput"));
		getElement("balanceOutput") = library.balance;
	}
	library.balance = document.getElementById("balance").value;
}

var submit = document.getElementById("submit");
submit.addEventListener("click", printOutput, false);

