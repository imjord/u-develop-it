const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');


// express middleware 

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// connect to database 
const db = mysql.createConnection(
    {
        host: 'localhost',
        // my sql username 
        user: 'root',
        // your sql pass
        password: '1290BecomeEZdeveloper123',
        database: 'election'

    },
    console.log('youre connected to the election database')
);

// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// })

db.query('SELECT * FROM candidates', (err, rows) => {
    console.log(rows);
})




// default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
})