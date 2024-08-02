import{i as l,S as i}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const u=n=>fetch(`https://pixabay.com/api/?key=45097598-139b329fd073a7b3efd511e46&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>(e.hits.length<=0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(e),e)),g=(n,e)=>{if(n.length<=0){e.innerHTML="";return}n.forEach(t=>{let a=`
        <li class="gallery-item">
            <a class="gallery-link" href=${t.largeImageURL}>
                <img
                class="gallery-image"
                src=${t.webformatURL}
                data-source=${t.largeImageURL}
                alt=${t.tags}
                title="${t.tags}"
                />
            </a>
            <ul class="content">
              <li class="content__data">
                <h3 class="content__title">Likes</h3>
                <span class="content__number">${t.likes}</span>
              </li>
              <li class="content__data">
                <h3 class="content__title">Views</h3>
                <span class="content__number">${t.views}</span>
              </li>
              <li class="content__data">
                <h3 class="content__title">Comments</h3>
                <span class="content__number">${t.comments}</span>
              </li>
              <li class="content__data">
                <h3 class="content__title">Downloads</h3>
                <span class="content__number">${t.downloads}</span>
              </li>
            </ul>
        </li>
    `;e.insertAdjacentHTML("afterbegin",a)})},h=document.querySelector("#myForm"),m=document.querySelector(".gallery"),c=document.querySelector(".loader");h.addEventListener("submit",n=>{n.preventDefault();let e=n.target.elements.search.value.trim();if(e===""){l.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}c.style.display="inline-block",u(e).then(t=>{g(t.hits,m),n.target.elements.search.value="",new i(".gallery a",{captionDelay:250}).refresh()}).catch(t=>{console.error(t),l.error({message:"Something went wrong. Please try again later."})}).finally(()=>{c.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
