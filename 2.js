function vendingMachine(price, payment) {
    if (price > 200000) payment += price * 10 / 100;
    let arrPec = [5000,10000,20000,50000];
    let jumlahPec = [0,0,0,0];
    let res = payment - price;
    while (res >= arrPec[0]) {
        if (res >= arrPec[3]) {
            res -= arrPec[3];
            jumlahPec[3]++;
        }
        else if (res >= arrPec[2]) {
            jumlahPec[2]++;
            res -= arrPec[2];
        }
        else if (res >= arrPec[1]) {
            jumlahPec[1]++;
            res -= arrPec[1];
        }
        else if (res >= arrPec[0]) {
            jumlahPec[0]++;
            res -= arrPec[0];
        }
    }
    let index = 0;
    for(i of jumlahPec){
        if(i!=0)
        console.log(i,' x ', arrPec[index]);

        index++;
    }
    console.log(res, 'Disumbangkan karena tidak ada pecahan dibawah 5000')
}
vendingMachine(220000, 250000);