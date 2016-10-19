/**
 * Created by Administrator on 2016/10/19 0019.
 */
(function () {

    var cardA=$(".cardA");
    var cardB=$(".cardB");

    cardA.click(function () {
        cardA.animate({width:"0",left:"50px"});
        cardB.animate({width:"100px",left:"0px"});
    });

    cardB.click(function () {
        cardB.animate({width:"0px",left:"50px"});
        cardA.animate({width:"100px",left:"0"});
    })

})();