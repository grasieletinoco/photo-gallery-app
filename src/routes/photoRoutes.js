const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController');
const upload = require('../middleware/upload');

router.get('/', photoController.getAllPhotos);
router.get('/add', photoController.getAddPhotoPage);
router.post('/add', upload.single('image'), photoController.postAddPhoto);
router.get('/edit/:id', photoController.getEditPhotoPage);
router.get('/edit/:id', photoController.getEditPhotoPage);
router.post('/edit/:id', upload.single('image'), photoController.postEditPhoto);
router.get('/delete/:id', photoController.deletePhoto);

module.exports = router;
