const { dataObject }  = require('./data')

const express = require('express');

const app = express();




const PORT = process.env.PORT || 3000;



app.get('/',(req,res) => { 
    res.send(dataObject);
})


app.get('/post',(req,res)=> { 
    const postObject = { name: "So Yeon", age: 36, education: "Bachelors", occupation: "pharmacist", city : "San Fransisco"};
    dataObject.push(postObject);
    res.send(dataObject)

})

app.listen(PORT,() => console.log(`server is running at ${PORT}`))
