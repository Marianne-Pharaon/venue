const express = require('express');
const router = express.Router();

const {
  getAll,
  getByID,
  addEvent,
  updateByID,
  deleteByID,
} = require('../controllers/eventController');

router.get('/getAll', getAll);
router.get('/getByID/:ID', getByID);
router.post('/add', addEvent);
router.put('/update/:ID', updateByID);
router.delete('/delete/:ID', deleteByID);

module.exports = router;