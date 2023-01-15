const userModel = require('../models/user.model');

const getAllUsers = async (req, res) => {
    var users = await userModel.find();

    return res.status(200).json(users);
}

const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await userModel.findOne({
            _id: id
        });

        if (!user) return res.status(401).json({
            success: false,
            message: 'User not found'
        });

        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
    }
}

const registerUser = async (req, res) => {
    const { login, password, firstname, lastname } = req.body;

    try {

        const existingLogin = await userModel.findOne({
            login
        });

        if (existingLogin) {
            return res.status(401).json({
                success: false,
                message: 'User login existing, please enter new login'
            })
        } else {
            var user = new userModel({
                login,
                password,
                firstname,
                lastname
            });
            user = await user.save();
    
            return res.status(200).json(user);
        }

    } catch (error) {
        console.error(error);
        throw new Error({ message: error });
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { login, password, firstname, lastname } = req.body;

    try {

        const existingLogin = await userModel.findOne({
            login
        });

        if (existingLogin) {
            return res.status(401).json({
                success: false,
                message: 'User login existing, please enter new login'
            })
        }

        var user = await userModel.findOneAndUpdate({
            _id: id
        }, { $set: { login, password, firstname, lastname } });

        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        var user = await userModel.findOneAndDelete({
            _id: id
        });

        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    registerUser,
    updateUser,
    deleteUser
}