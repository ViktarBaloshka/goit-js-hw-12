import{a as h,i as u,S as L}from"./assets/vendor-Qob_5Ba8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const m=15,M="35721413-e0710a9b17feed22ef75fc503",B={key:M,imageType:"photo",orientation:"horizontal",safeSearch:"true",per_page:m};h.defaults.baseURL="https://pixabay.com/api/";async function f(i,r){const{data:a}=await h.get("",{params:{q:i,page:r,...B}});return a}function p(i){return i.map(({webformatURL:r,largeImageURL:a,tags:o,likes:t,views:s,comments:l,downloads:b})=>`<li class="gallery-card">
                  <a href="${a}">
                    <img class="gallery-img" src="${r}" alt="${o}">
                  </a>
                  <ul class="describe-box">    
                        <li class="item">
                          <h2 class="describe-title">Likes</h2>
                          <p class="describe-text">${t}</p>
                        </li>
                        <li class="item">
                          <h2 class="describe-title">Views</h2>
                          <p class="describe-text">${s}</p>
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
                </li>`).join("")}const e={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-loader-more-btn")};let n=1,c="",y=0;e.searchForm.addEventListener("submit",x);e.loadMoreBtn.addEventListener("click",P);function g(){new L(".gallery a",{}).refresh()}async function x(i){i.preventDefault(),n=1;const r=i.currentTarget,{searchtext:a}=r.elements;if(c=a.value.trim(),c==="")return q();e.gallery.innerHTML="",e.loader.classList.add("isVisible"),e.loadMoreBtn.classList.add("is-hidden");try{const o=await f(c,n);y=Math.ceil(o.totalHits/m),o.hits.length===0?d():(e.gallery.insertAdjacentHTML("beforeend",p(o.hits)),e.loadMoreBtn.classList.remove("is-hidden"),g())}catch{d(),e.loadMoreBtn.classList.add("is-hidden")}finally{e.loader.classList.remove("isVisible"),e.searchForm.reset()}}async function P(){n+=1,e.loader.classList.add("isVisible"),e.loadMoreBtn.classList.add("is-hidden");let i=document.querySelector(".gallery-card").getBoundingClientRect().height;try{const r=await f(c,n);e.gallery.insertAdjacentHTML("beforeend",p(r.hits)),g(),n>=y?(e.loadMoreBtn.classList.add("is-hidden"),S()):e.loadMoreBtn.classList.remove("is-hidden"),window.scrollBy({top:Math.ceil(i*2),behavior:"smooth"})}catch{d()}finally{e.loader.classList.remove("isVisible")}}function d(){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3}),e.loadMoreBtn.classList.add("is-hidden")}function S(){u.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:2e3}),e.loadMoreBtn.classList.add("is-hidden")}function q(){u.info({message:"Search query cannot be empty. Please enter a search term.",position:"topRight",timeout:2e3}),e.loadMoreBtn.classList.add("is-hidden")}
//# sourceMappingURL=index.js.map
