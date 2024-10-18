import{a as u,i as h,S as L}from"./assets/vendor-Qob_5Ba8.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const f=15,M="35721413-e0710a9b17feed22ef75fc503",x={key:M,imageType:"photo",orientation:"horizontal",safeSearch:"true",per_page:f};u.defaults.baseURL="https://pixabay.com/api/";async function m(s,i){const{data:o}=await u.get("",{params:{q:s,page:i,...x}});return o}function p(s){return s.map(({webformatURL:i,largeImageURL:o,tags:a,likes:t,views:r,comments:l,downloads:b})=>`<li class="gallery-card">
                  <a href="${o}">
                    <img class="gallery-img" src="${i}" alt="${a}">
                  </a>
                  <ul class="describe-box">    
                        <li class="item">
                          <h2 class="describe-title">Likes</h2>
                          <p class="describe-text">${t}</p>
                        </li>
                        <li class="item">
                          <h2 class="describe-title">Views</h2>
                          <p class="describe-text">${r}</p>
                        </li>
                        <li class="item">
                          <h2 class="describe-title">Comments</h2>
                        <p class="describe-text">${l}</p>
                        </li>
                        <li class="item">
                          <h2 class="describe-title">Downloads</h2>
                          <p class="describe-text">${b}</p>
                        </li>
                  </ul>
                </li>`).join("")}const e={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-loader-more-btn")};let n=1,c="",y=0;e.searchForm.addEventListener("submit",P);e.loadMoreBtn.addEventListener("click",v);function g(){new L(".gallery a",{}).refresh()}async function P(s){s.preventDefault(),n=1;const i=s.currentTarget,{searchtext:o}=i.elements;c=o.value.trim(),e.gallery.innerHTML="",e.loader.classList.add("is-hidden"),e.loadMoreBtn.classList.add("is-hidden");try{const a=await m(c,n);y=Math.ceil(a.totalHits/f),c===""||a.hits.length===0?d():(e.gallery.insertAdjacentHTML("beforeend",p(a.hits)),e.loadMoreBtn.classList.remove("is-hidden"),g())}catch{d(),e.loadMoreBtn.classList.add("is-hidden")}finally{e.loader.classList.remove("is-hidden"),e.searchForm.reset()}}async function v(){n+=1,e.loader.classList.add("is-hidden"),e.loadMoreBtn.classList.add("is-hidden");try{const s=await m(c,n);e.gallery.insertAdjacentHTML("beforeend",p(s.hits)),g(),n>=y?(e.loadMoreBtn.classList.add("is-hidden"),B()):e.loadMoreBtn.classList.remove("is-hidden")}catch{d()}finally{e.loader.classList.remove("is-hidden")}}function d(){h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:"3000"}),e.loadMoreBtn.classList.add("is-hidden")}function B(){h.warning({title:"Warning",message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:"3000"}),e.loadMoreBtn.classList.add("is-hidden")}
//# sourceMappingURL=index.js.map
