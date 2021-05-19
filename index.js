const connectDB = require('./startup/db');
const express = require('express');
const products = require('./routes/products')
const app = express();

connectDB();

app.use(express.json());

const port = process.env.Port || 5000;
app.listen(port, () => {
    console.log('Server started on port: ${port}');
});

//AIzaSyDnh8QEc3xZ4VnvxDVhdBSozfrfLdbQZRs  API KEY