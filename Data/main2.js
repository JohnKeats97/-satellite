!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";var o=document.getElementById("scene"),r=new THREE.Scene,a=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,.1,1e4),i=new THREE.WebGLRenderer({antialias:!0});i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(16777215),o.appendChild(i.domElement),a.position.z=190;var d=new THREE.DirectionalLight(16579048,1);r.add(d);var l=new THREE.AmbientLight("#cbc9bb");r.add(l),(new THREE.LoadingManager).onProgress=function(e,n,t){};var u=function(e){if(e.lengthComputable){var n=e.loaded/e.total*100;console.log(Math.round(n,2)+"% downloaded")}},c=function(e){},E=new THREE.OBJLoader;E.load("../model/House_Complex.obj",function(e){r.add(e)},u,c);var s=new THREE.TrackballControls(a);s.rotateSpeed=1,s.zoomSpeed=1.2,s.panSpeed=.8;!function e(){requestAnimationFrame(e),s.update(),i.render(r,a)}(),document.getElementById("button").addEventListener("click",function(){var e=document.getElementById("X"),n=document.getElementById("Y"),t=document.getElementById("H"),o=document.getElementById("A"),a=document.getElementById("U");a=Math.tan(+a.value*Math.PI/180);var i=+t.value/a;o=+o.value*Math.PI/180,e=+e.value,n=+n.value;var d=Math.cos(o),l=Math.sin(o),s=e-i*l,m=n+i*d,p=new THREE.Geometry;p.vertices.push(new THREE.Vector3(e,60,n)),p.vertices.push(new THREE.Vector3(s,t.value,m));var v=new THREE.LineBasicMaterial({color:14886454,linewidth:3}),w=new THREE.Line(p,v);r.add(w),E.load("../model/omid.obj",function(e){e.position.x=s,e.position.y=+t.value,e.position.z=m+130,r.add(e),console.log(e)},u,c)})}]);