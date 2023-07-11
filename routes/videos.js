const express = require('express')
const router = express.Router()
const videos = require('../data/videos.json')
const uuid = require('uuid')


router.get('/', (_req, res) => {
    let returnVideos = videos.map(video => {
        return {"id": video.id, "title": video.title, "channel": video.channel, "image": video.image}
    })
    res.json(returnVideos)
})


router.get('/:id', (req, res) => {
    let id = req.params.id
    let returnObj = {}
    videos.forEach(video => {if(video.id === id) {returnObj=video; return}})
    res.json(returnObj)
}) 

router.post('/:id/comments', (req, res) => {
    let comment = {"name": req.body.name, "comment": req.body.comment, "likes": 0, "id": uuid.v4(), "timestamp": Date.now()}
    let id = req.params.id
    videos.forEach(video => {if(video.id === id) {video.comments.push(comment); return}})
    res.json(comment)
})

router.delete('/:id/comments/:commentId', (req, res) => {
    let id = req.params.id
    let commentId = req.params.commentId
    videos.forEach(video => {if(video.id === id) {
        let commentDeleted = video.comments.filter(comment => {
            return comment.id !== commentId
        })
        video.comments = commentDeleted
        res.json(video)
        return
    }})
})

module.exports = router