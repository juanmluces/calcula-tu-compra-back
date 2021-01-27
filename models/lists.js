const createNewList = (list, products) => {
  const { titulo, fk_user } = list;
  let listId;
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO lists (titulo, fk_user) VALUES(?, ?)', [titulo, fk_user], (error, result) => {
      if (error) reject(error);
      listId = result.insertId;
      products.forEach(product => {
        db.query('INSERT INTO tbi_list_product (fk_list, fk_product) VALUES (?, ?)', [listId, product],
          (error, result) => {
            if (error) reject(error);
          })
      });
      console.log(listId)
      resolve(listId)
    })
  })
}

const getLastList = (userId) => {

  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM lists WHERE fk_user = ?', [userId], (error, rows) => {
      if (error) reject(error);
      if (rows.length === 0) resolve(null);
      resolve(rows[rows.length - 1]);
    })
  })
}

const getFavoriteList = (userId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM lists WHERE fk_user = ? AND favorite = 1', [userId], (error, rows) => {
      if (error) reject(error);
      if (rows.length === 0) resolve(null);
      resolve(rows[0]);
    })
  })
}

const createFavoriteList = (userId, listId) => {
  return new Promise(async (resolve, reject) => {
    const result1 = await removeFavoriteList(userId);
    db.query('UPDATE lists SET favorite = 1 WHERE fk_user = ? AND id = ?', [userId, listId], (error, result) => {
      if (error) reject(error)
      resolve(result)

    })


  })
}

const removeFavoriteList = (userId) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE lists SET favorite = 0 WHERE fk_user = ?', [userId], (error, result) => {
      if (error) reject(error);
      resolve(result)
    })
  })
}

const getListsByNameSearch = (userId, searchInput) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM lists WHERE fk_user = ? AND titulo LIKE ?', [userId, `%${searchInput}%`], (error, rows) => {
      if (error) reject(error);
      resolve(rows)
    })
  })
}

module.exports = { getListsByNameSearch, createNewList, getLastList, getFavoriteList, createFavoriteList, removeFavoriteList }