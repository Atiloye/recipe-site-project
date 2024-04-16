// Array for file name and keywords
const pages = [
  { name: 'Pages/Breakfast/cookies', keywords: ['cookies', 'baking'], link: 'pages/Cookies/cookies.html' },
  { name: 'Pages/Breakfast/breakfast', keywords: ['breakfast', 'morning', 'quick'], link: 'pages/Breakfast/breakfast.html' },
  { name: 'Pages/Lunch/lunch', keywords: ['lunch', 'lunch, afternoon'], link: 'pages/Lunch/lunch.html' },
];

// Function to search for matching results
function searchPages(searchTerm) {
  return pages.filter(page => page.keywords.some(keyword => keyword.includes(searchTerm)));
}

// Function to display search results in a dropdown
function displayDropdown(results) {
  const dropdown = document.createElement('ul');
  dropdown.className = 'search-dropdown';

  results.slice(0, 3).forEach((result, index) => {
    const item = document.createElement('li');
    item.textContent = result.name;
    item.addEventListener('click', () => {
      window.location = result.link;
    });
    dropdown.appendChild(item);
  });

  // Dropdown to the navigation bar
  document.querySelector('.search-div').appendChild(dropdown);
}

// Event listener for search input
document.querySelector('input[type="search"]').addEventListener('input', (event) => {
  const searchTerm = event.target.value.trim().toLowerCase();
  const results = searchPages(searchTerm);
  displayDropdown(results);

  // Navigate to the first result
  document.querySelector('button[type="submit"]').addEventListener('click', () => {
    if (results.length > 0) {
      window.location = results[0].link;
    }
  });
});

// I don't know what to do anymore...this isnt working.............