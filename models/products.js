const getAllCategories = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * from categories', (err, rows) => {
      if (err) reject(err);
      if (rows.length === 0) resolve(null);
      resolve(rows);
    })
  })
}

const getProductById = (pId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * from products WHERE id = ?', [pId], (error, rows) => {
      if (error) reject(error);
      if (rows.length === 0) resolve(null);
      resolve(rows[0]);
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

const getAllProductsByPage = (pPage) => {
  const offset = ((50 * pPage) - 50);
  let maxPages;
  return new Promise((resolve, reject) => {
    db.query('SELECT * from products', (err, rows) => {
      if (err) reject(err);
      maxPages = Math.ceil(rows.length / 50);
      db.query('SELECT * from products limit 50 offset ?', [offset], (err, rows) => {
        if (err) reject(err);
        const result = { products: rows, maxPages }
        resolve(result)
      })
    });


  })
}

const getAllProductsByCategoryByPage = (pCategoryId, pPage) => {
  const offset = ((50 * pPage) - 50);
  let maxPages;
  return new Promise((resolve, reject) => {
    db.query('SELECT * from products where fk_categoria = ? ', [pCategoryId], (err, rows) => {
      if (err) reject(err);
      maxPages = Math.ceil(rows.length / 50);
      db.query('SELECT * from products where fk_categoria = ? limit 50 offset ?', [pCategoryId, offset], (err, rows) => {
        if (err) reject(err);
        const result = { products: rows, maxPages };
        resolve(result)
      })
    })
  })
}


const getProductsContainsNameByPage = (pName, pPage) => {
  const offset = ((50 * pPage) - 50);
  let maxPages;
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM products WHERE nombre LIKE ? OR marca LIKE ?', [`%${pName}%`, `%${pName}%`], (err, rows) => {
      if (err) reject(err);
      maxPages = Math.ceil(rows.length / 50);

      db.query('SELECT * FROM products WHERE nombre LIKE ? OR marca LIKE ? Limit 50 offset ?', [`%${pName}%`, `%${pName}%`, offset], (err, rows) => {
        if (err) reject(err);
        const result = { products: rows, maxPages }
        resolve(result);
      })
    })
  })
}

const getAllProductsOfList = (pListId) => {
  const products = [];
  return new Promise((resolve, reject) => {
    db.query('SELECT fk_product as product_id FROM tbi_list_product WHERE fk_list = ?', [pListId],
      async (err, rows) => {
        if (err) reject(err);
        const productsIds = rows;
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
        resolve(products)
      })
  })
}

module.exports = { getAllCategories, getCategoryById, getAllProductsByPage, getProductsContainsNameByPage, getAllProductsByCategoryByPage, getProductById, getAllProductsOfList }