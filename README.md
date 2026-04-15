# Portofolio Fadhil Zakki Zulva

Website portofolio pribadi — dark theme, one-page, mobile friendly.

---

## Struktur Folder

```
portfolio/
│
├── index.html              ← File utama, jangan diubah isinya
│
├── css/
│   └── style.css           ← Semua tampilan (warna, font, layout)
│
├── js/
│   ├── data-loader.js      ← Membaca JSON dan merender ke halaman
│   └── main.js             ← Interaksi UI (navbar, animasi, form)
│
├── data/                   ← ✏️  EDIT FILE INI UNTUK UPDATE KONTEN
│   ├── profile.json        ← Nama, bio, sosmed, tools, about
│   ├── skills.json         ← Daftar skill dan persentase
│   ├── projects.json       ← Daftar proyek
│   └── experience.json     ← Riwayat pendidikan & pengalaman
│
├── assets/
│   ├── images/
│   │   ├── profile.jpg     ← ✏️  Ganti dengan foto kamu
│   │   └── projects/
│   │       ├── lan-simulation.jpg   ← Thumbnail proyek 1
│   │       ├── wo-media.jpg         ← Thumbnail proyek 2
│   │       └── bogor-ref.jpg        ← Thumbnail proyek 3
│   ├── videos/             ← Taruh video demo proyek di sini
│   ├── icons/              ← favicon dan icon lain
│   └── fonts/              ← Font lokal (kalau tidak pakai Google Fonts)
│
└── pages/                  ← Halaman tambahan (opsional, misal blog)
```

---

## Cara Update Konten

### Ubah data pribadi (nama, bio, sosmed, dll)
Edit `data/profile.json`

### Tambah / ubah skill
Edit `data/skills.json` — ubah `percent` sesuai kemampuan kamu (0–100)

### Tambah proyek baru
Edit `data/projects.json` — copy salah satu blok `{ }` dan ganti isinya:
```json
{
  "title": "Nama Proyek",
  "description": "Deskripsi singkat proyek kamu.",
  "image": "assets/images/projects/nama-file.jpg",
  "tags": ["Tag1", "Tag2"],
  "icon": "server",
  "link": "https://github.com/fadhil-zakki/nama-repo"
}
```
Icon yang tersedia: `server`, `terminal`, `shield`, `code`, `globe`, `github`, `heart`, `layers`

### Tambah pengalaman baru
Edit `data/experience.json` — copy blok dan ganti isinya.
`accentColor` bisa diisi warna hex apa saja, contoh: `"#6c63ff"`

### Ganti foto profil
Taruh foto kamu di `assets/images/profile.jpg`
(format .jpg atau .png, ukuran ideal 400x400 px)

### Tambah thumbnail proyek
Taruh gambar di `assets/images/projects/` lalu update field `"image"` di `projects.json`

### Ganti warna tema
Buka `css/style.css`, cari bagian `:root` di baris paling atas:
```css
--accent:  #6c63ff;   /* warna utama */
--accent2: #3ecfac;   /* warna aksen */
```
Ganti angka hex-nya sesuka kamu.

---

## Cara Jalankan

### Di komputer / home server (lokal)
Karena website ini membaca file JSON, butuh web server sederhana.

**Pakai Python (paling gampang):**
```bash
cd portfolio
python3 -m http.server 8080
```
Buka browser: `http://localhost:8080`

**Pakai VS Code:**
Install ekstensi "Live Server" → klik kanan `index.html` → Open with Live Server

**Di home server (Nginx/Apache):**
Copy seluruh folder `portfolio/` ke `/var/www/html/` atau document root server kamu.

### Deploy ke GitHub Pages (gratis)
1. Buat repository baru di GitHub (nama: `fadhil-zakki.github.io`)
2. Upload seluruh isi folder `portfolio/` ke repository
3. Masuk Settings → Pages → Source: `main` branch → `/root`
4. Website live di: `https://fadhil-zakki.github.io`

---

## Catatan Penting
- File JSON **tidak bisa** dibuka langsung dengan dobel klik `index.html` di Windows/Mac karena browser blokir fetch lokal. Harus pakai web server (Python atau Live Server).
- Kalau di GitHub Pages atau home server, langsung jalan normal.

---

© 2025 Fadhil Zakki Zulva
