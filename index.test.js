const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('verificar contenido de la página', () => {
  const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
  const dom = new JSDOM(html);
  const { document } = dom.window;
  expect(document.querySelector('h1').textContent).toBe('Hola Mundo');
});
