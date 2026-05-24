# Dokumentasi Proyek — Clash of BaNG

**Nama Proyek:** Clash of BaNG  
**Nama Pembuat:** Muhammad Ghani Fabihaziq  
**Tahun:** 2026  
**Repository:** https://github.com/ghanisiapfullstack/Clash-Of-Bang  

---

## 1. Deskripsi Aplikasi

Clash of BaNG adalah website fan community berbasis tema dark fantasy strategy game yang terinspirasi dari universe Clash-style. Website ini dibangun sebagai platform untuk menampilkan informasi komunitas, koleksi galeri visual, data pasukan (troops), serta formulir pendaftaran anggota baru.

Website ini sepenuhnya dibangun menggunakan **HTML, CSS, dan JavaScript vanilla** tanpa menggunakan framework atau library CSS eksternal seperti Bootstrap.

---

## 2. Struktur Halaman

Website terdiri dari **5 halaman utama** yang saling terhubung melalui navigasi:

| Halaman | File | Deskripsi |
|---|---|---|
| Home | `index.html` | Halaman utama dengan hero section, carousel update, brief info, dan popular troops |
| Gallery | `gallery.html` | Menampilkan 9 kartu galeri visual dari universe BaNG |
| Troops | `troops.html` | Menampilkan 8 kartu pasukan beserta statistik HP, DPS, dan DMG |
| About | `about.html` | Sejarah komunitas, profil founder, regional hubs, fitur komunitas, dan stats bar |
| Register | `register.html` | Formulir pendaftaran anggota dengan validasi input |

---

## 3. Struktur File Proyek

```
clash-of-bang/
├── index.html          # Halaman Home
├── gallery.html        # Halaman Gallery
├── troops.html         # Halaman Troops
├── about.html          # Halaman About
├── register.html       # Halaman Register
├── css/
│   └── style.css       # Seluruh styling aplikasi (vanilla CSS)
├── js/
│   ├── carousel.js     # Logika carousel pada section Latest Updates
│   └── register.js     # Validasi form pendaftaran
└── images/
    ├── hero-bg.jpg         # Background hero section
    ├── update1-3.jpg       # Gambar kartu Latest Updates
    ├── gallery1-9.jpg      # Gambar kartu Gallery
    ├── troop1-8.jpg        # Gambar kartu Troops (grid)
    ├── troop-archer.jpg    # Gambar Popular Troops (home)
    ├── troop-cavalry.jpg   # Gambar Popular Troops (home)
    ├── troop-hedge.jpg     # Gambar Popular Troops (home)
    └── ghani.jpeg          # Foto founder (About page)
```

---

## 4. Penjelasan Per Halaman

### 4.1 Home (`index.html`)

Halaman utama yang terdiri dari empat section:

- **Hero Section** — Menampilkan background fullscreen dengan overlay gradient, judul besar, deskripsi singkat, dan tombol "EXPLORE" yang mengarah ke section updates.
- **Latest Updates (Carousel)** — Menampilkan 3 kartu berita/update terbaru dalam format carousel yang dapat digeser menggunakan tombol panah kiri dan kanan. Carousel responsif: menampilkan 3 kartu di desktop dan 1 kartu di mobile.
- **Brief Info** — Penjelasan singkat tentang komunitas Clash of BaNG disertai 3 statistik utama (Active Players, Regional Hubs, Countries Reached).
- **Popular Troops** — Menampilkan 3 kartu pasukan populer (Cavalry, Archer, Hedge Pudge) dengan statistik Attack dan Defense.

### 4.2 Gallery (`gallery.html`)

Menampilkan 9 kartu galeri dalam grid 3 kolom. Setiap kartu berisi gambar, nama karakter/lokasi, dan deskripsi singkat. Gambar memiliki efek zoom halus saat di-hover.

### 4.3 Troops (`troops.html`)

