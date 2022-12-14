const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// get all categories
router.get('/', async (req, res) => {
  const categoryData = await Category.findAll().catch((err) => {
    res.json(err);
  });
  res.json(categoryData);
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  const categoryData = await Category.findAll({ where: { id: req.params.id }}).catch((err) => {
    res.json(err);
  });
  res.json(categoryData);
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
