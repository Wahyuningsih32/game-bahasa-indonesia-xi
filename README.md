# Game Diagnostik Bahasa Indonesia Kelas XI Kurikulum Merdeka

Aplikasi kuis diagnostik interaktif berbasis HTML, CSS, dan JavaScript murni. Aplikasi berisi 30 soal: 10 soal Teks Argumentasi, 10 soal Teks Berita, 5 soal Teks Cerpen, dan 5 soal Teks Resensi.

## Fitur

- Halaman pembuka dengan input nama, kelas, dan nomor absen.
- Soal serta urutan pilihan A–E diacak setiap permainan.
- Timer 45 detik untuk setiap soal, progress bar, animasi, dan efek suara benar/salah.
- Jawaban tidak dapat diubah dan siswa tidak dapat kembali ke soal sebelumnya.
- Halaman hasil menampilkan identitas siswa, jumlah benar/salah, skor maksimal 100, dan kategori kesiapan.
- Tidak menggunakan framework atau server; dapat dibuka langsung melalui `index.html`.

## Menjalankan Secara Lokal

1. Pastikan kelima berkas ini berada dalam folder yang sama: `index.html`, `style.css`, `script.js`, `questions.js`, dan `README.md`.
2. Klik dua kali `index.html` atau buka berkas tersebut menggunakan peramban web.
3. Isi identitas siswa lalu pilih **Mulai Game**.

> Efek suara menggunakan Web Audio bawaan browser. Pastikan suara perangkat aktif dan lakukan interaksi pada halaman (misalnya memilih jawaban) agar suara dapat diputar.

## Upload ke GitHub Pages

1. Buat repositori baru di akun GitHub, misalnya `game-diagnostik-bahasa-xi`.
2. Unggah seluruh isi folder proyek ke repositori tersebut. Pastikan `index.html` berada di folder utama repositori.
3. Pada halaman repositori, buka menu **Settings** → **Pages**.
4. Di bagian **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/(root)`, lalu klik **Save**.
6. Tunggu beberapa saat. GitHub akan menampilkan alamat situs di halaman GitHub Pages. Buka alamat itu untuk menggunakan aplikasi.

## Upload ke Netlify

1. Masuk atau daftar di [Netlify](https://www.netlify.com/).
2. Pada dashboard, pilih **Add new site** → **Deploy manually**.
3. Seret folder proyek ini ke area unggah Netlify, atau pilih folder secara manual.
4. Tunggu proses unggah selesai. Netlify akan membuat alamat situs secara otomatis.
5. Opsional: pilih **Site configuration** → **Change site name** untuk mengganti alamat situs.

## Struktur Proyek

```text
├── index.html      # Struktur tampilan aplikasi
├── style.css       # Desain responsif, warna, dan animasi
├── script.js       # Logika kuis, timer, skor, serta suara
├── questions.js    # Bank 30 soal dan kunci jawaban
└── README.md       # Panduan penggunaan dan publikasi
```

## Kategori Skor

| Rentang skor | Kategori |
| --- | --- |
| 86–100 | Sangat Siap |
| 71–85 | Siap |
| 56–70 | Cukup |
| 41–55 | Perlu Bimbingan |
| 0–40 | Perlu Pendampingan Intensif |
