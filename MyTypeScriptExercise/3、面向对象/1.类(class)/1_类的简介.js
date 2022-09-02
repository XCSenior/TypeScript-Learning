// 使用class关键字来定义一个类
/*
 *   对象中主要包含两个部分：
 *      属性
 *      方法
*/
var Person = /** @class */ (function () {
    function Person() {
        /*
        *   1、直接定义的属性是实例属性，需要通过对象的实例去访问：
        *       const per = new Person()
        *       per.name
        *
        *   2、使用static开头的属性是静态属性（类属性），可以直接通过类去访问
        *       Person.age
        *
        *   3、readonly开头：属性表示一个只读的属性无法修改
        */
        /* **********************定义属性************************** */
        //定义实例属性
        // readonly name = '孙悟空';
        this.name = '孙悟空';
        this.age = 18;
    }
    /* **********************定义方法************************* */
    //定义实例方法
    // 如果是静态方法,那可以直接通过类名去调用
    Person.prototype.sayHello = function () {
        console.log("\u5927\u5BB6\u597D!\u6211\u662F".concat(this.name, "\uFF0C\u4ECA\u5E74").concat(this.age, ",this").concat(this));
    };
    Person.staticSayHello = function () {
        console.log("\u5927\u5BB6\u597D,\u6211\u662F\u9759\u6001\u65B9\u6CD5\u8BFB\u53D6this:".concat(this, ",typeof this:").concat(typeof this));
    };
    //定义静态属性(类属性)
    // static readonly staticAge = 18
    Person.staticAge = 'static18';
    return Person;
}());
var per = new Person();
per.sayHello();
Person.staticSayHello();
