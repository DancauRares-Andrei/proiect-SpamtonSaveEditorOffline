const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;
const upload = multer({ storage: multer.memoryStorage() });
const session = require('express-session');
const app = express();
const PORT = 8080;
const ROOT_DIRECTORY = path.join(__dirname, './');

app.use(express.static(ROOT_DIRECTORY));

app.use(session({
  secret: 'DeltaruneSaveEditor',
  resave: false,
  saveUninitialized: true
}));

async function processUpload(req, res, arr, htmlTemplateFile, outputFile) {
  try {
    const fileBuffer = req.file.buffer;
    const originalName = req.file.originalname;
    req.session.originalSaveFileName = originalName;
    const lines = fileBuffer.toString().split(/\r?\n/);
    if (lines.length != arr[0]) {  
      return res.json({ err: `Not a valid Chapter ${arr[1]}  save file.\n Please ensure you are using the correct chapter editor. \n\n Was expecting ${arr[0]} lines, file has ${lines.length} lines.\n\nIf you believe this is an error, try loading and saving your file in-game.` });
    }
    const tempPath = path.join(__dirname, 'output', req.file.originalname+'.temp');
    await fs.writeFile(tempPath, req.file.buffer);
    req.session.tempSaveFileName = req.file.originalname+'.temp';
    const saveData = {};

    lines.forEach((line, index) => {
      saveData[`_${index + 1}`] = line.trim();
    });

    const htmlTemplatePath = path.join(__dirname, 'html', htmlTemplateFile);
    let htmlContent = await fs.readFile(htmlTemplatePath, 'utf8');

    htmlContent = htmlContent.replace(
      /var\s+saveData\s*=\s*\{[^}]*\};/,
      `var saveData = ${JSON.stringify(saveData)};`
    );

    const outputPath = path.join(__dirname, 'output', outputFile);
    await fs.writeFile(outputPath, htmlContent);

    res.json({ url: `/output/${outputFile}` });

  } catch (err) {
    console.error(err);
    res.json({ err: 'A apărut o eroare la procesarea fișierului.' });
  }
}

app.post('/deltarune1Demo/upload', upload.single('saveFile'), async (req, res) => {
  await processUpload(req, res, [10318, 1], 'deltarune1DemoEdit.html', 'Gdeltarune1DemoEdit.html');
});

app.post('/deltarune1/upload', upload.single('saveFile'), async (req, res) => {
  await processUpload(req, res, [10318, 1], 'deltarune1Edit.html', 'Gdeltarune1Edit.html');
});

app.post('/deltarune2Demo/upload', upload.single('saveFile'), async (req, res) => {
  await processUpload(req, res, [3055, 2], 'deltarune2DemoEdit.html', 'Gdeltarune2DemoEdit.html');
});

app.post('/deltarune2/upload', upload.single('saveFile'), async (req, res) => {
  await processUpload(req, res, [3055, 2], 'deltarune2Edit.html', 'Gdeltarune2Edit.html');
});

app.post('/deltarune3/upload', upload.single('saveFile'), async (req, res) => {
     await processUpload(req, res, [3055, 3], 'deltarune3Edit.html', 'Gdeltarune3Edit.html');
});

app.post('/deltarune4/upload', upload.single('saveFile'), async (req, res) => {
     await processUpload(req, res, [3055, 4], 'deltarune4Edit.html', 'Gdeltarune4Edit.html');
});

app.use(express.urlencoded({ extended: true }));

async function handleSavefileUpdate(req, res, inputFilename, initialFilename, mode) {
  try {
    const ROOT_DIRECTORY = __dirname;
    const saveFile = path.join('output', req.session.tempSaveFileName) || path.join('defaultSaves', mode, initialFilename);
    const inputPath = path.join(ROOT_DIRECTORY, saveFile);
    const outputPath = path.join(ROOT_DIRECTORY, 'output', inputFilename);

    try {
      await fs.access(inputPath);
    } catch {
      return res.status(500).send(`Fișierul ${saveFile} (${mode}) nu există.`);
    }

    const lines = (await fs.readFile(inputPath, 'utf8')).split(/\r?\n/);

    for (const key in req.body) {
      if (key.startsWith('_')) {
        const index = parseInt(key.slice(1)) - 1;
        const value = req.body[key];
        if (!isNaN(index) && index >= 0 && index < lines.length) {
          lines[index] = value;
        }
      }
    }

    await fs.writeFile(outputPath, lines.join('\n'), 'utf8');

    return res.json({ url: `/output/${inputFilename}` });

  } catch (err) {
    console.error(err);
    return res.status(500).send('Eroare internă la procesarea fișierului.');
  }
}

app.post('/deltarune1Demo/savefile/update', (req, res) => {
  const originalName = req.session.originalSaveFileName;
  const isValid = originalName && originalName.startsWith('filech1_');
  const safeFilename = isValid ? originalName : 'filech1_0';
  handleSavefileUpdate(req, res, safeFilename, 'filech1_0', 'demo');
});

app.post('/deltarune2Demo/savefile/update', (req, res) => {
  const originalName = req.session.originalSaveFileName;
  const isValid = originalName && originalName.startsWith('filech2_');
  const safeFilename = isValid ? originalName : 'filech2_0';
  handleSavefileUpdate(req, res, safeFilename, 'filech2_0', 'demo');
});

app.post('/deltarune1/savefile/update', (req, res) => {
  const originalName = req.session.originalSaveFileName;
  const isValid = originalName && originalName.startsWith('filech1_');
  const safeFilename = isValid ? originalName : 'filech1_0';
  handleSavefileUpdate(req, res, safeFilename, 'filech1_0', 'full');
});

app.post('/deltarune2/savefile/update', (req, res) => {
  const originalName = req.session.originalSaveFileName;
  const isValid = originalName && originalName.startsWith('filech2_');
  const safeFilename = isValid ? originalName : 'filech2_0';
  handleSavefileUpdate(req, res, safeFilename, 'filech2_0', 'full');
});
app.post('/deltarune3/savefile/update', (req, res) => {
  const originalName = req.session.originalSaveFileName;
  const isValid = originalName && originalName.startsWith('filech3_');
  const safeFilename = isValid ? originalName : 'filech3_0';
  handleSavefileUpdate(req, res, safeFilename, 'filech3_0', 'full');
});

app.post('/deltarune4/savefile/update', (req, res) => {
  const originalName = req.session.originalSaveFileName;
  const isValid = originalName && originalName.startsWith('filech4_');
  const safeFilename = isValid ? originalName : 'filech4_0';
  handleSavefileUpdate(req, res, safeFilename, 'filech4_0', 'full');
});

app.use((req, res) => {
  res.status(404).send('Neimplementat.');
});
app.listen(PORT, () => {
  console.log(`Serverul a pornit. Ascultă pe http://localhost:${PORT}/`);
});

