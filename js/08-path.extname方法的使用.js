const path = require('path');

const fpath = '/a/b/c/index.html';

const fext = path.extname(fpath);
console.log(fext);

const fname = path.basename(fpath,path.extname(fpath));
console.log(fname);