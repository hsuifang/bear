!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){window.onload=function(){o(),liff.init({liffId:"1653792306-7MNwNnkj"}).then((function(e){liff.getProfile().then((function(e){t.uid=e.userId,t.nickname=e.displayName})).catch((function(e){console.log(e)}))})).catch((function(e){$("body").unblock()}))};document.querySelector("#payService").addEventListener("click",(function(){var e;$("#exampleModalCenter").modal("hide"),o(),e=t,$.ajax({type:"GET",url:"https://script.google.com/macros/s/AKfycbz9gJNch20Usl0J9Gyl344c2trrIJAKtyItK00jtUlHCTNmjYI/exec",data:e,dataType:"JSON",success:function(e){alert("資料填寫完成"),$("body").unblock(),function(){console.log(1);try{liff.closeWindow(),liff.sendMessages([{type:"text",text:"Hey!!! 🎉訂閱成功，記得付完款，留言給EN"}]).then((function(){console.log("Message sent")})).catch((function(e){console.log("Error sending message: "+e)}))}catch(e){}}()},fail:function(e){}})}));var t={uid:"",nickname:"",name:document.querySelector("#emailInput").name,email:document.querySelector("#emailInput").value,timecode:String(new Date),memo:document.querySelector("#pay").value};function o(){$.blockUI({message:'<h2 style="color:white">請稍等...</h2>',css:{border:"none",width:"90%",background:"none"}})}}]);