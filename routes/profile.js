const { createFavoriteList, removeFavoriteList, getListsByNameSearch, getListsInDates, getListsIdOfMonth } = require('../models/lists');
const { getUserById, changeUserAvatar } = require('../models/users');
const { getAllProductsOfList } = require('../models/products')

const router = require('express').Router();


router.post('/', async (req, res) => {
  const userId = req.body.userid;
  try {
    const result = await getUserById(userId);
    const userInfo = {
      id: result.id,
      user: result.user,
      avatar: result.avatar
    }
    res.json(userInfo);
  } catch (error) {
    res.json({ error: error.message })
  }
});

router.post('/avatar', async (req, res) => {
  const { userid, avatarUrl } = req.body;
  try {
    const result = await changeUserAvatar(userid, avatarUrl);
    res.json(result)

  } catch (error) {
    res.json({ error: error.message })
  }
})

router.post('/search', async (req, res) => {
  const { userid, searchText } = req.body;
  try {
    const result = await getListsByNameSearch(userid, searchText);
    res.json(result)
  } catch (error) { res.json(error.message) }
})




router.post('/newfavorite', async (req, res) => {
  const { userid, listId } = req.body
  try {
    const result = await createFavoriteList(userid, listId);
    res.json(result)

  } catch (error) {
    res.json({ error: error.message })
  }
})

router.post('/removefavorite', async (req, res) => {
  const userid = req.body.userid
  console.log(userid)
  try {
    const result = await removeFavoriteList(userid);
    res.json(result)

  } catch (error) {
    res.json('here')
  }
})

router.post('/getsearchedlist', async (req, res) => {
  const listId = req.body.listId;
  try {
    const products = await getAllProductsOfList(listId);
    res.json(products)
  } catch (error) {
    res.json({ error: error.message })
  }
})

router.post('/listdaterange', async (req, res) => {
  const { userid, dateFrom, dateTo } = req.body;
  try {
    const lists = await getListsInDates(userid, dateFrom, dateTo);
    res.json(lists)
  } catch (error) {
    res.json({ error: error.message });
  }
})

router.post('/stats', async (req, res) => {
  const userId = req.body.userid;
  const monthExpenses = []
  try {
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const yearListsIds = []
    for (month of months) {
      const listIds = await getListsIdOfMonth(month, userId);
      const idsOfMonth = []
      listIds.forEach(list => idsOfMonth.push(list.id))
      yearListsIds.push(idsOfMonth)
    }
    for (idsOfMonth of yearListsIds) {
      let total = 0;
      for (id of idsOfMonth) {
        const allProducts = await getAllProductsOfList(id);
        for (product of allProducts) {
          total += product.precio;
        }
      }
      monthExpenses.push(Math.round(total));
    }
    res.json(monthExpenses)
  } catch (error) {
    res.json({ error: error.message })
  }
})





module.exports = router