let dataKey = ['dumb','ways','the','best'];
let word  = 'dumbways'

function pengecekanValue(dataKey,word){
    for(x of dataKey){
        console.log(x,' =>',word.includes(x));
    }
}

pengecekanValue(dataKey,word);