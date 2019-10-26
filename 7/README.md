### Jawaban Nomor 7
#### Bagian A

##### Query menampilkan semua buku

```javascript
function tugasQuery1(){ //menampilkan semua buku
    let sql = 'SELECT name FROM books'; 
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
    });
}
```
###### Output:
```
[ RowDataPacket { name: 'Can\'t Hurt Me: Master Your Mind and Defy the Odds' },
  RowDataPacket { name: 'To Kill A Mockingbird' },
  RowDataPacket { name: 'Sapiens: A Brief History of Humankind' },
  RowDataPacket { name: 'Permanent Record' },
  RowDataPacket { name: 'Harry Potter and the Deathly Hallows' } ]
```

##### Query menampilkan buku berdasarkan kategori

```javascript
function tugasQuery2(){ //menampilkan list buku berdasarkan kategori
    let sql = 'SELECT c.name, b.name, b.stok FROM books b JOIN categories c ON b.category_id = c.id ORDER BY c.id'
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
    });
}
```
###### Output:
```
[ RowDataPacket {
    name: 'Can\'t Hurt Me: Master Your Mind and Defy the Odds',
    stok: 2 },
  RowDataPacket { name: 'Permanent Record', stok: 1 },
  RowDataPacket { name: 'To Kill A Mockingbird', stok: 5 },
  RowDataPacket { name: 'Harry Potter and the Deathly Hallows', stok: 100 },
  RowDataPacket { name: 'Sapiens: A Brief History of Humankind', stok: 10 } ]
```

##### Query menampilkan buku berdasarkan ID
```javascript
function tugasQuery3(){ //menampilkan buku sesuai ID
    let sql = 'SELECT name, deskripsi FROM books WHERE id=2'
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
    });
}


```
###### Output:
```
[ RowDataPacket {
    name: 'To Kill A Mockingbird',
    deskripsi:
     'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.\r\n\r\nCompassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature.' } ]
```
#### Bagian B

NB: Sementara hanya bisa menampilkan (READ), belum bisa melakukan UPDATE DELETE INSERT melalui GUI bootstrap

![alt text][logo]
![alt text][logo2]
![alt text][logo3]

[logo]: https://github.com/xbaldiq/dumbwaysid-b13k2/blob/master/7/capture/chrome_2019-10-26_19-12-55.jpg "Capture 1"

[logo2]: https://github.com/xbaldiq/dumbwaysid-b13k2/blob/master/7/capture/chrome_2019-10-26_19-13-16.jpg "Capture 2"

[logo3]: https://github.com/xbaldiq/dumbwaysid-b13k2/blob/master/7/capture/chrome_2019-10-26_19-27-35.jpg "Capture 2"