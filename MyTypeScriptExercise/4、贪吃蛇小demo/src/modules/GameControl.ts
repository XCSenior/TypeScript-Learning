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
}