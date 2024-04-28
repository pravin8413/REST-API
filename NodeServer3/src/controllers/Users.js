const User = require('../models/User.js')

const getUsers = async (req, res) => {
    try {
        const user = req.query;
        const users = await User.find(user);
        res.status(200).json({
            status: "SUCCESS",
            data: users
        });

    } catch (error) {
        res.status(500).json({
            status: "FAILED",
            message: "Something went wrong"
        })
    }

}

const createUsers = async (req,res)=>{
    try{
        const {firstName, lastName, email, avatar} = req.body;
        await User.create({firstName, lastName, email, avatar});
        res.status(200).json({
            status: "SUCCESS",
            data: "User created successfully"
        })

    } catch(error) {
        res.status(500).json({
            status: "FAILED",
            message: "Something went wrong"
        })
    }
}

const updateUsers = async (req,res)=>{
    try{
        const userId = req.params.id;
        const {firstName,lastName} = req.body;

        const users = await User.findByIdAndUpdate(userId,{firstName,lastName});

        res.status(200).json({
            status: "SUCCESS",
            data: users
        })

    } catch(error) {
        res.status(500).json({
            status: "FAILED",
            message: "Something went wrong"
        })
    }
}

const deleteUsers =  async (req,res)=>{

    try{
        const userId = req.params.id;

        await User.findByIdAndDelete(userId);
        res.status(200).json({
            status : "SUCCESS",
            message : "User deleted successfully"
        })

    } catch(error) {
        res.status(500).json({
            status: "FAILED",
            message : "Something went wrong"
        })
    }
}

module.exports = {
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers
}