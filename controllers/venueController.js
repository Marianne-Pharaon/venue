const connection = require("../config/db");
const cloudinary= require("../config/cloudinary");


const getAll = async (req, res) => {
    const query = `SELECT * FROM venues;`;
    try {
      const [response] = await connection.query(query);
      res.status(200).json({
        success: true,
        message: `All venues retrieved successfully`,
        data: response,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: `Unable to get all venues`,
        error: error.message,
      });
    }
  };
  
  const getByID = async (req, res) => {
    const { ID } = req.params;
    try {
      const response = await getVenueByID(ID);
      res.status(200).json({
        success: true,
        message: `Venue with id = ${ID} retrieved successfully`,
        data: response[0],
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: `Unable to get venue by id`,
        error: error.message,
      });
    }
  };
  
  const addVenue = async (req, res) => {
    const { name, description, capacity, image, address } = req.body;
    const query = `INSERT INTO venues (name, description, capacity, image, address) VALUES (?, ?, ?, ?, ?);`;
    try {
      const result = await cloudinary.uploader.upload(image, {folder:venue, width:300});
      const [response] = await connection.query(query, [
        name,
        description,
        capacity,
        image = {
            public_id: result.public_id,
            url: result.secure_url
          },
          
        
        address,
      ]);

      
    } 
    catch (error) {
      return res.status(400).json({
        success: false,
        message: `Unable to add venue`,
        error: error.message,
      });
    }
  };
  
  const updateByID = async (req, res) => {
    const { ID } = req.params;
    const { name, description, capacity, image, address } = req.body;
    const query = `UPDATE venues SET name = ?, description = ?, capacity = ?, image = ?, address = ? WHERE ID = ?;`;
    try {
        const result = await cloudinary.uploader.upload(image, {folder:venue, width:300});

      const [response] = await connection.query(query, [
        name,
        description,
        capacity,
         image = {
            public_id: result.public_id,
            url: result.secure_url
          },
          
        address,
        ID,
      ]);
      const data = await getVenueByID(ID);
      res.status(200).json({
        success: true,
        message: `Venue with ID = ${ID} updated successfully`,
        data: data[0],
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: `Unable to update venue with id = ${ID}`,
        error: error.message,
      });
    }
  };
  
  const deleteByID = async (req, res) => {
    const { ID } = req.params;
    const query = `DELETE FROM venues WHERE ID = ?;`;
    try {
      const [response] = await connection.query(query, [ID]);
     
      return res.status(200).json({
        success: true,
        message: `Venue with ID = ${ID} deleted successfully`,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: `Unable to delete venue with ID = ${ID}`,
        error: error.message,
      });
    }
  };
  
  const getVenueByID = async (ID) => {
    const query = `SELECT * FROM venues WHERE ID = ?;`;
    try {
      const [response] = await connection.query(query, [ID]);
      return response;
    } catch (error) {
      return error;
    }
  };
  
  module.exports = {
    getAll,
    getByID,
    addVenue,
    updateByID,
    deleteByID,
  };
  