const router = require('express').Router();
const { getAllCategories, getCategoryById, getAllProductsByPage, getProductsContainsNameByPage, getAllProductsByCategoryByPage } = require('../models/products')


router.get('/page/:page', async (req, res) => {
  const page = req.params.page
  try {
    const products = await getAllProductsByPage(page);
    res.json(products)
  } catch (err) {
    res.json({ err: err.message })
  }
});

router.get('/search/:name/page/:page', async (req, res) => {
  const searchName = req.params.name;
  const page = req.params.page
  try {
    const products = await getProductsContainsNameByPage(searchName, page);
    res.json(products)
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.get('/categoryid/:catid/page/:page', async (req, res) => {
  const { catid, page } = req.params;
  try {
    console.log(catid, page)
    const productsObject = await getAllProductsByCategoryByPage(catid, page);
    res.json(productsObject)
  } catch (error) {
    res.json({ error: error.message })
  }
})

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