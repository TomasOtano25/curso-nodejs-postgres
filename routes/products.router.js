const express = require('express');

const ProductsService = require('../services/products.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.status(200).json(product);
});

router.post('/', (req, res) => {
  const body = req.body;

  const newProduct = service.create(body);

  res.status(201).json({ message: 'created', data: newProduct });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const product = service.update(id, body);

  res.json({
    message: 'update partial',
    data: product,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const productId = service.delete(id);
  res.json({
    message: 'update partial',
    productId,
  });
});

router.get('/:id/details', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: 'Product 1',
    price: 1000,
    description: 'Este es mi primer producto',
  });
});

module.exports = router;
