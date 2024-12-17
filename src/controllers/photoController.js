const fs = require('fs');
const Photo = require('../../models/photoModel');
const path = require('path');



// Página Inicial
exports.getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.findAll();
    console.log(photos);
    res.render('photos/index', { photos: photos.map(photo => photo.toJSON()) });
  } catch (err) {
    console.error('Error fetching photos:', err);
    res.status(500).send('Erro ao carregar fotos');
  }
};



// Página Adicionar Foto
exports.getAddPhotoPage = (req, res) => {
  res.render('photos/addPhoto');
};



// Adicionar Foto
exports.postAddPhoto = async (req, res) => {
  try {
    const { title } = req.body;
    const image = req.file ? req.file.filename : null;

    const newPhoto = await Photo.create({ title, image });
    res.redirect('/photos');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao adicionar a foto.');
  }
};



// Página Editar Foto
exports.getEditPhotoPage = async (req, res) => {
  try {
    const { id } = req.params;
    const photo = await Photo.findByPk(id);
    if (!photo) {
      return res.status(404).send('Foto não encontrada.');
    }
    res.render('photos/editPhoto', { photo: photo.toJSON() });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao carregar a foto para edição.');
  }
};



// Editar Foto
exports.postEditPhoto = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const image = req.file ? req.file.filename : null;
    const photo = await Photo.findByPk(id);
    if (!photo) {
      return res.status(404).send('Foto não encontrada.');
    }
    if (image) {
      const oldImagePath = path.join(__dirname, '../public/uploads', photo.image);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
    }
    await photo.update({ title, image: image || photo.image });
    res.redirect('/photos');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao atualizar a foto.');
  }
};



// Deletar Foto
exports.deletePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    const photo = await Photo.findByPk(id);
    if (!photo) {
      return res.status(404).send('Foto não encontrada.');
    }
    const imagePath = path.join(__dirname, '../public/uploads', photo.image);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
    await photo.destroy();
    res.redirect('/photos');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao deletar a foto.');
  }
};
