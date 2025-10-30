(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.getElementById('themeToggle');
  const setTheme = (t)=>document.documentElement.classList.toggle('dark', t==='dark');
  setTheme(localStorage.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  if (toggle) toggle.addEventListener('click', ()=>{
    const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    localStorage.theme = next; setTheme(next);
  });

  const form = document.getElementById('contactForm');
  if (form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const out = document.getElementById('formResult');
      if(!name || !email || !message){ out.textContent = 'Please fill all fields.'; return; }
      out.textContent = 'Thanks! (Wire this form later.)';
      form.reset();
    });
  }

  const projects = [
    { title:'Project One', desc:'Quick blurb.', url:'#' },
    { title:'Project Two', desc:'Another short desc.', url:'#' },
    { title:'Project Three', desc:'Replace with real work.', url:'#' }
  ];
  const grid = document.getElementById('projectGrid');
  if (grid){
    grid.innerHTML = projects.map(p => `
      <article class="card">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <a class="link" href="${p.url}" target="_blank" rel="noopener">Open</a>
      </article>
    `).join('');
  }
})();
