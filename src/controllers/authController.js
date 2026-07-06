const registerUser = async (req,res) => {
    res.status(200).json({
        message: "Register API is working",
    });
};

module.exports ={
    registerUser,
};
