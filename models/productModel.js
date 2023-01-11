const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    discountPrice: Number,
    offer: Number,
    colors: [String],
    image: [String],
    description:String,
    category: {
        type: mongoose
            .Schema.Types.ObjectId,
        ref: 'category'
    },
    rating: String
})

const productModel = mongoose.model('products', productSchema)

module.exports = productModel