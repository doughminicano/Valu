const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/valu", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=>console.log("Found the database!! we in here!"))
    .catch((err)=> console.log("ERROR ERRORRR ABORTTTT....JK, BUT HER IS TH EERROR", err) )