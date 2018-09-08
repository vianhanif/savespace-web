export const MENUITEM = {
  first: [
    {
      id: 1,
      icon: 'currency-usd',
      text: 'Cek Ongkos Kirim'
    },
    {
      id: 2,
      icon: 'truck',
      text: 'Status Pengiriman'
    }
  ],
  second: [
    {
      id: 1,
      icon: 'help-circle',
      text: 'FAQ'
    },
    {
      id: 2,
      icon: 'backup-restore',
      text: 'Kebijakan Pengembalian'
    }
  ],
  third: [
    {
      id: 1,
      icon: 'emoticon',
      text: 'Tentang Kami'
    },
    {
      id: 2,
      icon: 'phone',
      text: 'Kontak Kami'
    },
    {
      id: 3,
      icon: 'briefcase',
      text: 'Karir'
    }
  ]
};

export const POLICY = {
  first: {
    q: 'Apa itu Kebijakan Pengembalian Produk ?',
    a:
      'Suatu Layanan yang diberikan oleh Ebaba terhadap Produk yang dijual di Ebaba dengan jaminan jangka waktu pengembalian tergantung pada kategori Produk. Perlu diperhatikan, bahwa produk dapat dikembalikan  yaitu Produk harus belum digunakan, sesuai dengan kondisi aslinya, dengan label asli masih terpasang, dan dalam kemasan aslinya.'
  },
  second: {
    q: 'Berapa lama jaminan jangka waktu untuk Pengembalian Produk ?',
    a:
      'Konfirmasi penukaran produk ke CS dilakukan maksimal 2x24 jam setelah produk diterima customer. Pengembalian hanya dapat dilakukan dalam jangka waktu 7×24 jam sejak barang diterima via jasa pengiriman barang. Pembeli yang melakukan pengembalian barang wajib melampirkan dokumen tanda terima barang. Seluruh barang yang promo/diskon tidak dapat ditukar atau dikembalikan.',
    note:
      'Produk tidak dapat dikembalikan setelah melewati jaminan jangka waktu yang ditentukan.'
  },
  third: {
    q:
      'Apa saja syarat - syarat yang memungkinkan untuk mengajukan permintaan Pengembalian Produk ?',
    a:
      'Barang yang dikembalikan kepada kami harus dalam kondisi original, belum dipakai, diubah, dan dicuci, dan masih lengkap dengan label/pricetag-nya. Apabila barang yang Anda ingin tukarkan tidak tersedia stoknya, Anda dapat:',
    list: [
      {
        id: 1,
        desc: 'Menukar dengan warna lain untuk produk yang sama'
      },
      {
        id: 2,
        desc:
          'Menukar dengan barang lain dengan harga yang sama atau lebih tinggi'
      },
      {
        id: 3,
        desc: 'Mengembalikan barang tersebut (retur)'
      }
    ]
  },
  fourth: {
    q: 'Ada berapa Prosedur bagi Pembeli dapat melakukan Pengembalian Produk ?',
    a:
      '2 Prosedur untuk Pengembalian Produk yaitu : Pengembalian Produk dengan Pengembalian Uang dan Pengembalian Produk dengan Penukaran.'
  },
  fifth: {
    q: 'Bagaimana cara mengajukan Pengembalian Produk ?',
    option: [
      {
        id: 1,
        optList: 'Pengembalian Produk dengan Pengembalian Uang:',
        optDesc:
          'Silahkan kirimkan email ke order@ebaba.co.id atau hubungi kami di 081398868491, lengkapi dan isi formulir pengembalian produk yang telah dikirimkan oleh Ebaba beserta alasan pengembalian produk, Kemas produk dan sertakan Formulir Pengembalian didalam kemasan, Kirim produk yang ingin dikembalikan ke alamat Warehouse Ebaba yang tercantum di formulir pengembalian produk, tunggu email notifikasi saat produk telah diterima dan di cek mutu di Warehouse Ebaba, Pengembalian uang disetorkan ke rekening Pembeli di proses dalam waktu  7-14 hari kerja tergantung pada kebijakan bank dan cara pembayaran yang digunakan.'
      },
      {
        id: 2,
        optList: 'Pengembalian Produk dengan Penukaran:',
        optDesc:
          'Silahkan kirimkan email ke order@ebaba.co.id atau hubungi kami di 08139886849, Pengembalian Produk (jika tersedia sama dengan spesifikasi produk yang ditukar) dilakukan dalam jangka waktu 14 hari sejak Pembeli menerima barang pesanan, lengkapi dan isi formulir pengembalian produk yang telah dikirimkan oleh Ebaba, Kemas produk dan sertakan Formulir Pengembalian didalam kemasan, Kirim produk yang ingin dikembalikan ke alamat Warehouse Ebaba yang tercantum di formulir pengembalian produk, tunggu email notifikasi saat produk telah diterima dan dicek mutu di Warehouse Ebaba, Ebaba akan mengecek produk yang anda kirim dan pengiriman tukar barang akan di proses dalam waktu 1x24 jam.'
      }
    ],
    note:
      'Kebijakan Pengembalian Produk ini Tidak Berlaku bagi Pembelian Produk yang di kirimkan dari Luar Negeri. Hubungi Costumer Servis Ebaba untuk mengetahui informasi lebih detail.'
  }
};

