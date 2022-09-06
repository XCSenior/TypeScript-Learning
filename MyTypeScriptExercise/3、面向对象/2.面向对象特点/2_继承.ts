(() => {

    // 定义Animal类
    class Animal {
        name: string;
        age: number;
        constructor(name:string, age:number) {
            this.name = name;
            this.age = age;
        }
        sayHello() : void {
            console.log("动物在叫");
        }
    }
    /* 子类将拥有父类的所有属性和方法 */
    //      通过继承可以将多个类中共有的代码写在一个父类里
    // 这样只需要写一次即可让所有的子类都同事拥有父类中的属性、方法
    //  如果希望子类中添加一些父类中没有的方法，则直接在子类中添加即可

    // 如果在子类中添加和父类的同名方法，则子类方法会覆盖掉父类方法 （方法重载）
    class Dog extends Animal {
        /* 使Dog类继承Animal类 */
        sayHello(): void {
            console.log("汪汪汪");
        }
        run(): void {
            console.log("狗狗在跑");
        }
    }
    class Cat extends Animal {
        
    }
    const dog = new Dog("旺财", 5);
    const cat = new Cat("咪咪", 3);
    dog.sayHello()
    cat.sayHello()

})();