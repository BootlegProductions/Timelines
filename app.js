(function () {
"use strict";
const store=window.TIMELINES_DATA;
const isTemplate=Boolean(window.TIMELINES_TEMPLATE);
const app=document.getElementById("app");
const state={mode:"release",layout:"auto",branches:true,filter:"All",search:"",selected:null,releaseType:"all",subject:"marvel"};
const symbol='<svg viewBox="0 0 100 160" fill="none" aria-hidden="true"><path d="M10 10H90V24H10ZM10 136H90V150H10Z" stroke="currentColor" stroke-width="6"/><path d="M20 24V47C20 70 40 78 50 87C60 78 80 70 80 47V24M20 136V113C20 90 40 82 50 73C60 82 80 90 80 113V136" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></svg>';
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const home=()=>location.hash===""||location.hash==="#/"||location.hash==="#";
function header(){return '<header class="header"><div class="wrap head-inner"><a class="brand" href="#/">'+symbol+'<span>Timelines<b>.</b></span></a><nav class="nav"><a href="#/collections">Discover</a><a href="#/category/Films%20%26%20television">Films &amp; TV</a><a href="#/category/History">History</a><a href="#/category/Games">Games</a></nav><a href="#/collections" class="header-action">Explore timelines ↗</a></div></header>'}
function footer(){return '<footer class="footer"><div class="wrap foot-inner"><strong>Timelines.</strong><span>Every story has a timeline.</span><span>Version 0.5 · An evolving visual archive</span></div></footer>'}
function collectionCard(c){return '<a href="#/collection/'+encodeURIComponent(c.slug)+'" class="collection '+(c.slug==="marvel"?"top-card":"")+' collection-'+esc(c.theme||"default")+'" data-category="'+esc(c.category)+'" data-terms="'+esc((c.name+" "+c.subtitle).toLowerCase())+'"><div class="eyebrow"><span>'+esc(c.category)+'</span><span>'+Object.keys(store[c.slug]||{}).length+' TIMELINES ↗</span></div><div class="art">'+esc(c.icon)+'</div><div class="lower"><div><h3>'+esc(c.name)+'</h3><p>'+esc(c.subtitle)+'</p></div><span class="arrow">↗</span></div></a>'}
function subjectInfo(slug){return store.collections.find(c=>c.slug===slug)}
function setTheme(slug){document.body.className="";const c=subjectInfo(slug);if(!isTemplate&&c?.theme)document.body.classList.add("theme-"+c.theme)}
function viewLink(slug,key){return '#/t/'+encodeURIComponent(slug)+'/'+encodeURIComponent(key)}
function visualFor(item){
 const title=String(item.title||"").toLowerCase(),slug=state.subject;let asset=null;
 if(slug==="marvel"){
 if(/iron man|stark|ironheart/.test(title))asset="iron";
 else if(/captain america|first avenger|civil war|steve rogers/.test(title))asset="shield";
 else if(/thor|ragnarok|asgard/.test(title))asset="hammer";
 else if(/spider.man|peter parker|miles morales/.test(title))asset="spider";
 else if(/hulk/.test(title))asset="hulk";
 else if(/x.men|wolverine|logan|mutant/.test(title))asset="mutant";
 else if(/avengers|infinity|endgame|doomsday/.test(title))asset="avengers";
 else if(/loki|doctor strange|multiverse|tva/.test(title))asset="portal";
 }else if(slug==="fallout")asset="vault";
 else if(slug==="minecraft")asset="block";
 else if(slug==="resident-evil")asset="bio";
 else if(slug==="dinosaurs")asset="dino";
 else if(slug==="universe")asset="cosmos";
 else if(slug==="ww1"||slug==="ww2")asset="history";
 if(item.image&&/^assets\/[a-zA-Z0-9/_-]+\.(svg|png|webp|jpg)$/.test(item.image))return '<img class="event-art" loading="lazy" src="'+esc(item.image)+'" alt="">';
 return asset?'<img class="event-art" loading="lazy" src="assets/'+asset+'.svg" alt="">':'<span class="event-glyph">'+esc(item.icon||"✦")+'</span>';
}
function renderHome(){setTheme(null);state.selected=null;app.innerHTML=header()+'<main id="main"><section class="hero wrap"><div class="kicker">Interactive histories, made visual</div><div class="hero-main"><div><h1>Every story<br>has a <em>timeline.</em></h1><p>Trace the moments that matter. Follow the main story, explore the branches, and discover how everything connects.</p><div class="hero-ctas"><a class="btn primary" href="#/marvel/release">'+(isTemplate?'Explore example timeline →':'Explore the Marvel demo →')+'</a><a class="btn secondary" href="#/collections">Browse collections ↓</a></div></div><div class="hero-art">'+symbol.replace("<svg","<svg class=\"hourglass-large\"")+'<div class="hero-track"><span></span><span></span><span></span><span></span></div><div class="hero-art-label">A DIFFERENT WAY TO EXPLORE TIME</div></div></div><div class="hero-bottom"><span>01 / START EXPLORING</span><span>SCROLL TO DISCOVER ↓</span></div></section><section class="library" id="collections"><div class="wrap"><div class="section-head"><div class="kicker">The library</div><h2>Pick a story. <em>Follow its path.</em></h2><span class="note">GROWING ONE TIMELINE AT A TIME</span></div><div class="tools"><div class="filters">'+["All","Films & television","Games","History"].map(n=>'<button class="filter '+(state.filter===n?'active':'')+'" data-filter="'+esc(n)+'">'+esc(n==="Films & television"?"Films & TV":n)+'</button>').join("")+'</div><input class="search" id="collection-search" aria-label="Search collections" placeholder="Search collections..." type="search" value="'+esc(state.search)+'"></div><div class="cards">'+store.collections.map(collectionCard).join("")+'</div><p class="small-note">Explore films, games, history and related chronologies — each collection has its own timeline views.</p></div></section><section class="how"><div class="wrap how-inner"><h2 class="ending">One story.<br><em>Many paths.</em></h2><div class="steps"><div class="step"><span class="number">01</span><div><strong>Follow the main line</strong><p>Travel through the important moments in a subject, from its origin onward.</p></div></div><div class="step"><span class="number">02</span><div><strong>Explore the branches</strong><p>Alternate continuities, prequels and related histories connect to the main timeline.</p></div></div><div class="step"><span class="number">03</span><div><strong>Discover the details</strong><p>Select a moment to open its title, date and a short explanation.</p></div></div></div></div></section></main>'+footer();bindHome();filterCards();if(location.hash==="#/collections")setTimeout(()=>document.querySelector("#collections").scrollIntoView(),0)}
function bindHome(){
 app.querySelectorAll("[data-filter]").forEach(x=>x.addEventListener("click",()=>{state.filter=x.dataset.filter;app.querySelectorAll("[data-filter]").forEach(b=>b.classList.toggle("active",b===x));filterCards()}));
 const input=app.querySelector("#collection-search");if(input)input.addEventListener("input",()=>{state.search=input.value;filterCards()});
}
function filterCards(){app.querySelectorAll(".collection").forEach(x=>{x.hidden=!(state.filter==="All"||x.dataset.category===state.filter)||!x.dataset.terms.includes(state.search.trim().toLowerCase())})}
const mobile=()=>matchMedia("(max-width:680px)").matches;
function layout(){return state.layout==="auto"?"horizontal":state.layout}
function pageMode(){const token=location.hash.split("/")[2];return store.marvel[token]?token:"release"}
function renderCategory(category){
 setTheme(null);const items=store.collections.filter(c=>c.category===category);
 app.innerHTML=header()+'<main id="main" class="section-page"><div class="wrap"><div class="crumb"><a href="#/">Home</a> › '+esc(category)+'</div><div class="kicker">Browse collections</div><h1 class="section-title">'+esc(category)+'<span>.</span></h1><p class="section-description">Choose a subject to explore its timeline views.</p><div class="cards">'+items.map(collectionCard).join("")+'</div><p class="section-return"><a class="btn secondary" href="#/collections">← All collections</a></p></div></main>'+footer();
}
function renderCollection(slug){
 const c=subjectInfo(slug);if(!c){renderHome();return}setTheme(slug);
 const views=store[slug]||{};
 app.innerHTML=header()+'<main id="main" class="section-page"><div class="wrap"><div class="crumb"><a href="#/">Home</a> › <a href="#/category/'+encodeURIComponent(c.category)+'">'+esc(c.category)+'</a> › '+esc(c.name)+'</div><div class="kicker">Timeline collection · '+esc(c.category)+'</div><div class="collection-hero"><div><h1 class="section-title">'+esc(isTemplate?"Example Timeline":c.name)+'<span>.</span></h1><p class="section-description">'+esc(c.blurb||c.subtitle)+'</p><p class="views-intro">SELECT A TIMELINE BELOW</p></div><span class="collection-emblem" aria-hidden="true">'+esc(c.icon)+'</span></div><div class="views-grid">'+Object.entries(views).map(([key,v],i)=>'<a class="view-card" href="#/t/'+encodeURIComponent(slug)+'/'+encodeURIComponent(key)+'"><span class="view-number">0'+(i+1)+' / 0'+Object.keys(views).length+'</span><span class="view-icon">'+esc(v.events[0]?.icon||"◎")+'</span><h2>'+esc(v.label)+'</h2><p>'+esc(v.caption)+'</p><span class="view-cta">Explore timeline →</span></a>').join("")+'</div><p class="section-return"><a class="btn secondary" href="#/category/'+encodeURIComponent(c.category)+'">← Back to '+esc(c.category)+'</a></p></div></main>'+footer();
}
function renderTimeline(slug,key){const col=subjectInfo(slug);if(!col||!store[slug]||!store[slug][key]){renderHome();return}state.subject=slug;state.mode=key;state.selected=null;setTheme(slug);const mode=store[slug][key];app.innerHTML=header()+'<main id="main"><section class="detail-head wrap"><div class="crumb"><a href="#/">Discover</a> › <a href="#/collection/'+encodeURIComponent(slug)+'">'+esc(isTemplate?'Template':col.name)+'</a> › '+esc(mode.label)+'</div><div class="detail-title"><div><div class="kicker" style="margin-top:27px">'+esc(col.category)+' / TIMELINE</div><h1>'+(isTemplate?'Example Timeline':col.name)+'<span style="color:var(--green)">.</span></h1><p>'+esc(mode.caption)+'</p></div><div class="counter">'+String(Object.keys(store[slug]).indexOf(key)+1).padStart(2,"0")+' / '+String(Object.keys(store[slug]).length).padStart(2,"0")+'</div></div></section><section class="toolbar"><div class="wrap toolbar-inner"><div class="tabs">'+Object.entries(store[slug]).map(([key,item])=>'<button class="'+(state.mode===key?'active':'')+'" data-mode="'+key+'">'+esc(item.label)+'</button>').join("")+'</div><div class="layout-switch"><span class="layout-label">LAYOUT</span>'+["auto","horizontal","vertical"].map(x=>'<button class="'+(state.layout===x?'active':'')+'" data-layout="'+x+'">'+(x==="auto"?"Auto":x==="horizontal"?"↔ Horizontal":"↕ Vertical")+'</button>').join("")+'</div></div></section><section class="timeline-shell" id="timeline-shell" aria-label="Interactive timeline map"><div class="frame-top"><span>◉ &nbsp; '+esc(mode.events[0]?.date||"")+' — '+esc(mode.events[mode.events.length-1].date)+'</span><div class="frame-actions"><span class="hint">SWIPE / DRAG · DOUBLE-TAP EMPTY SPACE TO EXPAND</span><button type="button" id="expand-timeline" aria-label="Expand timeline viewer" aria-pressed="false">⛶ <span>Expand</span></button><button type="button" id="close-immersive" class="immersive-close" aria-label="Close expanded timeline">✕ Close</button></div></div>'+('<div class="map-legend"><span><i class="swatch main-swatch"></i> Main timeline</span>'+((mode.branches||[]).map((b,i)=>'<span><i class="swatch '+(i%2===0?'fox-swatch':'sony-swatch')+'"></i> '+esc(b.label)+'</span>').join(""))+((mode.branches||[]).some(b=>b.rejoins&&b.rejoins.length)?'<span><i class="swatch join-swatch"></i> Connected events</span>':'')+'</div>')+'<div id="stage-scroller" class="stage-scroller" tabindex="0" role="region" aria-label="Timeline map. Swipe or scroll to visit events before or after the origin."><div id="timeline-stage" class="timeline-stage"></div></div><div class="frame-bottom"><span>'+(layout()==="vertical"?"↑ EARLIER EVENTS &nbsp; · &nbsp; LATER EVENTS ↓":"← EARLIER EVENTS &nbsp; · &nbsp; LATER EVENTS →")+'</span><button type="button" class="reset-origin" data-reset-origin>◎ Return to origin</button><div class="nudge"><button data-pan="-1" aria-label="Scroll backward">←</button><button data-pan="1" aria-label="Scroll forward">→</button></div></div></section><div class="wrap branch-options">'+((slug==="marvel"||isTemplate)&&state.mode==="release"?'<div class="release-type-tools"><span class="filter-label">SHOW</span>'+["all","film","series"].map(v=>'<button type="button" data-release-type="'+v+'" class="release-type '+(state.releaseType===v?"active":"")+'">'+(v==="all"?"All":v==="film"?"Films":"Series")+'</button>').join("")+'</div>':'')+'<label class="branch-visibility" '+((mode.branches||[]).length?'':'hidden')+'><input type="checkbox" id="branches-toggle" '+(state.branches?'checked':'')+'> Show related branches and alternate continuities</label><span class="disclaimer">Select any event for more context. Some dates are approximate, and icon art is provisional.</span></div></main>'+footer();app.querySelectorAll("[data-mode]").forEach(b=>b.addEventListener("click",()=>{location.hash="#/t/"+slug+"/"+b.dataset.mode}));app.querySelectorAll("[data-layout]").forEach(b=>b.addEventListener("click",()=>{state.layout=b.dataset.layout;renderTimeline(slug,key)}));app.querySelector("#branches-toggle").addEventListener("change",e=>{state.branches=e.target.checked;draw(true)});app.querySelectorAll("[data-release-type]").forEach(b=>b.addEventListener("click",()=>{state.releaseType=b.dataset.releaseType;app.querySelectorAll("[data-release-type]").forEach(el=>el.classList.toggle("active",el===b));draw(true)}));app.querySelectorAll("[data-pan]").forEach(b=>b.addEventListener("click",()=>{let x=document.querySelector("#stage-scroller");if(layout()==="vertical")x.scrollBy({top:450*Number(b.dataset.pan),behavior:"smooth"});else x.scrollBy({left:480*Number(b.dataset.pan),behavior:"smooth"})}));const x=app.querySelector("#stage-scroller");
  let dragging=false,startX=0,startY=0,left=0,top=0,moved=false;
  // Desktop mouse wheels move along the horizontal chronology; trackpad panning still works.
  x.addEventListener("wheel",e=>{
    if(layout()!=="horizontal"||e.ctrlKey)return;
    if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){
      e.preventDefault();
      x.scrollLeft+=e.deltaY;
    }
  },{passive:false});
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
  const shell=app.querySelector("#timeline-shell"),expand=app.querySelector("#expand-timeline"),close=app.querySelector("#close-immersive");
  const toggleImmersive=forced=>{
    const on=typeof forced==="boolean"?forced:!shell.classList.contains("immersive");
    shell.classList.toggle("immersive",on);document.body.classList.toggle("immersive-open",on);
    expand.setAttribute("aria-pressed",String(on));expand.querySelector("span").textContent=on?"Minimise":"Expand";
    close.style.display=on?"inline-flex":"none";
  };
  expand.addEventListener("click",()=>toggleImmersive());
  close.addEventListener("click",()=>toggleImmersive(false));
  let lastTap=0,tapX=0,tapY=0,scrollX=0,scrollY=0;
  x.addEventListener("pointerup",e=>{
    if(e.pointerType!=="touch"||e.target.closest(".node,button,.main-label,.branch-label"))return;
    const t=Date.now(),same=t-lastTap<360&&Math.abs(e.clientX-tapX)<48&&Math.abs(e.clientY-tapY)<48;
    const stationary=Math.abs(x.scrollLeft-scrollX)<8&&Math.abs(x.scrollTop-scrollY)<8;
    if(same&&stationary){toggleImmersive();lastTap=0;e.preventDefault()}
    else{lastTap=t;tapX=e.clientX;tapY=e.clientY;scrollX=x.scrollLeft;scrollY=x.scrollTop}
  },{passive:false});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&shell.classList.contains("immersive"))toggleImmersive(false)});
  draw(true)}
