export function createNavigation(currentPage) {
  const nav = document.createElement('nav');
  nav.className = 'navigation';
  
  const models = [1, 2, 3, 4, 5];
  
  models.forEach(num => {
    const link = document.createElement('a');
    link.href = num === 1 ? 'index.html' : `model${num}.html`;
    link.className = currentPage === num ? 'active' : '';
    link.textContent = `Model ${num}`;
    nav.appendChild(link);
  });
  
  return nav;
}