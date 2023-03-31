//shift option click
//A1
function calculate() {
	const tigerNau = document.getElementById("tigerNau").value;
	const tigerBac = document.getElementById("tigerBac").value;
	const heineken = document.getElementById("heineken").value;
	const sevenUp = document.getElementById("sevenUp").value;
	const coke = document.getElementById("coke").value;
	const sting = document.getElementById("sting").value;
	const napkin = document.getElementById("napkin").value;

	localStorage.setItem("tigerNau", tigerNau);
	localStorage.setItem("tigerBac", tigerBac);
	localStorage.setItem("heineken", heineken);
	localStorage.setItem("sevenUp", sevenUp);
	localStorage.setItem("coke", coke);
	localStorage.setItem("sting", sting);
	localStorage.setItem("napkin", napkin);

	const total = (tigerNau * 24000) + (tigerBac * 25000) + (heineken * 26000) + (sevenUp * 18000) + (coke * 18000) + (sting * 18000) + (napkin * 3000);

	document.getElementById("total").innerHTML = "Tổng tiền: " + total + " đồng";

	function resetQuantity() {
		const tigerNau = document.getElementById("tigerBac")
		tigerNau.innerHTML = 0
	}

}

function confirmReset() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAll();
	}
}


function resetAll() {
	let inputs = {
		'tigerNau': document.getElementById('tigerNau').value,
		'tigerBac': document.getElementById('tigerBac').value,
		'heineken': document.getElementById('heineken').value,
		'sevenUp': document.getElementById('sevenUp').value,
		'coke': document.getElementById('coke').value,
		'sting': document.getElementById('sting').value,
		'napkin': document.getElementById('napkin').value
	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('tigerNau').value = savedInputs.tigerNau;
		document.getElementById('tigerBac').value = savedInputs.tigerBac;
		document.getElementById('heineken').value = savedInputs.heineken;
		document.getElementById('sevenUp').value = savedInputs.sevenUp;
		document.getElementById('coke').value = savedInputs.coke;
		document.getElementById('sting').value = savedInputs.sting;
		document.getElementById('napkin').value = savedInputs.napkin;
	}

	document.getElementById('tigerNau').value = '0';
	document.getElementById('tigerBac').value = '0';
	document.getElementById('heineken').value = '0';
	document.getElementById('sevenUp').value = '0';
	document.getElementById('coke').value = '0';
	document.getElementById('sting').value = '0';
	document.getElementById('napkin').value = '0';
}


function resetDrinks() {

	if (confirm("Bạn có chắc chắn muốn reset số lượng các loại nước?")) {
		var tigerBac = '<button onclick="resetTigerBac();">Reset Tiger Bạc</button>'; // thêm dấu chấm phẩy vào cuối
		var heineken = '<button onclick="resetHeineken();">Reset Heineken</button>'; // thêm dấu chấm phẩy vào cuối
		var sevenUp = '<button onclick="resetSevenUp();">Reset 7UP</button>'; // thêm dấu chấm phẩy vào cuối
		var coke = '<button onclick="resetCoke();">Reset CocaCola</button>'; // thêm dấu chấm phẩy vào cuối
		var sting = '<button onclick="resetSting();">Reset Sting</button>'; // thêm dấu chấm phẩy vào cuối
		var napkin = '<button onclick="resetNapkin();">Reset Khăn giấy</button>'; // thêm dấu chấm phẩy vào cuối

		var html = '<div>' + tigerBac + heineken + sevenUp + coke + sting + napkin + '</div>';

		var popup = window.open("", "Popup", "width=400,height=400");
		popup.document.write(html);
	}



}

function resetTigerBac() {
	document.getElementById('tigerBac').value = '0';
}
function resetHeineken() {
	document.getElementById('heineken').value = '0';
}
function resetSevenUp() {
	document.getElementById('sevenUp').value = '0';
}
function resetCoke() {
	document.getElementById('coke').value = '0';
}
function resetSting() {
	document.getElementById('sting').value = '0';
}
function resetNapkin() {
	document.getElementById('napkin').value = '0';
}







//update price


// Lấy giá trị từ localStorage và gán cho input tương ứng
document.getElementById("tigerNau2").value = localStorage.getItem("tigerNau2") || 0;
document.getElementById("tigerBac2").value = localStorage.getItem("tigerBac2") || 0;
document.getElementById("heineken2").value = localStorage.getItem("heineken2") || 0;
document.getElementById("sevenUp2").value = localStorage.getItem("sevenUp2") || 0;
document.getElementById("coke2").value = localStorage.getItem("coke2") || 0;
document.getElementById("sting2").value = localStorage.getItem("sting2") || 0;
document.getElementById("napkin2").value = localStorage.getItem("napkin2") || 0;
//close A1


