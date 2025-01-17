const fs = require('fs');
const path = require('path');

const myCrud = path.join(__dirname,'CRUD');
const myPath = `${myCrud}/crud.txt`;

//create
fs.writeFileSync(myPath,'Create Read Update Delete');

//read
fs.readFile(myPath, 'utf-8' ,(err , file) => {
    console.log(file);
})

//update
fs.appendFile(myPath, 'in node js', (err) => {
    if(!err) {
        console.log('Your file updated successfully');
    }
})

// delete
fs.unlinkSync(myPath);

//rename
fs.rename(myPath, `${myCrud}/renameCRUD.txt`, (err) => {
    if(!err) {
        console.log('Your file rename successfully');
    }
})

