const express = require('express')
const router = express.Router()
const asyncHandler = require("express-async-handler");
const {Bookmark,Category,Event,Ticket,User,Venue} = require('../../db/models')

router.get('', asyncHandler(async(req,res) =>{
    const events = await Event.findAll({
        include:[
            {model:Category,
            attributes:["genre"],
            require:true},
            {model:Venue,
            attributes:["name", "city","capacity"],
            require:true}
        ]
    })
    return res.json({events})
}))

module.exports = router