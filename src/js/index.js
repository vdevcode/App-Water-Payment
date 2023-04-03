


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
		{ name: "Chai Tiger Bạc", quantity: bottleTigerBac },
		{ name: "Chai Tiger Nâu", quantity: bottleTigerNau },
		{ name: "Bia Tiger Nâu", quantity: tigerNau },
		{ name: "Bia Tiger Bạc", quantity: tigerBac },
		{ name: "Bia Heineken", quantity: heineken },
		{ name: "Nước 7up", quantity: sevenUp },
		{ name: "Nước CocaCola", quantity: coke },
		{ name: "Nước pepsi", quantity: pepsi },
		{ name: "Nước Sting", quantity: sting },
		{ name: "Nước suối", quantity: waterNature },
		{ name: "Trà tắc", quantity: tea },
		{ name: "Khăn giấy", quantity: napkin },
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

	const total = (bottleTigerBac * 26000) + (bottleTigerNau * 25000) + (tigerNau * 24000) + (tigerBac * 25000) + (heineken * 26000) + (sevenUp * 18000) + (coke * 18000) + (pepsi * 18000) + (waterNature * 14000) + (sting * 18000) + (tea * 10000) + (napkin * 3000);

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

	const totalA2 = (bottleTigerBacA2 * 26000) + (bottleTigerNauA2 * 25000) + (tigerNauA2 * 24000) + (tigerBacA2 * 25000) + (heinekenA2 * 26000) + (sevenUpA2 * 18000) + (cokeA2 * 18000) + (pepsiA2 * 18000) + (waterNatureA2 * 14000) + (stingA2 * 18000) + (teaA2 * 10000) + (napkinA2 * 3000);

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

	const totalA3 = (bottleTigerBacA3 * 26000) + (bottleTigerNauA3 * 25000) + (tigerNauA3 * 24000) + (tigerBacA3 * 25000) + (heinekenA3 * 26000) + (sevenUpA3 * 18000) + (cokeA3 * 18000) + (pepsiA3 * 18000) + (waterNatureA3 * 14000) + (stingA3 * 18000) + (teaA3 * 10000) + (napkinA3 * 3000);

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

	const totalA4 = (bottleTigerBacA4 * 26000) + (bottleTigerNauA4 * 25000) + (tigerNauA4 * 24000) + (tigerBacA4 * 25000) + (heinekenA4 * 26000) + (sevenUpA4 * 18000) + (cokeA4 * 18000) + (pepsiA4 * 18000) + (waterNatureA4 * 14000) + (stingA4 * 18000) + (teaA4 * 10000) + (napkinA4 * 3000);

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

	const totalA5 = (bottleTigerBacA5 * 26000) + (bottleTigerNauA5 * 25000) + (tigerNauA5 * 24000) + (tigerBacA5 * 25000) + (heinekenA5 * 26000) + (sevenUpA5 * 18000) + (cokeA5 * 18000) + (pepsiA5 * 18000) + (waterNatureA5 * 14000) + (stingA5 * 18000) + (teaA5 * 10000) + (napkinA5 * 3000);

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

	const totalA6 = (bottleTigerBacA6 * 26000) + (bottleTigerNauA6 * 25000) + (tigerNauA6 * 24000) + (tigerBacA6 * 25000) + (heinekenA6 * 26000) + (sevenUpA6 * 18000) + (cokeA6 * 18000) + (pepsiA6 * 18000) + (waterNatureA6 * 14000) + (stingA6 * 18000) + (teaA6 * 10000) + (napkinA6 * 3000);

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

	const totalA7 = (bottleTigerBacA7 * 26000) + (bottleTigerNauA7 * 25000) + (tigerNauA7 * 24000) + (tigerBacA7 * 25000) + (heinekenA7 * 26000) + (sevenUpA7 * 18000) + (cokeA7 * 18000) + (pepsiA7 * 18000) + (waterNatureA7 * 14000) + (stingA7 * 18000) + (teaA7 * 10000) + (napkinA7 * 3000);

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

	const totalB11 = (bottleTigerBacB11 * 26000) + (bottleTigerNauB11 * 25000) + (tigerNauB11 * 24000) + (tigerBacB11 * 25000) + (heinekenB11 * 26000) + (sevenUpB11 * 18000) + (cokeB11 * 18000) + (pepsiB11 * 18000) + (waterNatureB11 * 14000) + (stingB11 * 18000) + (teaB11 * 10000) + (napkinB11 * 3000);

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

	const totalB12 = (bottleTigerBacB12 * 26000) + (bottleTigerNauB12 * 25000) + (tigerNauB12 * 24000) + (tigerBacB12 * 25000) + (heinekenB12 * 26000) + (sevenUpB12 * 18000) + (cokeB12 * 18000) + (pepsiB12 * 18000) + (waterNatureB12 * 14000) + (stingB12 * 18000) + (teaB12 * 10000) + (napkinB12 * 3000);

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

	const totalB13 = (bottleTigerBacB13 * 26000) + (bottleTigerNauB13 * 25000) + (tigerNauB13 * 24000) + (tigerBacB13 * 25000) + (heinekenB13 * 26000) + (sevenUpB13 * 18000) + (cokeB13 * 18000) + (pepsiB13 * 18000) + (waterNatureB13 * 14000) + (stingB13 * 18000) + (teaB13 * 10000) + (napkinB13 * 3000);

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

	const totalB23 = (bottleTigerBacB23 * 26000) + (bottleTigerNauB23 * 25000) + (tigerNauB23 * 24000) + (tigerBacB23 * 25000) + (heinekenB23 * 26000) + (sevenUpB23 * 18000) + (cokeB23 * 18000) + (pepsiB23 * 18000) + (waterNatureB23 * 14000) + (stingB23 * 18000) + (teaB23 * 10000) + (napkinB23 * 3000);

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

	const totalB22 = (bottleTigerBacB22 * 26000) + (bottleTigerNauB22 * 25000) + (tigerNauB22 * 24000) + (tigerBacB22 * 25000) + (heinekenB22 * 26000) + (sevenUpB22 * 18000) + (cokeB22 * 18000) + (pepsiB22 * 18000) + (waterNatureB22 * 14000) + (stingB22 * 18000) + (teaB22 * 10000) + (napkinB22 * 3000);

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

	const totalB21 = (bottleTigerBacB21 * 26000) + (bottleTigerNauB21 * 25000) + (tigerNauB21 * 24000) + (tigerBacB21 * 25000) + (heinekenB21 * 26000) + (sevenUpB21 * 18000) + (cokeB21 * 18000) + (pepsiB21 * 18000) + (waterNatureB21 * 14000) + (stingB21 * 18000) + (teaB21 * 10000) + (napkinB21 * 3000);

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

	const totalB31 = (bottleTigerBacB31 * 26000) + (bottleTigerNauB31 * 25000) + (tigerNauB31 * 24000) + (tigerBacB31 * 25000) + (heinekenB31 * 26000) + (sevenUpB31 * 18000) + (cokeB31 * 18000) + (pepsiB31 * 18000) + (waterNatureB31 * 14000) + (stingB31 * 18000) + (teaB31 * 10000) + (napkinB31 * 3000);

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

	const totalB32 = (bottleTigerBacB32 * 26000) + (bottleTigerNauB32 * 25000) + (tigerNauB32 * 24000) + (tigerBacB32 * 25000) + (heinekenB32 * 26000) + (sevenUpB32 * 18000) + (cokeB32 * 18000) + (pepsiB32 * 18000) + (waterNatureB32 * 14000) + (stingB32 * 18000) + (teaB32 * 10000) + (napkinB32 * 3000);

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

