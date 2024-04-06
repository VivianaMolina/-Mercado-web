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

app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));

app.get("/", function (req, res) {
    res.render("Dashboard", {
        layout: "Dashboard",
        productos: [
            "banana",
            "cebollas",
            "pimenton",
            "papas",
            "lechuga",
            "tomate",
        ],
    });
});

app.use(express.static("img"))