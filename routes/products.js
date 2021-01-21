const router = require('express').Router();
const {getAllCategories, getCategoryById} = require('../models/products')


router.get('/categories', async(req, res) => {
  try{
    const categories = await getAllCategories();
    res.json(categories)
  }catch(error){ res.json({error: error.message})}
})

router.get('/categories/:id', async (req, res) => {
  const catId = req.params.id;
  try{
    const categoría = await getCategoryById(catId);
    res.json(categoría)
  }catch(error){res.json({error: error.message})}
})

module.exports = router;