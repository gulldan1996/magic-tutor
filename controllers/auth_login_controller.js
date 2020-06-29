const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator')

const validationLogin = [
  check('email', 'Введіть коректний email').normalizeEmail().isEmail(),
  check('password', 'Введіть пароль').exists(),
]

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Неправльні дані при вході в систему'
      })
    }
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: 'Користувача не існує' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: 'Неправильно введений пароль, спробуйте знову' })
      }

      const token = jwt.sign(
        { userId: user.id },
        config.get('jwtSecret'),
        { expiresIn: '1h' }
      );

      res.json({ token, userId: user.id });

  } catch (e) {
    res.status(500).json({ message: "Щось пішло не так" })
  }
}

module.exports = { login, validationLogin };