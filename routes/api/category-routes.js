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

// get a single category
router.get('/:id', async (req, res) => {
  const categoryData = await Category.findAll({ where: { id: req.params.id }}).catch((err) => {
    res.json(err);
  });
  res.json(categoryData);
  // be sure to include its associated Products
});

  // create a new category
router.post('/', async (req, res) => {
  const newCatName = req.body.category_name;
  await Category.create({ category_name: newCatName }).catch((err) => { 
    res.json(err);
  });
  const success = `Added: ${newCatName}`;
  res.json(success);
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  const itemId = req.params.id;
  const newBody = req.body.category_name;
  await Category.upsert({ id: itemId, category_name: newBody }).catch((err) => {
    res.json(err);
  });
  const categoryData = await Category.findAll().catch((err) => {
    res.json(err);
  });
  const success = `Updated: ${itemId}`;
  res.json(success);
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  await Category.destroy({ where: { id: req.params.id }}).catch((err) => {
    res.json(err);
  });
  const success = `Deleted: ${req.params.id}`;
  res.json(success);
});

module.exports = router;
