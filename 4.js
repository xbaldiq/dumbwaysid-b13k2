function dumbwaysidMall(namaVoucher, payment) {
    let voucher = [
        {
            nama: 'DumbWaysAsik',
            diskon: 50,
            diskonMaks: 20000,
            minBelanja: 20000
        },
        {
            nama: 'DumbWaysMantap',
            diskon: 30,
            diskonMaks: 40000,
            minBelanja: 20000
        }
    ];
    voucher.forEach(item => {
        if (item.nama == namaVoucher) {
            if (item.minBelanja < payment) {
                let diskon = (payment * item.diskon) / 100
                if (diskon > item.diskonMaks) diskon = item.diskonMaks;

                let totalPembayaran = payment - diskon;
                let kembalian = payment - totalPembayaran;
                console.log('Uang yang harus dibayar: ', totalPembayaran);
                console.log('Diskon: ', diskon);
                console.log('Kembalian: ', kembalian)
            }
        }
    });
}
dumbwaysidMall('DumbWaysAsik', 100000);
dumbwaysidMall('DumbWaysMantap', 50000);