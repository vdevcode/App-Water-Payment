


//A1
function confirmCalculate() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculate()
	}
}
function calculate() {
	const bottleTigerBac = document.getElementById("bottleTigerBac").value;
	const bottleTigerNau = document.getElementById("bottleTigerNau").value;
	const tigerNau = document.getElementById("tigerNau").value;
	const tigerBac = document.getElementById("tigerBac").value;
	const heineken = document.getElementById("heineken").value;
	const sevenUp = document.getElementById("sevenUp").value;
	const coke = document.getElementById("coke").value;
	const pepsi = document.getElementById("pepsi").value;
	const sting = document.getElementById("sting").value;
	const waterNature = document.getElementById("water").value;
	const tea = document.getElementById("tea").value;
	const napkin = document.getElementById("napkin").value;

	const products = [
		{ name: "Chai Tiger Bạc (26.000vnd)", quantity: bottleTigerBac },
		{ name: "Chai Tiger Nâu (25.000vnd)", quantity: bottleTigerNau },
		{ name: "Bia Tiger Nâu (24.000vnd)", quantity: tigerNau },
		{ name: "Bia Tiger Bạc (25.000vnd)", quantity: tigerBac },
		{ name: "Bia Heineken (26.000vnd)", quantity: heineken },
		{ name: "Nước 7up (16.000vnd)", quantity: sevenUp },
		{ name: "Nước CocaCola (16.000vnd)", quantity: coke },
		{ name: "Nước pepsi (16.000vnd)", quantity: pepsi },
		{ name: "Nước Sting (16.000vnd)", quantity: sting },
		{ name: "Nước suối (12.000vnd)", quantity: waterNature },
		{ name: "Trà tắc (10.000vnd)", quantity: tea },
		{ name: "Khăn giấy (3.000vnd)", quantity: napkin },
	];

	const selectedProducts = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProducts.length; i++) {
		const product = selectedProducts[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("order").innerHTML = bill;


	localStorage.setItem("tigerNau", tigerNau);
	localStorage.setItem("bottleTigerBac", bottleTigerBac);
	localStorage.setItem("bottleTigerNau", bottleTigerNau);
	localStorage.setItem("tigerBac", tigerBac);
	localStorage.setItem("heineken", heineken);
	localStorage.setItem("sevenUp", sevenUp);
	localStorage.setItem("coke", coke);
	localStorage.setItem("pepsi", pepsi)
	localStorage.setItem("sting", sting);
	localStorage.setItem("water", waterNature);
	localStorage.setItem("tea", tea);
	localStorage.setItem("napkin", napkin);

	localStorage.removeItem("bottleTigerBac");
	localStorage.removeItem("bottleTigerNau");
	localStorage.removeItem("tigerNau");
	localStorage.removeItem("tigerBac");
	localStorage.removeItem("heineken");
	localStorage.removeItem("sevenUp");
	localStorage.removeItem("coke");
	localStorage.removeItem("pepsi");
	localStorage.removeItem("sting");
	localStorage.removeItem("water");
	localStorage.removeItem("tea");
	localStorage.removeItem("napkin");

	const total = (bottleTigerBac * 26000) + (bottleTigerNau * 25000) + (tigerNau * 24000) + (tigerBac * 25000) + (heineken * 26000) + (sevenUp * 16000) + (coke * 16000) + (pepsi * 16000) + (waterNature * 12000) + (sting * 16000) + (tea * 10000) + (napkin * 3000);

	const history = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	history.push({ time: currentTime, total: total });
	localStorage.setItem('totalHistory', JSON.stringify(history));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("total").innerHTML = "Tổng tiền: " + total + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputs = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputs.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

// const toggleDrinksButton = document.getElementById("toggleDrinks");
// const drinkElements = document.querySelectorAll(".drink:nth-child(n+9)");

// toggleDrinksButton.addEventListener("click", () => {
//   drinkElements.forEach(drink => drink.classList.toggle("hidden"));
//   const isHidden = toggleDrinksButton.classList.toggle("hidden");
//   toggleDrinksButton.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
//   localStorage.setItem("showDrinks", isHidden ? "1" : "0");
// });

// if (localStorage.getItem("showDrinks") === "1") {
//   drinkElements.forEach(drink => drink.classList.add("hidden"));
//   toggleDrinksButton.textContent = "Hiển thị các loại nước";
// }


const toggleDrinksButton = document.getElementById("toggleDrinks");
const drinkElements = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButton.addEventListener("click", () => {
	drinkElements.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButton.classList.toggle("hidden");
	toggleDrinksButton.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinks = localStorage.getItem("showDrinks");

if (showDrinks === "1") {
	drinkElements.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButton.textContent = "Hiển thị các loại nước";
	toggleDrinksButton.classList.add("hidden");
} else {
	toggleDrinksButton.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistory() {
	const history = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = history.map((item, index) => `Lần ${index + 1}: ${item.total} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("history").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistory()">Xoá lịch sử</button>';
}
function clearHistory() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("history").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("history").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmReset() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAll();
	}
}
function resetAll() {
	let inputs = {
		'bottleTigerBac': document.getElementById('bottleTigerBac').value,
		'bottleTigerNau': document.getElementById('bottleTigerNau').value,
		'tigerNau': document.getElementById('tigerNau').value,
		'tigerBac': document.getElementById('tigerBac').value,
		'heineken': document.getElementById('heineken').value,
		'sevenUp': document.getElementById('sevenUp').value,
		'coke': document.getElementById('coke').value,
		'pepsi': document.getElementById('pepsi').value,
		'sting': document.getElementById('sting').value,
		'waterNature': document.getElementById('water').value,
		'napkin': document.getElementById('napkin').value,
		'tea': document.getElementById('tea').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBac').value = savedInputs.bottleTigerBac;
		document.getElementById('bottleTigerNau').value = savedInputs.bottleTigerNau;
		document.getElementById('tigerNau').value = savedInputs.tigerNau;
		document.getElementById('tigerBac').value = savedInputs.tigerBac;
		document.getElementById('heineken').value = savedInputs.heineken;
		document.getElementById('sevenUp').value = savedInputs.sevenUp;
		document.getElementById('coke').value = savedInputs.coke;
		document.getElementById('pepsi').value = savedInputs.pepsi;
		document.getElementById('sting').value = savedInputs.sting;
		document.getElementById('water').value = savedInputs.water;
		document.getElementById('tea').value = savedInputs.tea;
		document.getElementById('napkin').value = savedInputs.napkin;
	}

	document.getElementById('bottleTigerBac').value = '';
	document.getElementById('bottleTigerNau').value = '';
	document.getElementById('tigerNau').value = '';
	document.getElementById('tigerBac').value = '';
	document.getElementById('heineken').value = '';
	document.getElementById('sevenUp').value = '';
	document.getElementById('coke').value = '';
	document.getElementById('pepsi').value = '';
	document.getElementById('sting').value = '';
	document.getElementById('water').value = '';
	document.getElementById('tea').value = '';
	document.getElementById('napkin').value = '';


	localStorage.removeItem("bottleTigerBac");
	localStorage.removeItem("bottleTigerNau");
	localStorage.removeItem("tigerNau");
	localStorage.removeItem("tigerBac");
	localStorage.removeItem("heineken");
	localStorage.removeItem("sevenUp");
	localStorage.removeItem("coke");
	localStorage.removeItem("pepsi");
	localStorage.removeItem("sting");
	localStorage.removeItem("water");
	localStorage.removeItem("tea");
	localStorage.removeItem("napkin");

}

const inputs = document.querySelectorAll('input[type="number"]');
inputs.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtn = document.getElementById("addBtn");
const newDrinkForm = document.getElementById("newDrinkForm");

addBtn.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});





//A2
function confirmCalculateA2() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateA2()
	}
}
function calculateA2() {
	const bottleTigerBacA2 = document.getElementById("bottleTigerBacA2").value;
	const bottleTigerNauA2 = document.getElementById("bottleTigerNauA2").value;
	const tigerNauA2 = document.getElementById("tigerNauA2").value;
	const tigerBacA2 = document.getElementById("tigerBacA2").value;
	const heinekenA2 = document.getElementById("heinekenA2").value;
	const sevenUpA2 = document.getElementById("sevenUpA2").value;
	const cokeA2 = document.getElementById("cokeA2").value;
	const pepsiA2 = document.getElementById("pepsiA2").value;
	const stingA2 = document.getElementById("stingA2").value;
	const waterNatureA2 = document.getElementById("waterA2").value;
	const teaA2 = document.getElementById("teaA2").value;
	const napkinA2 = document.getElementById("napkinA2").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacA2 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauA2 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauA2 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacA2 },
		{ name: "Bia Heineken", quantity: heinekenA2 },
		{ name: "Nước 7up", quantity: sevenUpA2 },
		{ name: "Nước CocaCola", quantity: cokeA2 },
		{ name: "Nước pepsi", quantity: pepsiA2 },
		{ name: "Nước Sting", quantity: stingA2 },
		{ name: "Nước suối", quantity: waterNatureA2 },
		{ name: "Trà tắc", quantity: teaA2 },
		{ name: "Khăn giấy", quantity: napkinA2 },
	];

	const selectedProductsA2 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsA2.length; i++) {
		const product = selectedProductsA2[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderA2").innerHTML = bill;


	localStorage.setItem("tigerNauA2", tigerNauA2);
	localStorage.setItem("bottleTigerBacA2", bottleTigerBacA2);
	localStorage.setItem("bottleTigerNauA2", bottleTigerNauA2);
	localStorage.setItem("tigerBacA2", tigerBacA2);
	localStorage.setItem("heinekenA2", heinekenA2);
	localStorage.setItem("sevenUpA2", sevenUpA2);
	localStorage.setItem("cokeA2", cokeA2);
	localStorage.setItem("pepsiA2", pepsiA2)
	localStorage.setItem("stingA2", stingA2);
	localStorage.setItem("waterA2", waterNatureA2);
	localStorage.setItem("teaA2", teaA2);
	localStorage.setItem("napkinA2", napkinA2);

	localStorage.removeItem("bottleTigerBacA2");
	localStorage.removeItem("bottleTigerNauA2");
	localStorage.removeItem("tigerNauA2");
	localStorage.removeItem("tigerBacA2");
	localStorage.removeItem("heinekenA2");
	localStorage.removeItem("sevenUpA2");
	localStorage.removeItem("cokeA2");
	localStorage.removeItem("pepsiA2");
	localStorage.removeItem("stingA2");
	localStorage.removeItem("waterA2");
	localStorage.removeItem("teaA2");
	localStorage.removeItem("napkinA2");

	const totalA2 = (bottleTigerBacA2 * 26000) + (bottleTigerNauA2 * 25000) + (tigerNauA2 * 24000) + (tigerBacA2 * 25000) + (heinekenA2 * 26000) + (sevenUpA2 * 16000) + (cokeA2 * 16000) + (pepsiA2 * 16000) + (waterNatureA2 * 12000) + (stingA2 * 16000) + (teaA2 * 10000) + (napkinA2 * 3000);

	const historyA2 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyA2.push({ time: currentTime, totalA2: totalA2 });
	localStorage.setItem('totalHistory', JSON.stringify(historyA2));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalA2").innerHTML = "Tổng tiền: " + totalA2 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsA2 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsA2.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonA2 = document.getElementById("toggleDrinksA2");
const drinkElementsA2 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonA2.addEventListener("click", () => {
	drinkElementsA2.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonA2.classList.toggle("hidden");
	toggleDrinksButtonA2.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksA2 = localStorage.getItem("showDrinks");

if (showDrinksA2 === "1") {
	drinkElementsA2.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonA2.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonA2.classList.add("hidden");
} else {
	toggleDrinksButtonA2.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryA2() {
	const historyA2 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyA2.map((item, index) => `Lần ${index + 1}: ${item.totalA2} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyA2").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryA2()">Xoá lịch sử</button>';
}
function clearHistoryA2() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyA2").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyA2").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetA2() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllA2();
	}
}
function resetAllA2() {
	let inputs = {
		'bottleTigerBacA2': document.getElementById('bottleTigerBacA2').value,
		'bottleTigerNauA2': document.getElementById('bottleTigerNauA2').value,
		'tigerNauA2': document.getElementById('tigerNauA2').value,
		'tigerBacA2': document.getElementById('tigerBacA2').value,
		'heinekenA2': document.getElementById('heinekenA2').value,
		'sevenUpA2': document.getElementById('sevenUpA2').value,
		'cokeA2': document.getElementById('cokeA2').value,
		'pepsiA2': document.getElementById('pepsiA2').value,
		'stingA2': document.getElementById('stingA2').value,
		'waterNatureA2': document.getElementById('waterA2').value,
		'napkinA2': document.getElementById('napkinA2').value,
		'teaA2': document.getElementById('teaA2').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacA2').value = savedInputs.bottleTigerBacA2;
		document.getElementById('bottleTigerNauA2').value = savedInputs.bottleTigerNauA2;
		document.getElementById('tigerNauA2').value = savedInputs.tigerNauA2;
		document.getElementById('tigerBacA2').value = savedInputs.tigerBacA2;
		document.getElementById('heinekenA2').value = savedInputs.heinekenA2;
		document.getElementById('sevenUpA2').value = savedInputs.sevenUpA2;
		document.getElementById('cokeA2').value = savedInputs.cokeA2;
		document.getElementById('pepsiA2').value = savedInputs.pepsiA2;
		document.getElementById('stingA2').value = savedInputs.stingA2;
		document.getElementById('waterA2').value = savedInputs.waterA2;
		document.getElementById('teaA2').value = savedInputs.teaA2;
		document.getElementById('napkinA2').value = savedInputs.napkinA2;
	}

	document.getElementById('bottleTigerBacA2').value = '';
	document.getElementById('bottleTigerNauA2').value = '';
	document.getElementById('tigerNauA2').value = '';
	document.getElementById('tigerBacA2').value = '';
	document.getElementById('heinekenA2').value = '';
	document.getElementById('sevenUpA2').value = '';
	document.getElementById('cokeA2').value = '';
	document.getElementById('pepsiA2').value = '';
	document.getElementById('stingA2').value = '';
	document.getElementById('waterA2').value = '';
	document.getElementById('teaA2').value = '';
	document.getElementById('napkinA2').value = '';


	localStorage.removeItem("bottleTigerBacA2");
	localStorage.removeItem("bottleTigerNauA2");
	localStorage.removeItem("tigerNauA2");
	localStorage.removeItem("tigerBacA2");
	localStorage.removeItem("heinekenA2");
	localStorage.removeItem("sevenUpA2");
	localStorage.removeItem("cokeA2");
	localStorage.removeItem("pepsiA2");
	localStorage.removeItem("stingA2");
	localStorage.removeItem("waterA2");
	localStorage.removeItem("teaA2");
	localStorage.removeItem("napkinA2");

}

const inputsA2 = document.querySelectorAll('input[type="number"]');
inputsA2.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnA2 = document.getElementById("addBtnA2");
const newDrinkFormA2 = document.getElementById("newDrinkFormA2");

addBtnA2.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});









//A3
function confirmCalculateA3() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateA3()
	}
}
function calculateA3() {
	const bottleTigerBacA3 = document.getElementById("bottleTigerBacA3").value;
	const bottleTigerNauA3 = document.getElementById("bottleTigerNauA3").value;
	const tigerNauA3 = document.getElementById("tigerNauA3").value;
	const tigerBacA3 = document.getElementById("tigerBacA3").value;
	const heinekenA3 = document.getElementById("heinekenA3").value;
	const sevenUpA3 = document.getElementById("sevenUpA3").value;
	const cokeA3 = document.getElementById("cokeA3").value;
	const pepsiA3 = document.getElementById("pepsiA3").value;
	const stingA3 = document.getElementById("stingA3").value;
	const waterNatureA3 = document.getElementById("waterA3").value;
	const teaA3 = document.getElementById("teaA3").value;
	const napkinA3 = document.getElementById("napkinA3").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacA3 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauA3 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauA3 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacA3 },
		{ name: "Bia Heineken", quantity: heinekenA3 },
		{ name: "Nước 7up", quantity: sevenUpA3 },
		{ name: "Nước CocaCola", quantity: cokeA3 },
		{ name: "Nước pepsi", quantity: pepsiA3 },
		{ name: "Nước Sting", quantity: stingA3 },
		{ name: "Nước suối", quantity: waterNatureA3 },
		{ name: "Trà tắc", quantity: teaA3 },
		{ name: "Khăn giấy", quantity: napkinA3 },
	];

	const selectedProductsA3 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsA3.length; i++) {
		const product = selectedProductsA3[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderA3").innerHTML = bill;


	localStorage.setItem("tigerNauA3", tigerNauA3);
	localStorage.setItem("bottleTigerBacA3", bottleTigerBacA3);
	localStorage.setItem("bottleTigerNauA3", bottleTigerNauA3);
	localStorage.setItem("tigerBacA3", tigerBacA3);
	localStorage.setItem("heinekenA3", heinekenA3);
	localStorage.setItem("sevenUpA3", sevenUpA3);
	localStorage.setItem("cokeA3", cokeA3);
	localStorage.setItem("pepsiA3", pepsiA3)
	localStorage.setItem("stingA3", stingA3);
	localStorage.setItem("waterA3", waterNatureA3);
	localStorage.setItem("teaA3", teaA3);
	localStorage.setItem("napkinA3", napkinA3);

	localStorage.removeItem("bottleTigerBacA3");
	localStorage.removeItem("bottleTigerNauA3");
	localStorage.removeItem("tigerNauA3");
	localStorage.removeItem("tigerBacA3");
	localStorage.removeItem("heinekenA3");
	localStorage.removeItem("sevenUpA3");
	localStorage.removeItem("cokeA3");
	localStorage.removeItem("pepsiA3");
	localStorage.removeItem("stingA3");
	localStorage.removeItem("waterA3");
	localStorage.removeItem("teaA3");
	localStorage.removeItem("napkinA3");

	const totalA3 = (bottleTigerBacA3 * 26000) + (bottleTigerNauA3 * 25000) + (tigerNauA3 * 24000) + (tigerBacA3 * 25000) + (heinekenA3 * 26000) + (sevenUpA3 * 16000) + (cokeA3 * 16000) + (pepsiA3 * 16000) + (waterNatureA3 * 12000) + (stingA3 * 16000) + (teaA3 * 10000) + (napkinA3 * 3000);

	const historyA3 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyA3.push({ time: currentTime, totalA3: totalA3 });
	localStorage.setItem('totalHistory', JSON.stringify(historyA3));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalA3").innerHTML = "Tổng tiền: " + totalA3 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsA3 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsA3.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonA3 = document.getElementById("toggleDrinksA3");
const drinkElementsA3 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonA3.addEventListener("click", () => {
	drinkElementsA3.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonA3.classList.toggle("hidden");
	toggleDrinksButtonA3.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksA3 = localStorage.getItem("showDrinks");

if (showDrinksA3 === "1") {
	drinkElementsA3.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonA3.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonA3.classList.add("hidden");
} else {
	toggleDrinksButtonA3.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryA3() {
	const historyA3 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyA3.map((item, index) => `Lần ${index + 1}: ${item.totalA3} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyA3").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryA3()">Xoá lịch sử</button>';
}
function clearHistoryA3() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyA3").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyA3").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetA3() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllA3();
	}
}
function resetAllA3() {
	let inputs = {
		'bottleTigerBacA3': document.getElementById('bottleTigerBacA3').value,
		'bottleTigerNauA3': document.getElementById('bottleTigerNauA3').value,
		'tigerNauA3': document.getElementById('tigerNauA3').value,
		'tigerBacA3': document.getElementById('tigerBacA3').value,
		'heinekenA3': document.getElementById('heinekenA3').value,
		'sevenUpA3': document.getElementById('sevenUpA3').value,
		'cokeA3': document.getElementById('cokeA3').value,
		'pepsiA3': document.getElementById('pepsiA3').value,
		'stingA3': document.getElementById('stingA3').value,
		'waterNatureA3': document.getElementById('waterA3').value,
		'napkinA3': document.getElementById('napkinA3').value,
		'teaA3': document.getElementById('teaA3').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacA3').value = savedInputs.bottleTigerBacA3;
		document.getElementById('bottleTigerNauA3').value = savedInputs.bottleTigerNauA3;
		document.getElementById('tigerNauA3').value = savedInputs.tigerNauA3;
		document.getElementById('tigerBacA3').value = savedInputs.tigerBacA3;
		document.getElementById('heinekenA3').value = savedInputs.heinekenA3;
		document.getElementById('sevenUpA3').value = savedInputs.sevenUpA3;
		document.getElementById('cokeA3').value = savedInputs.cokeA3;
		document.getElementById('pepsiA3').value = savedInputs.pepsiA3;
		document.getElementById('stingA3').value = savedInputs.stingA3;
		document.getElementById('waterA3').value = savedInputs.waterA3;
		document.getElementById('teaA3').value = savedInputs.teaA3;
		document.getElementById('napkinA3').value = savedInputs.napkinA3;
	}

	document.getElementById('bottleTigerBacA3').value = '';
	document.getElementById('bottleTigerNauA3').value = '';
	document.getElementById('tigerNauA3').value = '';
	document.getElementById('tigerBacA3').value = '';
	document.getElementById('heinekenA3').value = '';
	document.getElementById('sevenUpA3').value = '';
	document.getElementById('cokeA3').value = '';
	document.getElementById('pepsiA3').value = '';
	document.getElementById('stingA3').value = '';
	document.getElementById('waterA3').value = '';
	document.getElementById('teaA3').value = '';
	document.getElementById('napkinA3').value = '';


	localStorage.removeItem("bottleTigerBacA3");
	localStorage.removeItem("bottleTigerNauA3");
	localStorage.removeItem("tigerNauA3");
	localStorage.removeItem("tigerBacA3");
	localStorage.removeItem("heinekenA3");
	localStorage.removeItem("sevenUpA3");
	localStorage.removeItem("cokeA3");
	localStorage.removeItem("pepsiA3");
	localStorage.removeItem("stingA3");
	localStorage.removeItem("waterA3");
	localStorage.removeItem("teaA3");
	localStorage.removeItem("napkinA3");

}

const inputsA3 = document.querySelectorAll('input[type="number"]');
inputsA3.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnA3 = document.getElementById("addBtnA3");
const newDrinkFormA3 = document.getElementById("newDrinkFormA3");

addBtnA3.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});




//A4
function confirmCalculateA4() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateA4()
	}
}
function calculateA4() {
	const bottleTigerBacA4 = document.getElementById("bottleTigerBacA4").value;
	const bottleTigerNauA4 = document.getElementById("bottleTigerNauA4").value;
	const tigerNauA4 = document.getElementById("tigerNauA4").value;
	const tigerBacA4 = document.getElementById("tigerBacA4").value;
	const heinekenA4 = document.getElementById("heinekenA4").value;
	const sevenUpA4 = document.getElementById("sevenUpA4").value;
	const cokeA4 = document.getElementById("cokeA4").value;
	const pepsiA4 = document.getElementById("pepsiA4").value;
	const stingA4 = document.getElementById("stingA4").value;
	const waterNatureA4 = document.getElementById("waterA4").value;
	const teaA4 = document.getElementById("teaA4").value;
	const napkinA4 = document.getElementById("napkinA4").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacA4 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauA4 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauA4 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacA4 },
		{ name: "Bia Heineken", quantity: heinekenA4 },
		{ name: "Nước 7up", quantity: sevenUpA4 },
		{ name: "Nước CocaCola", quantity: cokeA4 },
		{ name: "Nước pepsi", quantity: pepsiA4 },
		{ name: "Nước Sting", quantity: stingA4 },
		{ name: "Nước suối", quantity: waterNatureA4 },
		{ name: "Trà tắc", quantity: teaA4 },
		{ name: "Khăn giấy", quantity: napkinA4 },
	];

	const selectedProductsA4 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsA4.length; i++) {
		const product = selectedProductsA4[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderA4").innerHTML = bill;


	localStorage.setItem("tigerNauA4", tigerNauA4);
	localStorage.setItem("bottleTigerBacA4", bottleTigerBacA4);
	localStorage.setItem("bottleTigerNauA4", bottleTigerNauA4);
	localStorage.setItem("tigerBacA4", tigerBacA4);
	localStorage.setItem("heinekenA4", heinekenA4);
	localStorage.setItem("sevenUpA4", sevenUpA4);
	localStorage.setItem("cokeA4", cokeA4);
	localStorage.setItem("pepsiA4", pepsiA4)
	localStorage.setItem("stingA4", stingA4);
	localStorage.setItem("waterA4", waterNatureA4);
	localStorage.setItem("teaA4", teaA4);
	localStorage.setItem("napkinA4", napkinA4);

	localStorage.removeItem("bottleTigerBacA4");
	localStorage.removeItem("bottleTigerNauA4");
	localStorage.removeItem("tigerNauA4");
	localStorage.removeItem("tigerBacA4");
	localStorage.removeItem("heinekenA4");
	localStorage.removeItem("sevenUpA4");
	localStorage.removeItem("cokeA4");
	localStorage.removeItem("pepsiA4");
	localStorage.removeItem("stingA4");
	localStorage.removeItem("waterA4");
	localStorage.removeItem("teaA4");
	localStorage.removeItem("napkinA4");

	const totalA4 = (bottleTigerBacA4 * 26000) + (bottleTigerNauA4 * 25000) + (tigerNauA4 * 24000) + (tigerBacA4 * 25000) + (heinekenA4 * 26000) + (sevenUpA4 * 16000) + (cokeA4 * 16000) + (pepsiA4 * 16000) + (waterNatureA4 * 12000) + (stingA4 * 16000) + (teaA4 * 10000) + (napkinA4 * 3000);

	const historyA4 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyA4.push({ time: currentTime, totalA4: totalA4 });
	localStorage.setItem('totalHistory', JSON.stringify(historyA4));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalA4").innerHTML = "Tổng tiền: " + totalA4 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsA4 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsA4.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonA4 = document.getElementById("toggleDrinksA4");
const drinkElementsA4 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonA4.addEventListener("click", () => {
	drinkElementsA4.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonA4.classList.toggle("hidden");
	toggleDrinksButtonA4.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksA4 = localStorage.getItem("showDrinks");

if (showDrinksA4 === "1") {
	drinkElementsA4.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonA4.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonA4.classList.add("hidden");
} else {
	toggleDrinksButtonA4.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryA4() {
	const historyA4 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyA4.map((item, index) => `Lần ${index + 1}: ${item.totalA4} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyA4").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryA4()">Xoá lịch sử</button>';
}
function clearHistoryA4() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyA4").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyA4").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetA4() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllA4();
	}
}
function resetAllA4() {
	let inputs = {
		'bottleTigerBacA4': document.getElementById('bottleTigerBacA4').value,
		'bottleTigerNauA4': document.getElementById('bottleTigerNauA4').value,
		'tigerNauA4': document.getElementById('tigerNauA4').value,
		'tigerBacA4': document.getElementById('tigerBacA4').value,
		'heinekenA4': document.getElementById('heinekenA4').value,
		'sevenUpA4': document.getElementById('sevenUpA4').value,
		'cokeA4': document.getElementById('cokeA4').value,
		'pepsiA4': document.getElementById('pepsiA4').value,
		'stingA4': document.getElementById('stingA4').value,
		'waterNatureA4': document.getElementById('waterA4').value,
		'napkinA4': document.getElementById('napkinA4').value,
		'teaA4': document.getElementById('teaA4').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacA4').value = savedInputs.bottleTigerBacA4;
		document.getElementById('bottleTigerNauA4').value = savedInputs.bottleTigerNauA4;
		document.getElementById('tigerNauA4').value = savedInputs.tigerNauA4;
		document.getElementById('tigerBacA4').value = savedInputs.tigerBacA4;
		document.getElementById('heinekenA4').value = savedInputs.heinekenA4;
		document.getElementById('sevenUpA4').value = savedInputs.sevenUpA4;
		document.getElementById('cokeA4').value = savedInputs.cokeA4;
		document.getElementById('pepsiA4').value = savedInputs.pepsiA4;
		document.getElementById('stingA4').value = savedInputs.stingA4;
		document.getElementById('waterA4').value = savedInputs.waterA4;
		document.getElementById('teaA4').value = savedInputs.teaA4;
		document.getElementById('napkinA4').value = savedInputs.napkinA4;
	}

	document.getElementById('bottleTigerBacA4').value = '';
	document.getElementById('bottleTigerNauA4').value = '';
	document.getElementById('tigerNauA4').value = '';
	document.getElementById('tigerBacA4').value = '';
	document.getElementById('heinekenA4').value = '';
	document.getElementById('sevenUpA4').value = '';
	document.getElementById('cokeA4').value = '';
	document.getElementById('pepsiA4').value = '';
	document.getElementById('stingA4').value = '';
	document.getElementById('waterA4').value = '';
	document.getElementById('teaA4').value = '';
	document.getElementById('napkinA4').value = '';


	localStorage.removeItem("bottleTigerBacA4");
	localStorage.removeItem("bottleTigerNauA4");
	localStorage.removeItem("tigerNauA4");
	localStorage.removeItem("tigerBacA4");
	localStorage.removeItem("heinekenA4");
	localStorage.removeItem("sevenUpA4");
	localStorage.removeItem("cokeA4");
	localStorage.removeItem("pepsiA4");
	localStorage.removeItem("stingA4");
	localStorage.removeItem("waterA4");
	localStorage.removeItem("teaA4");
	localStorage.removeItem("napkinA4");

}

const inputsA4 = document.querySelectorAll('input[type="number"]');
inputsA4.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnA4 = document.getElementById("addBtnA4");
const newDrinkFormA4 = document.getElementById("newDrinkFormA4");

addBtnA4.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});





//A5
function confirmCalculateA5() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateA5()
	}
}
function calculateA5() {
	const bottleTigerBacA5 = document.getElementById("bottleTigerBacA5").value;
	const bottleTigerNauA5 = document.getElementById("bottleTigerNauA5").value;
	const tigerNauA5 = document.getElementById("tigerNauA5").value;
	const tigerBacA5 = document.getElementById("tigerBacA5").value;
	const heinekenA5 = document.getElementById("heinekenA5").value;
	const sevenUpA5 = document.getElementById("sevenUpA5").value;
	const cokeA5 = document.getElementById("cokeA5").value;
	const pepsiA5 = document.getElementById("pepsiA5").value;
	const stingA5 = document.getElementById("stingA5").value;
	const waterNatureA5 = document.getElementById("waterA5").value;
	const teaA5 = document.getElementById("teaA5").value;
	const napkinA5 = document.getElementById("napkinA5").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacA5 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauA5 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauA5 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacA5 },
		{ name: "Bia Heineken", quantity: heinekenA5 },
		{ name: "Nước 7up", quantity: sevenUpA5 },
		{ name: "Nước CocaCola", quantity: cokeA5 },
		{ name: "Nước pepsi", quantity: pepsiA5 },
		{ name: "Nước Sting", quantity: stingA5 },
		{ name: "Nước suối", quantity: waterNatureA5 },
		{ name: "Trà tắc", quantity: teaA5 },
		{ name: "Khăn giấy", quantity: napkinA5 },
	];

	const selectedProductsA5 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsA5.length; i++) {
		const product = selectedProductsA5[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderA5").innerHTML = bill;


	localStorage.setItem("tigerNauA5", tigerNauA5);
	localStorage.setItem("bottleTigerBacA5", bottleTigerBacA5);
	localStorage.setItem("bottleTigerNauA5", bottleTigerNauA5);
	localStorage.setItem("tigerBacA5", tigerBacA5);
	localStorage.setItem("heinekenA5", heinekenA5);
	localStorage.setItem("sevenUpA5", sevenUpA5);
	localStorage.setItem("cokeA5", cokeA5);
	localStorage.setItem("pepsiA5", pepsiA5)
	localStorage.setItem("stingA5", stingA5);
	localStorage.setItem("waterA5", waterNatureA5);
	localStorage.setItem("teaA5", teaA5);
	localStorage.setItem("napkinA5", napkinA5);

	localStorage.removeItem("bottleTigerBacA5");
	localStorage.removeItem("bottleTigerNauA5");
	localStorage.removeItem("tigerNauA5");
	localStorage.removeItem("tigerBacA5");
	localStorage.removeItem("heinekenA5");
	localStorage.removeItem("sevenUpA5");
	localStorage.removeItem("cokeA5");
	localStorage.removeItem("pepsiA5");
	localStorage.removeItem("stingA5");
	localStorage.removeItem("waterA5");
	localStorage.removeItem("teaA5");
	localStorage.removeItem("napkinA5");

	const totalA5 = (bottleTigerBacA5 * 26000) + (bottleTigerNauA5 * 25000) + (tigerNauA5 * 24000) + (tigerBacA5 * 25000) + (heinekenA5 * 26000) + (sevenUpA5 * 16000) + (cokeA5 * 16000) + (pepsiA5 * 16000) + (waterNatureA5 * 12000) + (stingA5 * 16000) + (teaA5 * 10000) + (napkinA5 * 3000);

	const historyA5 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyA5.push({ time: currentTime, totalA5: totalA5 });
	localStorage.setItem('totalHistory', JSON.stringify(historyA5));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalA5").innerHTML = "Tổng tiền: " + totalA5 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsA5 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsA5.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonA5 = document.getElementById("toggleDrinksA5");
const drinkElementsA5 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonA5.addEventListener("click", () => {
	drinkElementsA5.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonA5.classList.toggle("hidden");
	toggleDrinksButtonA5.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksA5 = localStorage.getItem("showDrinks");

if (showDrinksA5 === "1") {
	drinkElementsA5.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonA5.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonA5.classList.add("hidden");
} else {
	toggleDrinksButtonA5.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryA5() {
	const historyA5 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyA5.map((item, index) => `Lần ${index + 1}: ${item.totalA5} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyA5").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryA5()">Xoá lịch sử</button>';
}
function clearHistoryA5() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyA5").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyA5").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetA5() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllA5();
	}
}
function resetAllA5() {
	let inputs = {
		'bottleTigerBacA5': document.getElementById('bottleTigerBacA5').value,
		'bottleTigerNauA5': document.getElementById('bottleTigerNauA5').value,
		'tigerNauA5': document.getElementById('tigerNauA5').value,
		'tigerBacA5': document.getElementById('tigerBacA5').value,
		'heinekenA5': document.getElementById('heinekenA5').value,
		'sevenUpA5': document.getElementById('sevenUpA5').value,
		'cokeA5': document.getElementById('cokeA5').value,
		'pepsiA5': document.getElementById('pepsiA5').value,
		'stingA5': document.getElementById('stingA5').value,
		'waterNatureA5': document.getElementById('waterA5').value,
		'napkinA5': document.getElementById('napkinA5').value,
		'teaA5': document.getElementById('teaA5').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacA5').value = savedInputs.bottleTigerBacA5;
		document.getElementById('bottleTigerNauA5').value = savedInputs.bottleTigerNauA5;
		document.getElementById('tigerNauA5').value = savedInputs.tigerNauA5;
		document.getElementById('tigerBacA5').value = savedInputs.tigerBacA5;
		document.getElementById('heinekenA5').value = savedInputs.heinekenA5;
		document.getElementById('sevenUpA5').value = savedInputs.sevenUpA5;
		document.getElementById('cokeA5').value = savedInputs.cokeA5;
		document.getElementById('pepsiA5').value = savedInputs.pepsiA5;
		document.getElementById('stingA5').value = savedInputs.stingA5;
		document.getElementById('waterA5').value = savedInputs.waterA5;
		document.getElementById('teaA5').value = savedInputs.teaA5;
		document.getElementById('napkinA5').value = savedInputs.napkinA5;
	}

	document.getElementById('bottleTigerBacA5').value = '';
	document.getElementById('bottleTigerNauA5').value = '';
	document.getElementById('tigerNauA5').value = '';
	document.getElementById('tigerBacA5').value = '';
	document.getElementById('heinekenA5').value = '';
	document.getElementById('sevenUpA5').value = '';
	document.getElementById('cokeA5').value = '';
	document.getElementById('pepsiA5').value = '';
	document.getElementById('stingA5').value = '';
	document.getElementById('waterA5').value = '';
	document.getElementById('teaA5').value = '';
	document.getElementById('napkinA5').value = '';


	localStorage.removeItem("bottleTigerBacA5");
	localStorage.removeItem("bottleTigerNauA5");
	localStorage.removeItem("tigerNauA5");
	localStorage.removeItem("tigerBacA5");
	localStorage.removeItem("heinekenA5");
	localStorage.removeItem("sevenUpA5");
	localStorage.removeItem("cokeA5");
	localStorage.removeItem("pepsiA5");
	localStorage.removeItem("stingA5");
	localStorage.removeItem("waterA5");
	localStorage.removeItem("teaA5");
	localStorage.removeItem("napkinA5");

}

const inputsA5 = document.querySelectorAll('input[type="number"]');
inputsA5.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnA5 = document.getElementById("addBtnA5");
const newDrinkFormA5 = document.getElementById("newDrinkFormA5");

addBtnA5.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});




//A6
function confirmCalculateA6() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateA6()
	}
}
function calculateA6() {
	const bottleTigerBacA6 = document.getElementById("bottleTigerBacA6").value;
	const bottleTigerNauA6 = document.getElementById("bottleTigerNauA6").value;
	const tigerNauA6 = document.getElementById("tigerNauA6").value;
	const tigerBacA6 = document.getElementById("tigerBacA6").value;
	const heinekenA6 = document.getElementById("heinekenA6").value;
	const sevenUpA6 = document.getElementById("sevenUpA6").value;
	const cokeA6 = document.getElementById("cokeA6").value;
	const pepsiA6 = document.getElementById("pepsiA6").value;
	const stingA6 = document.getElementById("stingA6").value;
	const waterNatureA6 = document.getElementById("waterA6").value;
	const teaA6 = document.getElementById("teaA6").value;
	const napkinA6 = document.getElementById("napkinA6").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacA6 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauA6 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauA6 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacA6 },
		{ name: "Bia Heineken", quantity: heinekenA6 },
		{ name: "Nước 7up", quantity: sevenUpA6 },
		{ name: "Nước CocaCola", quantity: cokeA6 },
		{ name: "Nước pepsi", quantity: pepsiA6 },
		{ name: "Nước Sting", quantity: stingA6 },
		{ name: "Nước suối", quantity: waterNatureA6 },
		{ name: "Trà tắc", quantity: teaA6 },
		{ name: "Khăn giấy", quantity: napkinA6 },
	];

	const selectedProductsA6 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsA6.length; i++) {
		const product = selectedProductsA6[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderA6").innerHTML = bill;


	localStorage.setItem("tigerNauA6", tigerNauA6);
	localStorage.setItem("bottleTigerBacA6", bottleTigerBacA6);
	localStorage.setItem("bottleTigerNauA6", bottleTigerNauA6);
	localStorage.setItem("tigerBacA6", tigerBacA6);
	localStorage.setItem("heinekenA6", heinekenA6);
	localStorage.setItem("sevenUpA6", sevenUpA6);
	localStorage.setItem("cokeA6", cokeA6);
	localStorage.setItem("pepsiA6", pepsiA6)
	localStorage.setItem("stingA6", stingA6);
	localStorage.setItem("waterA6", waterNatureA6);
	localStorage.setItem("teaA6", teaA6);
	localStorage.setItem("napkinA6", napkinA6);

	localStorage.removeItem("bottleTigerBacA6");
	localStorage.removeItem("bottleTigerNauA6");
	localStorage.removeItem("tigerNauA6");
	localStorage.removeItem("tigerBacA6");
	localStorage.removeItem("heinekenA6");
	localStorage.removeItem("sevenUpA6");
	localStorage.removeItem("cokeA6");
	localStorage.removeItem("pepsiA6");
	localStorage.removeItem("stingA6");
	localStorage.removeItem("waterA6");
	localStorage.removeItem("teaA6");
	localStorage.removeItem("napkinA6");

	const totalA6 = (bottleTigerBacA6 * 26000) + (bottleTigerNauA6 * 25000) + (tigerNauA6 * 24000) + (tigerBacA6 * 25000) + (heinekenA6 * 26000) + (sevenUpA6 * 16000) + (cokeA6 * 16000) + (pepsiA6 * 16000) + (waterNatureA6 * 12000) + (stingA6 * 16000) + (teaA6 * 10000) + (napkinA6 * 3000);

	const historyA6 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyA6.push({ time: currentTime, totalA6: totalA6 });
	localStorage.setItem('totalHistory', JSON.stringify(historyA6));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalA6").innerHTML = "Tổng tiền: " + totalA6 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsA6 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsA6.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonA6 = document.getElementById("toggleDrinksA6");
const drinkElementsA6 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonA6.addEventListener("click", () => {
	drinkElementsA6.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonA6.classList.toggle("hidden");
	toggleDrinksButtonA6.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksA6 = localStorage.getItem("showDrinks");

if (showDrinksA6 === "1") {
	drinkElementsA6.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonA6.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonA6.classList.add("hidden");
} else {
	toggleDrinksButtonA6.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryA6() {
	const historyA6 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyA6.map((item, index) => `Lần ${index + 1}: ${item.totalA6} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyA6").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryA6()">Xoá lịch sử</button>';
}
function clearHistoryA6() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyA6").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyA6").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetA6() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllA6();
	}
}
function resetAllA6() {
	let inputs = {
		'bottleTigerBacA6': document.getElementById('bottleTigerBacA6').value,
		'bottleTigerNauA6': document.getElementById('bottleTigerNauA6').value,
		'tigerNauA6': document.getElementById('tigerNauA6').value,
		'tigerBacA6': document.getElementById('tigerBacA6').value,
		'heinekenA6': document.getElementById('heinekenA6').value,
		'sevenUpA6': document.getElementById('sevenUpA6').value,
		'cokeA6': document.getElementById('cokeA6').value,
		'pepsiA6': document.getElementById('pepsiA6').value,
		'stingA6': document.getElementById('stingA6').value,
		'waterNatureA6': document.getElementById('waterA6').value,
		'napkinA6': document.getElementById('napkinA6').value,
		'teaA6': document.getElementById('teaA6').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacA6').value = savedInputs.bottleTigerBacA6;
		document.getElementById('bottleTigerNauA6').value = savedInputs.bottleTigerNauA6;
		document.getElementById('tigerNauA6').value = savedInputs.tigerNauA6;
		document.getElementById('tigerBacA6').value = savedInputs.tigerBacA6;
		document.getElementById('heinekenA6').value = savedInputs.heinekenA6;
		document.getElementById('sevenUpA6').value = savedInputs.sevenUpA6;
		document.getElementById('cokeA6').value = savedInputs.cokeA6;
		document.getElementById('pepsiA6').value = savedInputs.pepsiA6;
		document.getElementById('stingA6').value = savedInputs.stingA6;
		document.getElementById('waterA6').value = savedInputs.waterA6;
		document.getElementById('teaA6').value = savedInputs.teaA6;
		document.getElementById('napkinA6').value = savedInputs.napkinA6;
	}

	document.getElementById('bottleTigerBacA6').value = '';
	document.getElementById('bottleTigerNauA6').value = '';
	document.getElementById('tigerNauA6').value = '';
	document.getElementById('tigerBacA6').value = '';
	document.getElementById('heinekenA6').value = '';
	document.getElementById('sevenUpA6').value = '';
	document.getElementById('cokeA6').value = '';
	document.getElementById('pepsiA6').value = '';
	document.getElementById('stingA6').value = '';
	document.getElementById('waterA6').value = '';
	document.getElementById('teaA6').value = '';
	document.getElementById('napkinA6').value = '';


	localStorage.removeItem("bottleTigerBacA6");
	localStorage.removeItem("bottleTigerNauA6");
	localStorage.removeItem("tigerNauA6");
	localStorage.removeItem("tigerBacA6");
	localStorage.removeItem("heinekenA6");
	localStorage.removeItem("sevenUpA6");
	localStorage.removeItem("cokeA6");
	localStorage.removeItem("pepsiA6");
	localStorage.removeItem("stingA6");
	localStorage.removeItem("waterA6");
	localStorage.removeItem("teaA6");
	localStorage.removeItem("napkinA6");

}

const inputsA6 = document.querySelectorAll('input[type="number"]');
inputsA6.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnA6 = document.getElementById("addBtnA6");
const newDrinkFormA6 = document.getElementById("newDrinkFormA6");

addBtnA6.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});



//A7
function confirmCalculateA7() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateA7()
	}
}
function calculateA7() {
	const bottleTigerBacA7 = document.getElementById("bottleTigerBacA7").value;
	const bottleTigerNauA7 = document.getElementById("bottleTigerNauA7").value;
	const tigerNauA7 = document.getElementById("tigerNauA7").value;
	const tigerBacA7 = document.getElementById("tigerBacA7").value;
	const heinekenA7 = document.getElementById("heinekenA7").value;
	const sevenUpA7 = document.getElementById("sevenUpA7").value;
	const cokeA7 = document.getElementById("cokeA7").value;
	const pepsiA7 = document.getElementById("pepsiA7").value;
	const stingA7 = document.getElementById("stingA7").value;
	const waterNatureA7 = document.getElementById("waterA7").value;
	const teaA7 = document.getElementById("teaA7").value;
	const napkinA7 = document.getElementById("napkinA7").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacA7 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauA7 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauA7 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacA7 },
		{ name: "Bia Heineken", quantity: heinekenA7 },
		{ name: "Nước 7up", quantity: sevenUpA7 },
		{ name: "Nước CocaCola", quantity: cokeA7 },
		{ name: "Nước pepsi", quantity: pepsiA7 },
		{ name: "Nước Sting", quantity: stingA7 },
		{ name: "Nước suối", quantity: waterNatureA7 },
		{ name: "Trà tắc", quantity: teaA7 },
		{ name: "Khăn giấy", quantity: napkinA7 },
	];

	const selectedProductsA7 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsA7.length; i++) {
		const product = selectedProductsA7[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderA7").innerHTML = bill;


	localStorage.setItem("tigerNauA7", tigerNauA7);
	localStorage.setItem("bottleTigerBacA7", bottleTigerBacA7);
	localStorage.setItem("bottleTigerNauA7", bottleTigerNauA7);
	localStorage.setItem("tigerBacA7", tigerBacA7);
	localStorage.setItem("heinekenA7", heinekenA7);
	localStorage.setItem("sevenUpA7", sevenUpA7);
	localStorage.setItem("cokeA7", cokeA7);
	localStorage.setItem("pepsiA7", pepsiA7)
	localStorage.setItem("stingA7", stingA7);
	localStorage.setItem("waterA7", waterNatureA7);
	localStorage.setItem("teaA7", teaA7);
	localStorage.setItem("napkinA7", napkinA7);

	localStorage.removeItem("bottleTigerBacA7");
	localStorage.removeItem("bottleTigerNauA7");
	localStorage.removeItem("tigerNauA7");
	localStorage.removeItem("tigerBacA7");
	localStorage.removeItem("heinekenA7");
	localStorage.removeItem("sevenUpA7");
	localStorage.removeItem("cokeA7");
	localStorage.removeItem("pepsiA7");
	localStorage.removeItem("stingA7");
	localStorage.removeItem("waterA7");
	localStorage.removeItem("teaA7");
	localStorage.removeItem("napkinA7");

	const totalA7 = (bottleTigerBacA7 * 26000) + (bottleTigerNauA7 * 25000) + (tigerNauA7 * 24000) + (tigerBacA7 * 25000) + (heinekenA7 * 26000) + (sevenUpA7 * 16000) + (cokeA7 * 16000) + (pepsiA7 * 16000) + (waterNatureA7 * 12000) + (stingA7 * 16000) + (teaA7 * 10000) + (napkinA7 * 3000);

	const historyA7 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyA7.push({ time: currentTime, totalA7: totalA7 });
	localStorage.setItem('totalHistory', JSON.stringify(historyA7));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalA7").innerHTML = "Tổng tiền: " + totalA7 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsA7 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsA7.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonA7 = document.getElementById("toggleDrinksA7");
const drinkElementsA7 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonA7.addEventListener("click", () => {
	drinkElementsA7.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonA7.classList.toggle("hidden");
	toggleDrinksButtonA7.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksA7 = localStorage.getItem("showDrinks");

if (showDrinksA7 === "1") {
	drinkElementsA7.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonA7.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonA7.classList.add("hidden");
} else {
	toggleDrinksButtonA7.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryA7() {
	const historyA7 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyA7.map((item, index) => `Lần ${index + 1}: ${item.totalA7} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyA7").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryA7()">Xoá lịch sử</button>';
}
function clearHistoryA7() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyA7").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyA7").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetA7() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllA7();
	}
}
function resetAllA7() {
	let inputs = {
		'bottleTigerBacA7': document.getElementById('bottleTigerBacA7').value,
		'bottleTigerNauA7': document.getElementById('bottleTigerNauA7').value,
		'tigerNauA7': document.getElementById('tigerNauA7').value,
		'tigerBacA7': document.getElementById('tigerBacA7').value,
		'heinekenA7': document.getElementById('heinekenA7').value,
		'sevenUpA7': document.getElementById('sevenUpA7').value,
		'cokeA7': document.getElementById('cokeA7').value,
		'pepsiA7': document.getElementById('pepsiA7').value,
		'stingA7': document.getElementById('stingA7').value,
		'waterNatureA7': document.getElementById('waterA7').value,
		'napkinA7': document.getElementById('napkinA7').value,
		'teaA7': document.getElementById('teaA7').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacA7').value = savedInputs.bottleTigerBacA7;
		document.getElementById('bottleTigerNauA7').value = savedInputs.bottleTigerNauA7;
		document.getElementById('tigerNauA7').value = savedInputs.tigerNauA7;
		document.getElementById('tigerBacA7').value = savedInputs.tigerBacA7;
		document.getElementById('heinekenA7').value = savedInputs.heinekenA7;
		document.getElementById('sevenUpA7').value = savedInputs.sevenUpA7;
		document.getElementById('cokeA7').value = savedInputs.cokeA7;
		document.getElementById('pepsiA7').value = savedInputs.pepsiA7;
		document.getElementById('stingA7').value = savedInputs.stingA7;
		document.getElementById('waterA7').value = savedInputs.waterA7;
		document.getElementById('teaA7').value = savedInputs.teaA7;
		document.getElementById('napkinA7').value = savedInputs.napkinA7;
	}

	document.getElementById('bottleTigerBacA7').value = '';
	document.getElementById('bottleTigerNauA7').value = '';
	document.getElementById('tigerNauA7').value = '';
	document.getElementById('tigerBacA7').value = '';
	document.getElementById('heinekenA7').value = '';
	document.getElementById('sevenUpA7').value = '';
	document.getElementById('cokeA7').value = '';
	document.getElementById('pepsiA7').value = '';
	document.getElementById('stingA7').value = '';
	document.getElementById('waterA7').value = '';
	document.getElementById('teaA7').value = '';
	document.getElementById('napkinA7').value = '';


	localStorage.removeItem("bottleTigerBacA7");
	localStorage.removeItem("bottleTigerNauA7");
	localStorage.removeItem("tigerNauA7");
	localStorage.removeItem("tigerBacA7");
	localStorage.removeItem("heinekenA7");
	localStorage.removeItem("sevenUpA7");
	localStorage.removeItem("cokeA7");
	localStorage.removeItem("pepsiA7");
	localStorage.removeItem("stingA7");
	localStorage.removeItem("waterA7");
	localStorage.removeItem("teaA7");
	localStorage.removeItem("napkinA7");

}

const inputsA7 = document.querySelectorAll('input[type="number"]');
inputsA7.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnA7 = document.getElementById("addBtnA7");
const newDrinkFormA7 = document.getElementById("newDrinkFormA7");

addBtnA7.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});



//B1/1

//B1/1
function confirmCalculateB11() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateB11()
	}
}
function calculateB11() {
	const bottleTigerBacB11 = document.getElementById("bottleTigerBacB11").value;
	const bottleTigerNauB11 = document.getElementById("bottleTigerNauB11").value;
	const tigerNauB11 = document.getElementById("tigerNauB11").value;
	const tigerBacB11 = document.getElementById("tigerBacB11").value;
	const heinekenB11 = document.getElementById("heinekenB11").value;
	const sevenUpB11 = document.getElementById("sevenUpB11").value;
	const cokeB11 = document.getElementById("cokeB11").value;
	const pepsiB11 = document.getElementById("pepsiB11").value;
	const stingB11 = document.getElementById("stingB11").value;
	const waterNatureB11 = document.getElementById("waterB11").value;
	const teaB11 = document.getElementById("teaB11").value;
	const napkinB11 = document.getElementById("napkinB11").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacB11 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauB11 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauB11 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacB11 },
		{ name: "Bia Heineken", quantity: heinekenB11 },
		{ name: "Nước 7up", quantity: sevenUpB11 },
		{ name: "Nước CocaCola", quantity: cokeB11 },
		{ name: "Nước pepsi", quantity: pepsiB11 },
		{ name: "Nước Sting", quantity: stingB11 },
		{ name: "Nước suối", quantity: waterNatureB11 },
		{ name: "Trà tắc", quantity: teaB11 },
		{ name: "Khăn giấy", quantity: napkinB11 },
	];

	const selectedProductsB11 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsB11.length; i++) {
		const product = selectedProductsB11[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderB11").innerHTML = bill;


	localStorage.setItem("tigerNauB11", tigerNauB11);
	localStorage.setItem("bottleTigerBacB11", bottleTigerBacB11);
	localStorage.setItem("bottleTigerNauB11", bottleTigerNauB11);
	localStorage.setItem("tigerBacB11", tigerBacB11);
	localStorage.setItem("heinekenB11", heinekenB11);
	localStorage.setItem("sevenUpB11", sevenUpB11);
	localStorage.setItem("cokeB11", cokeB11);
	localStorage.setItem("pepsiB11", pepsiB11)
	localStorage.setItem("stingB11", stingB11);
	localStorage.setItem("waterB11", waterNatureB11);
	localStorage.setItem("teaB11", teaB11);
	localStorage.setItem("napkinB11", napkinB11);

	localStorage.removeItem("bottleTigerBacB11");
	localStorage.removeItem("bottleTigerNauB11");
	localStorage.removeItem("tigerNauB11");
	localStorage.removeItem("tigerBacB11");
	localStorage.removeItem("heinekenB11");
	localStorage.removeItem("sevenUpB11");
	localStorage.removeItem("cokeB11");
	localStorage.removeItem("pepsiB11");
	localStorage.removeItem("stingB11");
	localStorage.removeItem("waterB11");
	localStorage.removeItem("teaB11");
	localStorage.removeItem("napkinB11");

	const totalB11 = (bottleTigerBacB11 * 26000) + (bottleTigerNauB11 * 25000) + (tigerNauB11 * 24000) + (tigerBacB11 * 25000) + (heinekenB11 * 26000) + (sevenUpB11 * 16000) + (cokeB11 * 16000) + (pepsiB11 * 16000) + (waterNatureB11 * 12000) + (stingB11 * 16000) + (teaB11 * 10000) + (napkinB11 * 3000);

	const historyB11 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyB11.push({ time: currentTime, totalB11: totalB11 });
	localStorage.setItem('totalHistory', JSON.stringify(historyB11));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalB11").innerHTML = "Tổng tiền: " + totalB11 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsB11 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsB11.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonB11 = document.getElementById("toggleDrinksB11");
const drinkElementsB11 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonB11.addEventListener("click", () => {
	drinkElementsB11.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonB11.classList.toggle("hidden");
	toggleDrinksButtonB11.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksB11 = localStorage.getItem("showDrinks");

if (showDrinksB11 === "1") {
	drinkElementsB11.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonB11.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonB11.classList.add("hidden");
} else {
	toggleDrinksButtonB11.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryB11() {
	const historyB11 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyB11.map((item, index) => `Lần ${index + 1}: ${item.totalB11} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyB11").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryB11()">Xoá lịch sử</button>';
}
function clearHistoryB11() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyB11").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyB11").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetB11() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllB11();
	}
}
function resetAllB11() {
	let inputs = {
		'bottleTigerBacB11': document.getElementById('bottleTigerBacB11').value,
		'bottleTigerNauB11': document.getElementById('bottleTigerNauB11').value,
		'tigerNauB11': document.getElementById('tigerNauB11').value,
		'tigerBacB11': document.getElementById('tigerBacB11').value,
		'heinekenB11': document.getElementById('heinekenB11').value,
		'sevenUpB11': document.getElementById('sevenUpB11').value,
		'cokeB11': document.getElementById('cokeB11').value,
		'pepsiB11': document.getElementById('pepsiB11').value,
		'stingB11': document.getElementById('stingB11').value,
		'waterNatureB11': document.getElementById('waterB11').value,
		'napkinB11': document.getElementById('napkinB11').value,
		'teaB11': document.getElementById('teaB11').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacB11').value = savedInputs.bottleTigerBacB11;
		document.getElementById('bottleTigerNauB11').value = savedInputs.bottleTigerNauB11;
		document.getElementById('tigerNauB11').value = savedInputs.tigerNauB11;
		document.getElementById('tigerBacB11').value = savedInputs.tigerBacB11;
		document.getElementById('heinekenB11').value = savedInputs.heinekenB11;
		document.getElementById('sevenUpB11').value = savedInputs.sevenUpB11;
		document.getElementById('cokeB11').value = savedInputs.cokeB11;
		document.getElementById('pepsiB11').value = savedInputs.pepsiB11;
		document.getElementById('stingB11').value = savedInputs.stingB11;
		document.getElementById('waterB11').value = savedInputs.waterB11;
		document.getElementById('teaB11').value = savedInputs.teaB11;
		document.getElementById('napkinB11').value = savedInputs.napkinB11;
	}

	document.getElementById('bottleTigerBacB11').value = '';
	document.getElementById('bottleTigerNauB11').value = '';
	document.getElementById('tigerNauB11').value = '';
	document.getElementById('tigerBacB11').value = '';
	document.getElementById('heinekenB11').value = '';
	document.getElementById('sevenUpB11').value = '';
	document.getElementById('cokeB11').value = '';
	document.getElementById('pepsiB11').value = '';
	document.getElementById('stingB11').value = '';
	document.getElementById('waterB11').value = '';
	document.getElementById('teaB11').value = '';
	document.getElementById('napkinB11').value = '';


	localStorage.removeItem("bottleTigerBacB11");
	localStorage.removeItem("bottleTigerNauB11");
	localStorage.removeItem("tigerNauB11");
	localStorage.removeItem("tigerBacB11");
	localStorage.removeItem("heinekenB11");
	localStorage.removeItem("sevenUpB11");
	localStorage.removeItem("cokeB11");
	localStorage.removeItem("pepsiB11");
	localStorage.removeItem("stingB11");
	localStorage.removeItem("waterB11");
	localStorage.removeItem("teaB11");
	localStorage.removeItem("napkinB11");

}

const inputsB11 = document.querySelectorAll('input[type="number"]');
inputsB11.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnB11 = document.getElementById("addBtnB11");
const newDrinkFormB11 = document.getElementById("newDrinkFormB11");

addBtnB11.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});



//B1/2

function confirmCalculateB12() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateB12()
	}
}
function calculateB12() {
	const bottleTigerBacB12 = document.getElementById("bottleTigerBacB12").value;
	const bottleTigerNauB12 = document.getElementById("bottleTigerNauB12").value;
	const tigerNauB12 = document.getElementById("tigerNauB12").value;
	const tigerBacB12 = document.getElementById("tigerBacB12").value;
	const heinekenB12 = document.getElementById("heinekenB12").value;
	const sevenUpB12 = document.getElementById("sevenUpB12").value;
	const cokeB12 = document.getElementById("cokeB12").value;
	const pepsiB12 = document.getElementById("pepsiB12").value;
	const stingB12 = document.getElementById("stingB12").value;
	const waterNatureB12 = document.getElementById("waterB12").value;
	const teaB12 = document.getElementById("teaB12").value;
	const napkinB12 = document.getElementById("napkinB12").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacB12 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauB12 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauB12 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacB12 },
		{ name: "Bia Heineken", quantity: heinekenB12 },
		{ name: "Nước 7up", quantity: sevenUpB12 },
		{ name: "Nước CocaCola", quantity: cokeB12 },
		{ name: "Nước pepsi", quantity: pepsiB12 },
		{ name: "Nước Sting", quantity: stingB12 },
		{ name: "Nước suối", quantity: waterNatureB12 },
		{ name: "Trà tắc", quantity: teaB12 },
		{ name: "Khăn giấy", quantity: napkinB12 },
	];

	const selectedProductsB12 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsB12.length; i++) {
		const product = selectedProductsB12[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderB12").innerHTML = bill;


	localStorage.setItem("tigerNauB12", tigerNauB12);
	localStorage.setItem("bottleTigerBacB12", bottleTigerBacB12);
	localStorage.setItem("bottleTigerNauB12", bottleTigerNauB12);
	localStorage.setItem("tigerBacB12", tigerBacB12);
	localStorage.setItem("heinekenB12", heinekenB12);
	localStorage.setItem("sevenUpB12", sevenUpB12);
	localStorage.setItem("cokeB12", cokeB12);
	localStorage.setItem("pepsiB12", pepsiB12)
	localStorage.setItem("stingB12", stingB12);
	localStorage.setItem("waterB12", waterNatureB12);
	localStorage.setItem("teaB12", teaB12);
	localStorage.setItem("napkinB12", napkinB12);

	localStorage.removeItem("bottleTigerBacB12");
	localStorage.removeItem("bottleTigerNauB12");
	localStorage.removeItem("tigerNauB12");
	localStorage.removeItem("tigerBacB12");
	localStorage.removeItem("heinekenB12");
	localStorage.removeItem("sevenUpB12");
	localStorage.removeItem("cokeB12");
	localStorage.removeItem("pepsiB12");
	localStorage.removeItem("stingB12");
	localStorage.removeItem("waterB12");
	localStorage.removeItem("teaB12");
	localStorage.removeItem("napkinB12");

	const totalB12 = (bottleTigerBacB12 * 26000) + (bottleTigerNauB12 * 25000) + (tigerNauB12 * 24000) + (tigerBacB12 * 25000) + (heinekenB12 * 26000) + (sevenUpB12 * 16000) + (cokeB12 * 16000) + (pepsiB12 * 16000) + (waterNatureB12 * 12000) + (stingB12 * 16000) + (teaB12 * 10000) + (napkinB12 * 3000);

	const historyB12 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyB12.push({ time: currentTime, totalB12: totalB12 });
	localStorage.setItem('totalHistory', JSON.stringify(historyB12));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalB12").innerHTML = "Tổng tiền: " + totalB12 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsB12 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsB12.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonB12 = document.getElementById("toggleDrinksB12");
const drinkElementsB12 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonB12.addEventListener("click", () => {
	drinkElementsB12.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonB12.classList.toggle("hidden");
	toggleDrinksButtonB12.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksB12 = localStorage.getItem("showDrinks");

if (showDrinksB12 === "1") {
	drinkElementsB12.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonB12.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonB12.classList.add("hidden");
} else {
	toggleDrinksButtonB12.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryB12() {
	const historyB12 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyB12.map((item, index) => `Lần ${index + 1}: ${item.totalB12} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyB12").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryB12()">Xoá lịch sử</button>';
}
function clearHistoryB12() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyB12").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyB12").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetB12() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllB12();
	}
}
function resetAllB12() {
	let inputs = {
		'bottleTigerBacB12': document.getElementById('bottleTigerBacB12').value,
		'bottleTigerNauB12': document.getElementById('bottleTigerNauB12').value,
		'tigerNauB12': document.getElementById('tigerNauB12').value,
		'tigerBacB12': document.getElementById('tigerBacB12').value,
		'heinekenB12': document.getElementById('heinekenB12').value,
		'sevenUpB12': document.getElementById('sevenUpB12').value,
		'cokeB12': document.getElementById('cokeB12').value,
		'pepsiB12': document.getElementById('pepsiB12').value,
		'stingB12': document.getElementById('stingB12').value,
		'waterNatureB12': document.getElementById('waterB12').value,
		'napkinB12': document.getElementById('napkinB12').value,
		'teaB12': document.getElementById('teaB12').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacB12').value = savedInputs.bottleTigerBacB12;
		document.getElementById('bottleTigerNauB12').value = savedInputs.bottleTigerNauB12;
		document.getElementById('tigerNauB12').value = savedInputs.tigerNauB12;
		document.getElementById('tigerBacB12').value = savedInputs.tigerBacB12;
		document.getElementById('heinekenB12').value = savedInputs.heinekenB12;
		document.getElementById('sevenUpB12').value = savedInputs.sevenUpB12;
		document.getElementById('cokeB12').value = savedInputs.cokeB12;
		document.getElementById('pepsiB12').value = savedInputs.pepsiB12;
		document.getElementById('stingB12').value = savedInputs.stingB12;
		document.getElementById('waterB12').value = savedInputs.waterB12;
		document.getElementById('teaB12').value = savedInputs.teaB12;
		document.getElementById('napkinB12').value = savedInputs.napkinB12;
	}

	document.getElementById('bottleTigerBacB12').value = '';
	document.getElementById('bottleTigerNauB12').value = '';
	document.getElementById('tigerNauB12').value = '';
	document.getElementById('tigerBacB12').value = '';
	document.getElementById('heinekenB12').value = '';
	document.getElementById('sevenUpB12').value = '';
	document.getElementById('cokeB12').value = '';
	document.getElementById('pepsiB12').value = '';
	document.getElementById('stingB12').value = '';
	document.getElementById('waterB12').value = '';
	document.getElementById('teaB12').value = '';
	document.getElementById('napkinB12').value = '';


	localStorage.removeItem("bottleTigerBacB12");
	localStorage.removeItem("bottleTigerNauB12");
	localStorage.removeItem("tigerNauB12");
	localStorage.removeItem("tigerBacB12");
	localStorage.removeItem("heinekenB12");
	localStorage.removeItem("sevenUpB12");
	localStorage.removeItem("cokeB12");
	localStorage.removeItem("pepsiB12");
	localStorage.removeItem("stingB12");
	localStorage.removeItem("waterB12");
	localStorage.removeItem("teaB12");
	localStorage.removeItem("napkinB12");

}

const inputsB12 = document.querySelectorAll('input[type="number"]');
inputsB12.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnB12 = document.getElementById("addBtnB12");
const newDrinkFormB12 = document.getElementById("newDrinkFormB12");

addBtnB12.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});



//b1/3
function confirmCalculateB13() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateB13()
	}
}
function calculateB13() {
	const bottleTigerBacB13 = document.getElementById("bottleTigerBacB13").value;
	const bottleTigerNauB13 = document.getElementById("bottleTigerNauB13").value;
	const tigerNauB13 = document.getElementById("tigerNauB13").value;
	const tigerBacB13 = document.getElementById("tigerBacB13").value;
	const heinekenB13 = document.getElementById("heinekenB13").value;
	const sevenUpB13 = document.getElementById("sevenUpB13").value;
	const cokeB13 = document.getElementById("cokeB13").value;
	const pepsiB13 = document.getElementById("pepsiB13").value;
	const stingB13 = document.getElementById("stingB13").value;
	const waterNatureB13 = document.getElementById("waterB13").value;
	const teaB13 = document.getElementById("teaB13").value;
	const napkinB13 = document.getElementById("napkinB13").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacB13 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauB13 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauB13 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacB13 },
		{ name: "Bia Heineken", quantity: heinekenB13 },
		{ name: "Nước 7up", quantity: sevenUpB13 },
		{ name: "Nước CocaCola", quantity: cokeB13 },
		{ name: "Nước pepsi", quantity: pepsiB13 },
		{ name: "Nước Sting", quantity: stingB13 },
		{ name: "Nước suối", quantity: waterNatureB13 },
		{ name: "Trà tắc", quantity: teaB13 },
		{ name: "Khăn giấy", quantity: napkinB13 },
	];

	const selectedProductsB13 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsB13.length; i++) {
		const product = selectedProductsB13[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderB13").innerHTML = bill;


	localStorage.setItem("tigerNauB13", tigerNauB13);
	localStorage.setItem("bottleTigerBacB13", bottleTigerBacB13);
	localStorage.setItem("bottleTigerNauB13", bottleTigerNauB13);
	localStorage.setItem("tigerBacB13", tigerBacB13);
	localStorage.setItem("heinekenB13", heinekenB13);
	localStorage.setItem("sevenUpB13", sevenUpB13);
	localStorage.setItem("cokeB13", cokeB13);
	localStorage.setItem("pepsiB13", pepsiB13)
	localStorage.setItem("stingB13", stingB13);
	localStorage.setItem("waterB13", waterNatureB13);
	localStorage.setItem("teaB13", teaB13);
	localStorage.setItem("napkinB13", napkinB13);

	localStorage.removeItem("bottleTigerBacB13");
	localStorage.removeItem("bottleTigerNauB13");
	localStorage.removeItem("tigerNauB13");
	localStorage.removeItem("tigerBacB13");
	localStorage.removeItem("heinekenB13");
	localStorage.removeItem("sevenUpB13");
	localStorage.removeItem("cokeB13");
	localStorage.removeItem("pepsiB13");
	localStorage.removeItem("stingB13");
	localStorage.removeItem("waterB13");
	localStorage.removeItem("teaB13");
	localStorage.removeItem("napkinB13");

	const totalB13 = (bottleTigerBacB13 * 26000) + (bottleTigerNauB13 * 25000) + (tigerNauB13 * 24000) + (tigerBacB13 * 25000) + (heinekenB13 * 26000) + (sevenUpB13 * 16000) + (cokeB13 * 16000) + (pepsiB13 * 16000) + (waterNatureB13 * 12000) + (stingB13 * 16000) + (teaB13 * 10000) + (napkinB13 * 3000);

	const historyB13 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyB13.push({ time: currentTime, totalB13: totalB13 });
	localStorage.setItem('totalHistory', JSON.stringify(historyB13));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalB13").innerHTML = "Tổng tiền: " + totalB13 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsB13 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsB13.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonB13 = document.getElementById("toggleDrinksB13");
const drinkElementsB13 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonB13.addEventListener("click", () => {
	drinkElementsB13.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonB13.classList.toggle("hidden");
	toggleDrinksButtonB13.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksB13 = localStorage.getItem("showDrinks");

if (showDrinksB13 === "1") {
	drinkElementsB13.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonB13.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonB13.classList.add("hidden");
} else {
	toggleDrinksButtonB13.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryB13() {
	const historyB13 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyB13.map((item, index) => `Lần ${index + 1}: ${item.totalB13} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyB13").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryB13()">Xoá lịch sử</button>';
}
function clearHistoryB13() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyB13").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyB13").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetB13() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllB13();
	}
}
function resetAllB13() {
	let inputs = {
		'bottleTigerBacB13': document.getElementById('bottleTigerBacB13').value,
		'bottleTigerNauB13': document.getElementById('bottleTigerNauB13').value,
		'tigerNauB13': document.getElementById('tigerNauB13').value,
		'tigerBacB13': document.getElementById('tigerBacB13').value,
		'heinekenB13': document.getElementById('heinekenB13').value,
		'sevenUpB13': document.getElementById('sevenUpB13').value,
		'cokeB13': document.getElementById('cokeB13').value,
		'pepsiB13': document.getElementById('pepsiB13').value,
		'stingB13': document.getElementById('stingB13').value,
		'waterNatureB13': document.getElementById('waterB13').value,
		'napkinB13': document.getElementById('napkinB13').value,
		'teaB13': document.getElementById('teaB13').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacB13').value = savedInputs.bottleTigerBacB13;
		document.getElementById('bottleTigerNauB13').value = savedInputs.bottleTigerNauB13;
		document.getElementById('tigerNauB13').value = savedInputs.tigerNauB13;
		document.getElementById('tigerBacB13').value = savedInputs.tigerBacB13;
		document.getElementById('heinekenB13').value = savedInputs.heinekenB13;
		document.getElementById('sevenUpB13').value = savedInputs.sevenUpB13;
		document.getElementById('cokeB13').value = savedInputs.cokeB13;
		document.getElementById('pepsiB13').value = savedInputs.pepsiB13;
		document.getElementById('stingB13').value = savedInputs.stingB13;
		document.getElementById('waterB13').value = savedInputs.waterB13;
		document.getElementById('teaB13').value = savedInputs.teaB13;
		document.getElementById('napkinB13').value = savedInputs.napkinB13;
	}

	document.getElementById('bottleTigerBacB13').value = '';
	document.getElementById('bottleTigerNauB13').value = '';
	document.getElementById('tigerNauB13').value = '';
	document.getElementById('tigerBacB13').value = '';
	document.getElementById('heinekenB13').value = '';
	document.getElementById('sevenUpB13').value = '';
	document.getElementById('cokeB13').value = '';
	document.getElementById('pepsiB13').value = '';
	document.getElementById('stingB13').value = '';
	document.getElementById('waterB13').value = '';
	document.getElementById('teaB13').value = '';
	document.getElementById('napkinB13').value = '';


	localStorage.removeItem("bottleTigerBacB13");
	localStorage.removeItem("bottleTigerNauB13");
	localStorage.removeItem("tigerNauB13");
	localStorage.removeItem("tigerBacB13");
	localStorage.removeItem("heinekenB13");
	localStorage.removeItem("sevenUpB13");
	localStorage.removeItem("cokeB13");
	localStorage.removeItem("pepsiB13");
	localStorage.removeItem("stingB13");
	localStorage.removeItem("waterB13");
	localStorage.removeItem("teaB13");
	localStorage.removeItem("napkinB13");

}

const inputsB13 = document.querySelectorAll('input[type="number"]');
inputsB13.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnB13 = document.getElementById("addBtnB13");
const newDrinkFormB13 = document.getElementById("newDrinkFormB13");

addBtnB13.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});



//B2/3
function confirmCalculateB23() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateB23()
	}
}
function calculateB23() {
	const bottleTigerBacB23 = document.getElementById("bottleTigerBacB23").value;
	const bottleTigerNauB23 = document.getElementById("bottleTigerNauB23").value;
	const tigerNauB23 = document.getElementById("tigerNauB23").value;
	const tigerBacB23 = document.getElementById("tigerBacB23").value;
	const heinekenB23 = document.getElementById("heinekenB23").value;
	const sevenUpB23 = document.getElementById("sevenUpB23").value;
	const cokeB23 = document.getElementById("cokeB23").value;
	const pepsiB23 = document.getElementById("pepsiB23").value;
	const stingB23 = document.getElementById("stingB23").value;
	const waterNatureB23 = document.getElementById("waterB23").value;
	const teaB23 = document.getElementById("teaB23").value;
	const napkinB23 = document.getElementById("napkinB23").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacB23 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauB23 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauB23 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacB23 },
		{ name: "Bia Heineken", quantity: heinekenB23 },
		{ name: "Nước 7up", quantity: sevenUpB23 },
		{ name: "Nước CocaCola", quantity: cokeB23 },
		{ name: "Nước pepsi", quantity: pepsiB23 },
		{ name: "Nước Sting", quantity: stingB23 },
		{ name: "Nước suối", quantity: waterNatureB23 },
		{ name: "Trà tắc", quantity: teaB23 },
		{ name: "Khăn giấy", quantity: napkinB23 },
	];

	const selectedProductsB23 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsB23.length; i++) {
		const product = selectedProductsB23[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderB23").innerHTML = bill;


	localStorage.setItem("tigerNauB23", tigerNauB23);
	localStorage.setItem("bottleTigerBacB23", bottleTigerBacB23);
	localStorage.setItem("bottleTigerNauB23", bottleTigerNauB23);
	localStorage.setItem("tigerBacB23", tigerBacB23);
	localStorage.setItem("heinekenB23", heinekenB23);
	localStorage.setItem("sevenUpB23", sevenUpB23);
	localStorage.setItem("cokeB23", cokeB23);
	localStorage.setItem("pepsiB23", pepsiB23)
	localStorage.setItem("stingB23", stingB23);
	localStorage.setItem("waterB23", waterNatureB23);
	localStorage.setItem("teaB23", teaB23);
	localStorage.setItem("napkinB23", napkinB23);

	localStorage.removeItem("bottleTigerBacB23");
	localStorage.removeItem("bottleTigerNauB23");
	localStorage.removeItem("tigerNauB23");
	localStorage.removeItem("tigerBacB23");
	localStorage.removeItem("heinekenB23");
	localStorage.removeItem("sevenUpB23");
	localStorage.removeItem("cokeB23");
	localStorage.removeItem("pepsiB23");
	localStorage.removeItem("stingB23");
	localStorage.removeItem("waterB23");
	localStorage.removeItem("teaB23");
	localStorage.removeItem("napkinB23");

	const totalB23 = (bottleTigerBacB23 * 26000) + (bottleTigerNauB23 * 25000) + (tigerNauB23 * 24000) + (tigerBacB23 * 25000) + (heinekenB23 * 26000) + (sevenUpB23 * 16000) + (cokeB23 * 16000) + (pepsiB23 * 16000) + (waterNatureB23 * 12000) + (stingB23 * 16000) + (teaB23 * 10000) + (napkinB23 * 3000);

	const historyB23 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyB23.push({ time: currentTime, totalB23: totalB23 });
	localStorage.setItem('totalHistory', JSON.stringify(historyB23));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalB23").innerHTML = "Tổng tiền: " + totalB23 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsB23 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsB23.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonB23 = document.getElementById("toggleDrinksB23");
const drinkElementsB23 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonB23.addEventListener("click", () => {
	drinkElementsB23.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonB23.classList.toggle("hidden");
	toggleDrinksButtonB23.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksB23 = localStorage.getItem("showDrinks");

if (showDrinksB23 === "1") {
	drinkElementsB23.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonB23.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonB23.classList.add("hidden");
} else {
	toggleDrinksButtonB23.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryB23() {
	const historyB23 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyB23.map((item, index) => `Lần ${index + 1}: ${item.totalB23} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyB23").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryB23()">Xoá lịch sử</button>';
}
function clearHistoryB23() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyB23").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyB23").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetB23() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllB23();
	}
}
function resetAllB23() {
	let inputs = {
		'bottleTigerBacB23': document.getElementById('bottleTigerBacB23').value,
		'bottleTigerNauB23': document.getElementById('bottleTigerNauB23').value,
		'tigerNauB23': document.getElementById('tigerNauB23').value,
		'tigerBacB23': document.getElementById('tigerBacB23').value,
		'heinekenB23': document.getElementById('heinekenB23').value,
		'sevenUpB23': document.getElementById('sevenUpB23').value,
		'cokeB23': document.getElementById('cokeB23').value,
		'pepsiB23': document.getElementById('pepsiB23').value,
		'stingB23': document.getElementById('stingB23').value,
		'waterNatureB23': document.getElementById('waterB23').value,
		'napkinB23': document.getElementById('napkinB23').value,
		'teaB23': document.getElementById('teaB23').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacB23').value = savedInputs.bottleTigerBacB23;
		document.getElementById('bottleTigerNauB23').value = savedInputs.bottleTigerNauB23;
		document.getElementById('tigerNauB23').value = savedInputs.tigerNauB23;
		document.getElementById('tigerBacB23').value = savedInputs.tigerBacB23;
		document.getElementById('heinekenB23').value = savedInputs.heinekenB23;
		document.getElementById('sevenUpB23').value = savedInputs.sevenUpB23;
		document.getElementById('cokeB23').value = savedInputs.cokeB23;
		document.getElementById('pepsiB23').value = savedInputs.pepsiB23;
		document.getElementById('stingB23').value = savedInputs.stingB23;
		document.getElementById('waterB23').value = savedInputs.waterB23;
		document.getElementById('teaB23').value = savedInputs.teaB23;
		document.getElementById('napkinB23').value = savedInputs.napkinB23;
	}

	document.getElementById('bottleTigerBacB23').value = '';
	document.getElementById('bottleTigerNauB23').value = '';
	document.getElementById('tigerNauB23').value = '';
	document.getElementById('tigerBacB23').value = '';
	document.getElementById('heinekenB23').value = '';
	document.getElementById('sevenUpB23').value = '';
	document.getElementById('cokeB23').value = '';
	document.getElementById('pepsiB23').value = '';
	document.getElementById('stingB23').value = '';
	document.getElementById('waterB23').value = '';
	document.getElementById('teaB23').value = '';
	document.getElementById('napkinB23').value = '';


	localStorage.removeItem("bottleTigerBacB23");
	localStorage.removeItem("bottleTigerNauB23");
	localStorage.removeItem("tigerNauB23");
	localStorage.removeItem("tigerBacB23");
	localStorage.removeItem("heinekenB23");
	localStorage.removeItem("sevenUpB23");
	localStorage.removeItem("cokeB23");
	localStorage.removeItem("pepsiB23");
	localStorage.removeItem("stingB23");
	localStorage.removeItem("waterB23");
	localStorage.removeItem("teaB23");
	localStorage.removeItem("napkinB23");

}

const inputsB23 = document.querySelectorAll('input[type="number"]');
inputsB23.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnB23 = document.getElementById("addBtnB23");
const newDrinkFormB23 = document.getElementById("newDrinkFormB23");

addBtnB23.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});


//B2/2
function confirmCalculateB22() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateB22()
	}
}
function calculateB22() {
	const bottleTigerBacB22 = document.getElementById("bottleTigerBacB22").value;
	const bottleTigerNauB22 = document.getElementById("bottleTigerNauB22").value;
	const tigerNauB22 = document.getElementById("tigerNauB22").value;
	const tigerBacB22 = document.getElementById("tigerBacB22").value;
	const heinekenB22 = document.getElementById("heinekenB22").value;
	const sevenUpB22 = document.getElementById("sevenUpB22").value;
	const cokeB22 = document.getElementById("cokeB22").value;
	const pepsiB22 = document.getElementById("pepsiB22").value;
	const stingB22 = document.getElementById("stingB22").value;
	const waterNatureB22 = document.getElementById("waterB22").value;
	const teaB22 = document.getElementById("teaB22").value;
	const napkinB22 = document.getElementById("napkinB22").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacB22 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauB22 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauB22 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacB22 },
		{ name: "Bia Heineken", quantity: heinekenB22 },
		{ name: "Nước 7up", quantity: sevenUpB22 },
		{ name: "Nước CocaCola", quantity: cokeB22 },
		{ name: "Nước pepsi", quantity: pepsiB22 },
		{ name: "Nước Sting", quantity: stingB22 },
		{ name: "Nước suối", quantity: waterNatureB22 },
		{ name: "Trà tắc", quantity: teaB22 },
		{ name: "Khăn giấy", quantity: napkinB22 },
	];

	const selectedProductsB22 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsB22.length; i++) {
		const product = selectedProductsB22[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderB22").innerHTML = bill;


	localStorage.setItem("tigerNauB22", tigerNauB22);
	localStorage.setItem("bottleTigerBacB22", bottleTigerBacB22);
	localStorage.setItem("bottleTigerNauB22", bottleTigerNauB22);
	localStorage.setItem("tigerBacB22", tigerBacB22);
	localStorage.setItem("heinekenB22", heinekenB22);
	localStorage.setItem("sevenUpB22", sevenUpB22);
	localStorage.setItem("cokeB22", cokeB22);
	localStorage.setItem("pepsiB22", pepsiB22)
	localStorage.setItem("stingB22", stingB22);
	localStorage.setItem("waterB22", waterNatureB22);
	localStorage.setItem("teaB22", teaB22);
	localStorage.setItem("napkinB22", napkinB22);

	localStorage.removeItem("bottleTigerBacB22");
	localStorage.removeItem("bottleTigerNauB22");
	localStorage.removeItem("tigerNauB22");
	localStorage.removeItem("tigerBacB22");
	localStorage.removeItem("heinekenB22");
	localStorage.removeItem("sevenUpB22");
	localStorage.removeItem("cokeB22");
	localStorage.removeItem("pepsiB22");
	localStorage.removeItem("stingB22");
	localStorage.removeItem("waterB22");
	localStorage.removeItem("teaB22");
	localStorage.removeItem("napkinB22");

	const totalB22 = (bottleTigerBacB22 * 26000) + (bottleTigerNauB22 * 25000) + (tigerNauB22 * 24000) + (tigerBacB22 * 25000) + (heinekenB22 * 26000) + (sevenUpB22 * 16000) + (cokeB22 * 16000) + (pepsiB22 * 16000) + (waterNatureB22 * 12000) + (stingB22 * 16000) + (teaB22 * 10000) + (napkinB22 * 3000);

	const historyB22 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyB22.push({ time: currentTime, totalB22: totalB22 });
	localStorage.setItem('totalHistory', JSON.stringify(historyB22));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalB22").innerHTML = "Tổng tiền: " + totalB22 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsB22 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsB22.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonB22 = document.getElementById("toggleDrinksB22");
const drinkElementsB22 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonB22.addEventListener("click", () => {
	drinkElementsB22.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonB22.classList.toggle("hidden");
	toggleDrinksButtonB22.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksB22 = localStorage.getItem("showDrinks");

if (showDrinksB22 === "1") {
	drinkElementsB22.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonB22.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonB22.classList.add("hidden");
} else {
	toggleDrinksButtonB22.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryB22() {
	const historyB22 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyB22.map((item, index) => `Lần ${index + 1}: ${item.totalB22} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyB22").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryB22()">Xoá lịch sử</button>';
}
function clearHistoryB22() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyB22").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyB22").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetB22() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllB22();
	}
}
function resetAllB22() {
	let inputs = {
		'bottleTigerBacB22': document.getElementById('bottleTigerBacB22').value,
		'bottleTigerNauB22': document.getElementById('bottleTigerNauB22').value,
		'tigerNauB22': document.getElementById('tigerNauB22').value,
		'tigerBacB22': document.getElementById('tigerBacB22').value,
		'heinekenB22': document.getElementById('heinekenB22').value,
		'sevenUpB22': document.getElementById('sevenUpB22').value,
		'cokeB22': document.getElementById('cokeB22').value,
		'pepsiB22': document.getElementById('pepsiB22').value,
		'stingB22': document.getElementById('stingB22').value,
		'waterNatureB22': document.getElementById('waterB22').value,
		'napkinB22': document.getElementById('napkinB22').value,
		'teaB22': document.getElementById('teaB22').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacB22').value = savedInputs.bottleTigerBacB22;
		document.getElementById('bottleTigerNauB22').value = savedInputs.bottleTigerNauB22;
		document.getElementById('tigerNauB22').value = savedInputs.tigerNauB22;
		document.getElementById('tigerBacB22').value = savedInputs.tigerBacB22;
		document.getElementById('heinekenB22').value = savedInputs.heinekenB22;
		document.getElementById('sevenUpB22').value = savedInputs.sevenUpB22;
		document.getElementById('cokeB22').value = savedInputs.cokeB22;
		document.getElementById('pepsiB22').value = savedInputs.pepsiB22;
		document.getElementById('stingB22').value = savedInputs.stingB22;
		document.getElementById('waterB22').value = savedInputs.waterB22;
		document.getElementById('teaB22').value = savedInputs.teaB22;
		document.getElementById('napkinB22').value = savedInputs.napkinB22;
	}

	document.getElementById('bottleTigerBacB22').value = '';
	document.getElementById('bottleTigerNauB22').value = '';
	document.getElementById('tigerNauB22').value = '';
	document.getElementById('tigerBacB22').value = '';
	document.getElementById('heinekenB22').value = '';
	document.getElementById('sevenUpB22').value = '';
	document.getElementById('cokeB22').value = '';
	document.getElementById('pepsiB22').value = '';
	document.getElementById('stingB22').value = '';
	document.getElementById('waterB22').value = '';
	document.getElementById('teaB22').value = '';
	document.getElementById('napkinB22').value = '';


	localStorage.removeItem("bottleTigerBacB22");
	localStorage.removeItem("bottleTigerNauB22");
	localStorage.removeItem("tigerNauB22");
	localStorage.removeItem("tigerBacB22");
	localStorage.removeItem("heinekenB22");
	localStorage.removeItem("sevenUpB22");
	localStorage.removeItem("cokeB22");
	localStorage.removeItem("pepsiB22");
	localStorage.removeItem("stingB22");
	localStorage.removeItem("waterB22");
	localStorage.removeItem("teaB22");
	localStorage.removeItem("napkinB22");

}

const inputsB22 = document.querySelectorAll('input[type="number"]');
inputsB22.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnB22 = document.getElementById("addBtnB22");
const newDrinkFormB22 = document.getElementById("newDrinkFormB22");

addBtnB22.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});

//B2/1
function confirmCalculateB21() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateB21()
	}
}
function calculateB21() {
	const bottleTigerBacB21 = document.getElementById("bottleTigerBacB21").value;
	const bottleTigerNauB21 = document.getElementById("bottleTigerNauB21").value;
	const tigerNauB21 = document.getElementById("tigerNauB21").value;
	const tigerBacB21 = document.getElementById("tigerBacB21").value;
	const heinekenB21 = document.getElementById("heinekenB21").value;
	const sevenUpB21 = document.getElementById("sevenUpB21").value;
	const cokeB21 = document.getElementById("cokeB21").value;
	const pepsiB21 = document.getElementById("pepsiB21").value;
	const stingB21 = document.getElementById("stingB21").value;
	const waterNatureB21 = document.getElementById("waterB21").value;
	const teaB21 = document.getElementById("teaB21").value;
	const napkinB21 = document.getElementById("napkinB21").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacB21 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauB21 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauB21 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacB21 },
		{ name: "Bia Heineken", quantity: heinekenB21 },
		{ name: "Nước 7up", quantity: sevenUpB21 },
		{ name: "Nước CocaCola", quantity: cokeB21 },
		{ name: "Nước pepsi", quantity: pepsiB21 },
		{ name: "Nước Sting", quantity: stingB21 },
		{ name: "Nước suối", quantity: waterNatureB21 },
		{ name: "Trà tắc", quantity: teaB21 },
		{ name: "Khăn giấy", quantity: napkinB21 },
	];

	const selectedProductsB21 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsB21.length; i++) {
		const product = selectedProductsB21[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderB21").innerHTML = bill;


	localStorage.setItem("tigerNauB21", tigerNauB21);
	localStorage.setItem("bottleTigerBacB21", bottleTigerBacB21);
	localStorage.setItem("bottleTigerNauB21", bottleTigerNauB21);
	localStorage.setItem("tigerBacB21", tigerBacB21);
	localStorage.setItem("heinekenB21", heinekenB21);
	localStorage.setItem("sevenUpB21", sevenUpB21);
	localStorage.setItem("cokeB21", cokeB21);
	localStorage.setItem("pepsiB21", pepsiB21)
	localStorage.setItem("stingB21", stingB21);
	localStorage.setItem("waterB21", waterNatureB21);
	localStorage.setItem("teaB21", teaB21);
	localStorage.setItem("napkinB21", napkinB21);

	localStorage.removeItem("bottleTigerBacB21");
	localStorage.removeItem("bottleTigerNauB21");
	localStorage.removeItem("tigerNauB21");
	localStorage.removeItem("tigerBacB21");
	localStorage.removeItem("heinekenB21");
	localStorage.removeItem("sevenUpB21");
	localStorage.removeItem("cokeB21");
	localStorage.removeItem("pepsiB21");
	localStorage.removeItem("stingB21");
	localStorage.removeItem("waterB21");
	localStorage.removeItem("teaB21");
	localStorage.removeItem("napkinB21");

	const totalB21 = (bottleTigerBacB21 * 26000) + (bottleTigerNauB21 * 25000) + (tigerNauB21 * 24000) + (tigerBacB21 * 25000) + (heinekenB21 * 26000) + (sevenUpB21 * 16000) + (cokeB21 * 16000) + (pepsiB21 * 16000) + (waterNatureB21 * 12000) + (stingB21 * 16000) + (teaB21 * 10000) + (napkinB21 * 3000);

	const historyB21 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyB21.push({ time: currentTime, totalB21: totalB21 });
	localStorage.setItem('totalHistory', JSON.stringify(historyB21));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalB21").innerHTML = "Tổng tiền: " + totalB21 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsB21 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsB21.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonB21 = document.getElementById("toggleDrinksB21");
const drinkElementsB21 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonB21.addEventListener("click", () => {
	drinkElementsB21.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonB21.classList.toggle("hidden");
	toggleDrinksButtonB21.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksB21 = localStorage.getItem("showDrinks");

if (showDrinksB21 === "1") {
	drinkElementsB21.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonB21.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonB21.classList.add("hidden");
} else {
	toggleDrinksButtonB21.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryB21() {
	const historyB21 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyB21.map((item, index) => `Lần ${index + 1}: ${item.totalB21} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyB21").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryB21()">Xoá lịch sử</button>';
}
function clearHistoryB21() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyB21").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyB21").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetB21() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllB21();
	}
}
function resetAllB21() {
	let inputs = {
		'bottleTigerBacB21': document.getElementById('bottleTigerBacB21').value,
		'bottleTigerNauB21': document.getElementById('bottleTigerNauB21').value,
		'tigerNauB21': document.getElementById('tigerNauB21').value,
		'tigerBacB21': document.getElementById('tigerBacB21').value,
		'heinekenB21': document.getElementById('heinekenB21').value,
		'sevenUpB21': document.getElementById('sevenUpB21').value,
		'cokeB21': document.getElementById('cokeB21').value,
		'pepsiB21': document.getElementById('pepsiB21').value,
		'stingB21': document.getElementById('stingB21').value,
		'waterNatureB21': document.getElementById('waterB21').value,
		'napkinB21': document.getElementById('napkinB21').value,
		'teaB21': document.getElementById('teaB21').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacB21').value = savedInputs.bottleTigerBacB21;
		document.getElementById('bottleTigerNauB21').value = savedInputs.bottleTigerNauB21;
		document.getElementById('tigerNauB21').value = savedInputs.tigerNauB21;
		document.getElementById('tigerBacB21').value = savedInputs.tigerBacB21;
		document.getElementById('heinekenB21').value = savedInputs.heinekenB21;
		document.getElementById('sevenUpB21').value = savedInputs.sevenUpB21;
		document.getElementById('cokeB21').value = savedInputs.cokeB21;
		document.getElementById('pepsiB21').value = savedInputs.pepsiB21;
		document.getElementById('stingB21').value = savedInputs.stingB21;
		document.getElementById('waterB21').value = savedInputs.waterB21;
		document.getElementById('teaB21').value = savedInputs.teaB21;
		document.getElementById('napkinB21').value = savedInputs.napkinB21;
	}

	document.getElementById('bottleTigerBacB21').value = '';
	document.getElementById('bottleTigerNauB21').value = '';
	document.getElementById('tigerNauB21').value = '';
	document.getElementById('tigerBacB21').value = '';
	document.getElementById('heinekenB21').value = '';
	document.getElementById('sevenUpB21').value = '';
	document.getElementById('cokeB21').value = '';
	document.getElementById('pepsiB21').value = '';
	document.getElementById('stingB21').value = '';
	document.getElementById('waterB21').value = '';
	document.getElementById('teaB21').value = '';
	document.getElementById('napkinB21').value = '';


	localStorage.removeItem("bottleTigerBacB21");
	localStorage.removeItem("bottleTigerNauB21");
	localStorage.removeItem("tigerNauB21");
	localStorage.removeItem("tigerBacB21");
	localStorage.removeItem("heinekenB21");
	localStorage.removeItem("sevenUpB21");
	localStorage.removeItem("cokeB21");
	localStorage.removeItem("pepsiB21");
	localStorage.removeItem("stingB21");
	localStorage.removeItem("waterB21");
	localStorage.removeItem("teaB21");
	localStorage.removeItem("napkinB21");

}

const inputsB21 = document.querySelectorAll('input[type="number"]');
inputsB21.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnB21 = document.getElementById("addBtnB21");
const newDrinkFormB21 = document.getElementById("newDrinkFormB21");

addBtnB21.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});



//B3/1
function confirmCalculateB31() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateB31()
	}
}
function calculateB31() {
	const bottleTigerBacB31 = document.getElementById("bottleTigerBacB31").value;
	const bottleTigerNauB31 = document.getElementById("bottleTigerNauB31").value;
	const tigerNauB31 = document.getElementById("tigerNauB31").value;
	const tigerBacB31 = document.getElementById("tigerBacB31").value;
	const heinekenB31 = document.getElementById("heinekenB31").value;
	const sevenUpB31 = document.getElementById("sevenUpB31").value;
	const cokeB31 = document.getElementById("cokeB31").value;
	const pepsiB31 = document.getElementById("pepsiB31").value;
	const stingB31 = document.getElementById("stingB31").value;
	const waterNatureB31 = document.getElementById("waterB31").value;
	const teaB31 = document.getElementById("teaB31").value;
	const napkinB31 = document.getElementById("napkinB31").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacB31 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauB31 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauB31 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacB31 },
		{ name: "Bia Heineken", quantity: heinekenB31 },
		{ name: "Nước 7up", quantity: sevenUpB31 },
		{ name: "Nước CocaCola", quantity: cokeB31 },
		{ name: "Nước pepsi", quantity: pepsiB31 },
		{ name: "Nước Sting", quantity: stingB31 },
		{ name: "Nước suối", quantity: waterNatureB31 },
		{ name: "Trà tắc", quantity: teaB31 },
		{ name: "Khăn giấy", quantity: napkinB31 },
	];

	const selectedProductsB31 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsB31.length; i++) {
		const product = selectedProductsB31[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderB31").innerHTML = bill;


	localStorage.setItem("tigerNauB31", tigerNauB31);
	localStorage.setItem("bottleTigerBacB31", bottleTigerBacB31);
	localStorage.setItem("bottleTigerNauB31", bottleTigerNauB31);
	localStorage.setItem("tigerBacB31", tigerBacB31);
	localStorage.setItem("heinekenB31", heinekenB31);
	localStorage.setItem("sevenUpB31", sevenUpB31);
	localStorage.setItem("cokeB31", cokeB31);
	localStorage.setItem("pepsiB31", pepsiB31)
	localStorage.setItem("stingB31", stingB31);
	localStorage.setItem("waterB31", waterNatureB31);
	localStorage.setItem("teaB31", teaB31);
	localStorage.setItem("napkinB31", napkinB31);

	localStorage.removeItem("bottleTigerBacB31");
	localStorage.removeItem("bottleTigerNauB31");
	localStorage.removeItem("tigerNauB31");
	localStorage.removeItem("tigerBacB31");
	localStorage.removeItem("heinekenB31");
	localStorage.removeItem("sevenUpB31");
	localStorage.removeItem("cokeB31");
	localStorage.removeItem("pepsiB31");
	localStorage.removeItem("stingB31");
	localStorage.removeItem("waterB31");
	localStorage.removeItem("teaB31");
	localStorage.removeItem("napkinB31");

	const totalB31 = (bottleTigerBacB31 * 26000) + (bottleTigerNauB31 * 25000) + (tigerNauB31 * 24000) + (tigerBacB31 * 25000) + (heinekenB31 * 26000) + (sevenUpB31 * 16000) + (cokeB31 * 16000) + (pepsiB31 * 16000) + (waterNatureB31 * 12000) + (stingB31 * 16000) + (teaB31 * 10000) + (napkinB31 * 3000);

	const historyB31 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyB31.push({ time: currentTime, totalB31: totalB31 });
	localStorage.setItem('totalHistory', JSON.stringify(historyB31));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalB31").innerHTML = "Tổng tiền: " + totalB31 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsB31 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsB31.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonB31 = document.getElementById("toggleDrinksB31");
const drinkElementsB31 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonB31.addEventListener("click", () => {
	drinkElementsB31.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonB31.classList.toggle("hidden");
	toggleDrinksButtonB31.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksB31 = localStorage.getItem("showDrinks");

if (showDrinksB31 === "1") {
	drinkElementsB31.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonB31.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonB31.classList.add("hidden");
} else {
	toggleDrinksButtonB31.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryB31() {
	const historyB31 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyB31.map((item, index) => `Lần ${index + 1}: ${item.totalB31} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyB31").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryB31()">Xoá lịch sử</button>';
}
function clearHistoryB31() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyB31").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyB31").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetB31() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllB31();
	}
}
function resetAllB31() {
	let inputs = {
		'bottleTigerBacB31': document.getElementById('bottleTigerBacB31').value,
		'bottleTigerNauB31': document.getElementById('bottleTigerNauB31').value,
		'tigerNauB31': document.getElementById('tigerNauB31').value,
		'tigerBacB31': document.getElementById('tigerBacB31').value,
		'heinekenB31': document.getElementById('heinekenB31').value,
		'sevenUpB31': document.getElementById('sevenUpB31').value,
		'cokeB31': document.getElementById('cokeB31').value,
		'pepsiB31': document.getElementById('pepsiB31').value,
		'stingB31': document.getElementById('stingB31').value,
		'waterNatureB31': document.getElementById('waterB31').value,
		'napkinB31': document.getElementById('napkinB31').value,
		'teaB31': document.getElementById('teaB31').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacB31').value = savedInputs.bottleTigerBacB31;
		document.getElementById('bottleTigerNauB31').value = savedInputs.bottleTigerNauB31;
		document.getElementById('tigerNauB31').value = savedInputs.tigerNauB31;
		document.getElementById('tigerBacB31').value = savedInputs.tigerBacB31;
		document.getElementById('heinekenB31').value = savedInputs.heinekenB31;
		document.getElementById('sevenUpB31').value = savedInputs.sevenUpB31;
		document.getElementById('cokeB31').value = savedInputs.cokeB31;
		document.getElementById('pepsiB31').value = savedInputs.pepsiB31;
		document.getElementById('stingB31').value = savedInputs.stingB31;
		document.getElementById('waterB31').value = savedInputs.waterB31;
		document.getElementById('teaB31').value = savedInputs.teaB31;
		document.getElementById('napkinB31').value = savedInputs.napkinB31;
	}

	document.getElementById('bottleTigerBacB31').value = '';
	document.getElementById('bottleTigerNauB31').value = '';
	document.getElementById('tigerNauB31').value = '';
	document.getElementById('tigerBacB31').value = '';
	document.getElementById('heinekenB31').value = '';
	document.getElementById('sevenUpB31').value = '';
	document.getElementById('cokeB31').value = '';
	document.getElementById('pepsiB31').value = '';
	document.getElementById('stingB31').value = '';
	document.getElementById('waterB31').value = '';
	document.getElementById('teaB31').value = '';
	document.getElementById('napkinB31').value = '';


	localStorage.removeItem("bottleTigerBacB31");
	localStorage.removeItem("bottleTigerNauB31");
	localStorage.removeItem("tigerNauB31");
	localStorage.removeItem("tigerBacB31");
	localStorage.removeItem("heinekenB31");
	localStorage.removeItem("sevenUpB31");
	localStorage.removeItem("cokeB31");
	localStorage.removeItem("pepsiB31");
	localStorage.removeItem("stingB31");
	localStorage.removeItem("waterB31");
	localStorage.removeItem("teaB31");
	localStorage.removeItem("napkinB31");

}

const inputsB31 = document.querySelectorAll('input[type="number"]');
inputsB31.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnB31 = document.getElementById("addBtnB31");
const newDrinkFormB31 = document.getElementById("newDrinkFormB31");

addBtnB31.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});


//B3/2
function confirmCalculateB32() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateB32()
	}
}
function calculateB32() {
	const bottleTigerBacB32 = document.getElementById("bottleTigerBacB32").value;
	const bottleTigerNauB32 = document.getElementById("bottleTigerNauB32").value;
	const tigerNauB32 = document.getElementById("tigerNauB32").value;
	const tigerBacB32 = document.getElementById("tigerBacB32").value;
	const heinekenB32 = document.getElementById("heinekenB32").value;
	const sevenUpB32 = document.getElementById("sevenUpB32").value;
	const cokeB32 = document.getElementById("cokeB32").value;
	const pepsiB32 = document.getElementById("pepsiB32").value;
	const stingB32 = document.getElementById("stingB32").value;
	const waterNatureB32 = document.getElementById("waterB32").value;
	const teaB32 = document.getElementById("teaB32").value;
	const napkinB32 = document.getElementById("napkinB32").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacB32 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauB32 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauB32 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacB32 },
		{ name: "Bia Heineken", quantity: heinekenB32 },
		{ name: "Nước 7up", quantity: sevenUpB32 },
		{ name: "Nước CocaCola", quantity: cokeB32 },
		{ name: "Nước pepsi", quantity: pepsiB32 },
		{ name: "Nước Sting", quantity: stingB32 },
		{ name: "Nước suối", quantity: waterNatureB32 },
		{ name: "Trà tắc", quantity: teaB32 },
		{ name: "Khăn giấy", quantity: napkinB32 },
	];

	const selectedProductsB32 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsB32.length; i++) {
		const product = selectedProductsB32[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderB32").innerHTML = bill;


	localStorage.setItem("tigerNauB32", tigerNauB32);
	localStorage.setItem("bottleTigerBacB32", bottleTigerBacB32);
	localStorage.setItem("bottleTigerNauB32", bottleTigerNauB32);
	localStorage.setItem("tigerBacB32", tigerBacB32);
	localStorage.setItem("heinekenB32", heinekenB32);
	localStorage.setItem("sevenUpB32", sevenUpB32);
	localStorage.setItem("cokeB32", cokeB32);
	localStorage.setItem("pepsiB32", pepsiB32)
	localStorage.setItem("stingB32", stingB32);
	localStorage.setItem("waterB32", waterNatureB32);
	localStorage.setItem("teaB32", teaB32);
	localStorage.setItem("napkinB32", napkinB32);

	localStorage.removeItem("bottleTigerBacB32");
	localStorage.removeItem("bottleTigerNauB32");
	localStorage.removeItem("tigerNauB32");
	localStorage.removeItem("tigerBacB32");
	localStorage.removeItem("heinekenB32");
	localStorage.removeItem("sevenUpB32");
	localStorage.removeItem("cokeB32");
	localStorage.removeItem("pepsiB32");
	localStorage.removeItem("stingB32");
	localStorage.removeItem("waterB32");
	localStorage.removeItem("teaB32");
	localStorage.removeItem("napkinB32");

	const totalB32 = (bottleTigerBacB32 * 26000) + (bottleTigerNauB32 * 25000) + (tigerNauB32 * 24000) + (tigerBacB32 * 25000) + (heinekenB32 * 26000) + (sevenUpB32 * 16000) + (cokeB32 * 16000) + (pepsiB32 * 16000) + (waterNatureB32 * 12000) + (stingB32 * 16000) + (teaB32 * 10000) + (napkinB32 * 3000);

	const historyB32 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyB32.push({ time: currentTime, totalB32: totalB32 });
	localStorage.setItem('totalHistory', JSON.stringify(historyB32));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalB32").innerHTML = "Tổng tiền: " + totalB32 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsB32 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsB32.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonB32 = document.getElementById("toggleDrinksB32");
const drinkElementsB32 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonB32.addEventListener("click", () => {
	drinkElementsB32.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonB32.classList.toggle("hidden");
	toggleDrinksButtonB32.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksB32 = localStorage.getItem("showDrinks");

if (showDrinksB32 === "1") {
	drinkElementsB32.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonB32.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonB32.classList.add("hidden");
} else {
	toggleDrinksButtonB32.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryB32() {
	const historyB32 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyB32.map((item, index) => `Lần ${index + 1}: ${item.totalB32} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyB32").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryB32()">Xoá lịch sử</button>';
}
function clearHistoryB32() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyB32").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyB32").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetB32() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllB32();
	}
}
function resetAllB32() {
	let inputs = {
		'bottleTigerBacB32': document.getElementById('bottleTigerBacB32').value,
		'bottleTigerNauB32': document.getElementById('bottleTigerNauB32').value,
		'tigerNauB32': document.getElementById('tigerNauB32').value,
		'tigerBacB32': document.getElementById('tigerBacB32').value,
		'heinekenB32': document.getElementById('heinekenB32').value,
		'sevenUpB32': document.getElementById('sevenUpB32').value,
		'cokeB32': document.getElementById('cokeB32').value,
		'pepsiB32': document.getElementById('pepsiB32').value,
		'stingB32': document.getElementById('stingB32').value,
		'waterNatureB32': document.getElementById('waterB32').value,
		'napkinB32': document.getElementById('napkinB32').value,
		'teaB32': document.getElementById('teaB32').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacB32').value = savedInputs.bottleTigerBacB32;
		document.getElementById('bottleTigerNauB32').value = savedInputs.bottleTigerNauB32;
		document.getElementById('tigerNauB32').value = savedInputs.tigerNauB32;
		document.getElementById('tigerBacB32').value = savedInputs.tigerBacB32;
		document.getElementById('heinekenB32').value = savedInputs.heinekenB32;
		document.getElementById('sevenUpB32').value = savedInputs.sevenUpB32;
		document.getElementById('cokeB32').value = savedInputs.cokeB32;
		document.getElementById('pepsiB32').value = savedInputs.pepsiB32;
		document.getElementById('stingB32').value = savedInputs.stingB32;
		document.getElementById('waterB32').value = savedInputs.waterB32;
		document.getElementById('teaB32').value = savedInputs.teaB32;
		document.getElementById('napkinB32').value = savedInputs.napkinB32;
	}

	document.getElementById('bottleTigerBacB32').value = '';
	document.getElementById('bottleTigerNauB32').value = '';
	document.getElementById('tigerNauB32').value = '';
	document.getElementById('tigerBacB32').value = '';
	document.getElementById('heinekenB32').value = '';
	document.getElementById('sevenUpB32').value = '';
	document.getElementById('cokeB32').value = '';
	document.getElementById('pepsiB32').value = '';
	document.getElementById('stingB32').value = '';
	document.getElementById('waterB32').value = '';
	document.getElementById('teaB32').value = '';
	document.getElementById('napkinB32').value = '';


	localStorage.removeItem("bottleTigerBacB32");
	localStorage.removeItem("bottleTigerNauB32");
	localStorage.removeItem("tigerNauB32");
	localStorage.removeItem("tigerBacB32");
	localStorage.removeItem("heinekenB32");
	localStorage.removeItem("sevenUpB32");
	localStorage.removeItem("cokeB32");
	localStorage.removeItem("pepsiB32");
	localStorage.removeItem("stingB32");
	localStorage.removeItem("waterB32");
	localStorage.removeItem("teaB32");
	localStorage.removeItem("napkinB32");

}

const inputsB32 = document.querySelectorAll('input[type="number"]');
inputsB32.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnB32 = document.getElementById("addBtnB32");
const newDrinkFormB32 = document.getElementById("newDrinkFormB32");

addBtnB32.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});

//B4/1

//B4/2
function confirmCalculateB41() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateB41()
	}
}
function calculateB41() {
	const bottleTigerBacB41 = document.getElementById("bottleTigerBacB41").value;
	const bottleTigerNauB41 = document.getElementById("bottleTigerNauB41").value;
	const tigerNauB41 = document.getElementById("tigerNauB41").value;
	const tigerBacB41 = document.getElementById("tigerBacB41").value;
	const heinekenB41 = document.getElementById("heinekenB41").value;
	const sevenUpB41 = document.getElementById("sevenUpB41").value;
	const cokeB41 = document.getElementById("cokeB41").value;
	const pepsiB41 = document.getElementById("pepsiB41").value;
	const stingB41 = document.getElementById("stingB41").value;
	const waterNatureB41 = document.getElementById("waterB41").value;
	const teaB41 = document.getElementById("teaB41").value;
	const napkinB41 = document.getElementById("napkinB41").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacB41 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauB41 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauB41 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacB41 },
		{ name: "Bia Heineken", quantity: heinekenB41 },
		{ name: "Nước 7up", quantity: sevenUpB41 },
		{ name: "Nước CocaCola", quantity: cokeB41 },
		{ name: "Nước pepsi", quantity: pepsiB41 },
		{ name: "Nước Sting", quantity: stingB41 },
		{ name: "Nước suối", quantity: waterNatureB41 },
		{ name: "Trà tắc", quantity: teaB41 },
		{ name: "Khăn giấy", quantity: napkinB41 },
	];

	const selectedProductsB41 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsB41.length; i++) {
		const product = selectedProductsB41[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderB41").innerHTML = bill;


	localStorage.setItem("tigerNauB41", tigerNauB41);
	localStorage.setItem("bottleTigerBacB41", bottleTigerBacB41);
	localStorage.setItem("bottleTigerNauB41", bottleTigerNauB41);
	localStorage.setItem("tigerBacB41", tigerBacB41);
	localStorage.setItem("heinekenB41", heinekenB41);
	localStorage.setItem("sevenUpB41", sevenUpB41);
	localStorage.setItem("cokeB41", cokeB41);
	localStorage.setItem("pepsiB41", pepsiB41)
	localStorage.setItem("stingB41", stingB41);
	localStorage.setItem("waterB41", waterNatureB41);
	localStorage.setItem("teaB41", teaB41);
	localStorage.setItem("napkinB41", napkinB41);

	localStorage.removeItem("bottleTigerBacB41");
	localStorage.removeItem("bottleTigerNauB41");
	localStorage.removeItem("tigerNauB41");
	localStorage.removeItem("tigerBacB41");
	localStorage.removeItem("heinekenB41");
	localStorage.removeItem("sevenUpB41");
	localStorage.removeItem("cokeB41");
	localStorage.removeItem("pepsiB41");
	localStorage.removeItem("stingB41");
	localStorage.removeItem("waterB41");
	localStorage.removeItem("teaB41");
	localStorage.removeItem("napkinB41");

	const totalB41 = (bottleTigerBacB41 * 26000) + (bottleTigerNauB41 * 25000) + (tigerNauB41 * 24000) + (tigerBacB41 * 25000) + (heinekenB41 * 26000) + (sevenUpB41 * 16000) + (cokeB41 * 16000) + (pepsiB41 * 16000) + (waterNatureB41 * 12000) + (stingB41 * 16000) + (teaB41 * 10000) + (napkinB41 * 3000);

	const historyB41 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyB41.push({ time: currentTime, totalB41: totalB41 });
	localStorage.setItem('totalHistory', JSON.stringify(historyB41));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalB41").innerHTML = "Tổng tiền: " + totalB41 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsB41 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsB41.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonB41 = document.getElementById("toggleDrinksB41");
const drinkElementsB41 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonB41.addEventListener("click", () => {
	drinkElementsB41.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonB41.classList.toggle("hidden");
	toggleDrinksButtonB41.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksB41 = localStorage.getItem("showDrinks");

if (showDrinksB41 === "1") {
	drinkElementsB41.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonB41.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonB41.classList.add("hidden");
} else {
	toggleDrinksButtonB41.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryB41() {
	const historyB41 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyB41.map((item, index) => `Lần ${index + 1}: ${item.totalB41} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyB41").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryB41()">Xoá lịch sử</button>';
}
function clearHistoryB41() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyB41").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyB41").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetB41() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllB41();
	}
}
function resetAllB41() {
	let inputs = {
		'bottleTigerBacB41': document.getElementById('bottleTigerBacB41').value,
		'bottleTigerNauB41': document.getElementById('bottleTigerNauB41').value,
		'tigerNauB41': document.getElementById('tigerNauB41').value,
		'tigerBacB41': document.getElementById('tigerBacB41').value,
		'heinekenB41': document.getElementById('heinekenB41').value,
		'sevenUpB41': document.getElementById('sevenUpB41').value,
		'cokeB41': document.getElementById('cokeB41').value,
		'pepsiB41': document.getElementById('pepsiB41').value,
		'stingB41': document.getElementById('stingB41').value,
		'waterNatureB41': document.getElementById('waterB41').value,
		'napkinB41': document.getElementById('napkinB41').value,
		'teaB41': document.getElementById('teaB41').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacB41').value = savedInputs.bottleTigerBacB41;
		document.getElementById('bottleTigerNauB41').value = savedInputs.bottleTigerNauB41;
		document.getElementById('tigerNauB41').value = savedInputs.tigerNauB41;
		document.getElementById('tigerBacB41').value = savedInputs.tigerBacB41;
		document.getElementById('heinekenB41').value = savedInputs.heinekenB41;
		document.getElementById('sevenUpB41').value = savedInputs.sevenUpB41;
		document.getElementById('cokeB41').value = savedInputs.cokeB41;
		document.getElementById('pepsiB41').value = savedInputs.pepsiB41;
		document.getElementById('stingB41').value = savedInputs.stingB41;
		document.getElementById('waterB41').value = savedInputs.waterB41;
		document.getElementById('teaB41').value = savedInputs.teaB41;
		document.getElementById('napkinB41').value = savedInputs.napkinB41;
	}

	document.getElementById('bottleTigerBacB41').value = '';
	document.getElementById('bottleTigerNauB41').value = '';
	document.getElementById('tigerNauB41').value = '';
	document.getElementById('tigerBacB41').value = '';
	document.getElementById('heinekenB41').value = '';
	document.getElementById('sevenUpB41').value = '';
	document.getElementById('cokeB41').value = '';
	document.getElementById('pepsiB41').value = '';
	document.getElementById('stingB41').value = '';
	document.getElementById('waterB41').value = '';
	document.getElementById('teaB41').value = '';
	document.getElementById('napkinB41').value = '';


	localStorage.removeItem("bottleTigerBacB41");
	localStorage.removeItem("bottleTigerNauB41");
	localStorage.removeItem("tigerNauB41");
	localStorage.removeItem("tigerBacB41");
	localStorage.removeItem("heinekenB41");
	localStorage.removeItem("sevenUpB41");
	localStorage.removeItem("cokeB41");
	localStorage.removeItem("pepsiB41");
	localStorage.removeItem("stingB41");
	localStorage.removeItem("waterB41");
	localStorage.removeItem("teaB41");
	localStorage.removeItem("napkinB41");

}

const inputsB41 = document.querySelectorAll('input[type="number"]');
inputsB41.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnB41 = document.getElementById("addBtnB41");
const newDrinkFormB41 = document.getElementById("newDrinkFormB41");

addBtnB41.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});
function confirmCalculateB42() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateB42()
	}
}
function calculateB42() {
	const bottleTigerBacB42 = document.getElementById("bottleTigerBacB42").value;
	const bottleTigerNauB42 = document.getElementById("bottleTigerNauB42").value;
	const tigerNauB42 = document.getElementById("tigerNauB42").value;
	const tigerBacB42 = document.getElementById("tigerBacB42").value;
	const heinekenB42 = document.getElementById("heinekenB42").value;
	const sevenUpB42 = document.getElementById("sevenUpB42").value;
	const cokeB42 = document.getElementById("cokeB42").value;
	const pepsiB42 = document.getElementById("pepsiB42").value;
	const stingB42 = document.getElementById("stingB42").value;
	const waterNatureB42 = document.getElementById("waterB42").value;
	const teaB42 = document.getElementById("teaB42").value;
	const napkinB42 = document.getElementById("napkinB42").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacB42 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauB42 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauB42 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacB42 },
		{ name: "Bia Heineken", quantity: heinekenB42 },
		{ name: "Nước 7up", quantity: sevenUpB42 },
		{ name: "Nước CocaCola", quantity: cokeB42 },
		{ name: "Nước pepsi", quantity: pepsiB42 },
		{ name: "Nước Sting", quantity: stingB42 },
		{ name: "Nước suối", quantity: waterNatureB42 },
		{ name: "Trà tắc", quantity: teaB42 },
		{ name: "Khăn giấy", quantity: napkinB42 },
	];

	const selectedProductsB42 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsB42.length; i++) {
		const product = selectedProductsB42[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderB42").innerHTML = bill;


	localStorage.setItem("tigerNauB42", tigerNauB42);
	localStorage.setItem("bottleTigerBacB42", bottleTigerBacB42);
	localStorage.setItem("bottleTigerNauB42", bottleTigerNauB42);
	localStorage.setItem("tigerBacB42", tigerBacB42);
	localStorage.setItem("heinekenB42", heinekenB42);
	localStorage.setItem("sevenUpB42", sevenUpB42);
	localStorage.setItem("cokeB42", cokeB42);
	localStorage.setItem("pepsiB42", pepsiB42)
	localStorage.setItem("stingB42", stingB42);
	localStorage.setItem("waterB42", waterNatureB42);
	localStorage.setItem("teaB42", teaB42);
	localStorage.setItem("napkinB42", napkinB42);

	localStorage.removeItem("bottleTigerBacB42");
	localStorage.removeItem("bottleTigerNauB42");
	localStorage.removeItem("tigerNauB42");
	localStorage.removeItem("tigerBacB42");
	localStorage.removeItem("heinekenB42");
	localStorage.removeItem("sevenUpB42");
	localStorage.removeItem("cokeB42");
	localStorage.removeItem("pepsiB42");
	localStorage.removeItem("stingB42");
	localStorage.removeItem("waterB42");
	localStorage.removeItem("teaB42");
	localStorage.removeItem("napkinB42");

	const totalB42 = (bottleTigerBacB42 * 26000) + (bottleTigerNauB42 * 25000) + (tigerNauB42 * 24000) + (tigerBacB42 * 25000) + (heinekenB42 * 26000) + (sevenUpB42 * 16000) + (cokeB42 * 16000) + (pepsiB42 * 16000) + (waterNatureB42 * 12000) + (stingB42 * 16000) + (teaB42 * 10000) + (napkinB42 * 3000);

	const historyB42 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyB42.push({ time: currentTime, totalB42: totalB42 });
	localStorage.setItem('totalHistory', JSON.stringify(historyB42));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalB42").innerHTML = "Tổng tiền: " + totalB42 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsB42 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsB42.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonB42 = document.getElementById("toggleDrinksB42");
const drinkElementsB42 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonB42.addEventListener("click", () => {
	drinkElementsB42.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonB42.classList.toggle("hidden");
	toggleDrinksButtonB42.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksB42 = localStorage.getItem("showDrinks");

if (showDrinksB42 === "1") {
	drinkElementsB42.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonB42.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonB42.classList.add("hidden");
} else {
	toggleDrinksButtonB42.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryB42() {
	const historyB42 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyB42.map((item, index) => `Lần ${index + 1}: ${item.totalB42} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyB42").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryB42()">Xoá lịch sử</button>';
}
function clearHistoryB42() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyB42").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyB42").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetB42() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllB42();
	}
}
function resetAllB42() {
	let inputs = {
		'bottleTigerBacB42': document.getElementById('bottleTigerBacB42').value,
		'bottleTigerNauB42': document.getElementById('bottleTigerNauB42').value,
		'tigerNauB42': document.getElementById('tigerNauB42').value,
		'tigerBacB42': document.getElementById('tigerBacB42').value,
		'heinekenB42': document.getElementById('heinekenB42').value,
		'sevenUpB42': document.getElementById('sevenUpB42').value,
		'cokeB42': document.getElementById('cokeB42').value,
		'pepsiB42': document.getElementById('pepsiB42').value,
		'stingB42': document.getElementById('stingB42').value,
		'waterNatureB42': document.getElementById('waterB42').value,
		'napkinB42': document.getElementById('napkinB42').value,
		'teaB42': document.getElementById('teaB42').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacB42').value = savedInputs.bottleTigerBacB42;
		document.getElementById('bottleTigerNauB42').value = savedInputs.bottleTigerNauB42;
		document.getElementById('tigerNauB42').value = savedInputs.tigerNauB42;
		document.getElementById('tigerBacB42').value = savedInputs.tigerBacB42;
		document.getElementById('heinekenB42').value = savedInputs.heinekenB42;
		document.getElementById('sevenUpB42').value = savedInputs.sevenUpB42;
		document.getElementById('cokeB42').value = savedInputs.cokeB42;
		document.getElementById('pepsiB42').value = savedInputs.pepsiB42;
		document.getElementById('stingB42').value = savedInputs.stingB42;
		document.getElementById('waterB42').value = savedInputs.waterB42;
		document.getElementById('teaB42').value = savedInputs.teaB42;
		document.getElementById('napkinB42').value = savedInputs.napkinB42;
	}

	document.getElementById('bottleTigerBacB42').value = '';
	document.getElementById('bottleTigerNauB42').value = '';
	document.getElementById('tigerNauB42').value = '';
	document.getElementById('tigerBacB42').value = '';
	document.getElementById('heinekenB42').value = '';
	document.getElementById('sevenUpB42').value = '';
	document.getElementById('cokeB42').value = '';
	document.getElementById('pepsiB42').value = '';
	document.getElementById('stingB42').value = '';
	document.getElementById('waterB42').value = '';
	document.getElementById('teaB42').value = '';
	document.getElementById('napkinB42').value = '';


	localStorage.removeItem("bottleTigerBacB42");
	localStorage.removeItem("bottleTigerNauB42");
	localStorage.removeItem("tigerNauB42");
	localStorage.removeItem("tigerBacB42");
	localStorage.removeItem("heinekenB42");
	localStorage.removeItem("sevenUpB42");
	localStorage.removeItem("cokeB42");
	localStorage.removeItem("pepsiB42");
	localStorage.removeItem("stingB42");
	localStorage.removeItem("waterB42");
	localStorage.removeItem("teaB42");
	localStorage.removeItem("napkinB42");

}

const inputsB42 = document.querySelectorAll('input[type="number"]');
inputsB42.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnB42 = document.getElementById("addBtnB42");
const newDrinkFormB42 = document.getElementById("newDrinkFormB42");

addBtnB42.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});

//B5/1
function confirmCalculateB51() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateB51()
	}
}
function calculateB51() {
	const bottleTigerBacB51 = document.getElementById("bottleTigerBacB51").value;
	const bottleTigerNauB51 = document.getElementById("bottleTigerNauB51").value;
	const tigerNauB51 = document.getElementById("tigerNauB51").value;
	const tigerBacB51 = document.getElementById("tigerBacB51").value;
	const heinekenB51 = document.getElementById("heinekenB51").value;
	const sevenUpB51 = document.getElementById("sevenUpB51").value;
	const cokeB51 = document.getElementById("cokeB51").value;
	const pepsiB51 = document.getElementById("pepsiB51").value;
	const stingB51 = document.getElementById("stingB51").value;
	const waterNatureB51 = document.getElementById("waterB51").value;
	const teaB51 = document.getElementById("teaB51").value;
	const napkinB51 = document.getElementById("napkinB51").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacB51 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauB51 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauB51 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacB51 },
		{ name: "Bia Heineken", quantity: heinekenB51 },
		{ name: "Nước 7up", quantity: sevenUpB51 },
		{ name: "Nước CocaCola", quantity: cokeB51 },
		{ name: "Nước pepsi", quantity: pepsiB51 },
		{ name: "Nước Sting", quantity: stingB51 },
		{ name: "Nước suối", quantity: waterNatureB51 },
		{ name: "Trà tắc", quantity: teaB51 },
		{ name: "Khăn giấy", quantity: napkinB51 },
	];

	const selectedProductsB51 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsB51.length; i++) {
		const product = selectedProductsB51[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderB51").innerHTML = bill;


	localStorage.setItem("tigerNauB51", tigerNauB51);
	localStorage.setItem("bottleTigerBacB51", bottleTigerBacB51);
	localStorage.setItem("bottleTigerNauB51", bottleTigerNauB51);
	localStorage.setItem("tigerBacB51", tigerBacB51);
	localStorage.setItem("heinekenB51", heinekenB51);
	localStorage.setItem("sevenUpB51", sevenUpB51);
	localStorage.setItem("cokeB51", cokeB51);
	localStorage.setItem("pepsiB51", pepsiB51)
	localStorage.setItem("stingB51", stingB51);
	localStorage.setItem("waterB51", waterNatureB51);
	localStorage.setItem("teaB51", teaB51);
	localStorage.setItem("napkinB51", napkinB51);

	localStorage.removeItem("bottleTigerBacB51");
	localStorage.removeItem("bottleTigerNauB51");
	localStorage.removeItem("tigerNauB51");
	localStorage.removeItem("tigerBacB51");
	localStorage.removeItem("heinekenB51");
	localStorage.removeItem("sevenUpB51");
	localStorage.removeItem("cokeB51");
	localStorage.removeItem("pepsiB51");
	localStorage.removeItem("stingB51");
	localStorage.removeItem("waterB51");
	localStorage.removeItem("teaB51");
	localStorage.removeItem("napkinB51");

	const totalB51 = (bottleTigerBacB51 * 26000) + (bottleTigerNauB51 * 25000) + (tigerNauB51 * 24000) + (tigerBacB51 * 25000) + (heinekenB51 * 26000) + (sevenUpB51 * 16000) + (cokeB51 * 16000) + (pepsiB51 * 16000) + (waterNatureB51 * 12000) + (stingB51 * 16000) + (teaB51 * 10000) + (napkinB51 * 3000);

	const historyB51 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyB51.push({ time: currentTime, totalB51: totalB51 });
	localStorage.setItem('totalHistory', JSON.stringify(historyB51));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalB51").innerHTML = "Tổng tiền: " + totalB51 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsB51 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsB51.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonB51 = document.getElementById("toggleDrinksB51");
const drinkElementsB51 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonB51.addEventListener("click", () => {
	drinkElementsB51.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonB51.classList.toggle("hidden");
	toggleDrinksButtonB51.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksB51 = localStorage.getItem("showDrinks");

if (showDrinksB51 === "1") {
	drinkElementsB51.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonB51.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonB51.classList.add("hidden");
} else {
	toggleDrinksButtonB51.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryB51() {
	const historyB51 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyB51.map((item, index) => `Lần ${index + 1}: ${item.totalB51} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyB51").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryB51()">Xoá lịch sử</button>';
}
function clearHistoryB51() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyB51").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyB51").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetB51() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllB51();
	}
}
function resetAllB51() {
	let inputs = {
		'bottleTigerBacB51': document.getElementById('bottleTigerBacB51').value,
		'bottleTigerNauB51': document.getElementById('bottleTigerNauB51').value,
		'tigerNauB51': document.getElementById('tigerNauB51').value,
		'tigerBacB51': document.getElementById('tigerBacB51').value,
		'heinekenB51': document.getElementById('heinekenB51').value,
		'sevenUpB51': document.getElementById('sevenUpB51').value,
		'cokeB51': document.getElementById('cokeB51').value,
		'pepsiB51': document.getElementById('pepsiB51').value,
		'stingB51': document.getElementById('stingB51').value,
		'waterNatureB51': document.getElementById('waterB51').value,
		'napkinB51': document.getElementById('napkinB51').value,
		'teaB51': document.getElementById('teaB51').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacB51').value = savedInputs.bottleTigerBacB51;
		document.getElementById('bottleTigerNauB51').value = savedInputs.bottleTigerNauB51;
		document.getElementById('tigerNauB51').value = savedInputs.tigerNauB51;
		document.getElementById('tigerBacB51').value = savedInputs.tigerBacB51;
		document.getElementById('heinekenB51').value = savedInputs.heinekenB51;
		document.getElementById('sevenUpB51').value = savedInputs.sevenUpB51;
		document.getElementById('cokeB51').value = savedInputs.cokeB51;
		document.getElementById('pepsiB51').value = savedInputs.pepsiB51;
		document.getElementById('stingB51').value = savedInputs.stingB51;
		document.getElementById('waterB51').value = savedInputs.waterB51;
		document.getElementById('teaB51').value = savedInputs.teaB51;
		document.getElementById('napkinB51').value = savedInputs.napkinB51;
	}

	document.getElementById('bottleTigerBacB51').value = '';
	document.getElementById('bottleTigerNauB51').value = '';
	document.getElementById('tigerNauB51').value = '';
	document.getElementById('tigerBacB51').value = '';
	document.getElementById('heinekenB51').value = '';
	document.getElementById('sevenUpB51').value = '';
	document.getElementById('cokeB51').value = '';
	document.getElementById('pepsiB51').value = '';
	document.getElementById('stingB51').value = '';
	document.getElementById('waterB51').value = '';
	document.getElementById('teaB51').value = '';
	document.getElementById('napkinB51').value = '';


	localStorage.removeItem("bottleTigerBacB51");
	localStorage.removeItem("bottleTigerNauB51");
	localStorage.removeItem("tigerNauB51");
	localStorage.removeItem("tigerBacB51");
	localStorage.removeItem("heinekenB51");
	localStorage.removeItem("sevenUpB51");
	localStorage.removeItem("cokeB51");
	localStorage.removeItem("pepsiB51");
	localStorage.removeItem("stingB51");
	localStorage.removeItem("waterB51");
	localStorage.removeItem("teaB51");
	localStorage.removeItem("napkinB51");

}

const inputsB51 = document.querySelectorAll('input[type="number"]');
inputsB51.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnB51 = document.getElementById("addBtnB51");
const newDrinkFormB51 = document.getElementById("newDrinkFormB51");

addBtnB51.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});



//B5/3
function confirmCalculateB53() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateB53()
	}
}
function calculateB53() {
	const bottleTigerBacB53 = document.getElementById("bottleTigerBacB53").value;
	const bottleTigerNauB53 = document.getElementById("bottleTigerNauB53").value;
	const tigerNauB53 = document.getElementById("tigerNauB53").value;
	const tigerBacB53 = document.getElementById("tigerBacB53").value;
	const heinekenB53 = document.getElementById("heinekenB53").value;
	const sevenUpB53 = document.getElementById("sevenUpB53").value;
	const cokeB53 = document.getElementById("cokeB53").value;
	const pepsiB53 = document.getElementById("pepsiB53").value;
	const stingB53 = document.getElementById("stingB53").value;
	const waterNatureB53 = document.getElementById("waterB53").value;
	const teaB53 = document.getElementById("teaB53").value;
	const napkinB53 = document.getElementById("napkinB53").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacB53 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauB53 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauB53 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacB53 },
		{ name: "Bia Heineken", quantity: heinekenB53 },
		{ name: "Nước 7up", quantity: sevenUpB53 },
		{ name: "Nước CocaCola", quantity: cokeB53 },
		{ name: "Nước pepsi", quantity: pepsiB53 },
		{ name: "Nước Sting", quantity: stingB53 },
		{ name: "Nước suối", quantity: waterNatureB53 },
		{ name: "Trà tắc", quantity: teaB53 },
		{ name: "Khăn giấy", quantity: napkinB53 },
	];

	const selectedProductsB53 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsB53.length; i++) {
		const product = selectedProductsB53[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderB53").innerHTML = bill;


	localStorage.setItem("tigerNauB53", tigerNauB53);
	localStorage.setItem("bottleTigerBacB53", bottleTigerBacB53);
	localStorage.setItem("bottleTigerNauB53", bottleTigerNauB53);
	localStorage.setItem("tigerBacB53", tigerBacB53);
	localStorage.setItem("heinekenB53", heinekenB53);
	localStorage.setItem("sevenUpB53", sevenUpB53);
	localStorage.setItem("cokeB53", cokeB53);
	localStorage.setItem("pepsiB53", pepsiB53)
	localStorage.setItem("stingB53", stingB53);
	localStorage.setItem("waterB53", waterNatureB53);
	localStorage.setItem("teaB53", teaB53);
	localStorage.setItem("napkinB53", napkinB53);

	localStorage.removeItem("bottleTigerBacB53");
	localStorage.removeItem("bottleTigerNauB53");
	localStorage.removeItem("tigerNauB53");
	localStorage.removeItem("tigerBacB53");
	localStorage.removeItem("heinekenB53");
	localStorage.removeItem("sevenUpB53");
	localStorage.removeItem("cokeB53");
	localStorage.removeItem("pepsiB53");
	localStorage.removeItem("stingB53");
	localStorage.removeItem("waterB53");
	localStorage.removeItem("teaB53");
	localStorage.removeItem("napkinB53");

	const totalB53 = (bottleTigerBacB53 * 26000) + (bottleTigerNauB53 * 25000) + (tigerNauB53 * 24000) + (tigerBacB53 * 25000) + (heinekenB53 * 26000) + (sevenUpB53 * 16000) + (cokeB53 * 16000) + (pepsiB53 * 16000) + (waterNatureB53 * 12000) + (stingB53 * 16000) + (teaB53 * 10000) + (napkinB53 * 3000);

	const historyB53 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyB53.push({ time: currentTime, totalB53: totalB53 });
	localStorage.setItem('totalHistory', JSON.stringify(historyB53));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalB53").innerHTML = "Tổng tiền: " + totalB53 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsB53 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsB53.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonB53 = document.getElementById("toggleDrinksB53");
const drinkElementsB53 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonB53.addEventListener("click", () => {
	drinkElementsB53.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonB53.classList.toggle("hidden");
	toggleDrinksButtonB53.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksB53 = localStorage.getItem("showDrinks");

if (showDrinksB53 === "1") {
	drinkElementsB53.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonB53.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonB53.classList.add("hidden");
} else {
	toggleDrinksButtonB53.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryB53() {
	const historyB53 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyB53.map((item, index) => `Lần ${index + 1}: ${item.totalB53} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyB53").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryB53()">Xoá lịch sử</button>';
}
function clearHistoryB53() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyB53").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyB53").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetB53() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllB53();
	}
}
function resetAllB53() {
	let inputs = {
		'bottleTigerBacB53': document.getElementById('bottleTigerBacB53').value,
		'bottleTigerNauB53': document.getElementById('bottleTigerNauB53').value,
		'tigerNauB53': document.getElementById('tigerNauB53').value,
		'tigerBacB53': document.getElementById('tigerBacB53').value,
		'heinekenB53': document.getElementById('heinekenB53').value,
		'sevenUpB53': document.getElementById('sevenUpB53').value,
		'cokeB53': document.getElementById('cokeB53').value,
		'pepsiB53': document.getElementById('pepsiB53').value,
		'stingB53': document.getElementById('stingB53').value,
		'waterNatureB53': document.getElementById('waterB53').value,
		'napkinB53': document.getElementById('napkinB53').value,
		'teaB53': document.getElementById('teaB53').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacB53').value = savedInputs.bottleTigerBacB53;
		document.getElementById('bottleTigerNauB53').value = savedInputs.bottleTigerNauB53;
		document.getElementById('tigerNauB53').value = savedInputs.tigerNauB53;
		document.getElementById('tigerBacB53').value = savedInputs.tigerBacB53;
		document.getElementById('heinekenB53').value = savedInputs.heinekenB53;
		document.getElementById('sevenUpB53').value = savedInputs.sevenUpB53;
		document.getElementById('cokeB53').value = savedInputs.cokeB53;
		document.getElementById('pepsiB53').value = savedInputs.pepsiB53;
		document.getElementById('stingB53').value = savedInputs.stingB53;
		document.getElementById('waterB53').value = savedInputs.waterB53;
		document.getElementById('teaB53').value = savedInputs.teaB53;
		document.getElementById('napkinB53').value = savedInputs.napkinB53;
	}

	document.getElementById('bottleTigerBacB53').value = '';
	document.getElementById('bottleTigerNauB53').value = '';
	document.getElementById('tigerNauB53').value = '';
	document.getElementById('tigerBacB53').value = '';
	document.getElementById('heinekenB53').value = '';
	document.getElementById('sevenUpB53').value = '';
	document.getElementById('cokeB53').value = '';
	document.getElementById('pepsiB53').value = '';
	document.getElementById('stingB53').value = '';
	document.getElementById('waterB53').value = '';
	document.getElementById('teaB53').value = '';
	document.getElementById('napkinB53').value = '';


	localStorage.removeItem("bottleTigerBacB53");
	localStorage.removeItem("bottleTigerNauB53");
	localStorage.removeItem("tigerNauB53");
	localStorage.removeItem("tigerBacB53");
	localStorage.removeItem("heinekenB53");
	localStorage.removeItem("sevenUpB53");
	localStorage.removeItem("cokeB53");
	localStorage.removeItem("pepsiB53");
	localStorage.removeItem("stingB53");
	localStorage.removeItem("waterB53");
	localStorage.removeItem("teaB53");
	localStorage.removeItem("napkinB53");

}

const inputsB53 = document.querySelectorAll('input[type="number"]');
inputsB53.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnB53 = document.getElementById("addBtnB53");
const newDrinkFormB53 = document.getElementById("newDrinkFormB53");

addBtnB53.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});


//B5/2
function confirmCalculateB52() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateB52()
	}
}
function calculateB52() {
	const bottleTigerBacB52 = document.getElementById("bottleTigerBacB52").value;
	const bottleTigerNauB52 = document.getElementById("bottleTigerNauB52").value;
	const tigerNauB52 = document.getElementById("tigerNauB52").value;
	const tigerBacB52 = document.getElementById("tigerBacB52").value;
	const heinekenB52 = document.getElementById("heinekenB52").value;
	const sevenUpB52 = document.getElementById("sevenUpB52").value;
	const cokeB52 = document.getElementById("cokeB52").value;
	const pepsiB52 = document.getElementById("pepsiB52").value;
	const stingB52 = document.getElementById("stingB52").value;
	const waterNatureB52 = document.getElementById("waterB52").value;
	const teaB52 = document.getElementById("teaB52").value;
	const napkinB52 = document.getElementById("napkinB52").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacB52 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauB52 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauB52 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacB52 },
		{ name: "Bia Heineken", quantity: heinekenB52 },
		{ name: "Nước 7up", quantity: sevenUpB52 },
		{ name: "Nước CocaCola", quantity: cokeB52 },
		{ name: "Nước pepsi", quantity: pepsiB52 },
		{ name: "Nước Sting", quantity: stingB52 },
		{ name: "Nước suối", quantity: waterNatureB52 },
		{ name: "Trà tắc", quantity: teaB52 },
		{ name: "Khăn giấy", quantity: napkinB52 },
	];

	const selectedProductsB52 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsB52.length; i++) {
		const product = selectedProductsB52[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderB52").innerHTML = bill;


	localStorage.setItem("tigerNauB52", tigerNauB52);
	localStorage.setItem("bottleTigerBacB52", bottleTigerBacB52);
	localStorage.setItem("bottleTigerNauB52", bottleTigerNauB52);
	localStorage.setItem("tigerBacB52", tigerBacB52);
	localStorage.setItem("heinekenB52", heinekenB52);
	localStorage.setItem("sevenUpB52", sevenUpB52);
	localStorage.setItem("cokeB52", cokeB52);
	localStorage.setItem("pepsiB52", pepsiB52)
	localStorage.setItem("stingB52", stingB52);
	localStorage.setItem("waterB52", waterNatureB52);
	localStorage.setItem("teaB52", teaB52);
	localStorage.setItem("napkinB52", napkinB52);

	localStorage.removeItem("bottleTigerBacB52");
	localStorage.removeItem("bottleTigerNauB52");
	localStorage.removeItem("tigerNauB52");
	localStorage.removeItem("tigerBacB52");
	localStorage.removeItem("heinekenB52");
	localStorage.removeItem("sevenUpB52");
	localStorage.removeItem("cokeB52");
	localStorage.removeItem("pepsiB52");
	localStorage.removeItem("stingB52");
	localStorage.removeItem("waterB52");
	localStorage.removeItem("teaB52");
	localStorage.removeItem("napkinB52");

	const totalB52 = (bottleTigerBacB52 * 26000) + (bottleTigerNauB52 * 25000) + (tigerNauB52 * 24000) + (tigerBacB52 * 25000) + (heinekenB52 * 26000) + (sevenUpB52 * 16000) + (cokeB52 * 16000) + (pepsiB52 * 16000) + (waterNatureB52 * 12000) + (stingB52 * 16000) + (teaB52 * 10000) + (napkinB52 * 3000);

	const historyB52 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyB52.push({ time: currentTime, totalB52: totalB52 });
	localStorage.setItem('totalHistory', JSON.stringify(historyB52));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalB52").innerHTML = "Tổng tiền: " + totalB52 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsB52 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsB52.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonB52 = document.getElementById("toggleDrinksB52");
const drinkElementsB52 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonB52.addEventListener("click", () => {
	drinkElementsB52.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonB52.classList.toggle("hidden");
	toggleDrinksButtonB52.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksB52 = localStorage.getItem("showDrinks");

if (showDrinksB52 === "1") {
	drinkElementsB52.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonB52.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonB52.classList.add("hidden");
} else {
	toggleDrinksButtonB52.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryB52() {
	const historyB52 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyB52.map((item, index) => `Lần ${index + 1}: ${item.totalB52} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyB52").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryB52()">Xoá lịch sử</button>';
}
function clearHistoryB52() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyB52").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyB52").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetB52() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllB52();
	}
}
function resetAllB52() {
	let inputs = {
		'bottleTigerBacB52': document.getElementById('bottleTigerBacB52').value,
		'bottleTigerNauB52': document.getElementById('bottleTigerNauB52').value,
		'tigerNauB52': document.getElementById('tigerNauB52').value,
		'tigerBacB52': document.getElementById('tigerBacB52').value,
		'heinekenB52': document.getElementById('heinekenB52').value,
		'sevenUpB52': document.getElementById('sevenUpB52').value,
		'cokeB52': document.getElementById('cokeB52').value,
		'pepsiB52': document.getElementById('pepsiB52').value,
		'stingB52': document.getElementById('stingB52').value,
		'waterNatureB52': document.getElementById('waterB52').value,
		'napkinB52': document.getElementById('napkinB52').value,
		'teaB52': document.getElementById('teaB52').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacB52').value = savedInputs.bottleTigerBacB52;
		document.getElementById('bottleTigerNauB52').value = savedInputs.bottleTigerNauB52;
		document.getElementById('tigerNauB52').value = savedInputs.tigerNauB52;
		document.getElementById('tigerBacB52').value = savedInputs.tigerBacB52;
		document.getElementById('heinekenB52').value = savedInputs.heinekenB52;
		document.getElementById('sevenUpB52').value = savedInputs.sevenUpB52;
		document.getElementById('cokeB52').value = savedInputs.cokeB52;
		document.getElementById('pepsiB52').value = savedInputs.pepsiB52;
		document.getElementById('stingB52').value = savedInputs.stingB52;
		document.getElementById('waterB52').value = savedInputs.waterB52;
		document.getElementById('teaB52').value = savedInputs.teaB52;
		document.getElementById('napkinB52').value = savedInputs.napkinB52;
	}

	document.getElementById('bottleTigerBacB52').value = '';
	document.getElementById('bottleTigerNauB52').value = '';
	document.getElementById('tigerNauB52').value = '';
	document.getElementById('tigerBacB52').value = '';
	document.getElementById('heinekenB52').value = '';
	document.getElementById('sevenUpB52').value = '';
	document.getElementById('cokeB52').value = '';
	document.getElementById('pepsiB52').value = '';
	document.getElementById('stingB52').value = '';
	document.getElementById('waterB52').value = '';
	document.getElementById('teaB52').value = '';
	document.getElementById('napkinB52').value = '';


	localStorage.removeItem("bottleTigerBacB52");
	localStorage.removeItem("bottleTigerNauB52");
	localStorage.removeItem("tigerNauB52");
	localStorage.removeItem("tigerBacB52");
	localStorage.removeItem("heinekenB52");
	localStorage.removeItem("sevenUpB52");
	localStorage.removeItem("cokeB52");
	localStorage.removeItem("pepsiB52");
	localStorage.removeItem("stingB52");
	localStorage.removeItem("waterB52");
	localStorage.removeItem("teaB52");
	localStorage.removeItem("napkinB52");

}

const inputsB52 = document.querySelectorAll('input[type="number"]');
inputsB52.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnB52 = document.getElementById("addBtnB52");
const newDrinkFormB52 = document.getElementById("newDrinkFormB52");

addBtnB52.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});



//C1/1
function confirmCalculateC11() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateC11()
	}
}
function calculateC11() {
	const bottleTigerBacC11 = document.getElementById("bottleTigerBacC11").value;
	const bottleTigerNauC11 = document.getElementById("bottleTigerNauC11").value;
	const tigerNauC11 = document.getElementById("tigerNauC11").value;
	const tigerBacC11 = document.getElementById("tigerBacC11").value;
	const heinekenC11 = document.getElementById("heinekenC11").value;
	const sevenUpC11 = document.getElementById("sevenUpC11").value;
	const cokeC11 = document.getElementById("cokeC11").value;
	const pepsiC11 = document.getElementById("pepsiC11").value;
	const stingC11 = document.getElementById("stingC11").value;
	const waterNatureC11 = document.getElementById("waterC11").value;
	const teaC11 = document.getElementById("teaC11").value;
	const napkinC11 = document.getElementById("napkinC11").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacC11 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauC11 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauC11 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacC11 },
		{ name: "Bia Heineken", quantity: heinekenC11 },
		{ name: "Nước 7up", quantity: sevenUpC11 },
		{ name: "Nước CocaCola", quantity: cokeC11 },
		{ name: "Nước pepsi", quantity: pepsiC11 },
		{ name: "Nước Sting", quantity: stingC11 },
		{ name: "Nước suối", quantity: waterNatureC11 },
		{ name: "Trà tắc", quantity: teaC11 },
		{ name: "Khăn giấy", quantity: napkinC11 },
	];

	const selectedProductsC11 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsC11.length; i++) {
		const product = selectedProductsC11[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderC11").innerHTML = bill;


	localStorage.setItem("tigerNauC11", tigerNauC11);
	localStorage.setItem("bottleTigerBacC11", bottleTigerBacC11);
	localStorage.setItem("bottleTigerNauC11", bottleTigerNauC11);
	localStorage.setItem("tigerBacC11", tigerBacC11);
	localStorage.setItem("heinekenC11", heinekenC11);
	localStorage.setItem("sevenUpC11", sevenUpC11);
	localStorage.setItem("cokeC11", cokeC11);
	localStorage.setItem("pepsiC11", pepsiC11)
	localStorage.setItem("stingC11", stingC11);
	localStorage.setItem("waterC11", waterNatureC11);
	localStorage.setItem("teaC11", teaC11);
	localStorage.setItem("napkinC11", napkinC11);

	localStorage.removeItem("bottleTigerBacC11");
	localStorage.removeItem("bottleTigerNauC11");
	localStorage.removeItem("tigerNauC11");
	localStorage.removeItem("tigerBacC11");
	localStorage.removeItem("heinekenC11");
	localStorage.removeItem("sevenUpC11");
	localStorage.removeItem("cokeC11");
	localStorage.removeItem("pepsiC11");
	localStorage.removeItem("stingC11");
	localStorage.removeItem("waterC11");
	localStorage.removeItem("teaC11");
	localStorage.removeItem("napkinC11");

	const totalC11 = (bottleTigerBacC11 * 26000) + (bottleTigerNauC11 * 25000) + (tigerNauC11 * 24000) + (tigerBacC11 * 25000) + (heinekenC11 * 26000) + (sevenUpC11 * 16000) + (cokeC11 * 16000) + (pepsiC11 * 16000) + (waterNatureC11 * 12000) + (stingC11 * 16000) + (teaC11 * 10000) + (napkinC11 * 3000);

	const historyC11 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyC11.push({ time: currentTime, totalC11: totalC11 });
	localStorage.setItem('totalHistory', JSON.stringify(historyC11));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalC11").innerHTML = "Tổng tiền: " + totalC11 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsC11 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsC11.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonC11 = document.getElementById("toggleDrinksC11");
const drinkElementsC11 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonC11.addEventListener("click", () => {
	drinkElementsC11.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonC11.classList.toggle("hidden");
	toggleDrinksButtonC11.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksC11 = localStorage.getItem("showDrinks");

if (showDrinksC11 === "1") {
	drinkElementsC11.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonC11.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonC11.classList.add("hidden");
} else {
	toggleDrinksButtonC11.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryC11() {
	const historyC11 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyC11.map((item, index) => `Lần ${index + 1}: ${item.totalC11} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyC11").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryC11()">Xoá lịch sử</button>';
}
function clearHistoryC11() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyC11").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyC11").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetC11() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllC11();
	}
}
function resetAllC11() {
	let inputs = {
		'bottleTigerBacC11': document.getElementById('bottleTigerBacC11').value,
		'bottleTigerNauC11': document.getElementById('bottleTigerNauC11').value,
		'tigerNauC11': document.getElementById('tigerNauC11').value,
		'tigerBacC11': document.getElementById('tigerBacC11').value,
		'heinekenC11': document.getElementById('heinekenC11').value,
		'sevenUpC11': document.getElementById('sevenUpC11').value,
		'cokeC11': document.getElementById('cokeC11').value,
		'pepsiC11': document.getElementById('pepsiC11').value,
		'stingC11': document.getElementById('stingC11').value,
		'waterNatureC11': document.getElementById('waterC11').value,
		'napkinC11': document.getElementById('napkinC11').value,
		'teaC11': document.getElementById('teaC11').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacC11').value = savedInputs.bottleTigerBacC11;
		document.getElementById('bottleTigerNauC11').value = savedInputs.bottleTigerNauC11;
		document.getElementById('tigerNauC11').value = savedInputs.tigerNauC11;
		document.getElementById('tigerBacC11').value = savedInputs.tigerBacC11;
		document.getElementById('heinekenC11').value = savedInputs.heinekenC11;
		document.getElementById('sevenUpC11').value = savedInputs.sevenUpC11;
		document.getElementById('cokeC11').value = savedInputs.cokeC11;
		document.getElementById('pepsiC11').value = savedInputs.pepsiC11;
		document.getElementById('stingC11').value = savedInputs.stingC11;
		document.getElementById('waterC11').value = savedInputs.waterC11;
		document.getElementById('teaC11').value = savedInputs.teaC11;
		document.getElementById('napkinC11').value = savedInputs.napkinC11;
	}

	document.getElementById('bottleTigerBacC11').value = '';
	document.getElementById('bottleTigerNauC11').value = '';
	document.getElementById('tigerNauC11').value = '';
	document.getElementById('tigerBacC11').value = '';
	document.getElementById('heinekenC11').value = '';
	document.getElementById('sevenUpC11').value = '';
	document.getElementById('cokeC11').value = '';
	document.getElementById('pepsiC11').value = '';
	document.getElementById('stingC11').value = '';
	document.getElementById('waterC11').value = '';
	document.getElementById('teaC11').value = '';
	document.getElementById('napkinC11').value = '';


	localStorage.removeItem("bottleTigerBacC11");
	localStorage.removeItem("bottleTigerNauC11");
	localStorage.removeItem("tigerNauC11");
	localStorage.removeItem("tigerBacC11");
	localStorage.removeItem("heinekenC11");
	localStorage.removeItem("sevenUpC11");
	localStorage.removeItem("cokeC11");
	localStorage.removeItem("pepsiC11");
	localStorage.removeItem("stingC11");
	localStorage.removeItem("waterC11");
	localStorage.removeItem("teaC11");
	localStorage.removeItem("napkinC11");

}

const inputsC11 = document.querySelectorAll('input[type="number"]');
inputsC11.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnC11 = document.getElementById("addBtnC11");
const newDrinkFormC11 = document.getElementById("newDrinkFormC11");

addBtnC11.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});


//C1/2
function confirmCalculateC12() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateC12()
	}
}
function calculateC12() {
	const bottleTigerBacC12 = document.getElementById("bottleTigerBacC12").value;
	const bottleTigerNauC12 = document.getElementById("bottleTigerNauC12").value;
	const tigerNauC12 = document.getElementById("tigerNauC12").value;
	const tigerBacC12 = document.getElementById("tigerBacC12").value;
	const heinekenC12 = document.getElementById("heinekenC12").value;
	const sevenUpC12 = document.getElementById("sevenUpC12").value;
	const cokeC12 = document.getElementById("cokeC12").value;
	const pepsiC12 = document.getElementById("pepsiC12").value;
	const stingC12 = document.getElementById("stingC12").value;
	const waterNatureC12 = document.getElementById("waterC12").value;
	const teaC12 = document.getElementById("teaC12").value;
	const napkinC12 = document.getElementById("napkinC12").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacC12 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauC12 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauC12 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacC12 },
		{ name: "Bia Heineken", quantity: heinekenC12 },
		{ name: "Nước 7up", quantity: sevenUpC12 },
		{ name: "Nước CocaCola", quantity: cokeC12 },
		{ name: "Nước pepsi", quantity: pepsiC12 },
		{ name: "Nước Sting", quantity: stingC12 },
		{ name: "Nước suối", quantity: waterNatureC12 },
		{ name: "Trà tắc", quantity: teaC12 },
		{ name: "Khăn giấy", quantity: napkinC12 },
	];

	const selectedProductsC12 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsC12.length; i++) {
		const product = selectedProductsC12[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderC12").innerHTML = bill;


	localStorage.setItem("tigerNauC12", tigerNauC12);
	localStorage.setItem("bottleTigerBacC12", bottleTigerBacC12);
	localStorage.setItem("bottleTigerNauC12", bottleTigerNauC12);
	localStorage.setItem("tigerBacC12", tigerBacC12);
	localStorage.setItem("heinekenC12", heinekenC12);
	localStorage.setItem("sevenUpC12", sevenUpC12);
	localStorage.setItem("cokeC12", cokeC12);
	localStorage.setItem("pepsiC12", pepsiC12)
	localStorage.setItem("stingC12", stingC12);
	localStorage.setItem("waterC12", waterNatureC12);
	localStorage.setItem("teaC12", teaC12);
	localStorage.setItem("napkinC12", napkinC12);

	localStorage.removeItem("bottleTigerBacC12");
	localStorage.removeItem("bottleTigerNauC12");
	localStorage.removeItem("tigerNauC12");
	localStorage.removeItem("tigerBacC12");
	localStorage.removeItem("heinekenC12");
	localStorage.removeItem("sevenUpC12");
	localStorage.removeItem("cokeC12");
	localStorage.removeItem("pepsiC12");
	localStorage.removeItem("stingC12");
	localStorage.removeItem("waterC12");
	localStorage.removeItem("teaC12");
	localStorage.removeItem("napkinC12");

	const totalC12 = (bottleTigerBacC12 * 26000) + (bottleTigerNauC12 * 25000) + (tigerNauC12 * 24000) + (tigerBacC12 * 25000) + (heinekenC12 * 26000) + (sevenUpC12 * 16000) + (cokeC12 * 16000) + (pepsiC12 * 16000) + (waterNatureC12 * 12000) + (stingC12 * 16000) + (teaC12 * 10000) + (napkinC12 * 3000);

	const historyC12 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyC12.push({ time: currentTime, totalC12: totalC12 });
	localStorage.setItem('totalHistory', JSON.stringify(historyC12));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalC12").innerHTML = "Tổng tiền: " + totalC12 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsC12 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsC12.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonC12 = document.getElementById("toggleDrinksC12");
const drinkElementsC12 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonC12.addEventListener("click", () => {
	drinkElementsC12.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonC12.classList.toggle("hidden");
	toggleDrinksButtonC12.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksC12 = localStorage.getItem("showDrinks");

if (showDrinksC12 === "1") {
	drinkElementsC12.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonC12.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonC12.classList.add("hidden");
} else {
	toggleDrinksButtonC12.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryC12() {
	const historyC12 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyC12.map((item, index) => `Lần ${index + 1}: ${item.totalC12} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyC12").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryC12()">Xoá lịch sử</button>';
}
function clearHistoryC12() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyC12").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyC12").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetC12() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllC12();
	}
}
function resetAllC12() {
	let inputs = {
		'bottleTigerBacC12': document.getElementById('bottleTigerBacC12').value,
		'bottleTigerNauC12': document.getElementById('bottleTigerNauC12').value,
		'tigerNauC12': document.getElementById('tigerNauC12').value,
		'tigerBacC12': document.getElementById('tigerBacC12').value,
		'heinekenC12': document.getElementById('heinekenC12').value,
		'sevenUpC12': document.getElementById('sevenUpC12').value,
		'cokeC12': document.getElementById('cokeC12').value,
		'pepsiC12': document.getElementById('pepsiC12').value,
		'stingC12': document.getElementById('stingC12').value,
		'waterNatureC12': document.getElementById('waterC12').value,
		'napkinC12': document.getElementById('napkinC12').value,
		'teaC12': document.getElementById('teaC12').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacC12').value = savedInputs.bottleTigerBacC12;
		document.getElementById('bottleTigerNauC12').value = savedInputs.bottleTigerNauC12;
		document.getElementById('tigerNauC12').value = savedInputs.tigerNauC12;
		document.getElementById('tigerBacC12').value = savedInputs.tigerBacC12;
		document.getElementById('heinekenC12').value = savedInputs.heinekenC12;
		document.getElementById('sevenUpC12').value = savedInputs.sevenUpC12;
		document.getElementById('cokeC12').value = savedInputs.cokeC12;
		document.getElementById('pepsiC12').value = savedInputs.pepsiC12;
		document.getElementById('stingC12').value = savedInputs.stingC12;
		document.getElementById('waterC12').value = savedInputs.waterC12;
		document.getElementById('teaC12').value = savedInputs.teaC12;
		document.getElementById('napkinC12').value = savedInputs.napkinC12;
	}

	document.getElementById('bottleTigerBacC12').value = '';
	document.getElementById('bottleTigerNauC12').value = '';
	document.getElementById('tigerNauC12').value = '';
	document.getElementById('tigerBacC12').value = '';
	document.getElementById('heinekenC12').value = '';
	document.getElementById('sevenUpC12').value = '';
	document.getElementById('cokeC12').value = '';
	document.getElementById('pepsiC12').value = '';
	document.getElementById('stingC12').value = '';
	document.getElementById('waterC12').value = '';
	document.getElementById('teaC12').value = '';
	document.getElementById('napkinC12').value = '';


	localStorage.removeItem("bottleTigerBacC12");
	localStorage.removeItem("bottleTigerNauC12");
	localStorage.removeItem("tigerNauC12");
	localStorage.removeItem("tigerBacC12");
	localStorage.removeItem("heinekenC12");
	localStorage.removeItem("sevenUpC12");
	localStorage.removeItem("cokeC12");
	localStorage.removeItem("pepsiC12");
	localStorage.removeItem("stingC12");
	localStorage.removeItem("waterC12");
	localStorage.removeItem("teaC12");
	localStorage.removeItem("napkinC12");

}

const inputsC12 = document.querySelectorAll('input[type="number"]');
inputsC12.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnC12 = document.getElementById("addBtnC12");
const newDrinkFormC12 = document.getElementById("newDrinkFormC12");

addBtnC12.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});
//B5/2
function confirmCalculateC13() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateC13()
	}
}
function calculateC13() {
	const bottleTigerBacC13 = document.getElementById("bottleTigerBacC13").value;
	const bottleTigerNauC13 = document.getElementById("bottleTigerNauC13").value;
	const tigerNauC13 = document.getElementById("tigerNauC13").value;
	const tigerBacC13 = document.getElementById("tigerBacC13").value;
	const heinekenC13 = document.getElementById("heinekenC13").value;
	const sevenUpC13 = document.getElementById("sevenUpC13").value;
	const cokeC13 = document.getElementById("cokeC13").value;
	const pepsiC13 = document.getElementById("pepsiC13").value;
	const stingC13 = document.getElementById("stingC13").value;
	const waterNatureC13 = document.getElementById("waterC13").value;
	const teaC13 = document.getElementById("teaC13").value;
	const napkinC13 = document.getElementById("napkinC13").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacC13 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauC13 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauC13 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacC13 },
		{ name: "Bia Heineken", quantity: heinekenC13 },
		{ name: "Nước 7up", quantity: sevenUpC13 },
		{ name: "Nước CocaCola", quantity: cokeC13 },
		{ name: "Nước pepsi", quantity: pepsiC13 },
		{ name: "Nước Sting", quantity: stingC13 },
		{ name: "Nước suối", quantity: waterNatureC13 },
		{ name: "Trà tắc", quantity: teaC13 },
		{ name: "Khăn giấy", quantity: napkinC13 },
	];

	const selectedProductsC13 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsC13.length; i++) {
		const product = selectedProductsC13[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderC13").innerHTML = bill;


	localStorage.setItem("tigerNauC13", tigerNauC13);
	localStorage.setItem("bottleTigerBacC13", bottleTigerBacC13);
	localStorage.setItem("bottleTigerNauC13", bottleTigerNauC13);
	localStorage.setItem("tigerBacC13", tigerBacC13);
	localStorage.setItem("heinekenC13", heinekenC13);
	localStorage.setItem("sevenUpC13", sevenUpC13);
	localStorage.setItem("cokeC13", cokeC13);
	localStorage.setItem("pepsiC13", pepsiC13)
	localStorage.setItem("stingC13", stingC13);
	localStorage.setItem("waterC13", waterNatureC13);
	localStorage.setItem("teaC13", teaC13);
	localStorage.setItem("napkinC13", napkinC13);

	localStorage.removeItem("bottleTigerBacC13");
	localStorage.removeItem("bottleTigerNauC13");
	localStorage.removeItem("tigerNauC13");
	localStorage.removeItem("tigerBacC13");
	localStorage.removeItem("heinekenC13");
	localStorage.removeItem("sevenUpC13");
	localStorage.removeItem("cokeC13");
	localStorage.removeItem("pepsiC13");
	localStorage.removeItem("stingC13");
	localStorage.removeItem("waterC13");
	localStorage.removeItem("teaC13");
	localStorage.removeItem("napkinC13");

	const totalC13 = (bottleTigerBacC13 * 26000) + (bottleTigerNauC13 * 25000) + (tigerNauC13 * 24000) + (tigerBacC13 * 25000) + (heinekenC13 * 26000) + (sevenUpC13 * 16000) + (cokeC13 * 16000) + (pepsiC13 * 16000) + (waterNatureC13 * 12000) + (stingC13 * 16000) + (teaC13 * 10000) + (napkinC13 * 3000);

	const historyC13 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyC13.push({ time: currentTime, totalC13: totalC13 });
	localStorage.setItem('totalHistory', JSON.stringify(historyC13));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalC13").innerHTML = "Tổng tiền: " + totalC13 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsC13 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsC13.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonC13 = document.getElementById("toggleDrinksC13");
const drinkElementsC13 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonC13.addEventListener("click", () => {
	drinkElementsC13.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonC13.classList.toggle("hidden");
	toggleDrinksButtonC13.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksC13 = localStorage.getItem("showDrinks");

if (showDrinksC13 === "1") {
	drinkElementsC13.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonC13.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonC13.classList.add("hidden");
} else {
	toggleDrinksButtonC13.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryC13() {
	const historyC13 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyC13.map((item, index) => `Lần ${index + 1}: ${item.totalC13} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyC13").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryC13()">Xoá lịch sử</button>';
}
function clearHistoryC13() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyC13").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyC13").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetC13() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllC13();
	}
}
function resetAllC13() {
	let inputs = {
		'bottleTigerBacC13': document.getElementById('bottleTigerBacC13').value,
		'bottleTigerNauC13': document.getElementById('bottleTigerNauC13').value,
		'tigerNauC13': document.getElementById('tigerNauC13').value,
		'tigerBacC13': document.getElementById('tigerBacC13').value,
		'heinekenC13': document.getElementById('heinekenC13').value,
		'sevenUpC13': document.getElementById('sevenUpC13').value,
		'cokeC13': document.getElementById('cokeC13').value,
		'pepsiC13': document.getElementById('pepsiC13').value,
		'stingC13': document.getElementById('stingC13').value,
		'waterNatureC13': document.getElementById('waterC13').value,
		'napkinC13': document.getElementById('napkinC13').value,
		'teaC13': document.getElementById('teaC13').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacC13').value = savedInputs.bottleTigerBacC13;
		document.getElementById('bottleTigerNauC13').value = savedInputs.bottleTigerNauC13;
		document.getElementById('tigerNauC13').value = savedInputs.tigerNauC13;
		document.getElementById('tigerBacC13').value = savedInputs.tigerBacC13;
		document.getElementById('heinekenC13').value = savedInputs.heinekenC13;
		document.getElementById('sevenUpC13').value = savedInputs.sevenUpC13;
		document.getElementById('cokeC13').value = savedInputs.cokeC13;
		document.getElementById('pepsiC13').value = savedInputs.pepsiC13;
		document.getElementById('stingC13').value = savedInputs.stingC13;
		document.getElementById('waterC13').value = savedInputs.waterC13;
		document.getElementById('teaC13').value = savedInputs.teaC13;
		document.getElementById('napkinC13').value = savedInputs.napkinC13;
	}

	document.getElementById('bottleTigerBacC13').value = '';
	document.getElementById('bottleTigerNauC13').value = '';
	document.getElementById('tigerNauC13').value = '';
	document.getElementById('tigerBacC13').value = '';
	document.getElementById('heinekenC13').value = '';
	document.getElementById('sevenUpC13').value = '';
	document.getElementById('cokeC13').value = '';
	document.getElementById('pepsiC13').value = '';
	document.getElementById('stingC13').value = '';
	document.getElementById('waterC13').value = '';
	document.getElementById('teaC13').value = '';
	document.getElementById('napkinC13').value = '';


	localStorage.removeItem("bottleTigerBacC13");
	localStorage.removeItem("bottleTigerNauC13");
	localStorage.removeItem("tigerNauC13");
	localStorage.removeItem("tigerBacC13");
	localStorage.removeItem("heinekenC13");
	localStorage.removeItem("sevenUpC13");
	localStorage.removeItem("cokeC13");
	localStorage.removeItem("pepsiC13");
	localStorage.removeItem("stingC13");
	localStorage.removeItem("waterC13");
	localStorage.removeItem("teaC13");
	localStorage.removeItem("napkinC13");

}

const inputsC13 = document.querySelectorAll('input[type="number"]');
inputsC13.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnC13 = document.getElementById("addBtnC13");
const newDrinkFormC13 = document.getElementById("newDrinkFormC13");

addBtnC13.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});


//C2/1
function confirmCalculateC21() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateC21()
	}
}
function calculateC21() {
	const bottleTigerBacC21 = document.getElementById("bottleTigerBacC21").value;
	const bottleTigerNauC21 = document.getElementById("bottleTigerNauC21").value;
	const tigerNauC21 = document.getElementById("tigerNauC21").value;
	const tigerBacC21 = document.getElementById("tigerBacC21").value;
	const heinekenC21 = document.getElementById("heinekenC21").value;
	const sevenUpC21 = document.getElementById("sevenUpC21").value;
	const cokeC21 = document.getElementById("cokeC21").value;
	const pepsiC21 = document.getElementById("pepsiC21").value;
	const stingC21 = document.getElementById("stingC21").value;
	const waterNatureC21 = document.getElementById("waterC21").value;
	const teaC21 = document.getElementById("teaC21").value;
	const napkinC21 = document.getElementById("napkinC21").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacC21 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauC21 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauC21 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacC21 },
		{ name: "Bia Heineken", quantity: heinekenC21 },
		{ name: "Nước 7up", quantity: sevenUpC21 },
		{ name: "Nước CocaCola", quantity: cokeC21 },
		{ name: "Nước pepsi", quantity: pepsiC21 },
		{ name: "Nước Sting", quantity: stingC21 },
		{ name: "Nước suối", quantity: waterNatureC21 },
		{ name: "Trà tắc", quantity: teaC21 },
		{ name: "Khăn giấy", quantity: napkinC21 },
	];

	const selectedProductsC21 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsC21.length; i++) {
		const product = selectedProductsC21[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderC21").innerHTML = bill;


	localStorage.setItem("tigerNauC21", tigerNauC21);
	localStorage.setItem("bottleTigerBacC21", bottleTigerBacC21);
	localStorage.setItem("bottleTigerNauC21", bottleTigerNauC21);
	localStorage.setItem("tigerBacC21", tigerBacC21);
	localStorage.setItem("heinekenC21", heinekenC21);
	localStorage.setItem("sevenUpC21", sevenUpC21);
	localStorage.setItem("cokeC21", cokeC21);
	localStorage.setItem("pepsiC21", pepsiC21)
	localStorage.setItem("stingC21", stingC21);
	localStorage.setItem("waterC21", waterNatureC21);
	localStorage.setItem("teaC21", teaC21);
	localStorage.setItem("napkinC21", napkinC21);

	localStorage.removeItem("bottleTigerBacC21");
	localStorage.removeItem("bottleTigerNauC21");
	localStorage.removeItem("tigerNauC21");
	localStorage.removeItem("tigerBacC21");
	localStorage.removeItem("heinekenC21");
	localStorage.removeItem("sevenUpC21");
	localStorage.removeItem("cokeC21");
	localStorage.removeItem("pepsiC21");
	localStorage.removeItem("stingC21");
	localStorage.removeItem("waterC21");
	localStorage.removeItem("teaC21");
	localStorage.removeItem("napkinC21");

	const totalC21 = (bottleTigerBacC21 * 26000) + (bottleTigerNauC21 * 25000) + (tigerNauC21 * 24000) + (tigerBacC21 * 25000) + (heinekenC21 * 26000) + (sevenUpC21 * 16000) + (cokeC21 * 16000) + (pepsiC21 * 16000) + (waterNatureC21 * 12000) + (stingC21 * 16000) + (teaC21 * 10000) + (napkinC21 * 3000);

	const historyC21 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyC21.push({ time: currentTime, totalC21: totalC21 });
	localStorage.setItem('totalHistory', JSON.stringify(historyC21));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalC21").innerHTML = "Tổng tiền: " + totalC21 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsC21 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsC21.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonC21 = document.getElementById("toggleDrinksC21");
const drinkElementsC21 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonC21.addEventListener("click", () => {
	drinkElementsC21.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonC21.classList.toggle("hidden");
	toggleDrinksButtonC21.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksC21 = localStorage.getItem("showDrinks");

if (showDrinksC21 === "1") {
	drinkElementsC21.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonC21.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonC21.classList.add("hidden");
} else {
	toggleDrinksButtonC21.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryC21() {
	const historyC21 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyC21.map((item, index) => `Lần ${index + 1}: ${item.totalC21} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyC21").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryC21()">Xoá lịch sử</button>';
}
function clearHistoryC21() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyC21").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyC21").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetC21() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllC21();
	}
}
function resetAllC21() {
	let inputs = {
		'bottleTigerBacC21': document.getElementById('bottleTigerBacC21').value,
		'bottleTigerNauC21': document.getElementById('bottleTigerNauC21').value,
		'tigerNauC21': document.getElementById('tigerNauC21').value,
		'tigerBacC21': document.getElementById('tigerBacC21').value,
		'heinekenC21': document.getElementById('heinekenC21').value,
		'sevenUpC21': document.getElementById('sevenUpC21').value,
		'cokeC21': document.getElementById('cokeC21').value,
		'pepsiC21': document.getElementById('pepsiC21').value,
		'stingC21': document.getElementById('stingC21').value,
		'waterNatureC21': document.getElementById('waterC21').value,
		'napkinC21': document.getElementById('napkinC21').value,
		'teaC21': document.getElementById('teaC21').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacC21').value = savedInputs.bottleTigerBacC21;
		document.getElementById('bottleTigerNauC21').value = savedInputs.bottleTigerNauC21;
		document.getElementById('tigerNauC21').value = savedInputs.tigerNauC21;
		document.getElementById('tigerBacC21').value = savedInputs.tigerBacC21;
		document.getElementById('heinekenC21').value = savedInputs.heinekenC21;
		document.getElementById('sevenUpC21').value = savedInputs.sevenUpC21;
		document.getElementById('cokeC21').value = savedInputs.cokeC21;
		document.getElementById('pepsiC21').value = savedInputs.pepsiC21;
		document.getElementById('stingC21').value = savedInputs.stingC21;
		document.getElementById('waterC21').value = savedInputs.waterC21;
		document.getElementById('teaC21').value = savedInputs.teaC21;
		document.getElementById('napkinC21').value = savedInputs.napkinC21;
	}

	document.getElementById('bottleTigerBacC21').value = '';
	document.getElementById('bottleTigerNauC21').value = '';
	document.getElementById('tigerNauC21').value = '';
	document.getElementById('tigerBacC21').value = '';
	document.getElementById('heinekenC21').value = '';
	document.getElementById('sevenUpC21').value = '';
	document.getElementById('cokeC21').value = '';
	document.getElementById('pepsiC21').value = '';
	document.getElementById('stingC21').value = '';
	document.getElementById('waterC21').value = '';
	document.getElementById('teaC21').value = '';
	document.getElementById('napkinC21').value = '';


	localStorage.removeItem("bottleTigerBacC21");
	localStorage.removeItem("bottleTigerNauC21");
	localStorage.removeItem("tigerNauC21");
	localStorage.removeItem("tigerBacC21");
	localStorage.removeItem("heinekenC21");
	localStorage.removeItem("sevenUpC21");
	localStorage.removeItem("cokeC21");
	localStorage.removeItem("pepsiC21");
	localStorage.removeItem("stingC21");
	localStorage.removeItem("waterC21");
	localStorage.removeItem("teaC21");
	localStorage.removeItem("napkinC21");

}

const inputsC21 = document.querySelectorAll('input[type="number"]');
inputsC21.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnC21 = document.getElementById("addBtnC21");
const newDrinkFormC21 = document.getElementById("newDrinkFormC21");

addBtnC21.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});

//C2/2
function confirmCalculateC22() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateC22()
	}
}
function calculateC22() {
	const bottleTigerBacC22 = document.getElementById("bottleTigerBacC22").value;
	const bottleTigerNauC22 = document.getElementById("bottleTigerNauC22").value;
	const tigerNauC22 = document.getElementById("tigerNauC22").value;
	const tigerBacC22 = document.getElementById("tigerBacC22").value;
	const heinekenC22 = document.getElementById("heinekenC22").value;
	const sevenUpC22 = document.getElementById("sevenUpC22").value;
	const cokeC22 = document.getElementById("cokeC22").value;
	const pepsiC22 = document.getElementById("pepsiC22").value;
	const stingC22 = document.getElementById("stingC22").value;
	const waterNatureC22 = document.getElementById("waterC22").value;
	const teaC22 = document.getElementById("teaC22").value;
	const napkinC22 = document.getElementById("napkinC22").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacC22 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauC22 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauC22 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacC22 },
		{ name: "Bia Heineken", quantity: heinekenC22 },
		{ name: "Nước 7up", quantity: sevenUpC22 },
		{ name: "Nước CocaCola", quantity: cokeC22 },
		{ name: "Nước pepsi", quantity: pepsiC22 },
		{ name: "Nước Sting", quantity: stingC22 },
		{ name: "Nước suối", quantity: waterNatureC22 },
		{ name: "Trà tắc", quantity: teaC22 },
		{ name: "Khăn giấy", quantity: napkinC22 },
	];

	const selectedProductsC22 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsC22.length; i++) {
		const product = selectedProductsC22[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderC22").innerHTML = bill;


	localStorage.setItem("tigerNauC22", tigerNauC22);
	localStorage.setItem("bottleTigerBacC22", bottleTigerBacC22);
	localStorage.setItem("bottleTigerNauC22", bottleTigerNauC22);
	localStorage.setItem("tigerBacC22", tigerBacC22);
	localStorage.setItem("heinekenC22", heinekenC22);
	localStorage.setItem("sevenUpC22", sevenUpC22);
	localStorage.setItem("cokeC22", cokeC22);
	localStorage.setItem("pepsiC22", pepsiC22)
	localStorage.setItem("stingC22", stingC22);
	localStorage.setItem("waterC22", waterNatureC22);
	localStorage.setItem("teaC22", teaC22);
	localStorage.setItem("napkinC22", napkinC22);

	localStorage.removeItem("bottleTigerBacC22");
	localStorage.removeItem("bottleTigerNauC22");
	localStorage.removeItem("tigerNauC22");
	localStorage.removeItem("tigerBacC22");
	localStorage.removeItem("heinekenC22");
	localStorage.removeItem("sevenUpC22");
	localStorage.removeItem("cokeC22");
	localStorage.removeItem("pepsiC22");
	localStorage.removeItem("stingC22");
	localStorage.removeItem("waterC22");
	localStorage.removeItem("teaC22");
	localStorage.removeItem("napkinC22");

	const totalC22 = (bottleTigerBacC22 * 26000) + (bottleTigerNauC22 * 25000) + (tigerNauC22 * 24000) + (tigerBacC22 * 25000) + (heinekenC22 * 26000) + (sevenUpC22 * 16000) + (cokeC22 * 16000) + (pepsiC22 * 16000) + (waterNatureC22 * 12000) + (stingC22 * 16000) + (teaC22 * 10000) + (napkinC22 * 3000);

	const historyC22 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyC22.push({ time: currentTime, totalC22: totalC22 });
	localStorage.setItem('totalHistory', JSON.stringify(historyC22));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalC22").innerHTML = "Tổng tiền: " + totalC22 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsC22 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsC22.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonC22 = document.getElementById("toggleDrinksC22");
const drinkElementsC22 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonC22.addEventListener("click", () => {
	drinkElementsC22.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonC22.classList.toggle("hidden");
	toggleDrinksButtonC22.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksC22 = localStorage.getItem("showDrinks");

if (showDrinksC22 === "1") {
	drinkElementsC22.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonC22.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonC22.classList.add("hidden");
} else {
	toggleDrinksButtonC22.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryC22() {
	const historyC22 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyC22.map((item, index) => `Lần ${index + 1}: ${item.totalC22} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyC22").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryC22()">Xoá lịch sử</button>';
}
function clearHistoryC22() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyC22").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyC22").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetC22() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllC22();
	}
}
function resetAllC22() {
	let inputs = {
		'bottleTigerBacC22': document.getElementById('bottleTigerBacC22').value,
		'bottleTigerNauC22': document.getElementById('bottleTigerNauC22').value,
		'tigerNauC22': document.getElementById('tigerNauC22').value,
		'tigerBacC22': document.getElementById('tigerBacC22').value,
		'heinekenC22': document.getElementById('heinekenC22').value,
		'sevenUpC22': document.getElementById('sevenUpC22').value,
		'cokeC22': document.getElementById('cokeC22').value,
		'pepsiC22': document.getElementById('pepsiC22').value,
		'stingC22': document.getElementById('stingC22').value,
		'waterNatureC22': document.getElementById('waterC22').value,
		'napkinC22': document.getElementById('napkinC22').value,
		'teaC22': document.getElementById('teaC22').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacC22').value = savedInputs.bottleTigerBacC22;
		document.getElementById('bottleTigerNauC22').value = savedInputs.bottleTigerNauC22;
		document.getElementById('tigerNauC22').value = savedInputs.tigerNauC22;
		document.getElementById('tigerBacC22').value = savedInputs.tigerBacC22;
		document.getElementById('heinekenC22').value = savedInputs.heinekenC22;
		document.getElementById('sevenUpC22').value = savedInputs.sevenUpC22;
		document.getElementById('cokeC22').value = savedInputs.cokeC22;
		document.getElementById('pepsiC22').value = savedInputs.pepsiC22;
		document.getElementById('stingC22').value = savedInputs.stingC22;
		document.getElementById('waterC22').value = savedInputs.waterC22;
		document.getElementById('teaC22').value = savedInputs.teaC22;
		document.getElementById('napkinC22').value = savedInputs.napkinC22;
	}

	document.getElementById('bottleTigerBacC22').value = '';
	document.getElementById('bottleTigerNauC22').value = '';
	document.getElementById('tigerNauC22').value = '';
	document.getElementById('tigerBacC22').value = '';
	document.getElementById('heinekenC22').value = '';
	document.getElementById('sevenUpC22').value = '';
	document.getElementById('cokeC22').value = '';
	document.getElementById('pepsiC22').value = '';
	document.getElementById('stingC22').value = '';
	document.getElementById('waterC22').value = '';
	document.getElementById('teaC22').value = '';
	document.getElementById('napkinC22').value = '';


	localStorage.removeItem("bottleTigerBacC22");
	localStorage.removeItem("bottleTigerNauC22");
	localStorage.removeItem("tigerNauC22");
	localStorage.removeItem("tigerBacC22");
	localStorage.removeItem("heinekenC22");
	localStorage.removeItem("sevenUpC22");
	localStorage.removeItem("cokeC22");
	localStorage.removeItem("pepsiC22");
	localStorage.removeItem("stingC22");
	localStorage.removeItem("waterC22");
	localStorage.removeItem("teaC22");
	localStorage.removeItem("napkinC22");

}

const inputsC22 = document.querySelectorAll('input[type="number"]');
inputsC22.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnC22 = document.getElementById("addBtnC22");
const newDrinkFormC22 = document.getElementById("newDrinkFormC22");

addBtnC22.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});

function confirmCalculateC23() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateC23()
	}
}
function calculateC23() {
	const bottleTigerBacC23 = document.getElementById("bottleTigerBacC23").value;
	const bottleTigerNauC23 = document.getElementById("bottleTigerNauC23").value;
	const tigerNauC23 = document.getElementById("tigerNauC23").value;
	const tigerBacC23 = document.getElementById("tigerBacC23").value;
	const heinekenC23 = document.getElementById("heinekenC23").value;
	const sevenUpC23 = document.getElementById("sevenUpC23").value;
	const cokeC23 = document.getElementById("cokeC23").value;
	const pepsiC23 = document.getElementById("pepsiC23").value;
	const stingC23 = document.getElementById("stingC23").value;
	const waterNatureC23 = document.getElementById("waterC23").value;
	const teaC23 = document.getElementById("teaC23").value;
	const napkinC23 = document.getElementById("napkinC23").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacC23 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauC23 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauC23 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacC23 },
		{ name: "Bia Heineken", quantity: heinekenC23 },
		{ name: "Nước 7up", quantity: sevenUpC23 },
		{ name: "Nước CocaCola", quantity: cokeC23 },
		{ name: "Nước pepsi", quantity: pepsiC23 },
		{ name: "Nước Sting", quantity: stingC23 },
		{ name: "Nước suối", quantity: waterNatureC23 },
		{ name: "Trà tắc", quantity: teaC23 },
		{ name: "Khăn giấy", quantity: napkinC23 },
	];

	const selectedProductsC23 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsC23.length; i++) {
		const product = selectedProductsC23[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderC23").innerHTML = bill;


	localStorage.setItem("tigerNauC23", tigerNauC23);
	localStorage.setItem("bottleTigerBacC23", bottleTigerBacC23);
	localStorage.setItem("bottleTigerNauC23", bottleTigerNauC23);
	localStorage.setItem("tigerBacC23", tigerBacC23);
	localStorage.setItem("heinekenC23", heinekenC23);
	localStorage.setItem("sevenUpC23", sevenUpC23);
	localStorage.setItem("cokeC23", cokeC23);
	localStorage.setItem("pepsiC23", pepsiC23)
	localStorage.setItem("stingC23", stingC23);
	localStorage.setItem("waterC23", waterNatureC23);
	localStorage.setItem("teaC23", teaC23);
	localStorage.setItem("napkinC23", napkinC23);

	localStorage.removeItem("bottleTigerBacC23");
	localStorage.removeItem("bottleTigerNauC23");
	localStorage.removeItem("tigerNauC23");
	localStorage.removeItem("tigerBacC23");
	localStorage.removeItem("heinekenC23");
	localStorage.removeItem("sevenUpC23");
	localStorage.removeItem("cokeC23");
	localStorage.removeItem("pepsiC23");
	localStorage.removeItem("stingC23");
	localStorage.removeItem("waterC23");
	localStorage.removeItem("teaC23");
	localStorage.removeItem("napkinC23");

	const totalC23 = (bottleTigerBacC23 * 26000) + (bottleTigerNauC23 * 25000) + (tigerNauC23 * 24000) + (tigerBacC23 * 25000) + (heinekenC23 * 26000) + (sevenUpC23 * 16000) + (cokeC23 * 16000) + (pepsiC23 * 16000) + (waterNatureC23 * 12000) + (stingC23 * 16000) + (teaC23 * 10000) + (napkinC23 * 3000);

	const historyC23 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyC23.push({ time: currentTime, totalC23: totalC23 });
	localStorage.setItem('totalHistory', JSON.stringify(historyC23));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalC23").innerHTML = "Tổng tiền: " + totalC23 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsC23 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsC23.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonC23 = document.getElementById("toggleDrinksC23");
const drinkElementsC23 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonC23.addEventListener("click", () => {
	drinkElementsC23.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonC23.classList.toggle("hidden");
	toggleDrinksButtonC23.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksC23 = localStorage.getItem("showDrinks");

if (showDrinksC23 === "1") {
	drinkElementsC23.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonC23.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonC23.classList.add("hidden");
} else {
	toggleDrinksButtonC23.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryC23() {
	const historyC23 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyC23.map((item, index) => `Lần ${index + 1}: ${item.totalC23} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyC23").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryC23()">Xoá lịch sử</button>';
}
function clearHistoryC23() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyC23").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyC23").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetC23() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllC23();
	}
}
function resetAllC23() {
	let inputs = {
		'bottleTigerBacC23': document.getElementById('bottleTigerBacC23').value,
		'bottleTigerNauC23': document.getElementById('bottleTigerNauC23').value,
		'tigerNauC23': document.getElementById('tigerNauC23').value,
		'tigerBacC23': document.getElementById('tigerBacC23').value,
		'heinekenC23': document.getElementById('heinekenC23').value,
		'sevenUpC23': document.getElementById('sevenUpC23').value,
		'cokeC23': document.getElementById('cokeC23').value,
		'pepsiC23': document.getElementById('pepsiC23').value,
		'stingC23': document.getElementById('stingC23').value,
		'waterNatureC23': document.getElementById('waterC23').value,
		'napkinC23': document.getElementById('napkinC23').value,
		'teaC23': document.getElementById('teaC23').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacC23').value = savedInputs.bottleTigerBacC23;
		document.getElementById('bottleTigerNauC23').value = savedInputs.bottleTigerNauC23;
		document.getElementById('tigerNauC23').value = savedInputs.tigerNauC23;
		document.getElementById('tigerBacC23').value = savedInputs.tigerBacC23;
		document.getElementById('heinekenC23').value = savedInputs.heinekenC23;
		document.getElementById('sevenUpC23').value = savedInputs.sevenUpC23;
		document.getElementById('cokeC23').value = savedInputs.cokeC23;
		document.getElementById('pepsiC23').value = savedInputs.pepsiC23;
		document.getElementById('stingC23').value = savedInputs.stingC23;
		document.getElementById('waterC23').value = savedInputs.waterC23;
		document.getElementById('teaC23').value = savedInputs.teaC23;
		document.getElementById('napkinC23').value = savedInputs.napkinC23;
	}

	document.getElementById('bottleTigerBacC23').value = '';
	document.getElementById('bottleTigerNauC23').value = '';
	document.getElementById('tigerNauC23').value = '';
	document.getElementById('tigerBacC23').value = '';
	document.getElementById('heinekenC23').value = '';
	document.getElementById('sevenUpC23').value = '';
	document.getElementById('cokeC23').value = '';
	document.getElementById('pepsiC23').value = '';
	document.getElementById('stingC23').value = '';
	document.getElementById('waterC23').value = '';
	document.getElementById('teaC23').value = '';
	document.getElementById('napkinC23').value = '';


	localStorage.removeItem("bottleTigerBacC23");
	localStorage.removeItem("bottleTigerNauC23");
	localStorage.removeItem("tigerNauC23");
	localStorage.removeItem("tigerBacC23");
	localStorage.removeItem("heinekenC23");
	localStorage.removeItem("sevenUpC23");
	localStorage.removeItem("cokeC23");
	localStorage.removeItem("pepsiC23");
	localStorage.removeItem("stingC23");
	localStorage.removeItem("waterC23");
	localStorage.removeItem("teaC23");
	localStorage.removeItem("napkinC23");

}

const inputsC23 = document.querySelectorAll('input[type="number"]');
inputsC23.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnC23 = document.getElementById("addBtnC23");
const newDrinkFormC23 = document.getElementById("newDrinkFormC23");

addBtnC23.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});

//B3/1
function confirmCalculateC31() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateC31()
	}
}
function calculateC31() {
	const bottleTigerBacC31 = document.getElementById("bottleTigerBacC31").value;
	const bottleTigerNauC31 = document.getElementById("bottleTigerNauC31").value;
	const tigerNauC31 = document.getElementById("tigerNauC31").value;
	const tigerBacC31 = document.getElementById("tigerBacC31").value;
	const heinekenC31 = document.getElementById("heinekenC31").value;
	const sevenUpC31 = document.getElementById("sevenUpC31").value;
	const cokeC31 = document.getElementById("cokeC31").value;
	const pepsiC31 = document.getElementById("pepsiC31").value;
	const stingC31 = document.getElementById("stingC31").value;
	const waterNatureC31 = document.getElementById("waterC31").value;
	const teaC31 = document.getElementById("teaC31").value;
	const napkinC31 = document.getElementById("napkinC31").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacC31 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauC31 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauC31 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacC31 },
		{ name: "Bia Heineken", quantity: heinekenC31 },
		{ name: "Nước 7up", quantity: sevenUpC31 },
		{ name: "Nước CocaCola", quantity: cokeC31 },
		{ name: "Nước pepsi", quantity: pepsiC31 },
		{ name: "Nước Sting", quantity: stingC31 },
		{ name: "Nước suối", quantity: waterNatureC31 },
		{ name: "Trà tắc", quantity: teaC31 },
		{ name: "Khăn giấy", quantity: napkinC31 },
	];

	const selectedProductsC31 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsC31.length; i++) {
		const product = selectedProductsC31[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderC31").innerHTML = bill;


	localStorage.setItem("tigerNauC31", tigerNauC31);
	localStorage.setItem("bottleTigerBacC31", bottleTigerBacC31);
	localStorage.setItem("bottleTigerNauC31", bottleTigerNauC31);
	localStorage.setItem("tigerBacC31", tigerBacC31);
	localStorage.setItem("heinekenC31", heinekenC31);
	localStorage.setItem("sevenUpC31", sevenUpC31);
	localStorage.setItem("cokeC31", cokeC31);
	localStorage.setItem("pepsiC31", pepsiC31)
	localStorage.setItem("stingC31", stingC31);
	localStorage.setItem("waterC31", waterNatureC31);
	localStorage.setItem("teaC31", teaC31);
	localStorage.setItem("napkinC31", napkinC31);

	localStorage.removeItem("bottleTigerBacC31");
	localStorage.removeItem("bottleTigerNauC31");
	localStorage.removeItem("tigerNauC31");
	localStorage.removeItem("tigerBacC31");
	localStorage.removeItem("heinekenC31");
	localStorage.removeItem("sevenUpC31");
	localStorage.removeItem("cokeC31");
	localStorage.removeItem("pepsiC31");
	localStorage.removeItem("stingC31");
	localStorage.removeItem("waterC31");
	localStorage.removeItem("teaC31");
	localStorage.removeItem("napkinC31");

	const totalC31 = (bottleTigerBacC31 * 26000) + (bottleTigerNauC31 * 25000) + (tigerNauC31 * 24000) + (tigerBacC31 * 25000) + (heinekenC31 * 26000) + (sevenUpC31 * 16000) + (cokeC31 * 16000) + (pepsiC31 * 16000) + (waterNatureC31 * 12000) + (stingC31 * 16000) + (teaC31 * 10000) + (napkinC31 * 3000);

	const historyC31 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyC31.push({ time: currentTime, totalC31: totalC31 });
	localStorage.setItem('totalHistory', JSON.stringify(historyC31));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalC31").innerHTML = "Tổng tiền: " + totalC31 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsC31 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsC31.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonC31 = document.getElementById("toggleDrinksC31");
const drinkElementsC31 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonC31.addEventListener("click", () => {
	drinkElementsC31.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonC31.classList.toggle("hidden");
	toggleDrinksButtonC31.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksC31 = localStorage.getItem("showDrinks");

if (showDrinksC31 === "1") {
	drinkElementsC31.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonC31.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonC31.classList.add("hidden");
} else {
	toggleDrinksButtonC31.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryC31() {
	const historyC31 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyC31.map((item, index) => `Lần ${index + 1}: ${item.totalC31} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyC31").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryC31()">Xoá lịch sử</button>';
}
function clearHistoryC31() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyC31").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyC31").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetC31() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllC31();
	}
}
function resetAllC31() {
	let inputs = {
		'bottleTigerBacC31': document.getElementById('bottleTigerBacC31').value,
		'bottleTigerNauC31': document.getElementById('bottleTigerNauC31').value,
		'tigerNauC31': document.getElementById('tigerNauC31').value,
		'tigerBacC31': document.getElementById('tigerBacC31').value,
		'heinekenC31': document.getElementById('heinekenC31').value,
		'sevenUpC31': document.getElementById('sevenUpC31').value,
		'cokeC31': document.getElementById('cokeC31').value,
		'pepsiC31': document.getElementById('pepsiC31').value,
		'stingC31': document.getElementById('stingC31').value,
		'waterNatureC31': document.getElementById('waterC31').value,
		'napkinC31': document.getElementById('napkinC31').value,
		'teaC31': document.getElementById('teaC31').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacC31').value = savedInputs.bottleTigerBacC31;
		document.getElementById('bottleTigerNauC31').value = savedInputs.bottleTigerNauC31;
		document.getElementById('tigerNauC31').value = savedInputs.tigerNauC31;
		document.getElementById('tigerBacC31').value = savedInputs.tigerBacC31;
		document.getElementById('heinekenC31').value = savedInputs.heinekenC31;
		document.getElementById('sevenUpC31').value = savedInputs.sevenUpC31;
		document.getElementById('cokeC31').value = savedInputs.cokeC31;
		document.getElementById('pepsiC31').value = savedInputs.pepsiC31;
		document.getElementById('stingC31').value = savedInputs.stingC31;
		document.getElementById('waterC31').value = savedInputs.waterC31;
		document.getElementById('teaC31').value = savedInputs.teaC31;
		document.getElementById('napkinC31').value = savedInputs.napkinC31;
	}

	document.getElementById('bottleTigerBacC31').value = '';
	document.getElementById('bottleTigerNauC31').value = '';
	document.getElementById('tigerNauC31').value = '';
	document.getElementById('tigerBacC31').value = '';
	document.getElementById('heinekenC31').value = '';
	document.getElementById('sevenUpC31').value = '';
	document.getElementById('cokeC31').value = '';
	document.getElementById('pepsiC31').value = '';
	document.getElementById('stingC31').value = '';
	document.getElementById('waterC31').value = '';
	document.getElementById('teaC31').value = '';
	document.getElementById('napkinC31').value = '';


	localStorage.removeItem("bottleTigerBacC31");
	localStorage.removeItem("bottleTigerNauC31");
	localStorage.removeItem("tigerNauC31");
	localStorage.removeItem("tigerBacC31");
	localStorage.removeItem("heinekenC31");
	localStorage.removeItem("sevenUpC31");
	localStorage.removeItem("cokeC31");
	localStorage.removeItem("pepsiC31");
	localStorage.removeItem("stingC31");
	localStorage.removeItem("waterC31");
	localStorage.removeItem("teaC31");
	localStorage.removeItem("napkinC31");

}

const inputsC31 = document.querySelectorAll('input[type="number"]');
inputsC31.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnC31 = document.getElementById("addBtnC31");
const newDrinkFormC31 = document.getElementById("newDrinkFormC31");

addBtnC31.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});

//C3/2

function confirmCalculateC32() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateC32()
	}
}
function calculateC32() {
	const bottleTigerBacC32 = document.getElementById("bottleTigerBacC32").value;
	const bottleTigerNauC32 = document.getElementById("bottleTigerNauC32").value;
	const tigerNauC32 = document.getElementById("tigerNauC32").value;
	const tigerBacC32 = document.getElementById("tigerBacC32").value;
	const heinekenC32 = document.getElementById("heinekenC32").value;
	const sevenUpC32 = document.getElementById("sevenUpC32").value;
	const cokeC32 = document.getElementById("cokeC32").value;
	const pepsiC32 = document.getElementById("pepsiC32").value;
	const stingC32 = document.getElementById("stingC32").value;
	const waterNatureC32 = document.getElementById("waterC32").value;
	const teaC32 = document.getElementById("teaC32").value;
	const napkinC32 = document.getElementById("napkinC32").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacC32 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauC32 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauC32 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacC32 },
		{ name: "Bia Heineken", quantity: heinekenC32 },
		{ name: "Nước 7up", quantity: sevenUpC32 },
		{ name: "Nước CocaCola", quantity: cokeC32 },
		{ name: "Nước pepsi", quantity: pepsiC32 },
		{ name: "Nước Sting", quantity: stingC32 },
		{ name: "Nước suối", quantity: waterNatureC32 },
		{ name: "Trà tắc", quantity: teaC32 },
		{ name: "Khăn giấy", quantity: napkinC32 },
	];

	const selectedProductsC32 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsC32.length; i++) {
		const product = selectedProductsC32[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderC32").innerHTML = bill;


	localStorage.setItem("tigerNauC32", tigerNauC32);
	localStorage.setItem("bottleTigerBacC32", bottleTigerBacC32);
	localStorage.setItem("bottleTigerNauC32", bottleTigerNauC32);
	localStorage.setItem("tigerBacC32", tigerBacC32);
	localStorage.setItem("heinekenC32", heinekenC32);
	localStorage.setItem("sevenUpC32", sevenUpC32);
	localStorage.setItem("cokeC32", cokeC32);
	localStorage.setItem("pepsiC32", pepsiC32)
	localStorage.setItem("stingC32", stingC32);
	localStorage.setItem("waterC32", waterNatureC32);
	localStorage.setItem("teaC32", teaC32);
	localStorage.setItem("napkinC32", napkinC32);

	localStorage.removeItem("bottleTigerBacC32");
	localStorage.removeItem("bottleTigerNauC32");
	localStorage.removeItem("tigerNauC32");
	localStorage.removeItem("tigerBacC32");
	localStorage.removeItem("heinekenC32");
	localStorage.removeItem("sevenUpC32");
	localStorage.removeItem("cokeC32");
	localStorage.removeItem("pepsiC32");
	localStorage.removeItem("stingC32");
	localStorage.removeItem("waterC32");
	localStorage.removeItem("teaC32");
	localStorage.removeItem("napkinC32");

	const totalC32 = (bottleTigerBacC32 * 26000) + (bottleTigerNauC32 * 25000) + (tigerNauC32 * 24000) + (tigerBacC32 * 25000) + (heinekenC32 * 26000) + (sevenUpC32 * 16000) + (cokeC32 * 16000) + (pepsiC32 * 16000) + (waterNatureC32 * 12000) + (stingC32 * 16000) + (teaC32 * 10000) + (napkinC32 * 3000);

	const historyC32 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyC32.push({ time: currentTime, totalC32: totalC32 });
	localStorage.setItem('totalHistory', JSON.stringify(historyC32));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalC32").innerHTML = "Tổng tiền: " + totalC32 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsC32 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsC32.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonC32 = document.getElementById("toggleDrinksC32");
const drinkElementsC32 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonC32.addEventListener("click", () => {
	drinkElementsC32.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonC32.classList.toggle("hidden");
	toggleDrinksButtonC32.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksC32 = localStorage.getItem("showDrinks");

if (showDrinksC32 === "1") {
	drinkElementsC32.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonC32.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonC32.classList.add("hidden");
} else {
	toggleDrinksButtonC32.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryC32() {
	const historyC32 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyC32.map((item, index) => `Lần ${index + 1}: ${item.totalC32} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyC32").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryC32()">Xoá lịch sử</button>';
}
function clearHistoryC32() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyC32").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyC32").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetC32() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllC32();
	}
}
function resetAllC32() {
	let inputs = {
		'bottleTigerBacC32': document.getElementById('bottleTigerBacC32').value,
		'bottleTigerNauC32': document.getElementById('bottleTigerNauC32').value,
		'tigerNauC32': document.getElementById('tigerNauC32').value,
		'tigerBacC32': document.getElementById('tigerBacC32').value,
		'heinekenC32': document.getElementById('heinekenC32').value,
		'sevenUpC32': document.getElementById('sevenUpC32').value,
		'cokeC32': document.getElementById('cokeC32').value,
		'pepsiC32': document.getElementById('pepsiC32').value,
		'stingC32': document.getElementById('stingC32').value,
		'waterNatureC32': document.getElementById('waterC32').value,
		'napkinC32': document.getElementById('napkinC32').value,
		'teaC32': document.getElementById('teaC32').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacC32').value = savedInputs.bottleTigerBacC32;
		document.getElementById('bottleTigerNauC32').value = savedInputs.bottleTigerNauC32;
		document.getElementById('tigerNauC32').value = savedInputs.tigerNauC32;
		document.getElementById('tigerBacC32').value = savedInputs.tigerBacC32;
		document.getElementById('heinekenC32').value = savedInputs.heinekenC32;
		document.getElementById('sevenUpC32').value = savedInputs.sevenUpC32;
		document.getElementById('cokeC32').value = savedInputs.cokeC32;
		document.getElementById('pepsiC32').value = savedInputs.pepsiC32;
		document.getElementById('stingC32').value = savedInputs.stingC32;
		document.getElementById('waterC32').value = savedInputs.waterC32;
		document.getElementById('teaC32').value = savedInputs.teaC32;
		document.getElementById('napkinC32').value = savedInputs.napkinC32;
	}

	document.getElementById('bottleTigerBacC32').value = '';
	document.getElementById('bottleTigerNauC32').value = '';
	document.getElementById('tigerNauC32').value = '';
	document.getElementById('tigerBacC32').value = '';
	document.getElementById('heinekenC32').value = '';
	document.getElementById('sevenUpC32').value = '';
	document.getElementById('cokeC32').value = '';
	document.getElementById('pepsiC32').value = '';
	document.getElementById('stingC32').value = '';
	document.getElementById('waterC32').value = '';
	document.getElementById('teaC32').value = '';
	document.getElementById('napkinC32').value = '';


	localStorage.removeItem("bottleTigerBacC32");
	localStorage.removeItem("bottleTigerNauC32");
	localStorage.removeItem("tigerNauC32");
	localStorage.removeItem("tigerBacC32");
	localStorage.removeItem("heinekenC32");
	localStorage.removeItem("sevenUpC32");
	localStorage.removeItem("cokeC32");
	localStorage.removeItem("pepsiC32");
	localStorage.removeItem("stingC32");
	localStorage.removeItem("waterC32");
	localStorage.removeItem("teaC32");
	localStorage.removeItem("napkinC32");

}

const inputsC32 = document.querySelectorAll('input[type="number"]');
inputsC32.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnC32 = document.getElementById("addBtnC32");
const newDrinkFormC32 = document.getElementById("newDrinkFormC32");

addBtnC32.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});

//C3/3

function confirmCalculateC33() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateC33()
	}
}
function calculateC33() {
	const bottleTigerBacC33 = document.getElementById("bottleTigerBacC33").value;
	const bottleTigerNauC33 = document.getElementById("bottleTigerNauC33").value;
	const tigerNauC33 = document.getElementById("tigerNauC33").value;
	const tigerBacC33 = document.getElementById("tigerBacC33").value;
	const heinekenC33 = document.getElementById("heinekenC33").value;
	const sevenUpC33 = document.getElementById("sevenUpC33").value;
	const cokeC33 = document.getElementById("cokeC33").value;
	const pepsiC33 = document.getElementById("pepsiC33").value;
	const stingC33 = document.getElementById("stingC33").value;
	const waterNatureC33 = document.getElementById("waterC33").value;
	const teaC33 = document.getElementById("teaC33").value;
	const napkinC33 = document.getElementById("napkinC33").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacC33 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauC33 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauC33 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacC33 },
		{ name: "Bia Heineken", quantity: heinekenC33 },
		{ name: "Nước 7up", quantity: sevenUpC33 },
		{ name: "Nước CocaCola", quantity: cokeC33 },
		{ name: "Nước pepsi", quantity: pepsiC33 },
		{ name: "Nước Sting", quantity: stingC33 },
		{ name: "Nước suối", quantity: waterNatureC33 },
		{ name: "Trà tắc", quantity: teaC33 },
		{ name: "Khăn giấy", quantity: napkinC33 },
	];

	const selectedProductsC33 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsC33.length; i++) {
		const product = selectedProductsC33[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderC33").innerHTML = bill;


	localStorage.setItem("tigerNauC33", tigerNauC33);
	localStorage.setItem("bottleTigerBacC33", bottleTigerBacC33);
	localStorage.setItem("bottleTigerNauC33", bottleTigerNauC33);
	localStorage.setItem("tigerBacC33", tigerBacC33);
	localStorage.setItem("heinekenC33", heinekenC33);
	localStorage.setItem("sevenUpC33", sevenUpC33);
	localStorage.setItem("cokeC33", cokeC33);
	localStorage.setItem("pepsiC33", pepsiC33)
	localStorage.setItem("stingC33", stingC33);
	localStorage.setItem("waterC33", waterNatureC33);
	localStorage.setItem("teaC33", teaC33);
	localStorage.setItem("napkinC33", napkinC33);

	localStorage.removeItem("bottleTigerBacC33");
	localStorage.removeItem("bottleTigerNauC33");
	localStorage.removeItem("tigerNauC33");
	localStorage.removeItem("tigerBacC33");
	localStorage.removeItem("heinekenC33");
	localStorage.removeItem("sevenUpC33");
	localStorage.removeItem("cokeC33");
	localStorage.removeItem("pepsiC33");
	localStorage.removeItem("stingC33");
	localStorage.removeItem("waterC33");
	localStorage.removeItem("teaC33");
	localStorage.removeItem("napkinC33");

	const totalC33 = (bottleTigerBacC33 * 26000) + (bottleTigerNauC33 * 25000) + (tigerNauC33 * 24000) + (tigerBacC33 * 25000) + (heinekenC33 * 26000) + (sevenUpC33 * 16000) + (cokeC33 * 16000) + (pepsiC33 * 16000) + (waterNatureC33 * 12000) + (stingC33 * 16000) + (teaC33 * 10000) + (napkinC33 * 3000);

	const historyC33 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyC33.push({ time: currentTime, totalC33: totalC33 });
	localStorage.setItem('totalHistory', JSON.stringify(historyC33));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalC33").innerHTML = "Tổng tiền: " + totalC33 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsC33 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsC33.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonC33 = document.getElementById("toggleDrinksC33");
const drinkElementsC33 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonC33.addEventListener("click", () => {
	drinkElementsC33.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonC33.classList.toggle("hidden");
	toggleDrinksButtonC33.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksC33 = localStorage.getItem("showDrinks");

if (showDrinksC33 === "1") {
	drinkElementsC33.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonC33.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonC33.classList.add("hidden");
} else {
	toggleDrinksButtonC33.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryC33() {
	const historyC33 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyC33.map((item, index) => `Lần ${index + 1}: ${item.totalC33} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyC33").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryC33()">Xoá lịch sử</button>';
}
function clearHistoryC33() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyC33").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyC33").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetC33() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllC33();
	}
}
function resetAllC33() {
	let inputs = {
		'bottleTigerBacC33': document.getElementById('bottleTigerBacC33').value,
		'bottleTigerNauC33': document.getElementById('bottleTigerNauC33').value,
		'tigerNauC33': document.getElementById('tigerNauC33').value,
		'tigerBacC33': document.getElementById('tigerBacC33').value,
		'heinekenC33': document.getElementById('heinekenC33').value,
		'sevenUpC33': document.getElementById('sevenUpC33').value,
		'cokeC33': document.getElementById('cokeC33').value,
		'pepsiC33': document.getElementById('pepsiC33').value,
		'stingC33': document.getElementById('stingC33').value,
		'waterNatureC33': document.getElementById('waterC33').value,
		'napkinC33': document.getElementById('napkinC33').value,
		'teaC33': document.getElementById('teaC33').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacC33').value = savedInputs.bottleTigerBacC33;
		document.getElementById('bottleTigerNauC33').value = savedInputs.bottleTigerNauC33;
		document.getElementById('tigerNauC33').value = savedInputs.tigerNauC33;
		document.getElementById('tigerBacC33').value = savedInputs.tigerBacC33;
		document.getElementById('heinekenC33').value = savedInputs.heinekenC33;
		document.getElementById('sevenUpC33').value = savedInputs.sevenUpC33;
		document.getElementById('cokeC33').value = savedInputs.cokeC33;
		document.getElementById('pepsiC33').value = savedInputs.pepsiC33;
		document.getElementById('stingC33').value = savedInputs.stingC33;
		document.getElementById('waterC33').value = savedInputs.waterC33;
		document.getElementById('teaC33').value = savedInputs.teaC33;
		document.getElementById('napkinC33').value = savedInputs.napkinC33;
	}

	document.getElementById('bottleTigerBacC33').value = '';
	document.getElementById('bottleTigerNauC33').value = '';
	document.getElementById('tigerNauC33').value = '';
	document.getElementById('tigerBacC33').value = '';
	document.getElementById('heinekenC33').value = '';
	document.getElementById('sevenUpC33').value = '';
	document.getElementById('cokeC33').value = '';
	document.getElementById('pepsiC33').value = '';
	document.getElementById('stingC33').value = '';
	document.getElementById('waterC33').value = '';
	document.getElementById('teaC33').value = '';
	document.getElementById('napkinC33').value = '';


	localStorage.removeItem("bottleTigerBacC33");
	localStorage.removeItem("bottleTigerNauC33");
	localStorage.removeItem("tigerNauC33");
	localStorage.removeItem("tigerBacC33");
	localStorage.removeItem("heinekenC33");
	localStorage.removeItem("sevenUpC33");
	localStorage.removeItem("cokeC33");
	localStorage.removeItem("pepsiC33");
	localStorage.removeItem("stingC33");
	localStorage.removeItem("waterC33");
	localStorage.removeItem("teaC33");
	localStorage.removeItem("napkinC33");

}

const inputsC33 = document.querySelectorAll('input[type="number"]');
inputsC33.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnC33 = document.getElementById("addBtnC33");
const newDrinkFormC33 = document.getElementById("newDrinkFormC33");

addBtnC33.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});

function confirmCalculateC41() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateC41()
	}
}
function calculateC41() {
	const bottleTigerBacC41 = document.getElementById("bottleTigerBacC41").value;
	const bottleTigerNauC41 = document.getElementById("bottleTigerNauC41").value;
	const tigerNauC41 = document.getElementById("tigerNauC41").value;
	const tigerBacC41 = document.getElementById("tigerBacC41").value;
	const heinekenC41 = document.getElementById("heinekenC41").value;
	const sevenUpC41 = document.getElementById("sevenUpC41").value;
	const cokeC41 = document.getElementById("cokeC41").value;
	const pepsiC41 = document.getElementById("pepsiC41").value;
	const stingC41 = document.getElementById("stingC41").value;
	const waterNatureC41 = document.getElementById("waterC41").value;
	const teaC41 = document.getElementById("teaC41").value;
	const napkinC41 = document.getElementById("napkinC41").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacC41 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauC41 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauC41 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacC41 },
		{ name: "Bia Heineken", quantity: heinekenC41 },
		{ name: "Nước 7up", quantity: sevenUpC41 },
		{ name: "Nước CocaCola", quantity: cokeC41 },
		{ name: "Nước pepsi", quantity: pepsiC41 },
		{ name: "Nước Sting", quantity: stingC41 },
		{ name: "Nước suối", quantity: waterNatureC41 },
		{ name: "Trà tắc", quantity: teaC41 },
		{ name: "Khăn giấy", quantity: napkinC41 },
	];

	const selectedProductsC41 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsC41.length; i++) {
		const product = selectedProductsC41[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderC41").innerHTML = bill;


	localStorage.setItem("tigerNauC41", tigerNauC41);
	localStorage.setItem("bottleTigerBacC41", bottleTigerBacC41);
	localStorage.setItem("bottleTigerNauC41", bottleTigerNauC41);
	localStorage.setItem("tigerBacC41", tigerBacC41);
	localStorage.setItem("heinekenC41", heinekenC41);
	localStorage.setItem("sevenUpC41", sevenUpC41);
	localStorage.setItem("cokeC41", cokeC41);
	localStorage.setItem("pepsiC41", pepsiC41)
	localStorage.setItem("stingC41", stingC41);
	localStorage.setItem("waterC41", waterNatureC41);
	localStorage.setItem("teaC41", teaC41);
	localStorage.setItem("napkinC41", napkinC41);

	localStorage.removeItem("bottleTigerBacC41");
	localStorage.removeItem("bottleTigerNauC41");
	localStorage.removeItem("tigerNauC41");
	localStorage.removeItem("tigerBacC41");
	localStorage.removeItem("heinekenC41");
	localStorage.removeItem("sevenUpC41");
	localStorage.removeItem("cokeC41");
	localStorage.removeItem("pepsiC41");
	localStorage.removeItem("stingC41");
	localStorage.removeItem("waterC41");
	localStorage.removeItem("teaC41");
	localStorage.removeItem("napkinC41");

	const totalC41 = (bottleTigerBacC41 * 26000) + (bottleTigerNauC41 * 25000) + (tigerNauC41 * 24000) + (tigerBacC41 * 25000) + (heinekenC41 * 26000) + (sevenUpC41 * 16000) + (cokeC41 * 16000) + (pepsiC41 * 16000) + (waterNatureC41 * 12000) + (stingC41 * 16000) + (teaC41 * 10000) + (napkinC41 * 3000);

	const historyC41 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyC41.push({ time: currentTime, totalC41: totalC41 });
	localStorage.setItem('totalHistory', JSON.stringify(historyC41));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalC41").innerHTML = "Tổng tiền: " + totalC41 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsC41 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsC41.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonC41 = document.getElementById("toggleDrinksC41");
const drinkElementsC41 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonC41.addEventListener("click", () => {
	drinkElementsC41.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonC41.classList.toggle("hidden");
	toggleDrinksButtonC41.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksC41 = localStorage.getItem("showDrinks");

if (showDrinksC41 === "1") {
	drinkElementsC41.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonC41.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonC41.classList.add("hidden");
} else {
	toggleDrinksButtonC41.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryC41() {
	const historyC41 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyC41.map((item, index) => `Lần ${index + 1}: ${item.totalC41} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyC41").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryC41()">Xoá lịch sử</button>';
}
function clearHistoryC41() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyC41").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyC41").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetC41() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllC41();
	}
}
function resetAllC41() {
	let inputs = {
		'bottleTigerBacC41': document.getElementById('bottleTigerBacC41').value,
		'bottleTigerNauC41': document.getElementById('bottleTigerNauC41').value,
		'tigerNauC41': document.getElementById('tigerNauC41').value,
		'tigerBacC41': document.getElementById('tigerBacC41').value,
		'heinekenC41': document.getElementById('heinekenC41').value,
		'sevenUpC41': document.getElementById('sevenUpC41').value,
		'cokeC41': document.getElementById('cokeC41').value,
		'pepsiC41': document.getElementById('pepsiC41').value,
		'stingC41': document.getElementById('stingC41').value,
		'waterNatureC41': document.getElementById('waterC41').value,
		'napkinC41': document.getElementById('napkinC41').value,
		'teaC41': document.getElementById('teaC41').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacC41').value = savedInputs.bottleTigerBacC41;
		document.getElementById('bottleTigerNauC41').value = savedInputs.bottleTigerNauC41;
		document.getElementById('tigerNauC41').value = savedInputs.tigerNauC41;
		document.getElementById('tigerBacC41').value = savedInputs.tigerBacC41;
		document.getElementById('heinekenC41').value = savedInputs.heinekenC41;
		document.getElementById('sevenUpC41').value = savedInputs.sevenUpC41;
		document.getElementById('cokeC41').value = savedInputs.cokeC41;
		document.getElementById('pepsiC41').value = savedInputs.pepsiC41;
		document.getElementById('stingC41').value = savedInputs.stingC41;
		document.getElementById('waterC41').value = savedInputs.waterC41;
		document.getElementById('teaC41').value = savedInputs.teaC41;
		document.getElementById('napkinC41').value = savedInputs.napkinC41;
	}

	document.getElementById('bottleTigerBacC41').value = '';
	document.getElementById('bottleTigerNauC41').value = '';
	document.getElementById('tigerNauC41').value = '';
	document.getElementById('tigerBacC41').value = '';
	document.getElementById('heinekenC41').value = '';
	document.getElementById('sevenUpC41').value = '';
	document.getElementById('cokeC41').value = '';
	document.getElementById('pepsiC41').value = '';
	document.getElementById('stingC41').value = '';
	document.getElementById('waterC41').value = '';
	document.getElementById('teaC41').value = '';
	document.getElementById('napkinC41').value = '';


	localStorage.removeItem("bottleTigerBacC41");
	localStorage.removeItem("bottleTigerNauC41");
	localStorage.removeItem("tigerNauC41");
	localStorage.removeItem("tigerBacC41");
	localStorage.removeItem("heinekenC41");
	localStorage.removeItem("sevenUpC41");
	localStorage.removeItem("cokeC41");
	localStorage.removeItem("pepsiC41");
	localStorage.removeItem("stingC41");
	localStorage.removeItem("waterC41");
	localStorage.removeItem("teaC41");
	localStorage.removeItem("napkinC41");

}

const inputsC41 = document.querySelectorAll('input[type="number"]');
inputsC41.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnC41 = document.getElementById("addBtnC41");
const newDrinkFormC41 = document.getElementById("newDrinkFormC41");

addBtnC41.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});


function confirmCalculateC42() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateC42()
	}
}
function calculateC42() {
	const bottleTigerBacC42 = document.getElementById("bottleTigerBacC42").value;
	const bottleTigerNauC42 = document.getElementById("bottleTigerNauC42").value;
	const tigerNauC42 = document.getElementById("tigerNauC42").value;
	const tigerBacC42 = document.getElementById("tigerBacC42").value;
	const heinekenC42 = document.getElementById("heinekenC42").value;
	const sevenUpC42 = document.getElementById("sevenUpC42").value;
	const cokeC42 = document.getElementById("cokeC42").value;
	const pepsiC42 = document.getElementById("pepsiC42").value;
	const stingC42 = document.getElementById("stingC42").value;
	const waterNatureC42 = document.getElementById("waterC42").value;
	const teaC42 = document.getElementById("teaC42").value;
	const napkinC42 = document.getElementById("napkinC42").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacC42 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauC42 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauC42 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacC42 },
		{ name: "Bia Heineken", quantity: heinekenC42 },
		{ name: "Nước 7up", quantity: sevenUpC42 },
		{ name: "Nước CocaCola", quantity: cokeC42 },
		{ name: "Nước pepsi", quantity: pepsiC42 },
		{ name: "Nước Sting", quantity: stingC42 },
		{ name: "Nước suối", quantity: waterNatureC42 },
		{ name: "Trà tắc", quantity: teaC42 },
		{ name: "Khăn giấy", quantity: napkinC42 },
	];

	const selectedProductsC42 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsC42.length; i++) {
		const product = selectedProductsC42[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderC42").innerHTML = bill;


	localStorage.setItem("tigerNauC42", tigerNauC42);
	localStorage.setItem("bottleTigerBacC42", bottleTigerBacC42);
	localStorage.setItem("bottleTigerNauC42", bottleTigerNauC42);
	localStorage.setItem("tigerBacC42", tigerBacC42);
	localStorage.setItem("heinekenC42", heinekenC42);
	localStorage.setItem("sevenUpC42", sevenUpC42);
	localStorage.setItem("cokeC42", cokeC42);
	localStorage.setItem("pepsiC42", pepsiC42)
	localStorage.setItem("stingC42", stingC42);
	localStorage.setItem("waterC42", waterNatureC42);
	localStorage.setItem("teaC42", teaC42);
	localStorage.setItem("napkinC42", napkinC42);

	localStorage.removeItem("bottleTigerBacC42");
	localStorage.removeItem("bottleTigerNauC42");
	localStorage.removeItem("tigerNauC42");
	localStorage.removeItem("tigerBacC42");
	localStorage.removeItem("heinekenC42");
	localStorage.removeItem("sevenUpC42");
	localStorage.removeItem("cokeC42");
	localStorage.removeItem("pepsiC42");
	localStorage.removeItem("stingC42");
	localStorage.removeItem("waterC42");
	localStorage.removeItem("teaC42");
	localStorage.removeItem("napkinC42");

	const totalC42 = (bottleTigerBacC42 * 26000) + (bottleTigerNauC42 * 25000) + (tigerNauC42 * 24000) + (tigerBacC42 * 25000) + (heinekenC42 * 26000) + (sevenUpC42 * 16000) + (cokeC42 * 16000) + (pepsiC42 * 16000) + (waterNatureC42 * 12000) + (stingC42 * 16000) + (teaC42 * 10000) + (napkinC42 * 3000);

	const historyC42 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyC42.push({ time: currentTime, totalC42: totalC42 });
	localStorage.setItem('totalHistory', JSON.stringify(historyC42));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalC42").innerHTML = "Tổng tiền: " + totalC42 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsC42 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsC42.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonC42 = document.getElementById("toggleDrinksC42");
const drinkElementsC42 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonC42.addEventListener("click", () => {
	drinkElementsC42.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonC42.classList.toggle("hidden");
	toggleDrinksButtonC42.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksC42 = localStorage.getItem("showDrinks");

if (showDrinksC42 === "1") {
	drinkElementsC42.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonC42.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonC42.classList.add("hidden");
} else {
	toggleDrinksButtonC42.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryC42() {
	const historyC42 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyC42.map((item, index) => `Lần ${index + 1}: ${item.totalC42} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyC42").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryC42()">Xoá lịch sử</button>';
}
function clearHistoryC42() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyC42").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyC42").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetC42() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllC42();
	}
}
function resetAllC42() {
	let inputs = {
		'bottleTigerBacC42': document.getElementById('bottleTigerBacC42').value,
		'bottleTigerNauC42': document.getElementById('bottleTigerNauC42').value,
		'tigerNauC42': document.getElementById('tigerNauC42').value,
		'tigerBacC42': document.getElementById('tigerBacC42').value,
		'heinekenC42': document.getElementById('heinekenC42').value,
		'sevenUpC42': document.getElementById('sevenUpC42').value,
		'cokeC42': document.getElementById('cokeC42').value,
		'pepsiC42': document.getElementById('pepsiC42').value,
		'stingC42': document.getElementById('stingC42').value,
		'waterNatureC42': document.getElementById('waterC42').value,
		'napkinC42': document.getElementById('napkinC42').value,
		'teaC42': document.getElementById('teaC42').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacC42').value = savedInputs.bottleTigerBacC42;
		document.getElementById('bottleTigerNauC42').value = savedInputs.bottleTigerNauC42;
		document.getElementById('tigerNauC42').value = savedInputs.tigerNauC42;
		document.getElementById('tigerBacC42').value = savedInputs.tigerBacC42;
		document.getElementById('heinekenC42').value = savedInputs.heinekenC42;
		document.getElementById('sevenUpC42').value = savedInputs.sevenUpC42;
		document.getElementById('cokeC42').value = savedInputs.cokeC42;
		document.getElementById('pepsiC42').value = savedInputs.pepsiC42;
		document.getElementById('stingC42').value = savedInputs.stingC42;
		document.getElementById('waterC42').value = savedInputs.waterC42;
		document.getElementById('teaC42').value = savedInputs.teaC42;
		document.getElementById('napkinC42').value = savedInputs.napkinC42;
	}

	document.getElementById('bottleTigerBacC42').value = '';
	document.getElementById('bottleTigerNauC42').value = '';
	document.getElementById('tigerNauC42').value = '';
	document.getElementById('tigerBacC42').value = '';
	document.getElementById('heinekenC42').value = '';
	document.getElementById('sevenUpC42').value = '';
	document.getElementById('cokeC42').value = '';
	document.getElementById('pepsiC42').value = '';
	document.getElementById('stingC42').value = '';
	document.getElementById('waterC42').value = '';
	document.getElementById('teaC42').value = '';
	document.getElementById('napkinC42').value = '';


	localStorage.removeItem("bottleTigerBacC42");
	localStorage.removeItem("bottleTigerNauC42");
	localStorage.removeItem("tigerNauC42");
	localStorage.removeItem("tigerBacC42");
	localStorage.removeItem("heinekenC42");
	localStorage.removeItem("sevenUpC42");
	localStorage.removeItem("cokeC42");
	localStorage.removeItem("pepsiC42");
	localStorage.removeItem("stingC42");
	localStorage.removeItem("waterC42");
	localStorage.removeItem("teaC42");
	localStorage.removeItem("napkinC42");

}

const inputsC42 = document.querySelectorAll('input[type="number"]');
inputsC42.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnC42 = document.getElementById("addBtnC42");
const newDrinkFormC42 = document.getElementById("newDrinkFormC42");

addBtnC42.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});


function confirmCalculateC43() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateC43()
	}
}
function calculateC43() {
	const bottleTigerBacC43 = document.getElementById("bottleTigerBacC43").value;
	const bottleTigerNauC43 = document.getElementById("bottleTigerNauC43").value;
	const tigerNauC43 = document.getElementById("tigerNauC43").value;
	const tigerBacC43 = document.getElementById("tigerBacC43").value;
	const heinekenC43 = document.getElementById("heinekenC43").value;
	const sevenUpC43 = document.getElementById("sevenUpC43").value;
	const cokeC43 = document.getElementById("cokeC43").value;
	const pepsiC43 = document.getElementById("pepsiC43").value;
	const stingC43 = document.getElementById("stingC43").value;
	const waterNatureC43 = document.getElementById("waterC43").value;
	const teaC43 = document.getElementById("teaC43").value;
	const napkinC43 = document.getElementById("napkinC43").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacC43 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauC43 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauC43 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacC43 },
		{ name: "Bia Heineken", quantity: heinekenC43 },
		{ name: "Nước 7up", quantity: sevenUpC43 },
		{ name: "Nước CocaCola", quantity: cokeC43 },
		{ name: "Nước pepsi", quantity: pepsiC43 },
		{ name: "Nước Sting", quantity: stingC43 },
		{ name: "Nước suối", quantity: waterNatureC43 },
		{ name: "Trà tắc", quantity: teaC43 },
		{ name: "Khăn giấy", quantity: napkinC43 },
	];

	const selectedProductsC43 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsC43.length; i++) {
		const product = selectedProductsC43[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderC43").innerHTML = bill;


	localStorage.setItem("tigerNauC43", tigerNauC43);
	localStorage.setItem("bottleTigerBacC43", bottleTigerBacC43);
	localStorage.setItem("bottleTigerNauC43", bottleTigerNauC43);
	localStorage.setItem("tigerBacC43", tigerBacC43);
	localStorage.setItem("heinekenC43", heinekenC43);
	localStorage.setItem("sevenUpC43", sevenUpC43);
	localStorage.setItem("cokeC43", cokeC43);
	localStorage.setItem("pepsiC43", pepsiC43)
	localStorage.setItem("stingC43", stingC43);
	localStorage.setItem("waterC43", waterNatureC43);
	localStorage.setItem("teaC43", teaC43);
	localStorage.setItem("napkinC43", napkinC43);

	localStorage.removeItem("bottleTigerBacC43");
	localStorage.removeItem("bottleTigerNauC43");
	localStorage.removeItem("tigerNauC43");
	localStorage.removeItem("tigerBacC43");
	localStorage.removeItem("heinekenC43");
	localStorage.removeItem("sevenUpC43");
	localStorage.removeItem("cokeC43");
	localStorage.removeItem("pepsiC43");
	localStorage.removeItem("stingC43");
	localStorage.removeItem("waterC43");
	localStorage.removeItem("teaC43");
	localStorage.removeItem("napkinC43");

	const totalC43 = (bottleTigerBacC43 * 26000) + (bottleTigerNauC43 * 25000) + (tigerNauC43 * 24000) + (tigerBacC43 * 25000) + (heinekenC43 * 26000) + (sevenUpC43 * 16000) + (cokeC43 * 16000) + (pepsiC43 * 16000) + (waterNatureC43 * 12000) + (stingC43 * 16000) + (teaC43 * 10000) + (napkinC43 * 3000);

	const historyC43 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyC43.push({ time: currentTime, totalC43: totalC43 });
	localStorage.setItem('totalHistory', JSON.stringify(historyC43));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalC43").innerHTML = "Tổng tiền: " + totalC43 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsC43 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsC43.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonC43 = document.getElementById("toggleDrinksC43");
const drinkElementsC43 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonC43.addEventListener("click", () => {
	drinkElementsC43.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonC43.classList.toggle("hidden");
	toggleDrinksButtonC43.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksC43 = localStorage.getItem("showDrinks");

if (showDrinksC43 === "1") {
	drinkElementsC43.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonC43.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonC43.classList.add("hidden");
} else {
	toggleDrinksButtonC43.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryC43() {
	const historyC43 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyC43.map((item, index) => `Lần ${index + 1}: ${item.totalC43} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyC43").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryC43()">Xoá lịch sử</button>';
}
function clearHistoryC43() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyC43").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyC43").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetC43() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllC43();
	}
}
function resetAllC43() {
	let inputs = {
		'bottleTigerBacC43': document.getElementById('bottleTigerBacC43').value,
		'bottleTigerNauC43': document.getElementById('bottleTigerNauC43').value,
		'tigerNauC43': document.getElementById('tigerNauC43').value,
		'tigerBacC43': document.getElementById('tigerBacC43').value,
		'heinekenC43': document.getElementById('heinekenC43').value,
		'sevenUpC43': document.getElementById('sevenUpC43').value,
		'cokeC43': document.getElementById('cokeC43').value,
		'pepsiC43': document.getElementById('pepsiC43').value,
		'stingC43': document.getElementById('stingC43').value,
		'waterNatureC43': document.getElementById('waterC43').value,
		'napkinC43': document.getElementById('napkinC43').value,
		'teaC43': document.getElementById('teaC43').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacC43').value = savedInputs.bottleTigerBacC43;
		document.getElementById('bottleTigerNauC43').value = savedInputs.bottleTigerNauC43;
		document.getElementById('tigerNauC43').value = savedInputs.tigerNauC43;
		document.getElementById('tigerBacC43').value = savedInputs.tigerBacC43;
		document.getElementById('heinekenC43').value = savedInputs.heinekenC43;
		document.getElementById('sevenUpC43').value = savedInputs.sevenUpC43;
		document.getElementById('cokeC43').value = savedInputs.cokeC43;
		document.getElementById('pepsiC43').value = savedInputs.pepsiC43;
		document.getElementById('stingC43').value = savedInputs.stingC43;
		document.getElementById('waterC43').value = savedInputs.waterC43;
		document.getElementById('teaC43').value = savedInputs.teaC43;
		document.getElementById('napkinC43').value = savedInputs.napkinC43;
	}

	document.getElementById('bottleTigerBacC43').value = '';
	document.getElementById('bottleTigerNauC43').value = '';
	document.getElementById('tigerNauC43').value = '';
	document.getElementById('tigerBacC43').value = '';
	document.getElementById('heinekenC43').value = '';
	document.getElementById('sevenUpC43').value = '';
	document.getElementById('cokeC43').value = '';
	document.getElementById('pepsiC43').value = '';
	document.getElementById('stingC43').value = '';
	document.getElementById('waterC43').value = '';
	document.getElementById('teaC43').value = '';
	document.getElementById('napkinC43').value = '';


	localStorage.removeItem("bottleTigerBacC43");
	localStorage.removeItem("bottleTigerNauC43");
	localStorage.removeItem("tigerNauC43");
	localStorage.removeItem("tigerBacC43");
	localStorage.removeItem("heinekenC43");
	localStorage.removeItem("sevenUpC43");
	localStorage.removeItem("cokeC43");
	localStorage.removeItem("pepsiC43");
	localStorage.removeItem("stingC43");
	localStorage.removeItem("waterC43");
	localStorage.removeItem("teaC43");
	localStorage.removeItem("napkinC43");

}

const inputsC43 = document.querySelectorAll('input[type="number"]');
inputsC43.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnC43 = document.getElementById("addBtnC43");
const newDrinkFormC43 = document.getElementById("newDrinkFormC43");

addBtnC43.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});



function confirmCalculateC51() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateC51()
	}
}
function calculateC51() {
	const bottleTigerBacC51 = document.getElementById("bottleTigerBacC51").value;
	const bottleTigerNauC51 = document.getElementById("bottleTigerNauC51").value;
	const tigerNauC51 = document.getElementById("tigerNauC51").value;
	const tigerBacC51 = document.getElementById("tigerBacC51").value;
	const heinekenC51 = document.getElementById("heinekenC51").value;
	const sevenUpC51 = document.getElementById("sevenUpC51").value;
	const cokeC51 = document.getElementById("cokeC51").value;
	const pepsiC51 = document.getElementById("pepsiC51").value;
	const stingC51 = document.getElementById("stingC51").value;
	const waterNatureC51 = document.getElementById("waterC51").value;
	const teaC51 = document.getElementById("teaC51").value;
	const napkinC51 = document.getElementById("napkinC51").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacC51 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauC51 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauC51 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacC51 },
		{ name: "Bia Heineken", quantity: heinekenC51 },
		{ name: "Nước 7up", quantity: sevenUpC51 },
		{ name: "Nước CocaCola", quantity: cokeC51 },
		{ name: "Nước pepsi", quantity: pepsiC51 },
		{ name: "Nước Sting", quantity: stingC51 },
		{ name: "Nước suối", quantity: waterNatureC51 },
		{ name: "Trà tắc", quantity: teaC51 },
		{ name: "Khăn giấy", quantity: napkinC51 },
	];

	const selectedProductsC51 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsC51.length; i++) {
		const product = selectedProductsC51[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderC51").innerHTML = bill;


	localStorage.setItem("tigerNauC51", tigerNauC51);
	localStorage.setItem("bottleTigerBacC51", bottleTigerBacC51);
	localStorage.setItem("bottleTigerNauC51", bottleTigerNauC51);
	localStorage.setItem("tigerBacC51", tigerBacC51);
	localStorage.setItem("heinekenC51", heinekenC51);
	localStorage.setItem("sevenUpC51", sevenUpC51);
	localStorage.setItem("cokeC51", cokeC51);
	localStorage.setItem("pepsiC51", pepsiC51)
	localStorage.setItem("stingC51", stingC51);
	localStorage.setItem("waterC51", waterNatureC51);
	localStorage.setItem("teaC51", teaC51);
	localStorage.setItem("napkinC51", napkinC51);

	localStorage.removeItem("bottleTigerBacC51");
	localStorage.removeItem("bottleTigerNauC51");
	localStorage.removeItem("tigerNauC51");
	localStorage.removeItem("tigerBacC51");
	localStorage.removeItem("heinekenC51");
	localStorage.removeItem("sevenUpC51");
	localStorage.removeItem("cokeC51");
	localStorage.removeItem("pepsiC51");
	localStorage.removeItem("stingC51");
	localStorage.removeItem("waterC51");
	localStorage.removeItem("teaC51");
	localStorage.removeItem("napkinC51");

	const totalC51 = (bottleTigerBacC51 * 26000) + (bottleTigerNauC51 * 25000) + (tigerNauC51 * 24000) + (tigerBacC51 * 25000) + (heinekenC51 * 26000) + (sevenUpC51 * 16000) + (cokeC51 * 16000) + (pepsiC51 * 16000) + (waterNatureC51 * 12000) + (stingC51 * 16000) + (teaC51 * 10000) + (napkinC51 * 3000);

	const historyC51 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyC51.push({ time: currentTime, totalC51: totalC51 });
	localStorage.setItem('totalHistory', JSON.stringify(historyC51));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalC51").innerHTML = "Tổng tiền: " + totalC51 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsC51 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsC51.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonC51 = document.getElementById("toggleDrinksC51");
const drinkElementsC51 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonC51.addEventListener("click", () => {
	drinkElementsC51.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonC51.classList.toggle("hidden");
	toggleDrinksButtonC51.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksC51 = localStorage.getItem("showDrinks");

if (showDrinksC51 === "1") {
	drinkElementsC51.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonC51.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonC51.classList.add("hidden");
} else {
	toggleDrinksButtonC51.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryC51() {
	const historyC51 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyC51.map((item, index) => `Lần ${index + 1}: ${item.totalC51} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyC51").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryC51()">Xoá lịch sử</button>';
}
function clearHistoryC51() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyC51").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyC51").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetC51() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllC51();
	}
}
function resetAllC51() {
	let inputs = {
		'bottleTigerBacC51': document.getElementById('bottleTigerBacC51').value,
		'bottleTigerNauC51': document.getElementById('bottleTigerNauC51').value,
		'tigerNauC51': document.getElementById('tigerNauC51').value,
		'tigerBacC51': document.getElementById('tigerBacC51').value,
		'heinekenC51': document.getElementById('heinekenC51').value,
		'sevenUpC51': document.getElementById('sevenUpC51').value,
		'cokeC51': document.getElementById('cokeC51').value,
		'pepsiC51': document.getElementById('pepsiC51').value,
		'stingC51': document.getElementById('stingC51').value,
		'waterNatureC51': document.getElementById('waterC51').value,
		'napkinC51': document.getElementById('napkinC51').value,
		'teaC51': document.getElementById('teaC51').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacC51').value = savedInputs.bottleTigerBacC51;
		document.getElementById('bottleTigerNauC51').value = savedInputs.bottleTigerNauC51;
		document.getElementById('tigerNauC51').value = savedInputs.tigerNauC51;
		document.getElementById('tigerBacC51').value = savedInputs.tigerBacC51;
		document.getElementById('heinekenC51').value = savedInputs.heinekenC51;
		document.getElementById('sevenUpC51').value = savedInputs.sevenUpC51;
		document.getElementById('cokeC51').value = savedInputs.cokeC51;
		document.getElementById('pepsiC51').value = savedInputs.pepsiC51;
		document.getElementById('stingC51').value = savedInputs.stingC51;
		document.getElementById('waterC51').value = savedInputs.waterC51;
		document.getElementById('teaC51').value = savedInputs.teaC51;
		document.getElementById('napkinC51').value = savedInputs.napkinC51;
	}

	document.getElementById('bottleTigerBacC51').value = '';
	document.getElementById('bottleTigerNauC51').value = '';
	document.getElementById('tigerNauC51').value = '';
	document.getElementById('tigerBacC51').value = '';
	document.getElementById('heinekenC51').value = '';
	document.getElementById('sevenUpC51').value = '';
	document.getElementById('cokeC51').value = '';
	document.getElementById('pepsiC51').value = '';
	document.getElementById('stingC51').value = '';
	document.getElementById('waterC51').value = '';
	document.getElementById('teaC51').value = '';
	document.getElementById('napkinC51').value = '';


	localStorage.removeItem("bottleTigerBacC51");
	localStorage.removeItem("bottleTigerNauC51");
	localStorage.removeItem("tigerNauC51");
	localStorage.removeItem("tigerBacC51");
	localStorage.removeItem("heinekenC51");
	localStorage.removeItem("sevenUpC51");
	localStorage.removeItem("cokeC51");
	localStorage.removeItem("pepsiC51");
	localStorage.removeItem("stingC51");
	localStorage.removeItem("waterC51");
	localStorage.removeItem("teaC51");
	localStorage.removeItem("napkinC51");

}

const inputsC51 = document.querySelectorAll('input[type="number"]');
inputsC51.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnC51 = document.getElementById("addBtnC51");
const newDrinkFormC51 = document.getElementById("newDrinkFormC51");

addBtnC51.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});

function confirmCalculateC52() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateC52()
	}
}
function calculateC52() {
	const bottleTigerBacC52 = document.getElementById("bottleTigerBacC52").value;
	const bottleTigerNauC52 = document.getElementById("bottleTigerNauC52").value;
	const tigerNauC52 = document.getElementById("tigerNauC52").value;
	const tigerBacC52 = document.getElementById("tigerBacC52").value;
	const heinekenC52 = document.getElementById("heinekenC52").value;
	const sevenUpC52 = document.getElementById("sevenUpC52").value;
	const cokeC52 = document.getElementById("cokeC52").value;
	const pepsiC52 = document.getElementById("pepsiC52").value;
	const stingC52 = document.getElementById("stingC52").value;
	const waterNatureC52 = document.getElementById("waterC52").value;
	const teaC52 = document.getElementById("teaC52").value;
	const napkinC52 = document.getElementById("napkinC52").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacC52 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauC52 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauC52 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacC52 },
		{ name: "Bia Heineken", quantity: heinekenC52 },
		{ name: "Nước 7up", quantity: sevenUpC52 },
		{ name: "Nước CocaCola", quantity: cokeC52 },
		{ name: "Nước pepsi", quantity: pepsiC52 },
		{ name: "Nước Sting", quantity: stingC52 },
		{ name: "Nước suối", quantity: waterNatureC52 },
		{ name: "Trà tắc", quantity: teaC52 },
		{ name: "Khăn giấy", quantity: napkinC52 },
	];

	const selectedProductsC52 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsC52.length; i++) {
		const product = selectedProductsC52[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderC52").innerHTML = bill;


	localStorage.setItem("tigerNauC52", tigerNauC52);
	localStorage.setItem("bottleTigerBacC52", bottleTigerBacC52);
	localStorage.setItem("bottleTigerNauC52", bottleTigerNauC52);
	localStorage.setItem("tigerBacC52", tigerBacC52);
	localStorage.setItem("heinekenC52", heinekenC52);
	localStorage.setItem("sevenUpC52", sevenUpC52);
	localStorage.setItem("cokeC52", cokeC52);
	localStorage.setItem("pepsiC52", pepsiC52)
	localStorage.setItem("stingC52", stingC52);
	localStorage.setItem("waterC52", waterNatureC52);
	localStorage.setItem("teaC52", teaC52);
	localStorage.setItem("napkinC52", napkinC52);

	localStorage.removeItem("bottleTigerBacC52");
	localStorage.removeItem("bottleTigerNauC52");
	localStorage.removeItem("tigerNauC52");
	localStorage.removeItem("tigerBacC52");
	localStorage.removeItem("heinekenC52");
	localStorage.removeItem("sevenUpC52");
	localStorage.removeItem("cokeC52");
	localStorage.removeItem("pepsiC52");
	localStorage.removeItem("stingC52");
	localStorage.removeItem("waterC52");
	localStorage.removeItem("teaC52");
	localStorage.removeItem("napkinC52");

	const totalC52 = (bottleTigerBacC52 * 26000) + (bottleTigerNauC52 * 25000) + (tigerNauC52 * 24000) + (tigerBacC52 * 25000) + (heinekenC52 * 26000) + (sevenUpC52 * 16000) + (cokeC52 * 16000) + (pepsiC52 * 16000) + (waterNatureC52 * 12000) + (stingC52 * 16000) + (teaC52 * 10000) + (napkinC52 * 3000);

	const historyC52 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyC52.push({ time: currentTime, totalC52: totalC52 });
	localStorage.setItem('totalHistory', JSON.stringify(historyC52));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalC52").innerHTML = "Tổng tiền: " + totalC52 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsC52 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsC52.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonC52 = document.getElementById("toggleDrinksC52");
const drinkElementsC52 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonC52.addEventListener("click", () => {
	drinkElementsC52.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonC52.classList.toggle("hidden");
	toggleDrinksButtonC52.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksC52 = localStorage.getItem("showDrinks");

if (showDrinksC52 === "1") {
	drinkElementsC52.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonC52.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonC52.classList.add("hidden");
} else {
	toggleDrinksButtonC52.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryC52() {
	const historyC52 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyC52.map((item, index) => `Lần ${index + 1}: ${item.totalC52} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyC52").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryC52()">Xoá lịch sử</button>';
}
function clearHistoryC52() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyC52").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyC52").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetC52() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllC52();
	}
}
function resetAllC52() {
	let inputs = {
		'bottleTigerBacC52': document.getElementById('bottleTigerBacC52').value,
		'bottleTigerNauC52': document.getElementById('bottleTigerNauC52').value,
		'tigerNauC52': document.getElementById('tigerNauC52').value,
		'tigerBacC52': document.getElementById('tigerBacC52').value,
		'heinekenC52': document.getElementById('heinekenC52').value,
		'sevenUpC52': document.getElementById('sevenUpC52').value,
		'cokeC52': document.getElementById('cokeC52').value,
		'pepsiC52': document.getElementById('pepsiC52').value,
		'stingC52': document.getElementById('stingC52').value,
		'waterNatureC52': document.getElementById('waterC52').value,
		'napkinC52': document.getElementById('napkinC52').value,
		'teaC52': document.getElementById('teaC52').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacC52').value = savedInputs.bottleTigerBacC52;
		document.getElementById('bottleTigerNauC52').value = savedInputs.bottleTigerNauC52;
		document.getElementById('tigerNauC52').value = savedInputs.tigerNauC52;
		document.getElementById('tigerBacC52').value = savedInputs.tigerBacC52;
		document.getElementById('heinekenC52').value = savedInputs.heinekenC52;
		document.getElementById('sevenUpC52').value = savedInputs.sevenUpC52;
		document.getElementById('cokeC52').value = savedInputs.cokeC52;
		document.getElementById('pepsiC52').value = savedInputs.pepsiC52;
		document.getElementById('stingC52').value = savedInputs.stingC52;
		document.getElementById('waterC52').value = savedInputs.waterC52;
		document.getElementById('teaC52').value = savedInputs.teaC52;
		document.getElementById('napkinC52').value = savedInputs.napkinC52;
	}

	document.getElementById('bottleTigerBacC52').value = '';
	document.getElementById('bottleTigerNauC52').value = '';
	document.getElementById('tigerNauC52').value = '';
	document.getElementById('tigerBacC52').value = '';
	document.getElementById('heinekenC52').value = '';
	document.getElementById('sevenUpC52').value = '';
	document.getElementById('cokeC52').value = '';
	document.getElementById('pepsiC52').value = '';
	document.getElementById('stingC52').value = '';
	document.getElementById('waterC52').value = '';
	document.getElementById('teaC52').value = '';
	document.getElementById('napkinC52').value = '';


	localStorage.removeItem("bottleTigerBacC52");
	localStorage.removeItem("bottleTigerNauC52");
	localStorage.removeItem("tigerNauC52");
	localStorage.removeItem("tigerBacC52");
	localStorage.removeItem("heinekenC52");
	localStorage.removeItem("sevenUpC52");
	localStorage.removeItem("cokeC52");
	localStorage.removeItem("pepsiC52");
	localStorage.removeItem("stingC52");
	localStorage.removeItem("waterC52");
	localStorage.removeItem("teaC52");
	localStorage.removeItem("napkinC52");

}

const inputsC52 = document.querySelectorAll('input[type="number"]');
inputsC52.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnC52 = document.getElementById("addBtnC52");
const newDrinkFormC52 = document.getElementById("newDrinkFormC52");

addBtnC52.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});


function confirmCalculateE11() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateE11()
	}
}
function calculateE11() {
	const bottleTigerBacE11 = document.getElementById("bottleTigerBacE11").value;
	const bottleTigerNauE11 = document.getElementById("bottleTigerNauE11").value;
	const tigerNauE11 = document.getElementById("tigerNauE11").value;
	const tigerBacE11 = document.getElementById("tigerBacE11").value;
	const heinekenE11 = document.getElementById("heinekenE11").value;
	const sevenUpE11 = document.getElementById("sevenUpE11").value;
	const cokeE11 = document.getElementById("cokeE11").value;
	const pepsiE11 = document.getElementById("pepsiE11").value;
	const stingE11 = document.getElementById("stingE11").value;
	const waterNatureE11 = document.getElementById("waterE11").value;
	const teaE11 = document.getElementById("teaE11").value;
	const napkinE11 = document.getElementById("napkinE11").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacE11 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauE11 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauE11 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacE11 },
		{ name: "Bia Heineken", quantity: heinekenE11 },
		{ name: "Nước 7up", quantity: sevenUpE11 },
		{ name: "Nước CocaCola", quantity: cokeE11 },
		{ name: "Nước pepsi", quantity: pepsiE11 },
		{ name: "Nước Sting", quantity: stingE11 },
		{ name: "Nước suối", quantity: waterNatureE11 },
		{ name: "Trà tắc", quantity: teaE11 },
		{ name: "Khăn giấy", quantity: napkinE11 },
	];

	const selectedProductsE11 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsE11.length; i++) {
		const product = selectedProductsE11[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderE11").innerHTML = bill;


	localStorage.setItem("tigerNauE11", tigerNauE11);
	localStorage.setItem("bottleTigerBacE11", bottleTigerBacE11);
	localStorage.setItem("bottleTigerNauE11", bottleTigerNauE11);
	localStorage.setItem("tigerBacE11", tigerBacE11);
	localStorage.setItem("heinekenE11", heinekenE11);
	localStorage.setItem("sevenUpE11", sevenUpE11);
	localStorage.setItem("cokeE11", cokeE11);
	localStorage.setItem("pepsiE11", pepsiE11)
	localStorage.setItem("stingE11", stingE11);
	localStorage.setItem("waterE11", waterNatureE11);
	localStorage.setItem("teaE11", teaE11);
	localStorage.setItem("napkinE11", napkinE11);

	localStorage.removeItem("bottleTigerBacE11");
	localStorage.removeItem("bottleTigerNauE11");
	localStorage.removeItem("tigerNauE11");
	localStorage.removeItem("tigerBacE11");
	localStorage.removeItem("heinekenE11");
	localStorage.removeItem("sevenUpE11");
	localStorage.removeItem("cokeE11");
	localStorage.removeItem("pepsiE11");
	localStorage.removeItem("stingE11");
	localStorage.removeItem("waterE11");
	localStorage.removeItem("teaE11");
	localStorage.removeItem("napkinE11");

	const totalE11 = (bottleTigerBacE11 * 26000) + (bottleTigerNauE11 * 25000) + (tigerNauE11 * 24000) + (tigerBacE11 * 25000) + (heinekenE11 * 26000) + (sevenUpE11 * 16000) + (cokeE11 * 16000) + (pepsiE11 * 16000) + (waterNatureE11 * 12000) + (stingE11 * 16000) + (teaE11 * 10000) + (napkinE11 * 3000);

	const historyE11 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyE11.push({ time: currentTime, totalE11: totalE11 });
	localStorage.setItem('totalHistory', JSON.stringify(historyE11));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalE11").innerHTML = "Tổng tiền: " + totalE11 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsE11 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsE11.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonE11 = document.getElementById("toggleDrinksE11");
const drinkElementsE11 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonE11.addEventListener("click", () => {
	drinkElementsE11.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonE11.classList.toggle("hidden");
	toggleDrinksButtonE11.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksE11 = localStorage.getItem("showDrinks");

if (showDrinksE11 === "1") {
	drinkElementsE11.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonE11.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonE11.classList.add("hidden");
} else {
	toggleDrinksButtonE11.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryE11() {
	const historyE11 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyE11.map((item, index) => `Lần ${index + 1}: ${item.totalE11} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyE11").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryE11()">Xoá lịch sử</button>';
}
function clearHistoryE11() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyE11").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyE11").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetE11() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllE11();
	}
}
function resetAllE11() {
	let inputs = {
		'bottleTigerBacE11': document.getElementById('bottleTigerBacE11').value,
		'bottleTigerNauE11': document.getElementById('bottleTigerNauE11').value,
		'tigerNauE11': document.getElementById('tigerNauE11').value,
		'tigerBacE11': document.getElementById('tigerBacE11').value,
		'heinekenE11': document.getElementById('heinekenE11').value,
		'sevenUpE11': document.getElementById('sevenUpE11').value,
		'cokeE11': document.getElementById('cokeE11').value,
		'pepsiE11': document.getElementById('pepsiE11').value,
		'stingE11': document.getElementById('stingE11').value,
		'waterNatureE11': document.getElementById('waterE11').value,
		'napkinE11': document.getElementById('napkinE11').value,
		'teaE11': document.getElementById('teaE11').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacE11').value = savedInputs.bottleTigerBacE11;
		document.getElementById('bottleTigerNauE11').value = savedInputs.bottleTigerNauE11;
		document.getElementById('tigerNauE11').value = savedInputs.tigerNauE11;
		document.getElementById('tigerBacE11').value = savedInputs.tigerBacE11;
		document.getElementById('heinekenE11').value = savedInputs.heinekenE11;
		document.getElementById('sevenUpE11').value = savedInputs.sevenUpE11;
		document.getElementById('cokeE11').value = savedInputs.cokeE11;
		document.getElementById('pepsiE11').value = savedInputs.pepsiE11;
		document.getElementById('stingE11').value = savedInputs.stingE11;
		document.getElementById('waterE11').value = savedInputs.waterE11;
		document.getElementById('teaE11').value = savedInputs.teaE11;
		document.getElementById('napkinE11').value = savedInputs.napkinE11;
	}

	document.getElementById('bottleTigerBacE11').value = '';
	document.getElementById('bottleTigerNauE11').value = '';
	document.getElementById('tigerNauE11').value = '';
	document.getElementById('tigerBacE11').value = '';
	document.getElementById('heinekenE11').value = '';
	document.getElementById('sevenUpE11').value = '';
	document.getElementById('cokeE11').value = '';
	document.getElementById('pepsiE11').value = '';
	document.getElementById('stingE11').value = '';
	document.getElementById('waterE11').value = '';
	document.getElementById('teaE11').value = '';
	document.getElementById('napkinE11').value = '';


	localStorage.removeItem("bottleTigerBacE11");
	localStorage.removeItem("bottleTigerNauE11");
	localStorage.removeItem("tigerNauE11");
	localStorage.removeItem("tigerBacE11");
	localStorage.removeItem("heinekenE11");
	localStorage.removeItem("sevenUpE11");
	localStorage.removeItem("cokeE11");
	localStorage.removeItem("pepsiE11");
	localStorage.removeItem("stingE11");
	localStorage.removeItem("waterE11");
	localStorage.removeItem("teaE11");
	localStorage.removeItem("napkinE11");

}

const inputsE11 = document.querySelectorAll('input[type="number"]');
inputsE11.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnE11 = document.getElementById("addBtnE11");
const newDrinkFormE11 = document.getElementById("newDrinkFormE11");

addBtnE11.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});

//E1/2
function confirmCalculateE12() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateE12()
	}
}
function calculateE12() {
	const bottleTigerBacE12 = document.getElementById("bottleTigerBacE12").value;
	const bottleTigerNauE12 = document.getElementById("bottleTigerNauE12").value;
	const tigerNauE12 = document.getElementById("tigerNauE12").value;
	const tigerBacE12 = document.getElementById("tigerBacE12").value;
	const heinekenE12 = document.getElementById("heinekenE12").value;
	const sevenUpE12 = document.getElementById("sevenUpE12").value;
	const cokeE12 = document.getElementById("cokeE12").value;
	const pepsiE12 = document.getElementById("pepsiE12").value;
	const stingE12 = document.getElementById("stingE12").value;
	const waterNatureE12 = document.getElementById("waterE12").value;
	const teaE12 = document.getElementById("teaE12").value;
	const napkinE12 = document.getElementById("napkinE12").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacE12 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauE12 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauE12 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacE12 },
		{ name: "Bia Heineken", quantity: heinekenE12 },
		{ name: "Nước 7up", quantity: sevenUpE12 },
		{ name: "Nước CocaCola", quantity: cokeE12 },
		{ name: "Nước pepsi", quantity: pepsiE12 },
		{ name: "Nước Sting", quantity: stingE12 },
		{ name: "Nước suối", quantity: waterNatureE12 },
		{ name: "Trà tắc", quantity: teaE12 },
		{ name: "Khăn giấy", quantity: napkinE12 },
	];

	const selectedProductsE12 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsE12.length; i++) {
		const product = selectedProductsE12[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderE12").innerHTML = bill;


	localStorage.setItem("tigerNauE12", tigerNauE12);
	localStorage.setItem("bottleTigerBacE12", bottleTigerBacE12);
	localStorage.setItem("bottleTigerNauE12", bottleTigerNauE12);
	localStorage.setItem("tigerBacE12", tigerBacE12);
	localStorage.setItem("heinekenE12", heinekenE12);
	localStorage.setItem("sevenUpE12", sevenUpE12);
	localStorage.setItem("cokeE12", cokeE12);
	localStorage.setItem("pepsiE12", pepsiE12)
	localStorage.setItem("stingE12", stingE12);
	localStorage.setItem("waterE12", waterNatureE12);
	localStorage.setItem("teaE12", teaE12);
	localStorage.setItem("napkinE12", napkinE12);

	localStorage.removeItem("bottleTigerBacE12");
	localStorage.removeItem("bottleTigerNauE12");
	localStorage.removeItem("tigerNauE12");
	localStorage.removeItem("tigerBacE12");
	localStorage.removeItem("heinekenE12");
	localStorage.removeItem("sevenUpE12");
	localStorage.removeItem("cokeE12");
	localStorage.removeItem("pepsiE12");
	localStorage.removeItem("stingE12");
	localStorage.removeItem("waterE12");
	localStorage.removeItem("teaE12");
	localStorage.removeItem("napkinE12");

	const totalE12 = (bottleTigerBacE12 * 26000) + (bottleTigerNauE12 * 25000) + (tigerNauE12 * 24000) + (tigerBacE12 * 25000) + (heinekenE12 * 26000) + (sevenUpE12 * 16000) + (cokeE12 * 16000) + (pepsiE12 * 16000) + (waterNatureE12 * 12000) + (stingE12 * 16000) + (teaE12 * 10000) + (napkinE12 * 3000);

	const historyE12 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyE12.push({ time: currentTime, totalE12: totalE12 });
	localStorage.setItem('totalHistory', JSON.stringify(historyE12));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalE12").innerHTML = "Tổng tiền: " + totalE12 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsE12 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsE12.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonE12 = document.getElementById("toggleDrinksE12");
const drinkElementsE12 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonE12.addEventListener("click", () => {
	drinkElementsE12.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonE12.classList.toggle("hidden");
	toggleDrinksButtonE12.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksE12 = localStorage.getItem("showDrinks");

if (showDrinksE12 === "1") {
	drinkElementsE12.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonE12.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonE12.classList.add("hidden");
} else {
	toggleDrinksButtonE12.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryE12() {
	const historyE12 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyE12.map((item, index) => `Lần ${index + 1}: ${item.totalE12} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyE12").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryE12()">Xoá lịch sử</button>';
}
function clearHistoryE12() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyE12").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyE12").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetE12() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllE12();
	}
}
function resetAllE12() {
	let inputs = {
		'bottleTigerBacE12': document.getElementById('bottleTigerBacE12').value,
		'bottleTigerNauE12': document.getElementById('bottleTigerNauE12').value,
		'tigerNauE12': document.getElementById('tigerNauE12').value,
		'tigerBacE12': document.getElementById('tigerBacE12').value,
		'heinekenE12': document.getElementById('heinekenE12').value,
		'sevenUpE12': document.getElementById('sevenUpE12').value,
		'cokeE12': document.getElementById('cokeE12').value,
		'pepsiE12': document.getElementById('pepsiE12').value,
		'stingE12': document.getElementById('stingE12').value,
		'waterNatureE12': document.getElementById('waterE12').value,
		'napkinE12': document.getElementById('napkinE12').value,
		'teaE12': document.getElementById('teaE12').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacE12').value = savedInputs.bottleTigerBacE12;
		document.getElementById('bottleTigerNauE12').value = savedInputs.bottleTigerNauE12;
		document.getElementById('tigerNauE12').value = savedInputs.tigerNauE12;
		document.getElementById('tigerBacE12').value = savedInputs.tigerBacE12;
		document.getElementById('heinekenE12').value = savedInputs.heinekenE12;
		document.getElementById('sevenUpE12').value = savedInputs.sevenUpE12;
		document.getElementById('cokeE12').value = savedInputs.cokeE12;
		document.getElementById('pepsiE12').value = savedInputs.pepsiE12;
		document.getElementById('stingE12').value = savedInputs.stingE12;
		document.getElementById('waterE12').value = savedInputs.waterE12;
		document.getElementById('teaE12').value = savedInputs.teaE12;
		document.getElementById('napkinE12').value = savedInputs.napkinE12;
	}

	document.getElementById('bottleTigerBacE12').value = '';
	document.getElementById('bottleTigerNauE12').value = '';
	document.getElementById('tigerNauE12').value = '';
	document.getElementById('tigerBacE12').value = '';
	document.getElementById('heinekenE12').value = '';
	document.getElementById('sevenUpE12').value = '';
	document.getElementById('cokeE12').value = '';
	document.getElementById('pepsiE12').value = '';
	document.getElementById('stingE12').value = '';
	document.getElementById('waterE12').value = '';
	document.getElementById('teaE12').value = '';
	document.getElementById('napkinE12').value = '';


	localStorage.removeItem("bottleTigerBacE12");
	localStorage.removeItem("bottleTigerNauE12");
	localStorage.removeItem("tigerNauE12");
	localStorage.removeItem("tigerBacE12");
	localStorage.removeItem("heinekenE12");
	localStorage.removeItem("sevenUpE12");
	localStorage.removeItem("cokeE12");
	localStorage.removeItem("pepsiE12");
	localStorage.removeItem("stingE12");
	localStorage.removeItem("waterE12");
	localStorage.removeItem("teaE12");
	localStorage.removeItem("napkinE12");

}

const inputsE12 = document.querySelectorAll('input[type="number"]');
inputsE12.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnE12 = document.getElementById("addBtnE12");
const newDrinkFormE12 = document.getElementById("newDrinkFormE12");

addBtnE12.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});

//E1/3
function confirmCalculateE13() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateE13()
	}
}
function calculateE13() {
	const bottleTigerBacE13 = document.getElementById("bottleTigerBacE13").value;
	const bottleTigerNauE13 = document.getElementById("bottleTigerNauE13").value;
	const tigerNauE13 = document.getElementById("tigerNauE13").value;
	const tigerBacE13 = document.getElementById("tigerBacE13").value;
	const heinekenE13 = document.getElementById("heinekenE13").value;
	const sevenUpE13 = document.getElementById("sevenUpE13").value;
	const cokeE13 = document.getElementById("cokeE13").value;
	const pepsiE13 = document.getElementById("pepsiE13").value;
	const stingE13 = document.getElementById("stingE13").value;
	const waterNatureE13 = document.getElementById("waterE13").value;
	const teaE13 = document.getElementById("teaE13").value;
	const napkinE13 = document.getElementById("napkinE13").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacE13 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauE13 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauE13 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacE13 },
		{ name: "Bia Heineken", quantity: heinekenE13 },
		{ name: "Nước 7up", quantity: sevenUpE13 },
		{ name: "Nước CocaCola", quantity: cokeE13 },
		{ name: "Nước pepsi", quantity: pepsiE13 },
		{ name: "Nước Sting", quantity: stingE13 },
		{ name: "Nước suối", quantity: waterNatureE13 },
		{ name: "Trà tắc", quantity: teaE13 },
		{ name: "Khăn giấy", quantity: napkinE13 },
	];

	const selectedProductsE13 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsE13.length; i++) {
		const product = selectedProductsE13[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderE13").innerHTML = bill;


	localStorage.setItem("tigerNauE13", tigerNauE13);
	localStorage.setItem("bottleTigerBacE13", bottleTigerBacE13);
	localStorage.setItem("bottleTigerNauE13", bottleTigerNauE13);
	localStorage.setItem("tigerBacE13", tigerBacE13);
	localStorage.setItem("heinekenE13", heinekenE13);
	localStorage.setItem("sevenUpE13", sevenUpE13);
	localStorage.setItem("cokeE13", cokeE13);
	localStorage.setItem("pepsiE13", pepsiE13)
	localStorage.setItem("stingE13", stingE13);
	localStorage.setItem("waterE13", waterNatureE13);
	localStorage.setItem("teaE13", teaE13);
	localStorage.setItem("napkinE13", napkinE13);

	localStorage.removeItem("bottleTigerBacE13");
	localStorage.removeItem("bottleTigerNauE13");
	localStorage.removeItem("tigerNauE13");
	localStorage.removeItem("tigerBacE13");
	localStorage.removeItem("heinekenE13");
	localStorage.removeItem("sevenUpE13");
	localStorage.removeItem("cokeE13");
	localStorage.removeItem("pepsiE13");
	localStorage.removeItem("stingE13");
	localStorage.removeItem("waterE13");
	localStorage.removeItem("teaE13");
	localStorage.removeItem("napkinE13");

	const totalE13 = (bottleTigerBacE13 * 26000) + (bottleTigerNauE13 * 25000) + (tigerNauE13 * 24000) + (tigerBacE13 * 25000) + (heinekenE13 * 26000) + (sevenUpE13 * 16000) + (cokeE13 * 16000) + (pepsiE13 * 16000) + (waterNatureE13 * 12000) + (stingE13 * 16000) + (teaE13 * 10000) + (napkinE13 * 3000);

	const historyE13 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyE13.push({ time: currentTime, totalE13: totalE13 });
	localStorage.setItem('totalHistory', JSON.stringify(historyE13));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalE13").innerHTML = "Tổng tiền: " + totalE13 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsE13 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsE13.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonE13 = document.getElementById("toggleDrinksE13");
const drinkElementsE13 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonE13.addEventListener("click", () => {
	drinkElementsE13.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonE13.classList.toggle("hidden");
	toggleDrinksButtonE13.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksE13 = localStorage.getItem("showDrinks");

if (showDrinksE13 === "1") {
	drinkElementsE13.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonE13.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonE13.classList.add("hidden");
} else {
	toggleDrinksButtonE13.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryE13() {
	const historyE13 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyE13.map((item, index) => `Lần ${index + 1}: ${item.totalE13} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyE13").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryE13()">Xoá lịch sử</button>';
}
function clearHistoryE13() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyE13").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyE13").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetE13() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllE13();
	}
}
function resetAllE13() {
	let inputs = {
		'bottleTigerBacE13': document.getElementById('bottleTigerBacE13').value,
		'bottleTigerNauE13': document.getElementById('bottleTigerNauE13').value,
		'tigerNauE13': document.getElementById('tigerNauE13').value,
		'tigerBacE13': document.getElementById('tigerBacE13').value,
		'heinekenE13': document.getElementById('heinekenE13').value,
		'sevenUpE13': document.getElementById('sevenUpE13').value,
		'cokeE13': document.getElementById('cokeE13').value,
		'pepsiE13': document.getElementById('pepsiE13').value,
		'stingE13': document.getElementById('stingE13').value,
		'waterNatureE13': document.getElementById('waterE13').value,
		'napkinE13': document.getElementById('napkinE13').value,
		'teaE13': document.getElementById('teaE13').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacE13').value = savedInputs.bottleTigerBacE13;
		document.getElementById('bottleTigerNauE13').value = savedInputs.bottleTigerNauE13;
		document.getElementById('tigerNauE13').value = savedInputs.tigerNauE13;
		document.getElementById('tigerBacE13').value = savedInputs.tigerBacE13;
		document.getElementById('heinekenE13').value = savedInputs.heinekenE13;
		document.getElementById('sevenUpE13').value = savedInputs.sevenUpE13;
		document.getElementById('cokeE13').value = savedInputs.cokeE13;
		document.getElementById('pepsiE13').value = savedInputs.pepsiE13;
		document.getElementById('stingE13').value = savedInputs.stingE13;
		document.getElementById('waterE13').value = savedInputs.waterE13;
		document.getElementById('teaE13').value = savedInputs.teaE13;
		document.getElementById('napkinE13').value = savedInputs.napkinE13;
	}

	document.getElementById('bottleTigerBacE13').value = '';
	document.getElementById('bottleTigerNauE13').value = '';
	document.getElementById('tigerNauE13').value = '';
	document.getElementById('tigerBacE13').value = '';
	document.getElementById('heinekenE13').value = '';
	document.getElementById('sevenUpE13').value = '';
	document.getElementById('cokeE13').value = '';
	document.getElementById('pepsiE13').value = '';
	document.getElementById('stingE13').value = '';
	document.getElementById('waterE13').value = '';
	document.getElementById('teaE13').value = '';
	document.getElementById('napkinE13').value = '';


	localStorage.removeItem("bottleTigerBacE13");
	localStorage.removeItem("bottleTigerNauE13");
	localStorage.removeItem("tigerNauE13");
	localStorage.removeItem("tigerBacE13");
	localStorage.removeItem("heinekenE13");
	localStorage.removeItem("sevenUpE13");
	localStorage.removeItem("cokeE13");
	localStorage.removeItem("pepsiE13");
	localStorage.removeItem("stingE13");
	localStorage.removeItem("waterE13");
	localStorage.removeItem("teaE13");
	localStorage.removeItem("napkinE13");

}

const inputsE13 = document.querySelectorAll('input[type="number"]');
inputsE13.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnE13 = document.getElementById("addBtnE13");
const newDrinkFormE13 = document.getElementById("newDrinkFormE13");

addBtnE13.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});


function confirmCalculateE14() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateE14()
	}
}
function calculateE14() {
	const bottleTigerBacE14 = document.getElementById("bottleTigerBacE14").value;
	const bottleTigerNauE14 = document.getElementById("bottleTigerNauE14").value;
	const tigerNauE14 = document.getElementById("tigerNauE14").value;
	const tigerBacE14 = document.getElementById("tigerBacE14").value;
	const heinekenE14 = document.getElementById("heinekenE14").value;
	const sevenUpE14 = document.getElementById("sevenUpE14").value;
	const cokeE14 = document.getElementById("cokeE14").value;
	const pepsiE14 = document.getElementById("pepsiE14").value;
	const stingE14 = document.getElementById("stingE14").value;
	const waterNatureE14 = document.getElementById("waterE14").value;
	const teaE14 = document.getElementById("teaE14").value;
	const napkinE14 = document.getElementById("napkinE14").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacE14 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauE14 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauE14 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacE14 },
		{ name: "Bia Heineken", quantity: heinekenE14 },
		{ name: "Nước 7up", quantity: sevenUpE14 },
		{ name: "Nước CocaCola", quantity: cokeE14 },
		{ name: "Nước pepsi", quantity: pepsiE14 },
		{ name: "Nước Sting", quantity: stingE14 },
		{ name: "Nước suối", quantity: waterNatureE14 },
		{ name: "Trà tắc", quantity: teaE14 },
		{ name: "Khăn giấy", quantity: napkinE14 },
	];

	const selectedProductsE14 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsE14.length; i++) {
		const product = selectedProductsE14[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderE14").innerHTML = bill;


	localStorage.setItem("tigerNauE14", tigerNauE14);
	localStorage.setItem("bottleTigerBacE14", bottleTigerBacE14);
	localStorage.setItem("bottleTigerNauE14", bottleTigerNauE14);
	localStorage.setItem("tigerBacE14", tigerBacE14);
	localStorage.setItem("heinekenE14", heinekenE14);
	localStorage.setItem("sevenUpE14", sevenUpE14);
	localStorage.setItem("cokeE14", cokeE14);
	localStorage.setItem("pepsiE14", pepsiE14)
	localStorage.setItem("stingE14", stingE14);
	localStorage.setItem("waterE14", waterNatureE14);
	localStorage.setItem("teaE14", teaE14);
	localStorage.setItem("napkinE14", napkinE14);

	localStorage.removeItem("bottleTigerBacE14");
	localStorage.removeItem("bottleTigerNauE14");
	localStorage.removeItem("tigerNauE14");
	localStorage.removeItem("tigerBacE14");
	localStorage.removeItem("heinekenE14");
	localStorage.removeItem("sevenUpE14");
	localStorage.removeItem("cokeE14");
	localStorage.removeItem("pepsiE14");
	localStorage.removeItem("stingE14");
	localStorage.removeItem("waterE14");
	localStorage.removeItem("teaE14");
	localStorage.removeItem("napkinE14");

	const totalE14 = (bottleTigerBacE14 * 26000) + (bottleTigerNauE14 * 25000) + (tigerNauE14 * 24000) + (tigerBacE14 * 25000) + (heinekenE14 * 26000) + (sevenUpE14 * 16000) + (cokeE14 * 16000) + (pepsiE14 * 16000) + (waterNatureE14 * 12000) + (stingE14 * 16000) + (teaE14 * 10000) + (napkinE14 * 3000);

	const historyE14 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyE14.push({ time: currentTime, totalE14: totalE14 });
	localStorage.setItem('totalHistory', JSON.stringify(historyE14));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalE14").innerHTML = "Tổng tiền: " + totalE14 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsE14 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsE14.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonE14 = document.getElementById("toggleDrinksE14");
const drinkElementsE14 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonE14.addEventListener("click", () => {
	drinkElementsE14.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonE14.classList.toggle("hidden");
	toggleDrinksButtonE14.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksE14 = localStorage.getItem("showDrinks");

if (showDrinksE14 === "1") {
	drinkElementsE14.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonE14.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonE14.classList.add("hidden");
} else {
	toggleDrinksButtonE14.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryE14() {
	const historyE14 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyE14.map((item, index) => `Lần ${index + 1}: ${item.totalE14} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyE14").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryE14()">Xoá lịch sử</button>';
}
function clearHistoryE14() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyE14").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyE14").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetE14() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllE14();
	}
}
function resetAllE14() {
	let inputs = {
		'bottleTigerBacE14': document.getElementById('bottleTigerBacE14').value,
		'bottleTigerNauE14': document.getElementById('bottleTigerNauE14').value,
		'tigerNauE14': document.getElementById('tigerNauE14').value,
		'tigerBacE14': document.getElementById('tigerBacE14').value,
		'heinekenE14': document.getElementById('heinekenE14').value,
		'sevenUpE14': document.getElementById('sevenUpE14').value,
		'cokeE14': document.getElementById('cokeE14').value,
		'pepsiE14': document.getElementById('pepsiE14').value,
		'stingE14': document.getElementById('stingE14').value,
		'waterNatureE14': document.getElementById('waterE14').value,
		'napkinE14': document.getElementById('napkinE14').value,
		'teaE14': document.getElementById('teaE14').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacE14').value = savedInputs.bottleTigerBacE14;
		document.getElementById('bottleTigerNauE14').value = savedInputs.bottleTigerNauE14;
		document.getElementById('tigerNauE14').value = savedInputs.tigerNauE14;
		document.getElementById('tigerBacE14').value = savedInputs.tigerBacE14;
		document.getElementById('heinekenE14').value = savedInputs.heinekenE14;
		document.getElementById('sevenUpE14').value = savedInputs.sevenUpE14;
		document.getElementById('cokeE14').value = savedInputs.cokeE14;
		document.getElementById('pepsiE14').value = savedInputs.pepsiE14;
		document.getElementById('stingE14').value = savedInputs.stingE14;
		document.getElementById('waterE14').value = savedInputs.waterE14;
		document.getElementById('teaE14').value = savedInputs.teaE14;
		document.getElementById('napkinE14').value = savedInputs.napkinE14;
	}

	document.getElementById('bottleTigerBacE14').value = '';
	document.getElementById('bottleTigerNauE14').value = '';
	document.getElementById('tigerNauE14').value = '';
	document.getElementById('tigerBacE14').value = '';
	document.getElementById('heinekenE14').value = '';
	document.getElementById('sevenUpE14').value = '';
	document.getElementById('cokeE14').value = '';
	document.getElementById('pepsiE14').value = '';
	document.getElementById('stingE14').value = '';
	document.getElementById('waterE14').value = '';
	document.getElementById('teaE14').value = '';
	document.getElementById('napkinE14').value = '';


	localStorage.removeItem("bottleTigerBacE14");
	localStorage.removeItem("bottleTigerNauE14");
	localStorage.removeItem("tigerNauE14");
	localStorage.removeItem("tigerBacE14");
	localStorage.removeItem("heinekenE14");
	localStorage.removeItem("sevenUpE14");
	localStorage.removeItem("cokeE14");
	localStorage.removeItem("pepsiE14");
	localStorage.removeItem("stingE14");
	localStorage.removeItem("waterE14");
	localStorage.removeItem("teaE14");
	localStorage.removeItem("napkinE14");

}

const inputsE14 = document.querySelectorAll('input[type="number"]');
inputsE14.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnE14 = document.getElementById("addBtnE14");
const newDrinkFormE14 = document.getElementById("newDrinkFormE14");

addBtnE14.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});


function confirmCalculateE21() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateE21()
	}
}
function calculateE21() {
	const bottleTigerBacE21 = document.getElementById("bottleTigerBacE21").value;
	const bottleTigerNauE21 = document.getElementById("bottleTigerNauE21").value;
	const tigerNauE21 = document.getElementById("tigerNauE21").value;
	const tigerBacE21 = document.getElementById("tigerBacE21").value;
	const heinekenE21 = document.getElementById("heinekenE21").value;
	const sevenUpE21 = document.getElementById("sevenUpE21").value;
	const cokeE21 = document.getElementById("cokeE21").value;
	const pepsiE21 = document.getElementById("pepsiE21").value;
	const stingE21 = document.getElementById("stingE21").value;
	const waterNatureE21 = document.getElementById("waterE21").value;
	const teaE21 = document.getElementById("teaE21").value;
	const napkinE21 = document.getElementById("napkinE21").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacE21 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauE21 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauE21 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacE21 },
		{ name: "Bia Heineken", quantity: heinekenE21 },
		{ name: "Nước 7up", quantity: sevenUpE21 },
		{ name: "Nước CocaCola", quantity: cokeE21 },
		{ name: "Nước pepsi", quantity: pepsiE21 },
		{ name: "Nước Sting", quantity: stingE21 },
		{ name: "Nước suối", quantity: waterNatureE21 },
		{ name: "Trà tắc", quantity: teaE21 },
		{ name: "Khăn giấy", quantity: napkinE21 },
	];

	const selectedProductsE21 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsE21.length; i++) {
		const product = selectedProductsE21[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderE21").innerHTML = bill;


	localStorage.setItem("tigerNauE21", tigerNauE21);
	localStorage.setItem("bottleTigerBacE21", bottleTigerBacE21);
	localStorage.setItem("bottleTigerNauE21", bottleTigerNauE21);
	localStorage.setItem("tigerBacE21", tigerBacE21);
	localStorage.setItem("heinekenE21", heinekenE21);
	localStorage.setItem("sevenUpE21", sevenUpE21);
	localStorage.setItem("cokeE21", cokeE21);
	localStorage.setItem("pepsiE21", pepsiE21)
	localStorage.setItem("stingE21", stingE21);
	localStorage.setItem("waterE21", waterNatureE21);
	localStorage.setItem("teaE21", teaE21);
	localStorage.setItem("napkinE21", napkinE21);

	localStorage.removeItem("bottleTigerBacE21");
	localStorage.removeItem("bottleTigerNauE21");
	localStorage.removeItem("tigerNauE21");
	localStorage.removeItem("tigerBacE21");
	localStorage.removeItem("heinekenE21");
	localStorage.removeItem("sevenUpE21");
	localStorage.removeItem("cokeE21");
	localStorage.removeItem("pepsiE21");
	localStorage.removeItem("stingE21");
	localStorage.removeItem("waterE21");
	localStorage.removeItem("teaE21");
	localStorage.removeItem("napkinE21");

	const totalE21 = (bottleTigerBacE21 * 26000) + (bottleTigerNauE21 * 25000) + (tigerNauE21 * 24000) + (tigerBacE21 * 25000) + (heinekenE21 * 26000) + (sevenUpE21 * 16000) + (cokeE21 * 16000) + (pepsiE21 * 16000) + (waterNatureE21 * 12000) + (stingE21 * 16000) + (teaE21 * 10000) + (napkinE21 * 3000);

	const historyE21 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyE21.push({ time: currentTime, totalE21: totalE21 });
	localStorage.setItem('totalHistory', JSON.stringify(historyE21));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalE21").innerHTML = "Tổng tiền: " + totalE21 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsE21 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsE21.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonE21 = document.getElementById("toggleDrinksE21");
const drinkElementsE21 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonE21.addEventListener("click", () => {
	drinkElementsE21.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonE21.classList.toggle("hidden");
	toggleDrinksButtonE21.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksE21 = localStorage.getItem("showDrinks");

if (showDrinksE21 === "1") {
	drinkElementsE21.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonE21.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonE21.classList.add("hidden");
} else {
	toggleDrinksButtonE21.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryE21() {
	const historyE21 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyE21.map((item, index) => `Lần ${index + 1}: ${item.totalE21} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyE21").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryE21()">Xoá lịch sử</button>';
}
function clearHistoryE21() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyE21").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyE21").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetE21() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllE21();
	}
}
function resetAllE21() {
	let inputs = {
		'bottleTigerBacE21': document.getElementById('bottleTigerBacE21').value,
		'bottleTigerNauE21': document.getElementById('bottleTigerNauE21').value,
		'tigerNauE21': document.getElementById('tigerNauE21').value,
		'tigerBacE21': document.getElementById('tigerBacE21').value,
		'heinekenE21': document.getElementById('heinekenE21').value,
		'sevenUpE21': document.getElementById('sevenUpE21').value,
		'cokeE21': document.getElementById('cokeE21').value,
		'pepsiE21': document.getElementById('pepsiE21').value,
		'stingE21': document.getElementById('stingE21').value,
		'waterNatureE21': document.getElementById('waterE21').value,
		'napkinE21': document.getElementById('napkinE21').value,
		'teaE21': document.getElementById('teaE21').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacE21').value = savedInputs.bottleTigerBacE21;
		document.getElementById('bottleTigerNauE21').value = savedInputs.bottleTigerNauE21;
		document.getElementById('tigerNauE21').value = savedInputs.tigerNauE21;
		document.getElementById('tigerBacE21').value = savedInputs.tigerBacE21;
		document.getElementById('heinekenE21').value = savedInputs.heinekenE21;
		document.getElementById('sevenUpE21').value = savedInputs.sevenUpE21;
		document.getElementById('cokeE21').value = savedInputs.cokeE21;
		document.getElementById('pepsiE21').value = savedInputs.pepsiE21;
		document.getElementById('stingE21').value = savedInputs.stingE21;
		document.getElementById('waterE21').value = savedInputs.waterE21;
		document.getElementById('teaE21').value = savedInputs.teaE21;
		document.getElementById('napkinE21').value = savedInputs.napkinE21;
	}

	document.getElementById('bottleTigerBacE21').value = '';
	document.getElementById('bottleTigerNauE21').value = '';
	document.getElementById('tigerNauE21').value = '';
	document.getElementById('tigerBacE21').value = '';
	document.getElementById('heinekenE21').value = '';
	document.getElementById('sevenUpE21').value = '';
	document.getElementById('cokeE21').value = '';
	document.getElementById('pepsiE21').value = '';
	document.getElementById('stingE21').value = '';
	document.getElementById('waterE21').value = '';
	document.getElementById('teaE21').value = '';
	document.getElementById('napkinE21').value = '';


	localStorage.removeItem("bottleTigerBacE21");
	localStorage.removeItem("bottleTigerNauE21");
	localStorage.removeItem("tigerNauE21");
	localStorage.removeItem("tigerBacE21");
	localStorage.removeItem("heinekenE21");
	localStorage.removeItem("sevenUpE21");
	localStorage.removeItem("cokeE21");
	localStorage.removeItem("pepsiE21");
	localStorage.removeItem("stingE21");
	localStorage.removeItem("waterE21");
	localStorage.removeItem("teaE21");
	localStorage.removeItem("napkinE21");

}

const inputsE21 = document.querySelectorAll('input[type="number"]');
inputsE21.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnE21 = document.getElementById("addBtnE21");
const newDrinkFormE21 = document.getElementById("newDrinkFormE21");

addBtnE21.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});


function confirmCalculateE22() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateE22()
	}
}
function calculateE22() {
	const bottleTigerBacE22 = document.getElementById("bottleTigerBacE22").value;
	const bottleTigerNauE22 = document.getElementById("bottleTigerNauE22").value;
	const tigerNauE22 = document.getElementById("tigerNauE22").value;
	const tigerBacE22 = document.getElementById("tigerBacE22").value;
	const heinekenE22 = document.getElementById("heinekenE22").value;
	const sevenUpE22 = document.getElementById("sevenUpE22").value;
	const cokeE22 = document.getElementById("cokeE22").value;
	const pepsiE22 = document.getElementById("pepsiE22").value;
	const stingE22 = document.getElementById("stingE22").value;
	const waterNatureE22 = document.getElementById("waterE22").value;
	const teaE22 = document.getElementById("teaE22").value;
	const napkinE22 = document.getElementById("napkinE22").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacE22 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauE22 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauE22 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacE22 },
		{ name: "Bia Heineken", quantity: heinekenE22 },
		{ name: "Nước 7up", quantity: sevenUpE22 },
		{ name: "Nước CocaCola", quantity: cokeE22 },
		{ name: "Nước pepsi", quantity: pepsiE22 },
		{ name: "Nước Sting", quantity: stingE22 },
		{ name: "Nước suối", quantity: waterNatureE22 },
		{ name: "Trà tắc", quantity: teaE22 },
		{ name: "Khăn giấy", quantity: napkinE22 },
	];

	const selectedProductsE22 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsE22.length; i++) {
		const product = selectedProductsE22[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderE22").innerHTML = bill;


	localStorage.setItem("tigerNauE22", tigerNauE22);
	localStorage.setItem("bottleTigerBacE22", bottleTigerBacE22);
	localStorage.setItem("bottleTigerNauE22", bottleTigerNauE22);
	localStorage.setItem("tigerBacE22", tigerBacE22);
	localStorage.setItem("heinekenE22", heinekenE22);
	localStorage.setItem("sevenUpE22", sevenUpE22);
	localStorage.setItem("cokeE22", cokeE22);
	localStorage.setItem("pepsiE22", pepsiE22)
	localStorage.setItem("stingE22", stingE22);
	localStorage.setItem("waterE22", waterNatureE22);
	localStorage.setItem("teaE22", teaE22);
	localStorage.setItem("napkinE22", napkinE22);

	localStorage.removeItem("bottleTigerBacE22");
	localStorage.removeItem("bottleTigerNauE22");
	localStorage.removeItem("tigerNauE22");
	localStorage.removeItem("tigerBacE22");
	localStorage.removeItem("heinekenE22");
	localStorage.removeItem("sevenUpE22");
	localStorage.removeItem("cokeE22");
	localStorage.removeItem("pepsiE22");
	localStorage.removeItem("stingE22");
	localStorage.removeItem("waterE22");
	localStorage.removeItem("teaE22");
	localStorage.removeItem("napkinE22");

	const totalE22 = (bottleTigerBacE22 * 26000) + (bottleTigerNauE22 * 25000) + (tigerNauE22 * 24000) + (tigerBacE22 * 25000) + (heinekenE22 * 26000) + (sevenUpE22 * 16000) + (cokeE22 * 16000) + (pepsiE22 * 16000) + (waterNatureE22 * 12000) + (stingE22 * 16000) + (teaE22 * 10000) + (napkinE22 * 3000);

	const historyE22 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyE22.push({ time: currentTime, totalE22: totalE22 });
	localStorage.setItem('totalHistory', JSON.stringify(historyE22));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalE22").innerHTML = "Tổng tiền: " + totalE22 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsE22 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsE22.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonE22 = document.getElementById("toggleDrinksE22");
const drinkElementsE22 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonE22.addEventListener("click", () => {
	drinkElementsE22.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonE22.classList.toggle("hidden");
	toggleDrinksButtonE22.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksE22 = localStorage.getItem("showDrinks");

if (showDrinksE22 === "1") {
	drinkElementsE22.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonE22.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonE22.classList.add("hidden");
} else {
	toggleDrinksButtonE22.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryE22() {
	const historyE22 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyE22.map((item, index) => `Lần ${index + 1}: ${item.totalE22} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyE22").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryE22()">Xoá lịch sử</button>';
}
function clearHistoryE22() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyE22").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyE22").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetE22() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllE22();
	}
}
function resetAllE22() {
	let inputs = {
		'bottleTigerBacE22': document.getElementById('bottleTigerBacE22').value,
		'bottleTigerNauE22': document.getElementById('bottleTigerNauE22').value,
		'tigerNauE22': document.getElementById('tigerNauE22').value,
		'tigerBacE22': document.getElementById('tigerBacE22').value,
		'heinekenE22': document.getElementById('heinekenE22').value,
		'sevenUpE22': document.getElementById('sevenUpE22').value,
		'cokeE22': document.getElementById('cokeE22').value,
		'pepsiE22': document.getElementById('pepsiE22').value,
		'stingE22': document.getElementById('stingE22').value,
		'waterNatureE22': document.getElementById('waterE22').value,
		'napkinE22': document.getElementById('napkinE22').value,
		'teaE22': document.getElementById('teaE22').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacE22').value = savedInputs.bottleTigerBacE22;
		document.getElementById('bottleTigerNauE22').value = savedInputs.bottleTigerNauE22;
		document.getElementById('tigerNauE22').value = savedInputs.tigerNauE22;
		document.getElementById('tigerBacE22').value = savedInputs.tigerBacE22;
		document.getElementById('heinekenE22').value = savedInputs.heinekenE22;
		document.getElementById('sevenUpE22').value = savedInputs.sevenUpE22;
		document.getElementById('cokeE22').value = savedInputs.cokeE22;
		document.getElementById('pepsiE22').value = savedInputs.pepsiE22;
		document.getElementById('stingE22').value = savedInputs.stingE22;
		document.getElementById('waterE22').value = savedInputs.waterE22;
		document.getElementById('teaE22').value = savedInputs.teaE22;
		document.getElementById('napkinE22').value = savedInputs.napkinE22;
	}

	document.getElementById('bottleTigerBacE22').value = '';
	document.getElementById('bottleTigerNauE22').value = '';
	document.getElementById('tigerNauE22').value = '';
	document.getElementById('tigerBacE22').value = '';
	document.getElementById('heinekenE22').value = '';
	document.getElementById('sevenUpE22').value = '';
	document.getElementById('cokeE22').value = '';
	document.getElementById('pepsiE22').value = '';
	document.getElementById('stingE22').value = '';
	document.getElementById('waterE22').value = '';
	document.getElementById('teaE22').value = '';
	document.getElementById('napkinE22').value = '';


	localStorage.removeItem("bottleTigerBacE22");
	localStorage.removeItem("bottleTigerNauE22");
	localStorage.removeItem("tigerNauE22");
	localStorage.removeItem("tigerBacE22");
	localStorage.removeItem("heinekenE22");
	localStorage.removeItem("sevenUpE22");
	localStorage.removeItem("cokeE22");
	localStorage.removeItem("pepsiE22");
	localStorage.removeItem("stingE22");
	localStorage.removeItem("waterE22");
	localStorage.removeItem("teaE22");
	localStorage.removeItem("napkinE22");

}

const inputsE22 = document.querySelectorAll('input[type="number"]');
inputsE22.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnE22 = document.getElementById("addBtnE22");
const newDrinkFormE22 = document.getElementById("newDrinkFormE22");

addBtnE22.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});

//f1/1

function confirmCalculateF11() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateF11()
	}
}
function calculateF11() {
	const bottleTigerBacF11 = document.getElementById("bottleTigerBacF11").value;
	const bottleTigerNauF11 = document.getElementById("bottleTigerNauF11").value;
	const tigerNauF11 = document.getElementById("tigerNauF11").value;
	const tigerBacF11 = document.getElementById("tigerBacF11").value;
	const heinekenF11 = document.getElementById("heinekenF11").value;
	const sevenUpF11 = document.getElementById("sevenUpF11").value;
	const cokeF11 = document.getElementById("cokeF11").value;
	const pepsiF11 = document.getElementById("pepsiF11").value;
	const stingF11 = document.getElementById("stingF11").value;
	const waterNatureF11 = document.getElementById("waterF11").value;
	const teaF11 = document.getElementById("teaF11").value;
	const napkinF11 = document.getElementById("napkinF11").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacF11 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauF11 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauF11 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacF11 },
		{ name: "Bia Heineken", quantity: heinekenF11 },
		{ name: "Nước 7up", quantity: sevenUpF11 },
		{ name: "Nước CocaCola", quantity: cokeF11 },
		{ name: "Nước pepsi", quantity: pepsiF11 },
		{ name: "Nước Sting", quantity: stingF11 },
		{ name: "Nước suối", quantity: waterNatureF11 },
		{ name: "Trà tắc", quantity: teaF11 },
		{ name: "Khăn giấy", quantity: napkinF11 },
	];

	const selectedProductsF11 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsF11.length; i++) {
		const product = selectedProductsF11[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderF11").innerHTML = bill;


	localStorage.setItem("tigerNauF11", tigerNauF11);
	localStorage.setItem("bottleTigerBacF11", bottleTigerBacF11);
	localStorage.setItem("bottleTigerNauF11", bottleTigerNauF11);
	localStorage.setItem("tigerBacF11", tigerBacF11);
	localStorage.setItem("heinekenF11", heinekenF11);
	localStorage.setItem("sevenUpF11", sevenUpF11);
	localStorage.setItem("cokeF11", cokeF11);
	localStorage.setItem("pepsiF11", pepsiF11)
	localStorage.setItem("stingF11", stingF11);
	localStorage.setItem("waterF11", waterNatureF11);
	localStorage.setItem("teaF11", teaF11);
	localStorage.setItem("napkinF11", napkinF11);

	localStorage.removeItem("bottleTigerBacF11");
	localStorage.removeItem("bottleTigerNauF11");
	localStorage.removeItem("tigerNauF11");
	localStorage.removeItem("tigerBacF11");
	localStorage.removeItem("heinekenF11");
	localStorage.removeItem("sevenUpF11");
	localStorage.removeItem("cokeF11");
	localStorage.removeItem("pepsiF11");
	localStorage.removeItem("stingF11");
	localStorage.removeItem("waterF11");
	localStorage.removeItem("teaF11");
	localStorage.removeItem("napkinF11");

	const totalF11 = (bottleTigerBacF11 * 26000) + (bottleTigerNauF11 * 25000) + (tigerNauF11 * 24000) + (tigerBacF11 * 25000) + (heinekenF11 * 26000) + (sevenUpF11 * 16000) + (cokeF11 * 16000) + (pepsiF11 * 16000) + (waterNatureF11 * 12000) + (stingF11 * 16000) + (teaF11 * 10000) + (napkinF11 * 3000);

	const historyF11 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyF11.push({ time: currentTime, totalF11: totalF11 });
	localStorage.setItem('totalHistory', JSON.stringify(historyF11));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalF11").innerHTML = "Tổng tiền: " + totalF11 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsF11 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsF11.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonF11 = document.getElementById("toggleDrinksF11");
const drinkElementsF11 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonF11.addEventListener("click", () => {
	drinkElementsF11.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonF11.classList.toggle("hidden");
	toggleDrinksButtonF11.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksF11 = localStorage.getItem("showDrinks");

if (showDrinksF11 === "1") {
	drinkElementsF11.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonF11.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonF11.classList.add("hidden");
} else {
	toggleDrinksButtonF11.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryF11() {
	const historyF11 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyF11.map((item, index) => `Lần ${index + 1}: ${item.totalF11} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyF11").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryF11()">Xoá lịch sử</button>';
}
function clearHistoryF11() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyF11").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyF11").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetF11() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllF11();
	}
}
function resetAllF11() {
	let inputs = {
		'bottleTigerBacF11': document.getElementById('bottleTigerBacF11').value,
		'bottleTigerNauF11': document.getElementById('bottleTigerNauF11').value,
		'tigerNauF11': document.getElementById('tigerNauF11').value,
		'tigerBacF11': document.getElementById('tigerBacF11').value,
		'heinekenF11': document.getElementById('heinekenF11').value,
		'sevenUpF11': document.getElementById('sevenUpF11').value,
		'cokeF11': document.getElementById('cokeF11').value,
		'pepsiF11': document.getElementById('pepsiF11').value,
		'stingF11': document.getElementById('stingF11').value,
		'waterNatureF11': document.getElementById('waterF11').value,
		'napkinF11': document.getElementById('napkinF11').value,
		'teaF11': document.getElementById('teaF11').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacF11').value = savedInputs.bottleTigerBacF11;
		document.getElementById('bottleTigerNauF11').value = savedInputs.bottleTigerNauF11;
		document.getElementById('tigerNauF11').value = savedInputs.tigerNauF11;
		document.getElementById('tigerBacF11').value = savedInputs.tigerBacF11;
		document.getElementById('heinekenF11').value = savedInputs.heinekenF11;
		document.getElementById('sevenUpF11').value = savedInputs.sevenUpF11;
		document.getElementById('cokeF11').value = savedInputs.cokeF11;
		document.getElementById('pepsiF11').value = savedInputs.pepsiF11;
		document.getElementById('stingF11').value = savedInputs.stingF11;
		document.getElementById('waterF11').value = savedInputs.waterF11;
		document.getElementById('teaF11').value = savedInputs.teaF11;
		document.getElementById('napkinF11').value = savedInputs.napkinF11;
	}

	document.getElementById('bottleTigerBacF11').value = '';
	document.getElementById('bottleTigerNauF11').value = '';
	document.getElementById('tigerNauF11').value = '';
	document.getElementById('tigerBacF11').value = '';
	document.getElementById('heinekenF11').value = '';
	document.getElementById('sevenUpF11').value = '';
	document.getElementById('cokeF11').value = '';
	document.getElementById('pepsiF11').value = '';
	document.getElementById('stingF11').value = '';
	document.getElementById('waterF11').value = '';
	document.getElementById('teaF11').value = '';
	document.getElementById('napkinF11').value = '';


	localStorage.removeItem("bottleTigerBacF11");
	localStorage.removeItem("bottleTigerNauF11");
	localStorage.removeItem("tigerNauF11");
	localStorage.removeItem("tigerBacF11");
	localStorage.removeItem("heinekenF11");
	localStorage.removeItem("sevenUpF11");
	localStorage.removeItem("cokeF11");
	localStorage.removeItem("pepsiF11");
	localStorage.removeItem("stingF11");
	localStorage.removeItem("waterF11");
	localStorage.removeItem("teaF11");
	localStorage.removeItem("napkinF11");

}

const inputsF11 = document.querySelectorAll('input[type="number"]');
inputsF11.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnF11 = document.getElementById("addBtnF11");
const newDrinkFormF11 = document.getElementById("newDrinkFormF11");

addBtnF11.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});

//F1/2

function confirmCalculateF12() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateF12()
	}
}
function calculateF12() {
	const bottleTigerBacF12 = document.getElementById("bottleTigerBacF12").value;
	const bottleTigerNauF12 = document.getElementById("bottleTigerNauF12").value;
	const tigerNauF12 = document.getElementById("tigerNauF12").value;
	const tigerBacF12 = document.getElementById("tigerBacF12").value;
	const heinekenF12 = document.getElementById("heinekenF12").value;
	const sevenUpF12 = document.getElementById("sevenUpF12").value;
	const cokeF12 = document.getElementById("cokeF12").value;
	const pepsiF12 = document.getElementById("pepsiF12").value;
	const stingF12 = document.getElementById("stingF12").value;
	const waterNatureF12 = document.getElementById("waterF12").value;
	const teaF12 = document.getElementById("teaF12").value;
	const napkinF12 = document.getElementById("napkinF12").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacF12 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauF12 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauF12 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacF12 },
		{ name: "Bia Heineken", quantity: heinekenF12 },
		{ name: "Nước 7up", quantity: sevenUpF12 },
		{ name: "Nước CocaCola", quantity: cokeF12 },
		{ name: "Nước pepsi", quantity: pepsiF12 },
		{ name: "Nước Sting", quantity: stingF12 },
		{ name: "Nước suối", quantity: waterNatureF12 },
		{ name: "Trà tắc", quantity: teaF12 },
		{ name: "Khăn giấy", quantity: napkinF12 },
	];

	const selectedProductsF12 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsF12.length; i++) {
		const product = selectedProductsF12[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderF12").innerHTML = bill;


	localStorage.setItem("tigerNauF12", tigerNauF12);
	localStorage.setItem("bottleTigerBacF12", bottleTigerBacF12);
	localStorage.setItem("bottleTigerNauF12", bottleTigerNauF12);
	localStorage.setItem("tigerBacF12", tigerBacF12);
	localStorage.setItem("heinekenF12", heinekenF12);
	localStorage.setItem("sevenUpF12", sevenUpF12);
	localStorage.setItem("cokeF12", cokeF12);
	localStorage.setItem("pepsiF12", pepsiF12)
	localStorage.setItem("stingF12", stingF12);
	localStorage.setItem("waterF12", waterNatureF12);
	localStorage.setItem("teaF12", teaF12);
	localStorage.setItem("napkinF12", napkinF12);

	localStorage.removeItem("bottleTigerBacF12");
	localStorage.removeItem("bottleTigerNauF12");
	localStorage.removeItem("tigerNauF12");
	localStorage.removeItem("tigerBacF12");
	localStorage.removeItem("heinekenF12");
	localStorage.removeItem("sevenUpF12");
	localStorage.removeItem("cokeF12");
	localStorage.removeItem("pepsiF12");
	localStorage.removeItem("stingF12");
	localStorage.removeItem("waterF12");
	localStorage.removeItem("teaF12");
	localStorage.removeItem("napkinF12");

	const totalF12 = (bottleTigerBacF12 * 26000) + (bottleTigerNauF12 * 25000) + (tigerNauF12 * 24000) + (tigerBacF12 * 25000) + (heinekenF12 * 26000) + (sevenUpF12 * 16000) + (cokeF12 * 16000) + (pepsiF12 * 16000) + (waterNatureF12 * 12000) + (stingF12 * 16000) + (teaF12 * 10000) + (napkinF12 * 3000);

	const historyF12 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyF12.push({ time: currentTime, totalF12: totalF12 });
	localStorage.setItem('totalHistory', JSON.stringify(historyF12));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalF12").innerHTML = "Tổng tiền: " + totalF12 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsF12 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsF12.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonF12 = document.getElementById("toggleDrinksF12");
const drinkElementsF12 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonF12.addEventListener("click", () => {
	drinkElementsF12.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonF12.classList.toggle("hidden");
	toggleDrinksButtonF12.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksF12 = localStorage.getItem("showDrinks");

if (showDrinksF12 === "1") {
	drinkElementsF12.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonF12.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonF12.classList.add("hidden");
} else {
	toggleDrinksButtonF12.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryF12() {
	const historyF12 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyF12.map((item, index) => `Lần ${index + 1}: ${item.totalF12} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyF12").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryF12()">Xoá lịch sử</button>';
}
function clearHistoryF12() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyF12").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyF12").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetF12() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllF12();
	}
}
function resetAllF12() {
	let inputs = {
		'bottleTigerBacF12': document.getElementById('bottleTigerBacF12').value,
		'bottleTigerNauF12': document.getElementById('bottleTigerNauF12').value,
		'tigerNauF12': document.getElementById('tigerNauF12').value,
		'tigerBacF12': document.getElementById('tigerBacF12').value,
		'heinekenF12': document.getElementById('heinekenF12').value,
		'sevenUpF12': document.getElementById('sevenUpF12').value,
		'cokeF12': document.getElementById('cokeF12').value,
		'pepsiF12': document.getElementById('pepsiF12').value,
		'stingF12': document.getElementById('stingF12').value,
		'waterNatureF12': document.getElementById('waterF12').value,
		'napkinF12': document.getElementById('napkinF12').value,
		'teaF12': document.getElementById('teaF12').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacF12').value = savedInputs.bottleTigerBacF12;
		document.getElementById('bottleTigerNauF12').value = savedInputs.bottleTigerNauF12;
		document.getElementById('tigerNauF12').value = savedInputs.tigerNauF12;
		document.getElementById('tigerBacF12').value = savedInputs.tigerBacF12;
		document.getElementById('heinekenF12').value = savedInputs.heinekenF12;
		document.getElementById('sevenUpF12').value = savedInputs.sevenUpF12;
		document.getElementById('cokeF12').value = savedInputs.cokeF12;
		document.getElementById('pepsiF12').value = savedInputs.pepsiF12;
		document.getElementById('stingF12').value = savedInputs.stingF12;
		document.getElementById('waterF12').value = savedInputs.waterF12;
		document.getElementById('teaF12').value = savedInputs.teaF12;
		document.getElementById('napkinF12').value = savedInputs.napkinF12;
	}

	document.getElementById('bottleTigerBacF12').value = '';
	document.getElementById('bottleTigerNauF12').value = '';
	document.getElementById('tigerNauF12').value = '';
	document.getElementById('tigerBacF12').value = '';
	document.getElementById('heinekenF12').value = '';
	document.getElementById('sevenUpF12').value = '';
	document.getElementById('cokeF12').value = '';
	document.getElementById('pepsiF12').value = '';
	document.getElementById('stingF12').value = '';
	document.getElementById('waterF12').value = '';
	document.getElementById('teaF12').value = '';
	document.getElementById('napkinF12').value = '';


	localStorage.removeItem("bottleTigerBacF12");
	localStorage.removeItem("bottleTigerNauF12");
	localStorage.removeItem("tigerNauF12");
	localStorage.removeItem("tigerBacF12");
	localStorage.removeItem("heinekenF12");
	localStorage.removeItem("sevenUpF12");
	localStorage.removeItem("cokeF12");
	localStorage.removeItem("pepsiF12");
	localStorage.removeItem("stingF12");
	localStorage.removeItem("waterF12");
	localStorage.removeItem("teaF12");
	localStorage.removeItem("napkinF12");

}

const inputsF12 = document.querySelectorAll('input[type="number"]');
inputsF12.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnF12 = document.getElementById("addBtnF12");
const newDrinkFormF12 = document.getElementById("newDrinkFormF12");

addBtnF12.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});


//F13

function confirmCalculateF13() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateF13()
	}
}
function calculateF13() {
	const bottleTigerBacF13 = document.getElementById("bottleTigerBacF13").value;
	const bottleTigerNauF13 = document.getElementById("bottleTigerNauF13").value;
	const tigerNauF13 = document.getElementById("tigerNauF13").value;
	const tigerBacF13 = document.getElementById("tigerBacF13").value;
	const heinekenF13 = document.getElementById("heinekenF13").value;
	const sevenUpF13 = document.getElementById("sevenUpF13").value;
	const cokeF13 = document.getElementById("cokeF13").value;
	const pepsiF13 = document.getElementById("pepsiF13").value;
	const stingF13 = document.getElementById("stingF13").value;
	const waterNatureF13 = document.getElementById("waterF13").value;
	const teaF13 = document.getElementById("teaF13").value;
	const napkinF13 = document.getElementById("napkinF13").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacF13 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauF13 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauF13 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacF13 },
		{ name: "Bia Heineken", quantity: heinekenF13 },
		{ name: "Nước 7up", quantity: sevenUpF13 },
		{ name: "Nước CocaCola", quantity: cokeF13 },
		{ name: "Nước pepsi", quantity: pepsiF13 },
		{ name: "Nước Sting", quantity: stingF13 },
		{ name: "Nước suối", quantity: waterNatureF13 },
		{ name: "Trà tắc", quantity: teaF13 },
		{ name: "Khăn giấy", quantity: napkinF13 },
	];

	const selectedProductsF13 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsF13.length; i++) {
		const product = selectedProductsF13[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderF13").innerHTML = bill;


	localStorage.setItem("tigerNauF13", tigerNauF13);
	localStorage.setItem("bottleTigerBacF13", bottleTigerBacF13);
	localStorage.setItem("bottleTigerNauF13", bottleTigerNauF13);
	localStorage.setItem("tigerBacF13", tigerBacF13);
	localStorage.setItem("heinekenF13", heinekenF13);
	localStorage.setItem("sevenUpF13", sevenUpF13);
	localStorage.setItem("cokeF13", cokeF13);
	localStorage.setItem("pepsiF13", pepsiF13)
	localStorage.setItem("stingF13", stingF13);
	localStorage.setItem("waterF13", waterNatureF13);
	localStorage.setItem("teaF13", teaF13);
	localStorage.setItem("napkinF13", napkinF13);

	localStorage.removeItem("bottleTigerBacF13");
	localStorage.removeItem("bottleTigerNauF13");
	localStorage.removeItem("tigerNauF13");
	localStorage.removeItem("tigerBacF13");
	localStorage.removeItem("heinekenF13");
	localStorage.removeItem("sevenUpF13");
	localStorage.removeItem("cokeF13");
	localStorage.removeItem("pepsiF13");
	localStorage.removeItem("stingF13");
	localStorage.removeItem("waterF13");
	localStorage.removeItem("teaF13");
	localStorage.removeItem("napkinF13");

	const totalF13 = (bottleTigerBacF13 * 26000) + (bottleTigerNauF13 * 25000) + (tigerNauF13 * 24000) + (tigerBacF13 * 25000) + (heinekenF13 * 26000) + (sevenUpF13 * 16000) + (cokeF13 * 16000) + (pepsiF13 * 16000) + (waterNatureF13 * 12000) + (stingF13 * 16000) + (teaF13 * 10000) + (napkinF13 * 3000);

	const historyF13 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyF13.push({ time: currentTime, totalF13: totalF13 });
	localStorage.setItem('totalHistory', JSON.stringify(historyF13));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalF13").innerHTML = "Tổng tiền: " + totalF13 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsF13 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsF13.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonF13 = document.getElementById("toggleDrinksF13");
const drinkElementsF13 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonF13.addEventListener("click", () => {
	drinkElementsF13.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonF13.classList.toggle("hidden");
	toggleDrinksButtonF13.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksF13 = localStorage.getItem("showDrinks");

if (showDrinksF13 === "1") {
	drinkElementsF13.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonF13.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonF13.classList.add("hidden");
} else {
	toggleDrinksButtonF13.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryF13() {
	const historyF13 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyF13.map((item, index) => `Lần ${index + 1}: ${item.totalF13} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyF13").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryF13()">Xoá lịch sử</button>';
}
function clearHistoryF13() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyF13").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyF13").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetF13() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllF13();
	}
}
function resetAllF13() {
	let inputs = {
		'bottleTigerBacF13': document.getElementById('bottleTigerBacF13').value,
		'bottleTigerNauF13': document.getElementById('bottleTigerNauF13').value,
		'tigerNauF13': document.getElementById('tigerNauF13').value,
		'tigerBacF13': document.getElementById('tigerBacF13').value,
		'heinekenF13': document.getElementById('heinekenF13').value,
		'sevenUpF13': document.getElementById('sevenUpF13').value,
		'cokeF13': document.getElementById('cokeF13').value,
		'pepsiF13': document.getElementById('pepsiF13').value,
		'stingF13': document.getElementById('stingF13').value,
		'waterNatureF13': document.getElementById('waterF13').value,
		'napkinF13': document.getElementById('napkinF13').value,
		'teaF13': document.getElementById('teaF13').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacF13').value = savedInputs.bottleTigerBacF13;
		document.getElementById('bottleTigerNauF13').value = savedInputs.bottleTigerNauF13;
		document.getElementById('tigerNauF13').value = savedInputs.tigerNauF13;
		document.getElementById('tigerBacF13').value = savedInputs.tigerBacF13;
		document.getElementById('heinekenF13').value = savedInputs.heinekenF13;
		document.getElementById('sevenUpF13').value = savedInputs.sevenUpF13;
		document.getElementById('cokeF13').value = savedInputs.cokeF13;
		document.getElementById('pepsiF13').value = savedInputs.pepsiF13;
		document.getElementById('stingF13').value = savedInputs.stingF13;
		document.getElementById('waterF13').value = savedInputs.waterF13;
		document.getElementById('teaF13').value = savedInputs.teaF13;
		document.getElementById('napkinF13').value = savedInputs.napkinF13;
	}

	document.getElementById('bottleTigerBacF13').value = '';
	document.getElementById('bottleTigerNauF13').value = '';
	document.getElementById('tigerNauF13').value = '';
	document.getElementById('tigerBacF13').value = '';
	document.getElementById('heinekenF13').value = '';
	document.getElementById('sevenUpF13').value = '';
	document.getElementById('cokeF13').value = '';
	document.getElementById('pepsiF13').value = '';
	document.getElementById('stingF13').value = '';
	document.getElementById('waterF13').value = '';
	document.getElementById('teaF13').value = '';
	document.getElementById('napkinF13').value = '';


	localStorage.removeItem("bottleTigerBacF13");
	localStorage.removeItem("bottleTigerNauF13");
	localStorage.removeItem("tigerNauF13");
	localStorage.removeItem("tigerBacF13");
	localStorage.removeItem("heinekenF13");
	localStorage.removeItem("sevenUpF13");
	localStorage.removeItem("cokeF13");
	localStorage.removeItem("pepsiF13");
	localStorage.removeItem("stingF13");
	localStorage.removeItem("waterF13");
	localStorage.removeItem("teaF13");
	localStorage.removeItem("napkinF13");

}

const inputsF13 = document.querySelectorAll('input[type="number"]');
inputsF13.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnF13 = document.getElementById("addBtnF13");
const newDrinkFormF13 = document.getElementById("newDrinkFormF13");

addBtnF13.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});

function confirmCalculateF14() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateF14()
	}
}
function calculateF14() {
	const bottleTigerBacF14 = document.getElementById("bottleTigerBacF14").value;
	const bottleTigerNauF14 = document.getElementById("bottleTigerNauF14").value;
	const tigerNauF14 = document.getElementById("tigerNauF14").value;
	const tigerBacF14 = document.getElementById("tigerBacF14").value;
	const heinekenF14 = document.getElementById("heinekenF14").value;
	const sevenUpF14 = document.getElementById("sevenUpF14").value;
	const cokeF14 = document.getElementById("cokeF14").value;
	const pepsiF14 = document.getElementById("pepsiF14").value;
	const stingF14 = document.getElementById("stingF14").value;
	const waterNatureF14 = document.getElementById("waterF14").value;
	const teaF14 = document.getElementById("teaF14").value;
	const napkinF14 = document.getElementById("napkinF14").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacF14 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauF14 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauF14 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacF14 },
		{ name: "Bia Heineken", quantity: heinekenF14 },
		{ name: "Nước 7up", quantity: sevenUpF14 },
		{ name: "Nước CocaCola", quantity: cokeF14 },
		{ name: "Nước pepsi", quantity: pepsiF14 },
		{ name: "Nước Sting", quantity: stingF14 },
		{ name: "Nước suối", quantity: waterNatureF14 },
		{ name: "Trà tắc", quantity: teaF14 },
		{ name: "Khăn giấy", quantity: napkinF14 },
	];

	const selectedProductsF14 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsF14.length; i++) {
		const product = selectedProductsF14[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderF14").innerHTML = bill;


	localStorage.setItem("tigerNauF14", tigerNauF14);
	localStorage.setItem("bottleTigerBacF14", bottleTigerBacF14);
	localStorage.setItem("bottleTigerNauF14", bottleTigerNauF14);
	localStorage.setItem("tigerBacF14", tigerBacF14);
	localStorage.setItem("heinekenF14", heinekenF14);
	localStorage.setItem("sevenUpF14", sevenUpF14);
	localStorage.setItem("cokeF14", cokeF14);
	localStorage.setItem("pepsiF14", pepsiF14)
	localStorage.setItem("stingF14", stingF14);
	localStorage.setItem("waterF14", waterNatureF14);
	localStorage.setItem("teaF14", teaF14);
	localStorage.setItem("napkinF14", napkinF14);

	localStorage.removeItem("bottleTigerBacF14");
	localStorage.removeItem("bottleTigerNauF14");
	localStorage.removeItem("tigerNauF14");
	localStorage.removeItem("tigerBacF14");
	localStorage.removeItem("heinekenF14");
	localStorage.removeItem("sevenUpF14");
	localStorage.removeItem("cokeF14");
	localStorage.removeItem("pepsiF14");
	localStorage.removeItem("stingF14");
	localStorage.removeItem("waterF14");
	localStorage.removeItem("teaF14");
	localStorage.removeItem("napkinF14");

	const totalF14 = (bottleTigerBacF14 * 26000) + (bottleTigerNauF14 * 25000) + (tigerNauF14 * 24000) + (tigerBacF14 * 25000) + (heinekenF14 * 26000) + (sevenUpF14 * 16000) + (cokeF14 * 16000) + (pepsiF14 * 16000) + (waterNatureF14 * 12000) + (stingF14 * 16000) + (teaF14 * 10000) + (napkinF14 * 3000);

	const historyF14 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyF14.push({ time: currentTime, totalF14: totalF14 });
	localStorage.setItem('totalHistory', JSON.stringify(historyF14));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalF14").innerHTML = "Tổng tiền: " + totalF14 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsF14 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsF14.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonF14 = document.getElementById("toggleDrinksF14");
const drinkElementsF14 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonF14.addEventListener("click", () => {
	drinkElementsF14.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonF14.classList.toggle("hidden");
	toggleDrinksButtonF14.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksF14 = localStorage.getItem("showDrinks");

if (showDrinksF14 === "1") {
	drinkElementsF14.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonF14.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonF14.classList.add("hidden");
} else {
	toggleDrinksButtonF14.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryF14() {
	const historyF14 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyF14.map((item, index) => `Lần ${index + 1}: ${item.totalF14} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyF14").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryF14()">Xoá lịch sử</button>';
}
function clearHistoryF14() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyF14").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyF14").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetF14() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllF14();
	}
}
function resetAllF14() {
	let inputs = {
		'bottleTigerBacF14': document.getElementById('bottleTigerBacF14').value,
		'bottleTigerNauF14': document.getElementById('bottleTigerNauF14').value,
		'tigerNauF14': document.getElementById('tigerNauF14').value,
		'tigerBacF14': document.getElementById('tigerBacF14').value,
		'heinekenF14': document.getElementById('heinekenF14').value,
		'sevenUpF14': document.getElementById('sevenUpF14').value,
		'cokeF14': document.getElementById('cokeF14').value,
		'pepsiF14': document.getElementById('pepsiF14').value,
		'stingF14': document.getElementById('stingF14').value,
		'waterNatureF14': document.getElementById('waterF14').value,
		'napkinF14': document.getElementById('napkinF14').value,
		'teaF14': document.getElementById('teaF14').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacF14').value = savedInputs.bottleTigerBacF14;
		document.getElementById('bottleTigerNauF14').value = savedInputs.bottleTigerNauF14;
		document.getElementById('tigerNauF14').value = savedInputs.tigerNauF14;
		document.getElementById('tigerBacF14').value = savedInputs.tigerBacF14;
		document.getElementById('heinekenF14').value = savedInputs.heinekenF14;
		document.getElementById('sevenUpF14').value = savedInputs.sevenUpF14;
		document.getElementById('cokeF14').value = savedInputs.cokeF14;
		document.getElementById('pepsiF14').value = savedInputs.pepsiF14;
		document.getElementById('stingF14').value = savedInputs.stingF14;
		document.getElementById('waterF14').value = savedInputs.waterF14;
		document.getElementById('teaF14').value = savedInputs.teaF14;
		document.getElementById('napkinF14').value = savedInputs.napkinF14;
	}

	document.getElementById('bottleTigerBacF14').value = '';
	document.getElementById('bottleTigerNauF14').value = '';
	document.getElementById('tigerNauF14').value = '';
	document.getElementById('tigerBacF14').value = '';
	document.getElementById('heinekenF14').value = '';
	document.getElementById('sevenUpF14').value = '';
	document.getElementById('cokeF14').value = '';
	document.getElementById('pepsiF14').value = '';
	document.getElementById('stingF14').value = '';
	document.getElementById('waterF14').value = '';
	document.getElementById('teaF14').value = '';
	document.getElementById('napkinF14').value = '';


	localStorage.removeItem("bottleTigerBacF14");
	localStorage.removeItem("bottleTigerNauF14");
	localStorage.removeItem("tigerNauF14");
	localStorage.removeItem("tigerBacF14");
	localStorage.removeItem("heinekenF14");
	localStorage.removeItem("sevenUpF14");
	localStorage.removeItem("cokeF14");
	localStorage.removeItem("pepsiF14");
	localStorage.removeItem("stingF14");
	localStorage.removeItem("waterF14");
	localStorage.removeItem("teaF14");
	localStorage.removeItem("napkinF14");

}

const inputsF14 = document.querySelectorAll('input[type="number"]');
inputsF14.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnF14 = document.getElementById("addBtnF14");
const newDrinkFormF14 = document.getElementById("newDrinkFormF14");

addBtnF14.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});


//G11

function confirmCalculateG11() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateG11()
	}
}
function calculateG11() {
	const bottleTigerBacG11 = document.getElementById("bottleTigerBacG11").value;
	const bottleTigerNauG11 = document.getElementById("bottleTigerNauG11").value;
	const tigerNauG11 = document.getElementById("tigerNauG11").value;
	const tigerBacG11 = document.getElementById("tigerBacG11").value;
	const heinekenG11 = document.getElementById("heinekenG11").value;
	const sevenUpG11 = document.getElementById("sevenUpG11").value;
	const cokeG11 = document.getElementById("cokeG11").value;
	const pepsiG11 = document.getElementById("pepsiG11").value;
	const stingG11 = document.getElementById("stingG11").value;
	const waterNatureG11 = document.getElementById("waterG11").value;
	const teaG11 = document.getElementById("teaG11").value;
	const napkinG11 = document.getElementById("napkinG11").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacG11 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauG11 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauG11 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacG11 },
		{ name: "Bia Heineken", quantity: heinekenG11 },
		{ name: "Nước 7up", quantity: sevenUpG11 },
		{ name: "Nước CocaCola", quantity: cokeG11 },
		{ name: "Nước pepsi", quantity: pepsiG11 },
		{ name: "Nước Sting", quantity: stingG11 },
		{ name: "Nước suối", quantity: waterNatureG11 },
		{ name: "Trà tắc", quantity: teaG11 },
		{ name: "Khăn giấy", quantity: napkinG11 },
	];

	const selectedProductsG11 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsG11.length; i++) {
		const product = selectedProductsG11[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderG11").innerHTML = bill;


	localStorage.setItem("tigerNauG11", tigerNauG11);
	localStorage.setItem("bottleTigerBacG11", bottleTigerBacG11);
	localStorage.setItem("bottleTigerNauG11", bottleTigerNauG11);
	localStorage.setItem("tigerBacG11", tigerBacG11);
	localStorage.setItem("heinekenG11", heinekenG11);
	localStorage.setItem("sevenUpG11", sevenUpG11);
	localStorage.setItem("cokeG11", cokeG11);
	localStorage.setItem("pepsiG11", pepsiG11)
	localStorage.setItem("stingG11", stingG11);
	localStorage.setItem("waterG11", waterNatureG11);
	localStorage.setItem("teaG11", teaG11);
	localStorage.setItem("napkinG11", napkinG11);

	localStorage.removeItem("bottleTigerBacG11");
	localStorage.removeItem("bottleTigerNauG11");
	localStorage.removeItem("tigerNauG11");
	localStorage.removeItem("tigerBacG11");
	localStorage.removeItem("heinekenG11");
	localStorage.removeItem("sevenUpG11");
	localStorage.removeItem("cokeG11");
	localStorage.removeItem("pepsiG11");
	localStorage.removeItem("stingG11");
	localStorage.removeItem("waterG11");
	localStorage.removeItem("teaG11");
	localStorage.removeItem("napkinG11");

	const totalG11 = (bottleTigerBacG11 * 26000) + (bottleTigerNauG11 * 25000) + (tigerNauG11 * 24000) + (tigerBacG11 * 25000) + (heinekenG11 * 26000) + (sevenUpG11 * 16000) + (cokeG11 * 16000) + (pepsiG11 * 16000) + (waterNatureG11 * 12000) + (stingG11 * 16000) + (teaG11 * 10000) + (napkinG11 * 3000);

	const historyG11 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyG11.push({ time: currentTime, totalG11: totalG11 });
	localStorage.setItem('totalHistory', JSON.stringify(historyG11));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalG11").innerHTML = "Tổng tiền: " + totalG11 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsG11 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsG11.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonG11 = document.getElementById("toggleDrinksG11");
const drinkElementsG11 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonG11.addEventListener("click", () => {
	drinkElementsG11.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonG11.classList.toggle("hidden");
	toggleDrinksButtonG11.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksG11 = localStorage.getItem("showDrinks");

if (showDrinksG11 === "1") {
	drinkElementsG11.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonG11.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonG11.classList.add("hidden");
} else {
	toggleDrinksButtonG11.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryG11() {
	const historyG11 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyG11.map((item, index) => `Lần ${index + 1}: ${item.totalG11} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyG11").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryG11()">Xoá lịch sử</button>';
}
function clearHistoryG11() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyG11").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyG11").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetG11() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllG11();
	}
}
function resetAllG11() {
	let inputs = {
		'bottleTigerBacG11': document.getElementById('bottleTigerBacG11').value,
		'bottleTigerNauG11': document.getElementById('bottleTigerNauG11').value,
		'tigerNauG11': document.getElementById('tigerNauG11').value,
		'tigerBacG11': document.getElementById('tigerBacG11').value,
		'heinekenG11': document.getElementById('heinekenG11').value,
		'sevenUpG11': document.getElementById('sevenUpG11').value,
		'cokeG11': document.getElementById('cokeG11').value,
		'pepsiG11': document.getElementById('pepsiG11').value,
		'stingG11': document.getElementById('stingG11').value,
		'waterNatureG11': document.getElementById('waterG11').value,
		'napkinG11': document.getElementById('napkinG11').value,
		'teaG11': document.getElementById('teaG11').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacG11').value = savedInputs.bottleTigerBacG11;
		document.getElementById('bottleTigerNauG11').value = savedInputs.bottleTigerNauG11;
		document.getElementById('tigerNauG11').value = savedInputs.tigerNauG11;
		document.getElementById('tigerBacG11').value = savedInputs.tigerBacG11;
		document.getElementById('heinekenG11').value = savedInputs.heinekenG11;
		document.getElementById('sevenUpG11').value = savedInputs.sevenUpG11;
		document.getElementById('cokeG11').value = savedInputs.cokeG11;
		document.getElementById('pepsiG11').value = savedInputs.pepsiG11;
		document.getElementById('stingG11').value = savedInputs.stingG11;
		document.getElementById('waterG11').value = savedInputs.waterG11;
		document.getElementById('teaG11').value = savedInputs.teaG11;
		document.getElementById('napkinG11').value = savedInputs.napkinG11;
	}

	document.getElementById('bottleTigerBacG11').value = '';
	document.getElementById('bottleTigerNauG11').value = '';
	document.getElementById('tigerNauG11').value = '';
	document.getElementById('tigerBacG11').value = '';
	document.getElementById('heinekenG11').value = '';
	document.getElementById('sevenUpG11').value = '';
	document.getElementById('cokeG11').value = '';
	document.getElementById('pepsiG11').value = '';
	document.getElementById('stingG11').value = '';
	document.getElementById('waterG11').value = '';
	document.getElementById('teaG11').value = '';
	document.getElementById('napkinG11').value = '';


	localStorage.removeItem("bottleTigerBacG11");
	localStorage.removeItem("bottleTigerNauG11");
	localStorage.removeItem("tigerNauG11");
	localStorage.removeItem("tigerBacG11");
	localStorage.removeItem("heinekenG11");
	localStorage.removeItem("sevenUpG11");
	localStorage.removeItem("cokeG11");
	localStorage.removeItem("pepsiG11");
	localStorage.removeItem("stingG11");
	localStorage.removeItem("waterG11");
	localStorage.removeItem("teaG11");
	localStorage.removeItem("napkinG11");

}

const inputsG11 = document.querySelectorAll('input[type="number"]');
inputsG11.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnG11 = document.getElementById("addBtnG11");
const newDrinkFormG11 = document.getElementById("newDrinkFormG11");

addBtnG11.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});

//G1/2

function confirmCalculateG12() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateG12()
	}
}
function calculateG12() {
	const bottleTigerBacG12 = document.getElementById("bottleTigerBacG12").value;
	const bottleTigerNauG12 = document.getElementById("bottleTigerNauG12").value;
	const tigerNauG12 = document.getElementById("tigerNauG12").value;
	const tigerBacG12 = document.getElementById("tigerBacG12").value;
	const heinekenG12 = document.getElementById("heinekenG12").value;
	const sevenUpG12 = document.getElementById("sevenUpG12").value;
	const cokeG12 = document.getElementById("cokeG12").value;
	const pepsiG12 = document.getElementById("pepsiG12").value;
	const stingG12 = document.getElementById("stingG12").value;
	const waterNatureG12 = document.getElementById("waterG12").value;
	const teaG12 = document.getElementById("teaG12").value;
	const napkinG12 = document.getElementById("napkinG12").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacG12 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauG12 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauG12 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacG12 },
		{ name: "Bia Heineken", quantity: heinekenG12 },
		{ name: "Nước 7up", quantity: sevenUpG12 },
		{ name: "Nước CocaCola", quantity: cokeG12 },
		{ name: "Nước pepsi", quantity: pepsiG12 },
		{ name: "Nước Sting", quantity: stingG12 },
		{ name: "Nước suối", quantity: waterNatureG12 },
		{ name: "Trà tắc", quantity: teaG12 },
		{ name: "Khăn giấy", quantity: napkinG12 },
	];

	const selectedProductsG12 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsG12.length; i++) {
		const product = selectedProductsG12[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderG12").innerHTML = bill;


	localStorage.setItem("tigerNauG12", tigerNauG12);
	localStorage.setItem("bottleTigerBacG12", bottleTigerBacG12);
	localStorage.setItem("bottleTigerNauG12", bottleTigerNauG12);
	localStorage.setItem("tigerBacG12", tigerBacG12);
	localStorage.setItem("heinekenG12", heinekenG12);
	localStorage.setItem("sevenUpG12", sevenUpG12);
	localStorage.setItem("cokeG12", cokeG12);
	localStorage.setItem("pepsiG12", pepsiG12)
	localStorage.setItem("stingG12", stingG12);
	localStorage.setItem("waterG12", waterNatureG12);
	localStorage.setItem("teaG12", teaG12);
	localStorage.setItem("napkinG12", napkinG12);

	localStorage.removeItem("bottleTigerBacG12");
	localStorage.removeItem("bottleTigerNauG12");
	localStorage.removeItem("tigerNauG12");
	localStorage.removeItem("tigerBacG12");
	localStorage.removeItem("heinekenG12");
	localStorage.removeItem("sevenUpG12");
	localStorage.removeItem("cokeG12");
	localStorage.removeItem("pepsiG12");
	localStorage.removeItem("stingG12");
	localStorage.removeItem("waterG12");
	localStorage.removeItem("teaG12");
	localStorage.removeItem("napkinG12");

	const totalG12 = (bottleTigerBacG12 * 26000) + (bottleTigerNauG12 * 25000) + (tigerNauG12 * 24000) + (tigerBacG12 * 25000) + (heinekenG12 * 26000) + (sevenUpG12 * 16000) + (cokeG12 * 16000) + (pepsiG12 * 16000) + (waterNatureG12 * 12000) + (stingG12 * 16000) + (teaG12 * 10000) + (napkinG12 * 3000);

	const historyG12 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyG12.push({ time: currentTime, totalG12: totalG12 });
	localStorage.setItem('totalHistory', JSON.stringify(historyG12));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalG12").innerHTML = "Tổng tiền: " + totalG12 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsG12 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsG12.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonG12 = document.getElementById("toggleDrinksG12");
const drinkElementsG12 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonG12.addEventListener("click", () => {
	drinkElementsG12.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonG12.classList.toggle("hidden");
	toggleDrinksButtonG12.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksG12 = localStorage.getItem("showDrinks");

if (showDrinksG12 === "1") {
	drinkElementsG12.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonG12.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonG12.classList.add("hidden");
} else {
	toggleDrinksButtonG12.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryG12() {
	const historyG12 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyG12.map((item, index) => `Lần ${index + 1}: ${item.totalG12} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyG12").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryG12()">Xoá lịch sử</button>';
}
function clearHistoryG12() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyG12").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyG12").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetG12() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllG12();
	}
}
function resetAllG12() {
	let inputs = {
		'bottleTigerBacG12': document.getElementById('bottleTigerBacG12').value,
		'bottleTigerNauG12': document.getElementById('bottleTigerNauG12').value,
		'tigerNauG12': document.getElementById('tigerNauG12').value,
		'tigerBacG12': document.getElementById('tigerBacG12').value,
		'heinekenG12': document.getElementById('heinekenG12').value,
		'sevenUpG12': document.getElementById('sevenUpG12').value,
		'cokeG12': document.getElementById('cokeG12').value,
		'pepsiG12': document.getElementById('pepsiG12').value,
		'stingG12': document.getElementById('stingG12').value,
		'waterNatureG12': document.getElementById('waterG12').value,
		'napkinG12': document.getElementById('napkinG12').value,
		'teaG12': document.getElementById('teaG12').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacG12').value = savedInputs.bottleTigerBacG12;
		document.getElementById('bottleTigerNauG12').value = savedInputs.bottleTigerNauG12;
		document.getElementById('tigerNauG12').value = savedInputs.tigerNauG12;
		document.getElementById('tigerBacG12').value = savedInputs.tigerBacG12;
		document.getElementById('heinekenG12').value = savedInputs.heinekenG12;
		document.getElementById('sevenUpG12').value = savedInputs.sevenUpG12;
		document.getElementById('cokeG12').value = savedInputs.cokeG12;
		document.getElementById('pepsiG12').value = savedInputs.pepsiG12;
		document.getElementById('stingG12').value = savedInputs.stingG12;
		document.getElementById('waterG12').value = savedInputs.waterG12;
		document.getElementById('teaG12').value = savedInputs.teaG12;
		document.getElementById('napkinG12').value = savedInputs.napkinG12;
	}

	document.getElementById('bottleTigerBacG12').value = '';
	document.getElementById('bottleTigerNauG12').value = '';
	document.getElementById('tigerNauG12').value = '';
	document.getElementById('tigerBacG12').value = '';
	document.getElementById('heinekenG12').value = '';
	document.getElementById('sevenUpG12').value = '';
	document.getElementById('cokeG12').value = '';
	document.getElementById('pepsiG12').value = '';
	document.getElementById('stingG12').value = '';
	document.getElementById('waterG12').value = '';
	document.getElementById('teaG12').value = '';
	document.getElementById('napkinG12').value = '';


	localStorage.removeItem("bottleTigerBacG12");
	localStorage.removeItem("bottleTigerNauG12");
	localStorage.removeItem("tigerNauG12");
	localStorage.removeItem("tigerBacG12");
	localStorage.removeItem("heinekenG12");
	localStorage.removeItem("sevenUpG12");
	localStorage.removeItem("cokeG12");
	localStorage.removeItem("pepsiG12");
	localStorage.removeItem("stingG12");
	localStorage.removeItem("waterG12");
	localStorage.removeItem("teaG12");
	localStorage.removeItem("napkinG12");

}

const inputsG12 = document.querySelectorAll('input[type="number"]');
inputsG12.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnG12 = document.getElementById("addBtnG12");
const newDrinkFormG12 = document.getElementById("newDrinkFormG12");

addBtnG12.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});

//G1/3

function confirmCalculateG31() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateG31()
	}
}
function calculateG31() {
	const bottleTigerBacG31 = document.getElementById("bottleTigerBacG31").value;
	const bottleTigerNauG31 = document.getElementById("bottleTigerNauG31").value;
	const tigerNauG31 = document.getElementById("tigerNauG31").value;
	const tigerBacG31 = document.getElementById("tigerBacG31").value;
	const heinekenG31 = document.getElementById("heinekenG31").value;
	const sevenUpG31 = document.getElementById("sevenUpG31").value;
	const cokeG31 = document.getElementById("cokeG31").value;
	const pepsiG31 = document.getElementById("pepsiG31").value;
	const stingG31 = document.getElementById("stingG31").value;
	const waterNatureG31 = document.getElementById("waterG31").value;
	const teaG31 = document.getElementById("teaG31").value;
	const napkinG31 = document.getElementById("napkinG31").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacG31 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauG31 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauG31 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacG31 },
		{ name: "Bia Heineken", quantity: heinekenG31 },
		{ name: "Nước 7up", quantity: sevenUpG31 },
		{ name: "Nước CocaCola", quantity: cokeG31 },
		{ name: "Nước pepsi", quantity: pepsiG31 },
		{ name: "Nước Sting", quantity: stingG31 },
		{ name: "Nước suối", quantity: waterNatureG31 },
		{ name: "Trà tắc", quantity: teaG31 },
		{ name: "Khăn giấy", quantity: napkinG31 },
	];

	const selectedProductsG31 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsG31.length; i++) {
		const product = selectedProductsG31[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderG31").innerHTML = bill;


	localStorage.setItem("tigerNauG31", tigerNauG31);
	localStorage.setItem("bottleTigerBacG31", bottleTigerBacG31);
	localStorage.setItem("bottleTigerNauG31", bottleTigerNauG31);
	localStorage.setItem("tigerBacG31", tigerBacG31);
	localStorage.setItem("heinekenG31", heinekenG31);
	localStorage.setItem("sevenUpG31", sevenUpG31);
	localStorage.setItem("cokeG31", cokeG31);
	localStorage.setItem("pepsiG31", pepsiG31)
	localStorage.setItem("stingG31", stingG31);
	localStorage.setItem("waterG31", waterNatureG31);
	localStorage.setItem("teaG31", teaG31);
	localStorage.setItem("napkinG31", napkinG31);

	localStorage.removeItem("bottleTigerBacG31");
	localStorage.removeItem("bottleTigerNauG31");
	localStorage.removeItem("tigerNauG31");
	localStorage.removeItem("tigerBacG31");
	localStorage.removeItem("heinekenG31");
	localStorage.removeItem("sevenUpG31");
	localStorage.removeItem("cokeG31");
	localStorage.removeItem("pepsiG31");
	localStorage.removeItem("stingG31");
	localStorage.removeItem("waterG31");
	localStorage.removeItem("teaG31");
	localStorage.removeItem("napkinG31");

	const totalG31 = (bottleTigerBacG31 * 26000) + (bottleTigerNauG31 * 25000) + (tigerNauG31 * 24000) + (tigerBacG31 * 25000) + (heinekenG31 * 26000) + (sevenUpG31 * 16000) + (cokeG31 * 16000) + (pepsiG31 * 16000) + (waterNatureG31 * 12000) + (stingG31 * 16000) + (teaG31 * 10000) + (napkinG31 * 3000);

	const historyG31 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyG31.push({ time: currentTime, totalG31: totalG31 });
	localStorage.setItem('totalHistory', JSON.stringify(historyG31));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalG31").innerHTML = "Tổng tiền: " + totalG31 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsG31 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsG31.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonG31 = document.getElementById("toggleDrinksG31");
const drinkElementsG31 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonG31.addEventListener("click", () => {
	drinkElementsG31.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonG31.classList.toggle("hidden");
	toggleDrinksButtonG31.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksG31 = localStorage.getItem("showDrinks");

if (showDrinksG31 === "1") {
	drinkElementsG31.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonG31.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonG31.classList.add("hidden");
} else {
	toggleDrinksButtonG31.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryG31() {
	const historyG31 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyG31.map((item, index) => `Lần ${index + 1}: ${item.totalG31} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyG31").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryG31()">Xoá lịch sử</button>';
}
function clearHistoryG31() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyG31").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyG31").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetG31() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllG31();
	}
}
function resetAllG31() {
	let inputs = {
		'bottleTigerBacG31': document.getElementById('bottleTigerBacG31').value,
		'bottleTigerNauG31': document.getElementById('bottleTigerNauG31').value,
		'tigerNauG31': document.getElementById('tigerNauG31').value,
		'tigerBacG31': document.getElementById('tigerBacG31').value,
		'heinekenG31': document.getElementById('heinekenG31').value,
		'sevenUpG31': document.getElementById('sevenUpG31').value,
		'cokeG31': document.getElementById('cokeG31').value,
		'pepsiG31': document.getElementById('pepsiG31').value,
		'stingG31': document.getElementById('stingG31').value,
		'waterNatureG31': document.getElementById('waterG31').value,
		'napkinG31': document.getElementById('napkinG31').value,
		'teaG31': document.getElementById('teaG31').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacG31').value = savedInputs.bottleTigerBacG31;
		document.getElementById('bottleTigerNauG31').value = savedInputs.bottleTigerNauG31;
		document.getElementById('tigerNauG31').value = savedInputs.tigerNauG31;
		document.getElementById('tigerBacG31').value = savedInputs.tigerBacG31;
		document.getElementById('heinekenG31').value = savedInputs.heinekenG31;
		document.getElementById('sevenUpG31').value = savedInputs.sevenUpG31;
		document.getElementById('cokeG31').value = savedInputs.cokeG31;
		document.getElementById('pepsiG31').value = savedInputs.pepsiG31;
		document.getElementById('stingG31').value = savedInputs.stingG31;
		document.getElementById('waterG31').value = savedInputs.waterG31;
		document.getElementById('teaG31').value = savedInputs.teaG31;
		document.getElementById('napkinG31').value = savedInputs.napkinG31;
	}

	document.getElementById('bottleTigerBacG31').value = '';
	document.getElementById('bottleTigerNauG31').value = '';
	document.getElementById('tigerNauG31').value = '';
	document.getElementById('tigerBacG31').value = '';
	document.getElementById('heinekenG31').value = '';
	document.getElementById('sevenUpG31').value = '';
	document.getElementById('cokeG31').value = '';
	document.getElementById('pepsiG31').value = '';
	document.getElementById('stingG31').value = '';
	document.getElementById('waterG31').value = '';
	document.getElementById('teaG31').value = '';
	document.getElementById('napkinG31').value = '';


	localStorage.removeItem("bottleTigerBacG31");
	localStorage.removeItem("bottleTigerNauG31");
	localStorage.removeItem("tigerNauG31");
	localStorage.removeItem("tigerBacG31");
	localStorage.removeItem("heinekenG31");
	localStorage.removeItem("sevenUpG31");
	localStorage.removeItem("cokeG31");
	localStorage.removeItem("pepsiG31");
	localStorage.removeItem("stingG31");
	localStorage.removeItem("waterG31");
	localStorage.removeItem("teaG31");
	localStorage.removeItem("napkinG31");

}

const inputsG31 = document.querySelectorAll('input[type="number"]');
inputsG31.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnG31 = document.getElementById("addBtnG31");
const newDrinkFormG31 = document.getElementById("newDrinkFormG31");

addBtnG31.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});


//G2/3

function confirmCalculateG21() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateG21()
	}
}
function calculateG21() {
	const bottleTigerBacG21 = document.getElementById("bottleTigerBacG21").value;
	const bottleTigerNauG21 = document.getElementById("bottleTigerNauG21").value;
	const tigerNauG21 = document.getElementById("tigerNauG21").value;
	const tigerBacG21 = document.getElementById("tigerBacG21").value;
	const heinekenG21 = document.getElementById("heinekenG21").value;
	const sevenUpG21 = document.getElementById("sevenUpG21").value;
	const cokeG21 = document.getElementById("cokeG21").value;
	const pepsiG21 = document.getElementById("pepsiG21").value;
	const stingG21 = document.getElementById("stingG21").value;
	const waterNatureG21 = document.getElementById("waterG21").value;
	const teaG21 = document.getElementById("teaG21").value;
	const napkinG21 = document.getElementById("napkinG21").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacG21 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauG21 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauG21 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacG21 },
		{ name: "Bia Heineken", quantity: heinekenG21 },
		{ name: "Nước 7up", quantity: sevenUpG21 },
		{ name: "Nước CocaCola", quantity: cokeG21 },
		{ name: "Nước pepsi", quantity: pepsiG21 },
		{ name: "Nước Sting", quantity: stingG21 },
		{ name: "Nước suối", quantity: waterNatureG21 },
		{ name: "Trà tắc", quantity: teaG21 },
		{ name: "Khăn giấy", quantity: napkinG21 },
	];

	const selectedProductsG21 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsG21.length; i++) {
		const product = selectedProductsG21[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderG21").innerHTML = bill;


	localStorage.setItem("tigerNauG21", tigerNauG21);
	localStorage.setItem("bottleTigerBacG21", bottleTigerBacG21);
	localStorage.setItem("bottleTigerNauG21", bottleTigerNauG21);
	localStorage.setItem("tigerBacG21", tigerBacG21);
	localStorage.setItem("heinekenG21", heinekenG21);
	localStorage.setItem("sevenUpG21", sevenUpG21);
	localStorage.setItem("cokeG21", cokeG21);
	localStorage.setItem("pepsiG21", pepsiG21)
	localStorage.setItem("stingG21", stingG21);
	localStorage.setItem("waterG21", waterNatureG21);
	localStorage.setItem("teaG21", teaG21);
	localStorage.setItem("napkinG21", napkinG21);

	localStorage.removeItem("bottleTigerBacG21");
	localStorage.removeItem("bottleTigerNauG21");
	localStorage.removeItem("tigerNauG21");
	localStorage.removeItem("tigerBacG21");
	localStorage.removeItem("heinekenG21");
	localStorage.removeItem("sevenUpG21");
	localStorage.removeItem("cokeG21");
	localStorage.removeItem("pepsiG21");
	localStorage.removeItem("stingG21");
	localStorage.removeItem("waterG21");
	localStorage.removeItem("teaG21");
	localStorage.removeItem("napkinG21");

	const totalG21 = (bottleTigerBacG21 * 26000) + (bottleTigerNauG21 * 25000) + (tigerNauG21 * 24000) + (tigerBacG21 * 25000) + (heinekenG21 * 26000) + (sevenUpG21 * 16000) + (cokeG21 * 16000) + (pepsiG21 * 16000) + (waterNatureG21 * 12000) + (stingG21 * 16000) + (teaG21 * 10000) + (napkinG21 * 3000);

	const historyG21 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyG21.push({ time: currentTime, totalG21: totalG21 });
	localStorage.setItem('totalHistory', JSON.stringify(historyG21));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalG21").innerHTML = "Tổng tiền: " + totalG21 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsG21 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsG21.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonG21 = document.getElementById("toggleDrinksG21");
const drinkElementsG21 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonG21.addEventListener("click", () => {
	drinkElementsG21.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonG21.classList.toggle("hidden");
	toggleDrinksButtonG21.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksG21 = localStorage.getItem("showDrinks");

if (showDrinksG21 === "1") {
	drinkElementsG21.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonG21.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonG21.classList.add("hidden");
} else {
	toggleDrinksButtonG21.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryG21() {
	const historyG21 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyG21.map((item, index) => `Lần ${index + 1}: ${item.totalG21} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyG21").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryG21()">Xoá lịch sử</button>';
}
function clearHistoryG21() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyG21").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyG21").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetG21() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllG21();
	}
}
function resetAllG21() {
	let inputs = {
		'bottleTigerBacG21': document.getElementById('bottleTigerBacG21').value,
		'bottleTigerNauG21': document.getElementById('bottleTigerNauG21').value,
		'tigerNauG21': document.getElementById('tigerNauG21').value,
		'tigerBacG21': document.getElementById('tigerBacG21').value,
		'heinekenG21': document.getElementById('heinekenG21').value,
		'sevenUpG21': document.getElementById('sevenUpG21').value,
		'cokeG21': document.getElementById('cokeG21').value,
		'pepsiG21': document.getElementById('pepsiG21').value,
		'stingG21': document.getElementById('stingG21').value,
		'waterNatureG21': document.getElementById('waterG21').value,
		'napkinG21': document.getElementById('napkinG21').value,
		'teaG21': document.getElementById('teaG21').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacG21').value = savedInputs.bottleTigerBacG21;
		document.getElementById('bottleTigerNauG21').value = savedInputs.bottleTigerNauG21;
		document.getElementById('tigerNauG21').value = savedInputs.tigerNauG21;
		document.getElementById('tigerBacG21').value = savedInputs.tigerBacG21;
		document.getElementById('heinekenG21').value = savedInputs.heinekenG21;
		document.getElementById('sevenUpG21').value = savedInputs.sevenUpG21;
		document.getElementById('cokeG21').value = savedInputs.cokeG21;
		document.getElementById('pepsiG21').value = savedInputs.pepsiG21;
		document.getElementById('stingG21').value = savedInputs.stingG21;
		document.getElementById('waterG21').value = savedInputs.waterG21;
		document.getElementById('teaG21').value = savedInputs.teaG21;
		document.getElementById('napkinG21').value = savedInputs.napkinG21;
	}

	document.getElementById('bottleTigerBacG21').value = '';
	document.getElementById('bottleTigerNauG21').value = '';
	document.getElementById('tigerNauG21').value = '';
	document.getElementById('tigerBacG21').value = '';
	document.getElementById('heinekenG21').value = '';
	document.getElementById('sevenUpG21').value = '';
	document.getElementById('cokeG21').value = '';
	document.getElementById('pepsiG21').value = '';
	document.getElementById('stingG21').value = '';
	document.getElementById('waterG21').value = '';
	document.getElementById('teaG21').value = '';
	document.getElementById('napkinG21').value = '';


	localStorage.removeItem("bottleTigerBacG21");
	localStorage.removeItem("bottleTigerNauG21");
	localStorage.removeItem("tigerNauG21");
	localStorage.removeItem("tigerBacG21");
	localStorage.removeItem("heinekenG21");
	localStorage.removeItem("sevenUpG21");
	localStorage.removeItem("cokeG21");
	localStorage.removeItem("pepsiG21");
	localStorage.removeItem("stingG21");
	localStorage.removeItem("waterG21");
	localStorage.removeItem("teaG21");
	localStorage.removeItem("napkinG21");

}

const inputsG21 = document.querySelectorAll('input[type="number"]');
inputsG21.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnG21 = document.getElementById("addBtnG21");
const newDrinkFormG21 = document.getElementById("newDrinkFormG21");

addBtnG21.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});


//G2/2

function confirmCalculateG23() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateG23()
	}
}
function calculateG23() {
	const bottleTigerBacG23 = document.getElementById("bottleTigerBacG23").value;
	const bottleTigerNauG23 = document.getElementById("bottleTigerNauG23").value;
	const tigerNauG23 = document.getElementById("tigerNauG23").value;
	const tigerBacG23 = document.getElementById("tigerBacG23").value;
	const heinekenG23 = document.getElementById("heinekenG23").value;
	const sevenUpG23 = document.getElementById("sevenUpG23").value;
	const cokeG23 = document.getElementById("cokeG23").value;
	const pepsiG23 = document.getElementById("pepsiG23").value;
	const stingG23 = document.getElementById("stingG23").value;
	const waterNatureG23 = document.getElementById("waterG23").value;
	const teaG23 = document.getElementById("teaG23").value;
	const napkinG23 = document.getElementById("napkinG23").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacG23 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauG23 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauG23 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacG23 },
		{ name: "Bia Heineken", quantity: heinekenG23 },
		{ name: "Nước 7up", quantity: sevenUpG23 },
		{ name: "Nước CocaCola", quantity: cokeG23 },
		{ name: "Nước pepsi", quantity: pepsiG23 },
		{ name: "Nước Sting", quantity: stingG23 },
		{ name: "Nước suối", quantity: waterNatureG23 },
		{ name: "Trà tắc", quantity: teaG23 },
		{ name: "Khăn giấy", quantity: napkinG23 },
	];

	const selectedProductsG23 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsG23.length; i++) {
		const product = selectedProductsG23[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderG23").innerHTML = bill;


	localStorage.setItem("tigerNauG23", tigerNauG23);
	localStorage.setItem("bottleTigerBacG23", bottleTigerBacG23);
	localStorage.setItem("bottleTigerNauG23", bottleTigerNauG23);
	localStorage.setItem("tigerBacG23", tigerBacG23);
	localStorage.setItem("heinekenG23", heinekenG23);
	localStorage.setItem("sevenUpG23", sevenUpG23);
	localStorage.setItem("cokeG23", cokeG23);
	localStorage.setItem("pepsiG23", pepsiG23)
	localStorage.setItem("stingG23", stingG23);
	localStorage.setItem("waterG23", waterNatureG23);
	localStorage.setItem("teaG23", teaG23);
	localStorage.setItem("napkinG23", napkinG23);

	localStorage.removeItem("bottleTigerBacG23");
	localStorage.removeItem("bottleTigerNauG23");
	localStorage.removeItem("tigerNauG23");
	localStorage.removeItem("tigerBacG23");
	localStorage.removeItem("heinekenG23");
	localStorage.removeItem("sevenUpG23");
	localStorage.removeItem("cokeG23");
	localStorage.removeItem("pepsiG23");
	localStorage.removeItem("stingG23");
	localStorage.removeItem("waterG23");
	localStorage.removeItem("teaG23");
	localStorage.removeItem("napkinG23");

	const totalG23 = (bottleTigerBacG23 * 26000) + (bottleTigerNauG23 * 25000) + (tigerNauG23 * 24000) + (tigerBacG23 * 25000) + (heinekenG23 * 26000) + (sevenUpG23 * 16000) + (cokeG23 * 16000) + (pepsiG23 * 16000) + (waterNatureG23 * 12000) + (stingG23 * 16000) + (teaG23 * 10000) + (napkinG23 * 3000);

	const historyG23 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyG23.push({ time: currentTime, totalG23: totalG23 });
	localStorage.setItem('totalHistory', JSON.stringify(historyG23));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalG23").innerHTML = "Tổng tiền: " + totalG23 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsG23 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsG23.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonG23 = document.getElementById("toggleDrinksG23");
const drinkElementsG23 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonG23.addEventListener("click", () => {
	drinkElementsG23.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonG23.classList.toggle("hidden");
	toggleDrinksButtonG23.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksG23 = localStorage.getItem("showDrinks");

if (showDrinksG23 === "1") {
	drinkElementsG23.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonG23.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonG23.classList.add("hidden");
} else {
	toggleDrinksButtonG23.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryG23() {
	const historyG23 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyG23.map((item, index) => `Lần ${index + 1}: ${item.totalG23} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyG23").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryG23()">Xoá lịch sử</button>';
}
function clearHistoryG23() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyG23").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyG23").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetG23() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllG23();
	}
}
function resetAllG23() {
	let inputs = {
		'bottleTigerBacG23': document.getElementById('bottleTigerBacG23').value,
		'bottleTigerNauG23': document.getElementById('bottleTigerNauG23').value,
		'tigerNauG23': document.getElementById('tigerNauG23').value,
		'tigerBacG23': document.getElementById('tigerBacG23').value,
		'heinekenG23': document.getElementById('heinekenG23').value,
		'sevenUpG23': document.getElementById('sevenUpG23').value,
		'cokeG23': document.getElementById('cokeG23').value,
		'pepsiG23': document.getElementById('pepsiG23').value,
		'stingG23': document.getElementById('stingG23').value,
		'waterNatureG23': document.getElementById('waterG23').value,
		'napkinG23': document.getElementById('napkinG23').value,
		'teaG23': document.getElementById('teaG23').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacG23').value = savedInputs.bottleTigerBacG23;
		document.getElementById('bottleTigerNauG23').value = savedInputs.bottleTigerNauG23;
		document.getElementById('tigerNauG23').value = savedInputs.tigerNauG23;
		document.getElementById('tigerBacG23').value = savedInputs.tigerBacG23;
		document.getElementById('heinekenG23').value = savedInputs.heinekenG23;
		document.getElementById('sevenUpG23').value = savedInputs.sevenUpG23;
		document.getElementById('cokeG23').value = savedInputs.cokeG23;
		document.getElementById('pepsiG23').value = savedInputs.pepsiG23;
		document.getElementById('stingG23').value = savedInputs.stingG23;
		document.getElementById('waterG23').value = savedInputs.waterG23;
		document.getElementById('teaG23').value = savedInputs.teaG23;
		document.getElementById('napkinG23').value = savedInputs.napkinG23;
	}

	document.getElementById('bottleTigerBacG23').value = '';
	document.getElementById('bottleTigerNauG23').value = '';
	document.getElementById('tigerNauG23').value = '';
	document.getElementById('tigerBacG23').value = '';
	document.getElementById('heinekenG23').value = '';
	document.getElementById('sevenUpG23').value = '';
	document.getElementById('cokeG23').value = '';
	document.getElementById('pepsiG23').value = '';
	document.getElementById('stingG23').value = '';
	document.getElementById('waterG23').value = '';
	document.getElementById('teaG23').value = '';
	document.getElementById('napkinG23').value = '';


	localStorage.removeItem("bottleTigerBacG23");
	localStorage.removeItem("bottleTigerNauG23");
	localStorage.removeItem("tigerNauG23");
	localStorage.removeItem("tigerBacG23");
	localStorage.removeItem("heinekenG23");
	localStorage.removeItem("sevenUpG23");
	localStorage.removeItem("cokeG23");
	localStorage.removeItem("pepsiG23");
	localStorage.removeItem("stingG23");
	localStorage.removeItem("waterG23");
	localStorage.removeItem("teaG23");
	localStorage.removeItem("napkinG23");

}

const inputsG23 = document.querySelectorAll('input[type="number"]');
inputsG23.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnG23 = document.getElementById("addBtnG23");
const newDrinkFormG23 = document.getElementById("newDrinkFormG23");

addBtnG23.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});


function confirmCalculateG22() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateG22()
	}
}
function calculateG22() {
	const bottleTigerBacG22 = document.getElementById("bottleTigerBacG22").value;
	const bottleTigerNauG22 = document.getElementById("bottleTigerNauG22").value;
	const tigerNauG22 = document.getElementById("tigerNauG22").value;
	const tigerBacG22 = document.getElementById("tigerBacG22").value;
	const heinekenG22 = document.getElementById("heinekenG22").value;
	const sevenUpG22 = document.getElementById("sevenUpG22").value;
	const cokeG22 = document.getElementById("cokeG22").value;
	const pepsiG22 = document.getElementById("pepsiG22").value;
	const stingG22 = document.getElementById("stingG22").value;
	const waterNatureG22 = document.getElementById("waterG22").value;
	const teaG22 = document.getElementById("teaG22").value;
	const napkinG22 = document.getElementById("napkinG22").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacG22 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauG22 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauG22 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacG22 },
		{ name: "Bia Heineken", quantity: heinekenG22 },
		{ name: "Nước 7up", quantity: sevenUpG22 },
		{ name: "Nước CocaCola", quantity: cokeG22 },
		{ name: "Nước pepsi", quantity: pepsiG22 },
		{ name: "Nước Sting", quantity: stingG22 },
		{ name: "Nước suối", quantity: waterNatureG22 },
		{ name: "Trà tắc", quantity: teaG22 },
		{ name: "Khăn giấy", quantity: napkinG22 },
	];

	const selectedProductsG22 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsG22.length; i++) {
		const product = selectedProductsG22[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderG22").innerHTML = bill;


	localStorage.setItem("tigerNauG22", tigerNauG22);
	localStorage.setItem("bottleTigerBacG22", bottleTigerBacG22);
	localStorage.setItem("bottleTigerNauG22", bottleTigerNauG22);
	localStorage.setItem("tigerBacG22", tigerBacG22);
	localStorage.setItem("heinekenG22", heinekenG22);
	localStorage.setItem("sevenUpG22", sevenUpG22);
	localStorage.setItem("cokeG22", cokeG22);
	localStorage.setItem("pepsiG22", pepsiG22)
	localStorage.setItem("stingG22", stingG22);
	localStorage.setItem("waterG22", waterNatureG22);
	localStorage.setItem("teaG22", teaG22);
	localStorage.setItem("napkinG22", napkinG22);

	localStorage.removeItem("bottleTigerBacG22");
	localStorage.removeItem("bottleTigerNauG22");
	localStorage.removeItem("tigerNauG22");
	localStorage.removeItem("tigerBacG22");
	localStorage.removeItem("heinekenG22");
	localStorage.removeItem("sevenUpG22");
	localStorage.removeItem("cokeG22");
	localStorage.removeItem("pepsiG22");
	localStorage.removeItem("stingG22");
	localStorage.removeItem("waterG22");
	localStorage.removeItem("teaG22");
	localStorage.removeItem("napkinG22");

	const totalG22 = (bottleTigerBacG22 * 26000) + (bottleTigerNauG22 * 25000) + (tigerNauG22 * 24000) + (tigerBacG22 * 25000) + (heinekenG22 * 26000) + (sevenUpG22 * 16000) + (cokeG22 * 16000) + (pepsiG22 * 16000) + (waterNatureG22 * 12000) + (stingG22 * 16000) + (teaG22 * 10000) + (napkinG22 * 3000);

	const historyG22 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyG22.push({ time: currentTime, totalG22: totalG22 });
	localStorage.setItem('totalHistory', JSON.stringify(historyG22));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalG22").innerHTML = "Tổng tiền: " + totalG22 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsG22 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsG22.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonG22 = document.getElementById("toggleDrinksG22");
const drinkElementsG22 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonG22.addEventListener("click", () => {
	drinkElementsG22.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonG22.classList.toggle("hidden");
	toggleDrinksButtonG22.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksG22 = localStorage.getItem("showDrinks");

if (showDrinksG22 === "1") {
	drinkElementsG22.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonG22.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonG22.classList.add("hidden");
} else {
	toggleDrinksButtonG22.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryG22() {
	const historyG22 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyG22.map((item, index) => `Lần ${index + 1}: ${item.totalG22} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyG22").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryG22()">Xoá lịch sử</button>';
}
function clearHistoryG22() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyG22").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyG22").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetG22() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllG22();
	}
}
function resetAllG22() {
	let inputs = {
		'bottleTigerBacG22': document.getElementById('bottleTigerBacG22').value,
		'bottleTigerNauG22': document.getElementById('bottleTigerNauG22').value,
		'tigerNauG22': document.getElementById('tigerNauG22').value,
		'tigerBacG22': document.getElementById('tigerBacG22').value,
		'heinekenG22': document.getElementById('heinekenG22').value,
		'sevenUpG22': document.getElementById('sevenUpG22').value,
		'cokeG22': document.getElementById('cokeG22').value,
		'pepsiG22': document.getElementById('pepsiG22').value,
		'stingG22': document.getElementById('stingG22').value,
		'waterNatureG22': document.getElementById('waterG22').value,
		'napkinG22': document.getElementById('napkinG22').value,
		'teaG22': document.getElementById('teaG22').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacG22').value = savedInputs.bottleTigerBacG22;
		document.getElementById('bottleTigerNauG22').value = savedInputs.bottleTigerNauG22;
		document.getElementById('tigerNauG22').value = savedInputs.tigerNauG22;
		document.getElementById('tigerBacG22').value = savedInputs.tigerBacG22;
		document.getElementById('heinekenG22').value = savedInputs.heinekenG22;
		document.getElementById('sevenUpG22').value = savedInputs.sevenUpG22;
		document.getElementById('cokeG22').value = savedInputs.cokeG22;
		document.getElementById('pepsiG22').value = savedInputs.pepsiG22;
		document.getElementById('stingG22').value = savedInputs.stingG22;
		document.getElementById('waterG22').value = savedInputs.waterG22;
		document.getElementById('teaG22').value = savedInputs.teaG22;
		document.getElementById('napkinG22').value = savedInputs.napkinG22;
	}

	document.getElementById('bottleTigerBacG22').value = '';
	document.getElementById('bottleTigerNauG22').value = '';
	document.getElementById('tigerNauG22').value = '';
	document.getElementById('tigerBacG22').value = '';
	document.getElementById('heinekenG22').value = '';
	document.getElementById('sevenUpG22').value = '';
	document.getElementById('cokeG22').value = '';
	document.getElementById('pepsiG22').value = '';
	document.getElementById('stingG22').value = '';
	document.getElementById('waterG22').value = '';
	document.getElementById('teaG22').value = '';
	document.getElementById('napkinG22').value = '';


	localStorage.removeItem("bottleTigerBacG22");
	localStorage.removeItem("bottleTigerNauG22");
	localStorage.removeItem("tigerNauG22");
	localStorage.removeItem("tigerBacG22");
	localStorage.removeItem("heinekenG22");
	localStorage.removeItem("sevenUpG22");
	localStorage.removeItem("cokeG22");
	localStorage.removeItem("pepsiG22");
	localStorage.removeItem("stingG22");
	localStorage.removeItem("waterG22");
	localStorage.removeItem("teaG22");
	localStorage.removeItem("napkinG22");

}

const inputsG22 = document.querySelectorAll('input[type="number"]');
inputsG22.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnG22 = document.getElementById("addBtnG22");
const newDrinkFormG22 = document.getElementById("newDrinkFormG22");

addBtnG22.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});



function confirmCalculateG32() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateG32()
	}
}
function calculateG32() {
	const bottleTigerBacG32 = document.getElementById("bottleTigerBacG32").value;
	const bottleTigerNauG32 = document.getElementById("bottleTigerNauG32").value;
	const tigerNauG32 = document.getElementById("tigerNauG32").value;
	const tigerBacG32 = document.getElementById("tigerBacG32").value;
	const heinekenG32 = document.getElementById("heinekenG32").value;
	const sevenUpG32 = document.getElementById("sevenUpG32").value;
	const cokeG32 = document.getElementById("cokeG32").value;
	const pepsiG32 = document.getElementById("pepsiG32").value;
	const stingG32 = document.getElementById("stingG32").value;
	const waterNatureG32 = document.getElementById("waterG32").value;
	const teaG32 = document.getElementById("teaG32").value;
	const napkinG32 = document.getElementById("napkinG32").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacG32 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauG32 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauG32 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacG32 },
		{ name: "Bia Heineken", quantity: heinekenG32 },
		{ name: "Nước 7up", quantity: sevenUpG32 },
		{ name: "Nước CocaCola", quantity: cokeG32 },
		{ name: "Nước pepsi", quantity: pepsiG32 },
		{ name: "Nước Sting", quantity: stingG32 },
		{ name: "Nước suối", quantity: waterNatureG32 },
		{ name: "Trà tắc", quantity: teaG32 },
		{ name: "Khăn giấy", quantity: napkinG32 },
	];

	const selectedProductsG32 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsG32.length; i++) {
		const product = selectedProductsG32[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderG32").innerHTML = bill;


	localStorage.setItem("tigerNauG32", tigerNauG32);
	localStorage.setItem("bottleTigerBacG32", bottleTigerBacG32);
	localStorage.setItem("bottleTigerNauG32", bottleTigerNauG32);
	localStorage.setItem("tigerBacG32", tigerBacG32);
	localStorage.setItem("heinekenG32", heinekenG32);
	localStorage.setItem("sevenUpG32", sevenUpG32);
	localStorage.setItem("cokeG32", cokeG32);
	localStorage.setItem("pepsiG32", pepsiG32)
	localStorage.setItem("stingG32", stingG32);
	localStorage.setItem("waterG32", waterNatureG32);
	localStorage.setItem("teaG32", teaG32);
	localStorage.setItem("napkinG32", napkinG32);

	localStorage.removeItem("bottleTigerBacG32");
	localStorage.removeItem("bottleTigerNauG32");
	localStorage.removeItem("tigerNauG32");
	localStorage.removeItem("tigerBacG32");
	localStorage.removeItem("heinekenG32");
	localStorage.removeItem("sevenUpG32");
	localStorage.removeItem("cokeG32");
	localStorage.removeItem("pepsiG32");
	localStorage.removeItem("stingG32");
	localStorage.removeItem("waterG32");
	localStorage.removeItem("teaG32");
	localStorage.removeItem("napkinG32");

	const totalG32 = (bottleTigerBacG32 * 26000) + (bottleTigerNauG32 * 25000) + (tigerNauG32 * 24000) + (tigerBacG32 * 25000) + (heinekenG32 * 26000) + (sevenUpG32 * 16000) + (cokeG32 * 16000) + (pepsiG32 * 16000) + (waterNatureG32 * 12000) + (stingG32 * 16000) + (teaG32 * 10000) + (napkinG32 * 3000);

	const historyG32 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyG32.push({ time: currentTime, totalG32: totalG32 });
	localStorage.setItem('totalHistory', JSON.stringify(historyG32));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalG32").innerHTML = "Tổng tiền: " + totalG32 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsG32 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsG32.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonG32 = document.getElementById("toggleDrinksG32");
const drinkElementsG32 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonG32.addEventListener("click", () => {
	drinkElementsG32.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonG32.classList.toggle("hidden");
	toggleDrinksButtonG32.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksG32 = localStorage.getItem("showDrinks");

if (showDrinksG32 === "1") {
	drinkElementsG32.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonG32.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonG32.classList.add("hidden");
} else {
	toggleDrinksButtonG32.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryG32() {
	const historyG32 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyG32.map((item, index) => `Lần ${index + 1}: ${item.totalG32} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyG32").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryG32()">Xoá lịch sử</button>';
}
function clearHistoryG32() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyG32").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyG32").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetG32() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllG32();
	}
}
function resetAllG32() {
	let inputs = {
		'bottleTigerBacG32': document.getElementById('bottleTigerBacG32').value,
		'bottleTigerNauG32': document.getElementById('bottleTigerNauG32').value,
		'tigerNauG32': document.getElementById('tigerNauG32').value,
		'tigerBacG32': document.getElementById('tigerBacG32').value,
		'heinekenG32': document.getElementById('heinekenG32').value,
		'sevenUpG32': document.getElementById('sevenUpG32').value,
		'cokeG32': document.getElementById('cokeG32').value,
		'pepsiG32': document.getElementById('pepsiG32').value,
		'stingG32': document.getElementById('stingG32').value,
		'waterNatureG32': document.getElementById('waterG32').value,
		'napkinG32': document.getElementById('napkinG32').value,
		'teaG32': document.getElementById('teaG32').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacG32').value = savedInputs.bottleTigerBacG32;
		document.getElementById('bottleTigerNauG32').value = savedInputs.bottleTigerNauG32;
		document.getElementById('tigerNauG32').value = savedInputs.tigerNauG32;
		document.getElementById('tigerBacG32').value = savedInputs.tigerBacG32;
		document.getElementById('heinekenG32').value = savedInputs.heinekenG32;
		document.getElementById('sevenUpG32').value = savedInputs.sevenUpG32;
		document.getElementById('cokeG32').value = savedInputs.cokeG32;
		document.getElementById('pepsiG32').value = savedInputs.pepsiG32;
		document.getElementById('stingG32').value = savedInputs.stingG32;
		document.getElementById('waterG32').value = savedInputs.waterG32;
		document.getElementById('teaG32').value = savedInputs.teaG32;
		document.getElementById('napkinG32').value = savedInputs.napkinG32;
	}

	document.getElementById('bottleTigerBacG32').value = '';
	document.getElementById('bottleTigerNauG32').value = '';
	document.getElementById('tigerNauG32').value = '';
	document.getElementById('tigerBacG32').value = '';
	document.getElementById('heinekenG32').value = '';
	document.getElementById('sevenUpG32').value = '';
	document.getElementById('cokeG32').value = '';
	document.getElementById('pepsiG32').value = '';
	document.getElementById('stingG32').value = '';
	document.getElementById('waterG32').value = '';
	document.getElementById('teaG32').value = '';
	document.getElementById('napkinG32').value = '';


	localStorage.removeItem("bottleTigerBacG32");
	localStorage.removeItem("bottleTigerNauG32");
	localStorage.removeItem("tigerNauG32");
	localStorage.removeItem("tigerBacG32");
	localStorage.removeItem("heinekenG32");
	localStorage.removeItem("sevenUpG32");
	localStorage.removeItem("cokeG32");
	localStorage.removeItem("pepsiG32");
	localStorage.removeItem("stingG32");
	localStorage.removeItem("waterG32");
	localStorage.removeItem("teaG32");
	localStorage.removeItem("napkinG32");

}

const inputsG32 = document.querySelectorAll('input[type="number"]');
inputsG32.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnG32 = document.getElementById("addBtnG32");
const newDrinkFormG32 = document.getElementById("newDrinkFormG32");

addBtnG32.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});




function confirmCalculateG33() {
	if (confirm("bạn chắc chắn tính tiền bàn này chứ")) {
		calculateG33()
	}
}
function calculateG33() {
	const bottleTigerBacG33 = document.getElementById("bottleTigerBacG33").value;
	const bottleTigerNauG33 = document.getElementById("bottleTigerNauG33").value;
	const tigerNauG33 = document.getElementById("tigerNauG33").value;
	const tigerBacG33 = document.getElementById("tigerBacG33").value;
	const heinekenG33 = document.getElementById("heinekenG33").value;
	const sevenUpG33 = document.getElementById("sevenUpG33").value;
	const cokeG33 = document.getElementById("cokeG33").value;
	const pepsiG33 = document.getElementById("pepsiG33").value;
	const stingG33 = document.getElementById("stingG33").value;
	const waterNatureG33 = document.getElementById("waterG33").value;
	const teaG33 = document.getElementById("teaG33").value;
	const napkinG33 = document.getElementById("napkinG33").value;

	const products = [
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBacG33 },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNauG33 },
		{ name: "Bia Tiger Nâu", quantity: tigerNauG33 },
		{ name: "Bia Tiger Bạc", quantity: tigerBacG33 },
		{ name: "Bia Heineken", quantity: heinekenG33 },
		{ name: "Nước 7up", quantity: sevenUpG33 },
		{ name: "Nước CocaCola", quantity: cokeG33 },
		{ name: "Nước pepsi", quantity: pepsiG33 },
		{ name: "Nước Sting", quantity: stingG33 },
		{ name: "Nước suối", quantity: waterNatureG33 },
		{ name: "Trà tắc", quantity: teaG33 },
		{ name: "Khăn giấy", quantity: napkinG33 },
	];

	const selectedProductsG33 = products.filter((product) => product.quantity > 0);

	// Tạo ra một bill
	let bill = "<h2>Hoá Đơn Thanh Toán</h2>";
	bill += "<table>";
	bill += "<tr><th>Sản phẩm</th><th>Số lượng</th></tr>";
	for (let i = 0; i < selectedProductsG33.length; i++) {
		const product = selectedProductsG33[i];
		bill += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`;
	}
	bill += "</table>";

	// Hiển thị bill
	document.getElementById("orderG33").innerHTML = bill;


	localStorage.setItem("tigerNauG33", tigerNauG33);
	localStorage.setItem("bottleTigerBacG33", bottleTigerBacG33);
	localStorage.setItem("bottleTigerNauG33", bottleTigerNauG33);
	localStorage.setItem("tigerBacG33", tigerBacG33);
	localStorage.setItem("heinekenG33", heinekenG33);
	localStorage.setItem("sevenUpG33", sevenUpG33);
	localStorage.setItem("cokeG33", cokeG33);
	localStorage.setItem("pepsiG33", pepsiG33)
	localStorage.setItem("stingG33", stingG33);
	localStorage.setItem("waterG33", waterNatureG33);
	localStorage.setItem("teaG33", teaG33);
	localStorage.setItem("napkinG33", napkinG33);

	localStorage.removeItem("bottleTigerBacG33");
	localStorage.removeItem("bottleTigerNauG33");
	localStorage.removeItem("tigerNauG33");
	localStorage.removeItem("tigerBacG33");
	localStorage.removeItem("heinekenG33");
	localStorage.removeItem("sevenUpG33");
	localStorage.removeItem("cokeG33");
	localStorage.removeItem("pepsiG33");
	localStorage.removeItem("stingG33");
	localStorage.removeItem("waterG33");
	localStorage.removeItem("teaG33");
	localStorage.removeItem("napkinG33");

	const totalG33 = (bottleTigerBacG33 * 26000) + (bottleTigerNauG33 * 25000) + (tigerNauG33 * 24000) + (tigerBacG33 * 25000) + (heinekenG33 * 26000) + (sevenUpG33 * 16000) + (cokeG33 * 16000) + (pepsiG33 * 16000) + (waterNatureG33 * 12000) + (stingG33 * 16000) + (teaG33 * 10000) + (napkinG33 * 3000);

	const historyG33 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Lấy thời gian hiện tại
	const currentTime = new Date().getTime();
	historyG33.push({ time: currentTime, totalG33: totalG33 });

	localStorage.setItem('totalHistory', JSON.stringify(historyG33));

	// Hiển thị tổng tiền lên trang web
	document.getElementById("totalG33").innerHTML = "Tổng tiền: " + totalG33 + " đồng";



}

// Lấy tất cả các ô input của nước
const drinkInputsG33 = document.querySelectorAll('.drink input[type="number"]');

// Thêm sự kiện onblur cho từng ô input
drinkInputsG33.forEach(input => {
	input.addEventListener('blur', checkInput);
});

// Hàm kiểm tra giá trị của ô input
function checkInput(event) {
	const input = event.target;
	const value = input.value.trim();

	// Kiểm tra nếu ô input chưa có giá trị
	if (!value) {
		// Hiển thị thông báo "chưa tính tiền"
		input.setAttribute('placeholder', 'Chưa nhập giá trị');
	}
}

const toggleDrinksButtonG33 = document.getElementById("toggleDrinksG33");
const drinkElementsG33 = document.querySelectorAll(".drink:nth-child(n+9)");

toggleDrinksButtonG33.addEventListener("click", () => {
	drinkElementsG33.forEach(drink => drink.classList.toggle("hidden"));
	const isHidden = toggleDrinksButtonG33.classList.toggle("hidden");
	toggleDrinksButtonG33.textContent = isHidden ? "Đóng hiển thị" : "Hiển thị các loại nước";
	localStorage.setItem("showDrinks", isHidden ? "1" : "0");
});

const showDrinksG33 = localStorage.getItem("showDrinks");

if (showDrinksG33 === "1") {
	drinkElementsG33.forEach(drink => drink.classList.add("hidden"));
	toggleDrinksButtonG33.textContent = "Hiển thị các loại nước";
	toggleDrinksButtonG33.classList.add("hidden");
} else {
	toggleDrinksButtonG33.textContent = "Hiển thị các loại nước";
}

// Hiển thị lịch sử tổng tiền khi bấm nút "Xem lịch sử tổng tiền"
function showHistoryG33() {
	const historyG33 = JSON.parse(localStorage.getItem('totalHistory')) || [];

	// Hiển thị lịch sử tổng tiền lên trang web
	const historyText = historyG33.map((item, index) => `Lần ${index + 1}: ${item.totalG33} đồng (Thời gian: ${new Date(item.time).toLocaleString()})`).join('<br>');
	document.getElementById("historyG33").innerHTML = historyText + '<br><button class="delete-history" onclick="clearHistoryG33()">Xoá lịch sử</button>';
}
function clearHistoryG33() {
	localStorage.removeItem('totalHistory');
	var countdown = 5;
	var countdownInterval = setInterval(function () {
		countdown--;
		document.getElementById("historyG33").innerHTML = "Đã xoá lịch sử tổng tiền, sẽ ẩn sau " + countdown + " giây";
		if (countdown == 0) {
			clearInterval(countdownInterval);
			document.getElementById("historyG33").innerHTML = ""; // Ẩn thông báo sau 5 giây
		}
	}, 1000);
}


function confirmResetG33() {
	if (confirm('Bạn có chắc chắn muốn reset không?')) {
		resetAllG33();
	}
}
function resetAllG33() {
	let inputs = {
		'bottleTigerBacG33': document.getElementById('bottleTigerBacG33').value,
		'bottleTigerNauG33': document.getElementById('bottleTigerNauG33').value,
		'tigerNauG33': document.getElementById('tigerNauG33').value,
		'tigerBacG33': document.getElementById('tigerBacG33').value,
		'heinekenG33': document.getElementById('heinekenG33').value,
		'sevenUpG33': document.getElementById('sevenUpG33').value,
		'cokeG33': document.getElementById('cokeG33').value,
		'pepsiG33': document.getElementById('pepsiG33').value,
		'stingG33': document.getElementById('stingG33').value,
		'waterNatureG33': document.getElementById('waterG33').value,
		'napkinG33': document.getElementById('napkinG33').value,
		'teaG33': document.getElementById('teaG33').value

	};
	localStorage.setItem('inputs', JSON.stringify(inputs));
	let savedInputs = JSON.parse(localStorage.getItem('inputs'));

	if (savedInputs) {
		document.getElementById('bottleTigerBacG33').value = savedInputs.bottleTigerBacG33;
		document.getElementById('bottleTigerNauG33').value = savedInputs.bottleTigerNauG33;
		document.getElementById('tigerNauG33').value = savedInputs.tigerNauG33;
		document.getElementById('tigerBacG33').value = savedInputs.tigerBacG33;
		document.getElementById('heinekenG33').value = savedInputs.heinekenG33;
		document.getElementById('sevenUpG33').value = savedInputs.sevenUpG33;
		document.getElementById('cokeG33').value = savedInputs.cokeG33;
		document.getElementById('pepsiG33').value = savedInputs.pepsiG33;
		document.getElementById('stingG33').value = savedInputs.stingG33;
		document.getElementById('waterG33').value = savedInputs.waterG33;
		document.getElementById('teaG33').value = savedInputs.teaG33;
		document.getElementById('napkinG33').value = savedInputs.napkinG33;
	}

	document.getElementById('bottleTigerBacG33').value = '';
	document.getElementById('bottleTigerNauG33').value = '';
	document.getElementById('tigerNauG33').value = '';
	document.getElementById('tigerBacG33').value = '';
	document.getElementById('heinekenG33').value = '';
	document.getElementById('sevenUpG33').value = '';
	document.getElementById('cokeG33').value = '';
	document.getElementById('pepsiG33').value = '';
	document.getElementById('stingG33').value = '';
	document.getElementById('waterG33').value = '';
	document.getElementById('teaG33').value = '';
	document.getElementById('napkinG33').value = '';


	localStorage.removeItem("bottleTigerBacG33");
	localStorage.removeItem("bottleTigerNauG33");
	localStorage.removeItem("tigerNauG33");
	localStorage.removeItem("tigerBacG33");
	localStorage.removeItem("heinekenG33");
	localStorage.removeItem("sevenUpG33");
	localStorage.removeItem("cokeG33");
	localStorage.removeItem("pepsiG33");
	localStorage.removeItem("stingG33");
	localStorage.removeItem("waterG33");
	localStorage.removeItem("teaG33");
	localStorage.removeItem("napkinG33");

}

const inputsG33 = document.querySelectorAll('input[type="number"]');
inputsG33.forEach(input => {
	input.addEventListener('input', () => {
		localStorage.setItem(input.id, input.value);
	});
});

// Lấy giá trị đã lưu trong LocalStorage và hiển thị lại trên các ô input tương ứng
inputs.forEach(input => {
	const value = localStorage.getItem(input.id);
	if (value !== null) {
		input.value = value;
	}
});

const addBtnG33 = document.getElementById("addBtnG33");
const newDrinkFormG33 = document.getElementById("newDrinkFormG33");

addBtnG33.addEventListener("click", () => {
	const formDiv = document.createElement("div");
	formDiv.classList.add("drink-water-add");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Tên loại nước:";
	formDiv.appendChild(nameLabel);

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Nhập tên loại nước...";
	formDiv.appendChild(nameInput);

	const priceLabel = document.createElement("label");
	priceLabel.textContent = "Giá:";
	formDiv.appendChild(priceLabel);

	const priceInput = document.createElement("input");
	priceInput.type = "number";
	priceInput.placeholder = "Nhập giá loại nước...";
	formDiv.appendChild(priceInput);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Đồng ý";
	submitBtn.addEventListener("click", () => {
		const newName = nameInput.value;
		const newPrice = priceInput.value;

		const drinkDiv = document.createElement("div");
		drinkDiv.classList.add("drink");

		const drinkLabel = document.createElement("label");
		drinkLabel.textContent = newName + ":";
		drinkDiv.appendChild(drinkLabel);

		const drinkInput = document.createElement("input");
		drinkInput.type = "number";
		drinkInput.placeholder = "0";
		drinkInput.dataset.price = newPrice;
		drinkDiv.appendChild(drinkInput);

		const drinkList = document.getElementById("drinkList");
		if (drinkList) {
			drinkList.appendChild(drinkDiv);
		}

		formDiv.remove();
	});

	formDiv.appendChild(submitBtn);
	newDrinkForm.appendChild(formDiv);
});


//Khu B
//B1
// Tìm đến nút Bàn B1
var btnB1 = document.getElementById("btnB1");

// Tìm đến phần tử <div class="cover-table-B"></div>
var coverTableB1 = document.querySelector(".cover-table-B1");

// Thêm sự kiện click cho nút Bàn B1
btnB1.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableB1.classList.add("active");
});

var btnB2 = document.getElementById("btnB2");

// Tìm đến phần tử <div class="cover-table-B"></div>
var coverTableB2 = document.querySelector(".cover-table-B2");

// Thêm sự kiện click cho nút Bàn B1
btnB2.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableB2.classList.add("active");


});



var btnB3 = document.getElementById("btnB3");

// Tìm đến phần tử <div class="cover-table-B"></div>
var coverTableB3 = document.querySelector(".cover-table-B3");

// Thêm sự kiện click cho nút Bàn B1
btnB3.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableB3.classList.add("active");

});

var btnB4 = document.getElementById("btnB4");

// Tìm đến phần tử <div class="cover-table-B"></div>
var coverTableB4 = document.querySelector(".cover-table-B4");

// Thêm sự kiện click cho nút Bàn B1
btnB4.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableB4.classList.add("active");

});

var btnB5 = document.getElementById("btnB5");

// Tìm đến phần tử <div class="cover-table-B"></div>
var coverTableB5 = document.querySelector(".cover-table-B5");

// Thêm sự kiện click cho nút Bàn B1
btnB5.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableB5.classList.add("active");

});


var btnC1 = document.getElementById("btnC1");

// Tìm đến phần tử <div class="cover-table-B"></div>
var coverTableC1 = document.querySelector(".cover-table-C1");

// Thêm sự kiện click cho nút Bàn B1
btnC1.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableC1.classList.add("active");


});
var btnC2 = document.getElementById("btnC2");
var coverTableC2 = document.querySelector(".cover-table-C2");
btnC2.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableC2.classList.add("active");

});



var btnC3 = document.getElementById("btnC3");

// Tìm đến phần tử <div class="cover-table-C"></div>
var coverTableC3 = document.querySelector(".cover-table-C3");

// Thêm sự kiện click cho nút Bàn C2
btnC3.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableC3.classList.add("active");
});

var btnC5 = document.getElementById("btnC5");

// Tìm đến phần tử <div class="cover-table-C"></div>
var coverTableC5 = document.querySelector(".cover-table-C5");

// Thêm sự kiện click cho nút Bàn C2
btnC5.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableC5.classList.add("active");

});

var btnC4 = document.getElementById("btnC4");

// Tìm đến phần tử <div class="cover-table-C"></div>
var coverTableC4 = document.querySelector(".cover-table-C4");

// Thêm sự kiện click cho nút Bàn C2
btnC4.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableC4.classList.add("active");

});



var btnE1 = document.getElementById("btnE1");

// Tìm đến phần tử <div class="cover-table-C"></div>
var coverTableE1 = document.querySelector(".cover-table-E1");

// Thêm sự kiện click cho nút Bàn C2
btnE1.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableE1.classList.add("active");

});

var btnE2 = document.getElementById("btnE2");

// Tìm đến phần tử <div class="cover-table-C"></div>
var coverTableE2 = document.querySelector(".cover-table-E2");

// Thêm sự kiện click cho nút Bàn C2
btnE2.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableE2.classList.add("active");

	// Thay đổi văn bản của nút
	// if (btnE2.innerHTML === "Bàn E2") {
	// 	btnE2.innerHTML = "Đóng bàn E2";
	// 	btnE2.style.backgroundColor = 'rgb(106, 78, 217)'
	// 	btnE2.style.color = 'white';
	// } else {
	// 	btnE2.innerHTML = "Bàn E2";
	// 	btnE2.style.backgroundColor = 'rgb(177, 35, 213);'
	// 	btnE2.style.color = 'white';
	// }
});


var btnF1 = document.getElementById("btnF1");

// Tìm đến phần tử <div class="cover-table-C"></div>
var coverTableF1 = document.querySelector(".cover-table-F1");

// Thêm sự kiện click cho nút Bàn C2
btnF1.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableF1.classList.add("active");

});

var btnG1 = document.getElementById("btnG1");

// Tìm đến phần tử <div class="cover-table-C"></div>
var coverTableG1 = document.querySelector(".cover-table-G1");

// Thêm sự kiện click cho nút Bàn C2
btnG1.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableG1.classList.add("active");

});

var btnG2 = document.getElementById("btnG2");

// Tìm đến phần tử <div class="cover-table-C"></div>
var coverTableG2 = document.querySelector(".cover-table-G2");

// Thêm sự kiện click cho nút Bàn C2
btnG2.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableG2.classList.add("active");

});

var btnG3 = document.getElementById("btnG3");

// Tìm đến phần tử <div class="cover-table-C"></div>
var coverTableG3 = document.querySelector(".cover-table-G3");

// Thêm sự kiện click cho nút Bàn C2
btnG3.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableG3.classList.add("active");

});






//open modal
const iconModal = document.querySelector('.open-modal');
let showModal = document.querySelector('.table-modal');
const openModalPriceWater = document.querySelector('.price-water');
const openModalPrice = document.querySelector('.cover-popup-header');
const iconClosePrice = document.querySelector('.close-btn-header');
iconModal.addEventListener('click', () => {
	showModal.classList.toggle('active');
})

openModalPriceWater.addEventListener('click', () => {
	openModalPrice.classList.toggle('active');
})

iconClosePrice.addEventListener('click', () => {
	openModalPrice.classList.remove('active');
})

const buttonShowImage = document.querySelector('.button-show-image');
const imageContainer = document.querySelector('#image-container');

buttonShowImage.addEventListener('click', function () {
	const imageCreate = document.createElement('img');
	imageCreate.src = '/image/khu-a.jpg';
	imageContainer.appendChild(imageCreate);
});

const openPayment = document.getElementsByClassName("open-payment")[0];
const showPayment = document.getElementsByClassName("cover-popup-payment")[0];
const closePayment = document.getElementsByClassName("close-btn-payment")[0];
openPayment.addEventListener('click', () => {
	showPayment.classList.add("active")
	if (showPayment.classList.contains("active")) {
		closePayment.addEventListener('click', () => {
			showPayment.classList.remove("active")
		})
	}
})


// Lưu trữ giá trị của input từ div 1 vào LocalStorage có tên "div1Values"
localStorage.setItem("div1Values", JSON.stringify({
	"soLuongKhanGiay": document.getElementById("so-luong-khan-giay").value,
	'soLuongNuocSuoi': document.getElementById("so-luong-nuoc-suoi").value,
	'soLuongLy': document.getElementById("so-luong-ly-nuoc").value,
	"soLuongNgot": document.getElementById("so-luong-ngot").value,
	"soLuongTigerBac": document.getElementById("so-luong-tiger-bac").value,
	"soLuongTigerNau": document.getElementById("so-luong-tiger-nau").value,
	"soLuongHeineken": document.getElementById("so-luong-heineken").value,
	"soLuongTigerBacChai": document.getElementById("so-luong-tiger-bac-chai").value,
	"soLuongTigerNauChai": document.getElementById("so-luong-tiger-nau-chai").value,
	"soLuongHeinekenChai": document.getElementById("so-luong-heineken-chai").value
}));

// Lưu trữ giá trị của input từ div 2 vào LocalStorage có tên "div2Values"
localStorage.setItem("div2Values", JSON.stringify({
	"soLuongKhanGiayNhap": document.getElementById("so-luong-khan-giay-nhap").value,
	'soLuongNuocSuoiNhap': document.getElementById("so-luong-nuoc-suoi-nhap").value,
	'soLuongLyNhap': document.getElementById("so-luong-ly-nuoc-nhap").value,
	"soLuongNgotNhap": document.getElementById("so-luong-ngot-nhap").value,
	"soLuongTigerBacNhap": document.getElementById("so-luong-tiger-bac-nhap").value,
	"soLuongTigerNauNhap": document.getElementById("so-luong-tiger-nau-nhap").value,
	"soLuongHeinekenNhap": document.getElementById("so-luong-heineken-nhap").value,
	"soLuongTigerBacChaiNhap": document.getElementById("so-luong-tiger-bac-chai-nhap").value,
	"soLuongTigerNauChaiNhap": document.getElementById("so-luong-tiger-nau-chai-nhap").value,
	"soLuongHeinekenChaiNhap": document.getElementById("so-luong-heineken-chai-nhap").value
}));

// Lưu trữ giá trị của input từ div 3 vào LocalStorage có tên "div3Values"
localStorage.setItem("div3Values", JSON.stringify({
	"soLuongKhanGiayXuat": document.getElementById("so-luong-khan-giay-xuat").value,
	'soLuongNuocSuoiXuat': document.getElementById("so-luong-nuoc-suoi-xuat").value,
	'soLuongLyXuat': document.getElementById("so-luong-ly-nuoc-xuat").value,
	"soLuongNgotXuat": document.getElementById("so-luong-ngot-xuat").value,
	"soLuongTigerBacXuat": document.getElementById("so-luong-tiger-bac-xuat").value,
	"soLuongTigerNauXuat": document.getElementById("so-luong-tiger-nau-xuat").value,
	"soLuongHeinekenXuat": document.getElementById("so-luong-heineken-xuat").value,
	"soLuongTigerBacChaiXuat": document.getElementById("so-luong-tiger-bac-chai-xuat").value,
	"soLuongTigerNauChaiXuat": document.getElementById("so-luong-tiger-nau-chai-xuat").value,
	"soLuongHeinekenChaiXuat": document.getElementById("so-luong-heineken-chai-xuat").value

}));


const div1Values = JSON.parse(localStorage.getItem("div1Values"));
document.getElementById("so-luong-khan-giay").value = div1Values.soLuongKhanGiay;
document.getElementById("so-luong-nuoc-suoi").value = div1Values.soLuongNuocSuoi;
document.getElementById("so-luong-ly-nuoc-nhap").value = div1Values.soLuongLy;

document.getElementById("so-luong-ngot").value = div1Values.soLuongNgot;
document.getElementById("so-luong-tiger-bac").value = div1Values.soLuongTigerBac;
document.getElementById("so-luong-tiger-nau").value = div1Values.soLuongTigerNau;
document.getElementById("so-luong-heineken").value = div1Values.soLuongHeineken;
document.getElementById("so-luong-tiger-bac-chai").value = div1Values.soLuongTigerBacChai;
document.getElementById("so-luong-tiger-nau-chai").value = div1Values.soLuongTigerNauChai;
document.getElementById("so-luong-heineken-chai").value = div1Values.soLuongHeinekenChai;

const div2Values = JSON.parse(localStorage.getItem("div2Values"));
document.getElementById("so-luong-khan-giay-nhap").value = div2Values.soLuongKhanGiayNhap;
document.getElementById("so-luong-nuoc-suoi-nhap").value = div2Values.soLuongNuocSuoiNhap;
document.getElementById("so-luong-ly-nuoc-nhap").value = div2Values.soLuongLyNhap;
document.getElementById("so-luong-ngot-nhap").value = div2Values.soLuongNgotNhap;
document.getElementById("so-luong-tiger-bac-nhap").value = div2Values.soLuongTigerBacNhap;
document.getElementById("so-luong-tiger-nau-nhap").value = div2Values.soLuongTigerNauNhap;
document.getElementById("so-luong-heineken-nhap").value = div2Values.soLuongHeinekenNhap;
document.getElementById("so-luong-tiger-bac-chai-nhap").value = div2Values.soLuongTigerBacChaiNhap;
document.getElementById("so-luong-tiger-nau-chai-nhap").value = div2Values.soLuongTigerNauChaiNhap;
document.getElementById("so-luong-heineken-chai-nhap").value = div2Values.soLuongHeinekenChaiNhap;

const div3Values = JSON.parse(localStorage.getItem("div3Values"));
document.getElementById("so-luong-khan-giay-xuat").value = div3Values.soLuongKhanGiayXuat;
document.getElementById("so-luong-nuoc-suoi-xuat").value = div3Values.soLuongNuocSuoiXuat;
document.getElementById("so-luong-ly-nuoc-xuat").value = div3Values.soLuongLyXuat;
document.getElementById("so-luong-ngot-xuat").value = div3Values.soLuongNgotXuat;
document.getElementById("so-luong-tiger-bac-xuat").value = div3Values.soLuongTigerBacXuat;
document.getElementById("so-luong-tiger-nau-xuat").value = div3Values.soLuongTigerNauXuat;
document.getElementById("so-luong-heineken-xuat").value = div3Values.soLuongHeinekenXuat;
document.getElementById("so-luong-tiger-bac-chai-xuat").value = div3Values.soLuongTigerBacChaiXuat;
document.getElementById("so-luong-tiger-nau-chai-xuat").value = div3Values.soLuongTigerNauChaiXuat;
document.getElementById("so-luong-heineken-chai-xuat").value = div3Values.soLuongHeinekenChaiXuat;

// Lấy các input
const inputsdiv1 = document.querySelectorAll('#div1 input');

// Lặp qua các input và thêm sự kiện khi nhập giá trị vào
inputsdiv1.forEach(input => {
	const name = input.id.replace('so-luong-', '');
	const nuocItem = document.querySelector(`.nuoc-item[data-name="${name}"]`);
	const value = localStorage.getItem(name) || 0;
	input.value = value;
	nuocItem.textContent = value;

	input.addEventListener('input', function () {
		const value = parseInt(this.value);
		localStorage.setItem(name, value);
		nuocItem.textContent = value;
	});
});

function confirmResetFormKho() {
	if (confirm('Bạn có chắc chắn muốn reset nước kho không?')) {
		resetFormKho();
	}
}

function resetFormKho() {
	document.getElementById("so-luong-khan-giay").value = '';
	document.getElementById("so-luong-nuoc-suoi").value = '';
	document.getElementById("so-luong-ly-nuoc").value = '';
	document.getElementById("so-luong-ngot").value = '';
	document.getElementById("so-luong-tiger-bac").value = '';
	document.getElementById("so-luong-tiger-nau").value = '';
	document.getElementById("so-luong-heineken").value = '';
	document.getElementById("so-luong-tiger-bac-chai").value = '';
	document.getElementById("so-luong-tiger-nau-chai").value = '';
	document.getElementById("so-luong-heineken-chai").value = '';
	saveFormKho()
}

function saveFormKho() {
	localStorage.setItem("so-luong-khan-giay", document.getElementById("so-luong-khan-giay").value);
	localStorage.setItem("so-luong-nuoc-suoi", document.getElementById("so-luong-nuoc-suoi").value);
	localStorage.setItem("so-luong-ly-nuoc", document.getElementById("so-luong-ly-nuoc").value);
	localStorage.setItem("so-luong-ngot", document.getElementById("so-luong-ngot").value);
	localStorage.setItem("so-luong-tiger-bac", document.getElementById("so-luong-tiger-bac").value);
	localStorage.setItem("so-luong-tiger-nau", document.getElementById("so-luong-tiger-nau").value);
	localStorage.setItem("so-luong-heineken", document.getElementById("so-luong-heineken").value);
	localStorage.setItem("so-luong-tiger-bac-chai", document.getElementById("so-luong-tiger-bac-chai").value);
	localStorage.setItem("so-luong-tiger-nau-chai", document.getElementById("so-luong-tiger-nau-chai").value);
	localStorage.setItem("so-luong-heineken-chai", document.getElementById("so-luong-heineken-chai").value);
}

function loadFormKho() {
	document.getElementById("so-luong-khan-giay").value = localStorage.getItem("so-luong-khan-giay");
	document.getElementById("so-luong-nuoc-suoi").value = localStorage.getItem("so-luong-nuoc-suoi");
	document.getElementById("so-luong-ly-nuoc").value = localStorage.getItem("so-luong-ly-nuoc");
	document.getElementById("so-luong-ngot").value = localStorage.getItem("so-luong-ngot");
	document.getElementById("so-luong-tiger-bac").value = localStorage.getItem("so-luong-tiger-bac");
	document.getElementById("so-luong-tiger-nau").value = localStorage.getItem("so-luong-tiger-nau");
	document.getElementById("so-luong-heineken").value = localStorage.getItem("so-luong-heineken");
	document.getElementById("so-luong-tiger-bac-chai").value = localStorage.getItem("so-luong-tiger-bac-chai");
	document.getElementById("so-luong-tiger-nau-chai").value = localStorage.getItem("so-luong-tiger-nau-chai");
	document.getElementById("so-luong-heineken-chai").value = localStorage.getItem("so-luong-heineken-chai");
}

loadFormKho(); // Load giá trị khi load lại trang

function confirmResetFormNhap() {
	if (confirm('Bạn có chắc chắn muốn reset nước nhập không?')) {
		resetFormNhap();
	}
}
function resetFormNhap() {
	document.getElementById("so-luong-khan-giay-nhap").value = '';
	document.getElementById("so-luong-nuoc-suoi-nhap").value = '';
	document.getElementById("so-luong-ly-nuoc-nhap").value = '';
	document.getElementById("so-luong-ngot-nhap").value = '';
	document.getElementById("so-luong-tiger-bac-nhap").value = '';
	document.getElementById("so-luong-tiger-nau-nhap").value = '';
	document.getElementById("so-luong-heineken-nhap").value = '';
	document.getElementById("so-luong-tiger-bac-chai-nhap").value = '';
	document.getElementById("so-luong-tiger-nau-chai-nhap").value = '';
	document.getElementById("so-luong-heineken-chai-nhap").value = '';
	saveFormNhap()
}


function saveFormNhap() {
	localStorage.setItem("so-luong-khan-giay-nhap", document.getElementById("so-luong-khan-giay-nhap").value);
	localStorage.setItem("so-luong-nuoc-suoi-nhap", document.getElementById("so-luong-nuoc-suoi-nhap").value);
	localStorage.setItem("so-luong-ly-nuoc-nhap", document.getElementById("so-luong-ly-nuoc-nhap").value);
	localStorage.setItem("so-luong-ngot-nhap", document.getElementById("so-luong-ngot-nhap").value);
	localStorage.setItem("so-luong-tiger-bac-nhap", document.getElementById("so-luong-tiger-bac-nhap").value);
	localStorage.setItem("so-luong-tiger-nau-nhap", document.getElementById("so-luong-tiger-nau-nhap").value);
	localStorage.setItem("so-luong-heineken-nhap", document.getElementById("so-luong-heineken-nhap").value);
	localStorage.setItem("so-luong-tiger-bac-chai-nhap", document.getElementById("so-luong-tiger-bac-chai-nhap").value);
	localStorage.setItem("so-luong-tiger-nau-chai-nhap", document.getElementById("so-luong-tiger-nau-chai-nhap").value);
	localStorage.setItem("so-luong-heineken-chai-nhap", document.getElementById("so-luong-heineken-chai-nhap").value);
}

function loadFormNhap() {
	document.getElementById("so-luong-khan-giay-nhap").value = localStorage.getItem("so-luong-khan-giay-nhap");
	document.getElementById("so-luong-nuoc-suoi-nhap").value = localStorage.getItem("so-luong-nuoc-suoi-nhap");
	document.getElementById("so-luong-ly-nuoc-nhap").value = localStorage.getItem("so-luong-ly-nuoc-nhap");
	document.getElementById("so-luong-ngot-nhap").value = localStorage.getItem("so-luong-ngot-nhap");
	document.getElementById("so-luong-tiger-bac-nhap").value = localStorage.getItem("so-luong-tiger-bac-nhap");
	document.getElementById("so-luong-tiger-nau-nhap").value = localStorage.getItem("so-luong-tiger-nau-nhap");
	document.getElementById("so-luong-heineken-nhap").value = localStorage.getItem("so-luong-heineken-nhap");
	document.getElementById("so-luong-tiger-bac-chai-nhap").value = localStorage.getItem("so-luong-tiger-bac-chai-nhap");
	document.getElementById("so-luong-tiger-nau-chai-nhap").value = localStorage.getItem("so-luong-tiger-nau-chai-nhap");
	document.getElementById("so-luong-heineken-chai-nhap").value = localStorage.getItem("so-luong-heineken-chai-nhap");
}

loadFormNhap(); // Load giá trị khi load lại trang


function confirmResetFormXuat() {
	if (confirm('Bạn có chắc chắn muốn reset nước nhập không?')) {
		resetFormXuat();
	}
}
function resetFormXuat() {
	document.getElementById("so-luong-khan-giay-xuat").value = '';
	document.getElementById("so-luong-nuoc-suoi-xuat").value = '';
	document.getElementById("so-luong-ly-nuoc-xuat").value = '';
	document.getElementById("so-luong-ngot-xuat").value = '';
	document.getElementById("so-luong-tiger-bac-xuat").value = '';
	document.getElementById("so-luong-tiger-nau-xuat").value = '';
	document.getElementById("so-luong-heineken-xuat").value = '';
	document.getElementById("so-luong-tiger-bac-chai-xuat").value = '';
	document.getElementById("so-luong-tiger-nau-chai-xuat").value = '';
	document.getElementById("so-luong-heineken-chai-xuat").value = '';
	saveFormXuat()
}


function saveFormXuat() {
	localStorage.setItem("so-luong-khan-giay-xuat", document.getElementById("so-luong-khan-giay-xuat").value);
	localStorage.setItem("so-luong-nuoc-suoi-xuat", document.getElementById("so-luong-nuoc-suoi-xuat").value);
	localStorage.setItem("so-luong-ly-nuoc-xuat", document.getElementById("so-luong-ly-nuoc-xuat").value);
	localStorage.setItem("so-luong-ngot-xuat", document.getElementById("so-luong-ngot-xuat").value);
	localStorage.setItem("so-luong-tiger-bac-xuat", document.getElementById("so-luong-tiger-bac-xuat").value);
	localStorage.setItem("so-luong-tiger-nau-xuat", document.getElementById("so-luong-tiger-nau-xuat").value);
	localStorage.setItem("so-luong-heineken-xuat", document.getElementById("so-luong-heineken-xuat").value);
	localStorage.setItem("so-luong-tiger-bac-chai-xuat", document.getElementById("so-luong-tiger-bac-chai-xuat").value);
	localStorage.setItem("so-luong-tiger-nau-chai-xuat", document.getElementById("so-luong-tiger-nau-chai-xuat").value);
	localStorage.setItem("so-luong-heineken-chai-xuat", document.getElementById("so-luong-heineken-chai-xuat").value);
}

function loadFormXuat() {
	document.getElementById("so-luong-khan-giay-xuat").value = localStorage.getItem("so-luong-khan-giay-xuat");
	document.getElementById("so-luong-nuoc-suoi-xuat").value = localStorage.getItem("so-luong-nuoc-suoi-xuat");
	document.getElementById("so-luong-ly-nuoc-xuat").value = localStorage.getItem("so-luong-ly-nuoc-xuat");
	document.getElementById("so-luong-ngot-xuat").value = localStorage.getItem("so-luong-ngot-xuat");
	document.getElementById("so-luong-tiger-bac-xuat").value = localStorage.getItem("so-luong-tiger-bac-xuat");
	document.getElementById("so-luong-tiger-nau-xuat").value = localStorage.getItem("so-luong-tiger-nau-xuat");
	document.getElementById("so-luong-heineken-xuat").value = localStorage.getItem("so-luong-heineken-xuat");
	document.getElementById("so-luong-tiger-bac-chai-xuat").value = localStorage.getItem("so-luong-tiger-bac-chai-xuat");
	document.getElementById("so-luong-tiger-nau-chai-xuat").value = localStorage.getItem("so-luong-tiger-nau-chai-xuat");
	document.getElementById("so-luong-heineken-chai-xuat").value = localStorage.getItem("so-luong-heineken-chai-xuat");
}

loadFormXuat(); // Load giá trị khi load lại trang

//all product same
//open are 
const openA = document.getElementById('btnA');
var allTable = document.querySelector('.cover-table');
var isKhuOpen = false;
openA.addEventListener('click', () => {
	allTable.classList.add('active')

})

const closeTableA = document.querySelector(".close-table-A")
closeTableA.addEventListener("click", () => {
	allTable.classList.remove("active")
})



// Lấy tham chiếu đến các phần tử
var btnB = document.getElementById("btnB");
var coverButtonKhuB = document.querySelector(".cover-button-khuB");
// Thêm sự kiện "click" vào nút "Khu B"
btnB.addEventListener("click", function () {
	coverButtonKhuB.classList.add('active')
});

const closeTableB = document.querySelector(".close-table-B")
closeTableB.addEventListener("click", () => {
	coverButtonKhuB.classList.remove("active")
})
var coverButtonKhuB1 = document.querySelector(".cover-table-B1");
const closeTableB1 = document.querySelector(".close-table-B1")
closeTableB1.addEventListener("click", () => {
	coverButtonKhuB1.classList.remove("active")
})

var coverButtonKhuB2 = document.querySelector(".cover-table-B2");
const closeTableB2 = document.querySelector(".close-table-B2")
closeTableB2.addEventListener("click", () => {
	coverButtonKhuB2.classList.remove("active")
})
var coverButtonKhuB3 = document.querySelector(".cover-table-B3");
const closeTableB3 = document.querySelector(".close-table-B3")
closeTableB3.addEventListener("click", () => {
	coverButtonKhuB3.classList.remove("active")
})
var coverButtonKhuB4 = document.querySelector(".cover-table-B4");
const closeTableB4 = document.querySelector(".close-table-B4")
closeTableB4.addEventListener("click", () => {
	coverButtonKhuB4.classList.remove("active")
})

var coverButtonKhuB5 = document.querySelector(".cover-table-B5");
const closeTableB5 = document.querySelector(".close-table-B5")
closeTableB5.addEventListener("click", () => {
	coverButtonKhuB5.classList.remove("active")
})

var btnC = document.getElementById("btnC");
var coverButtonKhuC = document.querySelector(".cover-button-khuC");
btnC.addEventListener("click", function () {
	coverButtonKhuC.classList.add('active')
});
const closeTableC = document.querySelector(".close-table-C")
closeTableC.addEventListener("click", () => {
	coverButtonKhuC.classList.remove("active")
})

var coverButtonKhuC1 = document.querySelector(".cover-table-C1");
const closeTableC1 = document.querySelector(".close-table-C1")
closeTableC1.addEventListener("click", () => {
	coverButtonKhuC1.classList.remove("active")
})
var coverButtonKhuC2 = document.querySelector(".cover-table-C2");
const closeTableC2 = document.querySelector(".close-table-C2")
closeTableC2.addEventListener("click", () => {
	coverButtonKhuC2.classList.remove("active")
})
var coverButtonKhuC3 = document.querySelector(".cover-table-C3");
const closeTableC3 = document.querySelector(".close-table-C3")
closeTableC3.addEventListener("click", () => {
	coverButtonKhuC3.classList.remove("active")
})
var coverButtonKhuC4 = document.querySelector(".cover-table-C4");
const closeTableC4 = document.querySelector(".close-table-C4")
closeTableC4.addEventListener("click", () => {
	coverButtonKhuC4.classList.remove("active")
})
var coverButtonKhuC5 = document.querySelector(".cover-table-C5");
const closeTableC5 = document.querySelector(".close-table-C5")
closeTableC5.addEventListener("click", () => {
	coverButtonKhuC5.classList.remove("active")
})

var btnD = document.getElementById("btnD");
var coverButtonKhuD = document.querySelector(".cover-button-khuD");
// Thêm sự kiện "click" vào nút "Khu B"
btnD.addEventListener("click", function () {
	coverButtonKhuD.classList.add('active')
});

const closeTableD = document.querySelector(".close-table-D")
closeTableD.addEventListener("click", () => {
	coverButtonKhuD.classList.remove("active")
})

var btnE = document.getElementById("btnE");
var coverButtonKhuE = document.querySelector(".cover-button-khuE");
// Thêm sự kiện "click" vào nút "Khu B"
btnE.addEventListener("click", function () {
	coverButtonKhuE.classList.add('active')
});

const closeTableE = document.querySelector(".close-table-E")
closeTableE.addEventListener("click", () => {
	coverButtonKhuE.classList.remove("active")
})
var coverButtonKhuE1 = document.querySelector(".cover-table-E1");
const closeTableE1 = document.querySelector(".close-table-E1")
closeTableE1.addEventListener("click", () => {
	coverButtonKhuE1.classList.remove("active")
})
var coverButtonKhuE2 = document.querySelector(".cover-table-E2");
const closeTableE2 = document.querySelector(".close-table-E2")
closeTableE2.addEventListener("click", () => {
	coverButtonKhuE2.classList.remove("active")
})




var coverButtonKhuF1 = document.querySelector(".cover-table-F1");
const closeTableF1 = document.querySelector(".close-table-F1")
closeTableF1.addEventListener("click", () => {
	coverButtonKhuF1.classList.remove("active")
})


const closeTableF = document.querySelector(".close-table-F")
closeTableF.addEventListener("click", () => {
	coverButtonKhuF.classList.remove("active")
})


const closeTableG = document.querySelector(".close-table-G")
closeTableG.addEventListener("click", () => {
	coverButtonKhuG.classList.remove("active")
})
var coverButtonKhuG1 = document.querySelector(".cover-table-G1");
const closeTableG1 = document.querySelector(".close-table-G1")
closeTableG1.addEventListener("click", () => {
	coverButtonKhuG1.classList.remove("active")
})
var coverButtonKhuG2 = document.querySelector(".cover-table-G2");
const closeTableG2 = document.querySelector(".close-table-G2")
closeTableG2.addEventListener("click", () => {
	coverButtonKhuG2.classList.remove("active")
})
var coverButtonKhuG3 = document.querySelector(".cover-table-G3");
const closeTableG3 = document.querySelector(".close-table-G3")
closeTableG3.addEventListener("click", () => {
	coverButtonKhuG3.classList.remove("active")
})
// Lấy tham chiếu đến các phần tử

// Thêm sự kiện "click" vào nút "Khu B"




// Lấy tham chiếu đến các phần tử
var btnD = document.getElementById("btnD");
var coverButtonKhuD = document.querySelector(".cover-button-khuD");
// Thêm sự kiện "click" vào nút "Khu D"
btnD.addEventListener("click", function () {
	coverButtonKhuD.classList.add("active")
});

var btnE = document.getElementById("btnE");
var coverButtonKhuE = document.querySelector(".cover-button-khuE");
// Thêm sự kiện "click" vào nút "Khu D"
btnE.addEventListener("click", function () {
	coverButtonKhuE.classList.add("active")
});


var btnF = document.getElementById("btnF");
var coverButtonKhuF = document.querySelector(".cover-button-khuF");
// Thêm sự kiện "click" vào nút "Khu D"
btnF.addEventListener("click", function () {
	coverButtonKhuF.classList.add("active")
});

var btnG = document.getElementById("btnG");
var coverButtonKhuG = document.querySelector(".cover-button-khuG");
// Thêm sự kiện "click" vào nút "Khu D"
btnG.addEventListener("click", function () {
	coverButtonKhuG.classList.add("active")
});




let fullscreen;
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function (e) {
	e.preventDefault();
	if (!fullscreen) {
		fullscreen = true;
		document.documentElement.requestFullscreen();
		fsEnter.innerText = "Thoát màn hình";
	}
	else {
		fullscreen = false;
		document.exitFullscreen();
		fsEnter.innerHTML = `<i class='bx bx-fullscreen' ></i>
			<nav class="full-screen-display">Full màn hình</nav>`;
	}
});


const openShowPrices = document.querySelector('.not-pay-price')
const ShowPrices = document.querySelector(".open-not-price")
openShowPrices.addEventListener("click", () => {
	ShowPrices.classList.add("active")
})

const closeShowPrices = document.querySelector(".close-table-not-price")
closeShowPrices.addEventListener("click", () => {
	ShowPrices.classList.remove("active")
})
// Hàm lưu trữ thông tin bàn chưa tính tiền vào localStorage
function saveNotPaidTables(table) {
	var notPaidTables = [];

	// Lấy giá trị của các ô input
	var bottleTigerBac = document.getElementById('bottleTigerBac').value;
	var bottleTigerNau = document.getElementById('bottleTigerNau').value;
	var tigerNau = document.getElementById('tigerNau').value;
	var tigerBac = document.getElementById('tigerBac').value;
	var heineken = document.getElementById('heineken').value;
	var sevenUp = document.getElementById('sevenUp').value;
	var coke = document.getElementById('coke').value;
	var pepsi = document.getElementById('pepsi').value;
	var sting = document.getElementById('sting').value;
	var water = document.getElementById('water').value;
	var tea = document.getElementById('tea').value;
	var napkin = document.getElementById('napkin').value;

	// Kiểm tra nếu có ít nhất một ô input có giá trị lớn hơn 0
	if (
		bottleTigerBac > 0 ||
		bottleTigerNau > 0 ||
		tigerNau > 0 ||
		tigerBac > 0 ||
		heineken > 0 ||
		sevenUp > 0 ||
		coke > 0 ||
		pepsi > 0 ||
		sting > 0 ||
		water > 0 ||
		tea > 0 ||
		napkin > 0
	) {
		// Lưu thông tin của bàn vào mảng notPaidTables
		notPaidTables.push('Bàn ' + table + ' (chưa tính tiền)');
	}

	// Lưu mảng notPaidTables vào localStorage
	localStorage.setItem('notPaidTables', JSON.stringify(notPaidTables));
}

// Hàm kiểm tra và hiển thị tên bàn chưa tính tiền
function checkDrink(table) {

	const titleTable = document.getElementById("title-table-")

	// Gọi hàm lưu trữ thông tin bàn chưa tính tiền vào localStorage
	saveNotPaidTables(table);

	// Kiểm tra nếu có thông tin về bàn chưa tính tiền trong localStorage
	var notPaidTables = JSON.parse(localStorage.getItem('notPaidTables')) || [];

	// Kiểm tra nếu bàn hiện tại có trong danh sách bàn chưa tính tiền
	if (notPaidTables.includes('Bàn ' + table + ' (chưa tính tiền)')) {
		console.log(notPaidTables);
		// Hiển thị tên bàn đang tính tiền

		document.getElementById('title-table-' + table).innerText = 'Bàn ' + table + ' (chưa tính tiền)';
	} else {
		// Ẩn tên bàn nếu không có thông tin trong localStorage
		document.getElementById('title-table-' + table).innerText = 'Bàn ' + table + ' (chưa tính tiền)';
	}
}

// Hàm để lấy dữ liệu từ localStorage và cập nhật giao diện
function updateNotPaidTables() {
	// Lấy dữ liệu từ localStorage
	var notPaidTables = JSON.parse(localStorage.getItem('notPaidTables'));

	// Kiểm tra xem dữ liệu có tồn tại không
	if (notPaidTables && notPaidTables.length > 0) {
		// Lặp qua từng phần tử trong dữ liệu và cập nhật giao diện
		for (var i = 0; i < notPaidTables.length; i++) {
			var tableId = notPaidTables[i];
			var tableElement = document.getElementById('title-table-' + tableId);
			if (tableElement) {
				tableElement.textContent = 'Bàn ' + tableId + ' chưa thanh toán tiền';
			}
		}
	}
}

// Gọi hàm để cập nhật giao diện sau khi trang được tải lại
window.onload = function () {
	updateNotPaidTables();
};
// Hàm xử lý sự kiện khi click vào nút lắng nghe
function startListening() {
	// Kiểm tra xem trình duyệt hỗ trợ công nghệ nhận dạng giọng nói
	if ('webkitSpeechRecognition' in window) {
		// Tạo đối tượng nhận dạng giọng nói
		var recognition = new webkitSpeechRecognition();
		// Thiết lập ngôn ngữ cho công nghệ nhận dạng giọng nói (nếu cần)
		recognition.lang = 'vi-VN';
		// Bắt đầu lắng nghe
		recognition.start();

		// Xử lý kết quả khi nhận dạng thành công
		recognition.onresult = function (event) {
			var result = event.results[0][0].transcript;
			console.log('Chuỗi giọng nói: ', result); // In ra chuỗi giọng nói
			// Xử lý kết quả nhận dạng giọng nói
			handleVoiceResult(result);

			// Sử dụng Text-to-Speech của Google để đọc lại giọng nói vừa nói
			var speechSynthesis = window.speechSynthesis;
			var utterance = new SpeechSynthesisUtterance(result);
			utterance.lang = 'vi-VN'; // Chuyển đổi sang giọng nói tiếng Việt
			speechSynthesis.speak(utterance);

			// Hiển thị nội dung giọng nói trong thẻ div
			// var speechResultDiv = document.getElementById('speech-result');
			// speechResultDiv.textContent = result;
			// speechResultDiv.classList.remove('hidden');

			// Thiết lập thời gian tự động ẩn div sau 4 giây
			// setTimeout(function () {
			// 	speechResultDiv.classList.add('hidden');
			// }, 4000);
		};

		// Xử lý lỗi khi nhận dạng thất bại
		recognition.onerror = function (event) {
			console.error('Lỗi nhận dạng giọng nói: ', event.error);
		};
	} else {
		console.error('Trình duyệt không hỗ trợ công nghệ nhận dạng giọng nói.');
	}
}

// Hàm xử lý kết quả nhận dạng giọng nói
function handleVoiceResult(result) {
	// Kiểm tra xem kết quả nhận dạng giọng nói có chứa từ "Coca bàn A1" không
	if (result.toLowerCase().includes('coca bàn a1')) {
		// Tăng giá trị của input có id "coke" lên 1
		var cokeInput = document.getElementById('coke');
		cokeInput.value = parseInt(cokeInput.value) + 1;
	}
}// Khi DOM được load hoàn chỉnh
document.addEventListener('DOMContentLoaded', function() {
	const addNoteBtn = document.getElementById('addNoteBtn');
	const noteList = document.getElementById('noteList');
  
	addNoteBtn.addEventListener('click', function() {
	  const note = document.createElement('div');
	  note.className = 'note';
  
	  const input = document.createElement('input');
	  input.type = 'text';
	  input.placeholder = 'Nhập nội dung ghi chú';
	  note.appendChild(input);
  
	  const saveBtn = document.createElement('button');
	  saveBtn.textContent = 'Lưu';
	  note.appendChild(saveBtn);
  
	  saveBtn.addEventListener('click', function() {
		const content = input.value;
		if (content.trim() !== '') {
		  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
		  savedNotes.push(content);
		  localStorage.setItem('notes', JSON.stringify(savedNotes));
		  alert('Đã lưu ghi chú: ' + content);
		  const noteItem = document.createElement('p');
		  noteItem.textContent = content;
		  noteList.appendChild(noteItem);
		  // Thêm sự kiện click vào phần tử p để xóa
		  noteItem.addEventListener('click', function() {
			const index = savedNotes.indexOf(content);
			if (index !== -1) {
			  savedNotes.splice(index, 1);
			  localStorage.setItem('notes', JSON.stringify(savedNotes));
			  alert('Đã xoá ghi chú: ' + content);
			  noteItem.remove();
			  note.remove(); // Xoá class "note" của phần tử div
			}
		  });
		} else {
		  alert('Vui lòng nhập nội dung ghi chú');
		}
	  });
  
	  const noteContainer = document.querySelector('.note-list-items');
	  noteContainer.appendChild(note);
	});
  
	const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
	savedNotes.forEach(function(content) {
	  const noteItem = document.createElement('p');
	  noteItem.textContent = content;
	  noteList.appendChild(noteItem);
	  // Thêm sự kiện click vào phần tử p để xóa
	  noteItem.addEventListener('click', function() {
		const index = savedNotes.indexOf(content);
		if (index !== -1) {
		  savedNotes.splice(index, 1);
		  localStorage.setItem('notes', JSON.stringify(savedNotes));
		  alert('Đã xoá ghi chú: ' + content);
		  noteItem.remove();
		}
	  });
	});
  });// Khi DOM được load hoàn chỉnh
  document.addEventListener('DOMContentLoaded', function() {
	const addNoteBtn = document.getElementById('addNoteBtn');
	const noteList = document.getElementById('noteList');
  
	addNoteBtn.addEventListener('click', function() {
	  const note = document.createElement('div');
	  note.className = 'note';
  
	  const input = document.createElement('input');
	  input.type = 'text';
	  input.placeholder = 'Nhập nội dung ghi chú';
	  note.appendChild(input);
  
	  const saveBtn = document.createElement('button');
	  saveBtn.textContent = 'Lưu';
	  note.appendChild(saveBtn);
  
	  saveBtn.addEventListener('click', function() {
		const content = input.value;
		if (content.trim() !== '') {
		  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
		  savedNotes.push(content);
		  localStorage.setItem('notes', JSON.stringify(savedNotes));
		  alert('Đã lưu ghi chú: ' + content);
		  const noteItem = document.createElement('p');
		  noteItem.textContent = content;
		  noteList.appendChild(noteItem);
		  // Thêm sự kiện click vào phần tử p để xóa
		  noteItem.addEventListener('click', function() {
			const index = savedNotes.indexOf(content);
			if (index !== -1) {
			  savedNotes.splice(index, 1);
			  localStorage.setItem('notes', JSON.stringify(savedNotes));
			  alert('Đã xoá ghi chú: ' + content);
			  noteItem.remove();
			}
		  });
		} else {
		  alert('Vui lòng nhập nội dung ghi chú');
		}
	  });
  
	  const noteContainer = document.querySelector('.note-container');
	  noteContainer.appendChild(note);
	});
  
	const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
	savedNotes.forEach(function(content) {
	  const noteItem = document.createElement('p');
	  noteItem.textContent = content;
	  noteList.appendChild(noteItem);
	  // Thêm sự kiện click vào phần tử p để xóa
	  noteItem.addEventListener('click', function() {
		const index = savedNotes.indexOf(content);
		if (index !== -1) {
		  savedNotes.splice(index, 1);
		  localStorage.setItem('notes', JSON.stringify(savedNotes));
		  alert('Đã xoá ghi chú: ' + content);
		  noteItem.remove();
		}
	  });
	});
  });


function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
	
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();



const openNote = document.querySelector('.open-note')
const showOpenNote = document.querySelector('.cover-popup-note')
const closeNote = document.querySelector('.close-btn-note')
openNote.addEventListener("click",()=>{
	showOpenNote.classList.add('active')
})
closeNote.addEventListener('click',()=>{
	showOpenNote.classList.remove("active")
})

var loader = document.getElementById('loader-website')
window.addEventListener('load',function(){
    loader.style.display = 'none'
})