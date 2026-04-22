const global = {
  currentPage: window.location.pathname,
};

// Highlight active link

function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
}

// init function

function init() {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      console.log('Home');
      break;
    case '/shows.html':
      console.log('shows');
      break;
    case '/movie-details.html':
      console.log('Movie details');
      break;
    case '/tv-details.html':
      console.log('Tv details');
      break;
    case '/search.html':
      console.log('Search page');
      break;
  }
  highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);
