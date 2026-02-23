function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id], main[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 150) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

function setupSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

function setupExploreButton() {
  const exploreBtn = document.getElementById('exploreJourney');
  
  if (exploreBtn) {
    exploreBtn.addEventListener('click', function() {
      const journeySection = document.getElementById('journey');
      
      if (journeySection) {
        const offsetTop = journeySection.offsetTop - 80;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }
}

function setupMobileMenu() {

  const navLinks = document.querySelector('.nav-links');
  
  function checkMobileMenu() {
    if (window.innerWidth <= 768) {
      
    }
  }
  
  window.addEventListener('resize', checkMobileMenu);
  checkMobileMenu();
}

function initLoadAnimation() {
  document.body.style.opacity = '0';
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s ease';
      document.body.style.opacity = '1';
    }, 100);
  });
}

function createBackToTopButton() {
  const backToTop = document.createElement('button');
  backToTop.innerHTML = '↑';
  backToTop.className = 'back-to-top';
  backToTop.setAttribute('aria-label', 'Back to top');
  backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #0a1f0a, #1a2e1a);
    color: #34d399;
    border: 2px solid rgba(16, 185, 129, 0.5);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
    font-weight: bold;
  `;
  
  document.body.appendChild(backToTop);
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTop.style.opacity = '1';
      backToTop.style.visibility = 'visible';
    } else {
      backToTop.style.opacity = '0';
      backToTop.style.visibility = 'hidden';
    }
  });
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  backToTop.addEventListener('mouseenter', function() {
    this.style.background = 'linear-gradient(135deg, #1a2e1a, #0a1f0a)';
    this.style.transform = 'scale(1.1)';
    this.style.borderColor = 'rgba(16, 185, 129, 0.8)';
    this.style.boxShadow = '0 6px 30px rgba(16, 185, 129, 0.5)';
  });
  
  backToTop.addEventListener('mouseleave', function() {
    this.style.background = 'linear-gradient(135deg, #0a1f0a, #1a2e1a)';
    this.style.transform = 'scale(1)';
    this.style.borderColor = 'rgba(16, 185, 129, 0.5)';
    this.style.boxShadow = '0 4px 20px rgba(16, 185, 129, 0.3)';
  });
}

function parallaxEffect() {
  const hero = document.querySelector('.hero-section');
  if (hero) {
    const scrolled = window.pageYOffset;

    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
}

function animateTimeline() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  timelineItems.forEach((item, index) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (itemTop < windowHeight - 100) {
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, index * 100);
    }
  });
}

function initTimelineAnimation() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s ease';
  });
}

function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  } else {
   
    images.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
}

function addCardGlowEffect() {
  const cards = document.querySelectorAll('.info-container, .leadership-item, .testimonial-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 0 30px rgba(16, 185, 129, 0.4)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.boxShadow = '';
    });
  });
}

function fadeInSections() {
  const sections = document.querySelectorAll('section');
  
  sections.forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.8s ease';
    
    setTimeout(() => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }
    }, index * 100);
  });
}

document.addEventListener('DOMContentLoaded', function() {

  setupSmoothScroll();
  setupExploreButton();
  setupMobileMenu();
  createBackToTopButton();
  
  initTimelineAnimation();
  revealOnScroll();
  updateActiveNav();
  animateTimeline();
  
  lazyLoadImages();
  addCardGlowEffect();
  
  window.addEventListener('scroll', function() {
    revealOnScroll();
    updateActiveNav();
    animateTimeline();
 
  });
  
  setTimeout(() => {
    revealOnScroll();
    animateTimeline();
  }, 100);
});
document.addEventListener('visibilitychange', function() {
  if (!document.hidden) {
    revealOnScroll();
    animateTimeline();
  }
});

console.log('%c🔒 SOC Lab DLSL - Building Cybersecurity Excellence', 
  'color: #10b981; font-size: 16px; font-weight: bold;');
console.log('%cWebsite developed with security and performance in mind.', 
  'color: #34d399; font-size: 12px;');