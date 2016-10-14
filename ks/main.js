/**
 * Created by Administrator on 2016/10/14 0014.
 */
(function () {
    var imgList = [{url: "images/0.gif"}, {url: "images/0_002.jpg"}, {url: "images/0_003.jpg"}];

    var index = 1;

    var container=document.createElement("div");
    container.id="container";
    container.style.left="0";

    document.body.appendChild(container);

    var imgContent=document.createElement("div");
    imgContent.id="content";
    imgContent.style.left="0";
    container.appendChild(imgContent);

    var preBut=document.createElement("div");
    preBut.id="per";
    preBut.className="but";
    preBut.textContent="<";
    container.appendChild(preBut);

    var nextBut=document.createElement("div");
    nextBut.id="next";
    nextBut.className="but";
    nextBut.textContent=">";
    container.appendChild(nextBut);



    function createImg() {
        for (var i = 0; i < imgList.length; i++) {
            var images = document.createElement("img");
            images.src = imgList[i].url;
            imgContent.appendChild(images);
        }
    }

    function but() {
        var butContent = document.createElement("div");
        butContent.id = "buttons";
        container.appendChild(butContent);

        for (var i = 0; i < imgList.length; i++) {
            var but = document.createElement("span");
            but.textContent = i + 1;
            butContent.appendChild(but);
        }
    }

    function showBut() {
        var buts = document.querySelectorAll("#buttons span");
        for (var i = 0; i < buts.length; i++) {
            if (buts[i].className == "on") {
                buts[i].className = "";
                break;
            }
        }

        if (index > buts.length) {
            index = 1;
        }
        if (index < 1) {
            index = buts.length;
        }

        buts[index - 1].className = "on";

        for (var j = 0; j < buts.length; j++) {
            buts[j].onclick = function () {
                moveTo((this.textContent - index) * -700);
                index = this.textContent;
                showBut()
            }
        }
    }

    function moveTo(offset) {
        var newLeft = parseInt(imgContent.style.left) + offset;
        imgContent.style.left = newLeft + "px";
        if (newLeft < -1400) {
            imgContent.style.left = "0px"
        }
        if (newLeft > 0) {
            imgContent.style.left = "-1400px";
        }
    }

    nextBut.onclick = function () {
        moveTo(-700);
        index++;
        showBut()
    };

    preBut.onclick = function () {
        moveTo(700);
        index--;
        showBut()
    };

    function start() {
        var offset = 0;
        var timer = setInterval(function () {
            moveTo(offset - +700);
            index++;
            showBut()
        }, 500);
        container.onmousemove = function () {
            clearInterval(timer)
        };
        container.onmouseout = function () {
            start()
        }
    }
    function init() {
        createImg();
        but();
        showBut();
        start()
    }
    init()
})();