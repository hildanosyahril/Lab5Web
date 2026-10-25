// ==========================================
// 1. Ubah Latihan 3: Terima dua nilai dari prompt dan konversi ke number
// ==========================================
function eksperimen1() {
    const input1 = prompt("Masukkan angka pertama:");
    const input2 = prompt("Masukkan angka kedua:");

    // Mengonversi input string dari prompt menjadi tipe data Number
    const a = Number(input1);
    const b = Number(input2);

    if (input1 === null || input2 === null || input1.trim() === "" || input2.trim() === "" || Number.isNaN(a) || Number.isNaN(b)) {
        alert("Mohon masukkan angka yang valid!");
        return;
    }

    const hasilText = `
        Penjumlahan: ${a + b} | 
        Pengurangan: ${a - b} | 
        Perkalian: ${a * b} | 
        Pembagian: ${b !== 0 ? (a / b).toFixed(2) : "Tidak dapat dibagi nol"} | 
        Modulus: ${a % b}
    `;

    document.getElementById("hasilEksperimen1").textContent = hasilText;
    console.log("--- Hasil Eksperimen 1 ---");
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}


// ==========================================
// 7. Perulangan untuk menampilkan tabel perkalian 7 dari 1 sampai 10
// ==========================================
function eksperimen7() {
    const wadahTabel = document.getElementById("tabelPerkalian");
    let htmlTabel = "<ol>";

    console.log("--- Tabel Perkalian 7 ---");
    for (let i = 1; i <= 10; i++) {
        const hasil = 7 * i;
        console.log(`7 x ${i} = ${hasil}`);
        htmlTabel += `<li>7 x ${i} = <b>${hasil}</b></li>`;
    }

    htmlTabel += "</ol>";
    wadahTabel.innerHTML = htmlTabel;
}


// ==========================================
// 8. Function cekGenap(angka) yang mengembalikan true jika genap
// ==========================================
function cekGenap(angka) {
    return angka % 2 === 0;
}

function tesCekGenap() {
    const inputVal = document.getElementById("inputGenap").value;
    const angka = Number(inputVal);
    const elemHasil = document.getElementById("hasilGenap");

    if (inputVal.trim() === "" || Number.isNaN(angka)) {
        elemHasil.textContent = "Masukkan angka yang valid!";
        return;
    }

    const statusGenap = cekGenap(angka);
    if (statusGenap) {
        elemHasil.textContent = `Angka ${angka} adalah TRUE (Bilangan Genap)`;
    } else {
        elemHasil.textContent = `Angka ${angka} adalah FALSE (Bilangan Ganjil)`;
    }
}


// ==========================================
// 9. Validasi form agar kolom tidak boleh kosong
// ==========================================
function validasiForm(event) {
    event.preventDefault(); // Mencegah reload halaman saat submit
    
    const nama = document.getElementById("namaInput").value;
    const pesanError = document.getElementById("pesanError");
    const pesanSukses = document.getElementById("pesanSukses");

    if (nama.trim() === "") {
        pesanError.textContent = "Kolom nama tidak boleh kosong!";
        pesanSukses.textContent = "";
        return false;
    } else {
        pesanError.textContent = "";
        pesanSukses.textContent = `Form berhasil dikirim! Selamat datang, ${nama}.`;
        return true;
    }
}


// ==========================================
// 10. Latihan 8 + Tambah Minimal 2 Pilihan Menu dan Harga
// ==========================================
const daftarMenu = document.querySelectorAll(".menu-makanan");
daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotalMenu);
});

function hitungTotalMenu() {
    let total = 0;
    daftarMenu.forEach((item) => {
        if (item.checked) {
            total += Number(item.value);
        }
    });
    document.getElementById("totalHarga").textContent = total.toLocaleString("id-ID");
}


// ==========================================
// 11. Tombol untuk menyembunyikan atau menampilkan elemen HTML
// ==========================================
function toggleElemen() {
    const teks = document.getElementById("teksToggle");
    if (teks.style.display === "none") {
        teks.style.display = "block";
    } else {
        teks.style.display = "none";
    }
}
