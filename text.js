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