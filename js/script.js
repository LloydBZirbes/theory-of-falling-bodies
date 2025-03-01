document.addEventListener('DOMContentLoaded', function() {
    // Create overlay and enlarged image elements
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    const enlargedImage = document.createElement('img');
    enlargedImage.id = 'enlarged-image';
    enlargedImage.alt = 'Enlarged image';
    overlay.appendChild(enlargedImage);
    document.body.appendChild(overlay);

    // Image enlargement
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            enlargedImage.src = this.src;
            overlay.style.display = 'flex';
        });
    });

    overlay.addEventListener('click', function() {
        this.style.display = 'none';
    });

    // Updated Tooltip functionality
    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach(tooltip => {
        const tooltipItem = tooltip.querySelector('.tooltip-item');
        const tooltipContent = tooltip.querySelector('.tooltip-content');

        tooltipItem.addEventListener('click', function(e) {
            e.preventDefault();
            tooltipContent.classList.toggle('active');
        });

        // Close tooltip when clicking outside
        document.addEventListener('click', (e) => {
            if (!tooltip.contains(e.target)) {
                tooltipContent.classList.remove('active');
            }
        });
    });

    // Light/Dark mode toggle
    const modeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for saved mode preference
    if (localStorage.getItem('lightMode') === 'enabled') {
        body.classList.add('light-mode');
        modeToggle.checked = true;
    }

    modeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('light-mode');
            localStorage.setItem('lightMode', 'enabled');
        } else {
            body.classList.remove('light-mode');
            localStorage.setItem('lightMode', null);
        }
    });

    // Search functionality
    const searchForm = document.querySelector('form[action="search.html"]');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = this.querySelector('input[name="q"]').value.toLowerCase();
            window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        });
    }

    // Perform search on search.html page load
    if (window.location.pathname.endsWith('search.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('q');
        if (query) {
            performSearch(query);
        }
    }
});

async function performSearch(query) {
    try {
        const response = await fetch('static/search_data.json');
        const data = await response.json();
        const results = [];

        data.chapters.forEach(chapter => {
            const chapterContent = chapter.content.toLowerCase();
            const matches = chapterContent.split('.').filter(sentence => sentence.includes(query));
            
            matches.forEach(match => {
                results.push({
                    chapter: chapter.number,
                    title: chapter.title,
                    content: match.trim()
                });
            });
        });

        displaySearchResults(query, results);
    } catch (error) {
        console.error('Error performing search:', error);
    }
}

function displaySearchResults(query, results) {
    const searchResultsHTML = `
        <h2>Search Results for "${query}"</h2>
        ${results.length > 0 ? `
            <ul>
                ${results.map(result => `
                    <li>
                        <strong>Chapter ${result.chapter}: ${result.title}</strong><br>
                        <a href="chapter/${result.chapter}.html">${result.content}</a>
                    </li>
                `).join('')}
            </ul>
        ` : '<p>No results found.</p>'}
    `;

    // Update the content of the search results element
    const searchResultsElement = document.getElementById('search-results');
    if (searchResultsElement) {
        searchResultsElement.innerHTML = searchResultsHTML;
    }
}