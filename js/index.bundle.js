!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){window.onload=function(){o(),liff.init({liffId:""}).then((function(e){liff.getProfile().then((function(e){n.uid=e.userId,n.nickname=e.displayName})).catch((function(e){console.log(e)}))})).catch((function(e){$("body").unblock()}))};document.querySelector("#payService").addEventListener("click",(function(){var e;$("#exampleModalCenter").modal("hide"),o(),e=n,$.ajax({type:"GET",url:"https://script.google.com/macros/s/AKfycbz9gJNch20Usl0J9Gyl344c2trrIJAKtyItK00jtUlHCTNmjYI/exec",data:e,dataType:"JSON",success:function(e){alert("資料填寫完成"),$("body").unblock()},fail:function(e){}})}));var n={uid:"",nickname:"",name:document.querySelector("#emailInput").name,email:document.querySelector("#emailInput").value,timecode:String(new Date),memo:document.querySelector("#pay").value};function o(){$.blockUI({message:'<h2 style="color:white">請稍等...</h2>',css:{border:"none",width:"90%",background:"none"}})}}]);