export const FAQDETAIL = [
  {
    ITEM: {
      title: 'Definisi',
      list: [
        {
          id: 1,
          content:
            'PT Ebaba Muslim Indonesia (Ebaba) adalah suatu perseroan terbatas yang didirikan berdasarkan hukum Negara Republik Indonesia yang menjalankan kegiatan usaha jasa web portal www.Ebaba.com. Selanjutnya disebut Ebaba'
        },
        {
          id: 2,
          content:
            'Syarat & ketentuan adalah perjanjian antara Pengguna dan Ebaba yang berisikan seperangkat peraturan yang mengatur hak, kewajiban, tanggung jawab pengguna dan Ebaba, serta tata cara penggunaan sistem layanan Ebaba'
        },
        {
          id: 3,
          content:
            'Layanan Ebaba adalah kegiatan yang dilakukan oleh Ebaba dan ditawarkan kepada Pengguna Platform Ebaba melalui Platform Ebaba termasuk namun tidak terbatas pada penawaran produk melalui Portal Ebaba, penyediaan sistem transaksi perdagangan online, penyediaan aplikasi transasi perdagangan online, maupun yang lainnya'
        },
        {
          id: 4,
          content:
            'Platform Ebaba adalah sistem pada halaman website atau mobile website, aplikasi mobile, dan aplikasi lainnya dengan alamat domain www.ebaba.com yang disediakan oleh Ebaba'
        },
        {
          id: 5,
          content:
            'Pengguna adalah pihak yang menggunakan layanan Ebaba, termasuk namun tidak terbatas pada pembeli, penjual ataupun pihak lain yang sekedar berkunjung ke Situs Ebaba.'
        },
        {
          id: 6,
          content:
            'Pembeli adalah Pengguna terdaftar yang melakukan permintaan atas Barang yang dijual oleh Penjual di Situs Ebaba'
        },
        {
          id: 7,
          content:
            'Penjual adalah Pengguna terdaftar yang melakukan tindakan buka akun dan/atau melakukan penawaran atas suatu Barang kepada para Pengguna Situs Ebaba'
        },
        {
          id: 8,
          content:
            'Produk adalah barang-barang atau jasa-jasa yang disediakan di dalam Portal Ebaba oleh Ebaba atau afiliasinya, dan/atau Penjual yang terdaftar pada Portal Ebaba yang bisa dibeli oleh Pembeli'
        },
        {
          id: 9,
          content:
            'Barang adalah benda yang berwujud / memiliki fisik Barang yang dapat diantar / memenuhi kriteria pengiriman oleh perusahaan jasa pengiriman Barang'
        },
        {
          id: 10,
          content:
            'Rekening Resmi Ebaba adalah rekening bersama yang disepakati oleh Ebaba dan para pengguna untuk proses transaksi jual beli di Situs Ebaba'
        }
      ]
    }
  },
  {
    ITEM: {
      title: 'Konten',
      list: [
        {
          id: 1,
          content:
            'Dalam menggunakan setiap fitur dan/atau layanan Ebaba, Pengguna dilarang untuk mengunggah atau mempergunakan kata-kata, komentar, gambar, atau konten apapun yang mengandung unsur SARA, diskriminasi, merendahkan atau menyudutkan orang lain, vulgar, bersifat ancaman, atau hal-hal lain yang dapat dianggap tidak sesuai dengan nilai dan norma sosial. Ebaba berhak melakukan tindakan yang diperlukan atas pelanggaran ketentuan ini, antara lain penghapusan konten, moderasi akun, pemblokiran akun, dan lain-lain.'
        },
        {
          id: 2,
          content:
            'Pengguna dilarang mempergunakan foto/gambar Barang yang memiliki watermark yang menandakan hak kepemilikan orang lain.'
        },
        {
          id: 3,
          content:
            'Penguna dengan ini memahami dan menyetujui bahwa penyalahgunaan foto/gambar yang di unggah oleh Pengguna adalah tanggung jawab Pengguna secara pribadi.'
        },
        {
          id: 4,
          content:
            'Penjual tidak diperkenankan untuk mempergunakan foto/gambar Barang atau logo akun sebagai media untuk beriklan atau melakukan promosi ke situs-situs lain diluar Situs Ebaba, atau memberikan data kontak pribadi untuk melakukan transaksi secara langsung kepada pembeli / calon pembeli.'
        },
        {
          id: 5,
          content:
            'Ketika Pengguna menggungah ke Situs Ebaba dengan konten atau posting konten, Pengguna memberikan Ebaba hak non-eksklusif, di seluruh dunia, secara terus-menerus, tidak dapat dibatalkan, bebas royalti, disublisensikan (melalui beberapa tingkatan) hak untuk melaksanakan setiap dan semua hak cipta, publisitas, merek dagang, hak basis data dan hak kekayaan intelektual yang Pengguna miliki dalam konten, di media manapun yang dikenal sekarang atau di masa depan. Selanjutnya , untuk sepenuhnya diizinkan oleh hukum yang berlaku , Anda mengesampingkan hak moral dan berjanji untuk tidak menuntut hak-hak tersebut terhadap Ebaba.'
        },
        {
          id: 6,
          content:
            'Pengguna menjamin bahwa tidak melanggar hak kekayaan intelektual dalam mengunggah konten Pengguna kedalam situs Ebaba. Setiap Pengguna dengan ini bertanggung jawab secara pribadi atas pelanggaran hak kekayaan intelektual dalam mengunggah konten di Situs Ebaba.'
        },
        {
          id: 7,
          content: `Ebaba menyediakan fitur "Diskusi Produk" untuk memudahkan pembeli berinteraksi dengan penjual, perihal Barang yang ditawarkan. Penjual tidak diperkenankan menggunakan fitur tersebut untuk tujuan dengan cara apa pun menaikkan harga Barang dagangannya, termasuk di dalamnya memberi komentar pertama kali atau memberi komentar selanjutnya / terus menerus secara berkala (flooding/spam).`
        },
        {
          id: 8,
          content: `Meskipun kami mencoba untuk menawarkan informasi yang dapat diandalkan, kami tidak bisa menjanjikan bahwa katalog akan selalu akurat dan terbarui, dan Pengguna setuju bahwa Pengguna tidak akan meminta Ebaba bertanggung jawab atas ketimpangan dalam katalog. Katalog mungkin termasuk hak cipta, merek dagang atau hak milik lainnya.`
        },
        {
          id: 9,
          content: `Ebaba berhak untuk sewaktu-waktu menurunkan konten atau materi yang terdapat pada Ebaba yang dianggap melanggar Syarat dan Ketentuan Situs, peraturan hukum yang berlaku, serta etika pariwara yang berlaku.`
        }
      ]
    }
  },
  {
    ITEM: {
      title: 'Pendaftaran Pengguna Ebaba',
      list: [
        {
          id: 1,
          content:
            'Pengguna merupakan pribadi individu yang telah mencapai batas usia minimum yaitu 18 (delapanbelas) tahun atau lebih pada saat mendaftar.'
        },
        {
          id: 2,
          content:
            'Pengguna merupakan badan hukum/ badan usaha yang memiliki legalitas hukum yang dipersyaratkan dan ketentuan perundang-undangan yang berlaku di wilayah yurisdiksi yang sah.'
        },
        {
          id: 3,
          content:
            'Pengguna menyatakan bahwa bukan lah pribadi dan/atau badan hukum yang dilarang oleh ketentuan hukum Republik Indonesia untuk menerima dan megggunakan Layanan Ebaba.'
        },
        {
          id: 4,
          content:
            'Pengguna menyatakan bahwa seluruh informasi dan/atau dokumen yang dilengkapi maupun sampaikan kepada Ebaba adalah benar, lengkap, terbaru, akurat dan sesuai peruntukannya.'
        }
      ],
      description:
        'Ebaba berhak sewaktu-waktu untuk melakukan pemeriksaan terkait dengan kebenaran, keabsahan, dan keberlakuan atas informasi maupun dokumen yang telah disampaikan kepada Ebaba. Apabila diketemukan ketidaksesuaian ataupun kecurangan yang dinilai oleh Ebaba maka kami berhak untuk melakukan pemutusan, pembatalan, maupun pemblokiran atas akses serta keanggotaan Pengguna terhadap Layanan di Ebaba.'
    }
  },
  {
    ITEM: {
      title: 'Transaksi Pembelian',
      list: [
        {
          id: 1,
          content:
            'Pembeli wajib bertransaksi melalui prosedur transaksi yang telah ditetapkan oleh Ebaba. Pembeli melakukan pembayaran dengan menggunakan metode pembayaran yang sebelumnya telah dipilih oleh Pembeli, dan kemudian Ebaba akan meneruskan dana ke pihak Penjual apabila tahapan transaksi jual beli pada sistem Ebaba telah selesai.'
        },
        {
          id: 2,
          content: `Pembeli menyetujui saat melakukan pembelian Barang bahwa:`,
          child: [
            {
              id: 1,
              content:
                'Pengguna masuk ke dalam kontrak yang mengikat secara hukum untuk membeli Barang ketika Pengguna membeli suatu barang.'
            },
            {
              id: 2,
              content:
                'Pembeli bertanggung jawab untuk membaca, memahami, dan menyetujui informasi/deskripsi keseluruhan Barang (termasuk didalamnya namun tidak terbatas pada warna, kualitas, fungsi, dan lainnya) sebelum membuat tawaran atau komitmen untuk membeli.'
            },
            {
              id: 3,
              content:
                'Pembeli mengakui bahwa warna sebenarnya dari produk sebagaimana terlihat di situs Ebaba tergantung pada monitor komputer Pembeli. Ebaba telah melakukan upaya terbaik untuk memastikan warna dalam foto-foto yang ditampilkan di Situs Ebaba muncul seakurat mungkin, tetapi tidak dapat menjamin bahwa penampilan warna pada Situs Ebaba akan akurat.'
            },
            {
              id: 4,
              content:
                'Ebaba tidak mengalihkan kepemilikan secara hukum atas barang-barang dari Penjual kepada Pembeli.'
            }
          ]
        },
        {
          id: 3,
          content:
            'Pembeli memahami dan menyetujui bahwa ketersediaan stok Barang merupakan tanggung jawab Penjual yang menawarkan Barang tersebut. Terkait ketersediaan stok Barang dapat berubah sewaktu-waktu, sehingga dalam keadaan stok Barang kosong, maka penjual akan menolak order, dan pembayaran atas barang yang bersangkutan dikembalikan kepada Pembeli.'
        },
        {
          id: 4,
          content:
            'Pembeli memahami sepenuhnya dan menyetujui bahwa segala transaksi yang dilakukan antara Pembeli dan Penjual selain melalui Rekening Resmi Ebaba dan/atau tanpa sepengetahuan Ebaba (melalui fasilitas/jaringan pribadi, pengiriman pesan, pengaturan transaksi khusus diluar situs Ebaba atau upaya lainnya) adalah merupakan tanggung jawab pribadi dari Pembeli.'
        },
        {
          id: 5,
          content:
            'Ebaba memiliki kewenangan sepenuhnya untuk menolak pembayaran tanpa pemberitahuan terlebih dahulu.'
        },
        {
          id: 6,
          content:
            'Pembayaran oleh Pembeli wajib dilakukan segera (selambat-lambatnya dalam batas waktu satu kali sepuluh jam) setelah Pembeli melakukan check-out. Jika dalam batas waktu tersebut pembayaran atau konfirmasi pembayaran belum dilakukan oleh pembeli, Ebaba memiliki kewenangan untuk membatalkan transaksi dimaksud. Pengguna tidak berhak mengajukan klaim atau tuntutan atas pembatalan transaksi tersebut.'
        },
        {
          id: 7,
          content:
            'Konfirmasi pembayaran dengan setoran tunai wajib disertai dengan berita pada slip setoran berupa nomor invoice dan nama. Konfirmasi pembayaran dengan setoran tunai tanpa keterangan tidak akan diproses oleh Ebaba.'
        },
        {
          id: 8,
          content:
            'Pembeli menyetujui untuk tidak memberitahukan atau menyerahkan bukti pembayaran dan/atau data pembayaran kepada pihak lain selain Ebaba. Dalam hal terjadi kerugian akibat pemberitahuan atau penyerahan bukti pembayaran dan/atau data pembayaran oleh Pembeli kepada pihak lain, maka hal tersebut akan menjadi tanggung jawab Pembeli.'
        },
        {
          id: 9,
          content:
            'Pembeli wajib melakukan konfirmasi penerimaan Barang, setelah menerima kiriman Barang yang dibeli. Ebaba memberikan batas waktu 2 (dua) hari setelah pengiriman berstatus "terkirim" pada sistem Ebaba, untuk Pembeli melakukan konfirmasi penerimaan Barang. Jika dalam batas waktu tersebut tidak ada konfirmasi atau klaim dari pihak Pembeli, maka dengan demikian Pembeli menyatakan menyetujui dilakukannya konfirmasi penerimaan Barang secara otomatis oleh sistem Ebaba.'
        },
        {
          id: 10,
          content:
            'Setelah adanya konfirmasi penerimaan Barang atau konfirmasi penerimaan Barang otomatis, maka dana pihak Pembeli yang dikirimkan ke Rekening resmi Ebaba akan di lanjut kirimkan ke pihak Penjual (transaksi dianggap selesai).'
        },
        {
          id: 11,
          content:
            'Pembeli memahami dan menyetujui bahwa setiap klaim yang dilayangkan setelah adanya konfirmasi / konfirmasi otomatis penerimaan Barang adalah bukan menjadi tanggung jawab Ebaba. Kerugian yang timbul setelah adanya konfirmasi/konfirmasi otomatis penerimaan Barang menjadi tanggung jawab Pembeli secara pribadi.'
        },
        {
          id: 12,
          content:
            'Pembeli memahami dan menyetujui bahwa setiap masalah pengiriman Barang yang disebabkan keterlambatan pembayaran adalah merupakan tanggung jawab dari Pembeli.'
        },
        {
          id: 13,
          content:
            'Pembeli memahami dan menyetujui bahwa masalah keterlambatan proses pembayaran dan biaya tambahan yang disebabkan oleh perbedaan bank yang Pembeli pergunakan dengan bank Rekening resmi Ebaba adalah tanggung jawab Pembeli secara pribadi.'
        },
        {
          id: 14,
          content:
            'Pengembalian dana kepada Pembeli dari Ebaba hanya dapat dilakukan jika dalam keadaan-keadaan tertentu sebagi berikut:',
          child: [
            {
              id: 1,
              content: 'Kelebihan pembayaran dari Pembeli atas harga Barang,'
            },
            {
              id: 2,
              content:
                'Masalah pengiriman Barang telah teridentifikasi secara jelas dari Penjual yang mengakibatkan pesanan Barang tidak sampai,'
            },
            {
              id: 3,
              content:
                'Penjual tidak bisa menyanggupi order karena kehabisan stok, perubahan ongkos kirim, maupun penyebab lainnya,'
            },
            {
              id: 4,
              content:
                'Penjual sudah menyanggupi pengiriman order Barang, tetapi setelah batas waktu yang ditentukan ternyata Penjual tidak mengirimkan Barang hingga batas waktu yang telah ditentukan.'
            }
          ]
        },
        {
          id: 15,
          content:
            'Apabila terjadi proses pengembalian dana, maka pengembalian akan dilakukan melalui bank transfer sesuai dengan jumlah pengembalian dana.'
        },
        {
          id: 16,
          content:
            'Ebaba berwenang mengambil keputusan atas permasalahan-permasalahan transaksi yang belum terselesaikan akibat tidak adanya kesepakatan penyelesaian, baik antara Penjual dan Pembeli, dengan melihat bukti-bukti yang ada. Keputusan Ebaba adalah keputusan akhir yang tidak dapat diganggu gugat dan mengikat pihak Penjual dan Pembeli untuk mematuhinya.'
        },
        {
          id: 17,
          content:
            'Apabila Pembeli memilih menggunakan metode pembayaran transfer bank, maka total pembayaran akan ditambahkan kode unik untuk mempermudah proses verifikasi.'
        },
        {
          id: 18,
          content:
            'Pembeli wajib melakukan pembayaran dengan nominal yang sesuai dengan jumlah tagihan beserta kode unik (apabila ada) yang tertera pada halaman pembayaran. Ebaba tidak bertanggungjawab atas kerugian yang dialami Pembeli apabila melakukan pembayaran yang tidak sesuai dengan jumlah tagihan yang tertera pada halaman pembayaran.'
        },
        {
          id: 19,
          content: `Ebaba memiliki kewenangan melakukan perubahan status pemesanan menjadi "terkirim" apabila tidak ada pembaharuan status pengiriman dari kurir setelah 25 (duapuluhlima) hari sejak resi diinput oleh Penjual dan tidak ada konfirmasi lebih lanjut dari pihak Pembeli perihal barang pesanan. Kemudian dalam jangka waktu 5 (lima) hari sejak perubahan status tersebut diatas, Ebaba memberikan kesempatan kepada pihak Pembeli untuk melakukan (i) konfirmasi penerimaan barang atau (ii) Komplain. Jika dalam jangka waktu 5 hari tersebut tidak ada konfirmasi penerimaan barang atau komplain apapun dari Pembeli, maka Ebaba memiliki kewenangan untuk menyelesaikan transaksi dan meneruskan dana kepada Penjual bersangkutan yang dianggap telah melakukan kewajibannya mengirimkan barang dan menginformasikan nomor resi pengiriman. Penyesuaian status pemesanan ini hanya akan dilakukan apabila alamat tujuan pengiriman yang tertera pada invoice pemesanan dan resi kurir telah sesuai.`
        },
        {
          id: 20,
          content:
            'Pembeli memahami sepenuhnya dan menyetujui bahwa invoice yang diterbitkan adalah atas nama Penjual.'
        }
      ]
    }
  },
  {
    ITEM: {
      title: 'Transaksi Penjualan',
      list: [
        {
          id: 1,
          content: `Penjual dilarang melakukan penjualan/penawaran Produk terlarang sesuai dengan yang telah ditetapkan pada ketentuan "Jenis Barang".`
        },
        {
          id: 2,
          content:
            'Penjual wajib memberikan foto dan informasi produk dengan lengkap dan jelas sesuai dengan kondisi dan kualitas produk yang dijualnya. Apabila terdapat ketidaksesuaian antara foto dan informasi produk yang diunggah oleh Penjual dengan produk yang diterima oleh Pembeli, maka Ebaba berhak membatalkan/menahan dana transaksi.'
        },
        {
          id: 3,
          content:
            'Dalam menggunakan Fasilitas "Judul Produk", "Foto Produk", "Catatan" dan "Deskripsi Produk", Penjual dilarang membuat peraturan bersifat klausula baku yang tidak memenuhi peraturan perundang-undangan yang berlaku di Indonesia, termasuk namun tidak terbatas pada (i) tidak menerima komplain, (ii) tidak menerima retur (penukaran barang), (iii) tidak menerima refund (pengembalian dana), (iv) barang tidak bergaransi, (v) pengalihan tanggung jawab (termasuk tidak terbatas pada penanggungan ongkos kirim), (vi) penyusutan nilai harga dan (vii) pengiriman barang acak secara sepihak. Jika terdapat pertentangan antara catatan akun dan/atau deskripsi produk dengan Syarat & Ketentuan Ebaba, maka peraturan yang berlaku adalah Syarat & Ketentuan Ebaba.'
        },
        {
          id: 4,
          content:
            'Penjual wajib memberikan balasan untuk menerima atau menolak pesanan Barang pihak Pembeli dalam batas waktu 2 hari terhitung sejak adanya notifikasi pesanan Barang dari Ebaba. Jika dalam batas waktu tersebut tidak ada balasan dari Penjual maka secara otomatis pesanan dianggap dibatalkan.'
        },
        {
          id: 5,
          content:
            'Penjual wajib memasukan nomor resi pengiriman Barang dalam batas waktu 4 x 24 jam (tidak termasuk hari Sabtu/Minggu/libur Nasional) terhitung sejak adanya notifikasi pesanan Barang dari Ebaba. Jika dalam batas waktu tersebut pihak Penjual tidak memasukan nomor resi pengiriman Barang maka secara otomatis pesanan dianggap dibatalkan. Jika Penjual tetap mengirimkan Barang setelah melebihi batas waktu pengiriman sebagaimana dijelaskan diatas, maka Penjual memahami bahwa transaksi akan tetap dibatalkan untuk kemudian Penjual dapat melakukan penarikan Barang pada kurir tempat Barang dikirimkan.'
        },
        {
          id: 6,
          content:
            'Penjual memahami dan menyetujui bahwa pembayaran atas harga Barang dan ongkos kirim (diluar biaya transfer / administrasi) akan dikembalikan sepenuhnya ke Pembeli apabila transaksi dibatalkan dan/atau transaksi tidak berhasil dan/atau ketentuan lain yang diatur dalam Syarat & Ketentuan Poin 4. N.'
        },
        {
          id: 7,
          content:
            'Dalam keadaan Penjual hanya dapat memenuhi sebagian dari jumlah Barang yang dipesan oleh Pembeli, maka Penjual wajib memberikan keterangan kepada Ebaba sebelum menerima pesanan dimaksud. Pembeli memiliki kewenangan penuh untuk menyetujui melanjutkan transaksi/membatalkan transaksi dan Penjual dilarang melanjutkan transaksi tanpa mendapat persetujuan dari Pembeli. Apabila telah disetujui ulang oleh Pembeli sesuai dengan jumlah pesanan yang disanggupi oleh Penjual, maka selisih dana total harga Barang akan dikembalikan kepada pihak Pembeli. Namun apabila penjual tetap melanjutkan transaksi tersebut tanpa persetujuan dari Pembeli, maka Penjual menyetujui bahwa hal ini akan menjadi tanggung jawab Penjual sepenuhnya (termasuk namun tidak terbatas pada pengembalian ongkos kirim kepada Pembeli).'
        },
        {
          id: 8,
          content:
            'Ebaba memiliki kewenangan untuk menahan pembayaran dana di Rekening Resmi Ebaba sampai waktu yang tidak ditentukan apabila terdapat permasalahan dan klaim dari pihak Pembeli terkait proses pengiriman dan kualitas Barang. Pembayaran baru akan dilanjut kirimkan kepada Penjual apabila permasalahan tersebut telah selesai dan/atau Barang telah diterima oleh Pembeli.'
        },
        {
          id: 9,
          content:
            'Ebaba berwenang untuk membatalkan dan/atau menahan dana transaksi dalam hal: (i) Nomor resi kurir pengiriman barang yang diberikan oleh Penjual tidak sesuai dan/atau diduga tidak sesuai dengan transaksi yang terjadi di Situs Ebaba; (ii) Penjual mengirimkan barang melalui jasa kurir/logistik selain dari yang disediakan dan terhubung dengan Situs Ebaba; (iii) jika nama produk dan deskripsi produk tidak sesuai/tidak jelas dengan produk yang dikirim; (iv) jika ditemukan adanya manipulasi transaksi.'
        },
        {
          id: 10,
          content:
            'Penjual memahami dan menyetujui bahwa Pajak Penghasilan Penjual akan dilaporkan dan diurus sendiri oleh masing-masing Penjual sesuai dengan ketentuan pajak yang berlaku di peraturan perundang-undangan di Indonesia.'
        },
        {
          id: 11,
          content:
            'Ebaba berwenang mengambil keputusan atas permasalahan-permasalahan transaksi yang belum terselesaikan akibat tidak adanya kesepakatan penyelesaian, baik antara Penjual dan Pembeli, dengan melihat bukti-bukti yang ada. Keputusan Ebaba adalah keputusan akhir yang tidak dapat diganggu gugat dan mengikat pihak Penjual dan Pembeli untuk mematuhinya.'
        },
        {
          id: 12,
          content:
            'Apabila disepakati oleh Penjual dan Pembeli, penggunaan jasa Logistik yang berbeda dari pilihan awal pembeli dapat dilakukan (dengan ketentuan bahwa tarif pengiriman tersebut adalah dibawah tarif pengiriman awal).'
        },
        {
          id: 13,
          content:
            'Ebaba berwenang memotong kelebihan tarif pengiriman dari dana pembayaran pembeli dan mengembalikan selisih kelebihan tarif pengiriman kepada pembeli.'
        },
        {
          id: 14,
          content:
            'Penjual memahami sepenuhnya dan menyetujui bahwa invoice yang diterbitkan adalah atas nama Penjual.'
        }
      ]
    }
  },
  {
    ITEM: {
      title: 'Harga',
      list: [
        {
          id: 1,
          content: `Harga Barang yang terdapat dalam situs Ebaba adalah harga yang ditetapkan oleh Penjual. Penjual dilarang memanipulasi harga barang dengan cara apapun.`
        },
        {
          id: 2,
          content:
            'Penjual dilarang menetapkan harga yang tidak wajar pada Barang yang ditawarkan melalui Situs Ebaba. Ebaba berhak untuk melakukan tindakan pemeriksaan, penundaan, atau penurunan konten atas dasar penetapan harga yang tidak wajar.'
        },
        {
          id: 3,
          content: `Pembeli memahami dan menyetujui bahwa kesalahan keterangan harga dan informasi lainnya yang disebabkan tidak terbaharuinya halaman situs Ebaba dikarenakan browser/ISP yang dipakai Pembeli adalah tanggung jawab Pembeli.`
        },
        {
          id: 4,
          content:
            'Penjual memahami dan menyetujui bahwa kesalahan ketik yang menyebabkan keterangan harga atau informasi lain menjadi tidak benar/sesuai adalah tanggung jawab Penjual. Perlu diingat dalam hal ini, apabila terjadi kesalahan pengetikan keterangan harga Barang yang tidak disengaja, Penjual berhak menolak pesanan Barang yang dilakukan oleh pembeli.'
        },
        {
          id: 5,
          content:
            'Pengguna memahami dan menyetujui bahwa setiap masalah dan/atau perselisihan yang terjadi akibat ketidaksepahaman antara Penjual dan Pembeli tentang harga bukanlah merupakan tanggung jawab Ebaba.'
        },
        {
          id: 6,
          content:
            'Dengan melakukan pemesanan melalui Ebaba, Pengguna menyetujui untuk membayar total biaya yang harus dibayarkan sebagaimana tertera dalam halaman pembayaran, yang terdiri dari harga barang, ongkos kirim, dan biaya-biaya lain yang mungkin timbul dan akan diuraikan secara tegas dalam halaman pembayaran. Pengguna setuju untuk melakukan pembayaran melalui metode pembayaran yang telah dipilih sebelumnya oleh Pengguna.'
        },
        {
          id: 7,
          content:
            'Batasan harga maksimal satuan untuk Barang yang dapat ditawarkan adalah Rp. 100.000.000,-'
        },
        {
          id: 8,
          content:
            'Situs Ebaba untuk saat ini hanya melayani transaksi jual beli Barang dalam mata uang Rupiah.'
        }
      ]
    }
  },
  {
    ITEM: {
      title: 'Tarif Pengiriman',
      content: `Pembeli memahami dan mengerti bahwa Ebaba telah melakukan usaha sebaik mungkin dalam memberikan informasi tarif pengiriman kepada Pembeli berdasarkan lokasi secara akurat, namun Ebaba tidak dapat menjamin keakuratan data tersebut dengan yang ada pada cabang setempat.
  Karena itu Ebaba menyarankan kepada Penjual untuk mencatat terlebih dahulu tarif yang diberikan Ebaba, agar dapat dibandingkan dengan tarif yang dibebankan di cabang setempat. Apabila mendapati perbedaan, mohon sekiranya untuk menginformasikan kepada kami melalui menu contact us dengan memberikan data harga yang didapat beserta kota asal dan tujuan, agar dapat kami telusuri lebih lanjut.
  Pengguna memahami dan menyetujui bahwa selisih biaya pengiriman Barang adalah di luar tanggung jawab Ebaba, dan oleh karena itu, adalah kebijakan Penjual sendiri untuk membatalkan atau tetap melakukan pengiriman Barang.
  `
    }
  },
  {
    ITEM: {
      title: 'Jenis Barang',
      list: [
        {
          id: 1,
          content:
            'Jenis-jenis Barang yang dilarang untuk diperdagangkan oleh Penjual pada Situs Ebaba:',
          child: [
            {
              id: 1,
              content:
                'Segala jenis obat-obatan maupun zat-zat lain yang dilarang ataupun dibatasi peredarannya menurut ketentuan hukum yang berlaku, termasuk namun tidak terbatas pada ketentuan Undang-Undang Narkotika, Undang-Undang Psikotropika, dan Undang-Undang Kesehatan. Termasuk pula dalam ketentuan ini ialah obat keras, obat-obatan yang memerlukan resep dokter, obat bius dan sejenisnya, atau obat yang tidak memiliki izin edar dari Badan Pengawas Obat dan Makanan (BPOM).'
            },
            {
              id: 2,
              content:
                'Kosmetik dan makanan minuman yang membahayakan keselamatan penggunanya, ataupun yang tidak mempunyai izin edar dari Badan Pengawas Obat dan Makanan (BPOM).'
            },
            {
              id: 3,
              content:
                'Bahan yang diklasifikasikan sebagai Bahan Berbahaya menurut Peraturan Menteri Perdagangan yang berlaku.'
            }
          ]
        },
        {
          id: 2,
          content:
            'Segala jenis Barang lain yang bertentangan dengan peraturan pengiriman Barang Indonesia.'
        },
        {
          id: 3,
          content:
            'Barang-Barang lain yang melanggar ketentuan hukum yang berlaku di Indonesia.'
        }
      ]
    }
  },
  {
    ITEM: {
      title: 'Promo',
      list: [
        {
          id: 1,
          content:
            'Ebaba sewaktu-waktu dapat mengadakan kegiatan promosi (selanjutnya disebut sebagai “Promo”) dengan Syarat dan Ketentuan yang mungkin berbeda pada masing-masing kegiatan Promo. Pengguna dihimbau untuk membaca dengan seksama Syarat dan Ketentuan Promo tersebut.'
        },
        {
          id: 2,
          content:
            'Ebaba berhak, tanpa pemberitahuan sebelumnya, melakukan tindakan-tindakan yang diperlukan termasuk namun tidak terbatas pada menarik subsidi atau cashback, pencabutan Promo, membatalkan transaksi, menahan dana, menutup akun, serta hal-hal lainnya jika ditemukan adanya manipulasi, penggunaan resi yang tidak valid pada mayoritas transaksi, pelanggaran maupun pemanfaatan Promo untuk keuntungan pribadi Pengguna, maupun indikasi kecurangan atau pelanggaran pelanggaran Syarat dan Ketentuan Ebaba dan ketentuan hukum yang berlaku di wilayah negara Indonesia.'
        },
        {
          id: 3,
          content:
            'Setiap Promo Ebaba tidak berlaku untuk untuk penggunaan resi yang diinput lebih dari 1 (satu) kali, jika ditemukan penginputan resi sebanyak 2 (dua) kali, manfaat promo hanya akan diberikan pada transaksi yang dibentuk oleh pembeli pertama. Benefit promo tidak dapat diteruskan pada transaksi dropshipper (pembeli kedua).'
        }
      ]
    }
  },
  {
    ITEM: {
      title: 'Pengiriman Barang',
      list: [
        {
          id: 1,
          content:
            'Pengguna memahami dan menyetujui bahwa setiap permasalahan yang terjadi pada saat proses pengiriman Barang oleh penyedia jasa layanan pengiriman Barang adalah merupakan tanggung jawab penyedia jasa layanan pengiriman.'
        },
        {
          id: 2,
          content:
            'Penjual wajib memenuhi ketentuan yang ditetapkan oleh jasa layanan pengiriman barang tersebut dan bertanggung jawab atas setiap Barang yang dikirimkan.'
        },
        {
          id: 3,
          content:
            'Setiap ketentuan berkenaan dengan proses pengiriman Barang adalah wewenang sepenuhnya penyedia jasa layanan pengiriman Barang.'
        },
        {
          id: 4,
          content:
            'Pengiriman Barang dalam sistem Ebaba wajib menggunakan jasa perusahaan ekspedisi yang telah mendapatkan verifikasi rekanan Ebaba yang dipilih oleh Pembeli.'
        },
        {
          id: 5,
          content:
            'Penjual dilarang memberlakukan promosi / sistem bebas ongkos kirim pada setiap Barang yang dijual di dalam Situs Ebaba.'
        },
        {
          id: 6,
          content:
            'Dalam hal diperlukan untuk dilakukan proses pengembalian barang, maka Pengguna, baik Penjual maupun Pembeli, diwajibkan untuk melakukan pengiriman barang langsung ke masing-masing Pembeli maupun Penjual. Ebaba tidak menerima pengembalian atau pengiriman barang atas transaksi yang dilakukan oleh Pengguna dalam kondisi apapun.'
        }
      ]
    }
  },
  {
    ITEM: {
      title: 'Penolakan Jaminan dan Batasan Tanggung Jawab',
      content: `Pengguna memahami bahwa batasan tanggung jawab Ebaba secara proporsional adalah sebagai penyedia jasa portal web. Ebaba selalu berupaya untuk menjaga Layanan Ebaba aman, nyaman, dan berfungsi dengan baik, tapi kami tidak dapat menjamin operasi terus-menerus atau akses ke Layanan kami dapat selalu sempurna. Informasi dan data dalam situs Ebaba memiliki kemungkinan tidak terjadi secara real time. Pengguna setuju bahwa Anda memanfaatkan Layanan Ebaba atas risiko Pengguna sendiri, dan Layanan Ebaba diberikan kepada Anda pada "SEBAGAIMANA ADANYA" dan "SEBAGAIMANA TERSEDIA".Sejauh diizinkan oleh hukum yang berlaku, Ebaba (termasuk Induk Perusahaan, direktur, dan karyawan) adalah tidak bertanggung jawab, dan Anda setuju untuk tidak menuntut Ebaba bertanggung jawab, atas segala kerusakan atau kerugian (termasuk namun tidak terbatas pada hilangnya uang, reputasi, keuntungan, atau kerugian tak berwujud lainnya) termasuk namun tidak terbatas pada jaminan informasi, konten, materi, produk atau Layanan lainnya termasuk dalam atau dibuat kepada Pengguna melalui Layanan Ebaba, server Ebaba atau komunikasi elektronik yang dikirim dari Ebaba bebas dari virus atau komponen berbahaya lainnya, yang diakibatkan secara langsung, tidak langsung, insidentil, sebab-akibat atau yang lainnya.`
    }
  },
  {
    ITEM: {
      title: 'Pelepasan',
      content: `Jika Anda memiliki perselisihan dengan satu atau lebih pengguna, Anda melepaskan Ebaba (termasuk Induk Perusahaan, Direktur, dan karyawan) dari klaim dan tuntutan atas kerusakan dan kerugian (aktual dan tersirat) dari setiap jenis dan sifatnya , yang dikenal dan tidak dikenal, yang timbul dari atau dengan cara apapun berhubungan dengan sengketa tersebut. Dengan demikian maka Pengguna dengan sengaja melepaskan segala perlindungan hukum (yang terdapat dalam undang-undang atau peraturan hukum yang lain) yang akan membatasi cakupan ketentuan pelepasan ini.`
    }
  },
  {
    ITEM: {
      title: 'Ketidakabsahan',
      content: `Jika bagian manapun dalam Syarat dan Ketentuan ini menjadi tidak sah atau tidak dapat diterapkan karena peraturan perundang-undangan yang berlaku, maka Pengguna sepakat bahwa ketidakberlakuan tersebut tidak akan mempengaruhi seluruh bagian lainnya dari Syarat dan Ketentuan ini, Ebaba akan berusaha untuk mengganti ketentuan tersebut sehingga menjadi sah dan tidak melanggar ketentuan hukum untuk dapat mencerminkan tujuan dari ketentuan yang tidak absah tersebut. `
    }
  },
  {
    ITEM: {
      title: 'Ganti Rugi',
      content: `Pengguna akan melepaskan Ebaba dari tuntutan ganti rugi dan menjaga Ebaba (termasuk Induk Perusahaan, direktur, dan karyawan) dari setiap klaim atau tuntutan, termasuk biaya hukum yang wajar, yang dilakukan oleh pihak ketiga yang timbul dalam hal Anda melanggar Perjanjian ini, penggunaan Layanan Ebaba yang tidak semestinya dan/ atau pelanggaran Anda terhadap hukum atau hak-hak pihak ketiga.`
    }
  },
  {
    ITEM: {
      title: 'Pilihan Hukum',
      content: `Perjanjian ini akan diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia, tanpa memperhatikan pertentangan aturan hukum. Anda setuju bahwa tindakan hukum apapun atau sengketa yang mungkin timbul dari, berhubungan dengan, atau berada dalam cara apapun berhubungan dengan situs dan/atau Perjanjian ini akan diselesaikan secara eksklusif dalam yurisdiksi pengadilan Republik Indonesia yang berwenang.`
    }
  },
  {
    ITEM: {
      title: 'Kebijakan dan Perubahan Pembaharuan',
      content: `Ebaba berhak untuk membuat perubahan dan/atau pembaharuan pada situs, kebijakan, Syarat & ketentuan ini dari waktu ke waktu tanpa pemberitahuan sebelumnya. Seluruh perubahan, penambahan, penghapusan, modifikasi dan lainnya yang Ebaba lakukan sehubungan dengan layanan tersebut akan berlaku secara otomatis dalam jangka waktu 1 x 24 jam setelah diunduh. Ebaba menyarankan agar anda membaca secara seksama dan memeriksa halaman Syarat & ketentuan ini dari waktu ke waktu untuk mengetahui perubahan apapun. Dengan tetap mengakses dan menggunakan layanan Ebaba, maka pengguna dianggap menyetujui perubahan-perubahan dalam Syarat & ketentuan.`
    }
  }
];
