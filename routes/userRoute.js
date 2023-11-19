const express = require('express');
const router = express.Router();

const {
  getAll,
  getByID,
  login,
  register,
  updateByID,
  switchToAdmin,
  deleteByID,
} = require('../controllers/userController');

router.get('/getAll', getAll);
router.get('/getByID/:ID', getByID);
router.post('/login', login);
router.post('/register', register);
router.put('/update/:ID', updateByID);
router.put('/switchToAdmin/:ID', switchToAdmin);
router.delete('/delete/:ID', deleteByID);

module.exports = router;
