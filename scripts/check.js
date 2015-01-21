function Institution(minChange, maxChange) {
	this.minChange = minChange;
	this.maxChange = maxChange;
	this.getChange = function() {
		return Math.round((Math.floor(Math.random() * (this.maxChange - this.minChange + 1)) + parseInt(this.minChange)));
		}
	}

function Library(branch, balance) {
	this.branch = branch;
	this.balance = 200;
}

$(document).ready(function () {
	var government = new Institution ($("#govMinChange").val(),
															   		$("#govMaxChange").val());

	var privateSector = new Institution ($("#priMinChange").val(),
															   			 $("#priMaxChange").val());

	var library = new Library($("#branch").val());

	$("#submit").on("click", function() {

		$(".year").each (function (index) {
			// var budgetOutputNode = $(".budgetOutput")[i];
			// var budgetOutputArray = $.makeArray(budgetOutputNode);
			$($(".budgetOutput")[index]).html(government.getChange());
			// var donateOutputNode = $(".donateOutput"[i]);
			// var donateOutputArray = $.makeArray(donateOutputNode);
			$($(".donateOutput")[index]).html(privateSector.getChange());
			library.balance = parseInt(library.balance) +
	 											parseInt($($(".budgetOutput")[index]).html()) +
	 											parseInt($($(".donateOutput")[index]).html());
			// var balanceOutputNode = $(".balanceOutput"[i]);
			// var balanceOutputArray = $.makeArray(balanceOutputNode);
			$($(".balanceOutput")[index]).html(library.balance);

	// for (var years = 0; years < document.getElementById("years").value; years++) {
	// 	document.getElementsByClassName("budgetOutput")[years].innerHTML = government.getChange();
	// 	document.getElementsByClassName("donateOutput")[years].innerHTML = privateSector.getChange();
	// 	library.balance = parseInt(library.balance) +
	// 										parseInt(document.getElementsByClassName("donateOutput")[years].innerHTML) +
	// 										parseInt(document.getElementsByClassName("budgetOutput")[years].innerHTML);
	// 	document.getElementsByClassName("balanceOutput")[years].innerHTML = library.balance;
	// }

	// library.balance = 200;

 });
library.balance = 200;
	// var nodeList = $(".balanceOutput");
	var nodeArray = [];
	var balOutputArray = [];
	$(".balanceOutput").each (function (index, value) {
		balOutputArray.push(value.textContent);
	});
	// for (var i = 0; i < nodeList.length; ++i) {
 //    nodeArray[i] = nodeList[i];
 //    balOutputArray.push(nodeArray[i].textContent);

 balanceOutputNumbers = balOutputArray.map(Number);
 var min = Math.min.apply(null, balanceOutputNumbers);
 console.log(min);
});
});
