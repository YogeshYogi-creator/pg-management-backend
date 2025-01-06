const express = require('express');
const app = express();
const cors = require('cors');
const configureDB = require('./config/database');
const router = require('./config/routes');
const port = 3050;

app.use(cors()); // Use the cors middleware

// app.use(cors({
//   origin: 'http://example.com', // Replace with your allowed origin
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
// }));

configureDB(); // configure db
app.use(express.json());

// Use the router for handling routes
app.use(router);

app.listen(port, () => { console.log(`server is running in port ${port}`); });