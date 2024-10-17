# miniPost

miniPost is a full-stack CRUD application built with **Node.js**, **Express.js**, and **MongoDB**. This app allows users to create, read, update, and delete posts, making it a perfect learning project for building a basic RESTful API with MongoDB as the database.

---

## Features

- **Create Posts**: Users can submit posts with a title, text, hashtag, location, and URL.
- **Read Posts**: Retrieve all posts or search for specific ones by their ID.
- **Update Posts**: Modify existing posts by updating the user, title, text, hashtag, location, or URL.
- **Delete Posts**: Remove posts by their unique ID.

---

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (v14.x or above)
- **MongoDB** (either local or using a MongoDB Atlas cluster)
- **Postman** or **cURL** for testing the API

---

## Installation

1. Clone the repository and install dependencies:  
   ```bash
   git clone https://github.com/yourusername/miniPost.git  
   cd miniPost  
   npm install  

2. Create a .env file in the root directory and add your MongoDB connection string:


```bash
DB_CONNECTOR=mongodb+srv://<username>:<password>@<cluster-url>/miniPosts?retryWrites=true&w=majority
```

Keep your environment variables safe. Don’t forget to add .env in your .gitignore file to avoid uploading sensitive information.

3. Start the server:

```bash
npm start
```
The application will run on http://localhost:3000.

---

## API Endpoints

You can interact with the API using Postman or cURL to perform various operations:

1. Create a Post
Endpoint: /posts
Method: POST
```bash
{
    "user": "Ricki",
    "title": "My First Post",
    "text": "Hello, this is my first post!",
    "hashtag": "#MyPostmanIntro",
    "location": "London",
    "url": "https://github.com/TechAngelX"
}
```
2. Read All Posts
Endpoint: /posts
Method: GET

3. Read a Specific Post by ID
Endpoint: /posts/:postId
Method: GET

4. Update a Post
Endpoint: /posts/:postId (your post id number. Something like )
Method: PATCH
Request Body:
