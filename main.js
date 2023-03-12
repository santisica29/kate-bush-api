const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

let kateBush = {
  name: "Kate Bush",
  birthLocation: "Bexleyheath, Kent, England",
  birthDate: "30/06/1958",
  debutAlbum: "The Kick Inside",
  mostFamousAlbum: "Hounds of Love",
  instrument: "Piano",
  hitSong: "Wuthering Heights",
  age: 64,
  image: "https://assets.vogue.com/photos/6294beaabe3d2ba1de72907c/2:3/w_2286,h_3429,c_limit/GettyImages-953415838.jpg",
  genre: "Art Pop",
  albums: [
    ["The Kick Inside, 1978"],
    ["Lionheart, 1978"],
    ["Never for Ever, 1980"],
    ["The Dreaming, 1982"],
    ["Hounds of Love, 1985"],
    ["The Sensual World, 1989"],
    ["The Red Shoes, 1993"],
    ["Live at Hammersmith Odeon [1979 The Tour of Life], 1994"],
    ["Aerial, 2005"],
    ["Director's Cut, 2011"],
    ["50 Words for Snow, 2011"],
    ["Before The Dawn, 2014"],
  ],
  eps: [
    ["On Stage [EP], 1979"],
    ["Kate Bush [EP], 1983"],
    ["Eat the Music [EP], 1993"],
  ],
  compliationAlbums: [
    ["The Single File - Box Set [Compilation Album], 1983"],
    ["The Whole Story [Compilation Album], 1986"],
    ["The Woman's Work: Anthology [Compilation Album], 1990"],
  ],
  bio: 'Catherine Bush (born 30 July 1958) is an English singer, songwriter, pianist, record producer and dancer. In 1978, at the age of 19, she topped the UK Singles Chart for four weeks with her debut single "Wuthering Heights", becoming the first female artist to achieve a UK number one with a self-written song.',
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/katebush", (req, res) => {
  res.json(kateBush);
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Running on PORT: ${PORT}`);
});
