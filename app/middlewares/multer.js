const multer = require('multer')
const path = require('path')

//const multer = function (req, res, next) {

var storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })


module.exports = { multer, upload, storage }