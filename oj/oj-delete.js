// ==UserScript==
// @name         OJ-delete
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Macaulish
// @match        http://10.105.242.83/accounts/groups/*
// @grant        none
// @require    http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==

//v0.1 模拟点击哈哈哈
// (function() {
//     'use strict';
//     var i,len,ulist;
//     var flag=localStorage["flagdel"]||2,cnt=localStorage["cnt"]|0;
//     cnt=cnt+1;
//     if (cnt<10) {
//         if (flag==1) {
//             ulist=$('a');
//             for(i=0,len=ulist.length;i<len;i++) {
//                 if (ulist[i].title==='删除学生') {
//                     localStorage["flagdel"]=0;
//                     ulist[i].click();
//                 }
//             }
//         }
//         if (flag==0) {
//             ulist=$('input');
//             for(i=0,len=ulist.length;i<len;i++) {
//                 if (ulist[i].value==='Confirm') {
//                     localStorage["flagdel"]=1;
//                     ulist[i].click();
//             }
//             }
//         }
//     }
// })();

function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); //正则匹配
    if(arr=document.cookie.match(reg)){
      return unescape(arr[2]);
    }
    else{
     return null;
    }
}

(function() {
    'use strict';
    var ulist=$('a');
    var hostname=window.location.host;
    //var cookiesstr="Cookie: csrftoken="+getCookie("csrftoken")+";";
    var cookiesstr=getCookie("csrftoken");
    var cnt=0;
    for(var i=0,len=ulist.length;i<len;i++) {
        if (ulist[i].title==='删除学生') {
            cnt=cnt+1;
            console.log(ulist[i].href);
            console.log(cookiesstr);
            $.ajax({
                type: "POST",
                url: ulist[i].href,
                beforeSend:function(request) {
                    request.setRequestHeader('X-CSRFToken',cookiesstr);
                },
              });
        }
        if (cnt>0) break;
    }

})();
