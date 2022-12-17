const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all tags
router.get('/', async (req, res) => {
  const tagData = await Tag.findAll({ include: [{ model: Product }] }).catch((err) => {
    res.json(err);
  });
  res.json(tagData);
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  const tagData = await Tag.findAll({ where: { id: req.params.id}, include: [{ model: Product }] }).catch((err) => {
    res.json(err);
  });
  res.json(tagData);
  // be sure to include its associated Product data
});

// create a new tag
router.post('/', async (req, res) => {
  const newTagName = req.body.tag_name;
  await Tag.create({ tag_name: newTagName }).catch((err) => { 
    res.json(err);
  });
  const success = `Added: ${newTagName}`;
  res.json(success);  
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  const itemId = req.params.id;
  const newBody = req.body.tag_name;
  await Tag.upsert({ id: itemId, tag_name: newBody }).catch((err) => {
    res.json(err);
  });
  const tagData = await Tag.findAll().catch((err) => {
    res.json(err);
  });
  const success = `Updated: ${req.params.id}`;
  res.json(success);
});

// delete a tag by its `id` value
router.delete('/:id', async (req, res) => {
  await Tag.destroy({ where: { id: req.params.id }}).catch((err) => {
    res.json(err);
  });
  const success = `Deleted: ${req.params.id}`;
  res.json(success);
});

module.exports = router;
