var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'sparkle.css' });
});

/* GET home's GETTING STARTED page. */
router.get('/get-started', function(req, res) {
  res.render('get-started', { title: 'Get Started' });
});

/* Get documentation's HOME page. */
router.get('/documentation', function(req, res) {
  res.render('documentation', { title: 'Documentation' });
});

/* GET documentation's COMPONENTS page. */
router.get('/documentation/components', function(req, res) {
  res.render('components', { title: 'Components' });
});

/* GET documentation's LAYOUTS page. */
router.get('/documentation/forms', function(req, res) {
  res.render('forms', { title: 'Forms' });
});

/* GET documentation's LAYOUTS page. */
router.get('/documentation/layouts', function(req, res) {
  res.render('layouts', { title: 'Layouts' });
});

/* GET documentation's UTILITIES page. */
router.get('/documentation/utilities', function(req, res) {
  res.render('utilities', { title: 'Utilities' });
});

module.exports = router;
