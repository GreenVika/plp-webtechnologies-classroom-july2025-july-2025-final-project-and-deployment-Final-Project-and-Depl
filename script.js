// navigation toggle
document.addEventListener('DOMContentLoaded', ()=> {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  if(toggle){
    toggle.addEventListener('click', ()=> nav.classList.toggle('show'));
  }

  // set year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // simple scroll animation using IntersectionObserver
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('inview');
        obs.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});
  document.querySelectorAll('[data-animate]').forEach(el=> obs.observe(el));

  // form validation 
  const form = document.querySelector('form#contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      const name = form.querySelector('[name="name"]');
      const email = form.querySelector('[name="email"]');
      const msg = form.querySelector('[name="message"]');
      let ok = true;
      if(!name.value.trim()){ ok=false; name.classList.add('invalid'); }
      if(!/^\S+@\S+\.\S+$/.test(email.value)){ ok=false; email.classList.add('invalid'); }
      if(!msg.value.trim()){ ok=false; msg.classList.add('invalid'); }
      if(!ok){
        e.preventDefault();
        alert('Please fill the required fields correctly.');
      }
    });
  }
});
