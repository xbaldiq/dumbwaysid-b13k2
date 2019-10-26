### Jawaban Nomor 7
#### Bagian A

###### Query menampilkan semua buku

```javascript
function tugasQuery1(){ //menampilkan semua buku
    let sql = 'SELECT name FROM books'; 
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
    });
}
```

###### Query menampilkan buku berdasarkan kategori

```javascript
function tugasQuery2(){ //menampilkan list buku berdasarkan kategori
    let sql = 'SELECT c.name, b.name, b.stok FROM books b JOIN categories c ON b.category_id = c.id ORDER BY c.id'
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
    });
}
```

###### Query menampilkan buku berdasarkan ID
```javascript
function tugasQuery3(){ //menampilkan buku sesuai ID
    let sql = 'SELECT name, deskripsi FROM books WHERE id=2'
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
    });
}
```

#### Bagian B

