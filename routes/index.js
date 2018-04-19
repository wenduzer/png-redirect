var express = require('express');
var request = require('superagent');
var router = express.Router();

/* GET home page. */
router.get('/', function({ query }, res, next) {
	var url = query.url;
	var newUrl = url.split('.png')[0];

	res.writeHead(301, {
		Location: newUrl
	});

	res.end();
});

module.exports = router;
