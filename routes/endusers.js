const express = require('express');
const router = express.Router();
const EndUserController = require('../controllers/enduserController');

router.post('/', EndUserController.createEndUser);
router.get('/', EndUserController.listEndUsers);
router.get('/:endUserId', EndUserController.getEndUser);
router.put('/:endUserId', EndUserController.updateEndUser);
router.delete('/:endUserId', EndUserController.deleteEndUser);

module.exports = router;
