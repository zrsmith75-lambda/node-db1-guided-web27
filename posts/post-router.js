const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();
  
router.get('/', (req, res) => {
  res.status(200).json({ message: 'none'})
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;