//B4/2

//B4/2
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

	const totalB42 = (bottleTigerBacB42 * 26000) + (bottleTigerNauB42 * 25000) + (tigerNauB42 * 24000) + (tigerBacB42 * 25000) + (heinekenB42 * 26000) + (sevenUpB42 * 18000) + (cokeB42 * 18000) + (pepsiB42 * 18000) + (waterNatureB42 * 14000) + (stingB42 * 18000) + (teaB42 * 10000) + (napkinB42 * 3000);

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

	const totalB51 = (bottleTigerBacB51 * 26000) + (bottleTigerNauB51 * 25000) + (tigerNauB51 * 24000) + (tigerBacB51 * 25000) + (heinekenB51 * 26000) + (sevenUpB51 * 18000) + (cokeB51 * 18000) + (pepsiB51 * 18000) + (waterNatureB51 * 14000) + (stingB51 * 18000) + (teaB51 * 10000) + (napkinB51 * 3000);

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

	const totalB53 = (bottleTigerBacB53 * 26000) + (bottleTigerNauB53 * 25000) + (tigerNauB53 * 24000) + (tigerBacB53 * 25000) + (heinekenB53 * 26000) + (sevenUpB53 * 18000) + (cokeB53 * 18000) + (pepsiB53 * 18000) + (waterNatureB53 * 14000) + (stingB53 * 18000) + (teaB53 * 10000) + (napkinB53 * 3000);

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

	const totalB52 = (bottleTigerBacB52 * 26000) + (bottleTigerNauB52 * 25000) + (tigerNauB52 * 24000) + (tigerBacB52 * 25000) + (heinekenB52 * 26000) + (sevenUpB52 * 18000) + (cokeB52 * 18000) + (pepsiB52 * 18000) + (waterNatureB52 * 14000) + (stingB52 * 18000) + (teaB52 * 10000) + (napkinB52 * 3000);

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

	const totalC11 = (bottleTigerBacC11 * 26000) + (bottleTigerNauC11 * 25000) + (tigerNauC11 * 24000) + (tigerBacC11 * 25000) + (heinekenC11 * 26000) + (sevenUpC11 * 18000) + (cokeC11 * 18000) + (pepsiC11 * 18000) + (waterNatureC11 * 14000) + (stingC11 * 18000) + (teaC11 * 10000) + (napkinC11 * 3000);

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

	const totalC12 = (bottleTigerBacC12 * 26000) + (bottleTigerNauC12 * 25000) + (tigerNauC12 * 24000) + (tigerBacC12 * 25000) + (heinekenC12 * 26000) + (sevenUpC12 * 18000) + (cokeC12 * 18000) + (pepsiC12 * 18000) + (waterNatureC12 * 14000) + (stingC12 * 18000) + (teaC12 * 10000) + (napkinC12 * 3000);

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

	const totalC13 = (bottleTigerBacC13 * 26000) + (bottleTigerNauC13 * 25000) + (tigerNauC13 * 24000) + (tigerBacC13 * 25000) + (heinekenC13 * 26000) + (sevenUpC13 * 18000) + (cokeC13 * 18000) + (pepsiC13 * 18000) + (waterNatureC13 * 14000) + (stingC13 * 18000) + (teaC13 * 10000) + (napkinC13 * 3000);

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

	const totalC21 = (bottleTigerBacC21 * 26000) + (bottleTigerNauC21 * 25000) + (tigerNauC21 * 24000) + (tigerBacC21 * 25000) + (heinekenC21 * 26000) + (sevenUpC21 * 18000) + (cokeC21 * 18000) + (pepsiC21 * 18000) + (waterNatureC21 * 14000) + (stingC21 * 18000) + (teaC21 * 10000) + (napkinC21 * 3000);

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

	const totalC22 = (bottleTigerBacC22 * 26000) + (bottleTigerNauC22 * 25000) + (tigerNauC22 * 24000) + (tigerBacC22 * 25000) + (heinekenC22 * 26000) + (sevenUpC22 * 18000) + (cokeC22 * 18000) + (pepsiC22 * 18000) + (waterNatureC22 * 14000) + (stingC22 * 18000) + (teaC22 * 10000) + (napkinC22 * 3000);

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

	const totalC23 = (bottleTigerBacC23 * 26000) + (bottleTigerNauC23 * 25000) + (tigerNauC23 * 24000) + (tigerBacC23 * 25000) + (heinekenC23 * 26000) + (sevenUpC23 * 18000) + (cokeC23 * 18000) + (pepsiC23 * 18000) + (waterNatureC23 * 14000) + (stingC23 * 18000) + (teaC23 * 10000) + (napkinC23 * 3000);

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

	const totalC31 = (bottleTigerBacC31 * 26000) + (bottleTigerNauC31 * 25000) + (tigerNauC31 * 24000) + (tigerBacC31 * 25000) + (heinekenC31 * 26000) + (sevenUpC31 * 18000) + (cokeC31 * 18000) + (pepsiC31 * 18000) + (waterNatureC31 * 14000) + (stingC31 * 18000) + (teaC31 * 10000) + (napkinC31 * 3000);

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

	const totalC32 = (bottleTigerBacC32 * 26000) + (bottleTigerNauC32 * 25000) + (tigerNauC32 * 24000) + (tigerBacC32 * 25000) + (heinekenC32 * 26000) + (sevenUpC32 * 18000) + (cokeC32 * 18000) + (pepsiC32 * 18000) + (waterNatureC32 * 14000) + (stingC32 * 18000) + (teaC32 * 10000) + (napkinC32 * 3000);

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

	const totalC33 = (bottleTigerBacC33 * 26000) + (bottleTigerNauC33 * 25000) + (tigerNauC33 * 24000) + (tigerBacC33 * 25000) + (heinekenC33 * 26000) + (sevenUpC33 * 18000) + (cokeC33 * 18000) + (pepsiC33 * 18000) + (waterNatureC33 * 14000) + (stingC33 * 18000) + (teaC33 * 10000) + (napkinC33 * 3000);

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

	const totalC41 = (bottleTigerBacC41 * 26000) + (bottleTigerNauC41 * 25000) + (tigerNauC41 * 24000) + (tigerBacC41 * 25000) + (heinekenC41 * 26000) + (sevenUpC41 * 18000) + (cokeC41 * 18000) + (pepsiC41 * 18000) + (waterNatureC41 * 14000) + (stingC41 * 18000) + (teaC41 * 10000) + (napkinC41 * 3000);

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

	const totalC42 = (bottleTigerBacC42 * 26000) + (bottleTigerNauC42 * 25000) + (tigerNauC42 * 24000) + (tigerBacC42 * 25000) + (heinekenC42 * 26000) + (sevenUpC42 * 18000) + (cokeC42 * 18000) + (pepsiC42 * 18000) + (waterNatureC42 * 14000) + (stingC42 * 18000) + (teaC42 * 10000) + (napkinC42 * 3000);

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

	const totalC43 = (bottleTigerBacC43 * 26000) + (bottleTigerNauC43 * 25000) + (tigerNauC43 * 24000) + (tigerBacC43 * 25000) + (heinekenC43 * 26000) + (sevenUpC43 * 18000) + (cokeC43 * 18000) + (pepsiC43 * 18000) + (waterNatureC43 * 14000) + (stingC43 * 18000) + (teaC43 * 10000) + (napkinC43 * 3000);

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

	const totalC51 = (bottleTigerBacC51 * 26000) + (bottleTigerNauC51 * 25000) + (tigerNauC51 * 24000) + (tigerBacC51 * 25000) + (heinekenC51 * 26000) + (sevenUpC51 * 18000) + (cokeC51 * 18000) + (pepsiC51 * 18000) + (waterNatureC51 * 14000) + (stingC51 * 18000) + (teaC51 * 10000) + (napkinC51 * 3000);

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

	const totalC52 = (bottleTigerBacC52 * 26000) + (bottleTigerNauC52 * 25000) + (tigerNauC52 * 24000) + (tigerBacC52 * 25000) + (heinekenC52 * 26000) + (sevenUpC52 * 18000) + (cokeC52 * 18000) + (pepsiC52 * 18000) + (waterNatureC52 * 14000) + (stingC52 * 18000) + (teaC52 * 10000) + (napkinC52 * 3000);

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

	const totalE11 = (bottleTigerBacE11 * 26000) + (bottleTigerNauE11 * 25000) + (tigerNauE11 * 24000) + (tigerBacE11 * 25000) + (heinekenE11 * 26000) + (sevenUpE11 * 18000) + (cokeE11 * 18000) + (pepsiE11 * 18000) + (waterNatureE11 * 14000) + (stingE11 * 18000) + (teaE11 * 10000) + (napkinE11 * 3000);

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

	const totalE12 = (bottleTigerBacE12 * 26000) + (bottleTigerNauE12 * 25000) + (tigerNauE12 * 24000) + (tigerBacE12 * 25000) + (heinekenE12 * 26000) + (sevenUpE12 * 18000) + (cokeE12 * 18000) + (pepsiE12 * 18000) + (waterNatureE12 * 14000) + (stingE12 * 18000) + (teaE12 * 10000) + (napkinE12 * 3000);

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

	const totalE13 = (bottleTigerBacE13 * 26000) + (bottleTigerNauE13 * 25000) + (tigerNauE13 * 24000) + (tigerBacE13 * 25000) + (heinekenE13 * 26000) + (sevenUpE13 * 18000) + (cokeE13 * 18000) + (pepsiE13 * 18000) + (waterNatureE13 * 14000) + (stingE13 * 18000) + (teaE13 * 10000) + (napkinE13 * 3000);

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

	const totalE14 = (bottleTigerBacE14 * 26000) + (bottleTigerNauE14 * 25000) + (tigerNauE14 * 24000) + (tigerBacE14 * 25000) + (heinekenE14 * 26000) + (sevenUpE14 * 18000) + (cokeE14 * 18000) + (pepsiE14 * 18000) + (waterNatureE14 * 14000) + (stingE14 * 18000) + (teaE14 * 10000) + (napkinE14 * 3000);

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

	const totalE21 = (bottleTigerBacE21 * 26000) + (bottleTigerNauE21 * 25000) + (tigerNauE21 * 24000) + (tigerBacE21 * 25000) + (heinekenE21 * 26000) + (sevenUpE21 * 18000) + (cokeE21 * 18000) + (pepsiE21 * 18000) + (waterNatureE21 * 14000) + (stingE21 * 18000) + (teaE21 * 10000) + (napkinE21 * 3000);

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

	const totalE22 = (bottleTigerBacE22 * 26000) + (bottleTigerNauE22 * 25000) + (tigerNauE22 * 24000) + (tigerBacE22 * 25000) + (heinekenE22 * 26000) + (sevenUpE22 * 18000) + (cokeE22 * 18000) + (pepsiE22 * 18000) + (waterNatureE22 * 14000) + (stingE22 * 18000) + (teaE22 * 10000) + (napkinE22 * 3000);

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


