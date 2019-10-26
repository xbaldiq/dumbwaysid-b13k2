function serialGenerator(n) {

    for (let i = 0; i < n; i++) {
        let size = 16;
        const charset = "abcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < size; i++)
            result += charset[Math.floor(Math.random() * charset.length)];

        let index = 0;
        let serial = "";
        for (x of result) {
            if (index % 4 == 0 && index != 0) {
                serial += '-';
                serial += x;
            }

            serial += x;
            index++;
        }
        console.log(serial);
    }
}
serialGenerator(3);