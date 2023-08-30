// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle')
  const dropdownMenu = document.getElementById('dropdown-menu')
  const form = document.getElementById('contact-form')
  const errorMessage = document.getElementById('error-message')

  menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active')
  })

  // Close the dropdown when clicking outside or on mouse leave
  window.addEventListener('click', event => {
    if (
      !dropdownMenu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      dropdownMenu.classList.remove('active')
    }
  })

  dropdownMenu.addEventListener('mouseleave', () => {
    dropdownMenu.classList.remove('active')
  })

  const textarea = document.querySelector('textarea[name="message"]')
  const icon = document.querySelector('.fa-message-lines')

  // Function to adjust textarea height based on content
  function adjustTextarea () {
    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + 'px'
  }

  // Initial adjust on page load
  adjustTextarea()

  // Adjust textarea whenever content changes
  textarea.addEventListener('input', adjustTextarea)

  // Add focus effect when textarea is focused
  textarea.addEventListener('focus', () => {
    icon.classList.add('focus')
  })

  // Remove focus effect when textarea loses focus
  textarea.addEventListener('blur', () => {
    icon.classList.remove('focus')
  })

  // Scroll Reveal
  const sr = ScrollReveal({
    duration: 1000, // Duration of animation in milliseconds
    origin: 'bottom', // Origin of the animation (top, right, bottom, left)
    distance: '20px', // Distance from the origin in pixels
    delay: 100, // Delay before animation starts in milliseconds
    easing: 'ease-out', // Easing function for the animation
    reset: true // Resets the animation when scrolling back up
  })

  // Apply the animation to specific elements
  sr.reveal('.card', {
    interval: 200,
    viewFactor: 0.2,
    duration: 1400
  })

  sr.reveal('.skill-badge', {
    interval: 100
  })

  sr.reveal('.contact', {
    interval: 200,
    viewFactor: 0.2
  })

  sr.reveal('.about', {
    delay: 100,
    duration: 1400,
    easing: 'ease-in-out',
    distance: '100px',
    origin: 'right',
    viewFactor: 0.2
  })

  // PARTICLES ANIMATION
  particlesJS('particles-container', {
    particles: {
      number: {
        value: 0,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#1b1e34'
      },
      shape: {
        type: 'image',
        stroke: {
          width: 0,
          color: '#000'
        },
        polygon: {
          nb_sides: 6
        },
        image: {
          src: './public/neon-cat.gif',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: true,
          speed: 10,
          size_min: 40,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 300,
        color: '#ffffff',
        opacity: 1,
        width: 4
      },
      move: {
        enable: true,
        speed: 8,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: false,
          mode: 'repulse'
        },
        onclick: {
          enable: true,
          mode: 'bubble'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  })

  // Video Volume
  const videoElement = document.getElementById('hometownVideo')
  videoElement.volume = 0.2

  form.addEventListener('submit', function (event) {
    // Clear previous error message
    errorMessage.textContent = ''

    // Check if required fields are filled
    if (!form.name.value || !form.email.value || !form.message.value) {
      event.preventDefault()
      errorMessage.textContent = 'Please fill in all required fields.'
    }
  })
})
