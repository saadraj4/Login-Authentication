// middlewares/uploadMiddleware.js
const multer = require('multer');
const multerMemoryStorage = multer.memoryStorage(); // Use memory storage to handle binary data
const upload = multer({ storage: multerMemoryStorage });


module.exports = upload;
