const expressValidation = require('express-validator');


const validationHandler = [
    expressValidation.body('name').optional().isString().isLength({min: 3, max: 20}).withMessage("should be between 3 and 20 character for name"),
    expressValidation.body('age').optional().isInt(),
    expressValidation.body('education').optional().isString().isLength({min : 5, max: 12}).withMessage('should be min 5 max 12 for education'),
    expressValidation.param('id').isInt().withMessage('id must be an integer')
]

module.exports = {validationHandler};
