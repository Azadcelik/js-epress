const express = require('express');
const app = express();
const {userArray} = require('./data')
// app.use(express.static('./publico'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());



//get request to retirieve data from server
app.get('/',(req,res) => { 
    
    res.send(userArray)
})

//route parameters using
app.get('/api/user/:id',(req,res) => { 
    let {id} = req.params;
    id = Number(id);
    //if params not a valid number return bad request 
    if (isNaN(id)) res.status(400).send({message: "Bad Request"})
    
    //return wuth array method filter   
    const filteredUser = userArray.filter((user) => user.id == id)

    //if user is not found return 404 with message that user is not found
    //try to specify edge case as much as possible
    if (filteredUser.length < 1) res.status(404).send({message : "User not Found"})
    res.send(filteredUser)
})



//query Parameters for filtering values 
app.get('/api/user', (req,res) => { 
    const {filter,value} = req.query;
    
    //filter based on name and value or whatever you want based on user input
    if (filter && value) { 
       const filteredQuery =  userArray.filter((user) => user[filter].includes(value))
        return  res.send(filteredQuery)
    }
    
    res.send(userArray)


})
