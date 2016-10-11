/**
 * Created by Administrator on 2016/9/22 0022.
 */
window.onload=function () {
    function inherit(superType,subType) {
        //得到父类的原型
        var _prototype = Object.create(superType.prototype);
        //把父类的构造器指定成 子类的构造器
        _prototype.constructor = subType;
        //把子类的原型（真身）指定为父类的原型
        subType.prototype = _prototype;
    }
    var Animal=function (_lion,_duck,_tiger) {
        this.lion=_lion;
        this.duck=_duck;
        this.tiger=_tiger;
    };
    var dw=new Animal("狮子","鸭子","老虎");
    console.log(dw);

    var Monster=function (_Fairy,_Pixy,_Nymph,_yao4) {
        // this.Fairy=_Fairy;
        // this.Pixy=_Pixy;
        // this._Nymph=Nymph;
        this.yao4=_yao4;
        Animal.call(this,_Fairy,_Pixy,_Nymph);
    };
    inherit(Animal,Monster);
    var yg=new Monster("妖1","妖2","妖3","神仙");
    console.log(yg);

    var Hero=function (_batman,_outman,_oneman) {
        Animal.call(this,_batman,_outman,_oneman);
    };
    var good=new Hero("蝙蝠侠","奥特曼","神男");
    inherit(Animal,Hero);
    console.log(good);

    var MagicHero=function (_water,_fire,_fly) {
        // this.water=_water;
        // this.fire=_fire;
        Hero.call(this,_water,_fire,_fly);
    };
    inherit(Hero,MagicHero);
  var mh=new MagicHero("喷水","喷火");
    mh.name="xx";
    console.log(mh);
    var mm=new MagicHero("水","火");
    mm.nam="xxx";
    console.log(mm);


var PhysicMagic=function (_wl1,_wl2,_wl3,_wl4) {
    this.wl4=_wl4;
    Hero.call(this,_wl1,_wl2,_wl3);
};
    var ph=new PhysicMagic("物理1","物理2","物理3","物理4");
    var ph2=new PhysicMagic("物理5","物理6","物理7","物理8");
    inherit(Hero,PhysicMagic);
    console.log(ph2);
    console.log(ph);
    
    var MagicMonster=function (_mm1,_mm2,_mm3,_mm4) {
        Monster.call(this,_mm1,_mm2,_mm3,_mm4);
    };
    inherit(Monster,MagicMonster);
    var mofa=new MagicMonster("魔钥1","魔钥2","魔钥3","魔钥3");
    var mofa2=new MagicMonster("魔钥6","魔钥4","魔钥5","魔钥3");
    console.log(mofa);
    console.log(mofa2);

    var PhysicMonster=function (_wuy1,_wuy2,_wuy3,_wuy4,_wuya5) {
        this.wuya="唱歌";
        Monster.call(this,_wuy1,_wuy2,_wuy3,_wuy4);
    };
    inherit(Monster,PhysicMonster);
    var wwyy=new PhysicMonster("一个","一个","一个","魔钥3","魔钥3");
    console.log(wwyy);
};