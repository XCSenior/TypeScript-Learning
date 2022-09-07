// function fn(a: number): number {
//     return a
// }

/**
 * 在定义函数或类时，遇到类型不明确、不确定类型时，可以使用泛型
 *      *只有调用的时候才能知道具体的类型
 *  ?使用：1、直接调用具有泛型的函数
 *        ?2、通过泛型调用fn<T>(arg)
 */
function fn<T>(a: T): T {
    return a;
}

// 直接调用
fn(10);
// 指定泛型调用
fn<string>("hello");



/* 泛型可以指定多个 */
function fn2<T, K>(a: T, b: K): T {
    console.log(b);
    return a;
}
fn2<number, string>(10, "Hello");

/* 通过子类继承与实现，限制泛型类型，只要拥有同名属性即可<T extends XXX> */
interface Inter {
    length: number;
}

function fn3<T extends Inter>(a: T): T {
    return a;
}

const obj = {
    length: 10
}
fn3(obj)



// 类的构造函数也可使用泛型
class MyClass<T> {
    name: T;
    constructor(name: T) {
        this.name = name
    }
}

const mc = new MyClass("孙悟空")
const mc2 = new MyClass<number>(19)