const path = require('path');
const fs = require('fs');

/* 
  advices:
    - use async methods 
*/

/* create directory - fs.mkdir(path, callback) */
// fs.mkdir(
//   path.join(__dirname, '../src'),
//   err => {
//     if (err) {
//       throw new Error(err);
//     }

//     console.log('Directory succesful initialized');
//   }
// );


/* create file - fs.writeFile(path, content, callback) */
// fs.writeFile(
//   path.join(__dirname, '../src/index.js'),
//   'console.log(\'Hellow world\')',
//   err => {
//     if (err) {
//       throw new Error(err);
//     }

//     console.log('File succesful initialized');
//   }
// );


/* append content - fs.appendFile(path, content, callback) */
// fs.appendFile( 
//   path.join(__dirname, '../src/index.js'),
//   '\nconsole.log(\'I learn fs module\')',
//   err => {
//     if (err) {
//       throw new Error(err);
//     }

//     console.log('Content appended');
//   }
// );


/* read file - fs.readFile(path, encodeType, callback) */
// fs.readFile(
//   path.join(__dirname, '../src/index.js'),
//   'utf-8',
//   (err, data) => {
//     if (err) {
//       throw new Error(err);
//     }

//     console.log(data);
//   }
// );

/* rename file - fs.rename(path, newPath, callback) */
// fs.rename( 
//   path.join(__dirname, '../src/index.js'),
//   path.join(__dirname, '../src/index.ts'),
//   err => {
//     if (err) {
//       throw new Error(err);
//     }
//   }
// );