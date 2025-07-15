const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;
const ROOT_DIRECTORY = path.join(__dirname, './');

// Servește static toate fișierele din ROOT_DIRECTORY
app.use(express.static(ROOT_DIRECTORY));

// Dacă cineva cere '/', trimite index.html automat (express.static face asta implicit, dar să fim expliciți)
/*app.get('/', (req, res) => {
  res.sendFile(path.join(ROOT_DIRECTORY, 'public/index.html'));
});*/

// Pentru orice alt path care nu se găsește, trimite 404
app.use((req, res) => {
  res.status(404).send('Fișierul nu a fost găsit.');
});

app.listen(PORT, () => {
  console.log(`Serverul a pornit. Ascultă pe http://localhost:${PORT}/`);
});

