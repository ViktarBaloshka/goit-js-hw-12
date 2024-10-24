import{a as u,i as h,S as L}from"./assets/vendor-Qob_5Ba8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const m=15,M="35721413-e0710a9b17feed22ef75fc503",x={key:M,imageType:"photo",orientation:"horizontal",safeSearch:"true",per_page:m};u.defaults.baseURL="https://pixabay.com/api/";async function f(i,s){const{data:a}=await u.get("",{params:{q:i,page:s,...x}});return a}function g(i){return i.map(({webformatURL:s,largeImageURL:a,tags:o,likes:t,views:r,comments:l,downloads:b})=>`<li class="gallery-card">
                  <a href="${a}">
                    <img class="gallery-img" src="${s}" alt="${o}">
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
                </li>`).join("")}const e={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-loader-more-btn")};let n=1,c="",y=0;e.searchForm.addEventListener("submit",B);e.loadMoreBtn.addEventListener("click",v);function p(){new L(".gallery a",{}).refresh()}async function B(i){i.preventDefault(),n=1;const s=i.currentTarget,{searchtext:a}=s.elements;c=a.value.trim(),e.gallery.innerHTML="",e.loader.classList.add("is-hidden"),e.loadMoreBtn.classList.add("is-hidden");try{const o=await f(c,n);y=Math.ceil(o.totalHits/m),c===""||o.hits.length===0?d():(e.gallery.insertAdjacentHTML("beforeend",g(o.hits)),e.loadMoreBtn.classList.remove("is-hidden"),p())}catch{d(),e.loadMoreBtn.classList.add("is-hidden")}finally{e.loader.classList.remove("is-hidden"),e.searchForm.reset()}}async function v(){n+=1,e.loader.classList.add("is-hidden"),e.loadMoreBtn.classList.add("is-hidden");let i=document.querySelector(".gallery-card").getBoundingClientRect().height;try{const s=await f(c,n);e.gallery.insertAdjacentHTML("beforeend",g(s.hits)),p(),n>=y?(e.loadMoreBtn.classList.add("is-hidden"),P()):e.loadMoreBtn.classList.remove("is-hidden"),window.scrollBy({top:Math.ceil(i*2),behavior:"smooth"})}catch{d()}finally{e.loader.classList.remove("is-hidden")}}function d(){h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),e.loadMoreBtn.classList.add("is-hidden")}function P(){h.warning({title:"Warning",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),e.loadMoreBtn.classList.add("is-hidden")}
//# sourceMappingURL=index.js.map
