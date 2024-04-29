This project is a simple blog platform where users can create, view, and delete blog posts. It includes both frontend and backend components, with a Node.JS backend server and a MySQL database for data storage.
Features: 
  - Create new blog posts with a title and content
  - Viewing existing blog posts
  - Delete blog posts from the platform
Technologies used:
  - Frontend
    - HTML
    - CSS
    - Javascript
  - Backend
    - Node.js
    - Express.js
    - MySQL

To run the project locally, follow these steps:
  1. **Clone the Repository**:
   Clone the project repository from the GitHub repository to your local machine using Git. Open your terminal or command prompt and run the following command:

   ```
   git clone https://github.com/your-username/blog-platform.git
   ```

   Replace `your-username` with your GitHub username.

  2. **Navigate to the Project Directory**:
   Change your current directory to the cloned project directory:

   ```
   cd blog-platform
   ```

  3. **Install Dependencies**:
   Install the project dependencies using npm (Node Package Manager). Run the following command:

   ```
   npm install
   ```

   This will install all the required dependencies specified in the `package.json` file.

  4. **Set Up the Database**:
   Set up the MySQL database required for the project. You may need to create a new MySQL database and import the provided SQL schema (`schema.sql`) to create the necessary tables. Update the database configuration in the `db.js` file with your MySQL credentials.

  5. **Start the Server**:
   Start the Node.js server by running the following command:

   ```
   npm start
   ```

   This will start the server, and you should see a message indicating that the server is running on a specific port (e.g., `Server running on port 3000`).

  6. **Access the Application**:
   Once the server is running, open a web browser and navigate to `http://localhost:3000` to access the blog platform. You should see the home page of the application.

  7. **Interact with the Application**:
   You can now interact with the blog platform by creating new blog posts, viewing existing posts, and deleting posts as needed. Follow the on-screen instructions to navigate through the application and test its functionality.

That's it! You have successfully set up and run the project locally on your machine. You can make modifications to the code, add new features, or test different functionalities as needed.
