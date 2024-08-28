const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 5000;
let isDBConnected = false
const app = express();

app.use(express.json());
app.use(cors())

const Schema = mongoose.Schema(
    {
        image: String,
        name: String,
        originalPrice: Number,
        discountedPrice: Number
    },
    {versionKey: false}
)

const latestModel = mongoose.model("latests",Schema)
const animeModel = mongoose.model("animestore",Schema)
const jacketsandhoodsModel = mongoose.model("jacketsandhoods",Schema)

mongoose.connect("mongodb://localhost:27017/products")
  .then(e=>console.log(`Mongo Connected...`))
  .catch(e=>console.log(`Mongo Connection Error...`))

try{
    async function callLatestData(){
      const data = await latestModel.find()
      console.log(data)
    }
    callLatestData()
}
catch(err){
    console.log(`Latest Error...`)
}

try{
    async function callAnimeData(){
      const data = await animeModel.find()
      console.log(data)
    }
    callAnimeData()
}
catch(err){
    console.log(`Anime Error...`)
}

try{
    async function callJacketsAndhoodsData(){
      const data = await jacketsandhoodsModel.find()
      console.log(data)
    }
    callJacketsAndhoodsData()
}
catch(err){
    console.log(`Jackets & hoods Error...`)
}

app.listen(PORT,()=>{
    console.log(`server runs on ${PORT}`)
})