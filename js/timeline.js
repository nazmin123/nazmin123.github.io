const items = document.querySelectorAll('.timeline-item');
const dots = document.querySelectorAll('.timeline-dot');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        dots[index]?.classList.add('active');
      }
    });
  },
  { threshold: 0.4 }
);

items.forEach(item => observer.observe(item));
