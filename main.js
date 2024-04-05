// Array for file name and keywords
const pages = [
  { name: 'Pages/Breakfast/cookies', keywords: ['cookies', 'baking'], link: 'pages/Cookies/cookies.html' },
  { name: 'Pages/Breakfast/breakfast', keywords: ['breakfast', 'morning', 'quick'], link: 'pages/Breakfast/breakfast.html' },
  { name: 'Pages/Lunch/lunch', keywords: ['lunch', 'lunch, afternoon'], link: 'pages/KLunch/lunch.html' },

];

document.querySelector('input[type="search"]').addEventListener('input', function (event) {
  const searchTerm = event.target.value.trim().toLowerCase();

  // To find matching results
  const results = pages.filter(page => page.keywords.some(keyword => keyword.includes(searchTerm)));

  displayDropdown(results);

  // Navigate to the first result
  document.querySelector('button[type="submit"]').addEventListener('click', function () {
    if (results.length > 0) {
      window.location = results[0].link;
    }
  });
});

//   For dropdowm
function displayDropdown(results) {
    const dropdown = document.createElement('ul');
    dropdown.className = 'search-dropdown';
  
    results.slice(0, 3).forEach((result, index) => {
      const item = document.createElement('li');
      item.textContent = result.name;
      item.addEventListener('click', function () {
        window.location = result.link;
      });
      dropdown.appendChild(item);
    });
  
    // added to the navigation bar
    document.querySelector('.search-div').appendChild(dropdown);
  }