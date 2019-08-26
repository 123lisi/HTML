window.onload = function () {
	// body...
	var city = document.getElementById("city");
	var area = document.getElementById("area");
	var jiedao = document.getElementById("jiedao");
	// console.log(city)
	// var ops = set.getElementsByTagName('option');
	//当id="city"的标签内的内容发生改变时，执行里面的内容
	city.onchange = function(){
		// console.log(set.value);
		switch(city.value){
			case 'gz':
			// console.log(11);
			area.innerHTML ='<option >--请选择区域--</option><option value="th">天河</option><option value="hp">黄埔</option><option value="py">番禺</option>';
			area.onchange = function(){
				switch(area.value){
					case 'th':
					jiedao.innerHTML = '<option >--请选择街道--</option><option value="tx">棠下</option><option value="ds">大石</option><option value="cb">车陂</option>';
					break;
				}

			};
			break;
			case 'sz':
			// console.log(11);
			area.innerHTML ='<option value="gz">保安</option><option value="sz">立交</option><option value="sz">六区</option>';
			break;
			case 'bj':
			// console.log(11);
			area.innerHTML ='<option value="gz">天安门</option><option value="sz">沪北</option><option value="sz">傻逼</option>';
			break;

		}
	}
}