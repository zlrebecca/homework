/**
 * Created by liuyujing on 16/9/19.
 */
/*
 //0.随机得到输入数组的  某个值  使用函数实现
 var listString = prompt("请输入几个数字，使用逗号隔开");
 var list = listString.split(",");
 function randOfItem(messages) {
 /*Math.random获得一个随机数的意思   parseInt转换整数  %list.length比如是5，余数就是01234，也就是他的下标五位*/
var randNum = parseInt(Math.random()*100)%messages.length;
//获得传入数组中的 随机下标对应的内容
var item = messages[randNum];
return item;
}
console.log(randOfItem(list));
*/



/*
 function 函数名(参数列表) {
 return XXX;
 }
 */
/*
 var list = [];
 //1.无参 无返回值
 function 函数名() {

 var list = [1111,222];

 return list;
 }
 var sum = 函数名()[0]+4;

 console.log(sum);
 */
// function getList() {
//     return [1,3,5,6];
// }
//
// function randOfItem(list) {
//     var randNum = parseInt(Math.random()*100)%list.length;
//     //获得传入数组中的 随机下标对应的内容
//     var item = messages[randNum];
//     return item;
// }


//得到传入数组的 第一个值  使用函数实现



// 通过 函数 输出 函数内部数组的 第一个值
//无返回值 无参数
// function 函数名() {
//
// }
/*
 * 1.不要改变 函数内部的内容
 * 2.不需要 通过函数 得到一个内容
 * */

// function a() {
//     var list = [33,2,77,99];
//     console.log(list[0]);
// }
// a();
// a();
// a();

// function getFirstValue() {
//     var list = [33,2,77,99];
//     console.log(list[0]);
// }
// getFirstValue();

// function 得到第一个值() {
//     var list = [33,2,77,99];
//     console.log(list[0]);
// }
// 得到第一个值();

//变量的作用域
/*
 * 变量的作用域
 * 1.如果变量在花括号外面 在声明的位置开始 一直到文件结束 都可以使用
 * 2.如果在换括号内部 声明  从声明的位置开始 到这个花括号结束 都可以使用
 * */

// var a = 10;
//
// function aa() {
//
//     var mmm = 11;
//
//
//     if (1){
//         var kkkk = 11;
//     }
//
// }
//
// console.log(a);

// function avg(a,b) {
//     var sum = a+b;
//     var avgNum = sum/2;
//     console.log(avgNum);
// }
//
// avg(10,20);
// avg(15,55);
// avg(10,20);
// avg(15,55);
//使用函数的时候  就相当于  使用了 函数里面的功能代码

// function 函数名() {
//     //xxxx
//     return 0;
// }
// 函数名();
// 0;
//有返回值的函数  最终调用函数的时候   这个函数就是return的那个返回值

// var num = 函数名()*100;
// var num = 0*100;

// function isMan(name) {
//     if (name==="王钦"){
//         return false;
//     }
//     return true;
// }
//
// if (isMan("王钦")){
//     console.log("送一把枪");
// }else {
//     console.log("送一朵花");
// }
//
// if (false){
//     console.log("送一把枪");
// }else {
//     console.log("送一朵花");
// }


//1.✭✭✭✭给数组中的 数字 进行排序 从小到大 [44,2,100,76,52,50]
var list = [44,2,100,76,52,50];
//1.比大小
//2.把小的放到前面（换位置）
//3.把第一个数字 分别跟其他数字 去对比
//4.第一个比完  再去对比 第2 ，3，4...
//冒泡排序
// 44
// xx,2,100,76,52,50
//
// 2,44,100,76,52,50
//
// --------------------
//     44
// x,xx,100,76,52,50
//
// 2,44,100,76,52,50
//
// -------------------
//     100
// xx,xx,xx,76,52,50
// xx,xx,xx,50,52,76,100
//
// ----------------
//     76
//     xx,xx,xx,xx,52,76,100
// 。。。。



