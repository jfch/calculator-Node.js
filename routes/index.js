var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { result: '0' });
});


router.post('/', function(req, res, next) {
	 console.log(req.body);
	 console.log(req.body.p);
	 var result;
	 
	 if(req.body.operator == '+'){
		 result = parseFloat(req.body.p) + parseFloat(req.body.para2);
	 }
	 if(req.body.operator == '-'){
		 result = parseFloat(req.body.p) - parseFloat(req.body.para2);
	 }
	 if(req.body.operator == '*'){
		 result = parseFloat(req.body.p) * parseFloat(req.body.para2);
	 }
	 if(req.body.operator == '/'){
		 if(parseFloat(req.body.para2) !=0){
			 result = parseFloat(req.body.p) / parseFloat(req.body.para2);
		 }
		 else{
			 console.log("can not be zero");
			 result = 'can not be zero';
		 }
		
	 }
	 
	 res.render('index', { result: result });
	 
	});

module.exports = router;
