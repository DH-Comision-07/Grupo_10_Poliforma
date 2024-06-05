const path = require("path");
const multer = require("multer");
const diskStorage = multer.diskStorage({
    destination: function( req, file, cb){
        let rutaImages = path.join(__dirname, "../../public/images/usuarios");
        cb( null, rutaImages);
    },
    filename: function(req, file, cb){
        let nombreImage = "image" + Date.now() + path.extname(file.originalname);
        cb( null, nombreImage);
    }
});
const uploadFile = multer({storage:diskStorage});

module.exports = uploadFile;