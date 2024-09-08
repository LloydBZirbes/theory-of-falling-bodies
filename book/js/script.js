document.addEventListener('DOMContentLoaded', function() {
    // Image enlargement
    const images = document.querySelectorAll('img:not(.tooltip-content img)');
    const overlay = document.querySelector('.overlay');

    images.forEach(img => {
        img.addEventListener('click', function() {
            this.classList.toggle('enlarged');
            overlay.style.display = this.classList.contains('enlarged') ? 'block' : 'none';
        });
    });

    overlay.addEventListener('click', function() {
        const enlargedImg = document.querySelector('.enlarged');
        if (enlargedImg) {
            enlargedImg.classList.remove('enlarged');
        }
        this.style.display = 'none';
    });

    // Tooltip functionality
    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach(tooltip => {
        const tooltipItem = tooltip.querySelector('.tooltip-item');
        const tooltipContent = tooltip.querySelector('.tooltip-content');

        tooltipItem.addEventListener('touchstart', function(e) {
            e.preventDefault();
            tooltipContent.style.opacity = tooltipContent.style.opacity === '1' ? '0' : '1';
            tooltipContent.style.pointerEvents = tooltipContent.style.opacity === '1' ? 'auto' : 'none';
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
