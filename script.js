// Select the body and create the custom cursor
const body = document.querySelector('body');
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
body.appendChild(cursor);

// Create the particle effect function
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('glitch-particle');
    body.appendChild(particle);
    
    // Set particle position
    particle.style.left = `${x - 5}px`;
    particle.style.top = `${y - 5}px`;

    // Set random direction for particle animation
    const randomX = (Math.random() - 0.5) * 100;
    const randomY = (Math.random() - 0.5) * 100;

    particle.style.setProperty('--x', `${randomX}px`);
    particle.style.setProperty('--y', `${randomY}px`);

    // Remove the particle after animation ends
    setTimeout(() => {
        particle.remove();
    }, 1000);
}

// Track mouse movement to move the cursor and create particles
document.addEventListener('mousemove', (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    // Move the cursor to the mouse position
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;

    // Create a particle effect at the cursor position
    createParticle(mouseX, mouseY);
});


// Function to generate random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to create the particle and apply the color
function createParticle(x, y) {
  const particle = document.createElement('div');
  particle.classList.add('glitch-particle');
  
  // Set particle position
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  // Set random color
  particle.style.background = getRandomColor();

  // Append particle to the body
  document.body.appendChild(particle);

  // Remove particle after animation
  setTimeout(() => {
      particle.remove();
  }, 1000); // Adjust based on animation duration
}

// Attach mousemove event to create particles at the cursor
document.addEventListener('mousemove', (event) => {
  createParticle(event.pageX, event.pageY);
});




// Add "active" effect on hover for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .section-title');

interactiveElements.forEach((el) => {
  el.addEventListener('mouseover', () => {
    cursor.classList.add('active');
    // Crazy animations on hover
    gsap.to(cursor, {
      scale: 1.5,
      rotation: 360,
      duration: 0.3,
      ease: 'power4.out'
    });
  });

  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
    gsap.to(cursor, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: 'power4.in'
    });
  });
});

// Smooth Scroll to Sections
const menuLinks = document.querySelectorAll('nav a');

menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(link.getAttribute('href'));
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  });
});

// Section Highlighting on Scroll with Flashing Effect
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  sections.forEach((section) => {
    const sectionOffset = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
      section.classList.add('highlight');
      // Crazy flashing effect for highlighted section
      gsap.to(section, {
        opacity: 0.7,
        scale: 1.1,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'elastic.out(1, 0.5)',
      });
    } else {
      section.classList.remove('highlight');
      gsap.to(section, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        repeat: 0,
        yoyo: false,
      });
    }
  });
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '⬆️ Back to Top';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Show/Hide Back to Top Button with Crazy Bounce
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
    gsap.to(backToTopButton, {
      y: -30,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: 'bounce.out',
    });
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Toggle Show More Info on Skills and Certifications
const skillItems = document.querySelectorAll('.skill-item');
const certificationItems = document.querySelectorAll('.certification-item');

skillItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    // Wacky bouncing animation for clicked skill item
    gsap.to(item, {
      y: 15,
      repeat: 1,
      yoyo: true,
      duration: 0.3,
      ease: 'bounce.out',
    });
  });
});

certificationItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    gsap.to(item, {
      y: 15,
      repeat: 1,
      yoyo: true,
      duration: 0.3,
      ease: 'bounce.out',
    });
  });
});

// GSAP Timeline animation for the timeline items with flashy effects
gsap.from('.timeline-item', {
  scrollTrigger: {
    trigger: '.timeline-item',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: 1,
    toggleActions: 'play none none reverse',
  },
  opacity: 0,
  y: 50,
  ease: 'power4.out',
  stagger: 0.3,
  onComplete: () => {
    // Add a crazy effect when the animation is complete
    gsap.to('.timeline-item', {
      rotation: 360,
      scale: 1.2,
      duration: 0.5,
      ease: 'power4.in',
    });
  }
});

// GSAP animation for the dots to grow as you scroll with fun transformations
gsap.from('.timeline-dot', {
  scrollTrigger: {
    trigger: '.timeline-dot',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: 1,
  },
  scale: 0,
  opacity: 0,
  ease: 'power4.out',
  stagger: 0.3,
  onComplete: () => {
    gsap.to('.timeline-dot', {
      scale: 1.5,
      rotation: 720,
      duration: 0.7,
      ease: 'bounce.out',
    });
  }
});

// GSAP animation for continuous play in the Education Section
const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

timeline
  .fromTo(
    '.education-item',
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.5,
    }
  )
  .to('.education-item', {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: 'power4.in',
    stagger: 0.5,
  });

// Section Title Animation with Bounce
gsap.fromTo(
  '#about .section-title',
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' }
);

// Custom Cursor Styling for About Section with Wacky Transformations
const aboutSection = document.querySelector('#about');
const aboutImage = document.querySelector('.about-image img');
const aboutText = document.querySelector('.about-text');
const aboutWrapper = document.querySelector('.about-wrapper');

// When the cursor enters the About section, trigger animations
aboutSection.addEventListener('mouseenter', () => {
  aboutImage.style.transform = 'scale(1.1) rotate(20deg)';
  aboutText.style.opacity = '1';
  aboutText.style.transform = 'translateX(0)';
  aboutWrapper.style.opacity = '1';
  gsap.to(aboutImage, { rotation: 360, duration: 2 });
});

// When the cursor leaves the About section, revert animations
aboutSection.addEventListener('mouseleave', () => {
  aboutImage.style.transform = 'scale(1) rotate(0deg)';
  aboutText.style.opacity = '0';
  aboutText.style.transform = 'translateX(-100px)';
  aboutWrapper.style.opacity = '0';
  gsap.to(aboutImage, { rotation: 0, duration: 2 });
});

// Profile Image Animation with crazy scaling
gsap.fromTo(
  '.profile-img',
  { opacity: 0, scale: 0.5, rotationY: -90 },
  { opacity: 1, scale: 1, rotationY: 0, duration: 1.5, ease: 'expo.out' }
);

// Intro Text Animations with crazy bouncing effects
gsap.fromTo(
  '.intro-text',
  { opacity: 0, y: -50 },
  {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'elastic.out(1, 0.5)',
    stagger: 0.3,
  }
);
