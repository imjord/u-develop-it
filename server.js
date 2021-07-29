const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');


// middle ware 

app.use(express.urlencoded ({ extended: true }));
app.use(express.json());





app.get('/', (req, res) {
    res.json({
        message: 'hello'
    });
});


// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });







app.listen(PORT, () =>{
    console.log('server runing on port ')
})