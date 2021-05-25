//api endpoints in this file. similar to urls.py
// from . import views
const ItemController = require("../controllers/valu.controller");


// path("/api/items", views.index)

module.exports = app => {
    app.get("/api/items", ItemController.findAllItems);
    app.post("/api/items/create", ItemController.addNewItem);
    app.get("/api/items/:itemId", ItemController.findOneItem);
    app.put("/api/items/update/:itemId", ItemController.updateItem);
    app.delete("/api/items/destroy/:itemId", ItemController.deleteItem);

}