//Khu B
//B1
// Tìm đến nút Bàn B1
var btnB1 = document.getElementById("btnB1");

// Tìm đến phần tử <div class="cover-table-B"></div>
var coverTableB1 = document.querySelector(".cover-table-B1");

// Thêm sự kiện click cho nút Bàn B1
btnB1.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableB1.classList.toggle("active");

	// Thay đổi văn bản của nút
	if (btnB1.innerHTML === "Bàn B1") {
		btnB1.innerHTML = "Đóng bàn B1";
		btnB1.style.backgroundColor = 'rgb(222, 59, 59)';
		btnB1.style.color = 'white';
	} else {
		btnB1.innerHTML = "Bàn B1";
		btnB1.style.backgroundColor = 'yellow';
		btnB1.style.color = 'black';
	}
});

var btnB2 = document.getElementById("btnB2");

// Tìm đến phần tử <div class="cover-table-B"></div>
var coverTableB2 = document.querySelector(".cover-table-B2");

// Thêm sự kiện click cho nút Bàn B1
btnB2.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableB2.classList.toggle("active");

	// Thay đổi văn bản của nút
	if (btnB2.innerHTML === "Bàn B2") {
		btnB2.innerHTML = "Đóng bàn B2";
		btnB2.style.backgroundColor = 'rgb(222, 59, 59)';
		btnB2.style.color = 'white';
	} else {
		btnB2.innerHTML = "Bàn B2";
		btnB2.style.backgroundColor = 'yellow';
		btnB2.style.color = 'black';
	}
});



