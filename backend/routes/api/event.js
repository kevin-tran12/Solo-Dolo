const express = require('express')
const router = express.Router()
const asyncHandler = require("express-async-handler");
const {Bookmark,Category,Event,Ticket,User,Venue} = require('../../db/models')

router.get('/', asyncHandler(async(req,res) =>{
    console.log('hi im working')
    const events = await Event.findAll()
    const category = await Category.findAll()
    const venue = await Venue.findAll()
    return res.json({events})
}))

module.exports = router