const express = require('express')
const router = express.Router()
const getProducts = require('../controllers/productController')
// router.get("/", (req,res) => {
//     res.send("Handling product routes, e.g. search for products")
// })
router.get("/", getProducts)

module.exports = router
