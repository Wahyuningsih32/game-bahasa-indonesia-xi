/*
 * Bank soal Game Diagnostik Bahasa Indonesia Kelas XI.
 * Setiap objek memiliki lima pilihan. Penanda isCorrect dipakai script.js
 * untuk menilai jawaban, sedangkan urutan soal dan opsi diacak saat permainan dimulai.
 */
const QUESTIONS = [
  // ==================== TEKS ARGUMENTASI (10 SOAL) ====================
  {
    category: "Teks Argumentasi",
    question: "Tujuan utama teks argumentasi adalah ...",
    options: [
      { text: "Meyakinkan pembaca bahwa pendapat penulis dapat diterima", isCorrect: true },
      { text: "Menghibur pembaca melalui cerita yang imajinatif", isCorrect: false },
      { text: "Menceritakan urutan peristiwa secara kronologis", isCorrect: false },
      { text: "Memberikan petunjuk melakukan suatu kegiatan", isCorrect: false },
      { text: "Menggambarkan objek agar mudah dibayangkan", isCorrect: false }
    ]
  },
  {
    category: "Teks Argumentasi",
    question: "Bagian teks argumentasi yang berisi pendapat awal penulis terhadap suatu masalah disebut ...",
    options: [
      { text: "Tesis", isCorrect: true },
      { text: "Orientasi", isCorrect: false },
      { text: "Abstrak", isCorrect: false },
      { text: "Resolusi", isCorrect: false },
      { text: "Koda", isCorrect: false }
    ]
  },
  {
    category: "Teks Argumentasi",
    question: "Perhatikan pernyataan berikut: ‘Menurut data perpustakaan, jumlah peminjam buku meningkat 35% setelah program literasi pagi.’ Pernyataan tersebut berfungsi sebagai ...",
    options: [
      { text: "Data pendukung argumentasi", isCorrect: true },
      { text: "Penegasan ulang cerita", isCorrect: false },
      { text: "Latar tempat peristiwa", isCorrect: false },
      { text: "Konflik antar tokoh", isCorrect: false },
      { text: "Langkah-langkah kegiatan", isCorrect: false }
    ]
  },
  {
    category: "Teks Argumentasi",
    question: "Kalimat yang tepat digunakan sebagai argumen adalah ...",
    options: [
      { text: "Penggunaan transportasi umum perlu ditingkatkan karena dapat mengurangi kemacetan dan polusi udara.", isCorrect: true },
      { text: "Kemarin aku melihat bus berwarna biru di terminal.", isCorrect: false },
      { text: "Wah, transportasi umum memang sangat menarik!", isCorrect: false },
      { text: "Naiklah bus itu, lalu turun di halte terakhir.", isCorrect: false },
      { text: "Terminal itu memiliki banyak bangku panjang.", isCorrect: false }
    ]
  },
  {
    category: "Teks Argumentasi",
    question: "Kata hubung yang lazim digunakan untuk menyatakan sebab dalam teks argumentasi ialah ...",
    options: [
      { text: "karena", isCorrect: true },
      { text: "kemudian", isCorrect: false },
      { text: "atau", isCorrect: false },
      { text: "meskipun", isCorrect: false },
      { text: "sehingga", isCorrect: false }
    ]
  },
  {
    category: "Teks Argumentasi",
    question: "Simpulan dalam teks argumentasi sebaiknya ...",
    options: [
      { text: "menegaskan kembali pendapat berdasarkan alasan yang telah disampaikan", isCorrect: true },
      { text: "memperkenalkan tokoh utama secara rinci", isCorrect: false },
      { text: "menambahkan konflik baru yang mengejutkan", isCorrect: false },
      { text: "mencantumkan seluruh dialog dalam teks", isCorrect: false },
      { text: "menjelaskan langkah kerja dari awal", isCorrect: false }
    ]
  },
  {
    category: "Teks Argumentasi",
    question: "Pernyataan yang termasuk fakta adalah ...",
    options: [
      { text: "Berdasarkan data BMKG, curah hujan di wilayah itu mencapai 250 mm pada Januari.", isCorrect: true },
      { text: "Hujan Januari adalah hujan yang paling menyenangkan.", isCorrect: false },
      { text: "Menurut saya, hujan membuat suasana menjadi lebih puitis.", isCorrect: false },
      { text: "Seharusnya semua orang menyukai hujan.", isCorrect: false },
      { text: "Hujan pasti selalu membawa keberuntungan.", isCorrect: false }
    ]
  },
  {
    category: "Teks Argumentasi",
    question: "Agar argumentasi kuat, penulis perlu menghindari ...",
    options: [
      { text: "pendapat yang tidak didukung alasan atau bukti", isCorrect: true },
      { text: "data yang relevan dengan topik", isCorrect: false },
      { text: "penggunaan kata hubung kausalitas", isCorrect: false },
      { text: "simpulan yang sesuai dengan pembahasan", isCorrect: false },
      { text: "contoh yang memperjelas pendapat", isCorrect: false }
    ]
  },
  {
    category: "Teks Argumentasi",
    question: "‘Sekolah perlu menyediakan lebih banyak tempat sampah terpilah.’ Kalimat tersebut merupakan ...",
    options: [
      { text: "tesis atau pendapat penulis", isCorrect: true },
      { text: "bukti statistik", isCorrect: false },
      { text: "kalimat definisi", isCorrect: false },
      { text: "latar cerita", isCorrect: false },
      { text: "amanat cerpen", isCorrect: false }
    ]
  },
  {
    category: "Teks Argumentasi",
    question: "Penggunaan data dari sumber tepercaya dalam teks argumentasi bertujuan untuk ...",
    options: [
      { text: "memperkuat keakuratan dan daya yakinkan pendapat", isCorrect: true },
      { text: "membuat teks menjadi lebih panjang saja", isCorrect: false },
      { text: "menggantikan seluruh pendapat penulis", isCorrect: false },
      { text: "menjadikan teks sebagai cerpen", isCorrect: false },
      { text: "menambah jumlah tokoh dalam teks", isCorrect: false }
    ]
  },

  // ======================= TEKS BERITA (10 SOAL) =======================
  {
    category: "Teks Berita",
    question: "Unsur berita yang menjawab pertanyaan ‘siapa’ adalah ...",
    options: [
      { text: "tokoh atau pihak yang terlibat dalam peristiwa", isCorrect: true },
      { text: "waktu terjadinya peristiwa", isCorrect: false },
      { text: "tempat terjadinya peristiwa", isCorrect: false },
      { text: "alasan peristiwa terjadi", isCorrect: false },
      { text: "cara peristiwa berlangsung", isCorrect: false }
    ]
  },
  {
    category: "Teks Berita",
    question: "Informasi dalam teks berita harus bersifat ...",
    options: [
      { text: "faktual dan aktual", isCorrect: true },
      { text: "khayal dan lucu", isCorrect: false },
      { text: "pribadi dan rahasia", isCorrect: false },
      { text: "bertele-tele dan emosional", isCorrect: false },
      { text: "penuh majas dan imajinasi", isCorrect: false }
    ]
  },
  {
    category: "Teks Berita",
    question: "Bagian berita yang memuat inti informasi terpenting dan biasanya berada di awal disebut ...",
    options: [
      { text: "teras berita", isCorrect: true },
      { text: "koda berita", isCorrect: false },
      { text: "resolusi berita", isCorrect: false },
      { text: "orientasi berita", isCorrect: false },
      { text: "amanat berita", isCorrect: false }
    ]
  },
  {
    category: "Teks Berita",
    question: "Kalimat yang paling tepat sebagai judul berita adalah ...",
    options: [
      { text: "Siswa SMA Negeri 5 Raih Juara Lomba Debat Nasional", isCorrect: true },
      { text: "Aku Sangat Bangga Menjadi Juara", isCorrect: false },
      { text: "Debat Itu Seru Sekali, Lho!", isCorrect: false },
      { text: "Mari Kita Menjadi Juara Debat", isCorrect: false },
      { text: "Andai Aku Menang Lomba Debat", isCorrect: false }
    ]
  },
  {
    category: "Teks Berita",
    question: "Berikut yang termasuk unsur 5W+1H adalah ...",
    options: [
      { text: "apa, siapa, kapan, di mana, mengapa, dan bagaimana", isCorrect: true },
      { text: "apa, siapa, seandainya, tetapi, lalu, dan agar", isCorrect: false },
      { text: "judul, tokoh, amanat, tema, latar, dan alur", isCorrect: false },
      { text: "tesis, argumen, penegasan, orientasi, konflik, dan koda", isCorrect: false },
      { text: "buku, penulis, penerbit, tokoh, konflik, dan amanat", isCorrect: false }
    ]
  },
  {
    category: "Teks Berita",
    question: "Kata kerja pewarta yang tepat untuk menunjukkan sumber informasi adalah ...",
    options: [
      { text: "menjelaskan", isCorrect: true },
      { text: "berkhayal", isCorrect: false },
      { text: "mengandaikan", isCorrect: false },
      { text: "bermimpi", isCorrect: false },
      { text: "menyesal", isCorrect: false }
    ]
  },
  {
    category: "Teks Berita",
    question: "‘Banjir setinggi 40 cm merendam tiga RT di Kelurahan Melati pada Senin pagi.’ Kalimat tersebut menjawab unsur ...",
    options: [
      { text: "apa, di mana, dan kapan", isCorrect: true },
      { text: "siapa dan mengapa", isCorrect: false },
      { text: "siapa dan bagaimana", isCorrect: false },
      { text: "mengapa dan bagaimana", isCorrect: false },
      { text: "siapa, mengapa, dan bagaimana", isCorrect: false }
    ]
  },
  {
    category: "Teks Berita",
    question: "Salah satu ciri bahasa berita yang baik adalah ...",
    options: [
      { text: "singkat, padat, dan jelas", isCorrect: true },
      { text: "mengandung banyak kata bermakna ganda", isCorrect: false },
      { text: "mengutamakan perasaan penulis", isCorrect: false },
      { text: "menggunakan bahasa yang sangat puitis", isCorrect: false },
      { text: "memakai kalimat sangat panjang", isCorrect: false }
    ]
  },
  {
    category: "Teks Berita",
    question: "Tujuan pencantuman narasumber dalam berita adalah ...",
    options: [
      { text: "meningkatkan kredibilitas informasi", isCorrect: true },
      { text: "menambah konflik dalam cerita", isCorrect: false },
      { text: "membuat berita menjadi fiksi", isCorrect: false },
      { text: "menggantikan judul berita", isCorrect: false },
      { text: "memperbanyak opini penulis", isCorrect: false }
    ]
  },
  {
    category: "Teks Berita",
    question: "Manakah kalimat yang mengandung opini sehingga perlu dihindari dalam berita langsung?",
    options: [
      { text: "Festival itu merupakan acara paling spektakuler sepanjang tahun.", isCorrect: true },
      { text: "Festival budaya berlangsung di alun-alun kota pada Sabtu malam.", isCorrect: false },
      { text: "Panitia mencatat 500 pengunjung menghadiri festival tersebut.", isCorrect: false },
      { text: "Wali Kota membuka festival pada pukul 19.00 WIB.", isCorrect: false },
      { text: "Festival menampilkan 12 kelompok seni dari berbagai daerah.", isCorrect: false }
    ]
  },

  // ======================= TEKS CERPEN (5 SOAL) ========================
  {
    category: "Teks Cerpen",
    question: "Cerpen adalah karya prosa fiksi yang umumnya dapat dibaca dalam ...",
    options: [
      { text: "sekali duduk", isCorrect: true },
      { text: "beberapa jilid buku", isCorrect: false },
      { text: "satu tahun pelajaran", isCorrect: false },
      { text: "banyak episode", isCorrect: false },
      { text: "sebuah ensiklopedia", isCorrect: false }
    ]
  },
  {
    category: "Teks Cerpen",
    question: "Unsur intrinsik cerpen yang menjelaskan tempat, waktu, dan suasana disebut ...",
    options: [
      { text: "latar", isCorrect: true },
      { text: "tema", isCorrect: false },
      { text: "amanat", isCorrect: false },
      { text: "tokoh", isCorrect: false },
      { text: "sudut pandang", isCorrect: false }
    ]
  },
  {
    category: "Teks Cerpen",
    question: "Pesan yang ingin disampaikan pengarang kepada pembaca melalui cerita disebut ...",
    options: [
      { text: "amanat", isCorrect: true },
      { text: "orientasi", isCorrect: false },
      { text: "komplikasi", isCorrect: false },
      { text: "klimaks", isCorrect: false },
      { text: "sudut pandang", isCorrect: false }
    ]
  },
  {
    category: "Teks Cerpen",
    question: "Tokoh yang memiliki sifat baik dan biasanya mendukung nilai positif disebut tokoh ...",
    options: [
      { text: "protagonis", isCorrect: true },
      { text: "antagonis", isCorrect: false },
      { text: "figuran", isCorrect: false },
      { text: "tambahan", isCorrect: false },
      { text: "tritagonis", isCorrect: false }
    ]
  },
  {
    category: "Teks Cerpen",
    question: "Tahap alur ketika konflik mencapai puncak ketegangan disebut ...",
    options: [
      { text: "klimaks", isCorrect: true },
      { text: "pengenalan", isCorrect: false },
      { text: "peleraian", isCorrect: false },
      { text: "penyelesaian", isCorrect: false },
      { text: "koda", isCorrect: false }
    ]
  },

  // ======================= TEKS RESENSI (5 SOAL) =======================
  {
    category: "Teks Resensi",
    question: "Teks resensi adalah teks yang berisi ...",
    options: [
      { text: "ulasan atau penilaian terhadap suatu karya", isCorrect: true },
      { text: "langkah-langkah membuat karya", isCorrect: false },
      { text: "laporan langsung suatu peristiwa", isCorrect: false },
      { text: "cerita khayal tentang tokoh", isCorrect: false },
      { text: "pendapat tanpa membahas karya", isCorrect: false }
    ]
  },
  {
    category: "Teks Resensi",
    question: "Identitas buku dalam resensi dapat memuat hal berikut, kecuali ...",
    options: [
      { text: "nomor telepon pembaca", isCorrect: true },
      { text: "nama penulis", isCorrect: false },
      { text: "nama penerbit", isCorrect: false },
      { text: "tahun terbit", isCorrect: false },
      { text: "jumlah halaman", isCorrect: false }
    ]
  },
  {
    category: "Teks Resensi",
    question: "Pernyataan yang menunjukkan keunggulan sebuah buku adalah ...",
    options: [
      { text: "Bahasa yang digunakan sederhana sehingga mudah dipahami pembaca remaja.", isCorrect: true },
      { text: "Buku ini diterbitkan di Jakarta pada 2024.", isCorrect: false },
      { text: "Tokoh utama bernama Aruna dan tinggal di desa.", isCorrect: false },
      { text: "Buku ini memiliki 180 halaman.", isCorrect: false },
      { text: "Penulis buku tersebut lahir di Bandung.", isCorrect: false }
    ]
  },
  {
    category: "Teks Resensi",
    question: "Tujuan resensi bagi pembaca adalah ...",
    options: [
      { text: "memberikan pertimbangan sebelum menikmati atau memilih suatu karya", isCorrect: true },
      { text: "mengubah karya menjadi berita", isCorrect: false },
      { text: "menggantikan isi karya sepenuhnya", isCorrect: false },
      { text: "membuat pembaca menghafal penerbit", isCorrect: false },
      { text: "menambah tokoh dalam karya", isCorrect: false }
    ]
  },
  {
    category: "Teks Resensi",
    question: "Dalam resensi, saran atau rekomendasi pada bagian akhir ditujukan untuk ...",
    options: [
      { text: "menentukan pembaca yang sesuai untuk karya tersebut", isCorrect: true },
      { text: "menjelaskan konflik utama secara utuh", isCorrect: false },
      { text: "menuliskan ulang seluruh isi buku", isCorrect: false },
      { text: "menceritakan riwayat hidup pembaca", isCorrect: false },
      { text: "membuat karya menjadi teks prosedur", isCorrect: false }
    ]
  }
];
