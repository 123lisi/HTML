//Animal的构造函数
function Animal() {
	// body...
	this.name = "name";
}
//Dog的构造函数
function Dog(){
	this.age = 5;
}
function HabaDog(){
	this.height = 555.555;
}
// 建立原型链 缺点：不能传递参数
Dog.prototype = new Animal();//相当于Dog继承Animal
HabaDog.prototype = new Dog();//相当于HabaDog继承Dog
// 创建Dog的对象
dog1 = new Dog();
console.log(dog1.name);
console.log(dog1.age);
// 创建HabaDog的对象
habadog1 = new HabaDog();
console.log(habadog1.name);
console.log(habadog1.age);
console.log(habadog1.height)

// 第二种继承：对象冒充，借用构造函数 缺点：浪费空间
//Animal的构造函数
function Animal(name) {
	// body...
	this.name = name;
}
//Dog的构造函数
function Dog(name,age){
	this.age = 5;
	Animal.call(this,name);
}
function HabaDog(name,age,height){
	this.height = height;
	Dog.call(this,name,age);
}

//创建对象
var dog1 = new Dog('旺财',5);
console.log(dog1.name);
console.log(dog1.age);
//创建HabaDog对象
var habadog2 = new HabaDog('旺财',5,55.33);
console.log(habadog2.name);
console.log(habadog2.age);
console.log(habadog2.height);

// 3、组合继承(实际场景下使用)
//组合继承 = 原型链 + 对象冒充
//Animal的构造函数
function Animal(name) {
	// body...
	this.name = name;
}
//Dog的构造函数
function Dog(name,age){
	this.age = 5;
	Animal.call(this,name);
}
function HabaDog(name,age,height){
	this.height = height;
	Dog.call(this,name,age);
}
// Dog继承Animal
Dog.prototype = new Animal();
Dog.prototype.info = function(){
	return "name:" + this.name +"; age:" + this.age;
}
var dog1 = new Dog("name",15);
console.log(dog1.info())
// HabaDog继承Dog
HabaDog.prototype = new Dog();
HabaDog.prototype.info = function(){
	return "name:" + this.name + ";age:"+this.age + ";height:" + this.height;
}
//创建HabaDog对象
var habadog1 = new HabaDog('旺财',15,555.33);
console.log(habadog1.info());
