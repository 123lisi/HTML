// 构造函数
function Dog(name,age) {
	// body...
	this.name = name;
	this.age = age;
	this.info = function(){
		return this.name +','+ this.age;
	}
}
var dog1 = new Dog("旺财",12);
var dog2 = new Dog("旺财",12);
console.log(dog1);
console.log(dog2);
console.log(dog1.info() == dog2.info());
console.log(dog1.info == dog2.info);
// 饥汉型创建原型
function Cat(name,age) {
	// body...
	this.name = name;
	this.age = age;
}
Cat.prototype ={
	// body...
	constructor:Cat,
	info:function(){return this.name + ","+this.age;}
};

var cat1 = new Cat("牛逼",2);
var cat2 = new Cat("牛逼",2);
console.log(cat1.info());
console.log(cat1.constructor);
console.log(cat1.info == cat2.info);
// 懒汉汉型创建原型
function Baer(name,age){
	this.name = name;
	this.age = age;
	// #为了只创建一次，所以加个判断语句
	if (typeof(Baer.prototype.info) != 'function') {
	Baer.prototype.info = function(){
		return this.name + "," + this.age;
	};
}
}

var bear1 = new Baer("汤姆",2);
var bear2 = new Baer("汤姆",3);
console.log(bear1.info());
console.log(bear2.info());
console.log(bear1.info == bear2.info);
console.log(Baer.prototype.isPrototypeOf(bear1));
console.log("name" in Baer);