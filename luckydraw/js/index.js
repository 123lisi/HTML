window.onload = function() {
	// 找出元素
	plate = document.getElementById("plate");
	hand = document.getElementById("hand");
	// 点击hand
	hand.onclick = function() {
		// 先归0
		plate.style.transform="rotate(0deg)";
		result = price(); // 1~8
		var target = 1440 - 45 * (result - 1);
		// 开始转动
		play(target, result);
	};
};
// 随机产生抽奖的结果
function price() {
	// 随机产生1~8之间的整数
	result = Math.ceil(Math.random() * 8); // 1~8
	return result;
}
// 转动的函数
function play(target, result) {
	var this_turn = 0;
	// 定时器
	var intervalID = setInterval(function(){
		// 希望一开始转的比较快 到最后转的比较慢
		turn = Math.ceil((target - this_turn) / 10);
		this_turn += turn;
		plate.style.transform="rotate(" + this_turn + "deg)";
		if(this_turn >= target) {
			clearInterval(intervalID);
			alert("恭喜抽中" + result + "等奖");
		}
	},100);
}
