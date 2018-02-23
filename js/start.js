var {
    remote
} = require("electron");

window.onload = function () {
    var btnStart = document.getElementById('start');
    var iconScroll = document.getElementById('scroll-container');
    var btnClose = document.getElementById('btn-close');
    var btnMinimize = document.getElementById('btn-hide');

    btnClose.onclick = closeWindow;
    btnMinimize.onclick = minimizeWindow;

    iconScroll.onwheel = function () {
        console.log("click");
        var top = document.getElementById('top-icon');
        var first = document.getElementById('first-icon');
        var second = document.getElementById('second-icon');
        var third = document.getElementById('third-icon');
        var bottom = document.getElementById('bottom-icon');

        toggleClass(top, "top-icon", "bottom-icon");
        toggleClass(first, "first-icon", "top-icon");
        toggleClass(second, "second-icon", "first-icon");
        toggleClass(third, "third-icon", "second-icon");
        toggleClass(bottom, "bottom-icon", "third-icon");

        top.id = "bottom-icon";
        first.id = "top-icon";
        second.id = "first-icon";
        third.id = "second-icon";
        bottom.id = "third-icon";
    };
};

function toggleClass(obj, remove, add) {
    obj.classList.remove(remove);
    obj.classList.add(add);
}

function closeWindow() {
    var win = remote.getCurrentWindow();
    win.close();
    alert('hello');
}

function minimizeWindow() {
    var win = remote.getCurrentWindow();
    win.minimize();
}