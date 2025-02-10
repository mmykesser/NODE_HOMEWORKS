const express = require('express');
const config = require('./config/config');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const postsRoutes = require('./routes/postsRoutes');

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);

connectDB(config.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log('Connected to MongoDB');
        app.listen(config.port, () => {
            console.log(`Server is running on port: ${config.port}`);
        })
    })
    .catch((err) => {
        console.log( `Error connecting to MongoDB ${err}`);
        process.exit(1);
    })
;

