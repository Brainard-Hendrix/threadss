const express = require('express')
const app = express();
const path = require('path');
const bodyparser = require('body-parser')
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'client','views') );
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/public')));
const port = 3000;

//routers
const loginRouter = require('./backend/routers/login');
const homepage = require('./backend/routers/home');
// const firebaseRouter = require('./backend/routers/firebase-auth')

app.use(loginRouter)
app.use(homepage);
// app.use(firebaseRouter);


app.listen(port, () => console.log(` app listening on port ${port}!`))