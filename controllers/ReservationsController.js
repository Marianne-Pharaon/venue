const connection = require("../config/db");

const getAllReservationByUserId = async (req, res) => {
  try {
    const [result] = await db.query(
      `SELECT * FROM reservation WHERE userID=? `,
      [req.params.id]
    );
    
    res.status(200).json({
      success: true,
      message: "Reservations data retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to retreive data",
      error,
    });
  }
};



const getAllReservationByEventId = async (req, res) => {
    try {
      const [result] = await db.query(
        `SELECT * FROM reservation WHERE eventID=? `,
        [req.params.id]
      );
      
      res.status(200).json({
        success: true,
        message: "Reservations data retrieved successfully",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Unable to retreive data",
        error,
      });
    }
  };

  const getAllReservation = async (req, res) => {
    try {
      const [result] = await db.query(
        `SELECT * FROM reservation 
        JOIN user ON reservation.userID = user.ID
        JOIN events ON reservation.eventID= event.ID 
        JOIN venues ON events.venueID= venue.ID `
      );
      
      res.status(200).json({
        success: true,
        message: "Reservations data retrieved successfully",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Unable to retreive data",
        error,
      });
    }
  };

  module.exports = {getAllReservationByUserId , getAllReservationByEventId, getAllReservation };