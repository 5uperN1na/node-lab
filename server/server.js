let path = require('path');
let fs = require('fs');
let request = require('request-promise');

// Part 1

// let chirps = [
//     "Yo, I am hungry!",
//     "Covid sucks!",
//     "I love being a home school teacher!",
//     "Life is amazing!",
//     "These are some great chirps!"
// ]

// let data = JSON.stringify(chirps);
// fs.writeFileSync('chirps.json', data + '\n');


// let rawdata = fs.readFileSync('chirps.json');
// let c = JSON.parse(rawdata);
// console.log(c);

// Part 2

// let dataPath = path.join(__dirname, '../popular-articles.json');

// request('https://reddit.com/r/popular.json', (err, res, body) => {
//     if (err) console.log(err);
//     // console.log(res);


//     JSON.parse(body).data.children.forEach(item => {
//         // console.log(item.data.title);
//         // console.log(item.data.url);
//         // console.log(item.data.author);
//         // fs.appendFileSync(dataPath, item.data.title + '\n');
//         // fs.appendFileSync(dataPath, item.data.url + '\n');
//         // fs.appendFileSync(dataPath, item.data.author + '\n');


//         let stuff = [];
//         stuff.push(item.data.title, item.data.url, item.data.author);
//         console.log(stuff);

//     });

//     // fs.writeFile(dataPath, res.body, err => {
//     //     if (err) console.log(err);
//     // });

//       fs.writeFile(dataPath, res.stuff, err => {
//         if (err) console.log(err);
//     });

// });

// Advanced

let dataPath = path.join(__dirname, '../popular-downloader.js');

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if (err) console.log(err);

    JSON.parse(body).data.children.forEach(item => {
        fs.writeFile(dataPath, res.body, err => {
            if (err) console.log(err);
        });
    })

    // let mediaPath = path.join(__dirname, '../downloads');

    // let media = fs.readFileSync('popular-downloader.js');
    // JSON.parse(media).data.children.forEach(m => {
    //     fs.writeFile(mediaPath, path.extname('.png'), err => {
    //         if (err) console.log(err);
    //     })
    // })




});

