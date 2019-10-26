const express = require('express');
const app = express();

let dataKey = ['dumb','ways','the','best'];
let word  = 'dumbways'

function pengecekanValue(dataKey,word){
    for(x of dataKey){
        console.log(x,' =>',word.includes(x));
    }
}

pengecekanValue(dataKey,word);

app.get('/',(req,res) => {
     //menjalankan fungsi printBiodata() yang menghasilkan json
    // console.log(biodata);
})

app.listen('3000', () => {
    console.log('server started on port 3000');
});

