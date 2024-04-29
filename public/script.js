// Function to clear the blog form
function clearForm() {
    document.getElementById('addBlog').reset();
}

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for submit on the create blog form
    document.getElementById('addBlog').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = {
            title: document.getElementById('title').value,
            content: document.getElementById('content').value,
        };

        fetch('/create-blogpost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            alert('Post added successfully');
            clearForm(); // Clear the form after successful addition
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });

    // Add event listener for submit on the search form
    document.getElementById('newSearch').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = {
            search: document.getElementById('search').value,
        };

        // Convert formData to a query string
        const queryString = Object.keys(formData)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(formData[key]))
            .join('&');

        // Append queryString to the URL
        const url = '/search-blogpost?' + queryString;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            alert('Search done successfully');
            // Handle search results display here
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});

// Function to clear the search form
function clearSearchForm() {
    document.getElementById('newSearch').reset();
}

// Perform search function
function performSearch(query) {
    // Fetch search results based on the query
    fetch('/search-blogpost?search=' + encodeURIComponent(query), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Assuming the response is JSON
    })
    .then(data => {
        // Clear previous search results
        const searchTableBody = document.getElementById('searchTableBody');
        searchTableBody.innerHTML = '';

        // Update table with search results
        data.forEach(post => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.content}</td>
            `;
            searchTableBody.appendChild(row);
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Trigger search when the search button is clicked
document.getElementById('searchBtn').addEventListener('click', function() {
    // Get the current value in the search input field
    const currentSearchQuery = this.value;
    
    // Perform search with the current search query
    performSearch(currentSearchQuery);
});



function deleteRow(id) {
        // Find the row element by its ID
        const row = document.getElementById(`row_${id}`);
    
        // Check if the row element exists
        if (row) {
            // Remove the row from the table
            row.parentNode.removeChild(row);
    
            // Send delete request to the server
            fetch(`/delete-search-result/${id}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                console.log('Search result deleted successfully');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        } else {
            console.error(`Row with ID ${id} not found`);
        }
    
    const searchTableBody = document.getElementById('searchTableBody');
    searchTableBody.innerHTML = '';

    results.forEach(post => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${post.title}</td>
            <td>${post.content}</td>
            <td><button onclick="deleteRow(${post.id})">Delete</button></td>
        `;
        searchTableBody.appendChild(row);
    });
}

