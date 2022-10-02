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
    public set X(value : number) { // 修改X是水平坐标，左右移动
        /* 如果新值和旧值相同，则直接返回不再修改属性 */
        if (this.X === value) {
            return;
        }
        /* 不能掉头的判断 */
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            // 1、如果拥有第二节身体的情况下，不能掉头
            // 2、如果想掉头，那就让蛇反方向运动
            if (value > this.X) { // 向右走，发生掉头应该使蛇继续向左走
                value = this.X - 10;
            } else if (value < this.X) {
                value = this.X + 10;
            }
        }
        /* X的值是0——290之间 */
        if (value < 0 || value > 290) {
            // 撞墙逻辑
            throw new Error("蛇撞墙了！");
        }
        // 移动身体
        this.moveBody();
        this.head.style.left = value + 'px';
        /* 检查有没有自相撞 */
        this.checkHeadBody();
    };
    public get Y(){
        return this.head.offsetTop;
    };
    public set Y(value : number) { // 修改Y是垂直坐标
        if (this.Y === value) {
            return;
        }
        /* 不能掉头的判断 */
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            // 1、如果拥有第二节身体的情况下，不能掉头
            // 2、如果想掉头，那就让蛇继续按原来的方向运动
            if (value > this.Y) { // 向下走，发生掉头应该使蛇继续向上走
                value = this.Y - 10;
            } else if (value < this.Y) {
                value = this.Y + 10;
            }
        }
        /* Y的值是0——290之间 */
        if (value < 0 || value > 290) {
            // 撞墙逻辑
            throw new Error("蛇撞墙了！");
        }
        // 移动身体
        this.moveBody();
        this.head.style.top = value + 'px';
        /* 检查有没有自相撞 */
        this.checkHeadBody();
    };

    /* 增加蛇增加身体的方法: 相当于给容器添加div */
    addBody (){
        // 给结束标签之前的位置添加
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
    /* 添加蛇身体移动方法 */
    moveBody() {
        // 将后一块身体设置成前一块身体的位置
        // 1、首先遍历获取所有的身体
        for (let i = this.bodies.length -1; i > 0; i--) {
            // 获取前边身体的位置
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            // 将值设置到当前身体中
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    /* 检查snake Head和body有没有相撞 */
    checkHeadBody() {
        // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop ) {
                // 进入判断说明蛇头撞到了身体
                throw new Error("撞到自己了~~~");
            }
        }
    }
}