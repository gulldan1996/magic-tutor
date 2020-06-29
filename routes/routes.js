const { Router } = require("express");
const router = Router();
const { register, validationRegister } = require('../controllers/auth_register_controller');
const { login, validationLogin } = require('../controllers/auth_login_controller');

router.post('/api/auth/register', validationRegister, register);
router.post('/api/auth/login', validationLogin, login)
// router.post('/api/check-password', checkPassword);
// router.post('/api/magic/candidate', createCandidate);
// router.post('/api/admin', controller)

module.exports = router;