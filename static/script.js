// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.getElementById('downloadForm');
//   const submitBtn = document.getElementById('submitBtn');
//   const input = document.querySelector('input[type="url"]');
//   const downloadBox = document.getElementById('downloadBox');
//   const downloadLink = document.getElementById('downloadLink');
//   const devToggle = document.getElementById('devToggle');
//   const devCard = document.getElementById('devCard');

// ... rest of your JavaScript content ...

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('downloadForm');
  const submitBtn = document.getElementById('submitBtn');
  const input = document.querySelector('input[type="url"]');
  const downloadBox = document.getElementById('downloadBox');
  const downloadLink = document.getElementById('downloadLink');
  const devToggle = document.getElementById('devToggle');
  const devCard = document.getElementById('devCard');

  // Focus animation for input
  setTimeout(() => {
    input.focus();
    input.classList.add('animate__animated', 'animate__pulse');
    setTimeout(() => {
      input.classList.remove('animate__animated', 'animate__pulse');
    }, 1000);
  }, 500);

  // Form submission
  if (form) {
    form.addEventListener('submit', function () {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    });
  }

  // // Developer panel toggle
  // devToggle.addEventListener('click', function () {
  //   devCard.classList.toggle('active');
  //   this.innerHTML = devCard.classList.contains('active')
  //     ? '<i class="fas fa-times"></i>'
  //     : '<i class="fas fa-user"></i>';
  // });

  // // Close dev panel when clicking outside
  // document.addEventListener('click', function (e) {
  //   if (!devCard.contains(e.target) && e.target !== devToggle) {
  //     devCard.classList.remove('active');
  //     devToggle.innerHTML = '<i class="fas fa-user"></i>';
  //   }
  // });

  // Responsive adjustments
  function adjustLayout() {
    const featuresContainer = document.querySelector('.features');
    if (window.innerWidth < 480) {
      featuresContainer.style.gridTemplateColumns = '1fr';
    } else if (window.innerWidth < 768) {
      featuresContainer.style.gridTemplateColumns = '1fr 1fr';
    } else {
      featuresContainer.style.gridTemplateColumns =
        'repeat(auto-fit, minmax(150px, 1fr))';
    }
  }

  window.addEventListener('resize', adjustLayout);
  adjustLayout();

  // Theme toggle functionality
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('i');

  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  // Toggle theme
  themeToggle.addEventListener('click', function () {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  // Update moon/sun icon
  function updateThemeIcon(theme) {
    if (theme === 'dark') {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  }
});
