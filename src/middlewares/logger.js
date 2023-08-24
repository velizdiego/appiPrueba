const path = require("path");
const fs = require("fs");

const logger = (req, res, next) => {
    fs.appendFileSync(path.resolve(__dirname, "../log/logs.txt"), `se a creado el producto ${req.originalUrl}\n`)
    next();
};





module.exports = logger;