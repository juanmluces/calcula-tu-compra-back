const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');


const { getUserByUsername, createUser } = require('../models/users')

module.exports = router;

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await getUserByUsername(username);
    if (!user) return res.json({ error: 'Error en usuario y/o contraseña' });

    const matchPass = bcrypt.compareSync(password, user.password);
    if (!matchPass) return res.json({ error: 'Error en usuario y/o contraseña' });

    res.json({
      success: 'Login Correcto!',
      userId: user.id,
      token: createToken(user)
    })
  } catch (error) {
    res.json({ error: error.message })
  }


});

router.post('/create', async (req, res) => {
  try {

    const username = req.body.username;
    let password = req.body.password;
    const user = await getUserByUsername(username);
    if (user) {
      res.json({ error: 'Éste usuario ya está registrado' });
    } else {
      password = bcrypt.hashSync(password, 10);
      const newUser = { username, password };
      const result = await createUser(newUser);
      res.json({ result, message: `Usuario ${username} creado correctamente!` });
    }
  } catch (error) {
    res.json({ error: error.message })
  }
});

function createToken(pUser) {
  const obj = {
    userId: pUser.id,
    expire: dayjs().add(process.env.TOKEN_EXPIRE, 'days').unix()
  }
  return jwt.sign(obj, process.env.SECRET_KEY);
}