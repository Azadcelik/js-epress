const express = require('express');
const app = express();
const { userArray } = require('./data')
const expressValidator = require('express-validator');
const {validationHandler} = require('./validation');
const { isArray } = require('lodash');
const userRouter = require('./router/user.js')
const parseCookie = require('cookie-parser');



app.use((req, res, next) => {
    console.log('Request URL:', req.originalUrl, 'request METHOD: ',req.method);
    next();
});
// app.use(express.static('./publico')); // built in middleware

app.use(express.urlencoded({extended: true}));//built in middleware

app.use(express.json());// built in middleware
app.use(parseCookie());
app.use('/api/user',userRouter)

// // Application-level middleware

// middleware using in express js
const handleParsedId = (req,res,next) =>  { 
    let {params: {id}} = req;
    id = Number(id)

    if (isNaN(id)) return res.sendStatus(404);

    const updatedUser = userArray.findIndex((user) => user.id === id);
    if (updatedUser === -1) return res.sendStatus(404)

    req.updatedUser= updatedUser;

    next()
}

// get request to retirieve data from server
app.get('/',(req,res) => { 

    
    res.send(userArray)

})

//route parameters using
app.get('/api/user/:id',validationHandler,(req,res) => { 
    const error = expressValidator.validationResult(req)
    if (!error.isEmpty()) {
        return res.send(error)
    }
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
// app.get('/api/user')



//POST REQUEST TO ADD DATA TO THE SERVER
app.post('/api/user',validationHandler,(req,res) => { 
    const body = req.body;
    
    const errorValidation = expressValidator.validationResult(req);
    if (!errorValidation.isEmpty()) { 
       return res.status(404).send({message : errorValidation.errors});
    }



    //find the last index of the array and add plus one for the adding to the end of the array
    const newUser = {id: userArray[userArray.length - 1].id + 1,...body}
    userArray.push(newUser)

    //finally send 201 status code as succesfully added 
    res.status(201).send(newUser)

})

//you should update entier portion when using put 
//do not omit any objects property
app.put('/api/user/:id',handleParsedId,(req,res) => { 
    let {updatedUser,body} = req;
    console.log(updatedUser)

    userArray[updatedUser] = {id: userArray[updatedUser].id, ...body};
    console.log(updatedUser.id)

    return res.sendStatus(200)

})


//updating portion of the entire object not all
app.patch('/api/user/:id',handleParsedId,(req,res) => { 
    let {updatedUser ,body} = req;
    


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
