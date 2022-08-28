// 声明一个变量a，同时指定它的类型为number
var a;
// a的类型为number，以后的使用过程中只能为数值型
a = 10;
a = 33;
// a = 'hello' //Error:不能将类型“string”分配给类型“number
/* 声明完变量直接赋值 */
var b = 'hello';
// b = 123
// let c: boolean = true
/**
 * * 如果声明同时赋值，ts会自动进行类型检测 *
 */
var c = true;
// c = 123  //报错
// 类型检测最大的好处就是函数
// JavaScript中的函数是不考虑形参的类型和个数
function sum(a, b) {
    return a + b;
}
var result = sum(123, 456);
// sum(123,'555',55)  //报错
