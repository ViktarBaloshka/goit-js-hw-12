import{a as l,i as u,S as d}from"./assets/vendor-Qob_5Ba8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const m=1,f=15,p="35721413-e0710a9b17feed22ef75fc503",h={key:p,imageType:"photo",orientation:"horizontal",safeSearch:"true",page:m,per_page:f};l.defaults.baseURL="https://pixabay.com/api/";async function y(s){try{const{data:t}=await l.get("",{params:{...h,q:s}});return t}catch(t){throw console.error(t.message),t}}function g(s){return s.map(({webformatURL:t,largeImageURL:c,tags:i,likes:e,views:r,comments:a,downloads:n})=>`<li class="gallery-card">
                  <a href="${c}">
                    <img class="gallery-img" src="${t}" alt="${i}">
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
                        <p class="describe-text">${a}</p>
                        </li>
                        <li class="item">
                          <h2 class="describe-title">Downloads</h2>
                          <p class="describe-text">${n}</p>
                        </li>
                  </ul>
                </li>`).join("")}const o={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".js-loader")};o.searchForm.addEventListener("submit",b);function b(s){s.preventDefault();const t=s.currentTarget,{searchtext:c}=t.elements,i=c.value.trim();if(i===""){u.error({title:"Warning",message:"Search query cannot be empty. Please enter a search term.",position:"topRight"});return}o.gallery.innerHTML="",o.loader.classList.add("isVisible"),y(i).then(e=>{e.hits.length===0?fetchError():(o.gallery.insertAdjacentHTML("beforeend",g(e.hits)),new d(".gallery a",{}))}).catch(e=>{fetchError(e)}).finally(()=>{o.loader.classList.remove("isVisible"),o.searchForm.reset()})}
//# sourceMappingURL=index.js.map
