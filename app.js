(function () {
"use strict";
const store=window.TIMELINES_DATA;
const app=document.getElementById("app");
const state={mode:"release",layout:"auto",branches:true,filter:"All",search:"",selected:null};
const symbol='<svg viewBox="0 0 100 160" fill="none" aria-hidden="true"><path d="M10 10H90V24H10ZM10 136H90V150H10Z" stroke="currentColor" stroke-width="6"/><path d="M20 24V47C20 70 40 78 50 87C60 78 80 70 80 47V24M20 136V113C20 90 40 82 50 73C60 82 80 90 80 113V136" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></svg>';
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const home=()=>location.hash===""||location.hash==="#/"||location.hash==="#";
function header(){return '<header class="header"><div class="wrap head-inner"><a class="brand" href="#/">'+symbol+'<span>Timelines<b>.</b></span></a><nav class="nav"><a href="#/collections">Discover</a><a href="#/collections" data-category-link="Films & television">Films & TV</a><a href="#/collections" data-category-link="History">History</a><a href="#/collections" data-category-link="Games">Games</a></nav><a href="#/collections" class="header-action">Explore timelines ↗</a></div></header>'}
function footer(){return '<footer class="footer"><div class="wrap foot-inner"><strong>Timelines.</strong><span>Every story has a timeline.</span><span>Prototype v0.1 · More collections coming soon</span></div></footer>'}
function collectionCard(c){return '<'+(c.available?'a href="#/marvel/release"':'button type="button" data-coming="'+esc(c.name)+'"')+' class="collection '+(c.available?'top-card':'')+'" data-category="'+esc(c.category)+'" data-terms="'+esc((c.name+" "+c.subtitle).toLowerCase())+'"><div class="eyebrow"><span>'+esc(c.category)+'</span><span>'+(c.available?'INTERACTIVE':'COMING SOON')+'</span></div><div class="art">'+esc(c.icon)+'</div><div class="lower"><div><h3>'+esc(c.name)+'</h3><p>'+esc(c.subtitle)+'</p></div><span class="arrow">↗</span></div></'+(c.available?'a':'button')+'>'}
function renderHome(){state.selected=null;app.innerHTML=header()+'<main id="main"><section class="hero wrap"><div class="kicker">Interactive histories, made visual</div><div class="hero-main"><div><h1>Every story<br>has a <em>timeline.</em></h1><p>Trace the moments that matter. Follow the main story, explore the branches, and discover how everything connects.</p><div class="hero-ctas"><a class="btn primary" href="#/marvel/release">Explore the Marvel demo →</a><a class="btn secondary" href="#/collections">Browse collections ↓</a></div></div><div class="hero-art">'+symbol.replace("<svg","<svg class=\"hourglass-large\"")+'<div class="hero-track"><span></span><span></span><span></span><span></span></div><div class="hero-art-label">A DIFFERENT WAY TO EXPLORE TIME</div></div></div><div class="hero-bottom"><span>01 / START EXPLORING</span><span>SCROLL TO DISCOVER ↓</span></div></section><section class="library" id="collections"><div class="wrap"><div class="section-head"><div class="kicker">The library</div><h2>Pick a story. <em>Follow its path.</em></h2><span class="note">GROWING ONE TIMELINE AT A TIME</span></div><div class="tools"><div class="filters">'+["All","Films & television","Television","Games","History"].map(n=>'<button class="filter '+(state.filter===n?'active':'')+'" data-filter="'+esc(n)+'">'+esc(n==="Films & television"?"Films & TV":n)+'</button>').join("")+'</div><input class="search" id="collection-search" aria-label="Search collections" placeholder="Search collections..." type="search" value="'+esc(state.search)+'"></div><div class="cards">'+store.collections.map(collectionCard).join("")+'</div><p class="small-note">Marvel is the working interactive demo. The other subjects show where the library can grow.</p></div></section><section class="how"><div class="wrap how-inner"><h2 class="ending">One story.<br><em>Many paths.</em></h2><div class="steps"><div class="step"><span class="number">01</span><div><strong>Follow the main line</strong><p>Travel through the important moments in a subject, from its origin onward.</p></div></div><div class="step"><span class="number">02</span><div><strong>Explore the branches</strong><p>Alternate continuities, prequels and related histories connect to the main timeline.</p></div></div><div class="step"><span class="number">03</span><div><strong>Discover the details</strong><p>Select a moment to open its title, date and a short explanation.</p></div></div></div></div></section></main>'+footer();bindHome();filterCards();if(location.hash==="#/collections")setTimeout(()=>document.querySelector("#collections").scrollIntoView(),0)}
function bindHome(){app.querySelectorAll("[data-filter]").forEach(x=>x.addEventListener("click",()=>{state.filter=x.dataset.filter;app.querySelectorAll("[data-filter]").forEach(b=>b.classList.toggle("active",b===x));filterCards()}));const input=app.querySelector("#collection-search");input.addEventListener("input",()=>{state.search=input.value;filterCards()});app.querySelectorAll("[data-coming]").forEach(b=>b.addEventListener("click",()=>alert(b.dataset.coming+" is planned for a future release.")));app.querySelectorAll("[data-category-link]").forEach(x=>x.addEventListener("click",()=>{state.filter=x.dataset.categoryLink}))}
function filterCards(){app.querySelectorAll(".collection").forEach(x=>{x.hidden=!(state.filter==="All"||x.dataset.category===state.filter)||!x.dataset.terms.includes(state.search.trim().toLowerCase())})}
const mobile=()=>matchMedia("(max-width:680px)").matches;
function layout(){return state.layout==="auto"?(mobile()?"vertical":"horizontal"):state.layout}
function pageMode(){const token=location.hash.split("/")[2];return store.marvel[token]?token:"release"}
function renderTimeline(){state.mode=pageMode();state.selected=null;const mode=store.marvel[state.mode];app.innerHTML=header()+'<main id="main"><section class="detail-head wrap"><div class="crumb"><a href="#/">Discover</a> › Marvel › '+esc(mode.label)+'</div><div class="detail-title"><div><div class="kicker" style="margin-top:27px">Collection 01 / Films & television</div><h1>Marvel Timeline<span style="color:var(--green)">.</span></h1><p>'+esc(mode.caption)+'</p></div><div class="counter">01 / 03</div></div></section><section class="toolbar"><div class="wrap toolbar-inner"><div class="tabs">'+Object.entries(store.marvel).map(([key,item])=>'<button class="'+(state.mode===key?'active':'')+'" data-mode="'+key+'">'+esc(item.label)+'</button>').join("")+'</div><div class="layout-switch"><span class="layout-label">LAYOUT</span>'+["auto","horizontal","vertical"].map(x=>'<button class="'+(state.layout===x?'active':'')+'" data-layout="'+x+'">'+(x==="auto"?"Auto":x==="horizontal"?"↔ Horizontal":"↕ Vertical")+'</button>').join("")+'</div></div></section><section class="timeline-shell" aria-label="Interactive Marvel timeline map"><div class="frame-top"><span>◉ &nbsp; '+(state.mode==="release"?"2000":esc(mode.events[0].date))+' — '+esc(mode.events[mode.events.length-1].date)+'</span><span class="hint">SWIPE OR DRAG IN ANY DIRECTION · TAP CIRCLES FOR DETAILS</span></div><div id="stage-scroller" class="stage-scroller" tabindex="0" role="region" aria-label="Timeline map. Swipe or scroll to visit events before or after the origin."><div id="timeline-stage" class="timeline-stage"></div></div><div class="frame-bottom"><span>'+(layout()==="vertical"?"↑ EARLIER EVENTS &nbsp; · &nbsp; LATER EVENTS ↓":"← EARLIER EVENTS &nbsp; · &nbsp; LATER EVENTS →")+'</span><button type="button" class="reset-origin" data-reset-origin>◎ Return to origin</button><div class="nudge"><button data-pan="-1" aria-label="Scroll backward">←</button><button data-pan="1" aria-label="Scroll forward">→</button></div></div></section><div class="wrap branch-options"><label><input type="checkbox" id="branches-toggle" '+(state.branches?'checked':'')+'> Show related branches and alternate continuities</label><span class="disclaimer">Prototype content is illustrative. Future entries will support image credits, citations and sources.</span></div></main>'+footer();app.querySelectorAll("[data-mode]").forEach(b=>b.addEventListener("click",()=>{location.hash="#/marvel/"+b.dataset.mode}));app.querySelectorAll("[data-layout]").forEach(b=>b.addEventListener("click",()=>{state.layout=b.dataset.layout;renderTimeline()}));app.querySelector("#branches-toggle").addEventListener("change",e=>{state.branches=e.target.checked;draw(true)});app.querySelectorAll("[data-pan]").forEach(b=>b.addEventListener("click",()=>{let x=document.querySelector("#stage-scroller");if(layout()==="vertical")x.scrollBy({top:320*Number(b.dataset.pan),behavior:"smooth"});else x.scrollBy({left:420*Number(b.dataset.pan),behavior:"smooth"})}));const x=app.querySelector("#stage-scroller");
  let dragging=false,startX=0,startY=0,left=0,top=0,moved=false;
  x.addEventListener("pointerdown",e=>{
    if(e.pointerType==="touch"||e.target.closest("button"))return;
    dragging=true;moved=false;startX=e.clientX;startY=e.clientY;
    left=x.scrollLeft;top=x.scrollTop;
  });
  x.addEventListener("pointermove",e=>{
    if(!dragging)return;
    const dx=e.clientX-startX,dy=e.clientY-startY;
    if(Math.abs(dx)+Math.abs(dy)<5)return;
    moved=true;x.classList.add("dragging");
    x.scrollLeft=left-dx;x.scrollTop=top-dy;
  });
  ["pointerup","pointercancel","pointerleave"].forEach(ev=>x.addEventListener(ev,()=>{
    dragging=false;setTimeout(()=>{x.classList.remove("dragging");moved=false},80);
  }));
  x.addEventListener("click",e=>{if(moved){e.preventDefault();e.stopPropagation()}},true);
  app.querySelector("[data-reset-origin]").addEventListener("click",()=>draw(true));
  draw(true)}
function makeNode(item,x,centre,secondary,origin){
  const btn=document.createElement("button");
  btn.type="button";
  btn.className="node"+(secondary?" secondary":"")+(origin?" is-origin":"");
  btn.style.left=x+"px";
  btn.style.top=(centre-38)+"px";
  btn.innerHTML=(origin?'<span class="origin">MCU ORIGIN · 2008</span>':"")+
    '<span class="circle">'+esc(item.icon)+'</span>'+
    '<span class="node-caption"><span class="date">'+esc(item.date)+'</span><span class="name">'+esc(item.title)+'</span></span>';
  btn.setAttribute("aria-label",item.title+", "+item.date+". Open details");
  btn.addEventListener("click",()=>openEvent(item,secondary));
  return btn;
}
/* The focal origin need not be the earliest date. Every track uses one shared
   chronological axis, so pre-origin film releases remain behind the origin. */
let previousVertical=null;
function draw(resetPosition=false){
  const stage=document.querySelector("#timeline-stage");
  const scroller=document.querySelector("#stage-scroller");
  if(!stage||!scroller)return;
  const vertical=layout()==="vertical", mode=store.marvel[state.mode];
  if(previousVertical!==null&&previousVertical!==vertical)resetPosition=true;
  previousVertical=vertical;
  const main=mode.events, branches=state.branches?mode.branches:[];
  const getYear=(o,fallback)=>Number.isFinite(Number(o.year))?Number(o.year):(parseInt(String(o.date),10)||fallback);
  const originYear=getYear(main[0],2008);
  const groups=branches.map((b,i)=>({
    ...b,
    items:(b.events&&b.events.length?b.events:[b]).map(e=>({...e,year:getYear(e,getYear(main[b.anchor||0],originYear))})),
    side:b.side||(i%2===0?"above":"below")
  }));
  const years=[...new Set(main.map((e,i)=>getYear(e,originYear+i)).concat(groups.flatMap(b=>b.items.map(e=>e.year))))].sort((a,b)=>a-b);
  const yearPosition=new Map(years.map((year,index)=>[year,index]));
  const stride=vertical?214:238, lead=vertical?200:190, tail=vertical?240:225;
  const axis=year=>lead+yearPosition.get(year)*stride;
  const originAxis=axis(originYear);
  const width=vertical?980:lead+(years.length-1)*stride+tail;
  const height=vertical?lead+(years.length-1)*stride+tail:690;
  const primary=vertical?480:300;
  const foxLane=vertical?795:112;
  const sonyLane=vertical?165:505;
  stage.style.width=width+"px";
  stage.style.height=height+"px";
  stage.style.minWidth="0";
  scroller.classList.toggle("vertical",vertical);
  const x=(year,lane)=>vertical?lane:axis(year),y=(year,lane)=>vertical?axis(year):lane;
  const path=[];
  const endAxis=axis(getYear(main[main.length-1],originYear));
  if(vertical)path.push('<path d="M'+primary+" "+originAxis+" V"+(endAxis+35)+'"/>');
  else path.push('<path d="M'+originAxis+" "+primary+" H"+(endAxis+55)+'"/>');
  const nodes=main.map((e,i)=>({event:e,x:x(getYear(e,originYear+i),primary),y:y(getYear(e,originYear+i),primary),secondary:false,origin:i===0}));
  const labels=[];
  groups.forEach((b,i)=>{
    const lane=i%2===0?foxLane:sonyLane;
    const yearsOnTrack=b.items.map(e=>e.year);
    const lo=Math.min(originYear,...yearsOnTrack),hi=Math.max(originYear,...yearsOnTrack);
    const first=axis(lo),last=axis(hi);
    const stroke=b.side==="above"?"fox":"sony";
    if(vertical){
      path.push('<path class="branch '+stroke+'" d="M'+primary+" "+originAxis+" H"+lane+'"/>');
      path.push('<path class="branch '+stroke+'" d="M'+lane+" "+first+" V"+last+'"/>');
    }else{
      path.push('<path class="branch '+stroke+'" d="M'+originAxis+" "+primary+" V"+lane+'"/>');
      path.push('<path class="branch '+stroke+'" d="M'+first+" "+lane+" H"+last+'"/>');
    }
    b.items.forEach(e=>nodes.push({event:e,x:x(e.year,lane),y:y(e.year,lane),secondary:true,origin:false}));
    labels.push({text:b.label,x:vertical?lane:Math.max(100,first),y:vertical?Math.max(40,first-85):lane-82});
  });
  stage.innerHTML='<svg class="timeline-lines" viewBox="0 0 '+width+" "+height+'" preserveAspectRatio="none" aria-hidden="true">'+path.join("")+'</svg>';
  labels.forEach(b=>{const el=document.createElement("span");el.className="branch-label";el.style.left=b.x+"px";el.style.top=b.y+"px";el.textContent=b.text;stage.appendChild(el)});
  nodes.forEach(p=>stage.appendChild(makeNode(p.event,p.x,p.y,p.secondary,p.origin)));
  if(resetPosition){
    requestAnimationFrame(()=>{
      if(!scroller.isConnected)return;
      scroller.scrollLeft=vertical?Math.max(0,primary-scroller.clientWidth*.45):Math.max(0,originAxis-scroller.clientWidth*.24);
      scroller.scrollTop=vertical?Math.max(0,originAxis-175):0;
    });
  }
}
function openEvent(item,branch){document.querySelectorAll(".panel-backdrop,.event-panel").forEach(x=>x.remove());const back=document.createElement("div");back.className="panel-backdrop";const panel=document.createElement("aside");panel.className="event-panel";panel.setAttribute("role","dialog");panel.setAttribute("aria-modal","true");panel.setAttribute("aria-label",item.title);panel.innerHTML='<div class="panel-header"><span class="panel-eyebrow">'+(branch?"RELATED BRANCH":"TIMELINE EVENT")+'</span><button class="close-panel" aria-label="Close details">×</button></div><div class="panel-icon">'+esc(item.icon)+'</div><div class="panel-date">'+esc(item.date)+'</div><h2>'+esc(item.title)+'</h2><p>'+esc(item.summary)+'</p><div class="panel-footer">This entry is part of the first Timelines prototype. Artwork and sourced details can be added as the library grows.</div>';document.body.append(back,panel);const close=()=>{back.remove();panel.remove();document.removeEventListener("keydown",onKey)};const onKey=e=>{if(e.key==="Escape")close()};back.addEventListener("click",close);panel.querySelector("button").addEventListener("click",close);document.addEventListener("keydown",onKey);panel.querySelector("button").focus()}
function route(){if(location.hash.startsWith("#/marvel/"))renderTimeline();else renderHome();window.scrollTo(0,0)}
window.addEventListener("hashchange",route);let resize;window.addEventListener("resize",()=>{clearTimeout(resize);resize=setTimeout(()=>{if(document.querySelector("#timeline-stage")&&state.layout==="auto")draw()},140)});route();
})();