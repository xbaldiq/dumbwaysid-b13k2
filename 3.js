function cetak_gambar(x) {
    if(x%2==0) {
        console.log('tolong masukkan bilangan ganjil');
        return;
    }

    let str = ""
    for (i = 1; i <= x; i++) {
        for (j = 1; j <= x; j++) {
            if ((i % 2 == 0)) {
                if (j == 1 || j == x) {
                    str += (' * ');
                } else {
                    str += (' = ');
                }
            }
            else {
                str += (' * ');
            }
        }
        str += ('\n');
    }
    console.log(str);
}
cetak_gambar(9);