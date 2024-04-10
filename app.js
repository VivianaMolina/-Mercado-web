const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});
app.engine(
    "handlebars",
    exphbs.engine({
        layoutsDir: __dirname + "/views",
        partialsDir: __dirname + "/views/componentes/",
    })
);
app.set("view engine", "handlebars");

app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist"));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'))
app.use(express.static("img"));

app.get('/', (req, res) => {
    const productos = ['banana', 'cebollas', 'pimenton', 'papas', 'lechuga', 'tomate'];

    res.render('Dashboard', { layout: "Dashboard", pageTitle: 'Mercado Web', Products: productos });

});

app.get("*", (req, res) => {
    res.send("<h1>404 - Página no encontrada</h1><p>Lo siento, la página que buscas no existe.</p>");
});