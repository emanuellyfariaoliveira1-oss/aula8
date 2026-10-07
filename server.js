const express = require("express")
const cors = require("cors")

const routes = require("./src/routes")

const app = express();
app.use(cors())
app.use(express.urlencoded({extended: true}))
//utilizar o routes do express
app.use(express.json())
app.use(routes);

const porta = 3000;

app.listen(porta, () => {
    console.log(`servidor respodendo em http://localhost:${porta}`)

})