// $(function(){
// 	// 初始化
// 	init();
// 	$("button#button").click(function(){
// 		// 点名/暂停
// 		go();
// 	});
// });

// function init() {
// 	// 设置显示第一个元素
// 	$("span#name").text(names[0]);
// 	console.log($("span#name").text(names[0]));
// 	$("button#button").text("开始");
// 	timer = setInterval(function(){
// 		if(bStart) {
// 			index = Math.floor(Math.random() * names.length);
// 			//index = (index + 1) % names.length;
// 			$("span#name").text(names[index]);
// 		}
// 	},100);
// }

// function go() {
// 	if(bStart) {
// 		$("button#button").text("开始");
// 	} else {
// 		$("button#button").text("停止");
// 	}
// 	bStart = !bStart;
// }

var timer = null; // 定时器ID
var bStart = false; // 开始/暂停标记
var index = 0; // 索引号
var names = [ // 学生数组
"黄梓健",
"李嘉文",
"池国锐",
"李海铭",
"蔡泽强",
"刘杭",
"刘伟星",
"车嘉鸿",
"莫佩良",
"翁满铠",
"吴春诚",
"吴江峰",
"李康宇",
"冼世和",
"陈诗伟",
"肖雄",
"何贵龙",
"陈金潮",
"陈宇鹏",
"李卓霖",
"冯伟强",
"曹广龙",
"陈峰",
"傅皓鸣",
"刘锦轩",
"郭亨宏",
"林智华",
"何钧豪",
"邓祖民",
"刘伟邦",
"卢香凝",
"钱书豪",
"伍翠仪",
"陈志翔",
"黄东",
"朱锦豪",
"区子维",
"杨孟洲",
"黎一兵",
"王夏敏",
"黄耀辉"
];
window.onload = function(){
	var name = document.getElementById('name');
	// console.log(name)
	name.innerHTML = names[0];
	var btn = document.getElementById('button');
	btn.innerHTML = "开始";
	timer = setInterval(function(){
		if(bStart) {
			index = Math.floor(Math.random() * names.length);
			//index = (index + 1) % names.length;
			// $("span#name").text(names[index]);
			name.innerHTML = names[index]
		}
	},100);

};

function go(){
	if (bStart) {
		var btn = document.getElementById('button');
		btn.innerHTML = "开始";
	}else{
		var btn = document.getElementById('button');
		btn.innerHTML = "停止";
	};
	bStart = !bStart;
}





























