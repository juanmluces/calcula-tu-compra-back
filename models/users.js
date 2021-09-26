
const getUserById = (pId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * from users where id = ?', [pId], (err, rows) => {
      if (err) reject(err);
      if (!rows || rows.length === 0) resolve(null);
      resolve(rows[0]);
    })
  })
}

const getUserByUsername = (pUsername) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * from users where user = ?', [pUsername], (err, rows) => {
      if (err) reject(err);
      if (!rows || rows.length === 0) resolve(null);
      resolve(rows[0]);
    })
  })
}

const createUser = (pUser) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO users (user, password) VALUE (?, ?)', [pUser.username, pUser.password], (err, result) => {
      if (err) reject(err);
      resolve(result);
    })
  })
}

const changeUserAvatar = (pUserId, pAvatarUrl) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE users SET avatar = ? WHERE id = ?', [pAvatarUrl, pUserId], (err, result) => {
      if (err) reject(err);
      resolve(result)
    })
  })
}




module.exports = { getUserByUsername, createUser, getUserById, changeUserAvatar }