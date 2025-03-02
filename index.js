import{a as f,i as p,S as y}from"./assets/vendor-KnZd4sWe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="49129723-e1a4448186c17e12c6eff5cb4",d="https://pixabay.com/api/";async function g(o){try{return(await f.get(d,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch{return iziToast.error({title:"Error",message:"Sorry, there was an error fetching images. Please try again!",position:"topRight"}),[]}}const h=document.querySelector(".gallery");function S(o){if(o.length===0){p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const t=o.map(({webformatURL:n,largeImageURL:e,tags:r,likes:i,views:c,comments:l,downloads:u})=>`
      <li class="gallery-item">
        <a href="${e}" class="gallery-link">
          <img src="${n}" alt="${r}" class="gallery-image"/>
        </a>
        <div class="info">
          <p>❤️ ${i}</p>
          <p>👁 ${c}</p>
          <p>💬 ${l}</p>
          <p>⬇️ ${u}</p>
        </div>
      </li>`).join("");h.innerHTML=t,new y(".gallery a").refresh()}const b=document.querySelector("#search-form"),L=document.querySelector("#search-input"),a=document.querySelector(".loader"),q=document.querySelector(".gallery");b.addEventListener("submit",async o=>{o.preventDefault();const t=L.value.trim();if(t){q.innerHTML="",a.style.display="block";try{const s=await g(t);S(s)}catch(s){console.error("Помилка:",s)}finally{a.style.display="none"}}});
//# sourceMappingURL=index.js.map
