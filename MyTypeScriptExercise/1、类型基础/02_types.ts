/* 除了number string 和boolean类型，还有以下类型： */
// 可以使用或  |  来联合类型
let complexTypeVar : boolean | string
complexTypeVar = "11"
complexTypeVar = false

// 也可以使用且  &  来联合类型，一般用到连接对象，同时满足含有多个属性
let unionObject : {name:string} & {age:number};
unionObject = {
    name:'孙悟空',
    age:18
}

/* 类型别名 */
// let typeAliasVar1 : 1|2|3|4|5;   //多麻烦
// let typeAliasVar2 : 1|2|3|4|5;
type myStringType = string
type my12345Type = 1|2|3|4|5
let typeAliasVar1 : my12345Type
let typeAliasVar2 : my12345Type
let typeAliasVar3 : myStringType  //相当于 typeAliasVar3:string





/* 1、字面量：直接使用字面量赋值，有点类似于常量 */
let gender : 'male' | 'female' | 1

/* 2、any：任意类型，可任意赋值，相当于原生JS了 */
// 设置any相当于对这个变量关闭TS类型检测，所以尽量不使用any类型
//?　let　anyVar;　会自动解析为any类型（隐式any）
//?　any类型变量，可以赋值给所有类型的变量，可能引发错误！！！！！！！
let anyVar :any = 1
anyVar = true
anyVar = "我是傻逼"
let aBooleanVar :boolean = anyVar   //any类型赋值给一个boolean类型的变量，不报错！！！

/** 3、unknown：表示未知类型的值，实际是类型安全的any
 *    ?无法直接赋值给其他变量，这就是与any的区别
 *    *如果需要赋值给其他变量，则需要if(typeof)判断类型，则不会报错
 *       *假如非常确定unknown变量的类型，则可以使用：　类型断言　
 */
let unknownVar :unknown
unknownVar = 10
unknownVar = "hello"
unknownVar = true
if (typeof unknownVar === "boolean") {
    aBooleanVar = unknownVar    //不会报unknown类型赋值错误
}
aBooleanVar = unknownVar  //报错
aBooleanVar = unknownVar as boolean   //类型断言：不报错



/**
 *4、void：表示空，对于函数来说就是没有返回值或返回null、undefined
 *5、never：表示函数永远不会返回结果，用的较少
 *   *　实际上void空也是一种返回结果，要想函数完全不返回结果，只能中断程序运行
 *   !　　也就是我只需要运行这个函数进行报错！！！
 */
function voidFunction() :void {
    return null||undefined;
    // 或函数无return语句
}
function neverFunction() :never{
    /* 程序中断运行，完全没有进行返回，所以never */
    throw new Error(
        "进入never函数了，抛出错误中断程序运行，所以函数完全没有返回什么结果，包括void"
    )
}



/* 5、 */


/* 6、 */


/* 7、 */


/* 8、 */


/* 9、 */


/* 2、 */

