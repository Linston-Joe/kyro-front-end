const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Where we will keep books
let user = {
    firstName: "test",
    lastName: "",
    displayName: "",
    email: "",
    phoneWork: "",
    phonePersonal: "",
    location: ""
};

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/user', (req, res) => {
    // console.log(JSON.stringify(req))
    const new_user = req.body;

    // Output the book to the console for debugging
    console.log("new_user => ", new_user);
    user = {
        ...user,
        ...new_user
    };

    res.send('User is added to the database');
    res.status(201)
});

app.get('/user', (req, res) => {

    res.send(user);
    res.status(201)
});

app.get('/health', (req, res) => {

    res.send('Server is up');
    res.status(200);
});

app.listen(port, () => console.log(`User app listening on port ${port}!`));