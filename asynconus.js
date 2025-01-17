
// node js may asyn use hota hai qk node js internally js ko use karta hai or asyn programming lang hoti hai
// or sync may condition one by one execute hoti hain 
// asyn may ek sath execute hoti hai

//console.log('a');
//console.log('b');
//console.log('c');


let firstname = 'usamaa';
let lastname = '';

const setlastname = new Promise((resolve , reject) => {
    setTimeout(() => {
        lastname = 'Ali';
        resolve();
    }, 2000)
})
setlastname.then(() => {
    console.log (firstname + ' ' + lastname);
})

// async await

const displayFullname = async () => {
    lastname = await setlastname;
}

displayFullname();





