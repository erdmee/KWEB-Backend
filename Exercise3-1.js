const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const formatObject = obj => 
    Object.entries(obj).map(([key, value]) => `${key}: ${value}`).join('\n');

const handleRequest = (req, res) => res.send(formatObject(req.method === 'GET' ? req.query : req.body));

app.route('/')
    .get(handleRequest)
    .post(handleRequest)
    .put(handleRequest)
    .delete(handleRequest);

app.listen(port, () => console.log(`Server running on port ${port}!`));
