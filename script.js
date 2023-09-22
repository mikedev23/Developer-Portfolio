document.addEventListener('DOMContentLoaded', function () {
  const e = document.getElementById('menu-toggle'),
    t = document.getElementById('dropdown-menu'),
    n = document.getElementById('contact-form'),
    a = document.getElementById('error-message')
  e.addEventListener('click', () => {
    t.classList.toggle('active')
  }),
    window.addEventListener('click', n => {
      t.contains(n.target) ||
        e.contains(n.target) ||
        t.classList.remove('active')
    }),
    t.addEventListener('mouseleave', () => {
      t.classList.remove('active')
    })
  const o = document.querySelector('textarea[name="message"]'),
    i = document.querySelector('.fa-message-lines')
  function s () {
    ;(o.style.height = 'auto'), (o.style.height = o.scrollHeight + 'px')
  }
  s(),
    o.addEventListener('input', s),
    o.addEventListener('focus', () => {
      i.classList.add('focus')
    }),
    o.addEventListener('blur', () => {
      i.classList.remove('focus')
    }),
    (document.querySelector('form').onsubmit = function () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  const l = ScrollReveal({
    duration: 1e3,
    origin: 'bottom',
    distance: '20px',
    delay: 100,
    easing: 'ease-out',
    reset: !0
  })
  l.reveal('.card', { interval: 200, viewFactor: 0.2, duration: 1400 }),
    l.reveal('.skill-badge', { interval: 100 }),
    l.reveal('.contact', { interval: 200, viewFactor: 0.2 }),
    l.reveal('.about', {
      delay: 100,
      duration: 1400,
      easing: 'ease-in-out',
      distance: '100px',
      origin: 'right',
      viewFactor: 0.2
    }),
    particlesJS('particles-container', {
    })
  ;(document.getElementById('hometownVideo').volume = 0.2),
    n.addEventListener('submit', function (e) {
      ;(a.textContent = ''),
        (n.name.value && n.email.value && n.message.value) ||
          (e.preventDefault(),
          (a.textContent = 'Please fill in all required fields.'))
    })
})
