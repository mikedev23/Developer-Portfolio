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
      particles: {
        number: { value: 0, density: { enable: !0, value_area: 800 } },
        color: { value: '#1b1e34' },
        shape: {
          type: 'image',
          stroke: { width: 0, color: '#000' },
          polygon: { nb_sides: 6 },
          image: { src: './public/neon-cat.gif', width: 100, height: 100 }
        },
        opacity: {
          value: 0.3,
          random: !0,
          anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 }
        },
        size: {
          value: 20,
          random: !1,
          anim: { enable: !0, speed: 10, size_min: 40, sync: !1 }
        },
        line_linked: {
          enable: !0,
          distance: 300,
          color: '#ffffff',
          opacity: 1,
          width: 4
        },
        move: {
          enable: !0,
          speed: 8,
          direction: 'none',
          random: !0,
          straight: !1,
          out_mode: 'out',
          bounce: !1,
          attract: { enable: !0, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: !1, mode: 'repulse' },
          onclick: { enable: !0, mode: 'bubble' },
          resize: !0
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: { distance: 200 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 }
        }
      },
      retina_detect: !0
    })
  ;(document.getElementById('hometownVideo').volume = 0.2),
    n.addEventListener('submit', function (e) {
      ;(a.textContent = ''),
        (n.name.value && n.email.value && n.message.value) ||
          (e.preventDefault(),
          (a.textContent = 'Please fill in all required fields.'))
    })
})
