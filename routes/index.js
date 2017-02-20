var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
});

/** For addition**/
router.post('/add_cal', function(req, res, next) {
	var num1 = Number(req.body.number_1);
	var num2 = Number(req.body.number_2);
	var result = num1 + num2;
	console.log(num1 + " + " + num2 + "result =" + result);
	res.send(String(result));
});

router.post('/sub_cal', function(req, res, next) {
	var num1 = Number(req.body.number_1);
	var num2 = Number(req.body.number_2);
	var result = num1 - num2;
	console.log(num1 + " - " + num2 + "result =" + result);
	res.send(String(result));
});


router.post('/mul_cal', function(req, res, next) {
	var num1 = Number(req.body.number_1);
	var num2 = Number(req.body.number_2);
	var result = num1 * num2;
	console.log(num1 + " * " + num2 + "result =" + result);
	res.send(String(result));
});

router.post('/div_cal', function(req, res, next) {
	var num1 = Number(req.body.number_1);
	var num2 = Number(req.body.number_2);
	var result = num1 / num2;
	console.log(num1 + " / " + num2 + "result =" + result);
	res.send(String(result));
});


module.exports = router;
