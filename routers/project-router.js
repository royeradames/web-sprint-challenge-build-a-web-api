const express = require('express');


const router = express.Router();


router.get('/:id', validateUserId, (req, res) => {
    // do your magic!
    try {
        res.status(200).json(req.user)
    } catch (error) {
        res.status(500).json({ error: 'server cannot find post by id' })
    }
});

// local Middleware
function validateProject(req, res, next) {

}
function validateProjectId(req, res, next) {

}
module.exports = router
