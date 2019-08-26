window.onload = function () {
	// body...
	var div1 = document.getElementById("div1");
	// console.log(div)
	// #移入
	div1.onmouseover= function(){
		div1.style.width = "20px";
		// style.width
		div1.style.backgroundColor = "red";
	}
	//移出
	div1.onmouseleave =function(){
		console.log(11);
		div1.style.backgroundColor = "yellow";
	}
	//点下
	div1.onmousedown = function(ev){
		div1.style.backgroundColor = "black";

	}
	div1.onmouseup = function(ev){
		div1.style.backgroundColor = "blue";

	}

}