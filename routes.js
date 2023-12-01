const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: 'uploads'});
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) =>{
    const {page, total} = req.query;
    res.send({
        status: 'succesfully',
        message: 'Welcome to Express JS Tutorial',
        page,
        total
    });

});

router.get('/product1', (req, res) =>{
    res.send({
        name: 'smartphone',
        type: 'android',
        brand: 'samsung',
        price: '5000000',
        status: 'available'
    });

});

router.get('/product2', (req, res) =>{
    res.send({
        name: 'watch',
        type: 'quartz',
        brand: 'casio',
        price: '1000000',
        status: 'available'
    });

});

router.get('/product3', (req, res) =>{
    res.send({
        name: 'sarung',
        type: 'batik',
        brand: 'atlas',
        price: '200000',
        status: 'available'
    });

});

router.get('/product/:id', (req, res) => {
    res.json({
        id: req.params.id
    });
});

router.post('/product/', upload.single('image'), (req, res) => {
    const {name, price, stock, status} = req.body;
    const image = req.file;
    if(image){
        const target = path.join(__dirname, 'uploads', image.originalname);
        fs.renameSync(image.path, target)
        // res.json({
        //     name, 
        //     price, 
        //     stock, 
        //     status,
        //     image
        // });
        res.sendFile(target);
    }
});

// router.get('/:category/:tag', (req, res) => {
//     const{category, tag} = req.params;
//     res.json({category, tag});
// });

module.exports = router;
  