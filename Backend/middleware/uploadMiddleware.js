const multer = require('multer');
const multerMemoryStorage = multer.memoryStorage(); 

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Only .jpg and .png formats are allowed!'), false);
  }
};

const upload = multer({
  storage: multerMemoryStorage,
  fileFilter: fileFilter,
});

module.exports = upload;
