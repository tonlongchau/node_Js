const express = require('express');
// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
const sinhvienController = require('../../controllers/sinhvien.controller');

const router = express.Router();
//students/
router.route('/').post(sinhvienController.createSinhvien).get(sinhvienController.getSinhviens);

router
  .route('/:sinhvienId')
  .get(sinhvienController.getSinhvien)
  .patch(sinhvienController.updateSinhvien)
  .delete(sinhvienController.deleteSinhvien);



module.exports = router;
