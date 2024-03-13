const express = require("express");
const app = express();
const path = require("path");
const mainRoutes = require("./routes/main.routes");
const productsRoutes = require("./routes/products.routes");
const usersRoutes = require("./routes/users.routes");


app.use( express.static("public") );
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.get("/", mainRoutes);

app.get("/products", productsRoutes);

app.get("/users",usersRoutes);

app.listen(3030,() => console.log("servidor corriendo en el puerto 3030"));