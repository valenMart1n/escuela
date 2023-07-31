const express = require("express");

const app = express();

const methodOverride =  require('method-override');

let api = require("./routes/apis")

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static("public"));

app.use("/api", api);

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`Servidor Abierto en puerto ${port}`));