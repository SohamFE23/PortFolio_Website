const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const tagEl = document.getElementById('hero-tag');
const heroTags = ['SOFTWARE DEVELOPMENT', 'ARTIFICIAL INTELLIGENCE'];
if (tagEl) {
  let index = 0;
  setInterval(() => {
    tagEl.style.opacity = '0';
    tagEl.style.transform = 'translateY(-4px)';
    setTimeout(() => {
      index = (index + 1) % heroTags.length;
      tagEl.textContent = heroTags[index];
      tagEl.style.opacity = '1';
      tagEl.style.transform = 'translateY(0)';
    }, 180);
  }, 2200);
}
