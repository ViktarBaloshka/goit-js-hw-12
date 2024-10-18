import{a as m,i as h,S as f}from"./assets/vendor-Qob_5Ba8.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();let L=1;const p=15,M="35721413-e0710a9b17feed22ef75fc503",P={key:M,imageType:"photo",orientation:"horizontal",safeSearch:"true",page:L,per_page:p};m.defaults.baseURL="https://pixabay.com/api/";async function y(s){const{data:i}=await m.get("",{params:{...P,q:s}});return i}function g(s){return s.map(({webformatURL:i,largeImageURL:o,tags:a,likes:e,views:r,comments:l,downloads:b})=>`<li class="gallery-card">
                  <a href="${o}">
                    <img class="gallery-img" src="${i}" alt="${a}">
                  </a>
                  <ul class="describe-box">    
                        <li class="item">
                          <h2 class="describe-title">Likes</h2>
                          <p class="describe-text">${e}</p>
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
                </li>`).join("")}const t={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-loader-more-btn")};let c=1,n="",d=0;t.searchForm.addEventListener("submit",x);async function x(s){s.preventDefault();const i=s.currentTarget,{searchtext:o}=i.elements;if(n=o.value.trim(),n===""){h.error({title:"Warning",message:"Search query cannot be empty. Please enter a search term.",position:"topRight"});return}t.gallery.innerHTML="",t.loader.classList.add("isVisible"),t.loadMoreBtn.classList.add("is-hidden");try{const a=await y(n,c);if(d=Math.ceil(d/p),a.hits.length===0)u();else{t.gallery.insertAdjacentHTML("beforeend",g(a.hits)),t.loadMoreBtn.classList.remove("is-hidden");const e=new f(".gallery a",{})}}catch{u(),t.loadMoreBtn.classList.add("is-hidden")}finally{t.loader.classList.remove("isVisible"),t.searchForm.reset()}}t.loadMoreBtn.addEventListener("click",S);function S(){c+=1,t.loader.classList.add("isVisible"),t.loadMoreBtn.classList.add("is-hidden");try{y(n,c),t.gallery.insertAdjacentHTML("beforeend",g(data.hits)),new f(".gallery a",{}).refresh(),c>=d?t.loadMoreBtn.classList.add("is-hidden"):t.loadMoreBtn.classList.remove("is-hidden")}catch{u()}finally{t.loader.classList.remove("isVisible")}}function u(){h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),t.loadMoreBtn.classList.add("is-hidden")}
//# sourceMappingURL=index.js.map
