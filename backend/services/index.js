var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/search-term', function (req, res, next) {
  res.send('index', { title: 'Express' });
});

router.post('/search-term', function (req, res, next) {
  res.send('index', { title: 'Express' });
});

module.exports = router;
