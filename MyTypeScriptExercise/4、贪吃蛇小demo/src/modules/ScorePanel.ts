// 定义表示记分牌的分类
export default class ScorePanel {
    /* score和level用来记录分数和登记 */
    score: number = 0;
    level: number = 1;
    maxLevel: number;
    // 设置变量表示多少分升级
    upScore: number;
    /* 分数和登记所在的元素,在构造函数中进行初始化 */
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 设置加分方法
    addScore (){
        this.score++;
        this.scoreEle.innerHTML = this.score + '';
        // 当分数是10的倍数,就升级
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    };

    // 提升登记方法, 需要给等级设置上限
    levelUp (){
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    };
};

/* 测试代码 */
// const scorePanel = new ScorePanel();
// for (let i = 0; i < 120; i++) {
//     scorePanel.addScore();
// }