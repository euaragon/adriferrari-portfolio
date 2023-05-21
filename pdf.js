// const fs = require('fs');
// const pdf = require('html-pdf');

// // Lee el contenido del archivo HTML y CSS
// const html = fs.readFileSync('about-me.html', 'utf8');
// //const css = fs.readFileSync('style.css', 'utf8');

// // Opciones para generar el PDF
// const options = {
//   format: 'A4',
//   border: {
//     top: '0mm',
//     right: '0mm',
//     bottom: '0mm',
//     left: '0mm',
//   },
// };

// // Combina el contenido HTML y CSS
// pdf.create(html, { format: 'A4', border: '0' }).toFile('output.pdf', function (err, res) {
//   if (err) return console.log(err);
//   console.log(res);
// });

const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200, // Ajusta el ancho de la página según tus necesidades
    height: 1800, // Ajusta la altura de la página según tus necesidades
  });
  // Cargar el archivo HTML y CSS
  await page.setContent(`<link rel="stylesheet" href="style.css">${fs.readFileSync('about-me.html', 'utf8')}`);

  // Generar el PDF
  await page.pdf({ path: 'output.pdf', format: 'A4', margin: {
    top: '20px',
    right: '20px',
    bottom: '20px',
    left: '20px',
  }, printBackground: true });

  await browser.close();
})();

