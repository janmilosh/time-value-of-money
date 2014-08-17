// Alert user that their browser is out of date
//if (navigator.appVersion.match(/MSIE [0-8]\./)) {
//}

function calculatePresentValue() {
	var presentValue;
	var numberOfMonths = document.form.numberOfMonths3.value;
	var monthlyPayment = document.form.monthlyPayment3.value;
	monthlyPayment = monthlyPayment.replace(/[^\d\.\-\ ]/g, '');
	var yearlyInterest = document.form.yearlyInterest3.value;
	var monthlyInterest = yearlyInterest/1200;
	if (yearlyInterest > 0) {
		presentValue = monthlyPayment*(1 - (1/Math.pow((1 + monthlyInterest), numberOfMonths)))/monthlyInterest;
	} else {
		presentValue = monthlyPayment*numberOfMonths;
	}
	yearlyInterest = (yearlyInterest*1).toFixed(2);
	presentValue = presentValue.toFixed(2);
	numberOfMonths = (numberOfMonths*1).toFixed(2);
	monthlyPayment = (monthlyPayment*1).toFixed(2);
	var table = document.getElementById("loan-table");
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	cell1.innerHTML = presentValue;
	cell2.innerHTML = yearlyInterest;
	cell3.innerHTML = numberOfMonths;
	cell4.innerHTML = monthlyPayment;	
}
function calculateMonthlyPayment() {
	var monthlyPayment;
	var presentValue = document.form.presentValue1.value;
	presentValue = presentValue.replace(/[^\d\.\-\ ]/g, '');
	var numberOfMonths = document.form.numberOfMonths1.value;
	var yearlyInterest = document.form.yearlyInterest1.value;
	var monthlyInterest = yearlyInterest/1200;
	
	if (yearlyInterest > 0) {
		monthlyPayment = presentValue/((1 - (1/Math.pow((1 + monthlyInterest), numberOfMonths)))/monthlyInterest);
	} else {
		monthlyPayment = presentValue/numberOfMonths;
	}
	yearlyInterest = (yearlyInterest*1).toFixed(2);
	presentValue = (presentValue*1).toFixed(2);
	numberOfMonths = (numberOfMonths*1).toFixed(2);
	monthlyPayment = monthlyPayment.toFixed(2);
	var table = document.getElementById("loan-table");
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	cell1.innerHTML = presentValue;
	cell2.innerHTML = yearlyInterest;
	cell3.innerHTML = numberOfMonths;
	cell4.innerHTML = monthlyPayment;
}	
function calculateNumberOfMonths() {
	var numberOfMonths;
	var presentValue = document.form.presentValue2.value;
	presentValue = presentValue.replace(/[^\d\.\-\ ]/g, '');
	var monthlyPayment = document.form.monthlyPayment2.value;
	monthlyPayment = monthlyPayment.replace(/[^\d\.\-\ ]/g, '');
	var yearlyInterest = document.form.yearlyInterest2.value;
	var monthlyInterest = yearlyInterest/1200;
	if (yearlyInterest > 0) {
		numberOfMonths = - Math.log(1 - (presentValue*monthlyInterest/monthlyPayment))/Math.log(1 + monthlyInterest);
	} else {
		numberOfMonths = presentValue/monthlyPayment;
	}
	yearlyInterest = (yearlyInterest*1).toFixed(2);
	presentValue = (presentValue*1).toFixed(2);
	numberOfMonths = numberOfMonths.toFixed(2);
	monthlyPayment = (monthlyPayment*1).toFixed(2);
	var table = document.getElementById("loan-table");
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	cell1.innerHTML = presentValue;
	cell2.innerHTML = yearlyInterest;
	cell3.innerHTML = numberOfMonths;
	cell4.innerHTML = monthlyPayment;
}

function calculateFutureValue() {
	var futureValue;
	var numberOfYears = document.getElementById('numberOfYears3s').value;
	var numberOfMonths = numberOfYears * 12;
	var monthlyDeposit = document.getElementById('monthlyDeposit3s').value;
	monthlyDeposit = monthlyDeposit.replace(/[^\d\.\-\ ]/g, '');
	var interest = document.getElementById('interest3s').value;
	var monthlyInterest = interest/1200;
	if (interest > 0) {
		futureValue = monthlyDeposit*(-1 + (Math.pow((1 + monthlyInterest), numberOfMonths)))/monthlyInterest;
	} else {
		futureValue = monthlyDeposit*numberOfMonths;
	}
	futureValue = futureValue * (1 + monthlyInterest);
	interest = (interest*1).toFixed(2);
	futureValue = futureValue.toFixed(2);
	numberOfYears = (numberOfYears*1).toFixed(2);
	monthlyDeposit = (monthlyDeposit*1).toFixed(2);
	var table = document.getElementById("savings-table");
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	cell1.innerHTML = futureValue;
	cell2.innerHTML = interest;
	cell3.innerHTML = numberOfYears;
	cell4.innerHTML = monthlyDeposit;	
}
function calculateMonthlyDeposit() {
	var monthlyDeposit;
	var futureValue = document.getElementById('futureValue1s').value;
	futureValue = futureValue.replace(/[^\d\.\-\ ]/g, '');
	var numberOfYears = document.getElementById('numberOfYears1s').value;
	var numberOfMonths = numberOfYears * 12;
	var interest = document.getElementById('interest1s').value;
	var monthlyInterest = interest/1200;
	futureValue_ = futureValue/(1 + monthlyInterest);
	if (interest > 0) {
		monthlyDeposit = futureValue_/((-1 + (Math.pow((1 + monthlyInterest), numberOfMonths)))/monthlyInterest);
	} else {
		monthlyDeposit = futureValue/numberOfMonths;
	}
	interest = (interest*1).toFixed(2);
	futureValue = (futureValue*1).toFixed(2);
	numberOfYears = (numberOfYears*1).toFixed(2);
	monthlyDeposit = monthlyDeposit.toFixed(2);
	var table = document.getElementById("savings-table");
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	cell1.innerHTML = futureValue;
	cell2.innerHTML = interest;
	cell3.innerHTML = numberOfYears;
	cell4.innerHTML = monthlyDeposit;
}	
function calculateYears() {
	var numberOfYears;
	var numberOfMonths;
	var futureValue = document.getElementById('futureValue2s').value;
	futureValue = futureValue.replace(/[^\d\.\-\ ]/g, '');
	var monthlyDeposit = document.getElementById('monthlyDeposit2s').value;
	monthlyDeposit = monthlyDeposit.replace(/[^\d\.\-\ ]/g, '');
	var interest = document.getElementById('interest2s').value;
	var monthlyInterest = interest/1200;
	futureValue_ = futureValue/(1 + monthlyInterest);
	if (interest > 0) {
		numberOfMonths =  Math.log(1 + (futureValue_*monthlyInterest/monthlyDeposit))/Math.log(1 + monthlyInterest);
	} else {
		numberOfMonths = futureValue/monthlyDeposit;
	}
	numberOfYears = numberOfMonths/12;
	interest = (interest*1).toFixed(2);
	futureValue = (futureValue*1).toFixed(2);
	numberOfYears = numberOfYears.toFixed(2);
	monthlyDeposit = (monthlyDeposit*1).toFixed(2);
	var table = document.getElementById("savings-table");
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	cell1.innerHTML = futureValue;
	cell2.innerHTML = interest;
	cell3.innerHTML = numberOfYears;
	cell4.innerHTML = monthlyDeposit;
}
function reloadPage() {
	location.reload(true);
}
