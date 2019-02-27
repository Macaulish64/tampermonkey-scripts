// ==UserScript==
// @name         Snap up Mi v1.0
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  snap up Mi products
// @author       Macaulish
// @match        https://item.mi.com/product/*
// @grant        none
// @require
// ==/UserScript==



//还是用通过模拟点击,不断检测标签然后点击
(function() {
    var interval=setInterval(function(){
        console.log("!!!");
        var getlabel=$("[data-name='加入购物车']:first");
        console.log(getlabel);
        console.log(getlabel.length!==0);
        if (getlabel.length!==0) {
            getlabel.click();
            stop();
        };
        getlabel=$("[data-name='立即购买']:first");
        if (getlabel.length!==0) {
            getlabel.click();
            stop();
        };
    },2000);
    function stop() {
        clearInterval(interval);
    }
})();