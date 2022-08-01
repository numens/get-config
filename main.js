const axios = require('axios');
const fs = require('fs');
const cheerio = require('cheerio');

async function main() {
    const path = await getPath();
    // if (path === '') return;
    // getBase64Config(path);
}

async function getPath() {
    // const url = 'https://raw.githubusercontent.com/Thanos8053/v2ray/main/v2ray';
    const url = 'https://'+'fold'+'cle.com/'+'vps/din'+'gyueli'+'anjie/';
    let response = await axios.get(url);

    const html = response.data || '';
    let $ = cheerio.load(html);
    const link = $('#v2Ray-4 + .code-wrapper .hljs').html();
    console.log(link);

    const sub = await axios.get(link);
    const base64 = sub.data;
    console.log(base64);

    writeFile(base64);

    return html;
}

function getBase64Config(path) {
    // create a buffer
    const buff = Buffer.from(path, 'utf-8');
    // encode buffer as Base64
    const base64 = buff.toString('base64');
    // print Base64 string
    console.log(base64);
    writeFile(base64);
}

function writeFile(data) {
    fs.writeFile('./base64.txt', data, (err) => {
        if (err) console.log('error');
        else console.log('success');
    });
}

main();
