// 引入样式
import "./style/index.less";


// 面向对象,根据对象去操作,首先需要定义对象
// 定义类
class Food {
    constructor() {
        /* 感叹号表示这个元素不可能为空,相当于断言 */
        this.element = document.getElementById("food")!;
    }
    // 定义一个属性, 表示食物所对应的元素
    element: HTMLElement;

    /* 定义方法: 获取食物x轴坐标方法 */
    get X() {
        return this.element.offsetLeft;
    }
    /* 定义方法: 获取食物y轴坐标方法 */
    get Y() {
        return this.element.offsetTop;
    }
    /* 定义方法: 修改食物的位置 */
    change() {
        // 生成随机位置
        // 食物横坐标的位置最小是0，最大是290
        // 蛇每次移动一格，一格大小就是10，所以要求食物的坐标是整10

        const left = Math.round(Math.random() * 29) * 10;
        const top = Math.round(Math.random() * 29) * 10;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
    }
}

/* 测试代码 */
const food = new Food();
food.change()
console.log('food.X, food.Y :>> ', food.X, food.Y);
