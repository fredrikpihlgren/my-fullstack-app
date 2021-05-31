const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');


const hamsters = require('./routes/hamsters.js');
const matches = require('./routes/matches.js');
const matchWinners = require('./routes/matchWinners.js');
const winnersLosers = require('./routes/winners-losers.js');
const defeated = require('./routes/defeated.js');


const PORT = process.env.PORT || 1338;

const buildFolder = path.join(__dirname, '../build');
const staticFolder = path.join(__dirname, 'public');
const staticImages = path.join(__dirname, 'img');


//Middleware
//Logger, info about upcoming requests
app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`, req.params);
	next();
});


app.use( express.json() );
app.use( cors() );

app.use( express.static(buildFolder) );
app.use( '/img', express.static(staticImages) );
app.use( express.static(staticFolder) );


//temp, delete later:
/*
app.get('/', (req, res) => {
	res.send('Hello from server!');
});
*/



//REST API FOR HAMSTERS & MATCHES

app.use('/hamsters', hamsters);
app.use('/matches', matches);
app.use('/matchWinners', matchWinners);
app.use('/winners', winnersLosers);
app.use('/losers', winnersLosers);

app.use('/defeated', defeated);
app.use('/fewMatches', winnersLosers);
app.use('/manyMatches', winnersLosers);


/*
//JUST FOR TESTING! REMOVE LATER!
const products = ['kaffe', 'boll', 'portvin'];
app.get('api/products', (req, res) => {
	res.send(products)
})
*/


//SIST! Fånga alla övriga requests
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../build/index.html'));
});

//Server start
app.listen(PORT, () => {
	console.log('Server listening on port '+PORT);
});