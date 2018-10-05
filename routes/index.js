const express = require('express');
const router = express.Router();
const pkg = require('../package.json');

const sparkle = pkg.dependencies["sparkle.css"];

const version = sparkle;
const docVersion = '0.1.0';

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'sparkle.css',
    subtitle: 'A lightweight, open-source, mobile-first CSS framework for easy website designs.',
    version: version
  });
});

/* GET home's GETTING STARTED page. */
router.get('/get-started', function(req, res) {
  res.render('get-started', {
    title: 'Get Started',
    longTitle: "Let's Get Started",
    subtitle: 'Get everything you need to get started with Sparkle!'
  });
});

/* Get documentation's HOME page. */
router.get('/documentation', function(req, res) {
  res.render('documentation', {
    title: 'Documentation',
    subtitle: 'Navigate through the various elements that make up the framework, and get the information you need to style your website.'
  });
});

/* GET documentation's COMPONENTS page. */
router.get('/documentation/components', function(req, res) {
  res.render('components', {
    title: 'Components',
    subtitle: 'The building blocks of the framework.'
  });
});

/* GET documentation's LAYOUTS page. */
router.get('/documentation/forms', function(req, res) {
  res.render('forms', {
    title: 'Forms',
    subtitle: 'The elements essential to style a clean form UI.'
  });
});

/* GET documentation's LAYOUTS page. */
router.get('/documentation/layouts', function(req, res) {
  res.render('layouts', {
    title: 'Layouts',
    subtitle: 'The overall structural flow of the page.'
  });
});

/* GET documentation's UTILITIES page. */
router.get('/documentation/utilities', function(req, res) {
  res.render('utilities', {
    title: 'Utilities',
    subtitle: 'The additional functionalities for optimum designs.'
  });
});

module.exports = router;
