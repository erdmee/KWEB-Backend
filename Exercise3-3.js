const express = require('express');
const app = express();
const port = 3000;

app.get('/factorial', (req, res) => {
    const number = req.query.number;
    res.redirect(`/factorial/${number}`);
});

app.get('/factorial/:number', (req, res) => {
    const number = parseInt(req.params.number, 10);
    let factorial = 1;
    
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    
    res.send(`${number}! = ${factorial}`);
});

app.listen(port, () => console.log(`Server running on port ${port}!`));
