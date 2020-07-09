(this["webpackJsonpreact-redux-saga"]=this["webpackJsonpreact-redux-saga"]||[]).push([[0],{27:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(6),s=n(7),l=n(19),o=n(25),u=n(11),i=n.n(u),p=n(13),m=n(4),E=n(20),d=n(21),b=n(26),O=n(23);function f(e){return function(t){t({type:"SHOW_ALERT",payload:e}),setTimeout((function(){t({type:"HIDE_ALERT"})}),2e3)}}var h=function(e){var t=e.text;return r.a.createElement("div",{className:"alert alert-warning",role:"alert"},t)},v=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(E.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:""},e.submitHandler=function(t){t.preventDefault();var n=e.state.title;if(!n.trim())return e.props.showAlert("Empry post");var a={title:n,id:Date.now().toString()};e.props.createPost(a),e.setState({title:""})},e.changeInputHandler=function(t){t.persist(),e.setState((function(e){return Object(m.a)(Object(m.a)({},e),Object(p.a)({},t.target.name,t.target.value))}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.alert;return r.a.createElement("form",{onSubmit:this.submitHandler},e&&r.a.createElement(h,{text:e}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Post title"),r.a.createElement("input",{type:"text",className:"form-control",id:"title",value:this.state.title,name:"title",onChange:this.changeInputHandler})),r.a.createElement("button",{className:"btn btn-success",type:"submit"},"Create"))}}]),n}(a.Component),j={createPost:function(e){return{type:"CREATE_POST",payload:e}},showAlert:f},y=Object(s.b)((function(e){return{alert:e.app.alert}}),j)(v),_=function(e){var t=e.post;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.title)))},g=Object(s.b)((function(e){return{syncPosts:e.posts.posts}}),null)((function(e){var t=e.syncPosts;return t.length?t.map((function(e){return r.a.createElement(_,{post:e,key:e.id})})):r.a.createElement("h4",null,"No posts yet!")})),S=function(){return r.a.createElement("div",{class:"spinner-border text-primary",role:"status"},r.a.createElement("span",{class:"sr-only"},"Loading..."))},w=function(){var e=Object(s.c)(),t=Object(s.d)((function(e){return e.posts.fetchedPosts}));return Object(s.d)((function(e){return e.app.loading}))?r.a.createElement(S,null):t.length?t.map((function(e){return r.a.createElement(_,{post:e,key:e.id})})):r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e({type:"REQUEST_POSTS"})}},"Download")},T=function(){return r.a.createElement("div",{className:"container pt-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(y,null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,"Sync Posts"),r.a.createElement(g,null)),r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,"Async Posts"),r.a.createElement(w,null))))},x=n(24),N={posts:[],fetchedPosts:[]},D={loading:!1,alert:null},P=Object(c.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_POST":return Object(m.a)(Object(m.a)({},e),{},{posts:[].concat(Object(x.a)(e.posts),[t.payload])});case"FETCH_POST":return Object(m.a)(Object(m.a)({},e),{},{fetchedPosts:t.payload});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_LOADER":return Object(m.a)(Object(m.a)({},e),{},{loading:!0});case"HIDE_LOADER":return Object(m.a)(Object(m.a)({},e),{},{loading:!1});case"SHOW_ALERT":return Object(m.a)(Object(m.a)({},e),{},{alert:t.payload});case"HIDE_ALERT":return Object(m.a)(Object(m.a)({},e),{},{alert:null});default:return e}}}),A=["fuck","spam","php"];var R=n(22),H=n(10),L=n.n(H),k=n(9),I=L.a.mark(U),C=L.a.mark(W);function U(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.c)("REQUEST_POSTS",W);case 2:case"end":return e.stop()}}),I)}function W(){var e;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(k.b)({type:"SHOW_LOADER"});case 3:return t.next=5,Object(k.a)(X);case 5:return e=t.sent,t.next=8,Object(k.b)({type:"FETCH_POST",payload:e});case 8:return t.next=10,Object(k.b)({type:"HIDE_LOADER"});case 10:t.next=18;break;case 12:return t.prev=12,t.t0=t.catch(0),t.next=16,Object(k.b)(f("Something went wrong"));case 16:return t.next=18,Object(k.b)({type:"HIDE_LOADER"});case 18:case"end":return t.stop()}}),C,null,[[0,12]])}function X(){return F.apply(this,arguments)}function F(){return(F=Object(R.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts?_limit=7");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=Object(o.a)(),Q=Object(c.e)(P,Object(c.d)(Object(c.a)(l.a,(function(e){var t=e.dispatch;return function(e){return function(n){if("CREATE_POST"===n.type&&A.filter((function(e){return n.payload.title.includes(e)})).length)return t(f("No spam here!"));return e(n)}}}),J),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));J.run(U),i.a.render(r.a.createElement(s.a,{store:Q},r.a.createElement(T,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.c94759e7.chunk.js.map