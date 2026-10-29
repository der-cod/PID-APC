# Simulator Tuning PID dan Pengantar APC (PWA, tanpa login)

Versi terbuka: langsung masuk ke aplikasi tanpa login. Bisa dipasang di HP atau PC dan tetap berjalan offline setelah dibuka sekali.

## Isi folder
`index.html`, `manifest.webmanifest`, `sw.js`, `pwa.js`, `icons/`

## Pasang di GitHub Pages
1. Buat repository baru di GitHub (misalnya `simulator-pid`).
2. Upload **isi** folder ini (bukan folder pembungkusnya) ke branch `main`, sehingga `index.html` ada di root repository.
3. Settings, Pages, Source: Deploy from a branch, Branch: `main`, folder `/ (root)`, Save.
4. Alamatnya `https://<username>.github.io/<nama-repo>/`. Buka di Chrome/Edge/Safari lalu pilih Install atau Add to Home Screen.

Setiap kali mengganti file, naikkan nilai `CACHE` di `sw.js` (misalnya `pidsim-nologin-v2`) agar pengguna mendapat versi terbaru.
