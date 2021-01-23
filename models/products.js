const getAllCategories = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * from categories', (err, rows) => {
      if (err) reject(err);
      if (rows.length === 0) resolve(null);
      resolve(rows);
    })
  })
}

const getCategoryById = (pId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * from categories WHERE id = ?', [pId], (err, rows) => {
      if (err) reject(err);
      if (rows.length === 0) resolve(null);
      resolve(rows[0]);
    })
  })
}

const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * from products', (err, rows) => {
      if (err) reject(err);
      resolve(rows)
    })
  })
}

const getProductsContainsName = (pName) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM products WHERE nombre LIKE ? OR marca LIKE ?', [`%${pName}%`, `%${pName}%`], (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    })
  })
}

module.exports = { getAllCategories, getCategoryById, getAllProducts, getProductsContainsName }