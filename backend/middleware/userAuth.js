const jwt = require('jsonwebtoken');
const User = require('../models/userModel');


const JWT_SECRET = process.env.JWT_SECRET_KEY;
const generateToken =  async (userId) => {
    try{
        const user = await User.findById(userId);
        if(!user){
            throw new Error('User not found');
        }

        const token = jwt.sign({userId: user._id, role: user.role},JWT_SECRET, {expiresIn: '1hr'});
        return token;

    } catch(error){
        console.error("Error:", error);
        return res.status(500).send({ message: 'An error occurred' });

    }

}
module.exports = generateToken;
