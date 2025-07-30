import fs from 'fs';

//const content = "This is a sample file content.";

// fs.writeFile('sample.txt', content, (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//   } else {
//     console.log('File written successfully!');
//   }
// });

// console.log("file write operation initiated.");

// try {
//     fs.writeFileSync('output.txt', content);
//     console.log('File written successfully!');
// } catch (error) {
//     console.error('Error writing file:', error);
// }

// console.log("At the end of the file write operation.");

fs.readFile('output.txt', 'utf8', (err, data) => {
  if (err) {    
    console.error('Error reading file:', err);
  } else {
    console.log('File content:', data);
  }     

});


// const fileContent = fs.readFileSync('sample.txt', 'utf8');
// console.log('File content:', fileContent);

