const router = require('express').Router();
const { getAllCategories, getCategoryById, getAllProducts, getProductsContainsName } = require('../models/products')


router.get('/', async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products)
  } catch (err) {
    res.json({ err: err.message })
  }
});

router.get('/search/:name', async (req, res) => {
  const searchName = req.params.name;
  try {
    const products = await getProductsContainsName(searchName);
    res.json(products)
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.get('/categories', async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.json(categories)
  } catch (error) { res.json({ error: error.message }) }
})

router.get('/categories/:id', async (req, res) => {
  const catId = req.params.id;
  try {
    const categoría = await getCategoryById(catId);
    res.json(categoría)
  } catch (error) { res.json({ error: error.message }) }
})

module.exports = router;