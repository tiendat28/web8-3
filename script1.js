

function checkLogin() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (username === "châu không gầy " && password === "chauxinhkhongbeo") {
		window.location.href = "index.html";
	} else {
		alert("Sai tên đăng nhập hoặc mật khẩu!");
	}
}
