const express = require('express');//import express module
const mysql = require('mysql');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'hbs');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'perpustakaan'
});

//connect to database
db.connect(error => {
    if (error) {
        throw error;
    }
    console.log('mysql connected');
})

//select posts
app.get('/', (req, res) => {
    let sql = 'SELECT id,name,image,deskripsi,stok from books'; //? adalah place holder untuk variabel post
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.render('homepage', {
            results: results
        });
    });
});
//server listening
app.listen(3000, () => {
    // console.log('Server is running at port 3000');
});

function tugasQuery1(){ //menampilkan semua buku
    let sql = 'SELECT name FROM books'; 
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
    });
}

function tugasQuery2(){ //menampilkan list buku berdasarkan kategori
    let sql = 'SELECT c.name, b.name, b.stok FROM books b JOIN categories c ON b.category_id = c.id ORDER BY c.id'
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
    });
}

function tugasQuery3(){ //menampilkan buku sesuai ID
    let sql = 'SELECT name, deskripsi FROM books WHERE id=2'
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
    });
}

tugasQuery1();
tugasQuery2();
tugasQuery3();