var btnB3 = document.getElementById("btnB3");

// Tìm đến phần tử <div class="cover-table-B"></div>
var coverTableB3 = document.querySelector(".cover-table-B3");

// Thêm sự kiện click cho nút Bàn B1
btnB3.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableB3.classList.toggle("active");

	// Thay đổi văn bản của nút
	if (btnB3.innerHTML === "Bàn B3") {
		btnB3.innerHTML = "Đóng bàn B3";
		btnB3.style.backgroundColor = 'rgb(222, 59, 59)';
		btnB3.style.color = 'white';
	} else {
		btnB3.innerHTML = "Bàn B3";
		btnB3.style.backgroundColor = 'yellow';
		btnB3.style.color = 'black';
	}
});

var btnB4 = document.getElementById("btnB4");

// Tìm đến phần tử <div class="cover-table-B"></div>
var coverTableB4 = document.querySelector(".cover-table-B4");

// Thêm sự kiện click cho nút Bàn B1
btnB4.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableB4.classList.toggle("active");

	// Thay đổi văn bản của nút
	if (btnB4.innerHTML === "Bàn B4") {
		btnB4.innerHTML = "Đóng bàn B4";
		btnB4.style.backgroundColor = 'rgb(222, 59, 59)';
		btnB4.style.color = 'white';
	} else {
		btnB4.innerHTML = "Bàn B4";
		btnB4.style.backgroundColor = 'yellow';
		btnB4.style.color = 'black';
	}
});