Menampilkan 8 kartu pasukan dalam grid 4 kolom. Setiap kartu menampilkan:
- Gambar pasukan
- Nama dan subtitle kelas pasukan
- Statistik: HP (Hitpoints), DPS, DMG (Damage)
- Hover overlay yang menampilkan statistik secara lebih besar di atas gambar

Daftar pasukan: Iron Fist, Archers, Cavalry, Swordsman, Orc, Spearman, Mighty Knight, Axeman.

### 4.4 About (`about.html`)

Terdiri dari empat section:

- **History** — Narasi sejarah komunitas dari 2018 hingga 2024, ditampilkan dalam milestone box per tahun. Di sisi kanan terdapat foto founder (Muhammad Ghani Fabihaziq) dan daftar Regional Hubs (Jakarta, Bandung, Sanur).
- **Community** — Penjelasan fitur komunitas dengan ikon centang: Live Tournaments, Strategy Tips, Dark Troop Guides, Fan Art & Lore.
- **Stats Bar** — Empat statistik besar: 5000K+ Active Players, 120+ Countries Reached, 3 Regional Hubs, 12 Major Updates.

### 4.5 Register (`register.html`)

Formulir pendaftaran anggota dengan field:

| Field | Tipe | Validasi |
|---|---|---|
| Full Name | Text | Wajib diisi, minimal 3 karakter |
| Email Address | Email | Wajib diisi, format email valid (ada `@` dan `.`) |
| Gender | Radio | Wajib dipilih (Male / Female) |
| Member Age | Number | Wajib diisi, angka bulat, rentang 13–99 |
| Favorite Troop | Select | Wajib dipilih dari 8 opsi pasukan |
| Reason to Join | Textarea | Wajib diisi, minimal 20 karakter |

Jika semua validasi lolos, muncul alert konfirmasi dan form direset. Pesan error ditampilkan di bawah masing-masing field menggunakan class `.visible` tanpa inline style.

---

## 5. Fitur Teknis

### CSS (`css/style.css`)
- Menggunakan **CSS Custom Properties (variables)** untuk warna tema (gold, orange, black, grey).
- Tidak menggunakan library CSS eksternal — seluruh styling ditulis manual.
- Responsif dengan dua breakpoint:
  - **Tablet** (`769px – 1024px`): Grid berubah menjadi 2 kolom, ukuran font dikurangi.
  - **Mobile** (`≤ 768px`): Layout berubah menjadi single column, header stack vertikal.

### JavaScript — Carousel (`js/carousel.js`)
- Mendeteksi jumlah kartu yang terlihat berdasarkan lebar layar (`getVisibleCount()`).
- Menggeser carousel menggunakan `transform: translateX()`.
- Carousel bersifat **looping** — setelah kartu terakhir, kembali ke awal, dan sebaliknya.
- Event listener `resize` memastikan posisi carousel tetap benar saat ukuran layar berubah.

### JavaScript — Form Validation (`js/register.js`)
- Validasi dilakukan saat form di-submit (`e.preventDefault()`).
- Tidak menggunakan regex — validasi email dilakukan secara manual dengan `indexOf()`.
- Error ditampilkan dengan menambahkan class `.visible` pada elemen `.form-error`.
- Semua error dibersihkan (`clearErrors()`) setiap kali form di-submit ulang.

---

## 6. Desain Visual

- **Tema warna:** Hitam gelap (`#0b0b0b`) sebagai background utama, emas (`#c8922a`) sebagai aksen, oranye (`#e07820`) untuk tombol CTA.
- **Tipografi:** Arial / Helvetica Neue (system font).
- **Efek hover:** Zoom gambar (`scale(1.04)`), perubahan warna link, shadow pada kartu troops.
- **Header:** Transparan di halaman Home (overlay di atas hero), sticky dan gelap di halaman lainnya.

---

## 7. Cara Menjalankan

Tidak memerlukan instalasi atau build tool. Cukup buka file `index.html` di browser, atau jalankan melalui Live Server di VS Code.

```
Buka: index.html
```

Semua aset (CSS, JS, gambar) menggunakan path relatif sehingga langsung berjalan secara lokal.
