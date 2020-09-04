const express = require('express');


const router = express.Router();


router.get('/:id', validateActionId, (req, res) => {
    // do your magic!
    try {
        res.status(200).json(req.user)
    } catch (error) {
        res.status(500).json({ error: 'server cannot find action by id' })
    }
});

// local Middleware
function validateAction(req, res, next) {
    next()

}
function validateActionId(req, res, next) {
    next()

}
module.exports = router