var btnB5 = document.getElementById("btnB5");

// Tìm đến phần tử <div class="cover-table-B"></div>
var coverTableB5 = document.querySelector(".cover-table-B5");

// Thêm sự kiện click cho nút Bàn B1
btnB5.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableB5.classList.toggle("active");

	// Thay đổi văn bản của nút
	if (btnB5.innerHTML === "Bàn B5") {
		btnB5.innerHTML = "Đóng bàn B5";
		btnB5.style.backgroundColor = 'rgb(222, 59, 59)';
		btnB5.style.color = 'white';
	} else {
		btnB5.innerHTML = "Bàn B5";
		btnB5.style.backgroundColor = 'yellow';
		btnB5.style.color = 'black';
	}
});


var btnC1 = document.getElementById("btnC1");

// Tìm đến phần tử <div class="cover-table-B"></div>
var coverTableC1 = document.querySelector(".cover-table-C1");

// Thêm sự kiện click cho nút Bàn B1
btnC1.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableC1.classList.toggle("active");

	// Thay đổi văn bản của nút
	if (btnC1.innerHTML === "Bàn C1") {
		btnC1.innerHTML = "Đóng bàn C1";
		btnC1.style.backgroundColor = 'rgb(222, 59, 59)';
		btnC1.style.color = 'white';
	} else {
		btnC1.innerHTML = "Bàn C1";
		btnC1.style.backgroundColor = 'rgb(39, 154, 236)';
		btnC1.style.color = 'white';
	}
});



