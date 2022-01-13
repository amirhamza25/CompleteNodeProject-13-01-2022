const { member } = require("../../models");
const jwt = require("jsonwebtoken")
const createError = require("http-errors")
const GetProductData = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        if (!(username && password)) {
            res.status(400).send("All input is required");
        }
        const user = await member.findOne({
            where: { userLog: username, password: password }
        })

        if ((user.password == password) && (user.userLog == username)) {
            // Create token
            const userObject = {
                userId: user.id,
                role: "user"
            }

            const token = jwt.sign(
                userObject,
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            res.setHeader('jwt', token, { httpOnly: true, secure: true, maxAge: 3600000 })
            //res.locals.loggedInUser = userObject;
            res.json(token);
        }

    } catch (error) {
        res.status(500).json({ errors: [{ result: 'error', msg: "System failed" }] });
    }
}

module.exports = GetProductData;
