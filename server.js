const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());



require("./server/config/mongoose.config");

require("./server/routes/item.routes")(app)



app.listen(port,()=> console.log(`Listening on port ${port}`))