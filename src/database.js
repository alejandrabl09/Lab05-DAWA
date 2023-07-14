const mongoose = require('mongoose');

const username = 'evelynblas'
const password = process.env.SECURE_PASSWORD_MONGO

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.eef4y0y.mongodb.net/test`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('open', () => console.log('Database is connected'))
db.on('error', console.error.bind(console, 'connection error: '))