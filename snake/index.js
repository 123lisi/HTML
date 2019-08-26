// 全局变量
box = 15; // 一个格子的宽度是多少个像素
width = 20; // 区域内的宽度
height = 20; // 区域内的高度
foodPos = {x:0, y:0}; // 食物的位置
snakeHeadPos = {x:0, y:0}; // 蛇头的位置
snakeTailArray = []; // 蛇尾的数组
speed = 300; // 蛇走动的速度 0.5秒
direction = "right"; // 蛇走动的方向
$(document).ready(function() {
	// 初始化定时器
	initTimer();
	// 初始化食物的位置 
    initFoodPos();
	// 设置button点击事件
	initEvent();
});
// 设置事件，包括button点击、手指滑动等
function initEvent() {
	// 按钮点击事件
	$("#up").click(function(){
		direction = "up";
	});
	$("#down").click(function(){
		direction = "down";
	});
	$("#left").click(function(){
		direction = "left";
	});
	$("#right").click(function(){
		direction = "right";
	});
	// swipe手指滑动事件
	$(document).swipe({
		// 当手指滑动时，调用该函数
		swipe:function(event, dir, distance, duration, fingerCount, fingerData){
			direction = dir;
		}
	});
}
// 初始化定时器
function initTimer() {
	var timer = setInterval(function(){
		// 把蛇头的坐标添加到蛇尾的数组中
		// 注意：snakeHeadPos随时会改变 所以考虑把当前的snakeHeadPos拷贝一份，再放进蛇尾数组中
		var pos = {x:snakeHeadPos.x, y:snakeHeadPos.y};
		snakeTailArray.push(pos);
		// 把新添加到蛇尾的坐标显示出来
		var tail = $("<div class='snaketail'>");
		tail.css({
			"left": snakeHeadPos.x*box,
			"top": snakeHeadPos.y*box
		});
		tail.attr({
			"id":pos.x+"_"+pos.y,
		});
		$("#mainBox").append(tail);
		// 时间到的时候执行的函数
		console.log("time up");
		// 根据direction方向更改蛇头的位置
		if(direction == "right") {
			snakeHeadPos.x++;
		}else if(direction == "left") {
			snakeHeadPos.x--;
		}else if(direction == "up") {
			snakeHeadPos.y--;
		}else if(direction == "down") {
			snakeHeadPos.y++;
		}		
		// 更新蛇头的位置
		updateSnakeHeadPos();
		// 进行游戏是否结束的判断
		if(snakeHeadPos.x >= width ||
				snakeHeadPos.x < 0 ||
				snakeHeadPos.y >= height ||
				snakeHeadPos.y < 0) {
			// 取消定时器
			clearInterval(timer);
			alert('游戏结束');
		}
		// 判断蛇头是否吃了食物
		if(snakeHeadPos.x == foodPos.x && snakeHeadPos.y == foodPos.y) {
			// 更新食物的位置
			initFoodPos();
		} else {
			// 蛇尾最后一个框从数组中删除
			var out = snakeTailArray.shift();
			var tmp = "#"+out.x+"_"+out.y;
			// 把最后一个框的颜色变回原样
			$(tmp).remove();
		}
	}, speed);
}
// 更新蛇头的位置
function updateSnakeHeadPos() {
	$(".snakehead").css({
		"left":snakeHeadPos.x*box,
		"top":snakeHeadPos.y*box
	});
}
// 初始化食物的位置 
function initFoodPos() {
	var x = Math.floor(Math.random() * 20);
	var y = Math.floor(Math.random() * 20);
	foodPos.x = x;
	foodPos.y = y;
	$(".food").css({
		"left":foodPos.x*box,
		"top":foodPos.y*box
	});
}
