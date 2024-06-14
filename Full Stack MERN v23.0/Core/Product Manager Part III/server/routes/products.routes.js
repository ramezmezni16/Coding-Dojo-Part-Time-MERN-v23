const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.post('/api/products', ProductController.createProduct);
    app.patch('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
}