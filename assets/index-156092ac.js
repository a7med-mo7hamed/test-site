(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();const l=document.querySelector(".create-task-form__task-name"),u=document.querySelector(".create-task-form__add"),c=document.querySelector(".tasks-list");let o=[];window.localStorage.getItem("tasks")&&(o=JSON.parse(window.localStorage.getItem("tasks")));function m(e){c.innerHTML="",e.forEach(s=>{const a=document.createElement("div"),i=document.createElement("div"),t=document.createElement("div"),n=document.createElement("button"),r=document.createElement("button");a.prepend(i),a.append(t),i.textContent=s.title,t.prepend(n,r),n.innerHTML='<i class="fa-solid fa-pen-to-square"></i>',r.innerHTML='<i class="fa-solid fa-trash"></i>',a.classList.add("tasks-list__item"),s.completed&&a.classList.add("done"),a.setAttribute("data-id",s.id),i.classList.add("task-item__name"),t.classList.add("task-item__actions"),n.classList.add("edit-task","btn"),r.classList.add("delete-task","btn"),c.append(a)})}function d(e){window.localStorage.setItem("tasks",JSON.stringify(e))}function f(e){const s={id:Date.now(),title:e,completed:!1};o.push(s),m(o),d(o)}u.addEventListener("click",()=>{l.value!==""&&(f(l.value),l.value="")});function p(){const e=window.localStorage.getItem("tasks");if(e){const s=JSON.parse(e);m(s)}}p();function g(e){o=o.filter(s=>s.id!==Number(e)),d(o)}c.addEventListener("click",e=>{e.target.parentElement.classList.contains("delete-task")&&(g(e.target.parentElement.parentElement.parentElement.getAttribute("data-id")),e.target.parentElement.parentElement.parentElement.remove())});function k(e){const s=o.length;for(let a=0;a<s;a+=1)o[a].id===Number(e)&&(o[a].completed===!1?o[a].completed=!0:o[a].completed=!1);d(o)}c.addEventListener("click",e=>{e.target.parentElement.classList.contains("tasks-list__item")&&(k(e.target.parentElement.getAttribute("data-id")),e.target.parentElement.classList.toggle("done"))});
