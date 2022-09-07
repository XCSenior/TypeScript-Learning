/* 类继承extends */
(() => {

    // 定义Animal类
    class Animal {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        sayHello(): void {
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

/* super关键字 */
(() => {
    /**
     *  !super:在类方法中表示当前类的父类,相当于在父类中的this
     *      在构造函数中，相当于父类的构造函数
     * */
    class Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        sayHello(): void {
            console.log("动物在叫~~");
        }
    }

    class Dog extends Animal {
        age: number;
        constructor(name: string, age: number) {
            /* 子类没有写构造函数，自动掉super()，
            *   如果子类中写了构造函数，则必须调用父类的构造函数
            */
            super(name);
            this.age = age;
        }
        sayHello(): void {
            super.sayHello();
        }
    }
    const dog = new Dog("旺财", 3);
    dog.sayHello()
})();

/* 抽象类abstract */
(() => {
    /* 抽象类：指专门被其他类继承的类，无法被用来创建对象 */
    // 例如我们不希望有人去创建Animal类的对象，Animal类只需要给其他动物类继承即可
    // 抽象类中可以添加抽象方法,抽象方法只能写在抽象类中,没有实现方法体,并且子类必须实现重写
    abstract class Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }

        // 由于动物叫声都不一样，抽象类的实例方法没什么意义，需要定义抽象方法，强迫动物子类实现sayHello
        abstract sayHello(): void;
    }

    class Dog extends Animal {
        sayHello(): void {
            console.log("汪汪汪");
        }
    }
    const dog = new Dog("旺财");
    dog.sayHello()

})();