//open A2


function calculateA2() {
	const tigerNauA2 = document.getElementById("tigerNau2").value;
	const tigerBacA2 = document.getElementById("tigerBac2").value;
	const heinekenA2 = document.getElementById("heineken2").value;
	const sevenUpA2 = document.getElementById("sevenUp2").value;
	const cokeA2 = document.getElementById("coke2").value;
	const stingA2 = document.getElementById("sting2").value;
	const napkinA2 = document.getElementById("napkin2").value;

	localStorage.setItem("tigerNau2", tigerNauA2);
	localStorage.setItem("tigerBac2", tigerBacA2);
	localStorage.setItem("heineken2", heinekenA2);
	localStorage.setItem("sevenUp2", sevenUpA2);
	localStorage.setItem("coke2", cokeA2);
	localStorage.setItem("sting2", stingA2);
	localStorage.setItem("napkin2", napkinA2);

	const totalA2 = (tigerNauA2 * 24000) + (tigerBacA2 * 25000) + (heinekenA2 * 26000) + (sevenUpA2 * 18000) + (cokeA2 * 18000) + (stingA2 * 18000) + (napkinA2 * 3000);

	document.getElementById("totalA2").innerHTML = "Tổng tiền: " + totalA2 + " đồng";


}

function confirmResetA2() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllA2();
	}
}


function resetAllA2() {
	let inputs2 = {
		'tigerNau2': document.getElementById('tigerNau2').value,
		'tigerBac2': document.getElementById('tigerBac2').value,
		'heineken2': document.getElementById('heineken2').value,
		'sevenUp2': document.getElementById('sevenUp2').value,
		'coke2': document.getElementById('coke2').value,
		'sting2': document.getElementById('sting2').value,
		'napkin2': document.getElementById('napkin2').value
	};
	localStorage.setItem('inputs2', JSON.stringify(inputs2));
	let savedInputs2 = JSON.parse(localStorage.getItem('inputs2'));

	if (savedInputs2) {
		document.getElementById('tigerNau2').value = savedInputs2.tigerNau2;
		document.getElementById('tigerBac2').value = savedInputs2.tigerBac2;
		document.getElementById('heineken2').value = savedInputs2.heineken2;
		document.getElementById('sevenUp2').value = savedInputs2.sevenUp2;
		document.getElementById('coke2').value = savedInputs2.coke2;
		document.getElementById('sting2').value = savedInputs2.sting2;
		document.getElementById('napkin2').value = savedInputs2.napkin2;
	}

	document.getElementById('tigerNau2').value = '0';
	document.getElementById('tigerBac2').value = '0';
	document.getElementById('heineken2').value = '0';
	document.getElementById('sevenUp2').value = '0';
	document.getElementById('coke2').value = '0';
	document.getElementById('sting2').value = '0';
	document.getElementById('napkin2').value = '0';
}

//A3
function calculateA3() {
	const tigerNauA3 = document.getElementById("tigerNau3").value;
	const tigerBacA3 = document.getElementById("tigerBac3").value;
	const heinekenA3 = document.getElementById("heineken3").value;
	const sevenUpA3 = document.getElementById("sevenUp7").value;
	const cokeA3 = document.getElementById("coke3").value;
	const stingA3 = document.getElementById("sting3").value;
	const napkinA3 = document.getElementById("napkin3").value;
	localStorage.setItem("tigerNau3", tigerNauA3);
	localStorage.setItem("tigerBac3", tigerBacA3);
	localStorage.setItem("heineken3", heinekenA3);
	localStorage.setItem("sevenUp7", sevenUpA3);
	localStorage.setItem("coke3", cokeA3);
	localStorage.setItem("sting3", stingA3);
	localStorage.setItem("napkin3", napkinA3);

	const totalA3 = (tigerNauA3 * 24000) + (tigerBacA3 * 25000) + (heinekenA3 * 26000) + (sevenUpA3 * 18000) + (cokeA3 * 18000) + (stingA3 * 18000) + (napkinA3 * 3000);

	document.getElementById("totalA3").innerHTML = "Tổng tiền: " + totalA3 + " đồng";

}

function confirmResetA3() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllA3();
	}
}

