const Item = require('../models/valu.model')


// def index(request):
//     return something

module.exports.findAllItems = (req, res) => {
    console.log("looking for items!!!")
    //mongoose comand to retrieve all items from the Item table(collection)
    Item.find()
        .then(allItems => res.json({ results: allItems }))
        .catch(err => res.json({ errors: err }))
}

module.exports.addNewItem = (req, res) => {
    console.log("creating new item!!!!!")
    Item.create(req.body)
        .then(newItem => res.json({ results: newItem }))
        .catch(err => res.json(err))
}

module.exports.findOneItem = (req, res) => {
    console.log("item id to find", req.params.itemId)
    Item.findOne({ _id: req.params.itemId })
        .then(selectedItem => res.json({ results: selectedItem }))
        .catch(err => res.json({ errors: err }))
}

module.exports.updateItem = (req,res) =>{

    Item.findOneAndUpdate({ _id: req.params.itemId }, req.body,
    {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    .then(updatedItem => res.json({ results: updatedItem }))
    .catch(err => res.json({errors: err}))
}

module.exports.deleteItem = (req, res) => {

    Item.findByIdAndDelete(req.params.itemId)
        .then(deletedItem => res.json({ results: deletedItem }))
        .catch(err => res.json({ errors: err }))
}






