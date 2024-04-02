const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const data = require('./datafile.json'); // Replace with your file path

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config(); // Load environment variables
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({ message: "Welcome to your API" });
});

app.get('/data', async (req, res) => {


        try {
            let filteredData = data.data

            // Apply filters based on query parameters
            if (req.query.state) {
              filteredData = filteredData.filter(item => item.state === req.query.state);
            }
            if (req.query.status) {
              filteredData = filteredData.filter(item => item.status === req.query.status);
            }

              // Send the filtered data back
            res.json(filteredData);
        } catch (error) {
            console.error(error);
            res.status(400).send('Invalid JSON data');
        }
    });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});