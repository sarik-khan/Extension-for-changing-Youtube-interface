// Function to hide the recommendation section on YouTube's homepage
function hideRecommendations() {
  const recommendationSection = document.querySelector('ytd-rich-grid-renderer #contents');
  if (recommendationSection) {
      recommendationSection.style.display = 'none';
      console.log("YouTube recommendation section hidden.");
  } else {
      console.log("Recommendation section not found.");
  }
}

// Function to check if the current page is the YouTube homepage
function isHomePage() {
  const urlPath = window.location.pathname;
  const searchParams = new URLSearchParams(window.location.search);

  // Check if the path is '/' and there are no query parameters
  return urlPath === '/' && searchParams.toString() === '';
}


// Function to center the search bar only on the homepage
function updateSearchBarPosition() {
  // Target the search bar (usually it's inside #search-form)
  const searchBar = document.querySelector('#center'); 
  if (!searchBar) {
      console.log("Search bar not found.");
      return;
  }

  // Make sure we're targeting the parent container that holds the search bar
  const searchBarContainer = searchBar.closest('#container');
  if (!searchBarContainer) {
      console.log("Search bar container not found.");
      return;
  }

  if (isHomePage()) {
      // Center the search bar container on the homepage
      searchBar.style.position = 'absolute';
      searchBar.style.top = '500%';  // Vertically center
      searchBar.style.left = '50%'; // Horizontally center
      searchBar.style.transform = 'translate(-50%, -50%)'; // Adjust for both height and width
      searchBar.style.width = 'auto';
      searchBar.style.zIndex = '9999'; // Ensure it stays on top
      console.log("Search bar centered on the homepage.");
  } else {
      // Reset search bar container to its default position on non-homepage
      searchBar.style.top = '';
      searchBar.style.position = '';
      searchBar.style.left = '';
      searchBar.style.transform = '';
      searchBar.style.zIndex = '';
      console.log("Search bar returned to default position.");
  }
}

// Run the functions on initial load
window.addEventListener('DOMContentLoaded', () => {
  hideRecommendations();
  updateSearchBarPosition();
});

// Run the functions after the page fully loads
window.addEventListener('load', () => {
  hideRecommendations();
  updateSearchBarPosition();
});

// Monitor for dynamic changes to YouTube's DOM
const observer = new MutationObserver(() => {
  hideRecommendations();
  updateSearchBarPosition();
});
observer.observe(document.body, { childList: true, subtree: true });
