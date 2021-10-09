// File System (bawaan NODE JS / Core Modules)
const fs = require('fs');

// Mrnuliskan string ke sebuah file (Sync)
/* fs.writeFileSync('data/test.txt', 'Hello World! Secara synchronus');

// Menuliskan string ke sebuah file (Async)
/*
try{
fs.writeFile('data/test.txt', 'Hello World! Secara Asynchronus gaes Siap.', (e) => console.log(e));
} catch(e) {
console.log(e)
}
*/

// Membaca file secara Sync
/*
const readFile = fs.readFileSync('test.txt', 'utf-8')
console.log(readFile)
*/

// Membaca file secara Ashyncrhonus
/*
fs.readFile('data/test.txt', 'utf-8', (err, data) => {
if(err) throw err;
console.log(data)
})
*/

// Readline
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

/*
rl.question('Masukkan nama Anda : ', (nama) => {
    rl.question('Masukkan noHP anda : ', (noHP) => {
        console.log(`Terimakasih ${nama}, anda telah menambahkan noHP : ${noHP}`);
        rl.close();
    })

})
*/

// Menyimpan data yang di input pada file contacts.json
rl.question('Masukkan nama Anda : ', (nama) => {
    rl.question('Masukkan noHP anda : ', (noHP) => {
        const contact = {nama, noHP}
        const file = fs.readFileSync('data/contacts.json', 'utf-8')
        const contacts = JSON.parse(file)

        contacts.push(contact)
        
        fs.writeFile('data/contacts.json', JSON.stringify(contacts), (err, data) => {
            if(err) throw err
            console.log(`Terimakasih telah memasukkan data`)
        })
        
        rl.close();
    })

})