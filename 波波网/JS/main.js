function boboRua() {
    var boboAudio = '#boboAudio' + Math.floor((Math.random() * 3) + 1)
    document.querySelector(boboAudio).play();
    var left = Math.floor((Math.random() * 80) + 1);
    var top = Math.floor((Math.random() * 40) + 20);
    imageChange(document.querySelector('.boboBtn'), 0, left, top);
}

function boboPushRight() {
    imageChange(document.querySelector('.boboBtn'), 0, 80, document.querySelector('.boboBtn').top);
}

function boboPushLeft() {
    imageChange(document.querySelector('.boboBtn'), 0, 0, document.querySelector('.boboBtn').top);
}

function boboPushUp() {
    imageChange(document.querySelector('.boboBtn'), 0, document.querySelector('.boboBtn').left, 0);
}

function boboPushDown() {
    imageChange(document.querySelector('.boboBtn'), 0, document.querySelector('.boboBtn').left, 60);
}

//imageChange(对象,目标透明度,目标left,目标top)
function imageChange(obj, opTarget, left, top) {
    var timer = null;
    var alpha = 100;
    var speed = 0;
    var time = 15;
    var item = obj;
    //变换透明度
    setInterval(function opiacityChanger() {
        if (alpha < opTarget) {
            speed = 1;
        } else if (alpha > opTarget) {
            speed = -1;
        }
        if (alpha == opTarget) {
            clearInterval(timer);
        } else {
            alpha += speed;
            item.style.opacity = alpha / 100;
        }
    }, time);
    setTimeout(function positionChanger() {
        item.style.left = left + '%';
        item.style.top = top + '%';
        item.style.opacity = 1;
    }, (alpha - opTarget) / 1 * time + 300);
}