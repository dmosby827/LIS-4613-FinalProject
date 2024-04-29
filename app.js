const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/db');// Adjust the path based on where you're importing it
const cors = require('cors');
const app = express();
const sanitizeHtml = require('sanitize-html');
const port = 3000;

// Use CORS middleware to allow cross-origin requests
app.use(cors());

app.use(express.static('FinalProject'));

// Use body-parser middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serve files from the public directory
app.use(express.static('public'));

//route for adding a new book to the catalog
app.post('/create-blogpost', (req, res) => {
    const { title, content } = req.body;

    //sanitize userInput
    const sanitizedTitle = sanitizeHtml(title);
    const sanitizedContent = sanitizeHtml(content);

    //secure parameterized query
    const sql = `INSERT INTO Posts (title, content) VALUES (?, ?)`;

    db.query(sql, [sanitizedTitle, sanitizedContent], (err, result) => {
      if (err) {
        console.error('Error inserting into the database', err);
        return res.status(500).send('An error occurred while adding the post');
    }
    res.send('Post created successfully');
    });
  });



//route for searching for posts
app.get('/search-blogpost', (req, res) => {
    const searchQuery = req.query.search;
    const sql = `SELECT id,title,content FROM Posts WHERE title LIKE ?`;
    db.query(sql, [`%${searchQuery}%`], (err, results) => {
      if (err) {
        console.error('Error searching for posts:', err);
        res.status(500).send('Error searching for posts');
      } 
        res.json(results); // Sending search results as JSON response
    });
  });
 
// Route for deleting content
app.delete('/delete-search-result/:id', (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM Posts WHERE id = ?`;

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error deleting search result from the database', err);
            return res.status(500).send('An error occurred while deleting the search result');
        }
        res.send('Search result deleted successfully');
    });
});



//start server on port 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
