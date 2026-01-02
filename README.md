# ✨ AI Chatbot (Aurora Edition)

Selamat datang di **AI Assistant Pro** – Chatbot cerdas dengan antarmuka futuristik "Aurora Holographic" dan persona yang ramah.

![AI Chatbot Preview](public/preview.png)

## 🌟 Fitur Utama

- **Antarmuka Premium**: Desain "Aurora Holographic" dengan warna neon gradient, efek kaca (glassmorphism), dan animasi yang halus.
- **Asisten Ramah**: AI diprogram dengan persona "Professional Muda" yang sopan, hangat, dan fasih berbahasa Indonesia.
- **Dukungan Rich Text**: Respon AI mendukung format **Bold**, *Italic*, `Code Block`, dan Daftar (List) yang rapi.
- **Animasi Interaktif**: Indikator "Sedang mengetik..." (typing indicator) dan transisi pesan yang memukau.

## 🛠️ Persyaratan Sistem

- **Node.js**: Versi 18+ (Disarankan versi terbaru).
- **Gemini API Key**: Kunci API dari Google AI Studio.

## 🚀 Cara Instalasi

Ikuti langkah-langkah berikut untuk menjalankan chatbot di komputer Anda:

1.  **Clone atau Download** folder proyek ini.
2.  Buka terminal/command prompt di dalam folder proyek.
3.  **Install Dependensi**:
    ```bash
    npm install
    ```
4.  **Konfigurasi Environment**:
    - Pastikan file `.env` sudah ada.
    - Isi `GEMINI_API_KEY` Anda di dalam file `.env`.
    ```env
    GEMINI_API_KEY=AIzaSy...
    PORT=4000
    ```

## 🎮 Cara Menggunakan

1.  **Jalankan Server**:
    Ketik perintah berikut di terminal:
    ```bash
    node app.js
    ```
2.  **Buka Aplikasi**:
    Buka browser (Chrome/Edge) dan kunjungi alamat:
    [http://localhost:4000](http://localhost:4000)
3.  **Mulai Mengobrol**:
    - Ketik pesan Anda di kolom input bawah.
    - Tekan **Enter** atau klik tombol **Kirim** (ikon pesawat kertas).
    - Tunggu sejenak hingga AI membalas dengan animasi mengetik.

## 💡 Tips
- Coba sapa dengan **"Halo"** atau **"Apa kabar?"**.
- Minta AI membuatkan sesuatu, misal: **"Buatkan daftar tips kesehatan"** atau **"Buatkan kode Javascript sederhana"**.

---
*Dibuat oleh Randi Saputra & AI Assistant*
