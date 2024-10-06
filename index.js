import{a as n,i as d,S as m}from"./assets/vendor-Qob_5Ba8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const f=1,p=15,h="35721413-e0710a9b17feed22ef75fc503",y={key:h,imageType:"photo",orientation:"horizontal",safeSearch:"true",page:f,per_page:p};n.defaults.baseURL="https://pixabay.com/api/";async function g(i){const{data:r}=await n.get("",{params:{...y,q:i}});return r}function b(i){return i.map(({webformatURL:r,largeImageURL:a,tags:o,likes:e,views:t,comments:c,downloads:u})=>`<li class="gallery-card">
                  <a href="${a}">
                    <img class="gallery-img" src="${r}" alt="${o}">
                  </a>
                  <ul class="describe-box">    
                        <li class="item">
                          <h2 class="describe-title">Likes</h2>
                          <p class="describe-text">${e}</p>
                        </li>
                        <li class="item">
                          <h2 class="describe-title">Views</h2>
                          <p class="describe-text">${t}</p>
                        </li>
                        <li class="item">
                          <h2 class="describe-title">Comments</h2>
                        <p class="describe-text">${c}</p>
                        </li>
                        <li class="item">
                          <h2 class="describe-title">Downloads</h2>
                          <p class="describe-text">${u}</p>
                        </li>
                  </ul>
                </li>`).join("")}const s={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-loader-more-btn")};s.searchForm.addEventListener("submit",L);async function L(i){i.preventDefault();const r=i.currentTarget,{searchtext:a}=r.elements,o=a.value.trim();if(o===""){d.error({title:"Warning",message:"Search query cannot be empty. Please enter a search term.",position:"topRight"});return}s.gallery.innerHTML="",s.loader.classList.add("isVisible");try{const e=await g(o);if(e.hits.length===0)l();else{s.gallery.insertAdjacentHTML("beforeend",b(e.hits)),s.loadMoreBtn.classList.remove("is-hidden");const t=new m(".gallery a",{})}}catch{l(),s.loadMoreBtn.classList.add("is-hidden")}finally{s.loader.classList.remove("isVisible"),s.searchForm.reset()}}function l(){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),s.loadMoreBtn.classList.add("is-hidden")}
//# sourceMappingURL=index.js.map
