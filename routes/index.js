module.exports = function (app) {
	require('./todos')(app);
	
	// application -------------------------------------------------------------
	app.get('*', function (req, res) {
		res.send({data: 'welcome'});
	});
};