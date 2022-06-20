const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoals, deleteGoal } = require('../controllers/goalControllers')

//router.post('/', setGoal)
//router.get('/', getGoal)
router.route('/').get(getGoals).post(setGoal)

//router.delete('/:id', deleteGoal)
//router.update('/:id', updateGoal)
router.route('/:id').put(updateGoals).delete(deleteGoal)

module.exports = router