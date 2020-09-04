const express = require('express');
const { get, insert, update, remove, getProjectActions } = require('../data/helpers/projectModel')

const router = express.Router();

//done
router.get('/', (req, res) => {
    // do your magic!
    try {
        get()
            .then(allProjects => {
                res.status(200).json(allProjects)
            })
    } catch (error) {
        res.status(500).json({ error: 'server cannot find posts' })
    }
});

//done
router.get('/:id', validateProjectId, (req, res) => {
    // do your magic!
    res.status(200).json(req.project)
});
//done
router.get('/:id/actions', validateProjectId, (req, res) => {
    // do your magic!
    getProjectActions(req.project.id)
        .then(actions => {
            console.log(actions)
            res.status(200).json(actions)

        })
});

router.post('/:id', validateProjectId, (req, res) => {
    // do your magic!
   
});



// local Middleware
function validateProject(req, res, next) {
    
    if(!req.completed) req.completed = false
    if (!req.name || !req.description) {
        res.status(404).json({error: 'Name, and description not received'})
    } else {
        next()
    }
}

//done
function validateProjectId(req, res, next) {

    get(req.params.id)
        .then(project => {
            if (!project) res.status(404).json({ error: 'Project Id not found' })
            req.project = project
            next()
        })
        .catch(() => {
            res.status(500).json({ error: 'Server cannot find project by ID' })

        })


}
module.exports = router
