const express = require("express");
const session = require("express-session");
const cookies = require("cookie-parser");
const app = express();
const path = require("path");
const mainRoutes = require("./routes/main.routes");
const productsRoutes = require("./routes/products.routes");
const usersRoutes = require("./routes/users.routes");
const methodOverride = require("method-override");
const userLoggedMid = require('./middlewares/userLoggedMid');




app.use(session({
    secret: 'shhh',
    resave: false,
    saveUninitialized: false
}))

app.use(cookies());

app.use(userLoggedMid);

app.use(methodOverride("_method"));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use( express.static("public") );
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.use("/", mainRoutes);
app.use("/products", productsRoutes);
app.use("/users",usersRoutes);

app.use((req, res, next) =>{
    res.status(404).render('not-found')
})

app.listen(3030,() => console.log("servidor corriendo en el puerto 3030 en http://localhost:3030/"));