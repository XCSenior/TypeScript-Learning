// 使用class关键字来定义一个类
/*
 *   对象中主要包含两个部分：
 *      属性
 *      方法
*/
class Person {
    /*
    *   1、直接定义的属性是实例属性，需要通过new对象的实例去访问：
    *       const per = new Person()
    *       per.name
    *
    *   2、使用static开头的属性是静态属性（类属性），可以直接通过类去访问
    *       不需要创建对象即可访问的属性
    *       Person.age
    *
    *   3、readonly开头：属性表示一个只读的属性无法修改，需要放在static后面
    */

    /* **********************定义属性************************** */
    //定义实例属性
    // readonly name = '孙悟空';
    name : string = '孙悟空';
    age : number = 18;

    //定义静态属性(类属性)
    // static readonly staticAge = 18
    static staticAge = 'static18';

    /* **********************定义方法************************* */
    //定义实例方法
    // 如果是静态方法,那可以直接通过类名去调用
    sayHello(){
        console.log(`大家好!我是${this.name}，今年${this.age},this${this}`);
    }
    static staticSayHello(){
        console.log(`大家好,我是静态方法读取this:${this},typeof this:${typeof this}`);
    }
}

const per = new Person();

per.sayHello();
Person.staticSayHello();