/*
 * 1.1 44 和其他的数字 去对比 肯定会得到一个 最小
 * 1.2 如果（44）数字 是最小的 还是第一个位置
 * 1.3 如果 有比44 小的数字 就把小的那个数字 放到44 的位置
 *
 *2.1
 * */
//44,2,100,76,52,50
//第一外循环 把第一个数字 分别去对比
// for (var i=0;i<list.length;i++){
//     var num1 = list[0];
//
//     for (var j=0;j<list.length;j++){
//
//         var num2 = list[1];
//         if (num1 > num2){
//             var temp = num1;
//             list[0] = list[1];
//             list[1] = temp;
//         }
//
//     }
//
// }
// 第二次外循环 把第二个数字分别去对比
// 2,44,100,76,52,50
// for (var i=0;i<list.length;i++){
//     var num1 = list[1];
//
//     for (var j=0;j<list.length;j++){
//
//         var num2 = list[2];
//         if (num1 > num2){
//             var temp = num1;
//             list[0] = list[j];
//             list[j] = temp;
//         }
//
//     }
//
// }


// for (var i=0;i<list.length;i++){
//     var num1 = list[2];
//     for (var j=i+1;j<list.length;j++){
//         var num2 = list[3];
//         if (num1 > num2){
//             var temp = num1;
//             list[0] = list[j];
//             list[j] = temp;
//         }
//     }
// }

//✭✭✭✭✭✭✭✭✭✭（任何语言 都会考）
for (var i=0;i<list.length;i++){
    for (var j=i+1;j<list.length;j++){
        if (list[i] > list[j]){
            var temp = list[i];
            list[i] = list[j];
            list[j] = temp;
        }
    }
}

// for (){
//     for(){
//         if(当前的数字与后面的一个数字去对比 如果大于后面的数字){
//             交换位置
//         }
//     }
// }

// 输入三个数字  查找三个数字中的最大值
//也可以通过排序的方式实现
var a = 10;
var b = 5;
var c = 11;
/*
 * 让写一个临时变量最大值 跟其他去对比 把最大值赋给一个临时变量
 * */

/*
 * 如果a大于b 并且 a大于c 最大值a
 * a 大于b 并且 a小于c 最大值c
 * a 大于c 并且 a小与b 最大值b
 * a大于c 并且 c小于b
 * */

// var max = 0;
// if (a>b&&a>c){
//     max = a;
// }
// if(a>b&&a<c){
//     max = c;
// }
// if (a>c&&a<b||a<c&&c<b){
//     max = b;
// }
// console.log(max);

// function getMaxValue(a,b,c) {
//     var max = 0;
//     if (a>b&&a>c){
//         max = a;
//     }
//     if(a>b&&a<c){
//         max = c;
//     }
//     if (a>c&&a<b||a<c&&c<b){
//         max = b;
//     }
//     return max;
// }

var heros = [
    {name:"xx1",blood:100,ATT:12,skills:[
        {name:"skill1",ATT:100},
        {name:"skill2",ATT:300}]
    },
    {name:"xx2",blood:1000,ATT:22,skills:[
        {name:"skill1",ATT:200},
        {name:"skill2",ATT:500}]
    },
    {name:"xx3",blood:700,ATT:40,skills:[
        {name:"skill1",ATT:70},
        {name:"skill2",ATT:150}]
    },
    {name:"xx3",blood:700,ATT:40,skills:[
        {name:"skill1",ATT:70},
        {name:"skill2",ATT:150}]
    }
];

var monsters = [
    {name:"xx1",blood:100,ATT:12,skills:[
        {name:"skill1",ATT:100},
        {name:"skill2",ATT:300}]
    },
    {name:"xx2",blood:1000,ATT:22,skills:[
        {name:"skill1",ATT:200},
        {name:"skill2",ATT:500}]
    },
    {name:"xx3",blood:700,ATT:40,skills:[
        {name:"skill1",ATT:70},
        {name:"skill2",ATT:150}]
    }
];


