const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const uploadImage = require("./src/utils/uploadImage");

const app = express();
const port = process.env.PORT || 5000;

// admin
// Ecommers

// Middleware setup
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));  

app.use(cors({ 
  origin: 'http://localhost:5173',
  credentials: true,
}));


const authRoutes = require('./src/users/user.route');
const productRoutes = require('./src/products/products.route');
const reviewRoutes = require('./src/reviews/reviews.router');
const orderRoutes = require('./src/orders/orders.route');
const statsRoutes = require('./src/stats/stats.route');


app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/stats', statsRoutes);
 
main()
  .then(()=>console.log("monfodb is connected succesfully")) 
  .catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.DB_URL);
    
    console.log(`the db is connect with ${mongoose.connection.host}`);

    app.get("/", (req, res) => {
      res.send("Ecommers website i am creating ");
    });
    
  }

  // upload image routes
app.post("/uploadImage", (req, res) => {
  uploadImage(req.body.image)
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
