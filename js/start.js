window.onload = function() {
    var btnStart = document.getElementById('start');
    var btnHome  = document.getElementById('home');

    btnStart.onclick = function () {
        var page = document.getElementById('appPage');
        page.classList.add("top");
        page.classList.remove("hidden");
    };

    btnHome.onclick = function () {
        var page = document.getElementById('appPage');
        page.classList.add("hidden");
        page.classList.remove("top");
    };
};
