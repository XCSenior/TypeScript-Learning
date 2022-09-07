/* 接口Interface  */
(() => {
    /* 描述一个自定义的对象类型 */
    type myType = {
        name: string,
        age: number,
        [propName: string]: any
    };
    const myTypeObj: myType = {
        name: 'sss',
        age: 9
    };

    
    /**
     * ?接口interface：定义类规范，满足规范才能正常使用。
     *      *用来定义类的结构：应该包含哪些属性和方法
     *      *也可以当成类型声明，类似type
     *      *接口可以重复声明
     */
    interface myInterface {
        name: string;
        age: number;
    }
    interface myInterface {
        gender: string;
    }
    const myInterfaceObj: myInterface = {
        name: "hello",
        age: 9,
        gender: "男"
    }

    /**
     * *接口可以在定义类的时候，去限制类的结构，此时作用类似与抽象类
     *    ?接口中所有的属性都不能有实际的值，方法不可实现，这点区别于抽象类可以有属性值和方法实现
     *    ?抽象类是extends继承，而接口时implement实现
    */
    interface myClassInterface {
        name: string;
        sayHello(): void;
    }
    /* 定义类时，去实现一个接口 */
    class MyInterfaceClass implements myClassInterface {
        name: string;
        constructor(name: string){
            this.name = name;
        }
        sayHello(): void {
            console.log("你好啊");
        }
    }

})();