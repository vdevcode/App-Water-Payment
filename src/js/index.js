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
document.getElementById("tigerNau").value = localStorage.getItem("tigerNau") || 0;
document.getElementById("tigerBac").value = localStorage.getItem("tigerBac") || 0;
document.getElementById("heineken").value = localStorage.getItem("heineken") || 0;
document.getElementById("sevenUp").value = localStorage.getItem("sevenUp") || 0;
document.getElementById("coke").value = localStorage.getItem("coke") || 0;
document.getElementById("sting").value = localStorage.getItem("sting") || 0;
document.getElementById("napkin").value = localStorage.getItem("napkin") || 0;