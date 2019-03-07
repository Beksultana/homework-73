const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8001;

//task 1

app.get('/:text', (req, res) => {
   res.send(req.params.text)
});

// task 2

app.get('/encode/:en', (req, res) => {
    const encode = Vigenere.Cipher('password').crypt(req.params.en);
    res.send(encode)
});

app.get('/decode/:de', (req, res) => {
    const decode = Vigenere.Decipher('password').crypt(req.params.de);
    res.send(decode)
});


app.listen(port, () => {
    console.log("We ara live on " + port);
});