
// Toggle the navigation menu when the hamburger is clicked
document.getElementById('hamburger').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Ensure the 'active' class is applied to the clicked navbar item
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.navbar a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Highlight ang active section sa navbar
document.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 50; // Adjust the offset as needed
    const sectionHeight = section.offsetHeight;

    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active'); // Remove active class from all links

    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active'); // Add active class to the matching link
    }
  });
});
