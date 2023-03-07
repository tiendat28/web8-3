

function checkLogin() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (username === "châu không gầy" && password === "chauxinhkhongbeo") {
		window.location.href = "index.html?name=chau";
	}
	else if (username === "boss xinh đẹp" && password === "dungnhansaicai") {
		window.location.href = "index.html?name=sepquynh";
	}
	else if (username === "thư bìm bịp" && password === "dungnhansaicai") {
		window.location.href = "index.html?name=thubip";
	}
	else if (username === "trang ngố" && password === "dungnhansaicai") {
		window.location.href = "index.html?name=trangluytinh";
	}
	else if (username === "huyền xinh gái" && password === "loveyou") {
		window.location.href = "index.html?name=huyenxinhgai";
	}
	else if (username === "hiền ngáo đá" && password === "dungnhansaicai") {
		window.location.href = "index.html?name=hien";
	}
	else if (username === "chị trang xinh gái" && password === "dungnhansaicai") {
		window.location.href = "index.html?name=chitrang";
	}
	else if (username === "bich xinh gái" && password === "dungnhansaicai") {
		window.location.href = "index.html?name=bich";
	}
	else if (username === "hạnh đáng yêu" && password === "dungnhansaicai") {
		window.location.href = "index.html?name=hanh";
	}
	else if (username === "minh anh xinh gái" && password === "dungnhansaicai") {
		window.location.href = "index.html?name=minhanh";
	}
	else {
		alert("Sai tên đăng nhập hoặc mật khẩu!");
	}
}
