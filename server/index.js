const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const listings_controller = require('./controllers/listings_controller.js');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(datab => app.set('datab', datab));


// LOGIN
app.post('/api/Login/:id', login_controller.addLogin)
app.get('/api/Login/:id', login_controller.getLogin)

//LISTINGS
app.post('/api/Listings/:id', listings_controller.addListing)
app.get('/api/Listings/:id', listings_controller.getListing)
app.delete('/api/Listings/:id', listings_controller.deleteListing)
//DETAILS
app.post('/api/Details/:id', details_controller.addDetails)
app.get('/api/Details/:id', details_controller.getDetails)
app.delete('/api/Details/:id', details_controller.deleteDetials)




const port = process.env.Port || 3000;
app.listen(port, ()=> {console.log(`Server listening on port ${port}.`)})