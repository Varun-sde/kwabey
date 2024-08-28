const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

function allFiles(folderPath) {
  return fs.readdirSync(folderPath).length;
}

function nameSetter(folderName) {
  const folder = `./public/${folderName}`;
  const fileCount = allFiles(folder);
  return `${folderName}-${fileCount + 1}.png`
}

const storage = (folderName) => multer.diskStorage({
  destination: function (req, file, cb) { cb(null, `./public/${folderName}`) },
  filename: function (req, file, cb) { cb(null, nameSetter(folderName)) }
});

const latestUpload = multer({ storage: storage("latest") });
const animeUpload = multer({ storage: storage("anime") });
const jacketUpload = multer({ storage: storage("jacket") });

app.get("/:id",(req,res)=>{
  const {id} = req.params
  let files = fs.readdirSync(`./public/${id}`)
  let arr = []
  for(let i = 0; i < files.length; i++){
    arr.push(`http://localhost:5000/${id}/${files[i]}`)
  }
  res.status(200).json({arr})
})

app.post("/upload/latest", latestUpload.single("file"), (req, res) => {
  res.send(`File uploaded: ${req.file.filename}`);
});

app.post("/upload/anime", animeUpload.single("file"), (req, res) => {
  res.send(`File uploaded: ${req.file.filename}`);
});

app.post("/upload/jacket", jacketUpload.single("file"), (req, res) => {
  res.send(`File uploaded: ${req.file.filename}`);
});

app.listen(PORT, () => {
  console.log(`server runs on ${PORT}`);
});