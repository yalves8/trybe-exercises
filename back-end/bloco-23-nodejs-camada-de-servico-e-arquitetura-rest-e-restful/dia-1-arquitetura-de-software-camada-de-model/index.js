const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json());
const port = 3000
const User = require('./models/User');

app.post('/user', async (req,res) =>  {
    const {firstName, lastName, email, passw} = req.body;
    const validation = User.isValid(firstName, lastName, email, passw);
    if(typeof (validation) !== 'boolean') return res.status(400).json({error: 'true', message: `${validation}`})
    await User.create(firstName, lastName, email, passw);
    res.status(200).json({message: 'created'});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))