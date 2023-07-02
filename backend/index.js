const connectToMongo=require('./db');
connectToMongo();

const express = require('express')
const app = express()
var cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000


// is middleware send json
app.use(express.json())
app.use(cors())
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Available Routes
// is amin loing and edit it 
app.use('/api/service',require('./routes/adminservice'))

// is login user and admin mixup
app.use('/api/auth',require('./routes/auth'))

// the data fetch in frontend api call this router 
app.use('/api/service/data',require('./routes/fetchfrontenddataservice'))

// The user form submit fill and contact a provader
app.use('/api/service/u',require('./routes/work_user_forms'))


// The admin dashboard in endpoint  
app.use('/api/u',require('./routes/admin_dashboard'))
app.use('/api/auth/opt',require('./routes/forget_password'))


app.listen(port, () => {
  console.log(`SBS beckend listening on port http://localhost:${port}`)
})



