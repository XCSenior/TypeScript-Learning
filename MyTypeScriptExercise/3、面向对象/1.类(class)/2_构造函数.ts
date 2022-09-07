class Dog {
    name: string;
    age: number;

    // constructor 被称为构造函数
    // 构造函数会在对象创建时调用，即new出一个对象的时候
    constructor(name: string, age: number) {
        // 在实例方法中,this就表示当前实例
        // 构造函数中当前对象就是当前新建的那个对象
        //      可以通过this向新建的对象中添加属性
        this.name = name;
        this.age = age;
    }

    bark() {
        alert("汪汪汪");
        // 在实例方法中,通过this来表示当前调用方法的对象
        console.log(this);
    }
}

const dog = new Dog("小黑", 4);

/* 构造函数和属性声明可以简写 */
class Dog2 {
    /** 相当于完成了
     *  name: string;
        age: number;
    *   constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    */
    constructor(public name: string, public age: number) {}
}