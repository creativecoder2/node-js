const fs = require('fs');

const path = require('path');

const myfolder = path.join(__dirname,'myFolder');

for(let a = 1; a < 3; a++) {
    fs.writeFileSync(`${myfolder}/show${a}.txt`,'this is file no:' + a);

}
fs.readdir(myfolder, (err,items) => {
    items.forEach((file) => {
        console.log(file)
    })
})