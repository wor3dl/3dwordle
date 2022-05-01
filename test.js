const express = require("express")
const app = express()
const PORT = 8080;

app.use(express.static("public"))

app.get("/", (req, res) => {
	
});

app.listen(PORT)

