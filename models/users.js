
const getUserById = (pId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * from users where id = ?', [pId], (err, rows) => {
      if(err) reject(err);
      if(rows.length === 0) resolve(null);
      resolve(rows[0]);
    })
  })
}

const getUserByUsername = (pUsername) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * from users where user = ?', [pUsername], (err, rows) => {
      if(err) reject(err);
      if(rows.length === 0) resolve(null);
      resolve(rows[0]);
    })
  })
}

const createUser = (pUser) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO users (user, password) VALUE (?, ?)', [pUser.username, pUser.password], (err, result) => {
      if(err) reject(err);
      resolve(result);
    })
  })
}



module.exports = { getUserByUsername, createUser, getUserById}