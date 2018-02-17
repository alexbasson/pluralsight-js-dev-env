import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('index.html', () => {
  it('displays a header', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, (err, window) => {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.textContent).to.equal('Users');
      done();
    });
  });

  it('displays a list of users', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, (err, window) => {
      const rows = window.document.getElementsByTagName('td');
      expect(rows.length).to.equal(3);
      done();
    });
  });
});
