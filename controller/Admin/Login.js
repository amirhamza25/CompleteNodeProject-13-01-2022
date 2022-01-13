const {Member} = require("../../models");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const Login = async (req, res, next) => {
    try {
        const {userId,password} = req.body;
        
        if(!(userId && password)) {
            res.status(400).send("All input is required");
        }
        
        const UserLogIn = await Member.findOne({ where:{userLog:userId} });
        
        if (UserLogIn && (await bcrypt.compare(password, UserLogIn.password))) {
            
            const token = jwt.sign({ 
                    userId: UserLogIn.id, 
                    userName:UserLogIn.name,
                    userEmail:UserLogIn.email, 
                },process.env.TOKEN_KEY,{
                  expiresIn: "2h",
                });
           
            res.status(201).json(token);
            
        }else{
            res.status(400).json({
                error: "Invalid Credentials"
            });
        }
    } catch (err) {
        res.status(400).json({
            error: "data do not submit 1"
        });
    }

}

module.exports = Login;