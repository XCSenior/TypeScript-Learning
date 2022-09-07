(function () {
    // 首先定义一个表示人的类
    class Person {
        // TS中可以对属性前添加属性修饰符(static、readonly、public、protected、private)
        /**
         *  public（默认值），修饰的属性可以在任意位置访问、修改
         *  protected，只能在当前类与子类中访问、修改，实例对象中不能被访问、修改
         *  private，私有属性，只能在类内部中访问、修改，相当于关闭外部访问方式
         *      --通过在类中添加方法，使得私有属性可以被外部访问、修改，通过方法控制修改
         *
         */
        private _name: string;
        private _age: number;
        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }
        // 定义getter方法，通过实例方法间接访问private属性
        getName(): string {
            return this._name
        }
        // 定义setter方法，设置private属性
        setName(val: string): void {
            this._name = val
        }
    }

    const per = new Person("孙悟空", 18);
    console.log(per);

    /**
     *  目前为止属性是在对象中设置的，属性可以任意被修改
     *      !将导致对象中的数据变得非常不安全
    */
    per.setName("猪八戒");

})();

(function () {
    class Person {
        protected _name: string;
        private _age: number;
        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }
        /* 设置属性存取器 */
        // 定义getter方法，通过实例方法间接访问private属性
        public get age(): number {
            return this._age
        }

        // 定义setter方法，设置private属性
        public set age(value: number) {
            this._age = value;
        }

    }

    const per = new Person("孙悟空", 18);
    console.log(per);

    per.age = -9;

})();