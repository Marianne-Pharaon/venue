const express = require('express');
const router = express.Router();
 
const {
    getAllReservationByUserId , getAllReservationByEventId
} = require('../controllers/ReservationsController');

router.get('/getByUserId/:id', getAllReservationByUserId);
router.get('/getByEventId/:id', getAllReservationByEventId);




module.exports = router;