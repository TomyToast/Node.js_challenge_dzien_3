const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';
//Twój kod
/*
const crypto = require('crypto');

function encodeText(text, password, algorithm){
    const cipher = crypto.createCipher(algorithm, password);

    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

console.log(encodeText('Hello, World!', 'M0j3 has|0!', 'aes-256-cbc'));

function decodeText(encodedText, password, algorithm){
    const decipher = crypto.createDecipher(algorithm, password);

    let decrypted = decipher.update(encodedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
*/
const crypto =require('crypto');

const array= [
                '??TegoHasła',
                'CodersLab',
                'Node.js Szyfruje Pliki',
                'Zaźółć Gęślą Jaźń',
                'Moje Haslo 1@3!',
                '111#$((@)n',
                'Dzisiaj Szyfruje 83'
            ];

for(let i=0;i<array.length; i++) {
    let a =crypto.createHmac('rmd160', array[i]).digest('hex');
    if(MY_PWD_HASH===a){
      console.log(array[i]);
    }
    console.log(a);
}