function resetAllA3() {
	let inputs3 = {
		'tigerNau3': document.getElementById('tigerNau3').value,
		'tigerBac3': document.getElementById('tigerBac3').value,
		'heineken3': document.getElementById('heineken3').value,
		'sevenUp7': document.getElementById('sevenUp7').value,
		'coke3': document.getElementById('coke3').value,
		'sting3': document.getElementById('sting3').value,
		'napkin3': document.getElementById('napkin3').value
	};
	localStorage.setItem('inputs3', JSON.stringify(inputs3));
	let savedInputs3 = JSON.parse(localStorage.getItem('inputs3'));

	if (savedInputs3) {
		document.getElementById('tigerNau3').value = savedInputs3.tigerNau3;
		document.getElementById('tigerBac3').value = savedInputs3.tigerBac3;
		document.getElementById('heineken3').value = savedInputs3.heineken3;
		document.getElementById('sevenUp7').value = savedInputs3.sevenUp7;
		document.getElementById('coke3').value = savedInputs3.coke3;
		document.getElementById('sting3').value = savedInputs3.sting3;
		document.getElementById('napkin3').value = savedInputs3.napkin3;
	}

	document.getElementById('tigerNau3').value = '0';
	document.getElementById('tigerBac3').value = '0';
	document.getElementById('heineken3').value = '0';
	document.getElementById('sevenUp7').value = '0';
	document.getElementById('coke3').value = '0';
	document.getElementById('sting3').value = '0';
	document.getElementById('napkin3').value = '0';
}


//A4
function calculateA4() {
	const tigerNauA4 = document.getElementById("tigerNau4").value;
	const tigerBacA4 = document.getElementById("tigerBac4").value;
	const heinekenA4 = document.getElementById("heineken4").value;
	const sevenUpA4 = document.getElementById("sevenUp7").value;
	const cokeA4 = document.getElementById("coke4").value;
	const stingA4 = document.getElementById("sting4").value;
	const napkinA4 = document.getElementById("napkin4").value;
	localStorage.setItem("tigerNau4", tigerNauA4);
	localStorage.setItem("tigerBac4", tigerBacA4);
	localStorage.setItem("heineken4", heinekenA4);
	localStorage.setItem("sevenUp4", sevenUpA4);
	localStorage.setItem("coke4", cokeA4);
	localStorage.setItem("sting4", stingA4);
	localStorage.setItem("napkin4", napkinA4);
	const totalA4 = (tigerNauA4 * 24000) + (tigerBacA4 * 25000) + (heinekenA4 * 26000) + (sevenUpA4 * 18000) + (cokeA4 * 18000) + (stingA4 * 18000) + (napkinA4 * 3000);
	document.getElementById("totalA4").innerHTML = "Tổng tiền: " + totalA4 + " đồng";
}
function confirmResetA4() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) { resetAllA4(); }
} function resetAllA4() {
	let inputs4 = {
		'tigerNau4': document.getElementById('tigerNau4').value,
		'tigerBac4': document.getElementById('tigerBac4').value,
		'heineken4': document.getElementById('heineken4').value,
		'sevenUp4': document.getElementById('sevenUp4').value,
		'coke4': document.getElementById('coke4').value,
		'sting4': document.getElementById('sting4').value,
		'napkin4': document.getElementById('napkin4').value
	}; localStorage.setItem('inputs4', JSON.stringify(inputs4));
	let savedInputs4 = JSON.parse(localStorage.getItem('inputs4'));
	if (savedInputs4) {
		document.getElementById('tigerNau4').value = savedInputs4.tigerNau4;
		document.getElementById('tigerBac4').value = savedInputs4.tigerBac4;
		document.getElementById('heineken4').value = savedInputs4.heineken4;
		document.getElementById('sevenUp4').value = savedInputs4.sevenUp4;
		document.getElementById('coke4').value = savedInputs4.coke4;
		document.getElementById('sting4').value = savedInputs4.sting4;
		document.getElementById('napkin4').value = savedInputs4.napkin4;
	}
	document.getElementById('tigerNau4').value = '0'; document.getElementById('tigerBac4').value = '0';
	document.getElementById('heineken4').value = '0'; document.getElementById('sevenUp4').value = '0';
	document.getElementById('coke4').value = '0'; document.getElementById('sting4').value = '0';
	document.getElementById('napkin4').value = '0';
}





//A5

