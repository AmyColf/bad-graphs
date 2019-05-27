const express = require("express");
const GraphDatabase = require("./db-js/db");
const dbProvider = require("./db-js/dbprovider");
const nodeRoutes = require("./routes/noderoutes");
const edgeRouter = require("./routes/edgeroutes");
const app = express();
const port = 3000;

let db = new GraphDatabase();
app.use(dbProvider(db));
app.use(express.json());
app.use("/nodes", nodeRoutes);
app.use("/edges", edgeRouter);
app.get("/", (req, res) => {
    res.send("Hello world!");
    console.log(req.db);
});
app.listen(4040, () => console.log("Listening on 4040."));
