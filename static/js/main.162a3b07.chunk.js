(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{252:function(e,t,a){},254:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),i=a(16),o=a.n(i),c=(a(93),a(35)),s=a(36),l=a(38),m=a(37),u=a(39),d=a(83),h=a.n(d).a.initializeApp({apiKey:"AIzaSyA8KMyz4QmdFZiPp52LbNXNnXCaB4uLsKQ",authDomain:"magicmirror-383ed.firebaseapp.com",databaseURL:"https://magicmirror-383ed.firebaseio.com",projectId:"magicmirror-383ed",storageBucket:"magicmirror-383ed.appspot.com",messagingSenderId:"583861133769"}),g=a(87),p=a.n(g),f=a(86),b=a.n(f),v=a(84),w=a.n(v),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState({val:e.target.value})},a.handleSubmit=function(){if(""!==a.state.val.trim()){var e=a.state.val.trim();h.database().ref("messages/").push({msg:e}).then(function(e){console.log("data ",e),a.setState({val:""})}).catch(function(e){console.log("error ",e)})}},a.handleKeyPress=function(e){13===e.charCode&&a.handleSubmit()},a.state={val:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Skicka ett meddelande till spegeln"),r.a.createElement("div",{className:"messageformdiv"},r.a.createElement(w.a,{style:{backgroundColor:"#b7cff7"}},r.a.createElement("div",{className:"messageform"},r.a.createElement(b.a,{onChange:this.handleChange,onKeyPress:this.handleKeyPress,value:this.state.val,inputProps:{maxLength:100},style:{width:"90%",marginLeft:"5%",marginRight:"5%"}}),r.a.createElement(p.a,{onClick:this.handleSubmit},"Send message")))))}}]),t}(n.Component),j=(a(252),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},88:function(e,t,a){e.exports=a(254)},93:function(e,t,a){}},[[88,2,1]]]);
//# sourceMappingURL=main.162a3b07.chunk.js.map