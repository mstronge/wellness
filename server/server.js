// DEPENDENCIES
// ============
var express = require("express"),
    http = require("http"),
    port = (process.env.PORT || 3000),
    server = module.exports = express();

// SERVER CONFIGURATION
// ====================
server.configure(function () {

    server.use(express["static"](__dirname + "/../dist"));

    server.use(express.errorHandler({

        dumpExceptions:true,

        showStack:true

    }));

    server.use(express.bodyParser());

    server.use(server.router);
});

// SERVER
// ======

// Start Node.js Server
http.createServer(server).listen(port);