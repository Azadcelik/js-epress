const {Router,query} = require('express');

const router = Router();
const {userArray} = require('../data')


router.get('/',(req,res) => { 
    const {filter,value} = req.query;
    //filter based on name and value or whatever you want based on user input
    if (filter && value) { 
       const filteredQuery =  userArray.filter((user) => user[filter].includes(value))
        return  res.send(filteredQuery)
    }
    res.send(userArray)


})


module.exports = router;