//选择英雄  选择怪物  获取数组中的元素
//选择英雄
function chooseHero(heroIndex) {
    if (heroIndex<0||heroIndex>=heros.length){
        return heros[0];
    }
    return heros[heroIndex];
}
//选择怪物
function chooseMonster() {
    var index = parseInt(Math.random()*10)%monsters.length;
    return monsters[index];
}



//英雄选择技能的方法  怪物选择技能的方法  获取数组中的元素
//英雄选择技能的方法
function heroChooseSkill(skills,skillIndex) {
    return skills[skillIndex];
}

//怪物选择技能的方法
function monsterChooseSkill(skills) {
    var index = parseInt(Math.random()*10)%skills.length;
    return skills[index];
}


//heroChooseSkill(skills,skillIndex)
//skills 技能的数组
//skillIndex 技能的下标
function power(hero,monster) {

    //while 因为不知道什么时候 英雄或者 怪物死亡
    while (hero.blood>0||monster.blood>0){
        console.log(hero.blood,monster.blood);
        /*
         * 1.调用函数
         * 2.运算符的使用
         * */

        //怪物拥有的技能
        var monsterSkills = monster.skills;
        //怪物使用的技能
        var monsterSkill = monsterChooseSkill(monsterSkills);

//    英雄拥有的技能
        var heroSkills = hero.skills;
//    英雄使用技能
        var chooseSkillIndex = parseInt(prompt("请选择技能"));
        //如果选择技能的下标 是小于0 或者大于英雄技能数组的长度 就让它 选择第一个技能
        chooseSkillIndex = chooseSkillIndex<0||chooseSkillIndex>=heroSkills.length?0:chooseSkillIndex;
        var heroSkill = heroChooseSkill(heroSkills,chooseSkillIndex);

        hero.blood -= (monster.ATT+monsterSkill.ATT);
        monster.blood -= (hero.ATT+heroSkill.ATT);

        console.log(monster.name+"使用"+monsterSkill.name+"攻击了"+hero.name);
        console.log(hero.name+"还剩"+hero.blood+"滴血");
        console.log(hero.name+"使用"+heroSkill.name+"攻击了"+monster.name);
        console.log(monster.name+"还剩"+monster.blood+"滴血");
    }
}

function startGame() {
    //获得用户输入 选择英雄的下标
    var heroIndex = parseInt(prompt("请选择英雄"));
    var hero = chooseHero(heroIndex);
    console.log("您选择了血量是"+hero.blood+"攻击力是"+hero.ATT+"的"+hero.name);

    var monster = chooseMonster();
    console.log("血量是"+monster.blood+"攻击力是"+monster.ATT+"的"+monster.name+"出现了");

    power(hero,monster);
}

//开始游戏
// startGame();

//[66,80,35,99,54]求数组的平均分数
var nums = [66,80,35,99,54];

function avg(list) {
    var sum = 0;
    for(var i=0;i<list.length;i++){
        sum += list[i];
    }
    return sum/list.length;
}

console.log(avg(nums));

//输入10个同学的分数 存入数组 并筛选出最高分
var scores = [];
for(var i=0;i<10;i++){
    var inputNum = parseInt(prompt());
    scores.push(inputNum);
}

function sortUpper(list) {
    for (var i=0;i<list.length;i++){
        for(var j=i+1;j<list.length;j++){
            if (list[i]>list[j]){
                var temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
        }
    }
    return list;
}
var newScore = sortUpper(scores);
console.log(newScore[scores.length-1]);

//[66,80,35,99,54]
var nums2 = [66,80,35,99,54];
console.log(sortUpper(nums2)[0]);

//[66,80,35,99,54] 查找数组中35的位置
console.log(nums2.indexOf(35));

function searchNum(list,message) {
    var index;
    for(var i=0;i<list.length;i++){
        if (message === list[i]){
            index = i;
            break;
        }
    }
    return index;
}

// nums2.splice(1,3);
// console.log(nums2);

nums2.splice(1,3,22,33);

