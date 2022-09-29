/* 游戏控制器类, 控制其他所有类, 属于核心类 */
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

export default class GameControl {
    /* 首先定义3个属性: snake, food, scorePanel */
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    /* 用一个属性来存储蛇的移动方向(即按键的方向) */
    direction: string = '';
    /* 用一个属性记录游戏是否结束 */
    isLive: boolean = true;
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
    }
    /* 游戏初始化方法, 调用后即游戏开始 */
    init() {
        // 绑定键盘按键按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this));
    }

    // 创建键盘的相应函数, 设置在类中使用的类方法
    keydownHandler(event: KeyboardEvent) {
        /* 赋值之前需要检查event.key是否合法(是否按了正确的按键) */
        this.direction = event.key;
    }

    /* 创建snake控制移动的方法 */
    run() {
        /** 根据方向this.direction, 改变位置移动
         *  向上 top减小   向下 top增加,  向左 left减小   向右 left增加
         */
        // 获取snake当前坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction) {
            case 'ArrowUp':
            case 'up':
                Y -= 10;
                break;
            case 'ArrowDown':
            case 'down':
                Y += 10;
                break;
            case 'ArrowLeft':
            case 'Left':
                X -= 10;
                break;
            case 'ArrowRight':
            case 'right':
                X += 10;
                break;
        }

        try {
            // 修改蛇的X和Y值
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e: any) {
            // 进入到catch，说明出现了异常，游戏结束，弹出一个提示信息
            alert(e.message + "Game Over!");
            this.isLive = false;
        }

        /* 随着等级越来越高, snake的速度越来越高 */
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }
}