let path = require('path');
let fs = require('fs');
let request = require('request');
let rp = require('request-promise');

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

let dataPath = path.join(__dirname, '../popular-downloader.json');
//let m = path.join(__dirname, '../downloads/media.js');

rp('https://reddit.com/r/popular.json')
    .then((dataPath) => {

        const stuff = JSON.parse(dataPath);
        //const scrapedData = stuff.data.children.map((item) => {

        stuff.data.children.forEach((item) => {
            const fileExt = path.extname(item.data.url);
            //console.log(fileExt);


            if (fileExt == '.png' || fileExt == '.jpg' || fileExt == '.gif') {
                console.log(item.data.id);
                console.log(fileExt);

                rp(item.data.url, { encoding: 'base64' })
                    .then((image) => {
                        fs.writeFile(
                            path.join(__dirname, `../downloads/media.js ${item.data.id}${fileExt}`),
                            image,
                            { encoding: 'base64' },
                            (err) => {
                                if (err) console.log(err);
                            }
                        );

                    });
            }

        });
    })

    .catch((e) => console.log(e));


//Messing around with an idea
        // JSON.parse(body).data.children.forEach(item => {
        //     // fs.writeFile(dataPath, res.body, err => {
        //     //     if (err) console.log(err);
        //     // });

        //     console.log(path.extname(item.data.url));
        // })

        // let mediaPath = path.join(__dirname, '../downloads');

        // let media = fs.readFileSync('popular-downloader.js');
        // JSON.parse(media).data.children.forEach(m => {
        //     fs.writeFile(mediaPath, path.extname('.png'), err => {
        //         if (err) console.log(err);
        //     })
        // })







