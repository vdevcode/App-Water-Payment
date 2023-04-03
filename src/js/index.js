


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




















//all product same
//open are 
const openA = document.getElementById('btnA');
var allTable = document.querySelector('.cover-table');
var isKhuOpen = false;
openA.addEventListener('click', () => {
	allTable.classList.toggle('active')
	if (isKhuOpen) {
		openA.innerHTML = 'Khu A';
		openA.style.backgroundColor ='#2bfea0'
		openA.style.color = 'black';
		isKhuOpen = false;
	}
	else {
		openA.innerHTML = 'Đóng Khu A';
		isKhuOpen = true;

		openA.style.backgroundColor = 'rgb(221, 59, 59)';
		openA.style.color = 'white';
	}
})



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

// Lấy tham chiếu đến các phần tử
var btnB = document.getElementById("btnB");
var coverButtonKhuB = document.querySelector(".cover-button-khuB");
// Thêm sự kiện "click" vào nút "Khu B"
btnB.addEventListener("click", function () {
	if (coverButtonKhuB.style.display === "block") {
		// Nếu phần tử ẩn, thì hiển thị phần tử và đổi nội dung của nút thành "Đóng khu B"
		coverButtonKhuB.style.display = "none";
		btnB.innerHTML = "Khu B";
		btnB.style.backgroundColor ='#2bfea0'
		btnB.style.color = 'black';
	}

	else {
		// Ngược lại, ẩn phần tử và đổi nội dung của nút thành "Khu B"
		coverButtonKhuB.style.display = "block";
		btnB.innerHTML = "Đóng khu B";
		btnB.style.backgroundColor = 'rgb(221, 59, 59)';
		btnB.style.color = 'white';
	}
});







