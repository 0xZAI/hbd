const express = require('express');
const app = express();
const port = 3000; // Anda bisa mengganti port sesuai keinginan

// Mengatur view engine ke EJS
app.set('view engine', 'ejs');

// Mengatur folder untuk file statis (CSS, gambar, dll.)
app.use(express.static('public'));

// Rute untuk halaman utama
app.get('/', (req, res) => {
  const data = {
    namaYangUlangTahun: 'Caca', // Ganti dengan nama yang berulang tahun
    tanggalLahir: 'Yang ke 18 tahun', // Ganti dengan tanggal lahir
    pesanUcapan: 'Semoga di hari ulang tahunmu ini, kebahagiaan selalu menyertaimu. Selamat ulang tahun!',
    gambarUlangTahun: '/images/birthday-cake.gif' // Pastikan Anda memiliki gambar ini di folder public/images
  };
  res.render('index', data);
});

// Jalankan server
app.listen(port, () => {
  console.log(`Website ulang tahun berjalan di http://localhost:${port}`);
});