var btnC3 = document.getElementById("btnC3");

// Tìm đến phần tử <div class="cover-table-C"></div>
var coverTableC3 = document.querySelector(".cover-table-C3");

// Thêm sự kiện click cho nút Bàn C2
btnC3.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableC3.classList.toggle("active");

	// Thay đổi văn bản của nút
	if (btnC3.innerHTML === "Bàn C3") {
		btnC3.innerHTML = "Đóng bàn C3";
		btnC3.style.backgroundColor = 'rgb(222, 59, 59)';
		btnC3.style.color = 'white';
	} else {
		btnC3.innerHTML = "Bàn C3";
		btnC3.style.backgroundColor = 'rgb(39, 154, 236)'
		btnC3.style.color = 'white';
	}
});

var btnC5 = document.getElementById("btnC5");

// Tìm đến phần tử <div class="cover-table-C"></div>
var coverTableC5 = document.querySelector(".cover-table-C5");

// Thêm sự kiện click cho nút Bàn C2
btnC5.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableC5.classList.toggle("active");

	// Thay đổi văn bản của nút
	if (btnC5.innerHTML === "Bàn C5") {
		btnC5.innerHTML = "Đóng bàn C5";
		btnC5.style.backgroundColor = 'rgb(222, 59, 59)';
		btnC5.style.color = 'white';
	} else{
		btnC5.innerHTML = "Bàn C5";
		btnC5.style.backgroundColor = 'rgb(39, 154, 236)'
		btnC5.style.color = 'white';
	}
});

