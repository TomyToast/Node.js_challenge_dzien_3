//Twój kod
const fs = require('fs');
const crypto = require('crypto');

process.argv.forEach((val, index) => {
    if (index > 1) {
        fs.readFile( val, 'utf8', (err, data) => {
            if(err === null) {
                const hash = crypto.createHmac('sha256', data).digest('hex');
                console.log(hash);
            } else {
                console.log("Błąd", err);
            }
        })
    }
})