function calculateA5() {
	const tigerNauA5 = document.getElementById("tigerNau5").value;
	const tigerBacA5 = document.getElementById("tigerBac5").value;
	const heinekenA5 = document.getElementById("heineken5").value;
	const sevenUpA5 = document.getElementById("sevenUp5").value;
	const cokeA5 = document.getElementById("coke5").value;
	const stingA5 = document.getElementById("sting5").value;
	const napkinA5 = document.getElementById("napkin5").value;
	localStorage.setItem("tigerNau5", tigerNauA5);
	localStorage.setItem("tigerBac5", tigerBacA5);
	localStorage.setItem("heineken5", heinekenA5);
	localStorage.setItem("sevenUp5", sevenUpA5);
	localStorage.setItem("coke5", cokeA5);
	localStorage.setItem("sting5", stingA5);
	localStorage.setItem("napkin5", napkinA5);

	const totalA5 = (tigerNauA5 * 24000) + (tigerBacA5 * 25000) + (heinekenA5 * 26000) + (sevenUpA5 * 18000) + (cokeA5 * 18000) + (stingA5 * 18000) + (napkinA5 * 3000);

	document.getElementById("totalA5").innerHTML = "Tổng tiền: " + totalA5 + " đồng";

}

function confirmResetA5() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllA5();
	}
}

function resetAllA5() {
	let inputs5 = {
		'tigerNau5': document.getElementById('tigerNau5').value,
		'tigerBac5': document.getElementById('tigerBac5').value,
		'heineken5': document.getElementById('heineken5').value,
		'sevenUp5': document.getElementById('sevenUp5').value,
		'coke5': document.getElementById('coke5').value,
		'sting5': document.getElementById('sting5').value,
		'napkin5': document.getElementById('napkin5').value
	};
	localStorage.setItem('inputs5', JSON.stringify(inputs5));
	let savedInputs5 = JSON.parse(localStorage.getItem('inputs5'));

	if (savedInputs5) {
		document.getElementById('tigerNau5').value = savedInputs5.tigerNau5;
		document.getElementById('tigerBac5').value = savedInputs5.tigerBac5;
		document.getElementById('heineken5').value = savedInputs5.heineken5;
		document.getElementById('sevenUp5').value = savedInputs5.sevenUp5;
		document.getElementById('coke5').value = savedInputs5.coke5
		document.getElementById('sting5').value = savedInputs5.sting5;
		document.getElementById('napkin5').value = savedInputs5.napkin5;
	}

	document.getElementById('tigerNau5').value = '0';
	document.getElementById('tigerBac5').value = '0';
	document.getElementById('heineken5').value = '0';
	document.getElementById('sevenUp5').value = '0';
	document.getElementById('coke5').value = '0';
	document.getElementById('sting5').value = '0';
	document.getElementById('napkin5').value = '0';
}





//A6

function calculateA6() {
	const tigerNauA6 = document.getElementById("tigerNau6").value;
	const tigerBacA6 = document.getElementById("tigerBac6").value;
	const heinekenA6 = document.getElementById("heineken6").value;
	const sevenUpA6 = document.getElementById("sevenUp6").value;
	const cokeA6 = document.getElementById("coke6").value;
	const stingA6 = document.getElementById("sting6").value;
	const napkinA6 = document.getElementById("napkin6").value;
	localStorage.setItem("tigerNau6", tigerNauA6);
	localStorage.setItem("tigerBac6", tigerBacA6);
	localStorage.setItem("heineken6", heinekenA6);
	localStorage.setItem("sevenUp6", sevenUpA6);
	localStorage.setItem("coke6", cokeA6);
	localStorage.setItem("sting6", stingA6);
	localStorage.setItem("napkin6", napkinA6);

	const totalA6 = (tigerNauA6 * 24000) + (tigerBacA6 * 25000) + (heinekenA6 * 26000) + (sevenUpA6 * 18000) + (cokeA6 * 18000) + (stingA6 * 18000) + (napkinA6 * 3000);

	document.getElementById("totalA6").innerHTML = "Tổng tiền: " + totalA6 + " đồng";

}

function confirmResetA6() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllA6();
	}
}

