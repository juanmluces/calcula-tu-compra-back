const { createNewList, getLastList, getFavoriteList } = require('../models/lists');
const { getAllProductsOfList } = require('../models/products')

const router = require('express').Router();

router.post('/last', async (req, res) => {
  const userId = req.body.userid;
  try {
    const list = await getLastList(userId);
    if (!list) res.json(list)
    const products = await getAllProductsOfList(list.id);
    list.productos = products;
    res.json(list)
  } catch (error) { res.json({ error: error.message }) }
})

router.post('/create', async (req, res) => {
  const list = {
    titulo: req.body.title,
    fk_user: req.body.userid,
  }
  const products = req.body.products;
  try {
    const result = await createNewList(list, products);
    res.json({ listId: result })
  } catch (err) { res.json({ err: err.message }) }
});

router.post('/favorite', async (req, res) => {
  const userId = req.body.userid;
  console.log(userId)
  try {
    const list = await getFavoriteList(userId);
    if (!list) res.json(list)

    const products = await getAllProductsOfList(list.id);
    list.productos = products;
    res.json(list)
  } catch (error) {
    res.json({ error: error.message })
  }

})






module.exports = router;