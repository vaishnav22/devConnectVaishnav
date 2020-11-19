const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const path = require('path')


const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')


const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const db = require('./config/keys').mongoURI
// const db = process.env.MONGO_URL

mongoose.connect(db).then(() => console.log('MongoDb connected')).catch(err => console.log(err))


//passport middleware
app.use(passport.initialize())

//passport config
require('./config/passport')(passport)


// routes use
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

//if sever dosent open look for buil/static/index
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*', (req,res)=> {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})