
const { Long } = require('mongodb');
const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
    id : Number,
    name: String
});
const Category = mongoose.model('Category', CategorySchema);
module.exports=Category