function makeNode(item,x,centre,secondary,origin,linked){
  const btn=document.createElement("button");
  btn.type="button";
  btn.className="node"+(secondary?" secondary":"")+(origin?" is-origin":"")+(linked?" is-crossover":"")+(item.type==="series"?" type-series":" type-film")+(item.status==="upcoming"?" is-upcoming":"");
  btn.style.left=x+"px";
  btn.style.top=(centre-38)+"px";
  const originText=isTemplate?"ORIGIN POINT":state.subject==="marvel"&&state.mode==="release"?(state.releaseType==="series"?"TV SERIES START":"MCU ORIGIN · 2008"):"ORIGIN POINT";
  btn.innerHTML=(origin?'<span class="origin">'+originText+'</span>':"")+
    '<span class="circle">'+visualFor(item)+'</span>'+
    '<span class="node-caption"><span class="date">'+esc(item.date)+'</span><span class="name">'+esc(item.title)+'</span>'+
    (state.mode==="release"?'<span class="item-kind">'+(item.status==="upcoming"?"UPCOMING · ":"")+(item.type==="series"?"SERIES":"FILM")+'</span>':"")+
    (linked?'<span class="join-caption">⇢ CROSSOVER</span>':"")+'</span>';
  btn.setAttribute("aria-label",item.title+", "+item.date+(linked?". Connected crossover event.":".") +" Open details");
  btn.addEventListener("click",()=>openEvent(item,secondary));
  return btn;
}
let previousVertical=null;
function draw(resetPosition=false){
  const stage=document.querySelector("#timeline-stage"), scroller=document.querySelector("#stage-scroller");
  if(!stage||!scroller)return;
  const vertical=layout()==="vertical", narrow=mobile(), mode=store[state.subject][state.mode];
  if(previousVertical!==null&&previousVertical!==vertical)resetPosition=true;
  previousVertical=vertical;
  const all=[];
  const main=mode.events.filter(e=>(state.subject!=="marvel"&&!isTemplate)||state.mode!=="release"||state.releaseType==="all"||(e.type||"film")===state.releaseType);
  const groups=(state.branches?mode.branches:[]).map((branch,i)=>({
    ...branch,
    laneIndex:i,
    items:(branch.events&&branch.events.length?branch.events:[{...branch,
      date:branch.date==="Alternate"?mode.events[branch.anchor||0].date:branch.date}]).filter(e=>(state.subject!=="marvel"&&!isTemplate)||state.mode!=="release"||state.releaseType==="all"||(e.type||"film")===state.releaseType)
  })).filter(branch=>branch.items.length);
  const sortable=item=>{
    if(item.sortDate)return item.sortDate;
    if(item.released)return item.released;
    const y=parseInt(String(item.date),10)||2008;
    return String(y).padStart(4,"0")+"-06-01";
  };
  if(!main.length){stage.innerHTML='<div class="empty-timeline">No entries match the selected filter.</div>';return}
  main.forEach((event,i)=>all.push({item:event,track:"main",key:"main/"+event.id,
    sort:sortable(event),secondary:false,origin:i===0}));
  groups.forEach(branch=>branch.items.forEach(item=>all.push({
    item,track:branch.id,key:branch.id+"/"+item.id,sort:sortable(item),secondary:true,origin:false
  })));
  // Use release-date precision where available: no stacked same-year movie nodes.
  const sorted=all.slice().sort((a,b)=>a.sort.localeCompare(b.sort)||a.key.localeCompare(b.key));
  const step=vertical?(narrow?170:188):180;
  const lead=vertical?190:195,tail=vertical?225:245;
  const map=new Map(sorted.map((item,i)=>[item.key,lead+i*step]));
  const axis=entry=>map.get(entry.key);
  const first=main[0];
  const originAxis=map.get("main/"+first.id);
  const mainEnd=map.get("main/"+main[main.length-1].id);
  const width=vertical?(narrow?430:850):lead+(sorted.length-1)*step+tail;
  const height=vertical?lead+(sorted.length-1)*step+tail:660;
  const spine=vertical?(narrow?102:420):320;
  const tracks=vertical?(narrow?[299,313]:[180,650]):[126,519];
  const lane=(track,index)=>track==="main"?spine:tracks[index%tracks.length];
  const px=(location,side)=>vertical?side:location;
  const py=(location,side)=>vertical?location:side;
  stage.style.width=width+"px";
  stage.style.height=height+"px";
  stage.style.minWidth="0";
  scroller.classList.toggle("vertical",vertical);
  const svg=[];
  svg.push('<defs><marker id="join-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#6e9954"/></marker></defs>');
  const segment=(start,end,side,style)=>{
    if(vertical)return '<path class="'+style+'" d="M '+side+" "+start+" V "+end+'"/>';
    return '<path class="'+style+'" d="M '+start+" "+side+" H "+end+'"/>';
  };
  const arrow=(position,side,primary)=>{
    const s=primary?"main-arrow":"branch-arrow";
    return vertical?'<path class="'+s+'" d="M '+(side-7)+" "+(position-5)+" L "+side+" "+(position+4)+" L "+(side+7)+" "+(position-5)+'"/>':
      '<path class="'+s+'" d="M '+(position-5)+" "+(side-7)+" L "+(position+4)+" "+side+" L "+(position-5)+" "+(side+7)+'"/>';
  };
  svg.push(segment(originAxis-35,mainEnd+40,spine,"main-track"));
  const mainEntries=all.filter(n=>n.track==="main");
  mainEntries.slice(1).forEach((e,i)=>svg.push(arrow((axis(e)+axis(mainEntries[i]))/2,spine,true)));
  const labels=[];
  const crossover=new Set();
  const rejoins=[];
  groups.forEach(branch=>{
    const side=lane(branch.id,branch.laneIndex);
    const nodes=all.filter(n=>n.track===branch.id);
    if(!nodes.length)return;
    const a=Math.min(...nodes.map(axis)),b=Math.max(...nodes.map(axis));
    svg.push(segment(a-10,b+24,side,"branch-track "+(branch.laneIndex===0?"fox-track":"sony-track")));
    nodes.slice(1).filter((_,i)=>i%2===0).forEach((e,i)=>{
      const preceding=nodes[nodes.indexOf(e)-1];
      svg.push(arrow((axis(e)+axis(preceding))/2,side,false));
    });
    labels.push({title:branch.label,position:a-93,side,track:branch.id});
    (branch.rejoins||[]).forEach(join=>{
      const source=map.get(branch.id+"/"+join.fromId),target=map.get("main/"+join.toId);
      if(source===undefined||target===undefined)return;
      const middle=(source+target)*.5;
      // Curved cross-continuity link; it does not mean the branch ceases to exist.
      const d=vertical?
        "M "+side+" "+source+" C "+side+" "+middle+", "+spine+" "+middle+", "+spine+" "+target:
        "M "+source+" "+side+" C "+middle+" "+side+", "+middle+" "+spine+", "+target+" "+spine;
      svg.push('<path class="rejoin-track" d="'+d+'" marker-end="url(#join-arrow)"/>');
      crossover.add(join.toId);
      rejoins.push(join);
    });
  });
  // Add SVG above the event buttons so the lines and their arrows remain behind cards.
  stage.innerHTML='<svg class="timeline-lines" viewBox="0 0 '+width+" "+height+'" aria-hidden="true">'+svg.join("")+'</svg>';
  const marker=document.createElement("span");
  marker.className="main-label";
  marker.textContent=isTemplate?"MAIN BRANCH":state.subject==="marvel"?"MAIN MCU TIMELINE":"MAIN TIMELINE";
  marker.style.left=px(originAxis+(!vertical?85:0),spine+(vertical?(narrow?75:64):0))+"px";
  marker.style.top=py(originAxis+(vertical?-108:0),spine+(vertical?0:-88))+"px";
  stage.appendChild(marker);
  labels.forEach(b=>{
    const el=document.createElement("span");
    el.className="branch-label";
    el.style.left=px(b.position,b.side)+"px";
    el.style.top=py(b.position,b.side-(!vertical?85:0))+"px";
    el.textContent=b.title;
    stage.appendChild(el);
  });
  all.forEach(n=>{
    const p=axis(n),side=n.track==="main"?spine:lane(n.track,groups.find(g=>g.id===n.track)?.laneIndex||0);
    stage.appendChild(makeNode(n.item,px(p,side),py(p,side),n.secondary,n.origin,crossover.has(n.item.id)&&n.track==="main"));
  });
  if(resetPosition)requestAnimationFrame(()=>{
    if(!scroller.isConnected)return;
    scroller.scrollLeft=vertical?(narrow?Math.max(0,spine-scroller.clientWidth*.28):Math.max(0,spine-scroller.clientWidth*.5)):Math.max(0,originAxis-scroller.clientWidth*.24);
    scroller.scrollTop=vertical?Math.max(0,originAxis-145):0;
  });
}
function openEvent(item,branch){document.querySelectorAll(".panel-backdrop,.event-panel").forEach(x=>x.remove());const back=document.createElement("div");back.className="panel-backdrop";const panel=document.createElement("aside");panel.className="event-panel";panel.setAttribute("role","dialog");panel.setAttribute("aria-modal","true");panel.setAttribute("aria-label",item.title);panel.innerHTML='<div class="panel-header"><span class="panel-eyebrow">'+(item.status==="upcoming"?"UPCOMING RELEASE":branch?"RELATED BRANCH":item.type==="series"?"TELEVISION SERIES":"TIMELINE EVENT")+'</span><button class="close-panel" aria-label="Close details">×</button></div><div class="panel-icon">'+visualFor(item)+'</div><div class="panel-date">'+esc(item.date)+'</div><h2>'+esc(item.title)+'</h2><p>'+esc(item.summary)+'</p>'+((item.source||store[state.subject][state.mode].source)&&/^https:\/\//.test(item.source||store[state.subject][state.mode].source)?'<p><a class="event-source" href="'+esc(item.source||store[state.subject][state.mode].source)+'" target="_blank" rel="noopener noreferrer">Further reading ↗</a></p>':'')+'<div class="panel-footer">Timeline information is being expanded. In-universe dates may be approximate; source links are provided where available.</div>';document.body.append(back,panel);const close=()=>{back.remove();panel.remove();document.removeEventListener("keydown",onKey)};const onKey=e=>{if(e.key==="Escape")close()};back.addEventListener("click",close);panel.querySelector("button").addEventListener("click",close);document.addEventListener("keydown",onKey);panel.querySelector("button").focus()}
function route(){const token=location.hash.startsWith("#/")?location.hash.slice(2):"";const a=token.split("/").map(decodeURIComponent);if(a[0]==="t"&&a[1]&&a[2])renderTimeline(a[1],a[2]);else if(a[0]==="marvel"&&a[1])renderTimeline("marvel",a[1]);else if(a[0]==="collection"&&a[1])renderCollection(a[1]);else if(a[0]==="category"&&a[1])renderCategory(a[1]);else renderHome();window.scrollTo(0,0)}
window.addEventListener("hashchange",route);let resize;window.addEventListener("resize",()=>{clearTimeout(resize);resize=setTimeout(()=>{if(document.querySelector("#timeline-stage")&&state.layout==="auto")draw()},140)});route();
})();