var btnC4 = document.getElementById("btnC4");

// Tìm đến phần tử <div class="cover-table-C"></div>
var coverTableC4 = document.querySelector(".cover-table-C4");

// Thêm sự kiện click cho nút Bàn C2
btnC4.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableC4.classList.toggle("active");

	// Thay đổi văn bản của nút
	if (btnC4.innerHTML === "Bàn C4") {
		btnC4.innerHTML = "Đóng bàn C4";
		btnC4.style.backgroundColor = 'rgb(222, 59, 59)';
		btnC4.style.color = 'white';
	} else {
		btnC4.innerHTML = "Bàn C4";
		btnC4.style.backgroundColor = 'rgb(39, 154, 236)'
		btnC4.style.color = 'white';
	}
});



var btnE1 = document.getElementById("btnE1");

// Tìm đến phần tử <div class="cover-table-C"></div>
var coverTableE1 = document.querySelector(".cover-table-E1");

// Thêm sự kiện click cho nút Bàn C2
btnE1.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableE1.classList.toggle("active");

	// Thay đổi văn bản của nút
	if (btnE1.innerHTML === "Bàn E1") {
		btnE1.innerHTML = "Đóng bàn E1";
		btnE1.style.backgroundColor = 'rgb(106, 78, 217)'
		btnE1.style.color = 'white';
	} else {
		btnE1.innerHTML = "Bàn E1";
		btnE1.style.backgroundColor = 'rgb(177, 35, 213);'
		btnE1.style.color = 'white';
	}
});

var btnE2 = document.getElementById("btnE2");

// Tìm đến phần tử <div class="cover-table-C"></div>
var coverTableE2 = document.querySelector(".cover-table-E2");

