/**
 * Created by Administrator on 2016/8/24 0024.
 */
(function () {

    function circle(width,height) {
        var div=document.createElement("div");
        var a=(Math.random()*300);
        var b=(Math.random()*200);

        div.style.width=width+"px";
        div.style.height=height+"px";
        div.style.borderRadius="50%";
        div.style.border="solid";
        div.style.position="absolute";
        div.style.margin="20px";


        var AAA=Math.round(Math.random());
        var BBB=Math.round(Math.random());

        function position() {

            div.style.left=a+"px";
            div.style.top=b+"px";

        }


        var container=document.querySelector("#container");
        container.appendChild(div);

        var x=setInterval(function () {
            if (AAA==0){
                a++
            }else {
                a--
            }
            if (BBB==0){
                b++
            }else {
               b--
            }
            position()


        },40)
    }
    window.circle=circle;
})();