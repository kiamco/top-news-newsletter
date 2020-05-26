const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

/*  import Routes here */
const AuthRouter = require('../routes/authRouter.js');
const MailRouter = require('../routes/emailRouter.js');

server.use(express.json());
server.use(helmet());
server.use(cors());

// endpoints
server.use('/', AuthRouter);
server.use('/mail', MailRouter)

server.get('/', (req, res) => {
    res.send("server running");
})

module.exports = server;