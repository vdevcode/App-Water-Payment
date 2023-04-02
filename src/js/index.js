

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
  toggleDrinksButton.textContent = "Đóng hiển thị";
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

function changeMoney() {
	var totalAmount = localStorage.getItem('totalAmount');
	var customerMoney = prompt("Nhập số tiền khách đưa:");
	if (customerMoney == null || customerMoney == "") {
		alert("Bạn chưa nhập số tiền khách đưa");
		return false;
	}
	if (isNaN(customerMoney)) {
		alert("Bạn nhập số tiền không hợp lệ");
		return false;
	}
	var change = customerMoney - totalAmount;
	var message = "Thối lại cho khách: " + change + " VNĐ";
	alert(message);
	localStorage.removeItem('totalAmount');
	document.getElementById("total").innerHTML = "";
	return false;
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

	document.getElementById('bottleTigerBac').value = '0';
	document.getElementById('bottleTigerNau').value = '0';
	document.getElementById('tigerNau').value = '0';
	document.getElementById('tigerBac').value = '0';
	document.getElementById('heineken').value = '0';
	document.getElementById('sevenUp').value = '0';
	document.getElementById('coke').value = '0';
	document.getElementById('pepsi').value = '0';
	document.getElementById('sting').value = '0';
	document.getElementById('water').value = '0';
	document.getElementById('tea').value = '0';
	document.getElementById('napkin').value = '0';


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

//open are 
const openA = document.getElementById('btnA');
const allTable = document.querySelector('.cover-table');
var isKhuOpen = false;
openA.addEventListener('click', () => {
	allTable.classList.toggle('active')
	if (isKhuOpen) {
		openA.innerHTML = 'Đã Đóng Khu A';
		openA.style.backgroundColor = '#e74c3c';
		openA.style.color = 'white';
		isKhuOpen = false;
	}
	else {
		openA.innerHTML = 'Đã Mở Khu A';
		isKhuOpen = true;
		openA.style.backgroundColor = '#2bfea0';
		openA.style.color = 'black';
	}
})

openA.addEventListener('blur', () => {
	if (!isKhuOpen) {
		openA.innerHTML = 'Khu A';
		openA.style.backgroundColor = '#2bfea0';
		openA.style.color = 'black';
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
const  closePayment = document.getElementsByClassName("close-btn-payment")[0];
openPayment.addEventListener('click', () => {
	showPayment.classList.add("active")
	if(showPayment.classList.contains("active")){
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

  input.addEventListener('input', function() {
    const value = parseInt(this.value);
    localStorage.setItem(name, value);
    nuocItem.textContent = value;
  });
});
