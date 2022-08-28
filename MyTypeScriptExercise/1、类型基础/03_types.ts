

/* 5、object类型：表示一个js对象 */
//?　实际上不怎么实用，因为JS中对象的类型太多了
//?　   用的更多的实际上是限制对象类名包含哪些属性，像objectVar2
        //?　限制对象的同时，还限制了它一定得有一个name:string属性
        // 语法：1、let a = { 属性名:属性值/类型 , 可选属性名?:属性值/类型 }
        //       2、let a = { id:string , [propertyName:string]:any }
        //       表示id必传，有任意属性


let objectVar : object;
objectVar = {}
objectVar = function (){}

let objectVar2 : { name:string }
objectVar2 = {}


// 限制函数对象 const functionVar = Function
//  实际上更常用的写法是：使用类似箭头函数的声明
let functionVar : Function;
functionVar = function(){}

let functionVar2 : (a:number , b:string) => number;
functionVar2 = function(a:number,b:string){
    return 0
}


/* 6、array类型 */
// 语法：let a:类型[]  或  let a:Array<类型>
let arrayVar1 :string[]
let arrayVar2 :Array<number>


/* 7、tuple元组类型, 固定长度数组, 多或少都不行 */
let tupleVar1 : [string ,string]



/* 8、enum枚举类型 */
enum Gender {
    Male,      //TS会自动分配第一个的值为0
    Female     //当然也可以手动指定所有值,Male = 1 或 Male = "男",Female = "女"
}
const wukong : { name:string , gender: number } = {
    name:'wukong',
    gender:0
}
console.log(wukong.gender === Gender.Male);     //true