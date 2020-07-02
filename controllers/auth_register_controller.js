const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator')

const validationRegister = [
  check('email', 'Неправильно введений email').isEmail(),
  check('password', 'Мінімальна довжина пароля 8 символів').isLength({ min: 8 }),
  check('phone', 'Мінімальна довжина телефонного номера 10 символів').isLength({ min: 10  })
]

const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некоректні дані при регістрації'
      })
    }

    const { email, password, name, female, phone, country, city } = req.body;

    const candidate = await User.findOne({ email });
    if (candidate) {
      return res.status(400).json({ message: 'Такий користувач вже існує' })
    };

    const hashPassword = await bcrypt.hash(password, 12);
    const user = new User({ email, password: hashPassword, name, female, phone, country, city })

    await user.save();

    res.status(201).json({ message: 'Користувач створенний' });

  } catch (e) {
    res.status(500).json({ message: "Щось пішло не так" })
  }
}


module.exports = { register, validationRegister };