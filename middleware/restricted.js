//middleware
require('dotenv').config();

const restricted = (req, res, next) => {
    const token = req.query.token;
    console.log(process.env.TOKEN, token)
    if (token === process.env.TOKEN) {
        console.log('asdasd')
        next();
    } else {
        return res.status(401).json({
            message: "User unauthorized"
        });
    }


};

module.exports = restricted;