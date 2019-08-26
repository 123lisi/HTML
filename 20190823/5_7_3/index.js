window.onload = function() {
	var city = document.getElementById('city');
	var area = document.getElementById('area');

	city.onchange = function() {
		//console.log(city.value);
		switch(city.value) {
			case 'gz':
				area.innerHTML = '<option>天河</option><option>海珠</option><option>越秀</option>';
				break;
			case 'sz':
				area.innerHTML = '<option>龙岗</option><option>南山</option><option>保安</option>';
				break;
			case 'zh':
				area.innerHTML = '<option>拱北</option><option>香洲</option><option>横琴</option>';
				break;
		}
	};
};