function resetAllA6() {
	let inputs6 = {
		'tigerNau6': document.getElementById('tigerNau6').value,
		'tigerBac6': document.getElementById('tigerBac6').value,
		'heineken6': document.getElementById('heineken6').value,
		'sevenUp6': document.getElementById('sevenUp6').value,
		'coke6': document.getElementById('coke6').value,
		'sting6': document.getElementById('sting6').value,
		'napkin6': document.getElementById('napkin6').value
	};
	localStorage.setItem('inputs6', JSON.stringify(inputs6));
	let savedInputs6 = JSON.parse(localStorage.getItem('inputs6'));

	if (savedInputs6) {
		document.getElementById('tigerNau6').value = savedInputs6.tigerNau6;
		document.getElementById('tigerBac6').value = savedInputs6.tigerBac6;
		document.getElementById('heineken6').value = savedInputs6.heineken6;
		document.getElementById('sevenUp6').value = savedInputs6.sevenUp6;
		document.getElementById('coke6').value = savedInputs6.coke6
		document.getElementById('sting6').value = savedInputs6.sting6;
		document.getElementById('napkin6').value = savedInputs6.napkin6;
	}

	document.getElementById('tigerNau6').value = '0';
	document.getElementById('tigerBac6').value = '0';
	document.getElementById('heineken6').value = '0';
	document.getElementById('sevenUp6').value = '0';
	document.getElementById('coke6').value = '0';
	document.getElementById('sting6').value = '0';
	document.getElementById('napkin6').value = '0';
}




//A7

function calculateA7() {
	const tigerNauA7 = document.getElementById("tigerNau7").value;
	const tigerBacA7 = document.getElementById("tigerBac7").value;
	const heinekenA7 = document.getElementById("heineken7").value;
	const sevenUpA7 = document.getElementById("sevenUp7").value;
	const cokeA7 = document.getElementById("coke7").value;
	const stingA7 = document.getElementById("sting7").value;
	const napkinA7 = document.getElementById("napkin7").value;
	localStorage.setItem("tigerNau7", tigerNauA7);
	localStorage.setItem("tigerBac7", tigerBacA7);
	localStorage.setItem("heineken7", heinekenA7);
	localStorage.setItem("sevenUp5", sevenUpA7);
	localStorage.setItem("coke7", cokeA7);
	localStorage.setItem("sting7", stingA7);
	localStorage.setItem("napkin7", napkinA7);

	const totalA7 = (tigerNauA7 * 24000) + (tigerBacA7 * 25000) + (heinekenA7 * 26000) + (sevenUpA7 * 18000) + (cokeA7 * 18000) + (stingA7 * 18000) + (napkinA7 * 3000);

	document.getElementById("totalA7").innerHTML = "Tổng tiền: " + totalA7 + " đồng";

}

function confirmResetA7() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllA7();
	}
}

function resetAllA7() {
	let inputs7 = {
		'tigerNau7': document.getElementById('tigerNau7').value,
		'tigerBac7': document.getElementById('tigerBac7').value,
		'heineken7': document.getElementById('heineken7').value,
		'sevenUp7': document.getElementById('sevenUp7').value,
		'coke7': document.getElementById('coke7').value,
		'sting7': document.getElementById('sting7').value,
		'napkin7': document.getElementById('napkin7').value
	};
	localStorage.setItem('inputs7', JSON.stringify(inputs7));
	let savedInputs7 = JSON.parse(localStorage.getItem('inputs7'));

	if (savedInputs7) {
		document.getElementById('tigerNau7').value = savedInputs7.tigerNau7;
		document.getElementById('tigerBac7').value = savedInputs7.tigerBac7;
		document.getElementById('heineken7').value = savedInputs7.heineken7;
		document.getElementById('sevenUp5').value = savedInputs7.sevenUp5;
		document.getElementById('coke7').value = savedInputs7.coke7
		document.getElementById('sting7').value = savedInputs7.sting7;
		document.getElementById('napkin7').value = savedInputs7.napkin7;
	}

	document.getElementById('tigerNau7').value = '0';
	document.getElementById('tigerBac7').value = '0';
	document.getElementById('heineken7').value = '0';
	document.getElementById('sevenUp7').value = '0';
	document.getElementById('coke7').value = '0';
	document.getElementById('sting7').value = '0';
	document.getElementById('napkin7').value = '0';
}


//open are 
const openA = document.getElementById('btnA');
const allTable = document.querySelector('.cover-table');
var isKhuOpen = false;
openA.addEventListener('click', () => {
	allTable.classList.toggle('active')
	if(isKhuOpen){
		openA.innerHTML = 'Đã Đóng Khu A';
		isKhuOpen = false;
	}
	else{
		openA.innerHTML = 'Đã Mở Khu A';
		isKhuOpen = true;
}})
