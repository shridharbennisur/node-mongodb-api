
// eslint-disable-next-line no-unused-vars
const { mongoose } = require('./mongodb/db/mongoose.js');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

//Wlcome page
app.get('/', (req, res) => {
	res.send({
		message: 'welcome!'
	});
});

// routes
// eslint-disable-next-line no-unused-vars
const routes = require('./routes')(app);

app.listen(port, () => {
	console.log(`started on port ${port}`);
});