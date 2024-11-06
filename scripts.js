const fadeInSections = document.querySelectorAll('.section');

const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, options);

fadeInSections.forEach(section => {
  observer.observe(section);
});