const express = require('express');
const router = express.Router();

// const multer = require('multer');
// const upload = multer({ storage: multer.memoryStorage() });

const {
  getAll,
  getByID,
  addVenue,
  updateByID,
  deleteByID,
} = require('../controllers/venueController');

router.get('/getAll', getAll);
router.get('/getByID/:ID', getByID);
router.post('/add',  addVenue);
router.put('/update/:ID',  updateByID);
router.delete('/delete/:ID', deleteByID);

module.exports = router;
