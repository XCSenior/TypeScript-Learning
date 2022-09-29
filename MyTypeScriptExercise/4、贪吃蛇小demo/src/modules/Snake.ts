export default class Snake {
    // 表示snack head的HTML的元素
    head: HTMLElement;
    bodies: HTMLCollection;
    /* 获取蛇的容器 */
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('snack')!;
        this.head = document.querySelector('#snake > div')!;
        this.bodies = this.element.getElementsByTagName('div');
    }

    // 获取与设置蛇的坐标(蛇头坐标)
    public get X(){
        return this.head.offsetLeft;
    };
    public set X(value : number) {
        /* 如果新值和旧值相同，则直接返回不再修改属性 */
        if (this.X === value) {
            return;
        }
        /* X的值是0——290之间 */
        if (value < 0 || value > 290) {
            // 撞墙逻辑
            throw new Error("蛇撞墙了！");
        }
        this.head.style.left = value + 'px';
    };
    public get Y(){
        return this.head.offsetTop;
    };
    public set Y(value : number) {
        if (this.Y === value) {
            return;
        }
        /* Y的值是0——290之间 */
        if (value < 0 || value > 290) {
            // 撞墙逻辑
            throw new Error("蛇撞墙了！");
        }
        this.head.style.top = value + 'px';
    };

    /* 增加蛇增加身体的方法: 相当于给容器添加div */
    addBody (){
        // 给结束标签之前的位置添加
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
}