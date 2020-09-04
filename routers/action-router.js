const express = require('express');
const { get,
    insert,
    update,
    remove, } = require('../data/helpers/actionModel')

const router = express.Router();

//done
router.get('/', (req, res) => {
    // do your magic!
    try {
        get()
            .then(allActions => {
                res.status(200).json(allActions)
            })
    } catch (error) {
        res.status(500).json({ error: 'server cannot find actions' })
    }
});
router.get('/:id', validateActionId, (req, res) => {
    res.status(200).json(req.action)
});

// local Middleware
// done
function validateAction(req, res, next) {
    if (!req.body.project_id || !req.body.description || !req.body.notes) {
        res.status(404).json({ error: 'project ID, notes, and description not received' })
    } else {
        next()
    }

}
// done
function validateActionId(req, res, next) {
    get(req.params.id)
        .then(action => {
            if (!action) res.status(404).json({ error: 'Project Id not found' })
            req.action = action
            next()
        })
        .catch(() => {
            res.status(500).json({ error: 'Server cannot find project by ID' })

        })

}
module.exports = router
