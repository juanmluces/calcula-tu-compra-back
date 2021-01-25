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

module.exports = { createNewList, getLastList }