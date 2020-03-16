const express = require('express');

// database access using knex
// connection to the db
const db = require('../data/db-config.js'); 

const router = express.Router();
  
router.get('/', (req, res) => {
  db.select('*').from('posts')
  .then(rows => {
    res.status(200).json(rows)
  })
  .catch(err => {
    res.status(500).json({ message: `${err}`})
  })
  
});

router.get('/:id', (req, res) => {
  db('posts')
  .where({ id: req.params.id })   // .where("id", "=", req.params.id)
  .first()
  .then(post => {
    if (post) {
      res.status(200).json({ data: post })  // post[0] == .first()
    } else {
      res.status(404).json({ message: '404 Post not found'})
    }
  })
  .catch(err => {
    res.status(500).json({
      message: `${err}`
    })
  })
});

router.post('/', (req, res) => {
  db('posts').insert(req.body, "id")  // 2nd argument never leave this out, normalizes out differences in sql db
  .then(ids => {
    res.status(201).json({ results: ids })
  })
  .catch(err => {
    res.status(500).json({ message: `${err}`})
  })
});

router.put('/:id', (req, res) => {
  

});

router.delete('/:id', (req, res) => {
  db('posts')
  .where({ id: req.params.id })
  .del()
  .then(count => {
    if (count > 0) {
      res.status(200).json({ message: 'Record deleted'})
    } else {
      res.status(404).json({ message: 'Could not find record to delete'})
    }
  })
  .catch(err => {
    res.status(500).json({ message: `${err}`})
  })
});

module.exports = router;