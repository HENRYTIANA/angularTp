var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var urlServer = 'http://localhost:5000';

var app = express();


// les données sur les livres

var books = [
  {
    id: 1,
    title: 'lesd miserables'
    author: 'Victor hugo',
    publicationDate: '1988',
    available: true,
    nbPages: 100,
    nbRent: 200,
  },
  {
     id: 2,
     title: 'le corbeau et le renard'
    author: 'La fontaine ',
    publicationDate: '1788',
    available: False,
    nbPages: 100,
    nbRent: 58,
  },
  {
     id:3,
     title: 'LA BELLE AU BOIS DORMANT'
    author: 'Warner',
    publicationDate: '1998',
    available: true,
    nbPages: 20,
    nbRent: 200,
  },
  
];

// Middlewares
app.use(bodyParser.json()); // le body des requêtes sont parsées (json -> js)
//app.use(express.static('public'));

// Permet les requêtes cross-domain
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, DELETE");
  next();
});



//get livres

// get
app.get('/books', (req, res) => res.json(books));

app.get('/books', (req, res) => res.json(books));
app.get('/boos/:id', (req, res) => {
  let id = req.params.id;
  for (let i=0; i<books.length; i++) {
    if (books[i].id == id) {
      return res.json(books[i])
    }
  }
  res.status(404).send('Livre introuvable');
});




// get
app.get('/teams', (req, res) => res.json(teams));

app.get('/students', (req, res) => res.json(students));
app.get('/students/:id', (req, res) => {
  let id = req.params.id;
  for (let i=0; i<students.length; i++) {
    if (students[i].id == id) {
      return res.json(students[i])
    }
  }
  res.status(404).send('Etudiant inconnu');
});



app.get('/players', (req, res) => res.json(players));
app.get('/teams/:team/players', (req, res) => {
  var team = req.params.team;
  var playersFiltered = players.filter(player => player.current_team == team);
  return res.json(playersFiltered);
})




// Helper functions
function getLastId(arr) {
  var maxId = 0;
  for (var i=0; i<arr.length; i++) {
    if (arr[i].id > maxId) {
      maxId = array[i].id
    }
  }
  return maxId;
}

app.listen(5000, () => console.log('Serveur écoute le port 5000...'));