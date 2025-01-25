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



//POST REQUEST TO ADD DATA TO THE SERVER
app.post('/api/user',(req,res) => { 
    const body = req.body;
    
    //find the last index of the array and add plus one for the adding to the end of the array
    const newUser = {id: userArray[userArray.length - 1].id + 1,...body}
    userArray.push(newUser)

    //finally send 201 status code as succesfully added 
    res.send.status(201).send(newUser)

})

//you should update entier portion when using put 
//do not omit any objects property
app.put('/api/user/:id',(req,res) => { 
    let {params: {id} ,body} = req;
    id = Number(id)

    if (isNaN(id)) return res.sendStatus(404);

    const updatedUser = userArray.findIndex((user) => user.id === id);
    if (updatedUser === -1) return res.sendStatus(404)

    userArray[updatedUser] = {id: id, ...body};

    return res.sendStatus(200)

})




//updating portion of the entire object not all
app.patch('/api/user/:id',(req,res) => { 
    let {params: {id} ,body} = req;
    id = Number(id)

    if (isNaN(id)) return res.sendStatus(404);

    const updatedUser = userArray.findIndex((user) => user.id === id);
    if (updatedUser === -1) return res.sendStatus(404)


    //work more on spread operator to understand how does this syntax overwriting 
    userArray[updatedUser] = {...userArray[updatedUser],...body};

    return res.sendStatus(200)

})


app.delete('/api/user/:id',(req,res) => { 
    let {id} = req.params;
    id = Number(id)

    if (isNaN(id)) return res.statusCode(400);
    
    //find index of deleted element of array 

    const userDeleteIndex = userArray.findIndex(user => user.id === id);
    console.log(userDeleteIndex);

    userArray.splice(id,1)
    return res.sendStatus(200)


} )

app.listen('8001', ()=> console.log('listening port at the 8000'))

