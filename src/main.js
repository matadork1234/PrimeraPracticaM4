const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ProductRouter = require('./routes/product.router');
const UserRouter = require('./routes/user.router');
const morgan = require('morgan');
const mongoose = require('mongoose');
dotenv.config();

const PORT_SERVER = parseInt(process.env.PORT, 10) || 3000;
const app = express();

app.use(cors());
app.use(morgan('prod'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/product', ProductRouter);
app.use('/api/v1/user', UserRouter);

mongoose.set('strictQuery', true);
mongoose.connect(process.env.URL_MONGODB).then(() => {
    console.log('Connected to MongoDB ATLAS');
}).catch((error) => {
    console.error(error);
})

app.listen(PORT_SERVER, () => {
    console.log(`Server listening in port ${ PORT_SERVER }`);
});
