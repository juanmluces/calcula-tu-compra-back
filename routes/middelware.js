const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');
const { getUserById } = require('../models/users');

const checkToken = async (req, res, next) => {
  if (process.env.MIDDELWARE_ACTIVE === 'OFF') {
    return next();
  }

  // console.log(req.params)

  if (!req.headers['authorization']) return res.status(403).json({ error: 'Wrong Auth headers' });

  const token = JSON.parse(req.headers['authorization']);
  // console.log(token)

  try {
    const obj = jwt.decode(token, process.env.SECRET_KEY);

    if (!obj) return res.status(403).json({ error: 'Not authorized' });
    if (obj.expire < dayjs().unix()) return res.status(403).json({ error: 'The token is expired' });
    if (req.body) {
      // console.log(req.body)
      if (req.body.userid != obj.userId) return res.status(403).json({ error: 'User Not valid' })
    } else {
      // console.log(req.params)
      if (req.params.userid != obj.userId) return res.status(403).json({
        error: 'User Not Valid'
      })
    }

    const user = await getUserById(obj.userId);
    if (!user) return res.status(403).json({ error: 'user does not exist' });

    req.user = user;

    next();
  } catch (error) { res.json({ error: 'TOKEN ERROR' }) }
}

module.exports = { checkToken }