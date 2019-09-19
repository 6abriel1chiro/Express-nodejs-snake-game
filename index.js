var express = require('express');
var app = express();
const port =3000;

app.use(express.static(__dirname + '/public/'));


app.get('/',(req, res) => res.sendFile('index.html'));


app.listen(port, () => console.log('Example app listening on port ' + port));
//ctrl + c to stop server