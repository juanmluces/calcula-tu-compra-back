const { createNewList, getLastList } = require('../models/lists');
const { getAllProductsOfList, getProductById } = require('../models/products')

const router = require('express').Router();



router.post('/last', async (req, res) => {
  const userId = req.body.userid;
  const products = []
  try {
    const list = await getLastList(userId);
    const productsIds = await getAllProductsOfList(list.id);
    for (let productObj of productsIds) {
      const product = await getProductById(productObj.product_id);
      product.cantidad = 1;
      const repetido = products.find(prod => prod.id === product.id);
      if (repetido) {
        repetido.cantidad += 1;
      } else {
        products.push(product)
      }
    }
    list.products = products;
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
})




module.exports = router;