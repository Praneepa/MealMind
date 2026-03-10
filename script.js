// Mobile Nav
document.addEventListener('DOMContentLoaded',function(){
    var t=document.getElementById('mobileToggle'),n=document.getElementById('navLinks');
    if(t&&n){t.addEventListener('click',function(){n.classList.toggle('active')});
    n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('active')})})}
});
// Scroll nav
window.addEventListener('scroll',function(){var n=document.getElementById('navbar');if(n)n.classList.toggle('scrolled',window.scrollY>50)});
// Scroll reveal
document.addEventListener('DOMContentLoaded',function(){
    var els=document.querySelectorAll('.why-card,.step-block,.rev-card,.blog-card,.feat-card,.price-card,.val-card,.stat-box,.feature-text,.feature-img,.about-text,.about-img,.pref-item,.benefit-item');
    var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)';obs.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
    els.forEach(function(el,i){el.style.opacity='0';el.style.transform='translateY(20px)';el.style.transition='opacity .5s ease '+(i%4)*.07+'s,transform .5s ease '+(i%4)*.07+'s';obs.observe(el)});
});
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();var t=document.querySelector(this.getAttribute('href'));if(t)t.scrollIntoView({behavior:'smooth',block:'start'})})});
