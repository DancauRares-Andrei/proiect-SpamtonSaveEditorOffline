const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;
const upload = multer({ storage: multer.memoryStorage() });
const app = express();
const PORT = 8080;
const ROOT_DIRECTORY = path.join(__dirname, './');

// Servește static toate fișierele din ROOT_DIRECTORY
app.use(express.static(ROOT_DIRECTORY));

// Dacă cineva cere '/', trimite index.html automat (express.static face asta implicit, dar să fim expliciți)
/*app.get('/', (req, res) => {
  res.sendFile(path.join(ROOT_DIRECTORY, 'public/index.html'));
});*/

app.post('/deltarune1Demo/upload', upload.single('saveFile'), async (req, res) => {
  try {
    const fileBuffer = req.file.buffer;
    const lines = fileBuffer.toString().split(/\r?\n/);

    // Exemplu: iau valoarea de la anumite linii
    const saveData = {

      "_1": lines[0]?.trim() || '',
      "_2": lines[1]?.trim() || '',
      "_8": lines[7]?.trim() || '',
      "_9": lines[8]?.trim() || '',
      "_10": lines[9]?.trim() || '',
      "_11": lines[10]?.trim() || '',
      "_16": lines[15]?.trim() || '',
      "_71": lines[70]?.trim() || '',
      "_72": lines[71]?.trim() || '',
      "_73": lines[72]?.trim() || '',
      "_74": lines[73]?.trim() || '',
      "_75": lines[74]?.trim() || '',
      "_77": lines[76]?.trim() || '',
      "_78": lines[77]?.trim() || '',
      "_79": lines[78]?.trim() || '',
      "_113": lines[112]?.trim() || '',
      "_114": lines[113]?.trim() || '',
      "_115": lines[114]?.trim() || '',
      "_116": lines[115]?.trim() || '',
      "_117": lines[116]?.trim() || '',
      "_118": lines[117]?.trim() || '',
      "_125": lines[124]?.trim() || '',
      "_126": lines[125]?.trim() || '',
      "_127": lines[126]?.trim() || '',
      "_128": lines[127]?.trim() || '',
      "_129": lines[128]?.trim() || '',
      "_131": lines[130]?.trim() || '',
      "_132": lines[131]?.trim() || '',
      "_133": lines[132]?.trim() || '',
      "_167": lines[166]?.trim() || '',
      "_168": lines[167]?.trim() || '',
      "_169": lines[168]?.trim() || '',
      "_170": lines[169]?.trim() || '',
      "_171": lines[170]?.trim() || '',
      "_172": lines[171]?.trim() || '',
      "_179": lines[178]?.trim() || '',
      "_180": lines[179]?.trim() || '',
      "_181": lines[180]?.trim() || '',
      "_182": lines[181]?.trim() || '',
      "_183": lines[182]?.trim() || '',
      "_185": lines[184]?.trim() || '',
      "_186": lines[185]?.trim() || '',
      "_187": lines[186]?.trim() || '',
      "_221": lines[220]?.trim() || '',
      "_222": lines[221]?.trim() || '',
      "_223": lines[222]?.trim() || '',
      "_224": lines[223]?.trim() || '',
      "_225": lines[224]?.trim() || '',
      "_226": lines[225]?.trim() || '',
      "_236": lines[235]?.trim() || '',
      "_237": lines[236]?.trim() || '',
      "_238": lines[237]?.trim() || '',
      "_239": lines[238]?.trim() || '',
      "_240": lines[239]?.trim() || '',
      "_241": lines[240]?.trim() || '',
      "_242": lines[241]?.trim() || '',
      "_243": lines[242]?.trim() || '',
      "_244": lines[243]?.trim() || '',
      "_245": lines[244]?.trim() || '',
      "_246": lines[245]?.trim() || '',
      "_247": lines[246]?.trim() || '',
      "_248": lines[247]?.trim() || '',
      "_249": lines[248]?.trim() || '',
      "_250": lines[249]?.trim() || '',
      "_251": lines[250]?.trim() || '',
      "_252": lines[251]?.trim() || '',
      "_253": lines[252]?.trim() || '',
      "_254": lines[253]?.trim() || '',
      "_255": lines[254]?.trim() || '',
      "_256": lines[255]?.trim() || '',
      "_257": lines[256]?.trim() || '',
      "_258": lines[257]?.trim() || '',
      "_259": lines[258]?.trim() || '',
      "_260": lines[259]?.trim() || '',
      "_261": lines[260]?.trim() || '',
      "_262": lines[261]?.trim() || '',
      "_263": lines[262]?.trim() || '',
      "_264": lines[263]?.trim() || '',
      "_265": lines[264]?.trim() || '',
      "_266": lines[265]?.trim() || '',
      "_267": lines[266]?.trim() || '',
      "_268": lines[267]?.trim() || '',
      "_269": lines[268]?.trim() || '',
      "_270": lines[269]?.trim() || '',
      "_271": lines[270]?.trim() || '',
      "_272": lines[271]?.trim() || '',
      "_273": lines[272]?.trim() || '',
      "_274": lines[273]?.trim() || '',
      "_275": lines[274]?.trim() || '',
      "_276": lines[275]?.trim() || '',
      "_277": lines[276]?.trim() || '',
      "_278": lines[277]?.trim() || '',
      "_279": lines[278]?.trim() || '',
      "_280": lines[279]?.trim() || '',
      "_281": lines[280]?.trim() || '',
      "_282": lines[281]?.trim() || '',
      "_283": lines[282]?.trim() || '',
      "_284": lines[283]?.trim() || '',
      "_285": lines[284]?.trim() || '',
      "_286": lines[285]?.trim() || '',
      "_287": lines[286]?.trim() || '',
      "_290": lines[289]?.trim() || '',
      "_291": lines[290]?.trim() || '',
      "_292": lines[291]?.trim() || '',
      "_293": lines[292]?.trim() || '',
      "_294": lines[293]?.trim() || '',
      "_295": lines[294]?.trim() || '',
      "_296": lines[295]?.trim() || '',
      "_297": lines[296]?.trim() || '',
      "_298": lines[297]?.trim() || '',
      "_301": lines[300]?.trim() || '',
      "_303": lines[302]?.trim() || '',
      "_305": lines[304]?.trim() || '',
      "_307": lines[306]?.trim() || '',
      "_309": lines[308]?.trim() || '',
      "_311": lines[310]?.trim() || '',
      "_313": lines[312]?.trim() || '',
      "_315": lines[314]?.trim() || '',
      "_302": lines[301]?.trim() || '',
      "_304": lines[303]?.trim() || '',
      "_306": lines[305]?.trim() || '',
      "_308": lines[307]?.trim() || '',
      "_310": lines[309]?.trim() || '',
      "_312": lines[311]?.trim() || '',
      "_314": lines[313]?.trim() || '',
      "_316": lines[315]?.trim() || '',
      "_423": lines[422]?.trim() || '',
      "_572": lines[571]?.trim() || '',
      "_573": lines[572]?.trim() || '',
      "_574": lines[573]?.trim() || '',
      "_575": lines[574]?.trim() || '',
      "_576": lines[575]?.trim() || '',
      "_577": lines[576]?.trim() || '',
      "_578": lines[577]?.trim() || '',
      "_579": lines[578]?.trim() || '',
      "_582": lines[581]?.trim() || '',
      "_586": lines[585]?.trim() || '',
      "_587": lines[586]?.trim() || '',
      "_588": lines[587]?.trim() || '',
      "_589": lines[588]?.trim() || '',
      "_590": lines[589]?.trim() || '',
      "_591": lines[590]?.trim() || '',
      "_592": lines[591]?.trim() || '',
      "_593": lines[592]?.trim() || '',
      "_594": lines[593]?.trim() || '',
      "_537": lines[536]?.trim() || '',
      "_538": lines[537]?.trim() || '',
      "_539": lines[538]?.trim() || '',
      "_540": lines[539]?.trim() || '',
      "_541": lines[540]?.trim() || '',
      "_542": lines[541]?.trim() || '',
      "_524": lines[523]?.trim() || '',
      "_1217": lines[1216]?.trim() || '',
      "_1218": lines[1217]?.trim() || '',
      "_1219": lines[1218]?.trim() || '',
      "_1220": lines[1219]?.trim() || '',
      "_1221": lines[1220]?.trim() || '',
      "_1222": lines[1221]?.trim() || '',
      "_1223": lines[1222]?.trim() || '',
      "_1224": lines[1223]?.trim() || '',
      "_1225": lines[1224]?.trim() || '',
      "_1226": lines[1225]?.trim() || '',
      "_558": lines[557]?.trim() || '',
      "_571": lines[570]?.trim() || '',
      "_1228": lines[1227]?.trim() || '',
      "_569": lines[568]?.trim() || '',
      "_570": lines[569]?.trim() || '',
      "_10316": lines[10315]?.trim() || '',
      "_10317": lines[10316]?.trim() || '',
      "_10318": lines[10317]?.trim() || '',
    };

    // Citește fișierul HTML original
    const htmlTemplatePath = path.join(__dirname, 'deltarune1DemoEdit.html');
    let htmlContent = await fs.readFile(htmlTemplatePath, 'utf8');

    // Înlocuiește linia care conține var saveData = {...};
    htmlContent = htmlContent.replace(
      /var\s+saveData\s*=\s*\{[^}]*\};/,
      `var saveData = ${JSON.stringify(saveData)};`
    );

    // Scrie fișierul temporar
    const tempFilePath = path.join(__dirname, 'generated-deltarune1DemoEdit.html');
    await fs.writeFile(tempFilePath, htmlContent);

    // Trimite link către fișierul generat
    res.json({ url: '/generated-deltarune1DemoEdit.html' });

  } catch (err) {
    console.error(err);
    res.json({ err: 'A apărut o eroare la procesarea fișierului.' });
  }
});
// Pentru orice alt path care nu se găsește, trimite 404
app.use((req, res) => {
  res.status(404).send('Fișierul nu a fost găsit.');
});
app.listen(PORT, () => {
  console.log(`Serverul a pornit. Ascultă pe http://localhost:${PORT}/`);
});

