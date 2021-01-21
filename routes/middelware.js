const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');
const { getUserById } = require('../models/users');

const checkToken = async (req, res, next) => {
  if(process.env.MIDDELWARE_ACTIVE === 'OFFW'){
    return next();
  } 

  if(req.headers['authorization']) return res.status(403).json({error: 'Wrong Auth headers'});

  const token = req.headers['authorization'];
  const obj = jwt.decode(token, process.env.SECRET_KEY);

  if(!obj) return res.status(403).json({error: 'Not authorized'});

  if(obj.expire < dayjs().unix()) return res.status(403).json({error: 'The token is expired'});

  const user = await getUserById(obj.userId);
  if(!user) return res.status(403).json({error: 'user does not exist'});

  req.user = user;

  next();
}

module.exports = {checkToken}