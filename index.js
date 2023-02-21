const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'./static' )));

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname,'./static/index.html'));
});

app.get('/feedback', function (req, res){
    res.sendFile(path.join(__dirname,'./static/feedback.html'));
});

app.get('/hilary', function (req, res){
    res.sendFile(path.join(__dirname,'./static/Hillary_Goldwynn.html'));
});

app.listen(process.env.PORT || 3000);
console.log(`Server is listening on port //localhost:3000/`);

