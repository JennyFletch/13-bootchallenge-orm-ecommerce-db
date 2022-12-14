const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all tags
router.get('/', async (req, res) => {
  const tagData = await Tag.findAll().catch((err) => {
    res.json(err);
  });
  res.json(tagData);
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  const tagData = await Tag.findAll({where: { id: req.params.id}}).catch((err) => {
    res.json(err);
  });
  res.json(tagData);
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
