const User = require('../models/user.model');

exports.findAll = async (req, res) => {
    console.log('find all users');

    try {
        const result = await User.find();
        res.json({status : true,data: result})
    } catch (error) {
        res.json({status : false, data: error.message})
    }
}


exports.findOne = async (req, res) => {
    console.log('find one user');
    const username = req.params.username;
    try {
        const result = await User.findOne({username: username});
        res.json({status : true,data: result})
    } catch (error) {
        res.json({status : false, data: error.message})
    }
}




