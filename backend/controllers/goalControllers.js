// @desc     Get GGoals
// @route    GET /api/goals
// @access   Private
const getGoals = (req, res) => {
    res.status(200).json({message: 'Get Goals'})
}

// @desc     Set GGoals
// @route    POST /api/goals
// @access   Private
const setGoal = (req, res) => {
    res.status(200).json({message: 'Set Goals'})
}

// @desc     Update GGoals
// @route    PUT /api/goals/:id
// @access   Private
const updateGoals = (req, res) => {
    res.status(200).json({message: `Update Goals ${req.params.id}`})
}

// @desc     Delete GGoals
// @route    DELETE /api/goals/:id
// @access   Private
const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete Goals ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoals,
    deleteGoal
}