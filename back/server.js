/*
 * Require
 */
const express = require('express');
const bodyParser = require('body-parser');
const Server = require('http').Server;
const socket = require('socket.io');
const { response } = require('express');


/*
 * Vars
 */
const app = express();
const server = Server(app);
const io = socket(server);
const port = 3001;

const db = {
  users: {
    'bouclierman@herocorp.io': {
      password: 'jennifer',
      username: 'John',
      color: '#c23616',
    },
    'acidman@herocorp.io': {
      password: 'fructis',
      username: 'Burt',
      color: '#92fffa',
    },
    'captain.sportsextremes@herocorp.io': {
      password: 'pingpong',
      username: 'Karin',
      color: '#e83bff',
    },
    'toto@herocorp.io': {
      password: 'toto',
      username: 'Toto',
      color: '#fc6666',
    },
  }
};

/*
 * Express
 */
app.use(bodyParser.json());
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  // response.header('Access-Control-Allow-Credentials', true);
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});



// GET /
app.get('/', (request, response) => {
  response.send(`
    <div style="margin: 5em auto; width: 400px; line-height: 1.5">
      <h1 style="text-align: center">Hello!</h1>
      <p>If you see this message, your server is up and running !</p>
      <div>API</div>
      <ul style="display: inline-block; margin-top: .2em">
        <li><code>POST http://localhost:${port}/login</code></li>
        <li><code>POST http://localhost:${port}/forgot</code></li>
        <li><code>GET http://localhost:${port}/theme/{email}</code></li>
      </ul>
    </div>
  `);
});


// POST /login
app.post('/login', (request, response) => {
  console.log('>> POST /login', request.body);

  const { email, password } = request.body;

  let username;
  if (db.users[email] && db.users[email].password === password) {
    username = db.users[email].username;
  }

  if (username) {
    console.log('<< 200 OK', username);
    response.json({
      pseudo: username,
    });
  }
  else {
    console.log('<< 401 UNAUTHORIZED');
    response.status(401).end();
  }
});

// POST /forgot
app.post('/forgot', (request, response) => {
  const { email } = request.body;
  if (db.users[email]) {
    response.json({
      pseudo: db.users[email].username
    });
  }
  else {
    response.status(400).end();
  }
});


/*
 * Socket.io
 */
const messages = [];
let id = 0;
io.on('connection', (ws) => {
  console.log('>> socket.io - connected');
  ws.on('send_message', (message) => {
    message.id = ++id;
    messages.push(message);
    io.emit('propagate_message', message);
  });
});

/*
 * Theme json
 */
app.get('/theme/:email', (request, response) => {
  const email = request.params.email;
  if (!email) {
    console.log('<< 400 BAD_REQUEST');
    response.status(400).end();
  }

  let color;
  if (db.users[email] && db.users[email].color) {
    color = db.users[email].color;
  }

  // Réponse HTTP adaptée.
  if (color) {
    console.log('<< 200 OK', email, color);
    response.json({
      color
    });
  }
  else {
    console.log('<< 401 UNAUTHORIZED');
    response.status(401).end();
  }
});

/**
 * Messages
 */
app.get('/messages', (request, response) => {
  response.json({
    messages
  })
})


/*
 * Server
 */
server.listen(port, () => {
  console.log(`listening on *:${port}`);
});