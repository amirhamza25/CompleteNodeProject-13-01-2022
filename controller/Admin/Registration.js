const { Member } = require("../../models");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const Registration = async (req, res, next) => {
    try {
        const {
            userId,
            password,
            name,
            number,
            email
        } = req.body;

        encryptedPassword = await bcrypt.hash(password, 10);
        const InsertUserInfo = await Member.create({
            userLog: userId,
            password: encryptedPassword,
            name: name.toLowerCase(), // sanitize: convert name to lowercase
            number,
            email: email.toLowerCase()
        });
        const token = jwt.sign({
            user_id: InsertUserInfo._id,
            email
        },
            process.env.TOKEN_KEY, {
            expiresIn: "2h",
        }
        );
        if (InsertUserInfo) {
            InsertUserInfo.token = token;
            res.status(201).json(InsertUserInfo);
        } else {
            res.status(400).json({
                error: "data do not submit"
            });
        }

    } catch (err) {
        res.status(400).json({
            error: "data do not submit"
        });
    }

}

module.exports = Registration;