// Thêm sự kiện click cho nút Bàn C2
btnE2.addEventListener("click", function () {
	// Thay đổi thuộc tính display của phần tử <div class="cover-table-B"></div>
	coverTableE2.classList.toggle("active");

	// Thay đổi văn bản của nút
	if (btnE2.innerHTML === "Bàn E2") {
		btnE2.innerHTML = "Đóng bàn E2";
		btnE2.style.backgroundColor = 'rgb(106, 78, 217)'
		btnE2.style.color = 'white';
	} else {
		btnE2.innerHTML = "Bàn E2";
		btnE2.style.backgroundColor = 'rgb(177, 35, 213);'
		btnE2.style.color = 'white';
	}
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



//all product same
//open are 
const openA = document.getElementById('btnA');
var allTable = document.querySelector('.cover-table');
var isKhuOpen = false;
openA.addEventListener('click', () => {
	allTable.classList.toggle('active')
	if (isKhuOpen) {
		openA.innerHTML = 'Khu A';
		openA.style.backgroundColor = '#2bfea0'
		openA.style.color = 'black';
		isKhuOpen = false;
	}
	else {
		openA.innerHTML = 'Đóng Khu A';
		isKhuOpen = true;

		openA.style.backgroundColor = 'rgb(222, 59, 59)';
		openA.style.color = 'white';
	}
})



// Lấy tham chiếu đến các phần tử
var btnB = document.getElementById("btnB");
var coverButtonKhuB = document.querySelector(".cover-button-khuB");
// Thêm sự kiện "click" vào nút "Khu B"
btnB.addEventListener("click", function () {
	if (coverButtonKhuB.style.display === "block") {
		// Nếu phần tử ẩn, thì hiển thị phần tử và đổi nội dung của nút thành "Đóng khu B"
		coverButtonKhuB.style.display = "none";
		btnB.innerHTML = "Khu B";
		btnB.style.backgroundColor = '#2bfea0'
		btnB.style.color = 'black';
	}

	else {
		// Ngược lại, ẩn phần tử và đổi nội dung của nút thành "Khu B"
		coverButtonKhuB.style.display = "block";
		btnB.innerHTML = "Đóng khu B";
		btnB.style.backgroundColor = 'rgb(222, 59, 59)';
		btnB.style.color = 'white';
	}
});

// Lấy tham chiếu đến các phần tử
var btnC = document.getElementById("btnC");
var coverButtonKhuC = document.querySelector(".cover-button-khuC");
// Thêm sự kiện "click" vào nút "Khu B"
btnC.addEventListener("click", function () {
	if (coverButtonKhuC.style.display === "block") {
		// Nếu phần tử ẩn, thì hiển thị phần tử và đổi nội dung của nút thành "Đóng khu B"
		coverButtonKhuC.style.display = "none";
		btnC.innerHTML = "Khu C";
		btnC.style.backgroundColor = '#2bfea0'
		btnC.style.color = 'black';
	}

	else {
		// Ngược lại, ẩn phần tử và đổi nội dung của nút thành "Khu B"
		coverButtonKhuC.style.display = "block";
		btnC.innerHTML = "Đóng khu C";
		btnC.style.backgroundColor = 'rgb(222, 59, 59)';
		btnC.style.color = 'white';
	}
});

// Lấy tham chiếu đến các phần tử
var btnD = document.getElementById("btnD");
var coverButtonKhuD = document.querySelector(".cover-button-khuD");
// Thêm sự kiện "click" vào nút "Khu D"
btnD.addEventListener("click", function () {
	if (coverButtonKhuD.style.display === "block") {
		// Nếu phần tử ẩn, thì hiển thị phần tử và đổi nội dung của nút thành "Đóng khu B"
		coverButtonKhuD.style.display = "none";
		btnD.innerHTML = "Khu Đỗ Xe";
		btnD.style.backgroundColor = '#2bfea0'
		btnD.style.color = 'black';
	}

	else {
		// Ngược lại, ẩn phần tử và đổi nội dung của nút thành "Khu B"
		coverButtonKhuD.style.display = "block";
		btnD.innerHTML = "Đóng khu Đỗ Xe";
		btnD.style.backgroundColor = 'rgb(222, 59, 59)';
		btnD.style.color = 'white';
	}
});

var btnE = document.getElementById("btnE");
var coverButtonKhuE = document.querySelector(".cover-button-khuE");
// Thêm sự kiện "click" vào nút "Khu D"
btnE.addEventListener("click", function () {
	if (coverButtonKhuE.style.display === "block") {
		// Nếu phần tử ẩn, thì hiển thị phần tử và đổi nội dung của nút thành "Đóng khu B"
		coverButtonKhuE.style.display = "none";
		btnE.innerHTML = "Khu E";
		btnE.style.backgroundColor = '#2bfea0'
		btnE.style.color = 'black';
	}

	else {
		// Ngược lại, ẩn phần tử và đổi nội dung của nút thành "Khu B"
		coverButtonKhuE.style.display = "block";
		btnE.innerHTML = "Đóng khu E";
		btnE.style.backgroundColor = 'rgb(222, 59, 59)';
		btnE.style.color = 'white';
	}
});





