const express = require('express');
const app = express();
const port = 3000;

// Helper function to get user data (replace with your actual data or connect to a database)
function getUsers() {
  return [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
    { id: 3, name: 'Bob Smith', age: 22 },
  ];
}

// Define the GET /users endpoint
app.get('/users', async (req, res) => {
    try {
      const allUsers = await getUsers();
      const { name } = req.query;
  
      if (name) {
        // Filter users by name if the 'name' query parameter is provided
        const filteredUsers = allUsers.filter(user => user.name === name);
        res.status(200).send(filteredUsers);
      } else {
        // Return all users if 'name' query parameter is not provided
        res.status(200).send(allUsers);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});